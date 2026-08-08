import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--fg-faint)]">
          {site.name} — drafted {new Date().getFullYear()}
        </p>
        <p className="font-hand text-lg text-[var(--fg-faint)]">
          built by hand, assembled with intent
        </p>
      </div>
    </footer>
  );
}
