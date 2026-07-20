import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Corieosity applies AI-search optimization and immersive web to funded startups, SaaS, design-conscious brands, and enterprise teams across the U.S.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <SceneTint accent="#62e6b6" />
      <PageHero
        index="10"
        eyebrow="Industries"
        title={
          <>
            The same method, <span className="teal-grad">tuned to you</span>.
          </>
        }
      >
        The Answer Readiness System works across markets — but the questions your
        buyers ask AI, and the proof they need, are different. Here&apos;s how we
        adapt it to who you are.
      </PageHero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid grid-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 70}>
                <div className="card" style={{ height: "100%" }}>
                  <span className="tag">{ind.who}</span>
                  <h2 className="h3" style={{ margin: "0.35em 0 0.2em", fontSize: "1.5rem" }}>
                    {ind.name}
                  </h2>
                  <p className="muted" style={{ marginBottom: 14 }}>
                    <strong className="tealtxt">The challenge — </strong>
                    {ind.challenge}
                  </p>
                  <p className="muted">
                    <strong className="tealtxt">How we help — </strong>
                    {ind.approach}
                  </p>
                  <ul className="bullets">
                    <li>
                      Lead service:{" "}
                      <Link href="/services" className="tealtxt">
                        {ind.service}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-wash-gold">
        <div className="wrap">
          <CtaBand
            eyebrow="Not sure where you fit?"
            title="Tell us your market — we'll show you the answer gap."
            primaryLabel="Get your Answer Readiness score"
            primaryHref="/start"
            secondary={{ label: "Book a call", href: "/book" }}
          >
            Every industry has questions its buyers now ask AI first. We&apos;ll show
            you which ones you&apos;re invisible for.
          </CtaBand>
        </div>
      </section>
    </>
  );
}
