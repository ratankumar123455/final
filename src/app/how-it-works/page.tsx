import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Metabob turns a text prompt into an image and an image into video — the generation pipeline, from prompt to export.",
};

const detailedSteps = [
  {
    step: "01",
    title: "Write a prompt",
    description:
      "Describe the subject, style, lighting, and composition you want in plain language — no special syntax required.",
  },
  {
    step: "02",
    title: "Generate the image",
    description:
      "The prompt is routed to a dedicated NVIDIA GPU, where a fine-tuned diffusion model renders the image, typically in under 5 seconds.",
  },
  {
    step: "03",
    title: "Refine or regenerate",
    description:
      "Adjust the prompt, apply a style preset, or inpaint just the part of the image that needs to change — without starting over.",
  },
  {
    step: "04",
    title: "Animate into video",
    description:
      "Send the finished image to the image-to-video pipeline, set camera motion and clip length, and render a short, motion-consistent clip.",
  },
  {
    step: "05",
    title: "Export & ship",
    description:
      "Download the image or video in the resolution and format you need, or pull it directly into your product through the API.",
  },
];

const imageWorkflow = [
  "Write or refine a prompt describing subject, style, and composition.",
  "Render on dedicated NVIDIA GPU capacity — most images finish in under 5 seconds.",
  "Inpaint, regenerate, or batch variations without re-describing the whole scene.",
  "Export up to 4K, or send straight to the image-to-video pipeline.",
];

const videoWorkflow = [
  "Select a generated or uploaded image as the starting frame.",
  "Choose camera motion — pan, zoom, or orbit — and target clip length.",
  "Render on the same NVIDIA GPU clusters as image generation.",
  "Export up to 1080p at 24-30fps, loop, extend, or re-render as needed.",
];

export default function HowItWorksPage() {
  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            From a prompt to a finished video with <span className="text-generated">Metabob</span>
          </>
        }
        description="One pipeline, five steps — from writing a prompt to exporting a finished image or video."
      />

      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="The pipeline" title="Five steps, prompt to export" />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {detailedSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 60} className="hairline-t pt-6">
                <span className="font-display text-3xl text-generated">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-b py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
          <Reveal className="card-lift rounded-2xl border border-[var(--line)] p-8">
            <h3 className="font-display text-2xl text-paper">Text-to-image workflow</h3>
            <ol className="mt-6 space-y-4">
              {imageWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="font-display text-accent">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80} className="card-lift rounded-2xl border border-[var(--line)] p-8">
            <h3 className="font-display text-2xl text-paper">Image-to-video workflow</h3>
            <ol className="mt-6 space-y-4">
              {videoWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="font-display text-accent">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="hairline-b py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Infrastructure"
            title="The same pipeline, whether you're in the app or calling the API"
            description="NVIDIA GPUs and AWS infrastructure sit behind every render, whether it's triggered from our workspace or from your own product through the API."
            align="center"
          />
        </div>
      </section>

      <CtaBanner
        title="Ready to generate your first image?"
        description="Create a free account and render your first image in under a minute."
      />
    </div>
  );
}
