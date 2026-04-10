import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { heroStats, listings } from "@/lib/content/site";

export function HeroSection() {
  return (
    <section className="section-space relative">
      <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="eyebrow">
            <Star className="h-3.5 w-3.5" />
            Curated premium homes
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            Boutique hospitality in homes you will want to stay longer in.
          </h1>
          <p className="mt-6 max-w-2xl text-lg">
            Stay Homes curates elegant homestays and rental properties for guests
            who value thoughtful design, local character, and dependable service.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Reserve your stay <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/listings" className="button-secondary">
              Explore homes
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-line bg-white/70 p-5"
              >
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface grid-glow relative overflow-hidden rounded-[2.5rem] p-5 sm:p-7">
          <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative rounded-[2rem] bg-[#133630] p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                  Featured stay
                </p>
                <h2 className="mt-3 text-3xl">The Cedar House</h2>
              </div>
              <div className="rounded-full bg-white/12 px-4 py-2 text-sm">
                From $420/night
              </div>
            </div>
            <div className="mt-6 h-72 rounded-[1.7rem] bg-[linear-gradient(140deg,#e9ddcf_0%,#c48847_35%,#325f58_100%)]" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {listings.slice(0, 2).map((listing) => (
                <div
                  key={listing.slug}
                  className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                    {listing.location}
                  </p>
                  <p className="mt-2 text-xl">{listing.name}</p>
                  <p className="mt-2 text-sm text-white/70">{listing.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
