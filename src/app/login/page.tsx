"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthShell from "@/components/auth/AuthShell";
import FloatingInput from "@/components/auth/FloatingInput";
import SocialButtons from "@/components/auth/SocialButtons";

type View = "login" | "forgot" | "sent" | "success";

const loginSchema = z.object({
  email: z.string().min(1, "Enter your email.").email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});
type LoginValues = z.infer<typeof loginSchema>;

const forgotSchema = z.object({
  email: z.string().min(1, "Enter your email.").email("Enter a valid email address."),
});
type ForgotValues = z.infer<typeof forgotSchema>;

export default function LoginPage() {
  const [view, setView] = useState<View>("login");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [resetEmail, setResetEmail] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  const {
    control: forgotControl,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors },
  } = useForm<ForgotValues>({ resolver: zodResolver(forgotSchema) });

  function onSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("success");
    }, 1200);
  }

  function onForgotSubmit(data: ForgotValues) {
    setLoading(true);
    setResetEmail(data.email);
    setTimeout(() => {
      setLoading(false);
      setView("sent");
    }, 900);
  }

  if (view === "success") {
    return (
      <AuthShell eyebrow="Metabob Account" title="Welcome back" description="You're signed in.">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)]/15 text-2xl text-generated">
            ✓
          </div>
          <p className="mt-4 text-sm text-muted">
            Your workspace, credits, and generation history are ready.
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
      <AuthShell eyebrow="Metabob Account" title="Check your email" description={`We've sent a password reset link to ${resetEmail}.`}>
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
      <AuthShell eyebrow="Metabob Account" title="Reset your password" description="Enter your email and we'll send you a reset link.">
        <form onSubmit={handleForgotSubmit(onForgotSubmit)} className="flex flex-col gap-5" noValidate>
          <Controller
            name="email"
            control={forgotControl}
            defaultValue=""
            render={({ field }) => (
              <FloatingInput
                label="Email address"
                type="email"
                value={field.value}
                onChange={field.onChange}
                error={forgotErrors.email?.message}
                autoComplete="email"
              />
            )}
          />
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
    <AuthShell eyebrow="Metabob Account" title="Welcome back" description="Sign in to your Metabob workspace.">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FloatingInput
              label="Email address"
              type="email"
              value={field.value}
              onChange={field.onChange}
              error={errors.email?.message}
              autoComplete="email"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FloatingInput
              label="Password"
              value={field.value}
              onChange={field.onChange}
              error={errors.password?.message}
              autoComplete="current-password"
              showToggle
            />
          )}
        />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-[var(--line-strong)] bg-white/50 accent-[var(--signal)]"
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
        <SocialButtons onSelect={(provider) => setNotice(`${provider} sign-in is coming soon — use the form above for now.`)} />
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
