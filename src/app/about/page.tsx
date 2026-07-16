import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Industries from "@/components/Industries";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Metabob Private Limited builds a generative AI platform for text-to-image and image-to-video generation, powered by NVIDIA GPUs on AWS infrastructure. Learn our mission, vision, and team.",
};

const stats = [
  { value: "40K+", label: "Creators & teams" },
  { value: "12M+", label: "Images / month" },
  { value: "4", label: "AWS regions" },
  { value: "2024", label: "Founded" },
];

const values = [
  {
    title: "Speed without compromise",
    description: "A render that takes a minute instead of a day is only useful if the quality holds up — we optimize for both.",
  },
  {
    title: "Infrastructure first",
    description: "Model quality means nothing if the GPUs can't keep up. We invest in NVIDIA and AWS capacity ahead of demand, not behind it.",
  },
  {
    title: "Creative control",
    description: "Generation should feel like a tool a creator directs, not a slot machine — every feature adds control, not just novelty.",
  },
  {
    title: "Responsible by default",
    description: "Commercial usage rights, content safeguards, and data handling are built in from day one, not bolted on after launch.",
  },
  {
    title: "Ship, measure, retrain",
    description: "Our models improve on a tight feedback loop from real generations, not just benchmark scores.",
  },
];

const techStack = [
  {
    title: "Generative Models",
    tools: ["Latent diffusion (image)", "Video diffusion (image-to-video)", "Custom fine-tuning pipeline", "PyTorch"],
  },
  {
    title: "GPU Compute",
    tools: ["NVIDIA H100", "NVIDIA A100", "CUDA-optimized inference", "Multi-GPU scheduling"],
  },
  {
    title: "Cloud Infrastructure",
    tools: ["AWS EC2 (P5 / P4)", "AWS S3", "AWS SageMaker", "AWS Bedrock"],
  },
  {
    title: "Platform & API",
    tools: ["REST API & SDKs", "Webhooks", "Global CDN delivery", "Usage-based billing"],
  },
  {
    title: "Security & Reliability",
    tools: ["AES-256 encryption", "SOC 2-aligned controls", "Auto-scaling & failover", "Role-based access control"],
  },
];

const trustReasons = [
  "Dedicated NVIDIA GPU capacity, not shared best-effort compute",
  "Sub-5-second average image render time",
  "Commercial usage rights on every paid-plan generation",
  "SOC 2-aligned security and encrypted storage by default",
  "API and SDKs for embedding generation into your own product",
  "Custom style fine-tuning available for Enterprise brands",
  "Transparent, credit-based pricing with no hidden overage fees",
  "Auto-scaling infrastructure that holds steady under peak demand",
  "A model roadmap shaped by real usage, not just leaderboard scores",
  "A support team that includes the engineers who built the pipeline",
];

