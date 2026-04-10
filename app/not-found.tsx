import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-space">
      <section className="shell">
        <div className="surface rounded-[2rem] px-6 py-16 text-center sm:px-10">
          <span className="eyebrow">Page not found</span>
          <h1 className="mt-6 text-5xl text-foreground">
            The home you are looking for is not here
          </h1>
          <p className="mx-auto mt-4 max-w-2xl">
            Let&apos;s bring you back to the main collection and help you find the
            right stay.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/" className="button-primary">
              Return home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
