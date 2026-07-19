export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="star">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
