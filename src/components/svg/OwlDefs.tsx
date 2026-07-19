// Global SVG symbol for the owl mark. dangerouslySetInnerHTML keeps the raw SVG
// exactly as designed (no JSX attribute conversion). Referenced via <use href="#owl" />.
export default function OwlDefs() {
  return (
    <div
      aria-hidden
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{
        __html: `<svg width="0" height="0"><defs>
          <g id="owl">
            <path d="M32 6 C18 6 8 16 8 32 C8 48 18 58 32 58 C46 58 56 48 56 32 C56 16 46 6 32 6Z" fill="none" stroke="currentColor" stroke-width="2.4" opacity=".55"/>
            <path d="M14 12 L23 22 M50 12 L41 22" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>
            <circle cx="23" cy="30" r="9" fill="none" stroke="#ffcb3d" stroke-width="2.6"/>
            <circle cx="41" cy="30" r="9" fill="none" stroke="#ffcb3d" stroke-width="2.6"/>
            <circle cx="23" cy="30" r="3.4" fill="#ffcb3d"/>
            <circle cx="41" cy="30" r="3.4" fill="#ffcb3d"/>
            <path d="M32 34 L28 40 L32 42 L36 40 Z" fill="#ffcb3d"/>
          </g>
        </defs></svg>`,
      }}
    />
  );
}
