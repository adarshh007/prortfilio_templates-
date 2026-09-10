import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandMark } from "@/components/ui/BrandMark";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

// A contact form isn't included here — there's no email service wired up
// yet, and the brief is explicit that a form shouldn't be shown as if
// submissions work when they don't. These are direct links instead; a
// form can be added here later once a backend is actually connected.
const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={18} /> },
  { label: "LinkedIn", value: "adarsh-biju", href: profile.linkedin, icon: <BrandMark label="in" size={18} /> },
  { label: "GitHub", value: "adarshh007", href: profile.github, icon: <BrandMark label="gh" size={18} /> },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          title="Let's build something useful."
          description="Reach out directly — happy to talk about roles, freelance work, or just the projects above."
        />

        <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-card px-5 py-4 text-sm transition-colors hover:border-signal/50"
              >
                <span className="text-ink-muted">{link.icon}</span>
                <span>
                  <span className="block text-ink-primary">{link.label}</span>
                  <span className="block text-ink-muted">{link.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
