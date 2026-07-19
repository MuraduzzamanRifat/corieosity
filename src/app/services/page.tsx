import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceGrid from "@/components/sections/ServiceGrid";
import AnswerSystem from "@/components/sections/AnswerSystem";
import ProcessList from "@/components/sections/ProcessList";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-Search Optimization (SEO + AEO + GEO), immersive WebGL experiences, AI-powered websites, and Next.js development — for U.S. startups, SaaS, and enterprise.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <SceneTint accent="#3fb98f" />
      <PageHero
        index="02"
        eyebrow="Services"
        title={
          <>
            Services built to make you{" "}
            <span className="teal-grad">the answer</span>.
          </>
        }
      >
        Four capabilities, one system. Each is sold on the outcome it drives —
        visibility, conversion, or both — not the technology underneath.
      </PageHero>

      <section className="band">
        <div className="wrap">
          <ServiceGrid withDeliverables />
        </div>
      </section>

      <section
        className="band"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(63,185,143,.03),transparent)",
        }}
      >
        <div className="wrap">
          <SectionHeading
            eyebrow="The method behind all of it"
            title="The Answer Readiness System."
          >
            Every engagement runs through the same three layers. It’s how we
            make the outcome measurable instead of a matter of taste.
          </SectionHeading>
          <AnswerSystem />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHeading eyebrow="Process" title="Audit → Architect → Build → Prove." />
          <ProcessList />
        </div>
      </section>

      <section className="band" id="faq">
        <div className="wrap">
          <SectionHeading center eyebrow="Questions" title="Before you ask." />
          <Faq />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            title="Not sure which one you need?"
            primaryLabel="Get an Answer Readiness score"
            secondary={{ label: "Talk to sales", href: "/contact" }}
          >
            Start with the free audit. It tells you exactly where you’re
            invisible — and which service closes the gap.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
