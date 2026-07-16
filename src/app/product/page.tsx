import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Metabob's generative AI product — text-to-image and image-to-video generation powered by NVIDIA GPUs on AWS. Features, benefits, and use cases.",
};

function FeatureCard({
  title,
  description,
  alt,
  delay,
}: {
  title: string;
  description: string;
  alt?: boolean;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={`neo-card ${alt ? "neo-card-alt" : ""} p-6`}>
      <h3 className="font-display text-lg text-paper">{title}</h3>
      <p className="mt-3 text-sm text-muted">{description}</p>
    </Reveal>
  );
}

const imageFeatures = [
  { title: "Natural language prompts", description: "Describe subject, style, lighting, and composition in plain text — no prompt-engineering syntax required." },
  { title: "Up to 4K resolution", description: "Render print- and production-ready images without a separate upscaling step." },
  { title: "Style presets & references", description: "Match a brand's visual identity or a specific artistic style consistently, prompt after prompt." },
  { title: "Inpainting & targeted edits", description: "Regenerate just the part of an image that needs to change, without redoing the whole render." },
  { title: "Batch & variation generation", description: "Generate dozens of variations from one prompt for campaigns, catalogs, or A/B testing." },
  { title: "Advanced parameters", description: "Control seed, guidance scale, and negative prompts for repeatable, fine-tuned results." },
  { title: "Sub-5-second average render", description: "Dedicated NVIDIA GPU capacity keeps most renders under five seconds, even at peak load." },
];

const videoFeatures = [
  { title: "Image-to-video animation", description: "Turn any generated or uploaded image into a short video clip with natural, consistent motion.", alt: true },
  { title: "Camera motion control", description: "Add pan, zoom, or orbit motion to a static frame without re-shooting anything.", alt: true },
  { title: "Frame-consistent rendering", description: "Temporal smoothing keeps subjects stable across every frame — no flicker or drift.", alt: true },
  { title: "Up to 1080p, 24-30fps", description: "Broadcast- and social-ready output straight out of the render pipeline.", alt: true },
  { title: "Loop, extend & re-render", description: "Export as a seamless loop, extend clip length, or regenerate a section that didn't land.", alt: true },
];

const benefits = [
  { title: "Cut production time from weeks to minutes", description: "Replace photo shoots and manual animation passes with a prompt and a render queue." },
  { title: "Lower the cost of visual content", description: "Generate as many variations as a campaign needs without paying per asset for a shoot or license." },
  { title: "Keep image and video in one workspace", description: "Generate the still, then animate it — no export, re-upload, or second vendor in between." },
  { title: "Scale output without scaling headcount", description: "Batch generation and the API let a small team produce at the volume of a much larger one." },
  { title: "Stay consistent across a campaign", description: "Style presets and fine-tuning keep every generated asset visually aligned with your brand." },
];

const useCases = [
  { tag: "Advertising", title: "Campaign visuals on a same-day turnaround", description: "Generate on-brand hero images and short video ads without booking a shoot or waiting on stock licensing." },
  { tag: "E-commerce", title: "Product photography without a studio", description: "Generate product shots and animated turntable clips for new SKUs directly from reference images." },
  { tag: "Film & games", title: "Concept art and pre-visualization", description: "Explore art direction and rough motion tests before committing artist time to final assets." },
  { tag: "Product teams", title: "On-demand imagery via API", description: "Call the generation pipeline directly from your own app to power in-product content or personalization." },
  { tag: "Publishing", title: "Editorial visuals on deadline", description: "Generate illustrations and short social clips fast enough to match a newsroom's publishing schedule." },
  { tag: "Independent creators", title: "Concept art and animated clips solo", description: "Produce visuals and short video at a quality and pace that used to require a small studio." },
];

export default function ProductPage() {
  return (
    <div>
      <PageHero
        eyebrow="Product"
        title={
          <>
            Text-to-image and image-to-video, <span className="text-generated">one pipeline</span>
          </>
        }
        description="Metabob is a generative AI platform built around two capabilities: rendering an image from a text prompt, and animating that image into a short video — both running on dedicated NVIDIA GPUs across AWS infrastructure."
      />

      {/* 1. Text-to-Image */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]">01 — Text-to-Image</span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            From a sentence to a finished image
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Type a description — subject, style, lighting, composition — and
            get a high-resolution image back in a few seconds. The pipeline
            runs on custom-trained diffusion models fine-tuned for
            photorealism and stylistic range, rendered on dedicated NVIDIA
            H100 and A100 GPUs so quality doesn&apos;t come at the cost of
            speed. Whether it&apos;s a single hero image or two hundred
            product variations for a catalog refresh, the same pipeline
            handles both without a separate rendering tool or a manual
            retouching pass to get something ready to ship.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {imageFeatures.map((item, i) => (
              <FeatureCard key={item.title} {...item} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Image-to-Video */}
      <section className="hairline-b section-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]" style={{ background: "var(--scope)", color: "var(--ink)" }}>
            02 — Image-to-Video
          </span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            Give a still image somewhere to go
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Any generated or uploaded image can become a short video clip —
            a product turning under studio light, a landscape drifting into
            motion, a character blinking and breathing. Camera motion, loop
            points, and clip length are all controllable, and the underlying
            video diffusion model runs on the same NVIDIA GPU clusters as
            our image pipeline, so there&apos;s no separate tool, export, or
            upload step between generating an image and animating it.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videoFeatures.map((item, i) => (
              <FeatureCard key={item.title} {...item} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]">03 — Benefits</span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            What changes when generation replaces production
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            The gap between having an idea and having a finished visual
            asset is usually measured in days or weeks — booking a shoot,
            briefing an animator, waiting on a licensing approval. Metabob
            collapses that gap to the time it takes to write and refine a
            prompt, without giving up the quality bar a real campaign or
            production needs.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="neo-card p-6">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]" style={{ background: "var(--green)", color: "var(--ink)" }}>
            04 — Use Cases
          </span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            Who generates with Metabob, and why
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, i) => (
              <Reveal key={item.title} delay={i * 40} className="card-lift rounded-2xl border border-[var(--line)] p-6">
                <span className="mono-label text-[10px] text-accent">{item.tag}</span>
                <h3 className="font-display mt-2 text-lg text-paper">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="See it render for yourself"
        description="Start on the free plan and generate your first image in under a minute."
      />
    </div>
  );
}
