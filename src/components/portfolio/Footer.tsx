import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {profile.tagline}
          </p>
        </div>
        <div className="flex items-start gap-3">
          {[
            { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: profile.github, Icon: Github, label: "GitHub" },
            { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-6 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with passion for technology.</p>
      </div>
    </footer>
  );
}
