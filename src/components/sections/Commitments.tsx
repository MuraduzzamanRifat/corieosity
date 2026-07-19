import Reveal from "@/components/ui/Reveal";
import { commitments } from "@/content/site";

export default function Commitments() {
  return (
    <div className="grid grid-2">
      {commitments.map((c, i) => (
        <Reveal key={c.metric} delay={i * 60}>
          <div className="card" style={{ height: "100%" }}>
            <span className="tag">We commit to</span>
            <h3 className="h3" style={{ margin: "0.3em 0" }}>
              {c.metric}
            </h3>
            <p className="muted">{c.promise}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
