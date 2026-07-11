import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/session";
import { addTransaction, sendReminder } from "@/lib/actions";
import { FormError } from "@/components/FormError";

export default async function CustomerDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string; sent?: string }>;
}) {
  const { id } = await params;
  const { error, sent } = await searchParams;
  const session = await getSession();
  if (!session) redirect("/login");

  const customer = await prisma.customer.findFirst({
    where: { id, shopId: session.shopId },
    include: { transactions: { orderBy: { createdAt: "desc" } } },
  });

  if (!customer) {
    redirect("/dashboard?error=Customer%20not%20found");
  }

  const balance = customer.transactions.reduce((sum, t) => {
    if (t.type === "CREDIT") return sum + t.amount;
    if (t.type === "PAYMENT") return sum - t.amount;
    return sum;
  }, 0);

  async function recordCreditAction(formData: FormData) {
    "use server";
    formData.set("customerId", id);
    formData.set("type", "CREDIT");
    let errorMessage: string | null = null;
    try {
      await addTransaction(formData);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) redirect(`/customers/${id}?error=${encodeURIComponent(errorMessage)}`);
    redirect(`/customers/${id}`);
  }

  async function recordPaymentAction(formData: FormData) {
    "use server";
    formData.set("customerId", id);
    formData.set("type", "PAYMENT");
    let errorMessage: string | null = null;
    try {
      await addTransaction(formData);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) redirect(`/customers/${id}?error=${encodeURIComponent(errorMessage)}`);
    redirect(`/customers/${id}`);
  }

  async function sendReminderAction() {
    "use server";
    let errorMessage: string | null = null;
    try {
      await sendReminder(id);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) redirect(`/customers/${id}?error=${encodeURIComponent(errorMessage)}`);
    redirect(`/customers/${id}?sent=1`);
  }

  return (
    <main className="min-h-screen px-4 py-8 max-w-2xl mx-auto">
      <Link href="/dashboard" className="text-sm underline mb-6 inline-block">
        ← Back to dashboard
      </Link>

      <FormError message={error} />
      {sent && (
        <div
          className="text-sm rounded-lg px-3 py-2 mb-4"
          style={{ background: "rgba(5, 150, 105, 0.1)", color: "var(--accent)" }}
        >
          Reminder sent (or logged — see console if WhatsApp isn&apos;t configured yet).
        </div>
      )}

      <div className="card p-5 mb-6">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-xl font-bold">{customer.name}</h1>
          <span
            className="font-semibold"
            style={{ color: balance > 0 ? "var(--danger)" : "var(--accent)" }}
          >
            {balance > 0 ? `₹${balance.toFixed(2)} due` : "settled"}
          </span>
        </div>
        <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
          {customer.phone || "no phone on file"}
        </p>
        {balance > 0 && customer.phone && (
          <form action={sendReminderAction}>
            <button type="submit" className="btn-primary">
              Send WhatsApp reminder
            </button>
          </form>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="card p-4">
          <h2 className="font-semibold mb-3 text-sm">Give credit (udhaar)</h2>
          <form action={recordCreditAction} className="space-y-2">
            <input name="amount" type="number" step="0.01" min="0" required className="input" placeholder="Amount" />
            <input name="note" className="input" placeholder="Note (optional)" />
            <button type="submit" className="btn-primary w-full text-sm">
              Add credit
            </button>
          </form>
        </div>
        <div className="card p-4">
          <h2 className="font-semibold mb-3 text-sm">Record payment</h2>
          <form action={recordPaymentAction} className="space-y-2">
            <input name="amount" type="number" step="0.01" min="0" required className="input" placeholder="Amount" />
            <input name="note" className="input" placeholder="Note (optional)" />
            <button type="submit" className="btn-primary w-full text-sm">
              Add payment
            </button>
          </form>
        </div>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold mb-4">Transaction history</h2>
        {customer.transactions.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            No transactions yet.
          </p>
        ) : (
          <div className="space-y-2">
            {customer.transactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between text-sm py-1">
                <div>
                  <span
                    className="font-medium"
                    style={{ color: t.type === "PAYMENT" ? "var(--accent)" : "var(--danger)" }}
                  >
                    {t.type === "CREDIT" ? "Credit given" : t.type === "PAYMENT" ? "Payment received" : "Sale"}
                  </span>
                  {t.note && (
                    <span style={{ color: "var(--muted)" }}> — {t.note}</span>
                  )}
                </div>
                <div className="text-right">
                  <p>₹{t.amount.toFixed(2)}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {t.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
