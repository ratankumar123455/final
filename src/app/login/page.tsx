"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import FloatingInput from "@/components/auth/FloatingInput";
import SocialButtons from "@/components/auth/SocialButtons";

type View = "login" | "forgot" | "sent" | "success";

export default function LoginPage() {
  const [view, setView] = useState<View>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  function validate() {
    const next: typeof errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8) next.password = "Password must be at least 8 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("success");
    }, 1200);
  }

  function handleForgotSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: "Enter a valid email address." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("sent");
    }, 900);
  }

  if (view === "success") {
    return (
      <AuthShell eyebrow="Client Portal" title="Welcome back" description="You're signed in.">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)]/15 text-2xl text-generated">
            ✓
          </div>
          <p className="mt-4 text-sm text-muted">
            This is a demo sign-in flow — Sutertai&apos;s client portal isn&apos;t connected yet.
          </p>
          <Link href="/" className="btn-primary mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold">
            Back to home
          </Link>
        </div>
      </AuthShell>
    );
  }

  if (view === "sent") {
    return (
      <AuthShell eyebrow="Client Portal" title="Check your email" description={`We've sent a password reset link to ${email}.`}>
        <div className="text-center">
          <p className="text-sm text-muted">
            Didn&apos;t get it? Check spam, or try again in a minute.
          </p>
          <button
            onClick={() => setView("login")}
            className="btn-secondary mt-6 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Back to login
          </button>
        </div>
      </AuthShell>
    );
  }

  if (view === "forgot") {
    return (
      <AuthShell eyebrow="Client Portal" title="Reset your password" description="Enter your email and we'll send you a reset link.">
        <form onSubmit={handleForgotSubmit} className="flex flex-col gap-5">
          <FloatingInput label="Email address" type="email" value={email} onChange={setEmail} error={errors.email} autoComplete="email" />
          <button type="submit" disabled={loading} className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60">
            {loading ? "Sending…" : "Send reset link"}
          </button>
          <button
            type="button"
            onClick={() => setView("login")}
            className="mono-label text-center text-[11px] text-muted hover:text-paper"
          >
            Back to login
          </button>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell eyebrow="Client Portal" title="Welcome back" description="Sign in to your Sutertai account.">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FloatingInput label="Email address" type="email" value={email} onChange={setEmail} error={errors.email} autoComplete="email" />
        <FloatingInput
          label="Password"
          value={password}
          onChange={setPassword}
          error={errors.password}
          autoComplete="current-password"
          showToggle
        />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-[var(--line-strong)] bg-black/30 accent-[var(--signal)]"
            />
            Remember me
          </label>
          <button
            type="button"
            onClick={() => setView("forgot")}
            className="text-accent hover:underline"
          >
            Forgot password?
          </button>
        </div>
        {notice && <p className="text-xs text-muted">{notice}</p>}
        <button type="submit" disabled={loading} className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60">
          {loading ? "Signing in…" : "Sign in"}
        </button>
        <div className="flex items-center gap-3 text-xs text-muted-2">
          <span className="h-px flex-1 bg-[var(--line)]" />
          or continue with
          <span className="h-px flex-1 bg-[var(--line)]" />
        </div>
        <SocialButtons onSelect={(provider) => setNotice(`${provider} sign-in isn't connected in this demo yet.`)} />
        <p className="text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
