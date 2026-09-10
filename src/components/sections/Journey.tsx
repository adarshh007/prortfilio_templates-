import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyStages } from "@/data/journey";
import { cn } from "@/lib/cn";

export function Journey() {
  return (
    <section id="journey" className="border-t border-border py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          title="Learning Journey"
          description="How the web development work and the data science study connect."
        />

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStages.map((stage, index) => (
            <li key={stage.id} className="relative pl-6 sm:pl-0">
              <div className="flex items-center gap-3 sm:block">
                <span
                  className={cn(
                    "h-2.5 w-2.5 shrink-0 rounded-full sm:mb-4",
                    stage.status === "complete" ? "bg-signal" : "border-2 border-signal bg-transparent"
                  )}
                  aria-hidden
                />
                {index < journeyStages.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-border sm:absolute sm:top-[5px] sm:left-[calc(50%+1.25rem)] sm:right-[calc(-50%+1.25rem)] sm:block"
                    aria-hidden
                  />
                )}
              </div>

              <h3 className="font-display text-lg font-semibold text-ink-primary">
                {stage.title}
              </h3>
              {stage.period && (
                <p className="mt-1 font-mono text-xs text-ink-muted">{stage.period}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
