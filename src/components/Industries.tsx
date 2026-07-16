import {
  Megaphone,
  Film,
  Gamepad2,
  ShoppingCart,
  Newspaper,
  Building2,
  GraduationCap,
  Palette,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const industries: { title: string; description: string; tone: string; icon: LucideIcon }[] = [
  {
    title: "Marketing & Advertising",
    description: "Campaign visuals and short video ads generated and iterated in hours, not weeks.",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.4), rgba(253,246,233,0.92) 70%)",
    icon: Megaphone,
  },
  {
    title: "Film & Video Production",
    description: "Concept art, storyboards, and animated pre-visualization clips for production teams.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.45), rgba(253,246,233,0.92) 70%)",
    icon: Film,
  },
  {
    title: "Gaming & Game Studios",
    description: "Concept art, environment tiles, and character animation references at scale.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.4), rgba(253,246,233,0.92) 70%)",
    icon: Gamepad2,
  },
  {
    title: "E-commerce & Retail",
    description: "Product shots and short turntable-style video clips without a physical photo shoot.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.3), rgba(168,216,232,0.2) 60%, rgba(253,246,233,0.92))",
    icon: ShoppingCart,
  },
  {
    title: "Media & Publishing",
    description: "Editorial illustrations and social-ready video snippets for fast-moving newsrooms.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.32), rgba(253,246,233,0.92) 70%)",
    icon: Newspaper,
  },
  {
    title: "Enterprise & SaaS",
    description: "On-brand imagery for product marketing, decks, and in-app content, generated via API.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.25), rgba(168,216,232,0.18) 60%, rgba(253,246,233,0.92))",
    icon: Building2,
  },
  {
    title: "Education & E-learning",
    description: "Custom illustrations and short explainer animations for course content.",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.3), rgba(253,246,233,0.92) 70%)",
    icon: GraduationCap,
  },
  {
    title: "Independent Creators",
    description: "Concept art, album covers, and animated clips for solo artists and small studios.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.35), rgba(253,246,233,0.92) 70%)",
    icon: Palette,
  },
];

export default function Industries() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who uses Metabob"
          title="Built for anyone who needs visuals, fast"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="card-lift rounded-xl border border-[var(--line)] p-5"
            >
              <div
                className="flex h-24 items-center justify-center rounded-lg border border-[var(--line)]"
                style={{ backgroundImage: item.tone }}
              >
                <item.icon className="h-9 w-9 text-pure" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3 className="font-display mt-4 text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
