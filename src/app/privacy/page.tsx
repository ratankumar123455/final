import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Metabob Private Limited collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Introduction",
    body: "Metabob Private Limited (\"Metabob\", \"we\", \"us\", or \"our\") operates a generative AI platform for text-to-image and image-to-video generation. This Privacy Policy explains what personal data we collect through our website, app, and API, why we collect it, and the rights you have over it. By using our website, app, or API, you agree to the practices described here.",
  },
  {
    title: "2. Information we collect",
    body: "We collect information you provide directly — your name, email address, phone number, billing details, and any prompts, images, or files you submit for generation. We also collect standard technical data automatically, including IP address, browser type, device information, and API usage, to operate, secure, and bill for the platform.",
  },
  {
    title: "3. How we use your information",
    body: "We use collected data to operate your account, process generation requests, bill for usage, respond to support inquiries, and improve our models and platform. With your consent, we may send product updates or marketing communications — you can opt out at any time. We do not sell your personal data to third parties under any circumstances.",
  },
  {
    title: "4. Prompts, uploads, and generated content",
    body: "Prompts you submit and images you upload are processed to generate your requested output and are stored so you can access your generation history. Free-plan content may be used, in de-identified form, to improve our generative models unless you upgrade to a plan with training opt-out, or opt out directly in account settings. Paid-plan generations are excluded from model training by default.",
  },
  {
    title: "5. Legal basis for processing (GDPR-inspired principles)",
    body: "Where applicable, we process personal data on the basis of your consent, the necessity of processing to perform our contract with you (such as generating and delivering your requested content), and our legitimate interest in operating and improving our platform. We apply data minimization and retain data only as long as needed for the stated purpose or as required by law.",
  },
  {
    title: "6. Cookies and tracking",
    body: "Our website uses cookies and similar technologies for essential functionality and, where enabled, analytics to understand how visitors use our site. See our separate Cookie Policy for full details on the categories of cookies used and how to manage your preferences.",
  },
  {
    title: "7. Data sharing and third parties",
    body: "We share data with trusted service providers who help us operate our business — cloud infrastructure providers (including AWS), payment processors, and communication platforms such as WhatsApp — strictly for the purposes described in this policy. These providers are contractually bound to protect your data. We may also disclose data if required by law, court order, or to protect the rights and safety of Metabob or others.",
  },
  {
    title: "8. Data storage and security",
    body: "Personal data, prompts, and generated content are encrypted at rest and in transit. Access to production systems and account data is restricted to authorized personnel and logged. While we take reasonable technical and organizational measures to protect your data, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "9. Your rights",
    body: "Depending on your location, you may have the right to access, correct, export, or request deletion of your personal data and generation history, and to object to or restrict certain processing, including model-training use of your content. You can exercise any of these rights by contacting us at hello@metabob.in.",
  },
  {
    title: "10. Data retention",
    body: "We retain personal data and generation history only for as long as necessary to fulfil the purposes described in this policy, including any legal, accounting, or reporting requirements, or until you request earlier deletion.",
  },
  {
    title: "11. International data transfers",
    body: "As we serve users across multiple countries and run GPU infrastructure across AWS regions, personal data may be processed or stored outside your home country, including in India where Metabob is headquartered. Where this occurs, we take steps to ensure an equivalent level of protection is applied to your data.",
  },
  {
    title: "12. Children's privacy",
    body: "Our services are intended for individuals and businesses over the age of 18. We do not knowingly collect personal data from children, and any such data discovered will be deleted promptly.",
  },
  {
    title: "13. Changes to this policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Material changes will be posted on this page with an updated revision date.",
  },
  {
    title: "14. Governing law",
    body: "This Privacy Policy is governed by the laws of India. Any disputes arising from this policy are subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
  },
  {
    title: "15. Contact us",
    body: "Questions about this Privacy Policy or your data can be directed to hello@metabob.in, by phone at +91 91234 56789, or by post to 4th Floor, Prestige Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560103, India.",
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: 16 July 2026. This policy describes how Metabob Private Limited collects, uses, and protects your information."
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
            Questions about this policy can be sent to{" "}
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
