"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { SkillIcon } from "./skill-icon";

type Group = {
  id: string;
  icon: LucideIcon;
  label: string;
  blurb: string;
  gradient: string; // chip glow
  ringFrom: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    id: "frontend",
    icon: Code2,
    label: "Frontend",
    blurb: "Crafting fast, accessible, beautifully animated interfaces.",
    gradient: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
    ringFrom: "from-sky-400 to-indigo-400",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "React Query",
      "TanStack Query",
      "Axios",
    ],
  },
  {
    id: "backend",
    icon: Server,
    label: "Backend",
    blurb: "Typed APIs, auth, and validation that scale.",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    ringFrom: "from-emerald-400 to-cyan-400",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Zod",
      "Better Auth",
      "JWT",
      "RAG",
    ],
  },
  {
    id: "database",
    icon: Database,
    label: "Database",
    blurb: "Relational + NoSQL data modelling with Prisma.",
    gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
    ringFrom: "from-violet-400 to-indigo-400",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"],
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools",
    blurb: "Daily-driver tooling for shipping confidently.",
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    ringFrom: "from-amber-400 to-orange-400",
    items: ["Git", "Docker"],
  },
  {
    id: "engineering",
    icon: Brain,
    label: "Engineering",
    blurb: "How I think about problems and trade-offs.",
    gradient: "from-cyan-500/30 via-sky-500/20 to-indigo-500/30",
    ringFrom: "from-cyan-400 to-indigo-400",
    items: ["Problem Solving (JS)", "Critical Thinker"],
  },
];

export function Skills() {
  const [active, setActive] = React.useState<string>(GROUPS[0].id);
  const current = GROUPS.find((g) => g.id === active) ?? GROUPS[0];

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      {/* ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-linear-to-br from-indigo-400/15 via-sky-400/10 to-cyan-400/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
            Toolkit
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            The stack I{" "}
            <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
              build with
            </span>
            .
          </h2>
          <p className="mt-4 text-muted-foreground">
            A focused stack picked for shipping real-world, full-stack products
            quickly and reliably. Hover a category to highlight it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Category rail */}
          <ul
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {GROUPS.map((g) => {
              const isActive = g.id === active;
              return (
                <li key={g.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(g.id)}
                    onFocus={() => setActive(g.id)}
                    onClick={() => setActive(g.id)}
                    className={`group relative w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 text-left backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 dark:bg-white/5 ${
                      isActive
                        ? "shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-400/40"
                        : ""
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 -z-10 bg-linear-to-br opacity-0 transition-opacity duration-300 ${
                        g.gradient
                      } ${isActive ? "opacity-100" : "group-hover:opacity-60"}`}
                    />
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-linear-to-br text-white shadow-md ring-1 ring-white/20 ${g.ringFrom}`}
                      >
                        <g.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold">{g.label}</h3>
                        <p className="hidden text-xs text-muted-foreground sm:block">
                          {g.blurb}
                        </p>
                      </div>
                      <span className="hidden text-[11px] font-mono font-semibold text-foreground/50 lg:inline">
                        {g.items.length.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Active group panel */}
          <div className="lg:col-span-8">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl backdrop-saturate-150 sm:p-9 dark:bg-white/5"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-linear-to-br ${current.gradient} blur-3xl`}
              />

              <div className="flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br text-white shadow-lg ring-1 ring-white/30 ${current.ringFrom}`}
                >
                  <current.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {current.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {current.blurb}
                  </p>
                </div>
              </div>

              <ul className="mt-7 flex flex-wrap gap-2">
                {current.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.9, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: i * 0.025,
                      ease: "easeOut",
                    }}
                    className="group/chip relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/30 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-md hover:shadow-indigo-500/20 dark:bg-white/10"
                  >
                    <SkillIcon name={item} className="h-3.5 w-3.5 shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-7 flex items-center gap-2 border-t border-white/20 pt-5 text-xs text-muted-foreground">
                <span className="font-mono text-[11px] font-semibold text-foreground/60">
                  {String(GROUPS.findIndex((g) => g.id === current.id) + 1).padStart(2, "0")}
                </span>
                <span aria-hidden>/</span>
                <span className="font-mono text-[11px] font-semibold text-foreground/60">
                  {String(GROUPS.length).padStart(2, "0")}
                </span>
                <span className="ml-2">{current.items.length} technologies</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
