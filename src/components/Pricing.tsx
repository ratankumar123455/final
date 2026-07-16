import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "For trying text-to-image and image-to-video generation.",
    features: [
      "50 image credits / month",
      "Standard resolution (1024px)",
      "Watermarked exports",
      "5 video-seconds / month",
      "Community support",
    ],
    cta: "Start for free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Creator",
    price: "₹1,499",
    period: "per month",
    description: "For creators and small teams generating regularly.",
    features: [
      "1,000 image credits / month",
      "Up to 4K resolution, no watermark",
      "100 video-seconds / month",
      "Commercial usage license",
      "Priority render queue",
    ],
    cta: "Start Creator plan",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    description: "For studios and companies generating at scale.",
    features: [
      "Custom / unlimited credits",
      "Dedicated NVIDIA GPU capacity",
      "API access & SDKs",
      "SSO, roles & audit logs",
      "SLA-backed support",
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
          title="Plans that scale with how much you generate"
          description="Start free, upgrade for higher resolution and video, or talk to us about dedicated GPU capacity."
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
