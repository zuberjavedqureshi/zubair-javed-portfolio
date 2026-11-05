import { ArrowUp } from "lucide-react";
import { Monogram } from "@/components/Monogram";
import { profile } from "@/data/profile";
import { getBuildYear } from "@/lib/build-year";

export async function Footer() {
  const year = await getBuildYear();
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Monogram />
          <div>
            <p className="text-sm text-fg">{profile.name}</p>
            <p className="mt-0.5 font-display text-lg italic leading-tight text-fg-muted">
              Building useful things, one release at a time.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 sm:justify-end sm:gap-10">
          <p className="font-mono text-[0.6875rem] text-fg-subtle">© {year}</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-line transition-transform duration-500 ease-(--ease-out-expo) group-hover:-translate-y-1">
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
