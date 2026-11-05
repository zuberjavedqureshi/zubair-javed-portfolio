import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience } from "@/data/experience";

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="shell scroll-mt-20 py-28 sm:py-36">
      <SectionHeader
        id="experience-title"
        index="04"
        label="Experience"
        title={
          <>
            Shipping at work, <em className="text-fg-muted">shipping on my own.</em>
          </>
        }
      />

      <ol className="mt-16 sm:mt-20">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.org} delay={i * 0.05} className="group relative grid gap-6 border-b border-line py-12 first:border-t sm:py-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="font-mono text-[0.8125rem] text-fg-muted">
                <time dateTime={job.start}>{job.period}</time>
              </p>
              {job.current ? (
                <p className="mt-2 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-accent">
                  <span className="status-dot size-1.5 rounded-full bg-current" aria-hidden="true" /> Current
                </p>
              ) : null}
            </div>
            <div className="md:col-span-9 lg:col-span-8">
              <h3 className="font-display text-[2.1rem] leading-tight tracking-[-0.015em] sm:text-5xl">
                {job.role} <span className="text-fg-subtle">{job.connector ?? "at"}</span>{" "}
                <span className="italic text-accent">{job.org}</span>
              </h3>
              <p className="mt-3 text-lg text-fg-muted">{job.summary}</p>
              <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {job.points.map((p) => (
                  <li key={p} className="relative pl-5 text-[0.9375rem] leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-20 grid gap-6 md:grid-cols-12 md:gap-8">
        <h3 className="eyebrow md:col-span-3">Education</h3>
        <div className="flex items-start gap-5 rounded-2xl border border-line bg-bg-elev p-6 sm:p-7 md:col-span-9 lg:col-span-8">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <p className="text-lg font-medium tracking-[-0.01em] text-fg">{education.degree}</p>
              <p className="mt-1 text-[0.9375rem] text-fg-muted">
                {education.institution} · {education.university}
              </p>
            </div>
            <p className="mt-2 font-mono text-[0.8125rem] text-fg-subtle sm:mt-0">
              Completed <time dateTime={education.completedIso}>{education.completed}</time>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
