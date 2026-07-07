"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthShell from "@/components/auth/AuthShell";
import FloatingInput from "@/components/auth/FloatingInput";
import SocialButtons from "@/components/auth/SocialButtons";
import OtpInput from "@/components/auth/OtpInput";

type View = "signup" | "otp" | "success";

const signupSchema = z
  .object({
    name: z.string().min(2, "Enter your full name."),
    email: z.string().min(1, "Enter your email.").email("Enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirm: z.string(),
    agreed: z.boolean().refine((v) => v, { message: "You must agree to the terms to continue." }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match.",
    path: ["confirm"],
  });

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [view, setView] = useState<View>("signup");
  const [signupEmail, setSignupEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirm: "", agreed: false },
  });

  function onSubmit(data: SignupValues) {
    setLoading(true);
    setSignupEmail(data.email);
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
      <AuthShell eyebrow="Client Portal" title="Verify your email" description={`Enter the 6-digit code we sent to ${signupEmail}.`}>
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FloatingInput label="Full name" value={field.value} onChange={field.onChange} error={errors.name?.message} autoComplete="name" />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FloatingInput label="Email address" type="email" value={field.value} onChange={field.onChange} error={errors.email?.message} autoComplete="email" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FloatingInput
              label="Password"
              value={field.value}
              onChange={field.onChange}
              error={errors.password?.message}
              autoComplete="new-password"
              showToggle
            />
          )}
        />
        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <FloatingInput
              label="Confirm password"
              value={field.value}
              onChange={field.onChange}
              error={errors.confirm?.message}
              autoComplete="new-password"
              showToggle
            />
          )}
        />
        <div>
          <Controller
            name="agreed"
            control={control}
            render={({ field }) => (
              <label className="flex items-start gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-[var(--line-strong)] bg-black/30 accent-[var(--signal)]"
                />
                I agree to the Terms & Conditions and Privacy Policy.
              </label>
            )}
          />
          {errors.agreed && <p className="mt-1.5 text-xs text-red-400">{errors.agreed.message}</p>}
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
