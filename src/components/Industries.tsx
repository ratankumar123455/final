import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const industries = [
  {
    title: "Retail & E-commerce",
    description: "Storefronts, catalogs, and marketing funnels engineered to convert browsers into buyers.",
    tone: "linear-gradient(150deg, rgba(91,33,255,0.45), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Real Estate",
    description: "Listing platforms, CRM, and lead-gen campaigns built for long sales cycles.",
    tone: "linear-gradient(150deg, rgba(0,217,255,0.35), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Healthcare",
    description: "Patient-facing apps and internal automation that respect compliance from day one.",
    tone: "linear-gradient(150deg, rgba(20,241,149,0.35), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Finance & Fintech",
    description: "Secure platforms, dashboards, and automation that meet audit and compliance needs.",
    tone: "linear-gradient(150deg, rgba(91,33,255,0.25), rgba(0,217,255,0.2) 60%, rgba(27,36,38,0.92))",
  },
  {
    title: "Education",
    description: "Learning platforms and enrollment funnels that scale with your student base.",
    tone: "linear-gradient(150deg, rgba(0,217,255,0.28), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Hospitality & Travel",
    description: "Booking systems and marketing campaigns tuned to seasonal demand.",
    tone: "linear-gradient(150deg, rgba(91,33,255,0.35), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Manufacturing & Logistics",
    description: "ERP, inventory, and workflow automation that replace spreadsheets for good.",
    tone: "linear-gradient(150deg, rgba(0,217,255,0.32), rgba(27,36,38,0.92) 70%)",
  },
  {
    title: "Professional Services",
    description: "Branding, websites, and CRM that make a small team look and run like a big one.",
    tone: "linear-gradient(150deg, rgba(20,241,149,0.3), rgba(0,217,255,0.18) 60%, rgba(27,36,38,0.92))",
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
                className="h-24 rounded-lg border border-[var(--line)]"
                style={{ backgroundImage: item.tone }}
                aria-hidden="true"
              />
              <h3 className="font-display mt-4 text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