const goals = [
  {
    label: "Now",
    title: "Longer, higher-fidelity video generation",
    description:
      "Extending our image-to-video pipeline past short clips toward longer, multi-shot sequences with stronger temporal consistency — while holding render times down.",
  },
  {
    label: "Next",
    title: "Deeper enterprise fine-tuning",
    description:
      "Making it faster for brands and studios to fine-tune a private model on their own visual style, so generated output is on-brand from the first prompt.",
  },
  {
    label: "Later",
    title: "Real-time interactive generation",
    description:
      "Pushing render latency low enough that image and short-video generation feel interactive — adjusting a prompt and seeing the result update live.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Generative AI for{" "}
            <span className="text-generated">anyone with an idea to show</span>
          </>
        }
        description="Metabob Private Limited builds a generative AI platform that turns text into images and images into video — running on NVIDIA GPUs across AWS infrastructure."
      />

      {/* 1. Company Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Who we are"
            title="A generative AI company, built around one pipeline"
            description="Metabob Private Limited develops and operates a generative AI platform focused on two capabilities: turning a text prompt into an image, and turning an image into a short video. Both run on the same infrastructure — dedicated NVIDIA H100 and A100 GPUs, orchestrated on AWS — so a creator, marketer, or developer can go from an idea to a finished image to a finished video clip without leaving one workspace or switching vendors. We serve individual creators on a free plan, creative teams and marketers on our Creator plan, and studios, agencies, and platforms building generation into their own products through our API and Enterprise plans. Rather than being a general-purpose AI company, we've stayed narrowly focused on making text-to-image and image-to-video generation as fast, controllable, and production-ready as possible."
          />
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-x-12 sm:grid-cols-2">
            <Reveal className="hairline-t pt-8 pb-8 sm:pb-0 sm:pr-12">
              <h3 className="font-display text-2xl text-paper">Our story</h3>
              <p className="mt-4 text-muted">
                Metabob started with a narrow frustration: generating a
                single usable image was easy, but turning that image into
                even a few seconds of usable video meant exporting it to a
                completely different tool, often with a different account,
                a different queue, and a very different wait time. We built
                the first version of our image-to-video pipeline to solve
                that gap for our own small team, then realized every
                marketer, indie studio, and product team we talked to had
                the exact same problem. From the start we standardized on
                NVIDIA GPUs for every render and AWS for the infrastructure
                around them — EC2 for compute, S3 for asset storage, and
                SageMaker for training and fine-tuning — so the platform
                could scale from a handful of early users to tens of
                thousands of creators without a re-architecture along the
                way.
              </p>
            </Reveal>
            <Reveal delay={80} className="hairline-t pt-8 sm:border-l sm:border-[var(--line)] sm:pl-12">
              <h3 className="font-display text-2xl text-paper">Our vision</h3>
              <p className="mt-4 text-muted">
                A world where the distance between an idea and a finished
                visual — a still image or a short video — is a single
                prompt, not a production pipeline. We want Metabob to be the
                default place a marketer generates campaign visuals, a
                studio storyboards a scene, or a developer plugs generation
                straight into their own product, because the quality,
                speed, and control are good enough that building or hiring
                around the problem no longer makes sense.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Our Mission */}
      <section className="hairline-t section-tint py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Our mission"
            title="Make high-quality generative visuals instantly accessible"
            description="Our mission is to put production-quality image and video generation within reach of anyone who needs it — an independent creator on a free plan, a marketing team on a monthly retainer's worth of stock photography budget, or an enterprise generating at a volume that would otherwise require its own ML and infrastructure team. We measure success in render quality, render speed, and how much manual production work our platform removes — not just in how large a model we can train."
            align="center"
          />
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="What drives us" title="Our core values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="card-lift rounded-xl border border-[var(--line)] p-6"
              >
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5b. Technology & Tools */}
      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="How we build"
            title="The technology behind every render"
            description="NVIDIA GPUs and AWS infrastructure, wrapped in a generation pipeline and API that make it usable. Here's what powers each part of the platform."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 60}
                className="card-lift rounded-xl border border-[var(--line)] p-6"
              >
                <h3 className="font-display text-base text-paper">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {group.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Businesses Trust Us */}
      <section className="hairline-t section-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Why creators trust us"
            title="Ten reasons teams stay on Metabob"
            description="Most of our users start on the free plan to test quality and speed, then upgrade once generation becomes part of their actual workflow. Here's what keeps them there."
          />
          <div className="mb-14 grid gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60} className="surface rounded-2xl p-6 text-center">
                <p className="font-display text-3xl text-generated">{stat.value}</p>
                <p className="mono-label mt-2 text-[10px] text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustReasons.map((reason, i) => (
              <Reveal
                key={reason}
                delay={Math.min(i * 30, 240)}
                className="hairline-t flex items-start gap-3 py-4 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {reason}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who uses Metabob */}
      <Industries />

      {/* 7b. Team background */}
      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our team"
            title="Built by ML engineers and infrastructure people"
            description="Metabob is led by a small team with a background in applied machine learning, GPU infrastructure, and creative tooling — the same combination the product depends on. Our AI team designs and fine-tunes the diffusion models behind image and video generation; our infrastructure team keeps NVIDIA GPU clusters on AWS running at 99.9% uptime under widely varying load; and our product and support teams make sure the platform stays usable for a solo creator and an enterprise studio alike. The full team profiles live on our Team page."
          />
        </div>
      </section>

      {/* 8. Future Goals */}
      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Where we're headed" title="Our future goals" />
          <div className="hairline-t">
            {goals.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 80}
                className="hairline-b flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-10"
              >
                <span className="mono-label w-20 shrink-0 text-[11px] text-accent">
                  {item.label}
                </span>
                <div>
                  <h3 className="font-display text-lg text-paper">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="surface rounded-2xl p-10 sm:p-14">
            <p className="mono-label text-[11px] text-accent">
              Registered and operated in India
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              Metabob Private Limited is headquartered in Bengaluru,
              Karnataka, building generative AI infrastructure for creators
              and enterprises everywhere. Every render runs on NVIDIA GPU
              capacity orchestrated across AWS — EC2 for compute, S3 for
              asset storage, and SageMaker and Bedrock for model training
              and hosting — so every account, from a free-tier creator to an
              enterprise studio, generates on the same production-grade
              foundation.
            </p>
            <p className="mt-4 text-paper">
              4th Floor, Prestige Tech Park, Bengaluru, Karnataka 560103,
              India
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Meet the people building Metabob"
        description="Get to know the team behind the platform, or reach out directly to start a conversation."
        primaryHref="/team"
        primaryLabel="Meet the team"
      />
    </div>
  );
}
