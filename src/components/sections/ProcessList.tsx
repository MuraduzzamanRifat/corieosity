import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/content/site";

export default function ProcessList() {
  return (
    <div className="steps">
      {processSteps.map((s, i) => (
        <Reveal key={s.n} delay={i * 70}>
          <div className="pstep">
            <div className="num">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
