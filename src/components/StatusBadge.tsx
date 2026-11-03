import type { ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/cn";

const styles: Record<ProjectStatus, string> = {
  live: "text-accent bg-accent-soft border-accent/25",
  testing: "text-warn bg-warn-soft border-warn/25",
  development: "text-fg-muted bg-neutral-soft border-line-strong",
};

export function StatusBadge({ status, label, className }: { status: ProjectStatus; label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em]",
        styles[status],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 rounded-full bg-current", status !== "development" && "status-dot")}
      />
      {label}
    </span>
  );
}
