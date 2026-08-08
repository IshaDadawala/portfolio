"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--rule)] backdrop-blur-sm" style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="font-display text-lg tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-sm text-[var(--fg-soft)] hover:text-[var(--fg)] transition-colors"
            >
              <span className="font-mono text-[10px] tick">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CommandPalette />
          </div>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-[var(--rule)] px-5 py-3" aria-label="Primary mobile">
          <ul className="flex flex-col gap-3">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="font-mono text-[10px] tick">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
