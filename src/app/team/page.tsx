import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import InfoCard from "@/components/sections/InfoCard";
import CtaBand from "@/components/sections/CtaBand";
import { capabilities, values } from "@/content/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How Corieosity is built: a senior strategy core plus a vetted engineering and design bench, assembled per project — craft without agency overhead.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <SceneTint accent="#5fe0b3" />
      <PageHero
        index="08"
        eyebrow="The Studio"
        title={
          <>
            Senior by default, <span className="teal-grad">scaled by design</span>.
          </>
        }
      >
        We're honest about how we're built: a small senior core owns strategy and
        the client relationship, and a vetted bench of engineers and designers is
        assembled around each project. You get top-tier craft without agency
        overhead — and no layers between you and the people doing the work.
      </PageHero>

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="How the work gets made"
            title="Four capabilities, one accountable team."
          />
          <div className="grid grid-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.role} delay={i * 60}>
                <InfoCard tag="Capability" title={c.role} body={c.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-wash-teal">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we're like to work with"
            title="The owl, made literal."
          />
          <div className="grid grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <InfoCard title={v.title} body={v.body} small />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            eyebrow="Join the bench"
            title="Great engineers and designers: build with us."
            primaryLabel="See partner roles"
            primaryHref="/careers"
            secondary={{ label: "Start a project", href: "/contact" }}
          >
            We're growing our vetted partner network of Next.js, WebGL, motion,
            and AI-search talent.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
