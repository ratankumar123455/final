"use client";

import { useId, useState } from "react";

export default function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  showToggle = false,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
  showToggle?: boolean;
}) {
  const id = useId();
  const [reveal, setReveal] = useState(false);
  const [focused, setFocused] = useState(false);
  const resolvedType = showToggle ? (reveal ? "text" : "password") : type;
  const floated = focused || value.length > 0;

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          type={resolvedType}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`peer w-full rounded-xl border bg-white/50 px-4 pt-6 pb-2.5 text-base text-paper focus:outline-none ${
            error ? "border-red-400/70 focus:border-red-400" : "border-[var(--line)] focus:border-accent"
          }`}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 transition-all duration-150 ${
            floated ? "top-2 text-[11px] text-muted-2" : "top-1/2 -translate-y-1/2 text-base text-muted"
          }`}
        >
          {label}
        </label>
        {showToggle && (
          <button
            type="button"
            onClick={() => setReveal((v) => !v)}
            aria-label={reveal ? "Hide password" : "Show password"}
            className="mono-label absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-muted hover:text-paper"
          >
            {reveal ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
