import Reveal from "@/components/ui/Reveal";
import { stats } from "@/content/site";

export default function StatBar() {
  return (
    <section className="statbar band-tight">
      <div className="wrap stats">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="stat">
              <div className="n">
                <em>{s.value}</em>
              </div>
              <p>{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
