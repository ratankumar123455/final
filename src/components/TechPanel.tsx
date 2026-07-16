"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const items = [
  {
    name: "Generative Models",
    detail:
      "Custom-trained diffusion models for text-to-image and image-to-video, fine-tuned on licensed and proprietary datasets for photorealism and style range.",
    specs: [
      { k: "Architecture", v: "Latent diffusion" },
      { k: "Max resolution", v: "4K image / 1080p video" },
    ],
  },
  {
    name: "NVIDIA GPU Compute",
    detail:
      "Every generation request runs on dedicated NVIDIA H100 and A100 GPUs, with CUDA-optimized inference for low-latency rendering at scale.",
    specs: [
      { k: "GPUs", v: "NVIDIA H100 / A100" },
      { k: "Avg. render", v: "4.2s / image" },
    ],
  },
  {
    name: "AWS Cloud Infrastructure",
    detail:
      "GPU clusters are orchestrated on AWS — EC2 P5/P4 instances for compute, S3 for asset storage, and Bedrock/SageMaker for model hosting and fine-tuning pipelines.",
    specs: [
      { k: "Compute", v: "AWS EC2 P5 / P4" },
      { k: "Storage", v: "AWS S3" },
      { k: "ML platform", v: "AWS SageMaker" },
    ],
  },
  {
    name: "API & Delivery",
    detail:
      "A REST API and SDKs expose the same pipeline that powers our app, with rendered assets delivered through a global CDN for fast load times anywhere.",
    specs: [
      { k: "Interface", v: "REST API / SDKs" },
      { k: "Delivery", v: "Global CDN" },
    ],
  },
  {
    name: "Security & Compliance",
    detail:
      "Encryption at rest and in transit, role-based access control, and SOC 2-aligned operational practices keep generated content and account data protected.",
    specs: [
      { k: "Encryption", v: "AES-256" },
      { k: "Controls", v: "SOC 2-aligned" },
    ],
  },
];

export default function TechPanel() {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section id="technology" className="hairline-b scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Technology Stack" title="Built on NVIDIA GPUs and AWS infrastructure" />
        <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] lg:grid-cols-[280px_1fr]">
          <div className="bg-[var(--ink)] p-2">
            {items.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`block w-full rounded-lg px-4 py-3.5 text-left text-sm transition-colors ${
                  active === i
                    ? "bg-[var(--surface)] text-paper"
                    : "text-muted hover:bg-[var(--surface)]/60 hover:text-paper"
                }`}
              >
                <span className="mono-label mr-2 text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.name}
              </button>
            ))}
          </div>
          <div className="bg-[var(--ink)] p-8 sm:p-10">
            <h3 className="font-display text-2xl text-paper">{current.name}</h3>
            <p className="mt-4 max-w-lg text-sm text-muted">{current.detail}</p>
            <div className="mt-8 flex gap-8 border-t border-[var(--line)] pt-6">
              {current.specs.map((spec) => (
                <div key={spec.k}>
                  <p className="mono-label text-[9px] text-muted-2">{spec.k}</p>
                  <p className="font-display mt-1 text-lg text-generated">{spec.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
