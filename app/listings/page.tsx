import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/sections/page-intro";
import { ListingCard } from "@/components/ui/listing-card";
import { amenities, listingPage, listings } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Listings",
  description:
    "Explore Stay Homes properties, from serene villas to design-led city apartments, each curated for premium comfort and trusted stays.",
  alternates: {
    canonical: "/listings",
  },
};

export default function ListingsPage() {
  return (
    <main className="section-space">
      <PageIntro
        eyebrow="Listings"
        title={listingPage.title}
        description={listingPage.description}
      />

      <section className="shell mt-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>

      <section className="shell mt-12">
        <div className="surface rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Every stay includes</span>
              <h2 className="mt-5 text-4xl text-foreground">
                Service standards that make the difference
              </h2>
              <p className="mt-4 max-w-xl">
                Every Stay Homes property follows the same hospitality framework,
                from arrival touchpoints to housekeeping quality and local support.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="rounded-[1.4rem] border border-line bg-white/70 px-5 py-4 text-sm font-medium text-foreground"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Need a tailored recommendation?"
        description="Share your destination, length of stay, and ideal pace. We will send a handpicked shortlist that fits."
        primaryAction={{ href: "/contact", label: "Get personalized options" }}
        secondaryAction={{ href: "/", label: "Return home" }}
      />
    </main>
  );
}
