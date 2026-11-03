import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectTitle({ project, as: Tag = "h3", size = "xl" }: { project: Project; as?: "h3" | "h4"; size?: "xl" | "lg" }) {
  return (
    <div className="flex items-center gap-4">
      {project.icon ? (
        <Image
          src={project.icon}
          alt=""
          width={64}
          height={64}
          className={size === "xl" ? "size-14 rounded-[1rem] ring-1 ring-line sm:size-16" : "size-12 rounded-[0.85rem] ring-1 ring-line"}
        />
      ) : null}
      <Tag
        className={
          size === "xl"
            ? "font-display text-5xl leading-none tracking-[-0.03em] sm:text-7xl lg:text-8xl"
            : "font-display text-4xl leading-none tracking-[-0.02em] sm:text-6xl"
        }
      >
        {project.name}
      </Tag>
    </div>
  );
}

export function SpecList({ specs }: { specs: Project["specs"] }) {
  return (
    <dl className="divide-y divide-line border-y border-line font-mono text-[0.8125rem]">
      {specs.map((s) => (
        <div key={s.label} className="flex items-baseline justify-between gap-6 py-2.5">
          <dt className="shrink-0 text-fg-subtle">{s.label}</dt>
          <dd className="text-right text-fg [overflow-wrap:anywhere]">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="grid gap-3">
      {features.map((f) => (
        <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-muted">
          <Check className="mt-[0.3rem] size-3.5 shrink-0 text-accent" aria-hidden="true" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

export function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technology stack">
      {stack.map((t) => (
        <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-fg-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function SecondaryLinks({ links }: { links: Project["links"] }) {
  const rest = links.filter((l) => l.kind !== "play-store");
  if (!rest.length) return null;
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {rest.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
          >
            {l.label}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
