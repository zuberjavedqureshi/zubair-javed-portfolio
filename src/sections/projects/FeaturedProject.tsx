import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/projects";
import { PlayStoreButton } from "./PlayStoreButton";
import { FeatureList, ProjectTitle, SecondaryLinks, StackTags } from "./ProjectParts";
import { ScreenshotRail } from "./ScreenshotRail";

export function FeaturedProject({ project }: { project: Project }) {
  const play = project.links.find((l) => l.kind === "play-store");

  return (
    <article aria-labelledby={`${project.slug}-title`} className="relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} label={project.statusLabel} />
            <span className="eyebrow">{project.kicker}</span>
          </div>
          <div className="mt-7" id={`${project.slug}-title`}>
            <ProjectTitle project={project} />
          </div>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-fg-muted text-pretty">{project.summary}</p>
          {play ? (
            <div className="mt-10">
              <PlayStoreButton href={play.href} appName={project.name} />
            </div>
          ) : null}
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-14" delay={0.08}>
          <h4 className="eyebrow mb-6">Highlights</h4>
          <FeatureList features={project.features} />
          <div className="mt-10 grid gap-6">
            <StackTags stack={project.stack} />
            <SecondaryLinks links={project.links} />
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20" y={28}>
        <ScreenshotRail shots={project.screenshots} label={`${project.name} screenshots`} />
        {project.screenshotNote ? (
          <p className="mt-2 font-mono text-[0.6875rem] text-fg-subtle lg:-mt-8">{project.screenshotNote}</p>
        ) : null}
      </Reveal>
    </article>
  );
}
