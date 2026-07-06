"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const services = [
  {
    tag: "Marketing",
    title: "AI Digital Marketing",
    description: "SEO, paid ads, content, and AI automation that turn visibility into revenue.",
    features: ["SEO & performance ads", "AI marketing automation", "Content & email marketing", "Conversion optimization"],
  },
  {
    tag: "Development",
    title: "Website & Software Development",
    description: "Corporate sites, ecommerce, ERP, CRM, and SaaS platforms built to scale.",
    features: ["Custom websites & ecommerce", "ERP, CRM & SaaS platforms", "API integration", "Cloud hosting & DevOps"],
  },
  {
    tag: "AI",
    title: "AI Solutions & Automation",
    description: "Chatbots, AI agents, and workflow automation that cut manual work to zero.",
    features: ["Chatbots & AI agents", "Workflow automation", "Custom GPT integrations", "Data analytics & ML"],
  },
  {
    tag: "Mobile",
    title: "Mobile App Development",
    description: "Native and cross-platform apps designed for retention, not just launch.",
    features: ["iOS & Android native", "Cross-platform builds", "App Store optimization", "Post-launch support"],
  },
  {
    tag: "Cloud",
    title: "Business Automation & Cloud",
    description: "CRM, ERP, and cloud infrastructure that removes manual, repetitive work.",
    features: ["CRM & ERP implementation", "Workflow automation", "Cloud migration & scaling", "Security & monitoring"],
  },
];

export default function ProductShowcase() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services-preview" className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="One partner. Every digital capability."
          description="Sutertai brings marketing, engineering, and AI under one roof — so your growth strategy and your technology actually work together."
        />
        <div className="grid gap-3">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={service.title} delay={i * 40}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`card-lift w-full rounded-2xl border p-6 text-left transition-colors sm:p-8 ${
                    isOpen ? "border-[var(--signal)]" : "border-[var(--line)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span className="mono-label text-[10px] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl text-paper sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <span
                      className={`font-display text-xl text-accent transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div className="mt-6 grid gap-6 border-t border-[var(--line)] pt-6 sm:grid-cols-[1fr_1fr]">
                      <p className="max-w-md text-sm text-muted">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
