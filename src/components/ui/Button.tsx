import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-signal text-surface-primary hover:bg-signal/90 border border-signal",
  secondary:
    "bg-transparent text-ink-primary border border-border-strong hover:border-signal/60 hover:text-signal",
  ghost:
    "bg-transparent text-ink-secondary hover:text-ink-primary border border-transparent",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium font-body transition-colors duration-200";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children } = props;
  const styles = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _variant, className: _className, children: _children, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
