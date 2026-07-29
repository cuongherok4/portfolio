type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-ember">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-ink/70">{description}</p> : null}
    </div>
  );
}
