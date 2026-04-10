type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl text-foreground sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base sm:text-lg">{description}</p>
    </div>
  );
}
