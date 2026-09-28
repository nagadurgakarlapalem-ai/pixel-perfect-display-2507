import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar-placeholder.jpg";
import { profile, quickFacts } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"
      />

      <div className="section-shell relative pt-32 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open to internships & collaborations
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-5 max-w-xl font-display text-base text-foreground/90 sm:text-lg">
              {profile.title}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: profile.github, Icon: Github, label: "GitHub" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/70 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="glass-panel p-4">
              <img
                src={avatar}
                alt="Profile photo placeholder"
                width={816}
                height={816}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                [PROFILE PHOTO]
              </p>
            </div>

            <ul className="mt-4 grid grid-cols-2 gap-3">
              {quickFacts.map((fact) => (
                <li
                  key={fact.label}
                  className="glass-panel card-hover p-3 text-xs text-muted-foreground"
                >
                  <span aria-hidden className="mr-1 text-sm">
                    {fact.icon}
                  </span>
                  {fact.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
