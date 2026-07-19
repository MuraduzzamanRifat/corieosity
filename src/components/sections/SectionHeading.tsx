import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "center" : ""}>
      <div
        style={{
          maxWidth: "62ch",
          margin: center ? "0 auto 48px" : "0 0 48px",
        }}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="h2" style={{ margin: "0.35em 0 0.3em" }}>
          {title}
        </h2>
        {children && <p className="lead">{children}</p>}
      </div>
    </Reveal>
  );
}
