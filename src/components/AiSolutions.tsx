import { Clapperboard, MoveDiagonal, RefreshCw, Gauge, Film, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const capabilities: { tag: string; title: string; description: string; tone: string; icon: LucideIcon }[] = [
  {
    tag: "Motion",
    title: "Image-to-Video Animation",
    description: "Turn any still image into a short video clip with natural, consistent motion.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.5), rgba(253,246,233,0.92) 70%)",
    icon: Clapperboard,
  },
  {
    tag: "Camera",
    title: "Camera Motion Control",
    description: "Add pan, zoom, or orbit motion to a static frame without re-shooting anything.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.4), rgba(253,246,233,0.92) 70%)",
    icon: MoveDiagonal,
  },
  {
    tag: "Consistency",
    title: "Frame-Consistent Rendering",
    description: "Temporal smoothing keeps subjects stable across every frame — no flicker or drift.",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.4), rgba(253,246,233,0.92) 70%)",
    icon: RefreshCw,
  },
  {
    tag: "Speed",
    title: "Fast GPU Rendering",
    description: "Most clips render in under a minute on dedicated NVIDIA GPU capacity.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.3), rgba(168,216,232,0.2) 60%, rgba(253,246,233,0.92))",
    icon: Gauge,
  },
  {
    tag: "Format",
    title: "Loop, Extend & Export",
    description: "Export as a seamless loop, extend clip length, or render straight to MP4.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.25), rgba(253,246,233,0.92) 70%)",
    icon: Film,
  },
  {
    tag: "Quality",
    title: "Up to 1080p, 24-30fps",
    description: "Broadcast- and social-ready output straight out of the render pipeline.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.22), rgba(253,246,233,0.92) 70%)",
    icon: Sparkles,
  },
];

export default function AiSolutions() {
  return (
    <section id="image-to-video" className="hairline-b section-tint scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Image-to-Video"
          title="Give a still image somewhere to go"
        />
        <p className="mb-10 max-w-2xl text-muted">
          A single image is a starting point, not the end of the story.
          Metabob&apos;s image-to-video model takes any generated or uploaded
          image and animates it into a short clip — a product turning under
          studio light, a landscape drifting into motion, a character
          blinking and breathing. Camera motion, loop points, and clip length
          are all controllable, and the underlying video diffusion model runs
          on the same NVIDIA GPU clusters as our image pipeline, so there&apos;s
          no separate tool, export, or upload step between generating the
          image and animating it.
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
