"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "zjq-theme";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function ThemeToggle({ className }: { className?: string }) {
  // Server snapshot is null so markup is identical on server and first client render.
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);

  const toggle = () => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode); theme still applies for this visit */
    }
  };

  const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? label : "Toggle colour theme"}
      title={theme ? label : undefined}
      className={`relative grid size-10 place-items-center rounded-full border border-line text-fg-muted transition-colors duration-300 hover:border-line-strong hover:text-fg active:scale-95 ${className ?? ""}`}
    >
      <Sun className="size-[1.05rem] scale-0 rotate-90 transition-transform duration-500 ease-(--ease-out-expo) [[data-theme=light]_&]:scale-100 [[data-theme=light]_&]:rotate-0" />
      <Moon className="absolute size-[1.05rem] scale-100 rotate-0 transition-transform duration-500 ease-(--ease-out-expo) [[data-theme=light]_&]:scale-0 [[data-theme=light]_&]:-rotate-90" />
    </button>
  );
}

/** Inline script run before paint: applies saved theme or OS preference, preventing a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;
