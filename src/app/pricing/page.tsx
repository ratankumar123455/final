import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Sutertai pricing — Starter project pricing, a Growth retainer for ongoing marketing and development, or a custom Enterprise plan.",
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
        description="No hidden fees. No vague 'contact us for everything' pricing. Pick a plan that matches where your business is today."
      />
      <Pricing />
      <Faq />
      <CtaBanner />
    </div>
  );
}
