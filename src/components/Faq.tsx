import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export type FaqItem = { q: string; a: string };

const defaultFaqs: FaqItem[] = [
  {
    q: "What services does Sutertai actually offer?",
    a: "AI-powered digital marketing, website and software development, AI product development, mobile apps, UI/UX design, and business automation with CRM and cloud solutions — everything a growing business needs, under one roof.",
  },
  {
    q: "Do you work with startups or only large enterprises?",
    a: "Both. We run lean, fixed-scope engagements for startups and long-term retainers for enterprises, and scope every project to the budget and stage of the business we're working with.",
  },
  {
    q: "How long does a typical website or app project take?",
    a: "A marketing website typically ships in 2-4 weeks. Custom software, CRM, or app builds range from 6-16 weeks depending on scope, with a working version live early in the process.",
  },
  {
    q: "Can you handle both marketing and development for us?",
    a: "Yes — that's the point. Sutertai runs marketing and engineering as one team, so your website, SEO, and ad campaigns are built to work together instead of being handed off between agencies.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every engagement includes a support window after launch, and most clients move into an ongoing retainer for updates, monitoring, and continued growth work.",
  },
  {
    q: "What does pricing look like?",
    a: "Project-based pricing for defined scopes of work, and monthly retainers for ongoing marketing, development, or automation support. See our Pricing page for starting ranges.",
  },
  {
    q: "Do we own the code, content, and designs you build?",
    a: "Yes. On completed and paid engagements, you own the resulting code, content, and designs outright.",
  },
  {
    q: "How do you handle data and client confidentiality?",
    a: "All client data is encrypted at rest and in transit, access is role-restricted, and we sign NDAs on request before any project kickoff.",
  },
  {
    q: "Can you integrate with the tools we already use?",
    a: "Yes — CRMs, payment gateways, ERPs, marketing platforms, and internal tools are integrated through APIs as part of most engagements.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation through our Contact page. We'll scope your project, propose a plan and timeline, and get started once you're ready.",
  },
];

export default function Faq({
  items = defaultFaqs,
  eyebrow = "FAQ",
  title = "Questions, answered",
}: {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section id="faq" className="hairline-b py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="hairline-t">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 30, 200)} as="details" className="group hairline-b py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-display text-base text-paper sm:text-lg">
                  {item.q}
                </span>
                <Plus className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45" strokeWidth={1.5} />
              </summary>
              <p className="mt-3 max-w-2xl text-sm text-muted">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
