import { cn } from "@/lib/cn";

type SkillBadgeProps = {
  label: string;
  variant?: "default" | "learning";
};

export function SkillBadge({ label, variant = "default" }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3 py-1.5 text-sm text-ink-secondary",
        variant === "default" && "border-border bg-surface-card",
        variant === "learning" && "border-dashed border-border-strong bg-transparent text-ink-muted"
      )}
    >
      {label}
    </span>
  );
}
