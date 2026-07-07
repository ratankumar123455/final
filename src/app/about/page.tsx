import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Industries from "@/components/Industries";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sutertai Private Limited is an AI-powered digital marketing and technology agency based in Prayagraj, India, serving startups and enterprises worldwide.",
};

const stats = [
  { value: "150+", label: "Happy clients" },
  { value: "300+", label: "Projects delivered" },
  { value: "12", label: "Countries served" },
  { value: "6", label: "Industry awards" },
];

const values = [
  {
    title: "Client-first",
    description: "Every roadmap, sprint, and campaign is scoped around your business outcome, not our convenience.",
  },
  {
    title: "Transparency",
    description: "Clear pricing, clear timelines, and a single point of contact — no surprise invoices, ever.",
  },
  {
    title: "Craft",
    description: "We'd rather ship fewer features that work perfectly than a long list that half-works.",
  },
  {
    title: "Long-term thinking",
    description: "We build systems that scale with you for years, not campaigns that expire at delivery.",
  },
];

const trustReasons = [
  "24/7 support from a dedicated account team",
  "Experienced, senior-led engineering and marketing team",
  "Affordable, transparent project and retainer pricing",
  "Latest AI, cloud, and automation technology",
  "Security and data privacy built into every build",
  "Fast delivery — most projects launch inside 3 weeks",
  "Custom-built solutions, never a one-size template",
  "Scalable architecture that grows with your business",
  "Long-term partnership, not one-off delivery",
  "Full-service: marketing and engineering under one team",
];

const goals = [
  {
    label: "Now",
    title: "Deepening AI product capability",
    description:
      "Expanding our applied AI and automation practice so more clients can run chatbots, agents, and predictive analytics in production.",
  },
  {
    label: "Next",
    title: "Regional expansion across India and the Gulf",
    description:
      "Growing our team and client base across Uttar Pradesh, wider India, and the Middle East, closer to the businesses we serve.",
  },
  {
    label: "Later",
    title: "A dedicated products division",
    description:
      "Turning repeatable client solutions — CRM templates, automation kits, AI agents — into products businesses can adopt directly.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Building digital growth for{" "}
            <span className="text-generated">ambitious businesses</span>
          </>
        }
        description="Sutertai Private Limited is an AI-powered digital marketing and technology agency. We build websites, software, AI products, and automation systems that help startups and enterprises grow."
      />

      {/* 1. Company Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Who we are"
            title="A full-service digital partner, not a single-service vendor"
            description="Sutertai Private Limited was founded to close the gap between marketing agencies that don't build technology, and software vendors that don't understand growth. We do both, as one team, so your website, your SEO, your CRM, and your AI automation are never working against each other."
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
                Sutertai started in Prayagraj with a simple observation:
                small and mid-sized businesses were being sold marketing
                without technology, or technology without a growth plan.
                We began as a small team building websites and running
                campaigns for local businesses, and grew into a full digital
                agency as clients asked us to solve bigger problems —
                custom software, CRM systems, and eventually AI automation.
                Every capability we offer today exists because a client
                needed it first.
              </p>
            </Reveal>
            <Reveal delay={80} className="hairline-t pt-8 sm:border-l sm:border-[var(--line)] sm:pl-12">
              <h3 className="font-display text-2xl text-paper">Our vision</h3>
              <p className="mt-4 text-muted">
                A world where any business, regardless of size or location,
                can access the same quality of digital marketing, software,
                and AI infrastructure that used to be reserved for
                enterprises with in-house teams. We want Sutertai to be the
                team that makes advanced technology and disciplined growth
                marketing accessible to founders who are still doing three
                jobs at once.
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
            title="Make world-class digital growth accessible"
            description="Our mission is to give every client — from a two-person startup to an established enterprise — a single, accountable partner for marketing, technology, and AI. We measure success in client revenue, leads, and hours saved, not in hours billed."
            align="center"
          />
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="What drives us" title="Our core values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* 6. Why Businesses Trust Us */}
      <section className="hairline-t section-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Why businesses trust us"
            title="Ten reasons clients stay with Sutertai"
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

      {/* 7. Industries We Serve */}
      <Industries />

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
              Sutertai Private Limited is headquartered in Prayagraj, Uttar
              Pradesh, India, building digital marketing, software, and AI
              solutions for clients everywhere.
            </p>
            <p className="mt-4 text-paper">
              174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj,
              Uttar Pradesh 211002, India
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Meet the people building Sutertai"
        description="Get to know the team behind the work, or reach out directly to start a project."
        primaryHref="/team"
        primaryLabel="Meet the team"
      />
    </div>
  );
}
