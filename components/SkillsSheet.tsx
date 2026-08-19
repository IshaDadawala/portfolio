import SectionHeading from "./SectionHeading";
import { skillCategories, type Proficiency } from "@/lib/data";

const statusLabel: Record<Proficiency, string> = {
  core: "CORE",
  production: "IN PRODUCTION",
  learning: "LEARNING",
  completed: "COMPLETED",
};

const statusColor: Record<Proficiency, string> = {
  core: "var(--fg)",
  production: "var(--accent)",
  learning: "var(--fg-faint)",
  completed: "var(--fg-soft)",
};

export default function SkillsSheet() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 02" title="Skills" note="parts list, not a tag cloud" />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.code} className="sheet p-6">
            <div className="mb-4 flex items-baseline justify-between border-b border-[var(--rule)] pb-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
                  {cat.code}
                </p>
                <h3 className="font-display text-xl italic">{cat.title}</h3>
              </div>
            </div>
            <p className="mb-4 text-sm text-[var(--fg-soft)]">{cat.description}</p>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li
                  key={item.part}
                  className="flex items-center justify-between gap-3 border-t border-dashed border-[var(--rule)] pt-3 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[var(--fg-faint)]">
                      {item.part}
                    </span>
                    <span className="text-[15px]">{item.name}</span>
                  </div>
                  <span
                    className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: statusColor[item.status] }}
                  >
                    {statusLabel[item.status]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}