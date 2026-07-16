import { Type, Layers, Palette, Wand2, Grid3x3, SlidersHorizontal, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const capabilities: { tag: string; title: string; description: string; tone: string; icon: LucideIcon }[] = [
  {
    tag: "Prompting",
    title: "Natural Language Prompts",
    description: "Describe subject, style, lighting, and composition in plain text.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.5), rgba(253,246,233,0.92) 70%)",
    icon: Type,
  },
  {
    tag: "Resolution",
    title: "Up to 4K Output",
    description: "Generate print- and production-ready images at high resolution.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.4), rgba(253,246,233,0.92) 70%)",
    icon: Layers,
  },
  {
    tag: "Style",
    title: "Style Presets & References",
    description: "Match a brand's visual identity or a specific artistic style on demand.",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.4), rgba(253,246,233,0.92) 70%)",
    icon: Palette,
  },
  {
    tag: "Control",
    title: "Inpainting & Editing",
    description: "Regenerate just the part of an image that needs to change, in place.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.3), rgba(168,216,232,0.2) 60%, rgba(253,246,233,0.92))",
    icon: Wand2,
  },
  {
    tag: "Scale",
    title: "Batch Generation",
    description: "Generate dozens of variations from one prompt for campaigns or catalogs.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.25), rgba(253,246,233,0.92) 70%)",
    icon: Grid3x3,
  },
  {
    tag: "Fine-tune",
    title: "Advanced Parameters",
    description: "Control seed, guidance scale, and negative prompts for repeatable results.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.22), rgba(253,246,233,0.92) 70%)",
    icon: SlidersHorizontal,
  },
];

export default function CapabilitiesGrid() {
  return (
    <section id="text-to-image" className="hairline-b section-tint scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Text-to-Image"
          title="From a sentence to a finished image"
        />
        <p className="mb-10 max-w-2xl text-muted">
          A prompt is the fastest interface for a creative idea. Metabob&apos;s
          text-to-image pipeline turns natural language into high-resolution
          images in a few seconds, with enough control over style, composition,
          and detail that the first result is usually close to final. Whether
          it&apos;s a single hero image or two hundred product variations,
          the same NVIDIA-accelerated pipeline handles it — no separate
          rendering tool, no manual retouching pass required to get something
          you can ship.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="card-lift rounded-2xl border border-[var(--line)] p-5"
            >
              <div
                className="flex h-28 items-center justify-center rounded-lg border border-[var(--line)]"
                style={{ backgroundImage: item.tone }}
              >
                <item.icon className="h-8 w-8 text-pure" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="mono-label text-[10px] text-accent">{item.tag}</span>
              </div>
              <h3 className="font-display mt-2 text-lg text-paper">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
