import { Briefcase, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Experience & Roles"
        description="Internships, technical roles, hackathon teams and leadership positions."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((item, index) => (
          <Reveal key={`${item.role}-${index}`} delay={index * 80}>
            <article className="glass-panel card-hover h-full p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                  >
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.organization}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {item.duration}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {item.responsibilities.map((task, taskIndex) => (
                  <li
                    key={`${task}-${taskIndex}`}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span className="min-w-0">{task}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex items-start gap-2 rounded-xl border border-border bg-secondary/40 p-4 text-sm text-foreground/90">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0">{item.achievement}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
