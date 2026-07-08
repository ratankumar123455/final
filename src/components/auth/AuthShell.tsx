import Link from "next/link";

export default function AuthShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(700px circle at 20% 0%, rgba(143,188,148,0.3), transparent 60%), radial-gradient(700px circle at 85% 20%, rgba(168,216,232,0.16), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-md flex-col px-6">
        <div className="mb-8 text-center">
          <span className="eyebrow-chip mx-auto">
            <span className="dot">/</span>
            <span>{eyebrow}</span>
          </span>
          <h1 className="font-display mt-5 text-4xl text-paper">{title}</h1>
          <p className="mt-3 text-sm text-muted">{description}</p>
        </div>
        <div className="glass-panel rounded-2xl p-8">{children}</div>
        <p className="mt-6 text-center text-xs text-muted">
          By continuing, you agree to Sutertai&apos;s{" "}
          <Link href="/terms" className="text-accent hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
