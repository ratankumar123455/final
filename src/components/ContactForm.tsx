"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const WHATSAPP_NUMBER = "917459887412";

const schema = z.object({
  name: z.string().min(2, "Enter your name."),
  message: z.string().min(10, "Tell us a bit more about your project or question."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormValues) {
    const text = `Hi Sutertai, my name is ${data.name}.\n\n${data.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="name" className="mono-label text-[11px] text-muted">
          Your name
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="Jane Doe"
          className={`mt-2 w-full rounded-xl border bg-white/50 p-3 text-sm text-paper placeholder:text-muted/70 focus:outline-none ${
            errors.name ? "border-red-400/70 focus:border-red-400" : "border-[var(--line)] focus:border-accent"
          }`}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mono-label text-[11px] text-muted">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          placeholder="Tell us about your project or question"
          className={`mt-2 w-full resize-none rounded-xl border bg-white/50 p-3 text-sm text-paper placeholder:text-muted/70 focus:outline-none ${
            errors.message ? "border-red-400/70 focus:border-red-400" : "border-[var(--line)] focus:border-accent"
          }`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="btn-primary rounded-full px-7 py-3 text-sm font-semibold sm:self-start"
      >
        Send via WhatsApp
      </button>
      {isSubmitSuccessful && (
        <p className="text-xs text-accent">Opening WhatsApp with your message pre-filled…</p>
      )}
      <p className="text-xs text-muted">
        This opens WhatsApp with your message pre-filled to +91 74598 87412.
      </p>
    </form>
  );
}
