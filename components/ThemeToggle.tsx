"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isBlueprint, setIsBlueprint] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setIsBlueprint(current === "blueprint");
  }, []);

  function toggle() {
    const next = !isBlueprint;
    setIsBlueprint(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "blueprint");
      localStorage.setItem("theme", "blueprint");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "paper");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={isBlueprint}
      className="group flex items-center gap-2 border border-[var(--rule-strong)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:border-[var(--accent)] transition-colors"
    >
      <span
        className="inline-block h-2 w-2 rounded-full transition-colors"
        style={{ background: isBlueprint ? "var(--accent)" : "var(--fg-faint)" }}
      />
      {isBlueprint ? "Blueprint" : "Paper"}
    </button>
  );
}
