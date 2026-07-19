import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InfoCard from "@/components/sections/InfoCard";
import CtaBand from "@/components/sections/CtaBand";
import { careerRoles } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Corieosity is building a vetted partner network of Next.js, WebGL, motion, and AI-search talent. Introduce yourself.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <SceneTint accent="#ffdd7a" />
      <PageHero
        index="09"
        eyebrow="Careers"
        title={
          <>
            Build work that gets{" "}
            <span className="gold-grad">cited and remembered</span>.
          </>
        }
      >
        We're honest about stage: Corieosity is a new studio building a vetted
        partner network rather than a large salaried roster. If you're a senior
        contributor who wants sharp projects and real ownership — not a cog in an
        agency — we want to know you.
      </PageHero>

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="Who we're looking for"
            title="Open to exceptional contributors."
          >
            These aren't fixed postings — they're the kinds of people we bring
            onto projects. Introduce yourself and we'll reach out when the fit is
            right.
          </SectionHeading>
          <div className="grid grid-2">
            {careerRoles.map((r, i) => (
              <Reveal key={r.role} delay={i * 60}>
                <InfoCard tag="Partner role" title={r.role} body={r.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-wash-gold">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we work together"
            title="Project-based, senior, remote-friendly."
          >
            U.S.-hours overlap, clear scopes, fair rates, and credit for the
            work. No fake urgency, no cog-in-a-machine.
          </SectionHeading>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            eyebrow="Introduce yourself"
            title="Tell us what you build best."
            primaryLabel="Send an introduction"
            secondary={{ label: "About the studio", href: "/team" }}
          >
            Use the contact form, mention “partner network,” and include your
            portfolio or GitHub.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
