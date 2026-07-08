"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Sutertai rebuilt our website and our SEO strategy at the same time — for the first time, our marketing and our technology were actually pulling in the same direction.",
    name: "Aditi Rao",
    role: "Marketing Director",
    company: "a retail chain client",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.9), rgba(253,246,233,0.9))",
  },
  {
    quote:
      "The CRM and automation build paid for itself in the first quarter. Our sales team spends its time closing deals now, not entering data.",
    name: "Karan Mehta",
    role: "Founder",
    company: "a real estate client",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.85), rgba(253,246,233,0.9))",
  },
  {
    quote:
      "They shipped our MVP in three weeks flat and stayed on afterward as our technology partner. That long-term relationship is rare to find.",
    name: "Priya Nair",
    role: "Founder",
    company: "a SaaS startup client",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.85), rgba(253,246,233,0.9))",
  },
  {
    quote:
      "The AI chatbot they built handles most of our intake now. Response times dropped from hours to seconds, and our staff finally has room to breathe.",
    name: "Devansh Iyer",
    role: "Operations Lead",
    company: "a healthcare client",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.6), rgba(168,216,232,0.5))",
  },
];

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("");
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="What clients say" title="Trusted by the teams doing the work" align="center" />
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card-lift rounded-2xl border border-[var(--line)] p-8 sm:p-10"
              >
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--green)] text-[var(--green)]" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-paper">“{current.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm text-pure"
                    style={{ backgroundImage: current.tone }}
                    aria-hidden="true"
                  >
                    {initials(current.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-paper">{current.name}</p>
                    <p className="text-sm text-muted">
                      {current.role}, {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] text-muted transition-colors hover:text-paper"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-[var(--line-strong)]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] text-muted transition-colors hover:text-paper"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
