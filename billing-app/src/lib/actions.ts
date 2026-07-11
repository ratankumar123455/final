"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "./db";
import { setSessionCookie, clearSessionCookie, getSession } from "./session";
import { sendWhatsAppMessage, reminderMessage } from "./whatsapp";

// Note: these do NOT call redirect() themselves. redirect() works by throwing,
// so callers must invoke it outside of any try/catch around these functions.

export async function signup(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!name || !phone || password.length < 6) {
    throw new Error("Please fill all fields. Password must be at least 6 characters.");
  }

  const existing = await prisma.shop.findUnique({ where: { phone } });
  if (existing) {
    throw new Error("A shop with this phone number already exists. Try logging in.");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const shop = await prisma.shop.create({
    data: { name, phone, passwordHash },
  });

  await setSessionCookie(shop.id);
}

export async function login(formData: FormData): Promise<void> {
  const phone = String(formData.get("phone") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const shop = await prisma.shop.findUnique({ where: { phone } });
  if (!shop) {
    throw new Error("No shop found with this phone number.");
  }

  const valid = await bcrypt.compare(password, shop.passwordHash);
  if (!valid) {
    throw new Error("Incorrect password.");
  }

  await setSessionCookie(shop.id);
}

export async function logout() {
  await clearSessionCookie();
  redirect("/login");
}

async function requireShopId(): Promise<string> {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session.shopId;
}

export async function addCustomer(formData: FormData) {
  const shopId = await requireShopId();
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!name) {
    throw new Error("Customer name is required.");
  }

  await prisma.customer.create({
    data: { shopId, name, phone: phone || null },
  });

  revalidatePath("/dashboard");
}

export async function addTransaction(formData: FormData) {
  const shopId = await requireShopId();
  const customerId = String(formData.get("customerId") ?? "").trim() || null;
  const type = String(formData.get("type") ?? "");
  const amount = Number(formData.get("amount"));
  const note = String(formData.get("note") ?? "").trim() || null;

  if (!["SALE", "CREDIT", "PAYMENT"].includes(type)) {
    throw new Error("Invalid transaction type.");
  }
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Amount must be a positive number.");
  }
  if (type !== "SALE" && !customerId) {
    throw new Error("A customer is required for credit and payment entries.");
  }

  await prisma.transaction.create({
    data: {
      shopId,
      customerId,
      type: type as "SALE" | "CREDIT" | "PAYMENT",
      amount,
      note,
    },
  });

  revalidatePath("/dashboard");
  if (customerId) revalidatePath(`/customers/${customerId}`);
}

export async function sendReminder(customerId: string) {
  const shopId = await requireShopId();

  const customer = await prisma.customer.findFirst({
    where: { id: customerId, shopId },
    include: { transactions: true },
  });
  if (!customer) throw new Error("Customer not found.");
  if (!customer.phone) throw new Error("This customer has no phone number on file.");

  const shop = await prisma.shop.findUniqueOrThrow({ where: { id: shopId } });

  const balance = customer.transactions.reduce((sum, t) => {
    if (t.type === "CREDIT") return sum + t.amount;
    if (t.type === "PAYMENT") return sum - t.amount;
    return sum;
  }, 0);

  if (balance <= 0) {
    throw new Error("This customer has no outstanding balance.");
  }

  await sendWhatsAppMessage(customer.phone, reminderMessage(shop.name, customer.name, balance));
  revalidatePath(`/customers/${customerId}`);
}
