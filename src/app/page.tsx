import CtaBanner from "@/components/CtaBanner";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import HeroVisual from "@/components/HeroVisual";
import Gallery from "@/components/Gallery";
import ProductShowcase from "@/components/ProductShowcase";
import WhySutertai from "@/components/WhySutertai";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import AiSolutions from "@/components/AiSolutions";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechPanel from "@/components/TechPanel";
import ScaleChart from "@/components/ScaleChart";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

const heroStats = [
  { value: "150+", label: "Happy clients" },
  { value: "300+", label: "Projects delivered" },
  { value: "12", label: "Countries served" },
  { value: "4.9/5", label: "Client rating" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hairline-b relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
          style={{
            background:
              "radial-gradient(800px circle at 15% -10%, rgba(5,150,105,0.28), transparent 60%), radial-gradient(800px circle at 90% 15%, rgba(34,197,94,0.14), transparent 55%)",
          }}
          aria-hidden="true"
        />
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
                Transform your business{" "}
                <span className="font-light text-muted">with</span>
                <br />
                <span className="text-generated">AI-powered digital solutions.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-xl text-muted">
                Sutertai helps startups and enterprises grow with AI-driven
                marketing, high-performance websites, custom software, and
                business automation — all under one roof.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href="/contact" variant="primary">
                Get Started
              </MagneticLink>
              <MagneticLink href="/contact#consultation" variant="secondary">
                Book Free Consultation
              </MagneticLink>
            </Reveal>
            <Reveal delay={300} className="mt-12 grid w-full max-w-lg grid-cols-4 gap-4 border-t border-[var(--line)] pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl text-paper sm:text-2xl">{stat.value}</p>
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

      <ProductShowcase />

      {/* Section 1: AI Digital Marketing */}
      <CapabilitiesGrid />

      {/* Section 2: Website & Software Development */}
      <ProcessTimeline />
      <TechPanel />

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
