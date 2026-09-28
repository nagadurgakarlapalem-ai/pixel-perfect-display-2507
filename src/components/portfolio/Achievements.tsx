import { Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { achievements, highlights } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Achievements"
        title="Hackathon Wins & Recognition"
        description="2+ hackathon wins so far. Each card has room for the event, organizer, result and proof."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {achievements.map((item, index) => (
          <Reveal key={`${item.event}-${index}`} delay={index * 80}>
            <article className="glass-panel card-hover h-full p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"
                  >
                    <Trophy className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/85">
                      {item.event}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.organizer}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-secondary px-3 py-1 text-xs text-foreground/90">
                  {item.position}
                </span>
                <a
                  href={item.certificate}
                  className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 glass-panel grid gap-6 p-8 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((stat) => (
            <div key={stat.label} className="min-w-0 text-center">
              <p className="font-display text-3xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
