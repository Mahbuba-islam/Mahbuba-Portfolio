"use client";

import * as React from "react";

/**
 * BurstEffect — glassy pulse + ring + particle burst overlay.
 *
 * Render once next to a clickable element (or as its overlay) and call
 * `triggerBurst()` from the click handler. Uses brand-blue palette utilities
 * defined in globals.css (`.glass-pulse`, `.glass-ring`, `.glass-particle`).
 *
 * The wrapper is `pointer-events-none` and absolutely fills its parent, so
 * the parent must be `position: relative`.
 */
export type BurstHandle = {
  trigger: () => void;
};

type BurstNode = {
  id: number;
  kind: "pulse" | "ring";
};

type Particle = {
  id: number;
  px: number;
  py: number;
  delay: number;
};

const PARTICLE_COUNT = 10;

export const BurstEffect = React.forwardRef<BurstHandle, { className?: string }>(
  function BurstEffect({ className }, ref) {
    const [bursts, setBursts] = React.useState<BurstNode[]>([]);
    const [particles, setParticles] = React.useState<Particle[]>([]);

    const trigger = React.useCallback(() => {
      const id = Date.now() + Math.random();
      setBursts((b) => [
        ...b,
        { id, kind: "pulse" },
        { id: id + 0.1, kind: "ring" },
      ]);
      const ps: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + Math.random() * 0.4;
        const dist = 28 + Math.random() * 22;
        return {
          id: id + i * 0.01,
          px: Math.cos(angle) * dist,
          py: Math.sin(angle) * dist,
          delay: Math.random() * 60,
        };
      });
      setParticles((p) => [...p, ...ps]);

      window.setTimeout(() => {
        setBursts((b) => b.filter((x) => x.id !== id && x.id !== id + 0.1));
      }, 850);
      window.setTimeout(() => {
        const ids = new Set(ps.map((p) => p.id));
        setParticles((all) => all.filter((p) => !ids.has(p.id)));
      }, 800);
    }, []);

    React.useImperativeHandle(ref, () => ({ trigger }), [trigger]);

    return (
      <span
        aria-hidden
        className={
          "pointer-events-none absolute inset-0 overflow-visible " +
          (className ?? "")
        }
      >
        {bursts.map((b) =>
          b.kind === "pulse" ? (
            <span key={b.id} className="glass-pulse" />
          ) : (
            <span key={b.id} className="glass-ring" />
          ),
        )}
        {particles.map((p) => (
          <span
            key={p.id}
            className="glass-particle"
            style={
              {
                ["--px" as string]: `${p.px}px`,
                ["--py" as string]: `${p.py}px`,
                animationDelay: `${p.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </span>
    );
  },
);
