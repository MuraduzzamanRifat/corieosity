import Reveal from "@/components/ui/Reveal";
import { answerLayers } from "@/content/site";

export default function AnswerSystem() {
  return (
    <div className="layers">
      <div>
        {answerLayers.map((l, i) => (
          <Reveal key={l.title} delay={i * 80}>
            <div className="layer">
              <span className="step">{l.step}</span>
              <h3>{l.title}</h3>
              <p>{l.body}</p>
              <span className="out">→ {l.out}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="answer-visual" aria-hidden>
          <div className="orbit o1">
            <span className="sat" />
          </div>
          <div className="orbit o2">
            <span className="sat" />
          </div>
          <div className="orbit o3">
            <span className="sat" />
          </div>
          <svg viewBox="0 0 64 64" className="core-owl">
            <use href="#owl" />
          </svg>
        </div>
      </Reveal>
    </div>
  );
}
