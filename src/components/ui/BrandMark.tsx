import { cn } from "@/lib/cn";

type BrandMarkProps = {
  label: "gh" | "in";
  size?: number;
  className?: string;
};

// lucide-react no longer ships brand/logo glyphs, and reproducing a
// trademarked logo isn't appropriate here anyway. A small monospace
// monogram keeps the same visual weight as the lucide icons around it
// while staying consistent with the site's data/code type language.
export function BrandMark({ label, size = 18, className }: BrandMarkProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded border border-current font-mono leading-none",
        className
      )}
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      {label}
    </span>
  );
}
