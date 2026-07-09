import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "The business problems Sutertai solves — digital growth, business automation, outdated technology, and AI transformation.",
};

function ProblemCard({
  problem,
  solution,
  alt,
  delay,
}: {
  problem: string;
  solution: string;
  alt?: boolean;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={`neo-card ${alt ? "neo-card-alt" : ""} p-6`}>
      <p className="mono-label text-[10px] text-muted">Problem</p>
      <h3 className="font-display mt-2 text-lg text-paper">{problem}</h3>
      <p className="mono-label mt-4 text-[10px] text-accent">Sutertai&apos;s fix</p>
      <p className="mt-2 text-sm text-muted">{solution}</p>
    </Reveal>
  );
}

const growthProblems = [
  { problem: "Low website traffic", solution: "Technical SEO, content strategy, and a site built to actually rank — not just look good." },
  { problem: "Poor branding", solution: "A clear brand identity and message so visitors trust you before they've read a word." },
  { problem: "Low sales conversion", solution: "Conversion-focused page design, copy, and funnels tested against real user behavior." },
  { problem: "No inbound leads", solution: "Lead generation campaigns across SEO, paid ads, and content, built to fill your pipeline." },
  { problem: "Weak online presence", solution: "A consistent presence across your website, socials, and search — one brand, everywhere." },
  { problem: "Poor search rankings", solution: "On-page, technical, and authority SEO addressed together, not as an afterthought." },
  { problem: "Losing to competitors", solution: "Competitive positioning and campaigns that target the gaps your competitors leave open." },
];

const automationProblems = [
  { problem: "Manual, repetitive work", solution: "Workflow automation that removes the busywork from invoicing, follow-ups, and reporting.", alt: true },
  { problem: "Everything lives in Excel", solution: "A real CRM or ERP that replaces spreadsheets with a system your whole team can trust.", alt: true },
  { problem: "Disorganized customer management", solution: "A CRM that tracks every lead and customer touchpoint in one place, automatically.", alt: true },
  { problem: "Broken internal workflows", solution: "Process mapping and automation that connects the tools you already use.", alt: true },
];

const techProblems = [
  { problem: "An old, outdated website", solution: "A modern rebuild on current frameworks, built for speed, SEO, and conversions." },
  { problem: "A slow-loading website", solution: "Performance engineering — image optimization, caching, and clean code — for sub-2s loads." },
  { problem: "Poor security posture", solution: "Encryption, access controls, and regular security review built into every build." },
  { problem: "A confusing, dated UI", solution: "UI/UX redesign grounded in real user research, not just a fresh coat of paint." },
  { problem: "No mobile experience", solution: "Responsive, mobile-first design and native or cross-platform app builds." },
  { problem: "Outdated internal software", solution: "Modern replacements for legacy systems, migrated without disrupting operations." },
  { problem: "Can't scale with demand", solution: "AWS cloud infrastructure and architecture designed to handle 10x growth without a rebuild." },
];

const aiPoints = [
  { title: "Chatbots", description: "Always-on conversational agents that answer questions and qualify leads instantly." },
  { title: "Predictive Analytics", description: "Forecasting models that tell you what's likely to happen, not just what already did." },
  { title: "Automation", description: "End-to-end pipelines that remove manual steps from your daily operations." },
  { title: "Lead Qualification", description: "AI that scores and routes leads before your sales team ever sees them." },
  { title: "AI Marketing", description: "Campaigns that optimize targeting and spend in real time, not once a month." },
  { title: "AI Products", description: "Custom AI features built directly into your own product or platform." },
];

