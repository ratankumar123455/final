import Link from "next/link";
import { redirect } from "next/navigation";
import { login } from "@/lib/actions";
import { FormError } from "@/components/FormError";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  async function loginAction(formData: FormData) {
    "use server";
    let errorMessage: string | null = null;
    try {
      await login(formData);
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    }
    if (errorMessage) {
      redirect(`/login?error=${encodeURIComponent(errorMessage)}`);
    }
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm card p-6">
        <h1 className="text-xl font-bold mb-1">UdhaarLog</h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          Log in to your shop
        </p>
        <FormError message={error} />
        <form action={loginAction} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Phone number</label>
            <input name="phone" type="tel" required className="input" placeholder="9876543210" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input name="password" type="password" required className="input" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Log in
          </button>
        </form>
        <p className="text-sm mt-4" style={{ color: "var(--muted)" }}>
          New shop?{" "}
          <Link href="/signup" className="underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
