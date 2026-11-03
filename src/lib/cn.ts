/** Tiny className joiner; avoids pulling in clsx/tailwind-merge for this project's needs. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
