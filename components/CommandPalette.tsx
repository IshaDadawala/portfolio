"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { nav, projects } from "@/lib/data";

interface Entry {
  label: string;
  sub: string;
  href: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const entries: Entry[] = [
    ...nav.map((n) => ({ label: n.label, sub: "Section", href: n.href })),
    ...projects.map((p) => ({ label: p.name, sub: "Project sheet", href: `/projects/${p.slug}` })),
  ];

  const filtered = entries.filter((e) =>
    e.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
  if (e.key === "/") {
    if (open) {
      e.preventDefault();
      setOpen(false);
    } else if (document.activeElement?.tagName !== "INPUT") {
      e.preventDefault();
      setOpen(true);
    }
    } else if (e.key === "Escape" && open) {
      setOpen(false);
    }
  }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      window.location.hash = href;
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-2 border border-[var(--rule-strong)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:border-[var(--accent)] transition-colors"
        aria-label="Open site index"
      >
        Index
        <kbd className="border border-[var(--rule)] px-1 text-[10px]">/</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end pt-24 pr-4 sm:pr-8"
          style={{ background: "rgba(20, 35, 57, 0.55)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Site index"
        >
          <div
            className="sheet w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-[var(--rule)] p-3">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, filtered.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && filtered[active]) {
                    go(filtered[active].href);
                  }
                }}
                placeholder="Jump to a section or project sheet…"
                className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-[var(--fg-faint)]"
                aria-label="Search site index"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto py-1" role="listbox">
              {filtered.length === 0 && (
                <li className="px-4 py-3 text-sm text-[var(--fg-soft)]">No matches.</li>
              )}
              {filtered.map((e, i) => (
                <li key={e.href}>
                  <button
                    onClick={() => go(e.href)}
                    role="option"
                    aria-selected={i === active}
                    onMouseEnter={() => setActive(i)}
                    className="flex w-full items-baseline justify-between px-4 py-2.5 text-left text-sm"
                    style={{
                      background: i === active ? "var(--rule)" : "transparent",
                    }}
                  >
                    <span>{e.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--fg-faint)]">
                      {e.sub}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
