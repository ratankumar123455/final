"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticLink from "./MagneticLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="hairline-b sticky top-0 z-50 bg-ink/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(244,169,136,0.15)]">
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
          <MagneticLink href="/contact" variant="primary" className="!px-5 !py-2 !text-xs whitespace-nowrap">
            Book Free Consultation
          </MagneticLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="mono-label flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-paper xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="hairline-t flex flex-col gap-1 bg-ink px-6 py-4 xl:hidden">
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
            Book Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
