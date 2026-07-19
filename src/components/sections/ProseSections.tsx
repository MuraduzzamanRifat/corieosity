// Shared legal/prose renderer used by Privacy and Terms.
export default function ProseSections({
  sections,
}: {
  sections: { h: string; p: string }[];
}) {
  return (
    <section className="band">
      <div className="wrap stack" style={{ gap: 34, maxWidth: "78ch" }}>
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="h3" style={{ marginBottom: "0.4em" }}>
              {s.h}
            </h2>
            <p className="muted">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
