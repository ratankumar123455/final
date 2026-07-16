import { Sparkles, Blocks, Users, Layers, Rocket, Headset } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

const secondary = [
  {
    stat: "24/7",
    title: "Always-on GPU capacity",
    description: "Dedicated NVIDIA GPU clusters that scale on AWS, day or night, with no queue.",
  },
  {
    stat: "AES-256",
    title: "Security by default",
    description: "Generated content and account data are encrypted at rest and in transit, always.",
  },
];

const supporting = [
  {
    stat: "40K+",
    title: "Creators & teams",
    description: "Marketers, studios, and developers generating with Metabob every month.",
  },
  {
    stat: "12M+",
    title: "Images generated",
    description: "Images and video clips rendered on our platform every month.",
  },
  {
    stat: "4",
    title: "AWS regions",
    description: "GPU capacity distributed across regions for low-latency rendering.",
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Frontier generative models",
    description: "Diffusion models fine-tuned for photorealism, style range, and motion consistency.",
  },
  {
    icon: Blocks,
    title: "One pipeline, image to video",
    description: "Generate the image and animate it in the same workspace — no exports, no re-uploads.",
  },
  {
    icon: Users,
    title: "Built by ML researchers",
    description: "A team that has shipped production generative AI systems, not just research demos.",
  },
  {
    icon: Layers,
    title: "NVIDIA + AWS foundation",
    description: "GPU compute and cloud infrastructure engineered to scale from day one.",
  },
  {
    icon: Rocket,
    title: "Seconds, not minutes",
    description: "Most images render in under 5 seconds; most video clips in under a minute.",
  },
  {
    icon: Headset,
    title: "Dedicated enterprise support",
    description: "A named account team and SLA-backed support for Studio and Enterprise plans.",
  },
];

export default function WhyMetabob() {
  return (
    <section className="hairline-b section-tint py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Metabob"
          title="Serious infrastructure behind every generation"
          description="Fast, high-quality generation isn't magic — it's GPU capacity, model engineering, and reliability, all working together."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-8 lg:col-span-5 lg:row-span-2">
            <div>
              <span className="mono-label text-[10px] text-accent">Render speed</span>
              <h3 className="font-display mt-3 text-2xl text-paper">
                Fast rendering without cutting quality
              </h3>
              <p className="mt-3 max-w-xs text-sm text-muted">
                Median time from prompt submission to a finished image across
                our platform.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(var(--signal) 0deg 305deg, rgba(242,240,233,0.08) 305deg 360deg)",
                }}
              >
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[var(--ink)]">
                  <span className="font-display text-2xl text-generated">4.2s</span>
                </div>
              </div>
              <p className="mono-label text-[10px] text-muted-2">
                85% of renders
                <br />
                complete under 5s
              </p>
            </div>
          </Reveal>

          {secondary.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i + 1) * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-7 lg:col-span-7"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <span className="mono-label text-[10px] text-accent">{item.stat}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}

          {supporting.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i + 3) * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-7 lg:col-span-4"
            >
              <p className="font-display text-2xl text-generated">
                <AnimatedCounter value={item.stat} />
              </p>
              <h3 className="font-display mt-3 text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 50}
              className="card-lift rounded-2xl border border-[var(--line)] p-6"
            >
              <reason.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-display mt-4 text-base text-paper">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted">{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