export default function SolutionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            The problems we&apos;re built to <span className="text-generated">solve</span>
          </>
        }
        description="Every business we work with is stuck on one of four problems: growth, automation, technology, or AI readiness. Here's exactly how Sutertai solves each one."
      />

      {/* 1. Digital Growth Problems */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]">01 — Digital Growth</span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            Traffic, branding, and sales problems
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            Most businesses that come to us aren&apos;t short on effort —
            they&apos;re short on a system. They&apos;re posting on social
            media with no strategy, running ads with no landing page built
            to convert, or sitting on page four of search results wondering
            why competitors with worse products are getting more calls. Low
            traffic, weak branding, and no inbound leads are symptoms of the
            same root cause: no connected growth engine. Sutertai fixes this
            by treating SEO, branding, paid media, and conversion design as
            one system instead of four separate vendors who don&apos;t talk
            to each other. We start by auditing what&apos;s actually costing
            you customers, then rebuild the parts that are broken —
            whether that&apos;s your search visibility, your homepage, or
            the story your brand tells before a single sales call happens.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {growthProblems.map((item, i) => (
              <ProblemCard key={item.problem} {...item} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Business Automation Problems */}
      <section className="hairline-b section-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]" style={{ background: "var(--scope)", color: "var(--ink)" }}>
            02 — Business Automation
          </span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            Manual work is quietly capping your growth
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            If your business still runs on shared spreadsheets, manual
            follow-up emails, and someone remembering to update a customer
            record, you don&apos;t have a growth problem — you have a
            ceiling. Every hour your team spends on data entry, invoice
            chasing, or manually assigning leads is an hour not spent on the
            work that actually needs a human. We&apos;ve seen this exact
            pattern across retail, real estate, and professional services
            clients: the business is winning customers faster than its own
            operations can keep up. Sutertai builds CRM and ERP systems
            tailored to how your team actually works, then automates the
            workflows around them — lead routing, follow-up sequences,
            reporting, and approvals — so growth doesn&apos;t mean hiring
            three more people just to keep the spreadsheets updated.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {automationProblems.map((item, i) => (
              <ProblemCard key={item.problem} {...item} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technology Problems */}
      <section className="hairline-b py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]">03 — Technology</span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            Your technology should be an advantage, not a liability
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            An old website doesn&apos;t just look dated — it loses you
            customers on mobile, ranks worse on search, and quietly
            increases your security exposure with every year it goes
            un-patched. We regularly inherit systems built on frameworks
            that stopped receiving updates years ago, with no mobile
            experience, no monitoring, and no plan for what happens if
            traffic doubles overnight. Modernizing technology doesn&apos;t
            have to mean a risky, months-long rebuild that stalls the
            business. Sutertai migrates and rebuilds incrementally where
            possible — starting with what&apos;s costing you the most in
            speed, security, or lost conversions — on a modern stack
            designed to scale on AWS cloud infrastructure from day one.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techProblems.map((item, i) => (
              <ProblemCard key={item.problem} {...item} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI Transformation */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="neo-chip mono-label mb-6 px-4 py-1.5 text-[11px]" style={{ background: "var(--green)", color: "var(--ink)" }}>
            04 — AI Transformation
          </span>
          <h2 className="font-display max-w-3xl text-4xl text-paper sm:text-5xl">
            AI isn&apos;t a feature anymore — it&apos;s the operating model
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted">
            The businesses pulling ahead right now aren&apos;t necessarily
            spending more — they&apos;re spending smarter, with AI doing the
            first pass on work that used to need a full team. Chatbots
            handle first-line support around the clock. Predictive
            analytics flags which customers are about to churn before they
            do. Lead qualification models make sure your sales team only
            talks to people ready to buy. None of this requires becoming an
            AI company — it requires a partner who can identify where AI
            actually moves the needle in your business versus where
            it&apos;s just a buzzword on a slide. Sutertai builds this
            incrementally: one automation, one chatbot, one predictive
            model at a time, each one paying for itself before we build the
            next. That&apos;s what a future-ready business looks like — not
            a wholesale reinvention, but a steady compounding of small,
            working AI systems.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiPoints.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="neo-card p-6">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Which of these problems is holding you back?"
        description="Tell us where you're stuck — growth, automation, technology, or AI — and we'll show you exactly how we'd fix it."
      />
    </div>
  );
}
