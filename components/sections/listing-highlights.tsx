import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { ListingCard } from "@/components/ui/listing-card";
import { listings } from "@/lib/content/site";

export function ListingHighlights() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Signature homes"
            title="A collection shaped by atmosphere, design, and location"
            description="From sea-facing villas to calm city apartments, each listing balances aesthetic warmth with dependable functionality."
          />
          <Link href="/listings" className="button-secondary">
            View all listings
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {listings.slice(0, 3).map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
