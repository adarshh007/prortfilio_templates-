import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading title="Education" />

        <div className="mt-10 max-w-prose rounded-lg border border-border bg-surface-card p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-ink-primary">
            {education.degree}
          </h3>
          <p className="mt-2 text-sm text-ink-secondary">{education.institution}</p>
          <p className="mt-1 font-mono text-xs text-ink-muted">{education.period}</p>
        </div>
      </div>
    </section>
  );
}
