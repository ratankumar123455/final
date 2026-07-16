import CtaBanner from "@/components/CtaBanner";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import HeroVisual from "@/components/HeroVisual";
import Gallery from "@/components/Gallery";
import BentoFeatures from "@/components/BentoFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import WhyMetabob from "@/components/WhyMetabob";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import AiSolutions from "@/components/AiSolutions";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechPanel from "@/components/TechPanel";
import TechLogos from "@/components/TechLogos";
import ScaleChart from "@/components/ScaleChart";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import AnimatedCounter from "@/components/AnimatedCounter";
import AmbientBlobs from "@/components/AmbientBlobs";
import LoginPromo from "@/components/LoginPromo";

const heroStats = [
  { value: "12M+", label: "Images / mo" },
  { value: "40K+", label: "Creators" },
  { value: "4.2s", label: "Avg. render" },
  { value: "99.9%", label: "GPU uptime" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hairline-b relative overflow-hidden">
        <AmbientBlobs className="h-[720px]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-24 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="eyebrow-chip">
                <span className="dot">/</span>
                <span>Metabob Private Limited — Generative AI Platform</span>
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-6 max-w-2xl text-6xl leading-[1.02] font-medium text-paper sm:text-8xl">
                Turn text into images,{" "}
                <span className="text-generated">and images into video</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-xl text-muted">
                Metabob is a generative AI platform that renders your prompts
                into images and animates images into short videos — running
                on dedicated NVIDIA GPUs across AWS infrastructure, built for
                speed and scale.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href="/signup" variant="primary">
                Start Generating Free
              </MagneticLink>
              <MagneticLink href="#services-preview" variant="secondary">
                See the Product
              </MagneticLink>
            </Reveal>
            <Reveal delay={300} className="mt-12 grid w-full max-w-lg grid-cols-4 gap-4 border-t border-[var(--line)] pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl text-paper sm:text-2xl">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mono-label mt-1 text-[9px] text-muted-2">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={200} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      <BentoFeatures />

      <ProductShowcase />

      {/* Section 1: Text-to-Image */}
      <CapabilitiesGrid />

      {/* Section 2: How it works */}
      <ProcessTimeline />
      <TechPanel />
      <TechLogos />

      {/* Section 3: Image-to-Video */}
      <AiSolutions />
      <ScaleChart />

      {/* Section 4: Why Choose Metabob */}
      <WhyMetabob />

      {/* Section 5: Account access */}
      <LoginPromo />

      <Industries />
      <Gallery />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
