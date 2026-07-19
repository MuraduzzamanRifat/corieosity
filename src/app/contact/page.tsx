import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SceneTint from "@/components/three/SceneTint";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import { IconMail, IconPhone, IconClock, IconSpark } from "@/components/svg/Icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us your site and your goal. We'll send back a free Answer Readiness score. Serving U.S. startups, SaaS & enterprise, in ET/PT hours, billed in USD.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SceneTint accent="#62e6b6" />
      <PageHero
        index="05"
        eyebrow="Contact"
        title={
          <>
            Find out if <span className="teal-grad">AI can see you</span>.
          </>
        }
      >
        Tell us your site and your goal. We’ll send back a free Answer Readiness
        score — the three-layer breakdown of where you’re visible, where you’re
        invisible, and what it’s costing you.
      </PageHero>

      <section className="band">
        <div className="wrap contact-grid">
          <Reveal>
            <div className="card-glass" style={{ padding: "clamp(24px,4vw,40px)" }}>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="contact-aside">
              <div className="row">
                <IconMail />
                <div>
                  <div className="k">Email</div>
                  <a className="v" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="row">
                <IconPhone />
                <div>
                  <div className="k">Phone</div>
                  <a className="v" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="row">
                <IconClock />
                <div>
                  <div className="k">Hours</div>
                  <div className="v">{site.hours}</div>
                </div>
              </div>
              <div className="row">
                <IconSpark />
                <div>
                  <div className="k">Enterprise</div>
                  <div className="v">
                    Procurement, security review, and custom scopes — ask for
                    the enterprise track.
                  </div>
                </div>
              </div>
              <p className="form-note" style={{ marginTop: 18 }}>
                {site.serving} {site.billing}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
