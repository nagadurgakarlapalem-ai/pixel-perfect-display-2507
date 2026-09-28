import { useState } from "react";
import { BadgeCheck, ExternalLink, X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { certifications } from "@/data/portfolio";

type Certificate = (typeof certifications)[number];

export function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications & Courses"
        description="Click any certificate to preview its details before opening the credential."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate, index) => (
          <Reveal key={`${certificate.name}-${index}`} delay={index * 60}>
            <article className="glass-panel card-hover flex h-full flex-col p-6">
              <div className="flex min-w-0 items-start gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                >
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold">
                    {certificate.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {certificate.issuer} · {certificate.date}
                  </p>
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {certificate.skills.map((skill, skillIndex) => (
                  <li
                    key={`${skill}-${skillIndex}`}
                    className="rounded-md bg-secondary/70 px-2.5 py-1 text-xs text-foreground/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-muted-foreground">
                Credential ID: {certificate.credentialId}
              </p>

              <button
                type="button"
                onClick={() => setSelected(certificate)}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                View Certificate
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} certificate preview`}
          className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-panel relative w-full max-w-lg p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close certificate preview"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Certificate
            </p>
            <h3 className="mt-3 pr-10 font-display text-xl font-semibold">
              {selected.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {selected.issuer} · {selected.date}
            </p>

            <div className="mt-5 grid gap-3 rounded-xl border border-border bg-secondary/40 p-5 text-sm">
              <p className="text-muted-foreground">
                Credential ID:{" "}
                <span className="text-foreground/90">
                  {selected.credentialId}
                </span>
              </p>
              <p className="text-muted-foreground">
                Skills covered:{" "}
                <span className="text-foreground/90">
                  {selected.skills.join(", ")}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                [CERTIFICATE IMAGE / PDF PREVIEW]
              </p>
            </div>

            <a
              href={selected.link}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Open Credential <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
