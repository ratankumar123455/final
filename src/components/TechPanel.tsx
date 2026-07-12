"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const items = [
  {
    name: "Frontend & Design",
    detail:
      "React, Next.js, TypeScript, and Tailwind CSS for interfaces that are fast, accessible, and easy to maintain.",
    specs: [
      { k: "Frameworks", v: "React / Next.js" },
      { k: "Lighthouse", v: "90+ target" },
    ],
  },
  {
    name: "Backend & APIs",
    detail:
      "Node.js, Python, and REST/GraphQL APIs power everything from marketing sites to enterprise ERP and CRM systems.",
    specs: [
      { k: "Runtimes", v: "Node / Python" },
      { k: "Uptime", v: "99.9%" },
    ],
  },
  {
    name: "AI & Automation",
    detail:
      "Custom GPT integrations, ML pipelines, and conversational AI built on Amazon Bedrock, SageMaker, and Lex, plus workflow automation tools that remove manual work from your business.",
    specs: [
      { k: "Generative AI", v: "Amazon Bedrock" },
      { k: "ML training", v: "Amazon SageMaker" },
      { k: "Chatbots", v: "Amazon Lex" },
    ],
  },
  {
    name: "Cloud & DevOps",
    detail:
      "We run client platforms on AWS — EC2 for virtual servers, S3 for object storage, and Amplify for full-stack web and mobile apps — with CI/CD pipelines, monitoring, and auto-scaling built in from day one.",
    specs: [
      { k: "Compute", v: "AWS EC2" },
      { k: "Storage", v: "AWS S3" },
      { k: "Full-stack", v: "AWS Amplify" },
    ],
  },
  {
    name: "Security & Compliance",
    detail:
      "Encryption at rest and in transit, access controls, and regular audits so client data stays protected as you scale.",
    specs: [
      { k: "Encryption", v: "AES-256" },
      { k: "Reviews", v: "Continuous" },
    ],
  },
];

export default function TechPanel() {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section id="software-development" className="hairline-b scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Technology Stack" title="Modern technology, explained plainly" />
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
