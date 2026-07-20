import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import PricingCalculator from "@/components/PricingCalculator";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, outcome-based pricing for AI-search optimization and immersive Next.js builds. Estimate your range with our calculator, then book a call for an exact quote. USD, U.S. teams.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <SceneTint accent="#ffcb3d" />
      <PageHero
        index="07"
        eyebrow="Pricing"
        title={
          <>
            Priced on <span className="gold-grad">outcomes</span>, not hours.
          </>
        }
      >
        We scope every engagement to a business result — rankings, AI citations,
        Core Web Vitals, and conversions. Use the calculator for an indicative
        range, then book a call for an exact quote.
      </PageHero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <PricingCalculator />
          </Reveal>
        </div>
      </section>

      <section className="band band-wash-teal">
        <div className="wrap">
          <div className="grid grid-3">
            <Reveal>
              <div className="card">
                <span className="tag">No surprises</span>
                <h3 className="h3" style={{ margin: "0.3em 0" }}>
                  Fixed scope, fixed price
                </h3>
                <p className="muted">
                  You approve a scope and a number before we start. Change
                  requests are quoted, never assumed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card">
                <span className="tag">Tied to results</span>
                <h3 className="h3" style={{ margin: "0.3em 0" }}>
                  Reported in business terms
                </h3>
                <p className="muted">
                  Every engagement ships with a baseline and a delta — AI
                  citations, CWV, conversions — not a deliverables checklist.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card">
                <span className="tag">Enterprise</span>
                <h3 className="h3" style={{ margin: "0.3em 0" }}>
                  Procurement-ready
                </h3>
                <p className="muted">
                  Security review, WCAG 2.2 AA, custom scopes and a single
                  accountable contact. Ask for the enterprise track.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            eyebrow="Next step"
            title="Get a number you can take to your team."
            primaryLabel="Start your project"
            primaryHref="/start"
            secondary={{ label: "Book a call", href: "/book" }}
          >
            Share your goals and we&apos;ll send back an exact quote with scope,
            milestones, and success metrics.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
