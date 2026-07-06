"use client";

import { useRef } from "react";

export default function OtpInput({
  length = 6,
  value,
  onChange,
}: {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = value.split("").concat(Array(length).fill("")).slice(0, length);

  function setDigit(index: number, digit: string) {
    const clean = digit.replace(/\D/g, "").slice(-1);
    const next = digits.slice();
    next[index] = clean;
    onChange(next.join(""));
    if (clean && index < length - 1) refs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  }

  return (
    <div className="flex justify-between gap-2">
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={digit}
          onChange={(e) => setDigit(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          className="h-14 w-full rounded-xl border border-[var(--line)] bg-black/30 text-center text-xl text-paper focus:border-accent focus:outline-none"
        />
      ))}
    </div>
  );
}
