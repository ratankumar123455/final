import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern the use of Sutertai Private Limited's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By accessing our website or engaging Sutertai Private Limited (\"Sutertai\", \"we\", \"us\") for any service, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.",
  },
  {
    title: "2. Our services",
    body: "Sutertai provides AI-powered digital marketing, website and software development, AI product development, mobile app development, UI/UX design, and business automation and cloud solutions. The specific scope, deliverables, timeline, and pricing for each engagement are set out in a separate project proposal or statement of work agreed with the client, which these Terms supplement.",
  },
  {
    title: "3. Client responsibilities",
    body: "Clients are responsible for providing timely feedback, content, access credentials, and approvals required to deliver a project on schedule. Delays caused by late client input may extend agreed timelines without penalty to Sutertai. Clients must ensure that any content, trademarks, or materials they provide to us do not infringe on third-party rights.",
  },
  {
    title: "4. Ownership of deliverables",
    body: "Upon full payment for a project, the client owns the final deliverables — website code, designs, software, and content — created specifically for that engagement, except for any third-party licenses, open-source components, or Sutertai's pre-existing tools, frameworks, and internal know-how, which remain our property and are licensed to the client for use as part of the delivered work.",
  },
  {
    title: "5. Fees, payment, and refunds",
    body: "Project-based engagements are invoiced according to the milestone schedule in the agreed proposal, typically an upfront deposit followed by milestone or completion payments. Retainer engagements are billed monthly in advance. Late payments may result in paused work. Fees paid for completed milestones or delivered work are non-refundable; refunds for undelivered work are assessed case by case.",
  },
  {
    title: "6. Acceptable use",
    body: "You may not use our services to build, market, or distribute content that is illegal, infringing, deceptive, or intended to harass or harm others. Sutertai reserves the right to decline or discontinue work on any project that violates this policy.",
  },
  {
    title: "7. Warranties and support",
    body: "Sutertai warrants that delivered work will substantially conform to the agreed scope of work. Most engagements include a defined post-launch support window (typically 30 days) for defect fixes at no additional cost; support and enhancements beyond this window are billed under a separate retainer or support agreement.",
  },
  {
    title: "8. Third-party services and tools",
    body: "Projects may rely on third-party platforms — hosting providers, payment gateways, CRM software, or cloud infrastructure. Sutertai is not responsible for outages, pricing changes, or policy changes by these third parties, though we will make reasonable efforts to help clients adapt to such changes.",
  },
  {
    title: "9. Confidentiality",
    body: "Both parties agree to keep confidential any non-public business, technical, or financial information shared during an engagement, and to use it only for the purposes of that engagement. This obligation survives the completion or termination of the project.",
  },
  {
    title: "10. Limitation of liability",
    body: "To the maximum extent permitted by applicable law, Sutertai Private Limited's total liability arising from any engagement is limited to the fees paid by the client for that specific engagement in the preceding three months. We are not liable for indirect, incidental, or consequential damages, including lost profits or lost data.",
  },
  {
    title: "11. Termination",
    body: "Either party may terminate an ongoing engagement with 30 days' written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date, and Sutertai will deliver all completed work product to date.",
  },
  {
    title: "12. Service availability",
    body: "For hosted or managed services, we target 99.9% uptime but do not guarantee uninterrupted availability. Scheduled maintenance will be communicated in advance where reasonably possible.",
  },
  {
    title: "13. Governing law and jurisdiction",
    body: "These Terms are governed by the laws of India. Any disputes arising from these Terms or any engagement with Sutertai are subject to the exclusive jurisdiction of the courts in Prayagraj, Uttar Pradesh.",
  },
  {
    title: "14. Changes to these terms",
    body: "We may update these Terms from time to time. Material changes will be posted on this page with an updated revision date and, where an engagement is active, communicated directly to the client.",
  },
  {
    title: "15. Contact",
    body: "Questions about these Terms can be sent to hello@sutertai.com, by phone at +91 74598 87412, or by post to 174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj, Uttar Pradesh 211002, India.",
  },
];

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: 6 July 2026. These terms govern your use of Sutertai's website and services."
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
            <a href="mailto:hello@sutertai.com" className="text-accent hover:underline">
              hello@sutertai.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
