"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import Magnetic from "@/components/ui/Magnetic";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="Corieosity — home">
          <svg viewBox="0 0 64 64" aria-hidden>
            <use href="#owl" />
          </svg>
          Corieosity
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={isActive(n.href) ? "active" : ""}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <Magnetic>
            <Link href="/start" className="btn btn-primary nav-cta-desktop">
              Answer Readiness Score <span className="arw">↗</span>
            </Link>
          </Magnetic>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              "✕"
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/start" className="btn btn-primary">
            Answer Readiness Score
          </Link>
        </div>
      )}
    </header>
  );
}
