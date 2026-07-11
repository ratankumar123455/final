import Link from "next/link";
import { redirect } from "next/navigation";
import { signup } from "@/lib/actions";
import { FormError } from "@/components/FormError";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  async function signupAction(formData: FormData) {
    "use server";
    let errorMessage: string | null = null;
    try {
      await signup(formData);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) {
      redirect(`/signup?error=${encodeURIComponent(errorMessage)}`);
    }
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm card p-6">
        <h1 className="text-xl font-bold mb-1">Create your shop</h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          Start tracking udhaar and sales in 2 minutes
        </p>
        <FormError message={error} />
        <form action={signupAction} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Shop name</label>
            <input name="name" required className="input" placeholder="Ramesh Kirana Store" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Phone number</label>
            <input name="phone" type="tel" required className="input" placeholder="9876543210" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              minLength={6}
              className="input"
              placeholder="At least 6 characters"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Create account
          </button>
        </form>
        <p className="text-sm mt-4" style={{ color: "var(--muted)" }}>
          Already have a shop?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
