"use client";

import { Search, Target, PenTool, Code2, TestTube2, Rocket, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Step = { icon: LucideIcon; title: string; description: string };

const steps: Step[] = [
  { icon: Search, title: "Discovery", description: "Goals, users, and constraints, mapped before anything is built." },
  { icon: Target, title: "Strategy", description: "A concrete plan, timeline, and scope of work you sign off on." },
  { icon: PenTool, title: "Design", description: "Wireframes and UI/UX turn the plan into a testable product." },
  { icon: Code2, title: "Development", description: "Short sprints ship website, software, or app with APIs wired in." },
  { icon: TestTube2, title: "Testing", description: "Cross-device QA, load, and security checks before launch." },
  { icon: Rocket, title: "Launch", description: "We deploy, monitor, and stay on as your growth partner." },
];

export default function ProcessTimeline() {
  return (
    <section id="website-development" className="hairline-b scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Process"
          title="From idea to a live, working product"
          description="Custom websites, ecommerce, ERP, CRM, and SaaS platforms — built on a process that keeps you informed at every stage, not just at delivery."
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
