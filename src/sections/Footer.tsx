import { ArrowUp } from "lucide-react";
import { Monogram } from "@/components/Monogram";
import { profile, site } from "@/data/profile";
import { getBuildYear } from "@/lib/build-year";

export async function Footer() {
  const year = await getBuildYear();
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Monogram />
          <p className="text-sm text-fg-muted">
            © {year} {profile.name}
          </p>
        </div>
        <p className="font-mono text-[0.6875rem] text-fg-subtle">
          Designed &amp; built by me with Next.js, Tailwind CSS and Motion.{" "}
          <a href={site.repo} target="_blank" rel="noopener noreferrer" className="link-underline text-fg-muted hover:text-fg">
            View source<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 self-start text-sm text-fg-muted transition-colors hover:text-fg sm:self-auto"
        >
          Back to top
          <span className="grid size-8 place-items-center rounded-full border border-line transition-transform duration-500 ease-(--ease-out-expo) group-hover:-translate-y-1">
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </footer>
  );
}
