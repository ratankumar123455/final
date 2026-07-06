import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Sutertai runs a project from first call to launch and ongoing growth — discovery, strategy, design, development, launch, and support.",
};

const detailedSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "We start with a plain conversation about your business, your goals, and what's currently getting in the way — no jargon, no assumptions about what you need.",
  },
  {
    step: "02",
    title: "Strategy & scope",
    description:
      "We turn that conversation into a concrete scope of work — the exact pages, features, or campaigns involved, a timeline, and a fixed or retainer price.",
  },
  {
    step: "03",
    title: "Design & build",
    description:
      "Design and development run in short sprints with regular check-ins, so you're seeing progress every week, not waiting for a single big reveal at the end.",
  },
  {
    step: "04",
    title: "Test & refine",
    description:
      "Every build goes through QA, cross-device testing, and a review round with you before anything goes live — issues get caught before customers see them.",
  },
  {
    step: "05",
    title: "Launch & grow",
    description:
      "We deploy, monitor, and stay on as your partner — most engagements move into an ongoing retainer for updates, marketing, or continued feature development.",
  },
];

const websiteWorkflow = [
  "Kickoff call to confirm sitemap, features, and brand direction.",
  "Wireframes and UI design reviewed and approved before development starts.",
  "Development in weekly sprints, with a staging link you can check anytime.",
  "QA, performance tuning, and launch, followed by a 30-day support window.",
];

const marketingWorkflow = [
  "Audit of your current SEO, ads, and content performance.",
  "A 90-day strategy covering channels, budget, and target metrics.",
  "Campaign build and launch, with weekly optimization in the first month.",
  "Monthly reporting in plain language, tied to leads and revenue.",
];

export default function HowWeWorkPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our process"
        title={
          <>
            How a project with <span className="text-generated">Sutertai</span> works
          </>
        }
        description="From the first call to a live product and an ongoing growth plan — here's exactly what happens at each stage."
      />

      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="The process" title="Five steps, start to finish" />
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
            <h3 className="font-display text-2xl text-paper">Website & software workflow</h3>
            <ol className="mt-6 space-y-4">
              {websiteWorkflow.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="font-display text-accent">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80} className="card-lift rounded-2xl border border-[var(--line)] p-8">
            <h3 className="font-display text-2xl text-paper">Marketing workflow</h3>
            <ol className="mt-6 space-y-4">
              {marketingWorkflow.map((item, i) => (
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
            eyebrow="Communication"
            title="You always know where your project stands"
            description="Weekly updates, a shared project channel, and a single point of contact — no chasing people for status, and no surprises at delivery."
            align="center"
          />
        </div>
      </section>

      <CtaBanner
        title="Ready to start the discovery call?"
        description="Tell us about your business and we'll scope a plan within a few days."
      />
    </div>
  );
}
