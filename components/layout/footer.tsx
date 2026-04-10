import Link from "next/link";

import { footerLinks, siteConfig } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">Stay Homes</span>
          <h2 className="mt-5 text-3xl text-foreground">
            Curated rentals with hotel-level confidence.
          </h2>
          <p className="mt-4 max-w-xl">
            Designed for guests who want privacy, comfort, and a thoughtful sense
            of place without compromising on service.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground transition hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-foreground">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shell mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Stay Homes. All rights reserved.</p>
        <p>Premium homestays, city apartments, and managed rental experiences.</p>
      </div>
    </footer>
  );
}
