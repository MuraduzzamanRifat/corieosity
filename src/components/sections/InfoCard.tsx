// Shared card used by Commitments, About values, and Case-Studies measures.
export default function InfoCard({
  tag,
  title,
  body,
  small = false,
}: {
  tag?: string;
  title: string;
  body: string;
  small?: boolean;
}) {
  return (
    <div className="card">
      {tag && <span className="tag">{tag}</span>}
      <h3 className="h3" style={{ margin: "0.3em 0" }}>
        {title}
      </h3>
      <p className={small ? "muted small" : "muted"}>{body}</p>
    </div>
  );
}
