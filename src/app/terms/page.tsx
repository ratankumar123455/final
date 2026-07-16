import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern the use of Metabob Private Limited's website, app, and API.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By accessing our website, app, or API, or engaging Metabob Private Limited (\"Metabob\", \"we\", \"us\") for any service, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website, app, or services.",
  },
  {
    title: "2. Our services",
    body: "Metabob provides a generative AI platform for text-to-image and image-to-video generation, accessible through our website, app, and API, running on NVIDIA GPU infrastructure orchestrated on AWS. Specific plan features, usage limits, and pricing are set out on our Pricing page or in a separate Enterprise agreement, which these Terms supplement.",
  },
  {
    title: "3. Account responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account credentials and API keys, and for all activity under your account. You must ensure any prompts, reference images, or other input you submit do not infringe on third-party intellectual property, privacy, or other rights.",
  },
  {
    title: "4. Ownership of generated content",
    body: "Subject to your plan's terms, you own the images and videos you generate using Metabob, and paid plans include a commercial usage license for that content. Free-plan output is watermarked and licensed for evaluation and personal, non-commercial use only. Metabob retains ownership of its underlying models, platform, and technology.",
  },
  {
    title: "5. Acceptable use",
    body: "You may not use our services to generate content that is illegal, infringing, sexually exploitative of minors, deceptive (including non-consensual likeness of real people), or intended to harass or harm others. Metabob reserves the right to suspend or terminate accounts that violate this policy, and to apply automated content safeguards to generation requests.",
  },
  {
    title: "6. Fees, billing, and refunds",
    body: "Paid plans are billed monthly or annually in advance based on the selected credit tier; Enterprise plans are billed per the agreed contract. Usage beyond a plan's included credits may incur additional charges as described on our Pricing page. Fees for credits already consumed are non-refundable; unused subscription time may be refunded case by case.",
  },
  {
    title: "7. Service levels and availability",
    body: "We target 99.9% uptime for our generation infrastructure but do not guarantee uninterrupted availability on Free or Creator plans. Enterprise plans may include a separately agreed SLA. Scheduled maintenance will be communicated in advance where reasonably possible.",
  },
  {
    title: "8. Third-party infrastructure",
    body: "Our platform depends on third-party infrastructure, including AWS cloud services and NVIDIA hardware partners. Metabob is not responsible for outages, pricing changes, or policy changes by these providers, though we will make reasonable efforts to help affected users adapt.",
  },
  {
    title: "9. API usage",
    body: "API access is subject to the rate limits, authentication requirements, and usage terms specified in our API documentation. Automated or bulk requests that circumvent plan limits or degrade service for other users are prohibited.",
  },
  {
    title: "10. Limitation of liability",
    body: "To the maximum extent permitted by applicable law, Metabob Private Limited's total liability arising from any use of our services is limited to the fees paid by you in the preceding three months. We are not liable for indirect, incidental, or consequential damages, including lost profits or lost data.",
  },
  {
    title: "11. Termination",
    body: "You may cancel your subscription at any time; access continues until the end of the current billing period. We may suspend or terminate accounts that violate these Terms, with notice where reasonably possible.",
  },
  {
    title: "12. Governing law and jurisdiction",
    body: "These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of Metabob's services are subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
  },
  {
    title: "13. Changes to these terms",
    body: "We may update these Terms from time to time. Material changes will be posted on this page with an updated revision date, and where reasonably possible, communicated directly to active account holders.",
  },
  {
    title: "14. Contact",
    body: "Questions about these Terms can be sent to hello@metabob.in, by phone at +91 91234 56789, or by post to 4th Floor, Prestige Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560103, India.",
  },
];

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: 16 July 2026. These terms govern your use of Metabob's website, app, and API."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="hairline-t">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={Math.min(i * 30, 150)} className="hairline-b py-8">
                <h2 className="font-display text-xl text-paper">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Questions about these terms can be sent to{" "}
            <a href="mailto:hello@metabob.in" className="text-accent hover:underline">
              hello@metabob.in
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
