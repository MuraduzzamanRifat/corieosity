import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot">
          <div className="foot-brand">
            <Link href="/" className="brand" aria-label="Corieosity — home">
              <svg viewBox="0 0 64 64" aria-hidden>
                <use href="#owl" />
              </svg>
              Corieosity
            </Link>
            <p>
              The agency that makes brands the answer — seen by machines, chosen
              by humans. {site.serving}
            </p>
            <p style={{ marginTop: 14 }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <span className="muted small">{site.hours}</span>
            </p>
          </div>

          <div className="foot-cols">
            <div className="foot-col">
              <h4>Services</h4>
              <Link href="/services">AI-Search Optimization</Link>
              <Link href="/services">Immersive Experiences</Link>
              <Link href="/services">AI-Powered Websites</Link>
              <Link href="/services">Next.js Development</Link>
            </div>
            <div className="foot-col">
              <h4>Explore</h4>
              <Link href="/industries">Industries</Link>
              <Link href="/work">Work</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/knowledge">Knowledge Center</Link>
              <Link href="/resources">Resources</Link>
            </div>
            <div className="foot-col">
              <h4>Agency</h4>
              <Link href="/about">About</Link>
              <Link href="/team">Studio</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="foot-col">
              <h4>Get started</h4>
              <Link href="/start">Start a project</Link>
              <Link href="/book">Book a meeting</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Corieosity. Be the answer.</span>
          <span>
            <Link href="/privacy">Privacy (CCPA)</Link> ·{" "}
            <Link href="/terms">Terms</Link> ·{" "}
            <Link href="/cookies">Cookies</Link> · {site.billing}
          </span>
          <span className="ask">
            Don&apos;t take our word for it — ask ChatGPT about AEO agencies.
          </span>
        </div>
      </div>
    </footer>
  );
}
