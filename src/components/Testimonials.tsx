"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "We generate every campaign visual in Metabob now — what used to be a two-week shoot-and-edit cycle is a same-day turnaround.",
    name: "Aditi Rao",
    role: "Creative Director",
    company: "an advertising agency client",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.9), rgba(253,246,233,0.9))",
  },
  {
    quote:
      "The image-to-video pipeline is the reason we switched. We generate the product shot and animate it in the same workspace, no extra tools.",
    name: "Karan Mehta",
    role: "Founder",
    company: "an e-commerce client",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.85), rgba(253,246,233,0.9))",
  },
  {
    quote:
      "As a two-person studio, Metabob is the difference between shipping a trailer and not shipping one at all.",
    name: "Priya Nair",
    role: "Co-founder",
    company: "an independent game studio",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.85), rgba(253,246,233,0.9))",
  },
  {
    quote:
      "The API integrated into our content pipeline in an afternoon. Render times on NVIDIA GPUs are consistently under five seconds even at our peak volume.",
    name: "Devansh Iyer",
    role: "Engineering Lead",
    company: "a media & publishing client",
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
        <SectionHeading eyebrow="What creators say" title="Trusted by the teams doing the work" align="center" />
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
