"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    function handle(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", () => setPos(null));
    return () => el.removeEventListener("mousemove", handle);
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden border-b border-[var(--rule)] px-5 py-24 sm:px-8 sm:py-36"
    >
      {pos && (
        <div
          className="pointer-events-none absolute h-40 w-40 rounded-full transition-transform duration-75"
          style={{
            left: pos.x - 80,
            top: pos.y - 80,
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            opacity: 0.12,
          }}
        />
      )}

      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--fg-faint)]"
        >
          Sheet 00 — Cover
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl leading-[1.05] sm:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-[var(--fg-soft)] sm:text-xl"
        >
          {site.role}. I ideate, I design, and I'm building the engineering to
          match — {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="border border-[var(--fg)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            See the project sheets
          </a>
          <a
            href={site.resumeHref}
            className="font-mono text-sm underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Download résumé (PDF)
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 font-hand text-2xl text-[var(--accent)]"
        >
          scroll — or press &lsquo;/&rsquo; for the index →
        </motion.p>
      </div>

      <ArrowDown
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce sm:hidden"
        size={18}
        style={{ color: "var(--fg-faint)" }}
        aria-hidden
      />
    </div>
  );
}
