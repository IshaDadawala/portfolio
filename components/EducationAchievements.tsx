import SectionHeading from "./SectionHeading";
import { education, achievements } from "@/lib/data";

export default function EducationAchievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <SectionHeading code="Sheet 05" title="Education" />
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.degree} className="border-t border-[var(--rule)] pt-4 first:border-t-0 first:pt-0">
                <p className="font-display text-lg italic">{e.degree}</p>
                <p className="text-sm text-[var(--fg-soft)]">{e.org}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[var(--fg-faint)]">
                  {e.period}
                </p>
                {e.note && <p className="mt-2 text-sm text-[var(--fg-soft)]">{e.note}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading code="Sheet 06" title="Achievements" />
          <div className="space-y-6">
            {achievements.map((a) => (
              <div key={a.title} className="border-t border-[var(--rule)] pt-4 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-lg italic">{a.title}</p>
                  <span className="whitespace-nowrap font-mono text-[11px] text-[var(--fg-faint)]">
                    {a.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--fg-soft)]">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
