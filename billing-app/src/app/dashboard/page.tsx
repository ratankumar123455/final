import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/session";
import { addCustomer, addTransaction, logout } from "@/lib/actions";
import { FormError } from "@/components/FormError";
import Link from "next/link";

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const session = await getSession();
  if (!session) redirect("/login");

  const shop = await prisma.shop.findUniqueOrThrow({ where: { id: session.shopId } });
  const customers = await prisma.customer.findMany({
    where: { shopId: shop.id },
    include: { transactions: true },
    orderBy: { createdAt: "desc" },
  });
  const todaysTransactions = await prisma.transaction.findMany({
    where: { shopId: shop.id, createdAt: { gte: startOfToday() } },
  });

  const sumByType = (type: "SALE" | "CREDIT" | "PAYMENT") =>
    todaysTransactions.filter((t) => t.type === type).reduce((s, t) => s + t.amount, 0);

  const todaysSales = sumByType("SALE");
  const todaysCreditGiven = sumByType("CREDIT");
  const todaysPayments = sumByType("PAYMENT");

  const customersWithBalance = customers.map((c) => {
    const balance = c.transactions.reduce((sum, t) => {
      if (t.type === "CREDIT") return sum + t.amount;
      if (t.type === "PAYMENT") return sum - t.amount;
      return sum;
    }, 0);
    return { ...c, balance };
  });

  const totalOutstanding = customersWithBalance.reduce((s, c) => s + Math.max(c.balance, 0), 0);

  async function addCustomerAction(formData: FormData) {
    "use server";
    let errorMessage: string | null = null;
    try {
      await addCustomer(formData);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) redirect(`/dashboard?error=${encodeURIComponent(errorMessage)}`);
    redirect("/dashboard");
  }

  async function addSaleAction(formData: FormData) {
    "use server";
    formData.set("type", "SALE");
    let errorMessage: string | null = null;
    try {
      await addTransaction(formData);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) redirect(`/dashboard?error=${encodeURIComponent(errorMessage)}`);
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen px-4 py-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{shop.name}</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {shop.phone}
          </p>
        </div>
        <form action={logout}>
          <button type="submit" className="text-sm underline">
            Log out
          </button>
        </form>
      </div>

      <FormError message={error} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <SummaryCard label="Today's sales" value={todaysSales} />
        <SummaryCard label="Credit given today" value={todaysCreditGiven} />
        <SummaryCard label="Payments received today" value={todaysPayments} />
        <SummaryCard label="Total outstanding" value={totalOutstanding} highlight />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card p-5">
          <h2 className="font-semibold mb-4">Add customer</h2>
          <form action={addCustomerAction} className="space-y-3">
            <input name="name" required className="input" placeholder="Customer name" />
            <input name="phone" type="tel" className="input" placeholder="Phone (for WhatsApp reminders)" />
            <button type="submit" className="btn-primary w-full">
              Add customer
            </button>
          </form>
        </div>

        <div className="card p-5">
          <h2 className="font-semibold mb-4">Record a cash sale</h2>
          <form action={addSaleAction} className="space-y-3">
            <input name="amount" type="number" step="0.01" min="0" required className="input" placeholder="Amount" />
            <input name="note" className="input" placeholder="Note (optional)" />
            <button type="submit" className="btn-primary w-full">
              Record sale
            </button>
          </form>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold mb-4">Customers</h2>
        {customersWithBalance.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            No customers yet. Add your first one above.
          </p>
        ) : (
          <div className="space-y-2">
            {customersWithBalance.map((c) => (
              <Link
                key={c.id}
                href={`/customers/${c.id}`}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-black/5"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {c.phone || "no phone on file"}
                  </p>
                </div>
                <span
                  className="font-semibold"
                  style={{ color: c.balance > 0 ? "var(--danger)" : "var(--accent)" }}
                >
                  {c.balance > 0 ? `₹${c.balance.toFixed(2)} due` : "settled"}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function SummaryCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="card p-4">
      <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
        {label}
      </p>
      <p
        className="text-xl font-bold"
        style={{ color: highlight ? "var(--danger)" : "var(--ink)" }}
      >
        ₹{value.toFixed(2)}
      </p>
    </div>
  );
}
