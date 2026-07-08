import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2h3.06l-6.69 7.65L22.5 22h-6.16l-4.82-6.3L5.99 22H2.93l7.16-8.19L1.5 2h6.32l4.36 5.76L18.24 2Zm-1.08 18.17h1.7L7.5 3.75H5.67L17.16 20.17Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.75h4V21H3V9.75Zm7 0h3.83v1.54h.05c.53-1 1.85-2.06 3.8-2.06 4.07 0 4.82 2.68 4.82 6.16V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.12c-.42.05-1.34.05-2.16.92C2.6 5.7 2.4 7.2 2.4 7.2S2.18 8.96 2.18 10.7v1.6c0 1.75.22 3.5.22 3.5s.21 1.5.86 2.16c.82.9 1.9.87 2.38.97C7.4 19.1 12 19.15 12 19.15s3.6-.01 6.58-.13c.42-.05 1.34-.05 2.16-.92.65-.67.86-2.16.86-2.16s.22-1.75.22-3.5v-1.6c0-1.75-.22-3.5-.22-3.5ZM9.98 14.5V9.3l5.2 2.6-5.2 2.6Z" />
    </svg>
  );
}

const columns = [
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
  { label: "X", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
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
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-muted transition-colors hover:border-[var(--line-strong)] hover:text-paper"
                >
                  <social.icon className="h-4 w-4" />
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
