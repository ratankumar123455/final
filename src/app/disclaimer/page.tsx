import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer covering the use of Sutertai Private Limited's website and services.",
};

const sections = [
  {
    title: "1. General information",
    body: "The information provided on the Sutertai Private Limited website is for general informational purposes only. While we strive to keep content accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information, services, or related graphics contained on it.",
  },
  {
    title: "2. No professional advice",
    body: "Content on this website — including blog posts, case studies, and service descriptions — is provided for general guidance and does not constitute legal, financial, tax, or professional advice specific to your business. You should consult a qualified professional before making decisions based on information found on our site.",
  },
  {
    title: "3. Results and case studies",
    body: "Metrics, growth figures, and outcomes referenced on this website, including in testimonials and case studies, reflect specific client circumstances and are not a guarantee of similar results for every business. Marketing, development, and automation outcomes depend on many factors outside our control, including market conditions, industry, and execution on the client's side.",
  },
  {
    title: "4. Third-party links",
    body: "Our website may contain links to third-party websites or services that are not owned or controlled by Sutertai Private Limited. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. Including a link does not imply endorsement of that site.",
  },
  {
    title: "5. External technology and platforms",
    body: "Projects we build may depend on third-party platforms, APIs, cloud providers, or open-source software. We are not responsible for outages, discontinuation, pricing changes, or security incidents originating from these third-party providers, though we will assist clients in adapting where reasonably possible.",
  },
  {
    title: "6. AI-generated and automated content",
    body: "Some services we provide involve AI-generated content, automation, or machine learning outputs. While we design these systems carefully and test them before deployment, AI outputs can occasionally be inaccurate or unexpected. Clients are responsible for reviewing AI-assisted deliverables before relying on them for critical business decisions.",
  },
  {
    title: "7. No guarantee of uninterrupted service",
    body: "While we target high availability for hosted and managed services, we do not guarantee that our website or any service we deliver will be uninterrupted, timely, secure, or error-free at all times.",
  },
  {
    title: "8. Limitation of liability",
    body: "To the fullest extent permitted by law, Sutertai Private Limited disclaims all liability for any loss or damage arising from reliance on information provided on this website, or from the use of, or inability to use, this website or our services, beyond what is set out in our Terms & Conditions.",
  },
  {
    title: "9. Views and opinions",
    body: "Any opinions expressed in blog content, articles, or resources on this website are those of the individual authors and do not necessarily reflect the official policy or position of Sutertai Private Limited.",
  },
  {
    title: "10. Changes to this disclaimer",
    body: "We may update this Disclaimer periodically. Material changes will be posted on this page with an updated revision date.",
  },
  {
    title: "11. Governing law",
    body: "This Disclaimer is governed by the laws of India, with courts in Prayagraj, Uttar Pradesh having exclusive jurisdiction over any related disputes.",
  },
  {
    title: "12. Contact us",
    body: "Questions about this Disclaimer can be directed to hello@sutertai.com, by phone at +91 74598 87412, or by post to 174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj, Uttar Pradesh 211002, India.",
  },
];

export default function DisclaimerPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Last updated: 6 July 2026. Please read this disclaimer carefully before using our website or services."
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
            Questions about this disclaimer can be sent to{" "}
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
