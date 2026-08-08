export default function SectionHeading({
  code,
  title,
  note,
}: {
  code: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-[var(--rule-strong)] pb-3">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
          {code}
        </p>
        <h2 className="font-display text-3xl italic sm:text-4xl">{title}</h2>
      </div>
      {note && (
        <p className="hidden font-hand text-xl text-[var(--accent)] sm:block">
          {note}
        </p>
      )}
    </div>
  );
}
