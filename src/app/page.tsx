import CtaBanner from "@/components/CtaBanner";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import HeroVisual from "@/components/HeroVisual";
import Gallery from "@/components/Gallery";
import BentoFeatures from "@/components/BentoFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import WhySutertai from "@/components/WhySutertai";
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

const heroStats = [
  { value: "60+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
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
                <span>Sutertai Private Limited — AI-Powered Digital Agency</span>
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-6 max-w-2xl text-6xl leading-[1.02] font-medium text-paper sm:text-8xl">
                Empowering Businesses with{" "}
                <span className="text-generated">AI-Powered Digital Solutions</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-xl text-muted">
                We help businesses accelerate growth with intelligent
                websites, AI automation, custom software, digital marketing,
                branding, and scalable technology solutions that drive
                measurable success.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href="/contact" variant="primary">
                Get Started
              </MagneticLink>
              <MagneticLink href="#services-preview" variant="secondary">
                Explore Services
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

      {/* Section 1: AI Digital Marketing */}
      <CapabilitiesGrid />

      {/* Section 2: Website & Software Development */}
      <ProcessTimeline />
      <TechPanel />
      <TechLogos />

      {/* Section 3: AI Solutions & Automation */}
      <AiSolutions />
      <ScaleChart />

      {/* Section 4: Why Choose Sutertai */}
      <WhySutertai />

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
