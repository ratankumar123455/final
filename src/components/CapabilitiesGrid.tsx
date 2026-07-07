import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    tag: "Growth",
    title: "SEO & Performance Ads",
    description: "Technical SEO, content, and paid campaigns engineered for ROI.",
    tone: "linear-gradient(150deg, rgba(5,150,105,0.5), rgba(18,18,18,0.92) 70%)",
  },
  {
    tag: "Reach",
    title: "Social Media Marketing",
    description: "Content, community management, and paid social that compounds.",
    tone: "linear-gradient(150deg, rgba(34,197,94,0.4), rgba(18,18,18,0.92) 70%)",
  },
  {
    tag: "Identity",
    title: "Branding",
    description: "Positioning, visual identity, and messaging that earns trust fast.",
    tone: "linear-gradient(150deg, rgba(20,241,149,0.4), rgba(18,18,18,0.92) 70%)",
  },
  {
    tag: "Automation",
    title: "AI Marketing Automation",
    description: "Lead scoring, nurture flows, and campaigns that run themselves.",
    tone: "linear-gradient(150deg, rgba(5,150,105,0.3), rgba(34,197,94,0.2) 60%, rgba(18,18,18,0.92))",
  },
  {
    tag: "Content",
    title: "Content & Email Marketing",
    description: "Editorial calendars, lifecycle email, and content that converts.",
    tone: "linear-gradient(150deg, rgba(34,197,94,0.25), rgba(18,18,18,0.92) 70%)",
  },
  {
    tag: "Pipeline",
    title: "Lead Generation",
    description: "Full-funnel campaigns built to fill your pipeline, not just your inbox.",
    tone: "linear-gradient(150deg, rgba(5,150,105,0.22), rgba(18,18,18,0.92) 70%)",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section id="digital-marketing" className="hairline-b section-tint scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Digital Marketing"
          title="Marketing built to be measured, not just admired"
        />
        <p className="mb-10 max-w-2xl text-muted">
          Traffic without conversion is a vanity metric. Sutertai runs SEO,
          paid media, content, and AI-driven marketing automation as one
          connected system — so every channel feeds the next, and every
          rupee spent is traceable to a lead, a signup, or a sale. From
          performance marketing and email lifecycles to branding that makes
          people trust you before they&apos;ve spoken to your team, this is
          marketing built for businesses that need to grow, not just look
          good doing it.
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
