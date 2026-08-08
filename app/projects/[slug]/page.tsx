import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name}  Project sheet` : "Project not found" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--fg-soft)] hover:text-[var(--accent)]"
        >
          <ArrowLeft size={14} /> Back to project sheets
        </Link>

        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--fg-faint)]">
          {project.code} · {project.year}
        </p>
        <h1 className="mt-2 font-display text-4xl italic sm:text-5xl">{project.name}</h1>
        <p className="mt-4 text-lg text-[var(--fg-soft)]">{project.oneLiner}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-[var(--rule-strong)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--fg-soft)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="sheet mt-10 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
            Why it matters
          </p>
          <p className="mt-2 text-[17px] leading-relaxed">{project.impactFirst}</p>
        </div>

        <div className="mt-12 space-y-10">
          {project.sections.map((s, i) => (
            <div key={s.heading} className="border-t border-[var(--rule)] pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 font-display text-2xl italic">{s.heading}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-[var(--fg-soft)]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t-2 border-[var(--accent)] pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
            Outcome
          </p>
          <p className="mt-2 font-hand text-2xl">{project.outcome}</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[var(--rule)] pt-8">
          <Link href={`/projects/${prev.slug}`} className="group">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--fg-faint)]">
              Previous
            </p>
            <p className="font-display italic group-hover:text-[var(--accent)]">{prev.name}</p>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group text-right">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--fg-faint)]">
              Next
            </p>
            <p className="font-display italic group-hover:text-[var(--accent)]">{next.name}</p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
