import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Education Timeline"
        description="Academic background, with placeholders for institution details and scores."
      />

      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {education.map((item, index) => (
          <li key={`${item.degree}-${index}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+0.4375rem)] top-6 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-primary sm:-left-[calc(2rem+0.4375rem)]"
            />
            <Reveal delay={index * 90}>
              <article className="glass-panel card-hover p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      aria-hidden
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                    >
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/80">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {item.duration}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-lg bg-secondary px-3 py-1 text-foreground/90">
                    {item.score}
                  </span>
                </div>

                {item.coursework ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.coursework}
                  </p>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
