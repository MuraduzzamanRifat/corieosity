import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Reveal>
          <div>
            <span className="idx">{index}</span>
            <span className="eyebrow" style={{ marginLeft: 10 }}>
              {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="h1 h-hero" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)" }}>
            {title}
          </h1>
        </Reveal>
        {children && (
          <Reveal delay={140}>
            <p className="lead">{children}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
