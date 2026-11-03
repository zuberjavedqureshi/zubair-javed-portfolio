import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { education } from "@/data/experience";
import { profile } from "@/data/profile";

const facts = [
  { k: "Building with Flutter", v: "~4 years" },
  { k: "Professional role", v: "Since May 2025" },
  { k: "Apps on Google Play", v: "1 live · 1 in closed testing" },
  { k: "Education", v: `M.Sc. Computer Science, ${education.completed.split(" ")[1]}` },
  { k: "Location", v: profile.location },
];

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="shell scroll-mt-20 py-24 sm:py-32">
      <SectionHeader
        id="about-title"
        index="01"
        label="About"
        title={
          <>
            Product-minded, <em className="text-fg-muted">detail-obsessed,</em> and still learning every week.
          </>
        }
      />

      <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((f) => (
              <div key={f.k} className="py-3.5">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-1 text-[0.9375rem] text-fg">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="md:col-span-9 lg:col-span-8">
          <Reveal>
            <p className="font-display text-[1.85rem] leading-[1.2] tracking-[-0.01em] text-pretty sm:text-[2.35rem]">
              I picked up Flutter about four years ago because I wanted to build things people actually hold in their
              hands. That is still the job: <span className="text-accent italic">useful apps, carefully made, that keep working after launch day.</span>
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 text-[1.0625rem] leading-relaxed text-fg-muted sm:grid-cols-2 sm:gap-10">
            <Reveal delay={0.05}>
              <p>
                At <span className="text-fg">Busisoft</span> I work on courier management applications. I build Flutter UI,
                integrate REST APIs, implement features, fix bugs and take builds through release and maintenance. Most
                of the reliability in a mobile app comes from the unglamorous work: edge cases, regressions and release
                checklists. That&rsquo;s where I spend a lot of my time.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Outside work I build my own products end to end. <span className="text-fg">Text Toolkit</span> is live on
                Google Play with in-app purchases and ads. <span className="text-fg">Save Karlo</span>, a local-first link
                manager, is in closed testing. Owning scope, design, architecture, store listings and updates myself
                taught me to think about the product as well as the ticket.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                I&rsquo;m now moving toward <span className="text-fg">AI-powered applications</span>. Text Toolkit&rsquo;s Prompt
                Builder, a set of 25 guided workflows that compose prompts for AI tools on the device, was my first step.
                I&rsquo;m learning Python and AI tooling to go further. I&rsquo;m honest that this is a direction I&rsquo;m growing
                into, not a past job title.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I finished my Master&rsquo;s in Computer Science at {education.institution} ({education.university}) in{" "}
                {education.completed}. Next, I&rsquo;m looking for a team where I can own meaningful mobile features, learn
                from strong engineers, and help bring AI into products people use every day.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
