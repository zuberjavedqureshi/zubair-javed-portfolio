"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { featuredProject } from "@/data/projects";
import { cn } from "@/lib/cn";

const shots = featuredProject.screenshots;

export function HeroDevice() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") setIndex((i) => (i + 1) % shots.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  const shot = shots[index];

  return (
    <figure
      className="relative mx-auto w-full max-w-[34rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto w-[min(62vw,17.5rem)]">
        {/* soft stage light behind the device */}
        <div
          aria-hidden="true"
          className="absolute -inset-x-16 -inset-y-10 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--accent-soft),transparent)] blur-2xl"
        />

        <div className="relative rounded-[2.3rem] bg-(--device-bezel) p-[0.5rem] shadow-[0_50px_100px_-30px_rgb(0_0_0/0.6),0_0_0_1px_rgb(255_255_255/0.07)_inset]">
          <div className="relative aspect-[720/1600] overflow-hidden rounded-[1.85rem] bg-bg-sunken">
            <AnimatePresence initial={false} mode="popLayout">
              <m.div
                key={shot.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 280px, 62vw"
                  className="object-cover object-top"
                />
              </m.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      <figcaption className="mt-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-1.5" role="group" aria-label="Choose an app screen">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.caption} screen`}
              aria-pressed={i === index}
              className="group grid size-6 place-items-center"
            >
              <span
                className={cn(
                  "block h-1 rounded-full transition-all duration-500 ease-(--ease-out-expo)",
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-line-strong group-hover:bg-fg-subtle",
                )}
              />
            </button>
          ))}
        </div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-subtle">
          Real app screen · <span className="text-fg-muted">{shot.caption}</span>
        </p>
      </figcaption>
    </figure>
  );
}
