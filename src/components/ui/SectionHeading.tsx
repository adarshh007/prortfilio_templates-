type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-prose">
      <h2 className="text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
