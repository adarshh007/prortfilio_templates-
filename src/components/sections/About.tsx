import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading title="About" />

        <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <p className="max-w-prose text-lg leading-relaxed text-ink-secondary">
            {profile.bio}
          </p>

          <ul className="flex flex-wrap content-start gap-3 md:flex-col">
            {profile.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-md border border-border bg-surface-card px-4 py-3 text-sm text-ink-secondary"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
