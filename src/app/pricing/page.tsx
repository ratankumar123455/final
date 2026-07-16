import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Metabob pricing — a free plan to try text-to-image and image-to-video generation, a Creator plan for regular use, or a custom Enterprise plan with dedicated GPU capacity.",
};

export default function PricingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple plans, <span className="text-generated">built to scale</span>
          </>
        }
        description="No hidden per-render fees. Start free, upgrade for full resolution and video, or talk to us about dedicated GPU capacity."
      />
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
