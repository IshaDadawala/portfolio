import SectionHeading from "./SectionHeading";
import { coursesInProgress } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 01" title="About" note="the human side of the parts list" />

      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-[17px] leading-relaxed text-[var(--fg-soft)]">
          <p>
            I care more about why a product should exist than what stack it's
            built on. That instinct shows up everywhere, in how I frame a
            project, in the fact that Comubridge started from an accessibility
            gap and not a tech-stack choice, and in how I spent an undergrad
            degree in IT mostly asking product questions.
          </p>
          <p>
            Right now I'm a graduate student sharpening the engineering side
            on purpose, not because the ideation side needs replacing. I'm
            still the person who'll sketch the user flow before I open the
            editor.
          </p>
          <p>
            Outside of coursework I paint, build things with my hands, and,
            unreasonably, enjoy assembling IKEA furniture. That last one
            isn't a joke entry: an instruction sheet with numbered parts,
            exploded diagrams, and zero ambiguity is one of the best pieces of
            product design most people ignore. It's part of why this site
            looks the way it does.
          </p>
        </div>

        <div className="sheet p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
            Now
          </p>
          <p className="mt-2 text-sm text-[var(--fg-soft)]">
            Currently working through a stack of courses in parallel with my
            MS coursework:
          </p>
          <ul className="mt-4 space-y-2.5">
            {coursesInProgress.map((c) => (
              <li key={c.name} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                <a href={c.href} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
