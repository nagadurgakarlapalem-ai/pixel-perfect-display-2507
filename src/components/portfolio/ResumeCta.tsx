import { Download, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function ResumeCta() {
  return (
    <section className="section-shell">
      <Reveal>
        <div className="glass-panel grid gap-6 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want to know more about my journey?
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            My resume covers the full picture — education, projects, hackathons
            and certifications in one page.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              <FileText className="h-4 w-4" /> View Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
