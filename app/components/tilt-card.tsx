"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const MAX_TILT_DEG = 6;

export function TiltCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const reduced = React.useRef<boolean>(false);

  React.useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = m.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reduced.current = e.matches;
    };
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduced.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 2 * MAX_TILT_DEG;
    const rotX = -(y - 0.5) * 2 * MAX_TILT_DEG;

    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--tilt-x", `${rotX.toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${rotY.toFixed(2)}deg`);
      el.style.setProperty("--tilt-mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--tilt-my", `${(y * 100).toFixed(1)}%`);
    });
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }

  React.useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        "tilt-card relative [transform:perspective(1000px)_rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] [transition:transform_200ms_ease-out] will-change-transform",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--tilt-mx,50%) var(--tilt-my,50%), rgba(99,102,241,0.18), transparent 60%)",
        }}
      />
      {children}
    </Component>
  );
}
