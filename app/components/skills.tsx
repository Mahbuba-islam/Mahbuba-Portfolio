"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SkillIcon } from "./skill-icon";

type Group = {
  id: string;
  icon: LucideIcon;
  label: string;
  blurb: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    id: "frontend",
    icon: Code2,
    label: "Frontend",
    blurb: "Crafting fast, accessible, beautifully animated interfaces.",
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
    items: ["Node.js", "Express.js", "REST APIs", "Zod", "Better Auth", "JWT", "RAG"],
  },
  {
    id: "database",
    icon: Database,
    label: "Database",
    blurb: "Relational + NoSQL data modelling with Prisma.",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"],
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools",
    blurb: "Daily-driver tooling for shipping confidently.",
    items: ["Git", "Docker"],
  },
  {
    id: "engineering",
    icon: Brain,
    label: "Engineering",
    blurb: "How I think about problems and trade-offs.",
    items: ["Problem Solving (JS)", "Critical Thinker"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Toolkit"
      className="relative scroll-mt-24 py-12 sm:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 25%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-purple) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Header />

        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <motion.article
              key={g.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/60 p-7 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-15px_rgba(59,130,246,0.45)] dark:border-white/10 dark:bg-white/5"
            >
              {/* gradient corner blob */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan), var(--brand-aqua))",
                }}
              />
              {/* top hairline gradient */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-brand-gradient opacity-70"
              />

              <div className="flex items-start gap-4">
                <span className="icon-halo h-12 w-12 shrink-0 text-white">
                  <g.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-brand-gradient">
                      {g.label}
                    </h3>
                    <span className="font-mono text-[6px] font-semibold uppercase tracking-widest text-foreground/40">
                      {String(i + 1).padStart(2, "0")}/
                      {String(GROUPS.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {g.blurb}
                  </p>
                  <span aria-hidden className="mt-2 block h-px w-12 bg-brand-gradient opacity-70" />
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand-blue)] hover:shadow-md hover:shadow-[rgba(59,130,246,0.35)] dark:border-white/15 dark:bg-white/10"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white ring-1 ring-black/5 shadow-sm dark:bg-white/95">
                      <SkillIcon name={item} className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/20 pt-5 text-xs text-muted-foreground dark:border-white/10">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  {g.items.length} technologies
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/50">
                  {g.id}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-gradient">
        Toolkit
      </p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        The stack I <span className="text-brand-gradient">build with</span>.
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground text-sm">
        A focused stack picked for shipping real-world, full-stack products
        quickly and reliably.
      </p>
    </motion.div>
  );
}
