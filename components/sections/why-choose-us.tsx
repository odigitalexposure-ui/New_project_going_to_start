import { whyChooseUs } from "@/lib/content/site";

export function WhyChooseUs() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="surface rounded-[2.2rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="eyebrow">Why choose us</span>
              <h2 className="mt-5 text-4xl text-foreground sm:text-5xl">
                A premium rental brand built on quiet excellence
              </h2>
              <p className="mt-4 max-w-xl">
                We design every stay around trust, clarity, and a polished guest
                experience that feels personal without becoming complicated.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.6rem] border border-line bg-white/70 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand">
                    {item.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
