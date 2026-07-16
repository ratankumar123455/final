import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Metabob Private Limited uses cookies and similar tracking technologies.",
};

const sections = [
  {
    title: "1. What are cookies",
    body: "Cookies are small text files placed on your device when you visit a website. They allow the site to recognize your device, remember preferences, and understand how the site is being used. Similar technologies include local storage, pixels, and tags, which we refer to collectively as \"cookies\" in this policy.",
  },
  {
    title: "2. How Metabob uses cookies",
    body: "We use cookies on metabob.in to keep the site and app functioning correctly, remember your preferences (such as workspace settings or cookie consent choices), and understand aggregate visitor behavior so we can improve site and product performance. We do not use cookies to sell your personal data.",
  },
  {
    title: "3. Essential cookies",
    body: "These cookies are necessary for the website and app to function — for example, maintaining your login session, enabling secure form submissions, and remembering your cookie consent preference. Essential cookies cannot be disabled, as the site would not work correctly without them.",
  },
  {
    title: "4. Analytics cookies",
    body: "Where enabled, analytics cookies help us understand how visitors use our site and app — which pages are viewed, how long visitors stay, and which features are used — so we can identify what's working and what needs improvement. This data is aggregated and does not directly identify you.",
  },
  {
    title: "5. Functional cookies",
    body: "Functional cookies remember choices you make on the site or in the app, such as in-progress prompts or display preferences, to make your next visit more convenient.",
  },
  {
    title: "6. Third-party cookies",
    body: "Some cookies on our site may be set by third-party services we use, such as analytics providers, payment processors, or embedded content (for example, an embedded Google Map on our Contact page). These third parties have their own privacy and cookie policies, which we encourage you to review.",
  },
  {
    title: "7. Managing your cookie preferences",
    body: "Most browsers allow you to control cookies through their settings, including blocking or deleting cookies entirely. Please note that disabling essential cookies may affect the functionality of our website and app.",
  },
  {
    title: "8. How long cookies last",
    body: "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period (typically between 30 days and 12 months) or until you delete them manually, depending on their purpose.",
  },
  {
    title: "9. Do Not Track signals",
    body: "Some browsers offer a \"Do Not Track\" setting. As there is no common industry standard for responding to these signals, our website does not currently alter its behavior in response to them.",
  },
  {
    title: "10. Changes to this policy",
    body: "We may update this Cookie Policy periodically to reflect changes in the cookies we use or for legal and regulatory reasons. Material changes will be posted on this page with an updated revision date.",
  },
  {
    title: "11. Related policies",
    body: "This Cookie Policy should be read alongside our Privacy Policy and Terms & Conditions, which together describe how we handle your information and the terms of using our website, app, and API.",
  },
  {
    title: "12. Contact us",
    body: "Questions about this Cookie Policy can be directed to hello@metabob.in, by phone at +91 91234 56789, or by post to 4th Floor, Prestige Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560103, India.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="Last updated: 16 July 2026. This policy explains how Metabob uses cookies and similar technologies on our website and app."
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
