import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const secondary = [
  {
    stat: "24/7",
    title: "Always-on support",
    description: "A dedicated account team that responds inside a business day, every day.",
  },
  {
    stat: "AES-256",
    title: "Security by default",
    description: "Client data, credentials, and code are encrypted at rest and in transit, always.",
  },
];

const supporting = [
  {
    stat: "150+",
    title: "Happy clients",
    description: "Startups and enterprises who've shipped growth with Sutertai.",
  },
  {
    stat: "300+",
    title: "Projects delivered",
    description: "Websites, apps, and AI systems shipped on time, on budget.",
  },
  {
    stat: "12",
    title: "Countries served",
    description: "Clients across India, the Gulf, Europe, and North America.",
  },
];

export default function WhySutertai() {
  return (
    <section className="hairline-b section-tint py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Sutertai"
          title="Engineering and strategy, not just promises"
          description="Serious growth needs serious infrastructure. Here's what's underneath every engagement."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="card-lift flex flex-col justify-between rounded-2xl border border-[var(--line)] p-8 lg:col-span-5 lg:row-span-2">
            <div>
              <span className="mono-label text-[10px] text-accent">Delivery speed</span>
              <h3 className="font-display mt-3 text-2xl text-paper">
                Fast delivery without cutting corners
              </h3>
              <p className="mt-3 max-w-xs text-sm text-muted">
                Median time from kickoff to a live, working first version across
                our website and app engagements.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(var(--signal) 0deg 305deg, rgba(242,240,233,0.08) 305deg 360deg)",
                }}
              >
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[var(--ink)]">
                  <span className="font-display text-2xl text-generated">3 wks</span>
                </div>
              </div>
              <p className="mono-label text-[10px] text-muted-2">
                85% of projects
                <br />
                reach v1 on schedule
              </p>
            </div>
          </Reveal>

          {secondary.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i + 1) * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-7 lg:col-span-7"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <span className="mono-label text-[10px] text-accent">{item.stat}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}

          {supporting.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i + 3) * 60}
              className="card-lift rounded-2xl border border-[var(--line)] p-7 lg:col-span-4"
            >
              <p className="font-display text-2xl text-generated">{item.stat}</p>
              <h3 className="font-display mt-3 text-lg text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Experienced, senior-led team",
            "Affordable, transparent pricing",
            "Latest AI & cloud technology",
            "Scalable, custom-built solutions",
            "Long-term partnership, not one-off delivery",
          ].map((reason) => (
            <div key={reason} className="hairline-t pt-4 text-sm text-muted">
              {reason}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
