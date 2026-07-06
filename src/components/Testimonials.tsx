import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Sutertai rebuilt our website and our SEO strategy at the same time — for the first time, our marketing and our technology were actually pulling in the same direction.",
    name: "Aditi Rao",
    role: "Marketing Director, a retail chain client",
    tone: "linear-gradient(150deg, rgba(5,150,105,0.9), rgba(18,18,18,0.9))",
  },
  {
    quote:
      "The CRM and automation build paid for itself in the first quarter. Our sales team spends its time closing deals now, not entering data.",
    name: "Karan Mehta",
    role: "Founder, a real estate client",
    tone: "linear-gradient(150deg, rgba(34,197,94,0.85), rgba(18,18,18,0.9))",
  },
  {
    quote:
      "They shipped our MVP in three weeks flat and stayed on afterward as our technology partner. That long-term relationship is rare to find.",
    name: "Priya Nair",
    role: "Founder, a SaaS startup client",
    tone: "linear-gradient(150deg, rgba(20,241,149,0.85), rgba(18,18,18,0.9))",
  },
  {
    quote:
      "The AI chatbot they built handles most of our intake now. Response times dropped from hours to seconds, and our staff finally has room to breathe.",
    name: "Devansh Iyer",
    role: "Operations Lead, a healthcare client",
    tone: "linear-gradient(150deg, rgba(5,150,105,0.6), rgba(34,197,94,0.5))",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What clients say"
          title="Trusted by the teams doing the work"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-8"
            >
              <p className="text-lg leading-relaxed text-paper">
                “{item.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm text-pure"
                  style={{ backgroundImage: item.tone }}
                  aria-hidden="true"
                >
                  {initials(item.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-paper">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
