import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiles = [
  {
    label: "Ecommerce storefront",
    span: "lg:col-span-4 lg:row-span-2",
    height: "h-64 lg:h-full",
    tone: "linear-gradient(155deg, rgba(91,33,255,0.55), rgba(27,36,38,0.95) 65%)",
  },
  {
    label: "SaaS dashboard UI",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(0,217,255,0.4), rgba(27,36,38,0.95) 65%)",
  },
  {
    label: "Brand identity system",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(20,241,149,0.4), rgba(27,36,38,0.95) 65%)",
  },
  {
    label: "Mobile app design",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(91,33,255,0.3), rgba(0,217,255,0.25) 60%, rgba(27,36,38,0.95))",
  },
  {
    label: "Marketing campaign creative",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(0,217,255,0.5), rgba(27,36,38,0.95) 65%)",
  },
  {
    label: "CRM & automation build",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(91,33,255,0.5), rgba(27,36,38,0.95) 65%)",
  },
];

export default function Gallery() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="A sample of what we've shipped"
          description="A cross-section of recent work — websites, apps, brands, and automation, built for real businesses."
        />
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.label}
              delay={i * 50}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${tile.span} ${tile.height}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: tile.tone }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
                }}
              >
                <p className="mono-label text-[10px] text-paper">{tile.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
