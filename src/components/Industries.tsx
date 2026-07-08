import {
  Store,
  HeartPulse,
  Cpu,
  ShoppingCart,
  Building2,
  Landmark,
  GraduationCap,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const industries: { title: string; description: string; tone: string; icon: LucideIcon }[] = [
  {
    title: "Small Business",
    description: "Affordable websites, marketing, and automation that let a small team compete with bigger budgets.",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.4), rgba(253,246,233,0.92) 70%)",
    icon: Store,
  },
  {
    title: "Healthcare",
    description: "Patient-facing apps, intake automation, and internal tools that respect compliance from day one.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.45), rgba(253,246,233,0.92) 70%)",
    icon: HeartPulse,
  },
  {
    title: "IT & Software Companies",
    description: "White-label development capacity, AI features, and cloud infrastructure for tech teams that need to move faster.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.4), rgba(253,246,233,0.92) 70%)",
    icon: Cpu,
  },
  {
    title: "Retail & E-commerce",
    description: "Storefronts, catalogs, and marketing funnels engineered to convert browsers into buyers.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.3), rgba(168,216,232,0.2) 60%, rgba(253,246,233,0.92))",
    icon: ShoppingCart,
  },
  {
    title: "Real Estate",
    description: "Listing platforms, CRM, and lead-gen campaigns built for long sales cycles.",
    tone: "linear-gradient(150deg, rgba(168,216,232,0.32), rgba(253,246,233,0.92) 70%)",
    icon: Building2,
  },
  {
    title: "Finance & Fintech",
    description: "Secure platforms, dashboards, and automation that meet audit and compliance needs.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.25), rgba(168,216,232,0.18) 60%, rgba(253,246,233,0.92))",
    icon: Landmark,
  },
  {
    title: "Education",
    description: "Learning platforms and enrollment funnels that scale with your student base.",
    tone: "linear-gradient(150deg, rgba(244,169,136,0.3), rgba(253,246,233,0.92) 70%)",
    icon: GraduationCap,
  },
  {
    title: "Professional Services",
    description: "Branding, websites, and CRM that make a small team look and run like a big one.",
    tone: "linear-gradient(150deg, rgba(143,188,148,0.35), rgba(253,246,233,0.92) 70%)",
    icon: Briefcase,
  },
];

export default function Industries() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title="Built for businesses that are ready to grow"
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
