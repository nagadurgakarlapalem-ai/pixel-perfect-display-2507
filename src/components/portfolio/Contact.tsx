import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the message ready to send.");
  };

  const fieldClass =
    "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="Open to internships, hackathon teams and interesting AI problems."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <Reveal>
          <div className="glass-panel h-full p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Get in touch
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              {[
                {
                  Icon: Mail,
                  label: profile.email,
                  href: `mailto:${profile.email}`,
                },
                { Icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { Icon: Github, label: "GitHub", href: profile.github },
              ].map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex min-w-0 items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span
                      aria-hidden
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
              <li className="flex min-w-0 items-center gap-3 text-muted-foreground">
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                >
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="truncate">{profile.location}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="glass-panel grid gap-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  placeholder="Your name"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Subject</span>
              <input
                required
                value={form.subject}
                onChange={(event) =>
                  setForm({ ...form, subject: event.target.value })
                }
                placeholder="What is this about?"
                className={fieldClass}
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                placeholder="Write your message..."
                className={`${fieldClass} resize-y`}
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
