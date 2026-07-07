import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sutertai Private Limited collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Introduction",
    body: "Sutertai Private Limited (\"Sutertai\", \"we\", \"us\", or \"our\") provides digital marketing, website and software development, AI product development, and business automation services. This Privacy Policy explains what personal data we collect through our website and client engagements, why we collect it, and the rights you have over it. By using our website or engaging our services, you agree to the practices described here.",
  },
  {
    title: "2. Information we collect",
    body: "We collect information you provide directly — your name, email address, phone number, company details, and project requirements submitted through our contact form, WhatsApp, or email. We also collect standard technical data automatically, including IP address, browser type, device information, and pages visited, to operate and secure the website. If you become a client, we additionally collect billing details and any data required to deliver the contracted service, such as access credentials to systems we're building or maintaining on your behalf.",
  },
  {
    title: "3. How we use your information",
    body: "We use collected data to respond to inquiries, scope and deliver projects, process payments, send project updates, and improve our website and services. With your consent, we may send marketing communications about services, case studies, or offers relevant to your business — you can opt out of these at any time. We do not sell your personal data to third parties under any circumstances.",
  },
  {
    title: "4. Legal basis for processing (GDPR-inspired principles)",
    body: "Where applicable, we process personal data on the basis of your consent, the necessity of processing to perform a contract with you (such as delivering a project you've engaged us for), and our legitimate interest in operating and improving our business. We apply data minimization, collecting only what's necessary for the stated purpose, and retain data only as long as needed for that purpose or as required by law.",
  },
  {
    title: "5. Cookies and tracking",
    body: "Our website uses cookies and similar technologies for essential site functionality and, where enabled, analytics to understand how visitors use our site. See our separate Cookie Policy for full details on the categories of cookies used and how to manage your preferences.",
  },
  {
    title: "6. Data sharing and third parties",
    body: "We share data with trusted service providers who help us operate our business — hosting providers, analytics tools, payment processors, and communication platforms such as WhatsApp — strictly for the purposes described in this policy. These providers are contractually bound to protect your data and are not permitted to use it for their own purposes. We may also disclose data if required by law, court order, or to protect the rights and safety of Sutertai or others.",
  },
  {
    title: "7. Data storage and security",
    body: "Personal data and project assets are encrypted at rest and in transit. Access to production systems and client data is restricted to authorized personnel and logged. While we take reasonable technical and organizational measures to protect your data, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "8. Your rights",
    body: "Depending on your location, you may have the right to access, correct, export, or request deletion of your personal data, and to object to or restrict certain processing. You can exercise any of these rights by contacting us at hello@sutertai.com. We will respond to verified requests within a reasonable timeframe and in accordance with applicable law.",
  },
  {
    title: "9. Data retention",
    body: "We retain personal data only for as long as necessary to fulfil the purposes described in this policy, including any legal, accounting, or reporting requirements. Project-related data is typically retained for the duration of the engagement plus a reasonable period afterward for support and record-keeping, unless you request earlier deletion.",
  },
  {
    title: "10. International data transfers",
    body: "As we serve clients across multiple countries, personal data may be processed or stored outside your home country, including in India where Sutertai is headquartered. Where this occurs, we take steps to ensure an equivalent level of protection is applied to your data.",
  },
  {
    title: "11. Children's privacy",
    body: "Our services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal data from children, and any such data discovered will be deleted promptly.",
  },
  {
    title: "12. Changes to this policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Material changes will be posted on this page with an updated revision date, and where appropriate, we will notify active clients directly.",
  },
  {
    title: "13. Governing law",
    body: "This Privacy Policy is governed by the laws of India. Any disputes arising from this policy are subject to the exclusive jurisdiction of the courts in Prayagraj, Uttar Pradesh.",
  },
  {
    title: "14. Contact us",
    body: "Questions about this Privacy Policy or your data can be directed to hello@sutertai.com, by phone at +91 74598 87412, or by post to 174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj, Uttar Pradesh 211002, India.",
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: 6 July 2026. This policy describes how Sutertai Private Limited collects, uses, and protects your information."
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
