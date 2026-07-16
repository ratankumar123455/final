import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export type FaqItem = { q: string; a: string };

const defaultFaqs: FaqItem[] = [
  {
    q: "What does Metabob actually generate?",
    a: "Images from a text prompt, and short videos from an image — either one you generated on Metabob or one you upload. Both run on the same NVIDIA GPU infrastructure.",
  },
  {
    q: "Do I own the images and videos I generate?",
    a: "Yes. On paid plans, you receive a commercial usage license for everything you generate. Free plan exports are watermarked and intended for evaluation and personal use.",
  },
  {
    q: "How fast is generation?",
    a: "Most images render in under 5 seconds and most video clips in under a minute, depending on resolution and current load, thanks to dedicated NVIDIA GPU capacity on AWS.",
  },
  {
    q: "What resolutions and formats are supported?",
    a: "Images render up to 4K. Video clips render up to 1080p at 24-30fps and export as MP4, with looping and clip-extension options.",
  },
  {
    q: "Can I use Metabob through an API?",
    a: "Yes — a REST API and SDKs expose the same generation pipeline that powers the app, with usage-based billing and webhook callbacks for async jobs.",
  },
  {
    q: "What's the difference between the Free, Creator, and Enterprise plans?",
    a: "Free is for evaluation with limited, watermarked credits. Creator adds full resolution, a commercial license, and monthly video generation. Enterprise adds dedicated GPU capacity, SSO, and SLA-backed support for teams generating at volume.",
  },
  {
    q: "Do you offer dedicated GPU capacity for high-volume use?",
    a: "Yes. Enterprise plans can reserve dedicated NVIDIA GPU capacity on AWS so render times stay consistent regardless of platform-wide demand.",
  },
  {
    q: "How is my data and generated content handled?",
    a: "Content and account data are encrypted at rest and in transit. Enterprise plans include role-based access control, audit logs, and data residency options by AWS region.",
  },
  {
    q: "Can I fine-tune the model on my own brand or style?",
    a: "Custom style fine-tuning is available on Enterprise plans, trained on your reference imagery to match a specific brand or artistic style consistently.",
  },
  {
    q: "How do I get started?",
    a: "Create a free account and start generating in minutes — no credit card required. Upgrade to Creator or talk to sales for Enterprise whenever you're ready.",
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
