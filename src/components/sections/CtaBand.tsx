import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function CtaBand({
  eyebrow = "Start here",
  title,
  children,
  primaryLabel = "Get your free Answer Readiness score",
  primaryHref = "/contact",
  secondary,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <Reveal>
      <div className="cta-band">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2" style={{ marginTop: "0.4em" }}>
          {title}
        </h2>
        {children && <p>{children}</p>}
        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Magnetic>
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel} <span className="arw">↗</span>
            </Link>
          </Magnetic>
          {secondary && (
            <Link href={secondary.href} className="btn btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
        <p className="form-note" style={{ marginTop: "20px" }}>
          Available in U.S. business hours · ET / PT · Billed in USD
        </p>
      </div>
    </Reveal>
  );
}
