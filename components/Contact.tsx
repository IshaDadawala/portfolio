import SectionHeading from "./SectionHeading";
import { site } from "@/lib/data";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", value: "View profile", href: site.linkedin, Icon: ArrowUpRight },
  { label: "GitHub", value: "View profile", href: site.github, Icon: ArrowUpRight },
  { label: "Résumé", value: "Download PDF", href: site.resumeHref, Icon: FileDown },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading code="Sheet 08" title="Contact" note="low friction, on purpose" />

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-between border border-[var(--rule-strong)] p-5 transition-colors hover:border-[var(--accent)]"
          >
            <div className="flex items-center gap-4">
              <Icon size={20} style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
                  {label}
                </p>
                <p className="font-display text-lg italic">{value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
