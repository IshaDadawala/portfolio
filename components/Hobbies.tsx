import SectionHeading from "./SectionHeading";
import { hobbies } from "@/lib/data";

export default function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 07" title="Outside Work" note="not a one-line afterthought" />

      <div className="grid gap-5 sm:grid-cols-3">
        {hobbies.map((h, i) => (
          <div key={h.title} className="sheet flex flex-col p-6">
            <span className="font-hand text-3xl text-[var(--accent)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl italic">{h.title}</h3>
            <p className="mt-2 text-sm text-[var(--fg-soft)]">{h.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
