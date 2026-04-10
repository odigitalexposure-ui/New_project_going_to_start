import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ListingItem } from "@/lib/content/site";

type ListingCardProps = {
  listing: ListingItem;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="surface overflow-hidden rounded-[1.9rem]">
      <div
        className="h-64 w-full"
        style={{
          background: listing.gradient,
        }}
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand">
              {listing.location}
            </p>
            <h3 className="mt-3 text-3xl text-foreground">{listing.name}</h3>
          </div>
          <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-strong">
            {listing.price}
          </span>
        </div>
        <p className="mt-4 text-sm">{listing.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {listing.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-strong"
        >
          Inquire about this stay <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
