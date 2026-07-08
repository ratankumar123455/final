import { Store, Building2, HeartPulse, Rocket, type LucideIcon } from "lucide-react";
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
    tag: "Retail",
    icon: Store,
    metric: "186%",
    metricLabel: "increase in organic traffic",
    title: "A regional retail chain rebuilt its SEO and content from scratch",
    description:
      "Sutertai rebuilt technical SEO, restructured the content strategy, and shipped a faster storefront — organic traffic nearly tripled within two quarters.",
  },
  {
    tag: "Real Estate",
    icon: Building2,
    metric: "240%",
    metricLabel: "more qualified leads",
    title: "A real estate developer replaced spreadsheets with a real CRM",
    description:
      "A custom CRM and automated lead-scoring pipeline meant sales teams stopped chasing cold leads and started closing warm ones, faster.",
  },
  {
    tag: "Healthcare",
    icon: HeartPulse,
    metric: "62%",
    metricLabel: "faster patient onboarding",
    title: "A healthcare provider automated intake with an AI chatbot",
    description:
      "An AI-powered intake assistant cut manual data entry and appointment scheduling time, freeing front-desk staff for higher-value work.",
  },
  {
    tag: "SaaS",
    icon: Rocket,
    metric: "3 weeks",
    metricLabel: "from kickoff to launch",
    title: "A startup shipped its MVP in three weeks, not three months",
    description:
      "A tightly scoped sprint plan and a proven technology stack got a SaaS founder in front of investors with a working product, not a deck.",
  },
];

export default function CaseStudies() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="What businesses build with Sutertai"
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
