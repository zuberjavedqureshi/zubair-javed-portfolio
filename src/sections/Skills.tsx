import { Network, Waves } from "lucide-react";
import type { CSSProperties } from "react";
import { brandIcons } from "@/components/brand-icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { techGroups, type Tech } from "@/data/skills";
import { cn } from "@/lib/cn";

/** Brand colours too dark to read on the dark theme fall back to the foreground colour. */
const inkBrands = new Set(["github", "json", "sqlite"]);

/** Official secondary brand tones where the primary one lacks contrast on one theme (light, dark). */
const themedBrands: Record<string, string> = {
  flutter: "light-dark(#02569B, #47C5FB)",
  dart: "light-dark(#0175C2, #29B6F6)",
  javascript: "light-dark(#B39B00, #F7DF1E)",
};

function brandColor(icon: Tech["icon"]) {
  if ("lucide" in icon) return "var(--accent)";
  if (inkBrands.has(icon.brand)) return "var(--fg)";
  return themedBrands[icon.brand] ?? brandIcons[icon.brand].hex;
}

function TechGlyph({ icon, className }: { icon: Tech["icon"]; className?: string }) {
  if ("lucide" in icon) {
    const Glyph = icon.lucide === "riverpod" ? Waves : Network;
    return <Glyph className={className} strokeWidth={1.75} aria-hidden="true" />;
  }
  const b = brandIcons[icon.brand];
  return (
    <svg viewBox={b.viewBox} fill="currentColor" className={className} aria-hidden="true">
      <path d={b.path} fillRule={"evenOdd" in b ? "evenodd" : undefined} />
    </svg>
  );
}

function TechTile({ tech }: { tech: Tech }) {
  const style = { "--brand": brandColor(tech.icon) } as CSSProperties;

  if (tech.primary) {
    return (
      <li
        style={style}
        className="group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-3xl border border-line bg-bg-elev p-6 transition-[border-color,transform] duration-500 ease-(--ease-out-expo) hover:-translate-y-1 hover:border-line-strong sm:col-span-2 sm:row-span-2 sm:min-h-0 sm:p-8"
      >
        <span
          aria-hidden="true"
          className="absolute -right-10 -top-10 size-44 rounded-full bg-(--brand) opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        />
        <TechGlyph icon={tech.icon} className="relative size-10 text-(--brand) sm:size-14" />
        <span className="relative mt-8">
          <span className="block font-display text-[2rem] leading-none tracking-[-0.02em] sm:text-5xl">{tech.name}</span>
          <span className="eyebrow mt-3 block">Core stack</span>
        </span>
      </li>
    );
  }

  return (
    <li
      style={style}
      className="group flex items-center gap-3.5 rounded-2xl border border-line px-4 py-4 transition-[border-color,background-color,transform] duration-500 ease-(--ease-out-expo) hover:-translate-y-0.5 hover:border-line-strong hover:bg-bg-elev sm:flex-col sm:items-start sm:justify-between sm:gap-6 sm:p-5"
    >
      <TechGlyph
        icon={tech.icon}
        className="size-6 shrink-0 text-fg-muted transition-colors duration-300 group-hover:text-(--brand) sm:size-7"
      />
      <span className="text-[0.9375rem] leading-tight text-fg">{tech.name}</span>
    </li>
  );
}

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="shell scroll-mt-20 py-28 sm:py-36">
      <SectionHeader
        id="skills-title"
        index="03"
        label="Skills"
        title={
          <>
            The tools I <em className="text-fg-muted">build with.</em>
          </>
        }
      />

      <div className="mt-16 grid gap-14 sm:mt-20 sm:gap-16">
        {techGroups.map((group, gi) => {
          const hasPrimary = group.items.some((t) => t.primary);
          return (
            <Reveal key={group.title} delay={gi * 0.04} className="grid gap-6 md:grid-cols-12 md:gap-8">
              <h3 className="eyebrow md:col-span-3 md:pt-2">{group.title}</h3>
              <ul
                className={cn(
                  "grid grid-cols-2 gap-3 md:col-span-9",
                  hasPrimary ? "sm:grid-cols-4 lg:grid-flow-dense lg:grid-cols-6" : "sm:grid-cols-3 lg:grid-cols-6",
                )}
              >
                {group.items.map((tech) => (
                  <TechTile key={tech.name} tech={tech} />
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
