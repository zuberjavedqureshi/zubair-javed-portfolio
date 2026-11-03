import { GooglePlayIcon } from "@/components/icons";

export function PlayStoreButton({ href, appName }: { href: string; appName: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get ${appName} on Google Play (opens in a new tab)`}
      className="group inline-flex h-14 items-center gap-3 self-start rounded-2xl bg-fg py-2 pl-4 pr-5 text-bg transition-transform duration-300 ease-(--ease-out-expo) hover:-translate-y-0.5 active:scale-[0.97]"
    >
      <GooglePlayIcon className="size-6 transition-transform duration-500 ease-(--ease-out-expo) group-hover:rotate-[-8deg]" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.625rem] font-medium uppercase tracking-[0.08em] opacity-70">Get it on</span>
        <span className="mt-1 text-lg font-semibold tracking-[-0.02em]">Google Play</span>
      </span>
    </a>
  );
}
