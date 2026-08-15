import SectionHeading from "./SectionHeading";
import { courseworkUndergrad, courseworkGrad } from "@/lib/data";

function CourseList({ courses }: { courses: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {courses.map((c) => (
        <li
          key={c}
          className="border border-[var(--rule-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--fg-soft)]"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export default function Coursework() {
  return (
    <section id="coursework" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 06B" title="Coursework" note="the syllabus behind the sheets" />

      <div className="space-y-10">
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
            Graduate — relevant coursework
          </p>
          <CourseList courses={courseworkGrad} />
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
            Undergraduate — relevant coursework
          </p>
          <CourseList courses={courseworkUndergrad} />
        </div>
      </div>
    </section>
  );
}