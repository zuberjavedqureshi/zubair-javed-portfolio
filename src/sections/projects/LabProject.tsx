import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/projects";
import { StackTags } from "./ProjectParts";

/** Compact entry for work-in-progress projects with no published screenshots. */
export function LabProject({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="flex items-start gap-5 rounded-3xl border border-line bg-bg-elev p-6 sm:gap-7 sm:p-8"
    >
      <span
        aria-hidden="true"
        className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line bg-bg-sunken font-display text-2xl italic text-fg-subtle sm:size-14 sm:text-3xl"
      >
        {project.name.charAt(0)}
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-3">
          <h4 className="font-display text-3xl leading-none tracking-[-0.02em]">{project.name}</h4>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">{project.summary}</p>
        <div className="mt-6">
          <StackTags stack={project.stack} />
        </div>
      </div>
    </Reveal>
  );
}
