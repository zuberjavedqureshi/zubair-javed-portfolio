import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { evidenceLabels, skillGroups } from "@/data/skills";
import { cn } from "@/lib/cn";

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="shell scroll-mt-20 py-24 sm:py-32">
      <SectionHeader
        id="skills-title"
        index="03"
        label="Capabilities"
        title={
          <>
            A toolkit backed by <em className="text-fg-muted">evidence,</em> not percentages.
          </>
        }
        lede="Each skill is tagged with where I’ve actually used it: at work or in a specific project."
      />

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.6875rem] text-fg-subtle md:ml-[25%] md:pl-2">
        {Object.entries(evidenceLabels).map(([k, v]) => (
          <span key={k}>
            <span className="text-fg-muted">{k}</span> = {v}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={(i % 3) * 0.06}
            className={cn("flex flex-col p-6 sm:p-8", g.exploring ? "bg-accent-soft [background-color:color-mix(in_srgb,var(--accent)_6%,var(--bg))]" : "bg-bg")}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-[0.6875rem] text-accent">{String(i + 1).padStart(2, "0")}</p>
              {g.exploring ? (
                <span className="rounded-full border border-accent/30 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-accent">
                  Exploring
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 font-display text-[1.9rem] leading-tight tracking-[-0.01em]">{g.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{g.blurb}</p>
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {g.skills.map((s) => (
                <li key={s.name} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="text-[0.9375rem] text-fg">{s.name}</span>
                  {s.evidence?.length ? (
                    <span
                      className="shrink-0 font-mono text-[0.625rem] tracking-[0.04em] text-fg-subtle"
                      title={`Used in: ${s.evidence.map((e) => evidenceLabels[e]).join(", ")}`}
                    >
                      <span className="sr-only">Used in: </span>
                      {s.evidence.join(" · ")}
                    </span>
                  ) : (
                    <span className="shrink-0 font-mono text-[0.625rem] text-fg-subtle/70">
                      {g.exploring ? "learning" : "daily tool"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
