import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--fg-faint)]">
        Sheet missing
      </p>
      <h1 className="mt-3 font-display text-4xl italic">This page isn&apos;t in the parts list.</h1>
      <p className="mt-3 font-hand text-xl text-[var(--accent)]">
        must have fallen out of the box
      </p>
      <Link
        href="/"
        className="mt-8 border border-[var(--fg)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--fg)] hover:text-[var(--bg)]"
      >
        Back to the cover sheet
      </Link>
    </main>
  );
}
