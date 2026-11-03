import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { LocalTime } from "@/components/LocalTime";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

function ContactRow({
  href,
  icon,
  label,
  value,
  external = true,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-5 border-b border-line py-6 transition-colors hover:border-line-strong"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-fg transition-[background-color,color,border-color] duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="eyebrow block">{label}</span>
        <span className="mt-1 block truncate text-lg text-fg sm:text-xl">{value}</span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-fg-subtle transition-transform duration-500 ease-(--ease-out-expo) group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg"
        aria-hidden="true"
      />
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-line py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,var(--accent-soft),transparent)]"
      />
      <div className="shell">
        <p className="eyebrow">
          <span className="text-accent">05</span>
          <span className="mx-2 text-fg-subtle/60">/</span>Contact
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2
              id="contact-title"
              className="font-display text-[3.2rem] leading-[0.95] tracking-[-0.03em] text-balance sm:text-7xl lg:text-[6.2rem]"
            >
              Let&rsquo;s build something people <em className="text-accent">keep</em> on their home screen.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-fg-muted">
              I&rsquo;m open to Flutter Developer, Senior Flutter Developer, Mobile Application Developer and Flutter + AI
              roles. The quickest way to reach me is a message on LinkedIn.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="border-t border-line">
              {profile.email ? (
                <ContactRow
                  href={`mailto:${profile.email}`}
                  icon={<Mail className="size-5" aria-hidden="true" />}
                  label="Email"
                  value={profile.email}
                  external={false}
                />
              ) : null}
              <ContactRow
                href={profile.links.linkedin}
                icon={<LinkedInIcon className="size-[1.1rem]" />}
                label="LinkedIn · preferred"
                value="Message me on LinkedIn"
              />
              <ContactRow
                href={profile.links.github}
                icon={<GitHubIcon className="size-5" />}
                label="GitHub"
                value={`@${profile.links.githubHandle}`}
              />
              <div className="flex items-center gap-5 py-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-fg">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="eyebrow block">Location</span>
                  <span className="mt-1 block text-lg text-fg sm:text-xl">
                    {profile.location} ·{" "}
                    <span className="text-fg-muted">
                      <LocalTime timeZone={profile.timeZone} label={profile.timeZoneLabel} />
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
