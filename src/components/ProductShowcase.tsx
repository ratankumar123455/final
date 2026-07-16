"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const services = [
  {
    tag: "Image",
    title: "Text-to-Image Generation",
    description: "Turn a written prompt into a finished image, in seconds, at production quality.",
    features: ["Photorealistic & stylized modes", "Up to 4K resolution", "Batch & variation generation", "Custom style presets"],
  },
  {
    tag: "Video",
    title: "Image-to-Video Generation",
    description: "Bring any generated or uploaded image to life as a short, motion-consistent video clip.",
    features: ["Camera pan, zoom & motion control", "Up to 1080p, 24-30fps", "Loop, extend & re-render", "Frame-consistent animation"],
  },
  {
    tag: "API",
    title: "Developer API & Integrations",
    description: "Call the same generation pipeline that powers our app directly from your product.",
    features: ["REST API & SDKs", "Webhook callbacks", "Usage-based billing", "Sandbox & production keys"],
  },
  {
    tag: "Infra",
    title: "AWS + NVIDIA Infrastructure",
    description: "Every request is routed to dedicated NVIDIA GPU capacity, orchestrated on AWS.",
    features: ["NVIDIA H100 / A100 clusters", "AWS auto-scaling & failover", "Regional data residency", "SOC 2-aligned controls"],
  },
  {
    tag: "Team",
    title: "Enterprise & Team Workspaces",
    description: "Shared workspaces, roles, and usage controls for teams generating at scale.",
    features: ["Role-based access control", "Shared asset libraries", "SSO & audit logs", "Volume pricing & SLAs"],
  },
];

export default function ProductShowcase() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services-preview" className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="One platform, from prompt to finished video"
          description="Metabob brings image generation, video generation, and the infrastructure behind them under one roof, so creative teams don't have to stitch tools together."
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
                    <Plus
                      className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
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
