import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import SceneTint from "@/components/three/SceneTint";
import StatBar from "@/components/sections/StatBar";
import Marquee from "@/components/sections/Marquee";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceGrid from "@/components/sections/ServiceGrid";
import AnswerSystem from "@/components/sections/AnswerSystem";
import ProcessList from "@/components/sections/ProcessList";
import Commitments from "@/components/sections/Commitments";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";
import { optimizedFor } from "@/content/site";

const whyMetrics: [string, string][] = [
  ["Longer", "dwell time — the signal engines and buyers both reward"],
  ["Lower", "bounce, via motion that guides instead of distracts"],
  ["Memorable", "brand perception vs. template sameness"],
  ["< 1s", "loads despite heavy 3D"],
];

export default function Home() {
  return (
    <>
      <SceneTint accent="#62e6b6" />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <Reveal>
            <span className="eyebrow">AI-Search Growth Agency · United States</span>
            <h1 className="h-hero" style={{ marginTop: "0.25em" }}>
              Be the answer — on Google and in{" "}
              <span className="gold-grad">AI</span>.
            </h1>
            <p className="lead">
              Corieosity builds intelligent, immersive websites that get{" "}
              <span className="tealtxt">cited by AI engines</span>, rank on
              Google, and turn the visitors they earn into revenue.
            </p>
            <div className="hero-cta">
              <Magnetic>
                <Link href="/contact" className="btn btn-primary">
                  Get your free Answer Readiness score{" "}
                  <span className="arw">↗</span>
                </Link>
              </Magnetic>
              <Link href="/work" className="btn btn-ghost">
                See the work
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="scroll-hint">
          <span className="dot" />
          Scroll
        </div>
      </section>

      <StatBar />

      <section className="band-tight">
        <Marquee items={optimizedFor} />
      </section>

      {/* SERVICES */}
      <section className="band" id="services">
        <div className="wrap">
          <SectionHeading eyebrow="Services" title="Two problems, one system.">
            Getting found by AI is worthless if the site doesn’t convert. A
            beautiful site is worthless if AI never surfaces it. We do both —
            that’s the Answer-to-Action loop.
          </SectionHeading>
          <ServiceGrid />
        </div>
      </section>

      {/* ANSWER READINESS SYSTEM */}
      <section
        className="band"
        id="system"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(63,185,143,.03),transparent)",
        }}
      >
        <div className="wrap">
          <SectionHeading
            eyebrow="The Answer Readiness System"
            title="Your next customer is asking an AI about you right now."
          >
            Three layers decide whether you show up in that answer. Most
            agencies stop at the first one.
          </SectionHeading>
          <AnswerSystem />
        </div>
      </section>

      {/* WHY IMMERSIVE */}
      <section className="band" id="experience">
        <div className="wrap grid grid-2" style={{ alignItems: "center" }}>
          <Reveal>
            <div>
              <span className="eyebrow">Why immersive</span>
              <h2 className="h2" style={{ margin: "0.3em 0 0.5em" }}>
                Attention is the conversion.
              </h2>
              <p className="lead">
                Immersive isn’t decoration — it’s engineered attention. Every
                interaction earns another second of focus, and seconds are what
                turn a visitor into a lead. The trick nobody else pulls off:
                rich for humans,{" "}
                <span className="tealtxt">
                  server-rendered and machine-readable for engines.
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 22,
              }}
            >
              {whyMetrics.map(([n, p]) => (
                <div key={p}>
                  <div
                    className="teal-grad"
                    style={{
                      fontFamily: "var(--font-space)",
                      fontSize: "1.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {n}
                  </div>
                  <p className="small muted" style={{ marginTop: "0.2em" }}>
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="band"
        id="process"
        style={{
          background:
            "linear-gradient(180deg,transparent,rgba(255,203,61,.03),transparent)",
        }}
      >
        <div className="wrap">
          <SectionHeading
            eyebrow="Process"
            title="How we get you into the answer."
          />
          <ProcessList />
        </div>
      </section>

      {/* COMMITMENTS (honest, no fake testimonials) */}
      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="Instead of borrowed logos"
            title="What we commit to, in writing."
          >
            We’re newly launched and U.S.-focused, so we won’t show you fake
            testimonials. We show you the numbers we’ll be measured on — and our
            own site, engineered to prove it.
          </SectionHeading>
          <Commitments />
        </div>
      </section>

      {/* FAQ */}
      <section className="band" id="faq">
        <div className="wrap">
          <SectionHeading
            center
            eyebrow="Questions"
            title="The things everyone asks first."
          />
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="band">
        <div className="wrap">
          <CtaBand
            title="Find out if AI can see you."
            secondary={{ label: "Enterprise? Talk to sales", href: "/contact" }}
          >
            Get a free Answer Readiness score — the three-layer breakdown of
            where you’re visible, where you’re invisible, and what it’s costing
            you.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
