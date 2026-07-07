"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Megaphone, Code2, Bot, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  tone: string;
};

const features: Feature[] = [
  {
    icon: Megaphone,
    title: "AI Digital Marketing",
    description: "Growth marketing built around measurable pipeline, not vanity metrics.",
    points: ["SEO", "Paid Ads", "Content Marketing", "Lead Generation", "Analytics"],
    tone: "linear-gradient(150deg, rgba(91,33,255,0.35), transparent 70%)",
  },
  {
    icon: Code2,
    title: "Website & Software Development",
    description: "Corporate sites, ecommerce, and custom software engineered to scale.",
    points: ["Corporate Websites", "E-commerce", "CRM", "ERP", "Web Apps", "Custom Software"],
    tone: "linear-gradient(150deg, rgba(0,217,255,0.3), transparent 70%)",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Chatbots and intelligent workflows that remove manual work from your day.",
    points: ["Chatbots", "AI Agents", "Workflow Automation", "Business Intelligence", "Machine Learning"],
    tone: "linear-gradient(150deg, rgba(20,241,149,0.3), transparent 70%)",
  },
];

function TiltCard({ feature, delay }: { feature: Feature; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = node.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: feature.tone }}
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line-strong)] bg-black/30">
            <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
          </div>
          <h3 className="font-display mt-6 text-xl text-paper sm:text-2xl">{feature.title}</h3>
          <p className="mt-3 text-sm text-muted">{feature.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {feature.points.map((point) => (
              <li
                key={point}
                className="mono-label rounded-full border border-[var(--line-strong)] px-3 py-1.5 text-[10px] text-paper"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BentoFeatures() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Three pillars, one accountable team"
          description="Marketing, engineering, and AI working together instead of three separate vendors."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, i) => (
            <TiltCard key={feature.title} feature={feature} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
