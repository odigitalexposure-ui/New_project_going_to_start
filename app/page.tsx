import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ListingHighlights } from "@/components/sections/listing-highlights";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Premium Homestays",
  description:
    "Discover premium homestays and curated rental properties designed for calm, comfort, and memorable stays.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ListingHighlights />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactCta
        title="Plan a stay that feels beautifully considered"
        description="Tell us your dates, travel style, and priorities. We will match you with a home that feels right the moment you arrive."
        primaryAction={{ href: "/contact", label: "Request availability" }}
        secondaryAction={{ href: "/listings", label: "Browse listings" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteConfig.structuredData),
        }}
      />
    </main>
  );
}
