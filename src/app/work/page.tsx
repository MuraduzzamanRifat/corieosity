import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import SceneTint from "@/components/three/SceneTint";
import CtaBand from "@/components/sections/CtaBand";
import { proofBuilds } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "We're newly launched, so instead of borrowed client logos we show proof builds — self-initiated demonstrations engineered to rank, get cited, and load fast.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <SceneTint accent="#5fe0b3" />
      <PageHero
        index="03"
        eyebrow="Work"
        title={
          <>
            We couldn’t show you a client logo — so we built the{" "}
            <span className="teal-grad">proof</span>.
          </>
        }
      >
        Honesty first: Corieosity just launched, so what follows are proof
        builds — self-initiated demonstrations of the craft, clearly labelled,
        not client work. Real case studies replace them as our founding
        partners ship.
      </PageHero>

      <section className="band">
        <div className="wrap">
          <div className="grid grid-3">
            {proofBuilds.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <article className="card work-card" data-cursor="hover" style={{ height: "100%" }}>
                  <div
                    className="swatch"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, #0b1512 85%)`,
                    }}
                  />
                  <span className="kind">{p.kind}</span>
                  <h3>{p.title}</h3>
                  <p className="muted small">{p.summary}</p>
                  <div className="chips">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap center">
          <Reveal>
            <p className="lead" style={{ maxWidth: "60ch", margin: "0 auto" }}>
              Want the real test?{" "}
              <span className="tealtxt">
                Ask ChatGPT or Perplexity who does AI-search optimization
              </span>{" "}
              and see whether we come up. That’s the standard we hold our own
              site to — and yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <CtaBand
            eyebrow="Founding partners"
            title="Be our first real case study."
            primaryLabel="Apply to work with us"
            secondary={{ label: "Read the method", href: "/case-studies" }}
          >
            We’re taking a small number of founding U.S. clients — favorable
            terms in exchange for the results we’ll publish together.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
