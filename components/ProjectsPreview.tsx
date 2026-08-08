import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 03" title="Projects" note="impact first, tech second" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group sheet flex flex-col justify-between p-6 transition-colors hover:border-[var(--accent)]"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
                  {p.code} · {p.year}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--fg-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                />
              </div>
              <h3 className="font-display text-2xl italic">{p.name}</h3>
              <p className="mt-2 text-sm text-[var(--fg-soft)]">{p.oneLiner}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="border border-[var(--rule-strong)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--fg-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
