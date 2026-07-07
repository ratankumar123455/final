import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import type { FaqItem } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, software development, AI product development, mobile apps, digital marketing, social media, SEO, UI/UX design, and business automation — Sutertai's full service catalog.",
};

type Service = {
  id: string;
  tag: string;
  title: string;
  overview: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  value: string;
};

const services: Service[] = [
  {
    id: "website-development",
    tag: "01",
    title: "Website Development",
    overview:
      "Your website is the first impression most customers form of your business, and often the only one that matters. We design and build corporate websites, portfolios, ecommerce stores, and landing pages that load fast, rank on search, and are built to convert visitors into leads — not just look good in a portfolio review.",
    benefits: ["Faster load times and better Core Web Vitals", "Built-in SEO foundation from day one", "Mobile-first, responsive on every device", "Easy content updates without a developer"],
    process: ["Discovery & sitemap", "UI/UX design", "Development & CMS setup", "QA & launch"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Headless CMS"],
    value: "A website that generates leads instead of just sitting online.",
  },
  {
    id: "software-development",
    tag: "02",
    title: "Software Development",
    overview:
      "When off-the-shelf tools stop fitting how your business actually operates, custom software closes the gap. We build ERP systems, CRM platforms, SaaS products, admin panels, and internal tools tailored to your workflows, with APIs that connect cleanly to the systems you already run on.",
    benefits: ["Built around your exact workflow, not a template", "Scales from MVP to enterprise load", "Clean API architecture for future integrations", "Dedicated support after launch"],
    process: ["Requirements & architecture", "Sprint-based development", "Integration & testing", "Deployment & handover"],
    technologies: ["Node.js", "Python", "PostgreSQL", "AWS EC2 / Amplify"],
    value: "Software that fits your business, instead of forcing your business to fit the software.",
  },
  {
    id: "ai-product-development",
    tag: "03",
    title: "AI Product Development",
    overview:
      "AI stops being a buzzword when it's shipped as a working feature. We build chatbots, AI agents, and applied machine learning products — from customer-facing assistants to internal tools that summarize, classify, or predict — integrated directly into your existing product or platform.",
    benefits: ["Faster response times for customers", "Reduced manual review and triage work", "Predictive insight instead of static reporting", "Built to improve with more data over time"],
    process: ["Use-case scoping", "Model selection & prototyping", "Integration & guardrails", "Monitoring & iteration"],
    technologies: ["OpenAI / custom LLMs", "Python", "Vector databases", "REST APIs"],
    value: "AI features that solve a real bottleneck, not a demo that never ships.",
  },
  {
    id: "mobile-app-development",
    tag: "04",
    title: "Mobile App Development",
    overview:
      "A mobile app succeeds or fails on retention, not launch day downloads. We build native iOS and Android apps and cross-platform builds designed around onboarding, performance, and the specific reason a user opens your app more than once.",
    benefits: ["Native performance where it matters most", "Single codebase options to cut cost and time", "App Store & Play Store optimization included", "Post-launch monitoring and updates"],
    process: ["Product scoping", "UI/UX prototyping", "Build & device testing", "Store submission & launch"],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
    value: "An app people keep using after the first week, not just the first day.",
  },
  {
    id: "digital-marketing",
    tag: "05",
    title: "Digital Marketing",
    overview:
      "Digital marketing at Sutertai means one accountable team running SEO, paid media, content, and marketing automation together — so budget isn't split across vendors optimizing for different metrics. Every campaign is tied back to leads and revenue, not just impressions.",
    benefits: ["One team, one strategy, no channel silos", "Clear attribution from click to customer", "AI-assisted targeting and budget optimization", "Monthly reporting in plain language"],
    process: ["Audit & strategy", "Campaign build & launch", "Optimization sprints", "Monthly reporting"],
    technologies: ["Google Ads", "Meta Ads", "GA4", "HubSpot / CRM tools"],
    value: "Marketing spend that shows up in your pipeline, not just your analytics dashboard.",
  },
  {
    id: "social-media-marketing",
    tag: "06",
    title: "Social Media Marketing",
    overview:
      "Consistent, on-brand social presence takes more than a posting calendar — it takes a content strategy tied to your actual goals. We handle content creation, community management, and paid social campaigns across the platforms where your customers actually spend time.",
    benefits: ["Consistent brand voice across platforms", "Content calendar planned around business goals", "Community management that protects your reputation", "Paid social campaigns with clear ROI tracking"],
    process: ["Platform & audience strategy", "Content calendar", "Publishing & community management", "Performance review"],
    technologies: ["Meta Business Suite", "LinkedIn Campaign Manager", "Scheduling tools", "Analytics dashboards"],
    value: "Social channels that build trust and pipeline, not just follower counts.",
  },
  {
    id: "seo-optimization",
    tag: "07",
    title: "SEO Optimization",
    overview:
      "Search is still the highest-intent channel most businesses have, and most sites are leaving it on the table. We run technical SEO audits, on-page optimization, content strategy, and authority building as an ongoing discipline, not a one-time fix.",
    benefits: ["Higher rankings for commercial-intent keywords", "Technical fixes that improve site-wide performance", "Content built to rank and convert", "Transparent monthly ranking and traffic reports"],
    process: ["Technical & competitive audit", "On-page & content fixes", "Authority & link building", "Ongoing tracking & iteration"],
    technologies: ["Search Console", "Ahrefs / SEMrush", "Core Web Vitals tooling", "Schema markup"],
    value: "Consistent, compounding organic traffic that doesn't disappear when ad spend stops.",
  },
  {
    id: "ui-ux-design",
    tag: "08",
    title: "UI/UX Design",
    overview:
      "Good design is measured in completed checkouts and finished sign-up flows, not award submissions. Our UI/UX process starts with research into how your actual users behave, then designs interfaces that reduce friction at every step, backed by accessibility best practices.",
    benefits: ["Research-backed design decisions, not guesswork", "Higher conversion and lower drop-off rates", "Consistent design system across your product", "WCAG-aligned accessibility built in"],
    process: ["User research", "Wireframes & prototypes", "Visual design system", "Usability testing"],
    technologies: ["Figma", "Design tokens", "Accessibility audits", "Interactive prototypes"],
    value: "Interfaces people find easy to use — which is what actually drives conversion.",
  },
  {
    id: "business-automation-cloud",
    tag: "09",
    title: "Business Automation & Cloud Solutions",
    overview:
      "We implement CRM and ERP systems, automate the workflows around them, and run infrastructure on AWS — EC2 for virtual servers, S3 for object storage, and Amplify for full-stack web and mobile apps — so your operations scale without scaling headcount at the same rate.",
    benefits: ["Manual work replaced with reliable automation", "CRM/ERP tailored to your actual sales process", "AWS infrastructure that scales with demand", "Built-in monitoring, backups, and security review"],
    process: ["Workflow audit", "CRM/ERP implementation", "Automation build", "AWS deployment & monitoring"],
    technologies: ["Salesforce / HubSpot / custom CRM", "AWS EC2 & S3", "AWS Amplify", "Zapier / custom automation"],
    value: "Operations that keep working smoothly as you take on more customers.",
  },
];

const comparisonRows: { feature: string; starter: string; growth: string; enterprise: string }[] = [
  { feature: "Website or landing page", starter: "Included", growth: "Included", enterprise: "Included" },
  { feature: "SEO & content strategy", starter: "Basic setup", growth: "Ongoing management", enterprise: "Full-scale program" },
  { feature: "Custom software / CRM", starter: "—", growth: "Add-on available", enterprise: "Included" },
  { feature: "AI automation & chatbots", starter: "—", growth: "Add-on available", enterprise: "Included" },
  { feature: "Dedicated account team", starter: "—", growth: "Included", enterprise: "Included" },
  { feature: "Support response time", starter: "48 hours", growth: "24 hours", enterprise: "Same-day, SLA-backed" },
];

const servicesFaqs: FaqItem[] = [
  {
    q: "Do we have to buy a full package, or can we start with one service?",
    a: "You can start with a single service — a website, an SEO engagement, or a CRM build — and add more as you grow. Most long-term clients start with one project and expand from there.",
  },
  {
    q: "How is pricing structured across these services?",
    a: "Defined-scope projects (like a website or app build) are quoted as fixed project pricing. Ongoing work (SEO, social, automation support) runs as a monthly retainer. See our Pricing page for starting ranges.",
  },
  {
    q: "Can these services be combined into one engagement?",
    a: "Yes — most clients combine 2-3 services (for example, website development plus SEO plus social media) so marketing and technology are built together from the start.",
  },
  {
    q: "What if we already have a developer or marketing team?",
    a: "We regularly work alongside in-house teams, filling specific gaps — a CRM build, an AI feature, or an SEO overhaul — rather than replacing existing staff.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your business needs to <span className="text-generated">grow digitally</span>
          </>
        }
        description="Nine services, one accountable team. Explore what each one includes, how we deliver it, and the technology behind it."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                id={service.id}
                delay={Math.min(i * 30, 150)}
                className="card-lift scroll-mt-24 rounded-2xl border border-[var(--line)] p-8 sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <span className="mono-label text-[11px] text-accent">
                      {service.tag} / {service.title}
                    </span>
                    <h2 className="font-display mt-3 text-2xl text-paper sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-muted">{service.overview}</p>
                    <p className="mt-4 max-w-lg text-sm font-medium text-paper">{service.value}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="mono-label rounded-full border border-[var(--line-strong)] px-3 py-1.5 text-[10px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8">
                      <MagneticLink href="/contact" variant="secondary">
                        Get a quote
                      </MagneticLink>
                    </div>
                  </div>
                  <div className="grid gap-6">
                    <div>
                      <p className="mono-label text-[10px] text-muted">Benefits</p>
                      <ul className="mt-3 grid gap-2 text-sm text-muted">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mono-label text-[10px] text-muted">Process</p>
                      <ol className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted">
                        {service.process.map((step, idx) => (
                          <li key={step} className="flex gap-2">
                            <span className="font-display text-accent">{idx + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Compare"
            title="What's included at each level"
            description="A quick look at how our Starter, Growth, and Enterprise engagements differ — see the Pricing page for full details."
          />
          <Reveal className="overflow-x-auto rounded-2xl border border-[var(--line)]">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="hairline-b">
                  <th className="p-4 font-normal text-muted">Feature</th>
                  <th className="p-4 font-normal text-muted">Starter</th>
                  <th className="p-4 font-normal text-paper">Growth</th>
                  <th className="p-4 font-normal text-muted">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hairline-b">
                    <td className="p-4 text-paper">{row.feature}</td>
                    <td className="p-4 text-muted">{row.starter}</td>
                    <td className="p-4 text-paper">{row.growth}</td>
                    <td className="p-4 text-muted">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <Faq items={servicesFaqs} eyebrow="Services FAQ" title="Questions about our services" />

      <CtaBanner
        title="Not sure which service you need?"
        description="Tell us what you're trying to fix or build — we'll recommend the right service, or the right combination."
      />
    </div>
  );
}
