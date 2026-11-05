import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/projects";
import { FeatureList, ProjectTitle, SecondaryLinks, StackTags } from "./ProjectParts";
import { ScreenshotRail } from "./ScreenshotRail";

/** Secondary project with real screenshots: short text column + staggered gallery. */
export function ProjectSpread({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
      <Reveal className="lg:col-span-5">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={project.statusLabel} />
          <span className="eyebrow">{project.kicker}</span>
        </div>
        <div className="mt-7" id={`${project.slug}-title`}>
          <ProjectTitle project={project} size="lg" />
        </div>
        <p className="mt-7 text-lg leading-relaxed text-fg-muted text-pretty">{project.summary}</p>

        <div className="mt-10">
          <FeatureList features={project.features} />
        </div>

        <div className="mt-10 grid gap-6">
          <StackTags stack={project.stack} />
          <SecondaryLinks links={project.links} />
        </div>
      </Reveal>

      <Reveal className="min-w-0 lg:col-span-7 lg:pl-8" y={28}>
        <ScreenshotRail shots={project.screenshots} label={`${project.name} screenshots`} staggered />
        {project.screenshotNote ? (
          <p className="mt-2 font-mono text-[0.6875rem] text-fg-subtle lg:-mt-8">{project.screenshotNote}</p>
        ) : null}
      </Reveal>
    </article>
  );
}
