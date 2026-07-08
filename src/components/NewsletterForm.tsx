"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, "Enter your email.").email("Enter a valid email address."),
});

type FormValues = z.infer<typeof schema>;

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mono-label text-[11px] text-accent">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex gap-2">
        <input
          type="email"
          {...register("email")}
          placeholder="you@company.com"
          aria-label="Email address"
          className={`w-full min-w-0 rounded-full border bg-white/50 px-4 py-2.5 text-sm text-paper placeholder:text-muted/70 focus:outline-none ${
            errors.email ? "border-red-400/70 focus:border-red-400" : "border-[var(--line)] focus:border-accent"
          }`}
        />
        <button
          type="submit"
          className="btn-primary shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          Subscribe
        </button>
      </div>
      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
    </form>
  );
}
