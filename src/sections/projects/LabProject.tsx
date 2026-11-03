import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/projects";
import { FeatureList, StackTags } from "./ProjectParts";

/**
 * Compact entry for work-in-progress projects with no published screenshots.
 * The visual is an explicitly-labelled typographic placeholder, never a fake UI.
 */
export function LabProject({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-elev">
      <div
        role="img"
        aria-label={`Typographic placeholder for ${project.name}. No screenshots have been published yet.`}
        className="relative grid aspect-[16/9] place-items-center overflow-hidden border-b border-line bg-bg-sunken bg-[repeating-linear-gradient(135deg,var(--line)_0_1px,transparent_1px_14px)]"
      >
        <span aria-hidden="true" className="font-display text-[8rem] leading-none italic text-fg/15 sm:text-[10rem]">
          {project.name.charAt(0)}
        </span>
        <span className="absolute bottom-3 left-4 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-fg-subtle">
          Placeholder · screenshots not yet published
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>
        <h4 className="mt-5 font-display text-4xl leading-none tracking-[-0.02em]">{project.name}</h4>
        <p className="eyebrow mt-2">{project.kicker}</p>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-fg-muted">{project.summary}</p>
        <div className="mt-6">
          <p className="eyebrow mb-4">Implemented so far</p>
          <FeatureList features={project.features} />
        </div>
        <div className="mt-auto pt-8">
          <StackTags stack={project.stack} />
        </div>
      </div>
    </Reveal>
  );
}
