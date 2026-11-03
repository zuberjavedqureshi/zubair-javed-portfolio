/** Typographic monogram: an italic serif "z" set against a mono "q" inside a rounded square. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-grid size-9 place-items-center rounded-[0.7rem] border border-line-strong bg-bg-elev ${className ?? ""}`}
    >
      <span className="flex items-baseline leading-none">
        <span className="font-display text-[1.35rem] italic text-fg">z</span>
        <span className="-ml-px font-mono text-[0.8rem] font-medium text-accent">q</span>
      </span>
    </span>
  );
}
