import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { LocalTime } from "@/components/LocalTime";
import { profile } from "@/data/profile";
import { HeroDevice } from "./HeroDevice";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      {/* Hairline grid: quiet technical texture, fades out toward the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)] opacity-60"
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-elev/70 py-1.5 pl-2.5 pr-3.5 text-[0.8125rem] text-fg-muted backdrop-blur">
            <span className="status-dot size-2 rounded-full bg-accent text-accent" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 id="hero-title" className="mt-8">
            <span className="hero-rise block font-mono text-xs uppercase tracking-[0.1em] text-fg-subtle [animation-delay:60ms] sm:text-[0.8125rem]">
              {profile.name}
              <span className="mx-2 text-fg-subtle/50">—</span>
              <span className="text-fg-muted">Flutter &amp; Mobile Developer</span>
            </span>
            <span className="mt-5 block font-display text-[3.15rem] leading-[0.95] tracking-[-0.03em] text-balance sm:text-7xl lg:text-[5.4rem] xl:text-[6.4rem]">
              <span className="hero-line block [animation-delay:120ms]">I build Flutter apps</span>
              <span className="hero-line block [animation-delay:200ms]">
                that <em className="text-accent">ship</em>, and keep
              </span>
              <span className="hero-line block [animation-delay:280ms]">
                them <em>running.</em>
              </span>
            </span>
          </h1>

          <p className="hero-line mt-8 max-w-xl text-lg leading-relaxed text-fg-muted text-pretty [animation-delay:380ms] sm:text-xl">
            {profile.intro}
          </p>

          <div className="hero-rise mt-10 flex flex-wrap gap-3 [animation-delay:460ms]">
            <ButtonLink href="#projects" icon={<ArrowDown className="size-4" aria-hidden="true" />}>
              View projects
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" icon={<ArrowUpRight className="size-4" aria-hidden="true" />}>
              Contact me
            </ButtonLink>
            {profile.resumeUrl ? (
              <ButtonLink
                href={profile.resumeUrl}
                variant="ghost"
                download
                icon={<Download className="size-4" aria-hidden="true" />}
              >
                Résumé
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className="hero-rise [animation-delay:240ms] lg:col-span-5">
          <HeroDevice />
        </div>
      </div>

      {/* Status strip */}
      <div className="shell mt-16 sm:mt-20 lg:mt-24">
        <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {[
            { k: "Currently", v: "Flutter Developer, Busisoft" },
            { k: "Based in", v: <>Mumbai, IN · <LocalTime timeZone={profile.timeZone} label={profile.timeZoneLabel} /></> },
            { k: "Shipping", v: "Text Toolkit on Google Play" },
            { k: "Next", v: "Flutter + AI-powered apps" },
          ].map((item, i) => (
            <div
              key={item.k}
              className={`py-5 pr-4 ${i % 2 === 1 ? "border-l border-line pl-4 lg:pl-6" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dt className="eyebrow">{item.k}</dt>
              <dd className="mt-1.5 text-sm text-fg sm:text-[0.9375rem]">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
