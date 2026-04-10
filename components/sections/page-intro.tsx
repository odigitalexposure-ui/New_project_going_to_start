type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="shell">
      <div className="surface rounded-[2.2rem] px-6 py-10 sm:px-10 sm:py-14">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl text-5xl text-foreground sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg">{description}</p>
      </div>
    </section>
  );
}
