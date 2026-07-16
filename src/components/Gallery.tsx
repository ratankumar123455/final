import {
  Camera,
  Sparkles,
  Palette,
  Clapperboard,
  ShoppingBag,
  Mountain,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiles: { label: string; span: string; height: string; tone: string; icon: LucideIcon }[] = [
  {
    label: "Photorealistic portrait",
    span: "lg:col-span-4 lg:row-span-2",
    height: "h-64 lg:h-full",
    tone: "linear-gradient(155deg, rgba(143,188,148,0.55), rgba(253,246,233,0.95) 65%)",
    icon: Camera,
  },
  {
    label: "Stylized concept art",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(168,216,232,0.4), rgba(253,246,233,0.95) 65%)",
    icon: Sparkles,
  },
  {
    label: "Brand & campaign visual",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(244,169,136,0.4), rgba(253,246,233,0.95) 65%)",
    icon: Palette,
  },
  {
    label: "Animated product turntable",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(143,188,148,0.3), rgba(168,216,232,0.25) 60%, rgba(253,246,233,0.95))",
    icon: ShoppingBag,
  },
  {
    label: "Image-to-video clip",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(168,216,232,0.5), rgba(253,246,233,0.95) 65%)",
    icon: Clapperboard,
  },
  {
    label: "Landscape & environment art",
    span: "lg:col-span-4",
    height: "h-48",
    tone: "linear-gradient(155deg, rgba(143,188,148,0.5), rgba(253,246,233,0.95) 65%)",
    icon: Mountain,
  },
];

export default function Gallery() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="A sample of what gets generated"
          description="A cross-section of image and video output — generated end-to-end on Metabob."
        />
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.label}
              delay={i * 50}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${tile.span} ${tile.height}`}
            >
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: tile.tone }}
                aria-hidden="true"
              >
                <tile.icon className="h-12 w-12 text-pure/70" strokeWidth={1.1} />
              </div>
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
