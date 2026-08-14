"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    // Skip on touch devices there's no real cursor to glow around.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function handle(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    function handleLeave() {
      setPos(null);
    }

    window.addEventListener("mousemove", handle);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handle);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [reduceMotion]);

  if (!pos) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 h-40 w-40 rounded-full transition-transform duration-75"
      style={{
        left: pos.x - 80,
        top: pos.y - 80,
        background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        opacity: 0.12,
      }}
      aria-hidden
    />
  );
}