import { Megaphone, ShoppingBag, Clapperboard, Gamepad2, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cases: {
  tag: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
}[] = [
  {
    tag: "Advertising",
    icon: Megaphone,
    metric: "12x",
    metricLabel: "faster campaign turnaround",
    title: "An ad agency replaced its stock photo budget with generated visuals",
    description:
      "Metabob generated on-brand campaign imagery in hours instead of the usual multi-week shoot-and-license cycle, freeing budget for media spend.",
  },
  {
    tag: "E-commerce",
    icon: ShoppingBag,
    metric: "3,200+",
    metricLabel: "product images generated monthly",
    title: "A retail brand generates every new product shot with Metabob",
    description:
      "Text-to-image generation replaced recurring studio photo shoots for catalog updates, with image-to-video adding turntable clips for the same SKUs.",
  },
  {
    tag: "Film",
    icon: Clapperboard,
    metric: "70%",
    metricLabel: "less time on pre-visualization",
    title: "An indie studio storyboards entire scenes before a single frame is shot",
    description:
      "Concept art generated from script excerpts, then animated into rough motion tests, gave the production team a shared visual language early.",
  },
  {
    tag: "Gaming",
    icon: Gamepad2,
    metric: "5x",
    metricLabel: "more concept variations explored",
    title: "A game studio explores five times more art directions per sprint",
    description:
      "Batch generation let the art team compare dozens of environment and character concepts before committing an artist's time to final assets.",
  },
];

export default function CaseStudies() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="What teams build with Metabob"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {cases.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-8"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-white/50">
                  <item.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="mono-label mt-4 block text-[10px] text-accent">
                  {item.tag}
                </span>
                <p className="font-display mt-2 text-4xl text-generated">
                  {item.metric}
                </p>
                <p className="mono-label mt-1 text-[10px] text-muted">
                  {item.metricLabel}
                </p>
                <h3 className="font-display mt-6 text-xl leading-snug text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
