import Link from "next/link";

import { navigation } from "@/lib/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-sm font-semibold tracking-[0.2em] text-white">
              SH
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                Premium stays
              </p>
              <p className="text-lg font-semibold text-foreground">Stay Homes</p>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="button-primary">
            Book a consultation
          </Link>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mt-4 flex items-center gap-3 overflow-x-auto pb-1 md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
