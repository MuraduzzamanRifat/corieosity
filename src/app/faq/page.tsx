import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on AEO and GEO, whether immersive WebGL hurts SEO, how we're different, and how we work with U.S. companies.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <SceneTint accent="#62e6b6" />
      <PageHero
        index="06"
        eyebrow="FAQ"
        title={
          <>
            The things everyone <span className="teal-grad">asks first</span>.
          </>
        }
      >
        Straight answers on AI search, immersive builds, and how we work — no
        jargon, no hedging.
      </PageHero>

      <section className="band">
        <div className="wrap">
          <Faq />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            title="Still have a question?"
            primaryLabel="Ask us directly"
            secondary={{ label: "Get your Answer Readiness score", href: "/contact" }}
          >
            We reply within one U.S. business day.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
