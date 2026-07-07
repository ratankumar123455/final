import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    tag: "Support",
    title: "Chatbots & AI Agents",
    description: "Always-on conversational agents that qualify leads and resolve support tickets.",
    tone: "linear-gradient(150deg, rgba(91,33,255,0.5), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Ops",
    title: "Business & Workflow Automation",
    description: "Repetitive tasks — invoicing, follow-ups, reporting — running without a human in the loop.",
    tone: "linear-gradient(150deg, rgba(0,217,255,0.4), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Build",
    title: "Custom GPT & AI Integrations",
    description: "Purpose-built AI tools wired into your existing systems and data.",
    tone: "linear-gradient(150deg, rgba(20,241,149,0.4), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Insight",
    title: "Data Analytics & ML",
    description: "Predictive models and dashboards that turn raw data into decisions.",
    tone: "linear-gradient(150deg, rgba(91,33,255,0.3), rgba(0,217,255,0.2) 60%, rgba(27,36,38,0.92))",
  },
  {
    tag: "Scale",
    title: "Automation Pipelines",
    description: "End-to-end pipelines connecting your CRM, marketing, and operations tools.",
    tone: "linear-gradient(150deg, rgba(0,217,255,0.25), rgba(27,36,38,0.92) 70%)",
  },
  {
    tag: "Future",
    title: "Machine Learning Solutions",
    description: "Applied ML for forecasting, personalization, and fraud detection.",
    tone: "linear-gradient(150deg, rgba(91,33,255,0.22), rgba(27,36,38,0.92) 70%)",
  },
];

export default function AiSolutions() {
  return (
    <section id="ai-solutions" className="hairline-b section-tint scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Solutions & Automation"
          title="Put AI to work on the tasks slowing you down"
        />
        <p className="mb-10 max-w-2xl text-muted">
          Most businesses don&apos;t need more software — they need the
          software they already have to talk to each other, and the manual
          work between systems to disappear. Sutertai builds chatbots and AI
          agents that handle first-line support and lead qualification,
          workflow automations that replace spreadsheets and manual
          hand-offs, and custom GPT integrations wired directly into your
          CRM, inventory, or support desk. Underneath it, our data analytics
          and machine learning work turns the numbers you&apos;re already
          collecting into forecasts, personalization, and fraud or anomaly
          detection you can act on. We&apos;ve shipped these systems across
          retail, real estate, healthcare, and financial services — the
          pattern repeats everywhere: fewer manual steps, faster response
          times, and a team that spends its day on judgment calls instead of
          data entry. This is what a future-ready business looks like from
          the inside.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="card-lift rounded-2xl border border-[var(--line)] p-5"
            >
              <div
                className="h-28 rounded-lg border border-[var(--line)]"
                style={{ backgroundImage: item.tone }}
                aria-hidden="true"
              />
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
