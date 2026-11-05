import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { education } from "@/data/experience";

const facts = [
  { k: "Building with Flutter", v: "~4 years" },
  { k: "Professional role", v: "Since May 2025" },
  { k: "Education", v: `M.Sc. Computer Science, ${education.completed.split(" ")[1]}` },
];

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="shell scroll-mt-20 py-28 sm:py-36">
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

      <div className="mt-16 grid gap-14 sm:mt-20 md:grid-cols-12 md:gap-8">
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

          <div className="mt-12 grid gap-8 text-[1.0625rem] leading-relaxed text-fg-muted sm:grid-cols-2 sm:gap-10">
            <Reveal delay={0.05}>
              <p>
                At <span className="text-fg">Xpresion Next</span> I build and maintain courier management apps: Flutter UI,
                REST API integrations, new features, bug fixes and releases.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Outside work I take my own apps from idea to Google Play. Next, I&rsquo;m growing into{" "}
                <span className="text-fg">AI-powered mobile products</span>.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
