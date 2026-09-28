import { Reveal, SectionHeading } from "./Reveal";
import { aboutParagraphs, quickFacts } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description="A short introduction to who I am, what I study, and what I like to build."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 80}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="glass-panel p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Quick Facts
            </h3>
            <ul className="mt-5 space-y-4">
              {quickFacts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-start gap-3 text-sm text-foreground/90"
                >
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary"
                  >
                    {fact.icon}
                  </span>
                  <span className="min-w-0 pt-1.5">{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
