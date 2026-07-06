import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Discover & scope",
    description: "We map your business goals, users, and constraints before a line of code is written.",
    visual: (
      <div className="flex flex-wrap gap-2">
        {["business goals", "user research", "tech audit", "roadmap"].map((tag) => (
          <span
            key={tag}
            className="mono-label rounded-full border border-[var(--line-strong)] px-3 py-1.5 text-[10px] text-paper"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    step: "02",
    title: "Design the experience",
    description: "Wireframes and UI/UX design turn the plan into a clickable, testable product.",
    visual: (
      <div>
        <div
          className="h-24 rounded-lg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(91,33,255,0.5), rgba(0,217,255,0.25) 60%, rgba(27,36,38,0.92))",
          }}
        />
        <div className="mt-3 flex items-center gap-2">
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-4/5 rounded-full bg-gradient-brand" />
          </span>
          <span className="mono-label text-[9px] text-muted-2">v2 approved</span>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Build & integrate",
    description: "Engineers ship in short sprints — website, software, or app — with APIs and cloud wired in.",
    visual: (
      <div className="space-y-3">
        {["Frontend", "Backend & APIs", "QA & testing"].map((label, i) => (
          <div key={label}>
            <div className="mono-label mb-1.5 flex justify-between text-[9px] text-muted-2">
              <span>{label}</span>
              <span>{[80, 65, 55][i]}%</span>
            </div>
            <span className="block h-1 overflow-hidden rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-brand"
                style={{ width: `${[80, 65, 55][i]}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    step: "04",
    title: "Test & refine",
    description: "Real users, real devices, real load — issues get fixed before launch, not after.",
    visual: (
      <div className="flex flex-wrap gap-2">
        {["Cross-browser", "Load testing", "Security review", "Accessibility"].map((tag) => (
          <span
            key={tag}
            className="mono-label rounded-md border border-[var(--line-strong)] px-3 py-1.5 text-[10px] text-scope"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    step: "05",
    title: "Launch & grow",
    description: "We deploy, monitor, and keep improving — Sutertai stays on as your technology partner.",
    visual: (
      <div className="flex items-center justify-between">
        <div>
          <p className="mono-label text-[9px] text-muted-2">Environment</p>
          <p className="mt-1 text-sm text-paper">Production</p>
        </div>
        <span className="flex items-center gap-2">
          <span className="status-dot" />
          <span className="mono-label text-[10px] text-scope">Live</span>
        </span>
      </div>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section id="website-development" className="hairline-b scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Website & Software Development"
          title="From idea to a live, working product"
          description="Custom websites, ecommerce, ERP, CRM, and SaaS platforms — built on a process that keeps you informed at every stage, not just at delivery."
        />
        <div className="hairline-t">
          {steps.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 60}
              className="hairline-b grid gap-8 py-12 sm:grid-cols-[80px_1fr_1fr] sm:items-center"
            >
              <span className="font-display text-3xl text-generated">{item.step}</span>
              <div>
                <h3 className="font-display text-xl text-paper sm:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-sm text-sm text-muted">{item.description}</p>
              </div>
              <div className="surface rounded-xl p-5">{item.visual}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
