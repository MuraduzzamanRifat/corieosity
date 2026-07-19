import Reveal from "@/components/ui/Reveal";
import { services } from "@/content/site";
import { serviceIcons } from "@/components/svg/Icons";

export default function ServiceGrid({
  withDeliverables = false,
}: {
  withDeliverables?: boolean;
}) {
  return (
    <div className="grid grid-2">
      {services.map((s, i) => {
        const Icon = serviceIcons[s.slug];
        return (
          <Reveal key={s.slug} delay={i * 60}>
            <article
              className="card svc"
              style={{ height: "100%" }}
              data-cursor="hover"
              id={s.slug}
            >
              <div className="ico-badge">{Icon ? <Icon /> : null}</div>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              {withDeliverables && (
                <ul className="bullets">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              <span className="out">→ {s.outcome}</span>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
