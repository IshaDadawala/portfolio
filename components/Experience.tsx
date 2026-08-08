import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 04" title="Experience" />

      <div className="space-y-8">
        {experience.map((e) => (
          <div
            key={e.org}
            className="grid gap-2 border-l-2 border-[var(--accent)] pl-6 sm:grid-cols-[1fr_2fr] sm:gap-8"
          >
            <div>
              <p className="font-display text-xl italic">{e.role}</p>
              <p className="text-sm text-[var(--fg-soft)]">{e.org}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[var(--fg-faint)]">
                {e.period}
              </p>
            </div>
            <ul className="space-y-2 text-[15px] text-[var(--fg-soft)]">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span style={{ color: "var(--accent)" }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
