import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Editorial section heading: numbered mono label + display title + optional lede. */
export function SectionHeader({
  index,
  label,
  title,
  lede,
  id,
}: {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  id: string;
}) {
  return (
    <header className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-8">
      <p className="eyebrow md:col-span-3">
        <span className="text-accent">{index}</span>
        <span className="mx-2 text-fg-subtle/60">/</span>
        {label}
      </p>
      <Reveal className="md:col-span-9">
        <h2
          id={id}
          className="font-display text-[2.5rem] leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </h2>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">{lede}</p> : null}
      </Reveal>
    </header>
  );
}
