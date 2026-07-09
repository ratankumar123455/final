import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sutertai Private Limited — office address, phone, email, and working hours.",
};

const address =
  "174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj, Prayagraj, Uttar Pradesh 211002, India";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);

const mapsEmbedUrl =
  "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

const whatsappUrl = "https://wa.me/917459887412";

const contactFaqs = [
  {
    q: "What's the fastest way to reach the team?",
    a: "WhatsApp or the contact form below — both route to the same team and typically get a response within a business day.",
  },
  {
    q: "Do you take on projects outside India?",
    a: "Yes, we work with clients across multiple countries including India, the Gulf, and North America. Calls are scheduled to overlap with your working hours wherever you're based.",
  },
  {
    q: "Can we visit your office in Prayagraj?",
    a: "Yes — we welcome in-person meetings during working hours. Please reach out beforehand so the right team members are available.",
  },
  {
    q: "How soon can we start after an initial call?",
    a: "Most projects kick off within a week of scope and contract sign-off, once requirements are confirmed on the discovery call.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-generated">talk</span>
          </>
        }
        description="Have a project in mind, a question about Sutertai, or want a free consultation for your business? Reach out below."
      />

      <section id="consultation" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal className="surface rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-xl text-paper">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--line)] pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+917459887412"
                  className="btn-secondary rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  Call us directly
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="hairline-t">
              <div className="hairline-b py-6">
                <p className="mono-label text-[11px] text-muted">Contact person</p>
                <p className="mt-2 text-lg text-paper">Ramesh Sharma</p>
              </div>
              <div className="hairline-b py-6">
                <p className="mono-label text-[11px] text-muted">Phone</p>
                <a
                  href="tel:+917459887412"
                  className="mt-2 block text-lg text-paper hover:text-accent"
                >
                  +91 74598 87412
                </a>
              </div>
              <div className="hairline-b py-6">
                <p className="mono-label text-[11px] text-muted">Email</p>
                <a
                  href="mailto:hello@sutertai.com"
                  className="mt-2 block text-lg text-paper hover:text-accent"
                >
                  hello@sutertai.com
                </a>
              </div>
              <div className="hairline-b py-6">
                <p className="mono-label text-[11px] text-muted">Working hours</p>
                <p className="mt-2 text-lg text-paper">Monday – Saturday, 9:00 AM – 7:00 PM</p>
              </div>
              <div className="hairline-b py-6">
                <p className="mono-label text-[11px] text-muted">Address</p>
                <p className="mt-2 text-lg text-paper">
                  174 Kasturba Gandhi Marg, Kachehri, near Hawaijahaj,
                  <br />
                  Prayagraj, Uttar Pradesh 211002, India
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View on Google Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="hairline-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="overflow-hidden rounded-2xl border border-[var(--line)]">
            <iframe
              title="Sutertai Private Limited office location"
              src={mapsEmbedUrl}
              width="100%"
              height="360"
              style={{ border: 0, filter: "grayscale(0.2) invert(0.9) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="hairline-t py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal className="surface rounded-2xl p-10">
            <p className="font-display text-2xl text-paper">Stay in the loop</p>
            <p className="mt-3 text-sm text-muted">
              Subscribe for growth tips and product updates, once or twice a month.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Faq
        items={contactFaqs}
        eyebrow="Contact FAQ"
        title="Before you reach out"
      />
    </div>
  );
}
