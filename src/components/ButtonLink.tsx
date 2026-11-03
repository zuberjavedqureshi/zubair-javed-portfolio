import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-strong shadow-[0_1px_0_0_rgb(255_255_255/0.15)_inset]",
  secondary: "border border-line-strong text-fg hover:border-fg/40 hover:bg-neutral-soft",
  ghost: "text-fg-muted hover:text-fg",
};

type Props = ComponentProps<"a"> & {
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
};

/** Anchor styled as a button. Links stay links for semantics and middle-click. */
export function ButtonLink({ variant = "primary", icon, external, className, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex h-12 select-none items-center justify-center gap-2.5 rounded-full px-6 text-[0.9375rem] font-medium tracking-[-0.01em]",
        "transition-[background-color,border-color,color,transform] duration-300 ease-(--ease-out-expo) active:scale-[0.97]",
        variants[variant],
        className,
      )}
    >
      {children}
      {icon ? (
        <span className="transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5 group-hover:-translate-y-px">
          {icon}
        </span>
      ) : null}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
