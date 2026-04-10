import { Compass, KeyRound, ShieldCheck, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Thoughtfully curated homes",
    description:
      "Every property is selected for quality, style, privacy, and the kind of atmosphere that makes a stay feel elevated.",
    icon: Sparkles,
  },
  {
    title: "Reliable guest support",
    description:
      "Fast communication, smooth arrivals, and calm problem-solving are built into the experience from the start.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible stay formats",
    description:
      "Weekend escapes, work-from-anywhere months, and relocation stays all fit naturally into our service model.",
    icon: KeyRound,
  },
  {
    title: "Local insight, not guesswork",
    description:
      "We guide guests toward neighborhoods, experiences, and homes that align with how they want to live while traveling.",
    icon: Compass,
  },
];

export function FeaturesSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Stay better"
          title="Premium standards, designed into every touchpoint"
          description="A refined stay is not just about the property. It is the combination of comfort, curation, trust, and quiet operational detail."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="surface rounded-[1.8rem] p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
