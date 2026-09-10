import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { BrandMark } from "@/components/ui/BrandMark";

const socialLinks: Array<{
  label: string;
  href: string;
  icon: (props: { size?: number }) => React.ReactElement;
}> = [
  { label: "GitHub", href: profile.github, icon: ({ size }) => <BrandMark label="gh" size={size} /> },
  { label: "LinkedIn", href: profile.linkedin, icon: ({ size }) => <BrandMark label="in" size={size} /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: ({ size }) => <Mail size={size} /> },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-ink-muted transition-colors hover:text-ink-primary"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
