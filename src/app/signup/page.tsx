"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import FloatingInput from "@/components/auth/FloatingInput";
import SocialButtons from "@/components/auth/SocialButtons";
import OtpInput from "@/components/auth/OtpInput";

type View = "signup" | "otp" | "success";

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  terms?: string;
};

export default function SignupPage() {
  const [view, setView] = useState<View>("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  function validate() {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8) next.password = "Password must be at least 8 characters.";
    if (confirm !== password) next.confirm = "Passwords don't match.";
    if (!agreed) next.terms = "You must agree to the terms to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("otp");
    }, 1200);
  }

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (otp.length !== 6) {
      setOtpError("Enter the full 6-digit code.");
      return;
    }
    setOtpError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("success");
    }, 900);
  }

  if (view === "success") {
    return (
      <AuthShell eyebrow="Client Portal" title="You're all set" description="Your account has been created.">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)]/15 text-2xl text-generated">
            ✓
          </div>
          <p className="mt-4 text-sm text-muted">
            This is a demo sign-up flow — Sutertai&apos;s client portal isn&apos;t connected yet.
          </p>
          <Link href="/" className="btn-primary mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold">
            Back to home
          </Link>
        </div>
      </AuthShell>
    );
  }

  if (view === "otp") {
    return (
      <AuthShell eyebrow="Client Portal" title="Verify your email" description={`Enter the 6-digit code we sent to ${email}.`}>
        <form onSubmit={handleVerify} className="flex flex-col gap-5">
          <OtpInput value={otp} onChange={setOtp} />
          {otpError && <p className="text-xs text-red-400">{otpError}</p>}
          <button type="submit" disabled={loading} className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60">
            {loading ? "Verifying…" : "Verify & continue"}
          </button>
          <button
            type="button"
            onClick={() => setView("signup")}
            className="mono-label text-center text-[11px] text-muted hover:text-paper"
          >
            Back
          </button>
        </form>
      </AuthShell>
    );
  }

  return (
    <AuthShell eyebrow="Client Portal" title="Create your account" description="Set up access to Sutertai's client portal.">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FloatingInput label="Full name" value={name} onChange={setName} error={errors.name} autoComplete="name" />
        <FloatingInput label="Email address" type="email" value={email} onChange={setEmail} error={errors.email} autoComplete="email" />
        <FloatingInput
          label="Password"
          value={password}
          onChange={setPassword}
          error={errors.password}
          autoComplete="new-password"
          showToggle
        />
        <FloatingInput
          label="Confirm password"
          value={confirm}
          onChange={setConfirm}
          error={errors.confirm}
          autoComplete="new-password"
          showToggle
        />
        <div>
          <label className="flex items-start gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[var(--line-strong)] bg-black/30 accent-[var(--signal)]"
            />
            I agree to the Terms & Conditions and Privacy Policy.
          </label>
          {errors.terms && <p className="mt-1.5 text-xs text-red-400">{errors.terms}</p>}
        </div>
        {notice && <p className="text-xs text-muted">{notice}</p>}
        <button type="submit" disabled={loading} className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60">
          {loading ? "Creating account…" : "Create account"}
        </button>
        <div className="flex items-center gap-3 text-xs text-muted-2">
          <span className="h-px flex-1 bg-[var(--line)]" />
          or continue with
          <span className="h-px flex-1 bg-[var(--line)]" />
        </div>
        <SocialButtons onSelect={(provider) => setNotice(`${provider} sign-up isn't connected in this demo yet.`)} />
        <p className="text-center text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
