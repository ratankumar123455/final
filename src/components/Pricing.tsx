import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    period: "one-time project",
    description: "For startups launching their first website or brand.",
    features: [
      "5-page marketing website",
      "Basic on-page SEO setup",
      "Brand starter kit (logo + palette)",
      "1 round of revisions",
      "2 weeks turnaround",
    ],
    cta: "Start a project",
    href: "/contact",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,999",
    period: "per month retainer",
    description: "For businesses ready to invest in marketing and product together.",
    features: [
      "Website or app development",
      "SEO + performance ad management",
      "Social media & content marketing",
      "Monthly reporting & strategy calls",
      "Priority support",
    ],
    cta: "Start Growth plan",
    href: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For companies running software, marketing, and automation at scale.",
    features: [
      "Dedicated project & account team",
      "Custom software, CRM, or ERP builds",
      "AI automation & chatbot deployment",
      "SLA-backed support and security review",
      "Quarterly business reviews",
    ],
    cta: "Talk to sales",
    href: "/contact",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="hairline-b section-tint py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your business"
          description="Project-based pricing to launch, or a monthly retainer for ongoing marketing, development, and automation."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className={`surface flex flex-col rounded-2xl p-8 ${
                tier.featured ? "surface-featured" : "card-lift"
              }`}
            >
              {tier.featured && (
                <span className="mono-label mb-4 w-fit rounded-full bg-gradient-brand px-3 py-1 text-[10px] text-pure">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl text-paper">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl text-paper">
                  {tier.price}
                </span>
                <span className="text-sm text-muted">{tier.period}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <MagneticLink
                href={tier.href}
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </MagneticLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
