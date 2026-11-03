"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import type { Screenshot } from "@/data/projects";
import { cn } from "@/lib/cn";

/**
 * Horizontally scrollable, snap-aligned gallery of genuine screenshots.
 * Works with touch, trackpad, keyboard (focusable region) and the arrow buttons.
 */
export function ScreenshotRail({
  shots,
  label,
  staggered = false,
}: {
  shots: Screenshot[];
  label: string;
  staggered?: boolean;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const item = el.querySelector("li");
    const step = item ? item.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const scrollable = !(edges.start && edges.end);

  return (
    <div className="relative">
      <ul
        ref={ref}
        tabIndex={0}
        aria-label={label}
        className={cn(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0",
          staggered && "lg:items-start",
          // fade the trailing edge while more screenshots are off-screen
          !edges.end && "[mask-image:linear-gradient(to_right,#000_82%,transparent)]",
          edges.end && !edges.start && "[mask-image:linear-gradient(to_left,#000_82%,transparent)]",
        )}
      >
        {shots.map((shot, i) => (
          <li
            key={shot.src}
            className={cn(
              "w-[min(64vw,15.5rem)] shrink-0 snap-start sm:w-[15.5rem]",
              staggered && i % 2 === 1 && "lg:mt-16",
            )}
          >
            <figure>
              <PhoneFrame shot={shot} sizes="(min-width: 640px) 248px, 64vw" />
              <figcaption className="mt-4 flex items-baseline gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em]">
                <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-fg-muted">{shot.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {scrollable ? (
        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={edges.start}
            aria-label="Previous screenshots"
            className="grid size-10 place-items-center rounded-full border border-line-strong text-fg transition-[opacity,background-color,transform] hover:bg-neutral-soft active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={edges.end}
            aria-label="Next screenshots"
            className="grid size-10 place-items-center rounded-full border border-line-strong text-fg transition-[opacity,background-color,transform] hover:bg-neutral-soft active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
