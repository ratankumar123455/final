"use client";

import { Type, Sparkles, SlidersHorizontal, Clapperboard, Download, Share2, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Step = { icon: LucideIcon; title: string; description: string };

const steps: Step[] = [
  { icon: Type, title: "Prompt", description: "Describe the image you want in plain language." },
  { icon: Sparkles, title: "Generate", description: "NVIDIA GPUs render the image in a few seconds." },
  { icon: SlidersHorizontal, title: "Refine", description: "Adjust style, composition, or inpaint a detail." },
  { icon: Clapperboard, title: "Animate", description: "Turn the image into a short video clip." },
  { icon: Download, title: "Export", description: "Download in the resolution and format you need." },
  { icon: Share2, title: "Ship", description: "Use it in your campaign, product, or app via API." },
];

export default function ProcessTimeline() {
  return (
    <section id="how-it-works" className="hairline-b scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From prompt to finished video in six steps"
          description="One workspace, one pipeline — describe it, generate it, animate it, and ship it."
        />
        <div className="relative overflow-x-auto pb-4">
          <div className="grid min-w-[720px] grid-cols-6 gap-4 sm:min-w-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                {i < steps.length - 1 && (
                  <span
                    className="absolute top-7 left-1/2 hidden h-px w-full sm:block"
                    style={{ backgroundImage: "linear-gradient(90deg, var(--line-strong), transparent)" }}
                    aria-hidden="true"
                  />
                )}
                <div className="glass-panel relative flex h-14 w-14 items-center justify-center rounded-full">
                  <step.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  <span className="mono-label absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand text-[9px] text-pure">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-base text-paper">{step.title}</h3>
                <p className="mt-2 text-xs text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
