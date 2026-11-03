import { GitCommitHorizontal } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/data/projects";
import { PlayStoreButton } from "./PlayStoreButton";
import { FeatureList, ProjectTitle, SecondaryLinks, SpecList, StackTags } from "./ProjectParts";
import { ScreenshotRail } from "./ScreenshotRail";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}

export function FeaturedProject({ project }: { project: Project }) {
  const play = project.links.find((l) => l.kind === "play-store");

  return (
    <article aria-labelledby={`${project.slug}-title`} className="relative">
      {/* Masthead */}
      <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} label={project.statusLabel} />
            <span className="eyebrow">{project.kicker}</span>
          </div>
          <div className="mt-6" id={`${project.slug}-title`}>
            <ProjectTitle project={project} />
          </div>
        </div>
        {play ? <PlayStoreButton href={play.href} appName={project.name} /> : null}
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="text-xl leading-relaxed text-fg text-pretty sm:text-2xl sm:leading-relaxed">{project.summary}</p>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
          <SpecList specs={project.specs} />
        </Reveal>
      </div>

      {/* Gallery */}
      <Reveal className="mt-16" y={28}>
        <ScreenshotRail shots={project.screenshots} label={`${project.name} screenshots`} />
        {project.screenshotNote ? (
          <p className="mt-2 font-mono text-[0.6875rem] text-fg-subtle lg:-mt-8">{project.screenshotNote}</p>
        ) : null}
      </Reveal>

      {/* What / How */}
      <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <h4 className="eyebrow mb-6">What it does</h4>
          <FeatureList features={project.features} />
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <h4 className="eyebrow mb-6">How it&rsquo;s built</h4>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {project.engineering.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05} className="bg-bg p-6 sm:p-7">
                <p className="font-mono text-[0.6875rem] text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h5 className="mt-3 text-[1.0625rem] font-medium tracking-[-0.01em] text-fg">{e.title}</h5>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Build log + stack */}
      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h4 className="eyebrow mb-5">Stack</h4>
          <StackTags stack={project.stack} />
          <div className="mt-8">
            <SecondaryLinks links={project.links} />
          </div>
        </div>

        {project.buildLog ? (
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <div className="overflow-hidden rounded-2xl border border-line bg-bg-sunken">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-subtle">
                  Build log · selected commits
                </p>
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-line-strong" />
                  <span className="size-2 rounded-full bg-line-strong" />
                  <span className="size-2 rounded-full bg-line-strong" />
                </span>
              </div>
              <ol className="divide-y divide-line/60 px-5 py-2 font-mono text-[0.75rem] sm:text-[0.8125rem]">
                {project.buildLog.map((c) => (
                  <li key={c.message} className="flex items-start gap-3 py-2.5">
                    <GitCommitHorizontal className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    <time dateTime={c.date} className="w-24 shrink-0 text-fg-subtle">
                      {formatDate(c.date)}
                    </time>
                    <span className="min-w-0 text-fg [overflow-wrap:anywhere]">{c.message}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ) : null}
      </div>
    </article>
  );
}
