import Link from "next/link";

type Action = {
  href: string;
  label: string;
};

type ContactCtaProps = {
  title: string;
  description: string;
  primaryAction: Action;
  secondaryAction: Action;
};

export function ContactCta({
  title,
  description,
  primaryAction,
  secondaryAction,
}: ContactCtaProps) {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="overflow-hidden rounded-[2.4rem] bg-brand px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/80">
                Next steps
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base text-white/80">{description}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link href={primaryAction.href} className="button-secondary border-white/20 bg-white text-brand hover:border-white hover:bg-white/90">
                {primaryAction.label}
              </Link>
              <Link href={secondaryAction.href} className="button-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
                {secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
