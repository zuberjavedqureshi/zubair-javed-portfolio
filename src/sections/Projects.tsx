import { SectionHeader } from "@/components/SectionHeader";
import { featuredProject, labProjects, secondaryProjects } from "@/data/projects";
import { FeaturedProject } from "./projects/FeaturedProject";
import { LabProject } from "./projects/LabProject";
import { ProjectSpread } from "./projects/ProjectSpread";

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          id="projects-title"
          index="02"
          label="Selected work"
          title={
            <>
              Apps I&rsquo;ve designed, built <em className="text-fg-muted">and shipped.</em>
            </>
          }
          lede="Every project here is real and every screenshot is from the actual app. Each one carries an honest status label: what’s live, what’s in testing, and what’s still on the workbench."
        />

        <div className="mt-20">
          <FeaturedProject project={featuredProject} />
        </div>
      </div>

      {secondaryProjects.map((p) => (
        <div key={p.slug} className="mt-28 border-t border-line bg-bg-elev/40 py-20 sm:mt-36 sm:py-28">
          <div className="shell">
            <ProjectSpread project={p} />
          </div>
        </div>
      ))}

      {labProjects.length ? (
        <div className="shell mt-24 sm:mt-32">
          <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-3xl tracking-[-0.02em] sm:text-4xl">On the workbench</h3>
            <p className="max-w-md text-[0.9375rem] text-fg-muted">
              Projects in development. They are listed for transparency and are not released products.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {labProjects.map((p, i) => (
              <LabProject key={p.slug} project={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
