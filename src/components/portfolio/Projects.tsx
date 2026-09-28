import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import projectImage from "@/assets/project-placeholder.jpg";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/portfolio";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Projects"
        description="Each card holds placeholders for the project name, the problem it solves, the stack and its links."
      />

      <Reveal>
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                filter === category
                  ? "border-transparent bg-gradient-primary text-primary-foreground"
                  : "border-border bg-surface/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={`${project.name}-${index}`} delay={index * 70}>
            <article className="glass-panel card-hover flex h-full flex-col overflow-hidden">
              <img
                src={projectImage}
                alt={`${project.name} preview placeholder`}
                loading="lazy"
                width={1024}
                height={640}
                className="h-44 w-full object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-border px-3 py-1 text-[0.7rem] uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  <span className="font-semibold text-primary">Problem: </span>
                  {project.problem}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
