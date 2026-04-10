import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPage } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Stay Homes curates premium rental properties with hospitality-led service, local insight, and refined design standards.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="section-space">
      <PageIntro
        eyebrow="About Stay Homes"
        title={aboutPage.title}
        description={aboutPage.description}
      />

      <section className="shell mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Our story"
            title="Hospitality thinking, brought into every home"
            description="We combine boutique-hotel attentiveness with the freedom of private homes. Every stay is curated for ease, privacy, and a sense of place."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {aboutPage.principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-line bg-white/70 p-6"
              >
                <h3 className="text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-3 text-sm">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="surface grid-glow rounded-[2rem] p-8 sm:p-10">
          <h2 className="text-3xl text-foreground">What guests value most</h2>
          <div className="mt-8 space-y-6">
            {aboutPage.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-line pb-5 last:border-b-0 last:pb-0"
              >
                <p className="text-4xl font-semibold text-brand">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <ContactCta
        title="Looking for a long-stay partner or managed hosting support?"
        description="We help guests, owners, and relocation clients move with confidence through a hospitality-led process."
        primaryAction={{ href: "/contact", label: "Talk to our team" }}
        secondaryAction={{ href: "/listings", label: "View homes" }}
      />
    </main>
  );
}
