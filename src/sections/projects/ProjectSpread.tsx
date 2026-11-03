import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/projects";
import { FeatureList, ProjectTitle, SecondaryLinks, SpecList, StackTags } from "./ProjectParts";
import { ScreenshotRail } from "./ScreenshotRail";

/** Secondary project with real screenshots: text column + staggered gallery. */
export function ProjectSpread({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} label={project.statusLabel} />
            <span className="eyebrow">{project.kicker}</span>
          </div>
          <div className="mt-6" id={`${project.slug}-title`}>
            <ProjectTitle project={project} size="lg" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted text-pretty">{project.summary}</p>
        </Reveal>

        <Reveal className="mt-8" delay={0.05}>
          <SpecList specs={project.specs} />
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <h4 className="eyebrow mb-5">Key features</h4>
          <FeatureList features={project.features} />
        </Reveal>

        {project.engineering.length ? (
          <div className="mt-10">
            <h4 className="eyebrow mb-5">Engineering decisions</h4>
            <ul className="grid gap-5">
              {project.engineering.map((e) => (
                <Reveal as="li" key={e.title} className="border-l border-line-strong pl-4">
                  <p className="text-[0.9375rem] font-medium text-fg">{e.title}</p>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">{e.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 grid gap-6">
          <StackTags stack={project.stack} />
          <SecondaryLinks links={project.links} />
        </div>
      </div>

      <Reveal className="min-w-0 lg:sticky lg:top-28 lg:col-span-7 lg:self-start lg:pl-8" y={28}>
        <ScreenshotRail shots={project.screenshots} label={`${project.name} screenshots`} staggered />
        {project.screenshotNote ? (
          <p className="mt-2 font-mono text-[0.6875rem] text-fg-subtle lg:-mt-8">{project.screenshotNote}</p>
        ) : null}
      </Reveal>
    </article>
  );
}
