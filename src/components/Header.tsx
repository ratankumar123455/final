"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MagneticLink from "./MagneticLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const megaMenuServices = [
  { name: "AI Digital Marketing", href: "/services#digital-marketing", description: "SEO, paid ads, and AI-driven growth campaigns." },
  { name: "Website Development", href: "/services#website-development", description: "Corporate, ecommerce, and portfolio websites." },
  { name: "Software Development", href: "/services#software-development", description: "Custom platforms, ERP, CRM, and SaaS." },
  { name: "AI Product Development", href: "/services#ai-product-development", description: "Chatbots, agents, and applied ML products." },
  { name: "Mobile App Development", href: "/services#mobile-app-development", description: "Native and cross-platform apps that ship." },
  { name: "Social Media Marketing", href: "/services#social-media-marketing", description: "Content, community, and paid social growth." },
  { name: "SEO Optimization", href: "/services#seo-optimization", description: "Technical, on-page, and authority-building SEO." },
  { name: "UI/UX Design", href: "/services#ui-ux-design", description: "Research-led interfaces people enjoy using." },
  { name: "Business Automation & Cloud", href: "/services#business-automation-cloud", description: "Workflow automation, CRM, and cloud infrastructure." },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hairline-b sticky top-0 z-50 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          Suter<span className="text-generated font-semibold">tai</span>
        </Link>

        <nav className="mono-label hidden gap-6 text-[11px] text-muted xl:flex">
          <Link
            href="/"
            className={`border-b pb-1 transition-colors hover:text-paper ${
              pathname === "/" ? "border-indigo text-paper" : "border-transparent"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`border-b pb-1 transition-colors hover:text-paper ${
              pathname === "/about" ? "border-indigo text-paper" : "border-transparent"
            }`}
          >
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              className={`border-b pb-1 transition-colors hover:text-paper ${
                pathname === "/services" ? "border-indigo text-paper" : "border-transparent"
              }`}
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              Services
            </button>
            {menuOpen && (
              <div className="glass-panel absolute left-1/2 top-full mt-3 w-[600px] -translate-x-1/2 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-1">
                  {megaMenuServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg p-3 transition-colors hover:bg-white/5"
                    >
                      <p className="text-xs font-semibold normal-case tracking-normal text-paper">
                        {service.name}
                      </p>
                      <p className="mt-1 text-[11px] normal-case tracking-normal text-muted">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 block rounded-lg p-3 text-xs font-semibold normal-case tracking-normal text-accent hover:bg-white/5"
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/solutions"
            className={`border-b pb-1 transition-colors hover:text-paper ${
              pathname === "/solutions" ? "border-indigo text-paper" : "border-transparent"
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/team"
            className={`border-b pb-1 transition-colors hover:text-paper ${
              pathname === "/team" ? "border-indigo text-paper" : "border-transparent"
            }`}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`border-b pb-1 transition-colors hover:text-paper ${
              pathname === "/contact" ? "border-indigo text-paper" : "border-transparent"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <Link href="/login" className="mono-label text-[11px] text-muted transition-colors hover:text-paper">
            Login
          </Link>
          <MagneticLink href="/contact" variant="primary" className="!px-5 !py-2 !text-xs">
            Get Started
          </MagneticLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="mono-label flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-paper xl:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="hairline-t flex flex-col gap-1 bg-ink px-6 py-4 xl:hidden">
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className={`mono-label rounded-lg px-3 py-2 text-xs transition-colors hover:bg-white/5 hover:text-paper ${
              pathname === "/services" ? "text-paper" : "text-muted"
            }`}
          >
            Services
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mono-label rounded-lg px-3 py-2 text-xs transition-colors hover:bg-white/5 hover:text-paper ${
                pathname === item.href ? "text-paper" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mono-label rounded-lg px-3 py-2 text-xs text-muted transition-colors hover:bg-white/5 hover:text-paper"
          >
            Login
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
