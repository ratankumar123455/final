"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
    setEmail("");
  }

  if (status === "submitted") {
    return (
      <p className="mono-label text-[11px] text-accent">
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        className="w-full min-w-0 rounded-full border border-[var(--line)] bg-black/30 px-4 py-2.5 text-sm text-paper placeholder:text-muted/70 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="btn-primary shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
      >
        Subscribe
      </button>
    </form>
  );
}
