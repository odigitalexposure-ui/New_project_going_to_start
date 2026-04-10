import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/sections/page-intro";
import { contactDetails } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Stay Homes for booking help, owner partnerships, and premium stay recommendations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="section-space">
      <PageIntro
        eyebrow="Contact"
        title="Tell us what kind of stay you want"
        description="Whether you are planning a weekend retreat, a month-long relocation, or an owner partnership, we will respond with thoughtful next steps."
      />

      <section className="shell mt-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="surface rounded-[2rem] p-8 sm:p-10">
          <h2 className="text-3xl text-foreground">Speak with us directly</h2>
          <div className="mt-8 space-y-5">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-line bg-white/70 p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  className="mt-2 block text-lg font-semibold text-foreground transition hover:text-brand"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </aside>

        <div className="surface rounded-[2rem] p-8 sm:p-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
