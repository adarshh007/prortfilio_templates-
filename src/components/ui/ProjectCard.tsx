import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-lg border p-6 sm:p-8",
        project.featured
          ? "border-signal/40 bg-surface-card"
          : "border-border bg-surface-card"
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">
          {project.category}
        </span>
        {project.status === "in-progress" && (
          <span className="rounded border border-dashed border-border-strong px-2 py-0.5 font-mono text-xs text-ink-muted">
            In progress
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-ink-primary">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-6 flex items-center gap-4">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary" external className="text-xs">
              <BrandMark label="gh" size={14} />
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="ghost" external className="text-xs">
              Live demo
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
