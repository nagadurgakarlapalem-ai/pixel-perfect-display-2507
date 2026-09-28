import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="Languages, frameworks and tools I work with across AI, data and development."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 70}>
            <article className="glass-panel card-hover h-full p-6">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-base"
                >
                  {group.icon}
                </span>
                <h3 className="truncate font-display text-base font-semibold">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
