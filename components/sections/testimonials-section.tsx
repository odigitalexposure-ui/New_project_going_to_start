import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/content/site";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Guest stories"
          title="Trusted by guests who care about the details"
          description="Our guests come for comfort and stay for the sense of calm, polish, and reliability built into every booking."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="surface rounded-[1.9rem] p-6 sm:p-7"
            >
              <Quote className="h-8 w-8 text-brand" />
              <p className="mt-5 text-base text-foreground">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 border-t border-line pt-5">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
