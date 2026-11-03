"use client";

import { AnimatePresence, m, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Monogram } from "@/components/Monogram";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section that occupies the reading line (~35% from top).
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id === "home" ? "home" : n.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape, manage focus.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 60);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      window.clearTimeout(t);
    };
  }, [open]);

  const close = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent",
        )}
      >
        <m.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent"
        />
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" onClick={() => close()}>
            <Monogram className="transition-transform duration-500 ease-(--ease-out-expo) group-hover:-rotate-6" />
            <span className="sr-only text-sm font-medium tracking-[-0.01em] sm:not-sr-only">{profile.name}</span>
            <span className="sr-only">, back to top</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-bg-elev/60 p-1 backdrop-blur">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="relative">
                    {isActive ? (
                      <m.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-neutral-soft ring-1 ring-line-strong"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    ) : null}
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative block rounded-full px-3.5 py-1.5 text-[0.8125rem] transition-colors duration-300 lg:px-4",
                        isActive ? "text-fg" : "text-fg-muted hover:text-fg",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden h-10 items-center gap-1.5 rounded-full bg-fg px-4 text-[0.8125rem] font-medium text-bg transition-transform duration-300 active:scale-95 lg:inline-flex"
            >
              Let&rsquo;s talk
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full border border-line text-fg transition-transform active:scale-95 md:hidden"
            >
              {open ? <X className="size-[1.1rem]" aria-hidden="true" /> : <Menu className="size-[1.1rem]" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-40 flex flex-col bg-bg pt-16 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-between pb-8 pt-6">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <m.li
                    key={item.id}
                    className="border-b border-line"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12, transition: { duration: 0.18 } }}
                    transition={{ delay: 0.12 + i * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={`#${item.id}`}
                      onClick={() => close()}
                      aria-current={active === item.id ? "location" : undefined}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span
                        className={cn(
                          "font-display text-[2.6rem] leading-none tracking-[-0.02em]",
                          active === item.id ? "italic text-accent" : "text-fg",
                        )}
                      >
                        {item.label}
                      </span>
                      <span aria-hidden="true" className="font-mono text-xs text-fg-subtle">0{i}</span>
                    </a>
                  </m.li>
                ))}
              </ul>
              <m.div
                className="flex flex-col gap-3 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="eyebrow">{profile.availability}</p>
                <div className="flex gap-3 text-sm">
                  <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg">
                    LinkedIn ↗
                  </a>
                  <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg">
                    GitHub ↗
                  </a>
                </div>
              </m.div>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
