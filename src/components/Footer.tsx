import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    heading: "Services",
    links: [
      { href: "/services#digital-marketing", label: "AI Digital Marketing" },
      { href: "/services#website-development", label: "Website Development" },
      { href: "/services#software-development", label: "Software Development" },
      { href: "/services#ai-product-development", label: "AI Product Development" },
      { href: "/services", label: "View all services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/solutions", label: "Solutions" },
      { href: "/how-we-work", label: "Our Process" },
      { href: "/team", label: "Team" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="hairline-t bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <p className="font-display text-lg text-paper">
              Suter<span className="text-generated font-semibold">tai</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              AI-powered digital marketing, web, software, and automation
              solutions for startups and enterprises — engineered in
              Prayagraj, India.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="mono-label text-[10px] text-muted transition-colors hover:text-paper"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="mono-label text-[11px] text-paper">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mono-label text-[11px] text-paper">Stay in the loop</p>
            <p className="mt-4 text-sm text-muted">
              Growth tips and product updates, once or twice a month.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>
                <a href="tel:+917459887412" className="hover:text-paper">
                  +91 74598 87412
                </a>
              </p>
              <p>
                <a href="mailto:hello@sutertai.com" className="hover:text-paper">
                  hello@sutertai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hairline-t py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Sutertai Private Limited. All rights reserved.</p>
          <p>174 Kasturba Gandhi Marg, Prayagraj, Uttar Pradesh 211002, India</p>
        </div>
      </div>
    </footer>
  );
}
