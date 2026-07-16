"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LayoutDashboard, History, Gauge, KeyRound } from "lucide-react";
import FloatingInput from "./auth/FloatingInput";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const schema = z.object({
  email: z.string().min(1, "Enter your email.").email("Enter a valid email address."),
  password: z.string().min(1, "Enter your password."),
});
type FormValues = z.infer<typeof schema>;

const perks = [
  { icon: LayoutDashboard, label: "Your generation workspace and saved prompts" },
  { icon: History, label: "Full history of every image and video you've rendered" },
  { icon: Gauge, label: "Live credit balance and usage across your team" },
  { icon: KeyRound, label: "API keys for connecting Metabob to your own product" },
];

export default function LoginPromo() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "" } });

  function onSubmit() {
    setSubmitting(true);
    router.push("/login");
  }

  return (
    <section id="login" className="hairline-b scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Your account"
          title="Already generating with Metabob? Sign in."
          description="Access your workspace, generation history, credits, and API keys from any device."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="glass-panel rounded-2xl p-8 sm:p-10">
            <h3 className="font-display text-xl text-paper">Sign in to your account</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4" noValidate>
              <Controller
                name="email"
                control={control}
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
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60"
              >
                {submitting ? "Signing in…" : "Log in"}
              </button>
              <p className="text-center text-sm text-muted">
                New to Metabob?{" "}
                <Link href="/signup" className="text-accent hover:underline">
                  Create a free account
                </Link>
              </p>
            </form>
          </Reveal>

          <Reveal delay={80} className="flex flex-col gap-5">
            {perks.map((perk) => (
              <div key={perk.label} className="card-lift flex items-start gap-4 rounded-2xl border border-[var(--line)] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-white/50">
                  <perk.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-muted">{perk.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
