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
    blurb: "Fast, accessible UI systems with clean animations.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "ShadCN",
    ],
  },
  {
    id: "backend",
    icon: Server,
    label: "Backend",
    blurb: "Scalable APIs with authentication & validation.",
    items: ["Node.js", "Express", "REST", "JWT", "Zod"],
  },
  {
    id: "database",
    icon: Database,
    label: "Database",
    blurb: "Structured data modeling with performance focus.",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Firebase"],
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools",
    blurb: "Daily workflow & deployment tools.",
    items: ["Git", "Docker"],
  },
  
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 py-5 max-w-7xl  mx-auto md:px-3 px-4 lg:px-5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <Header />

        {/* ✅ FIXED GRID (4 columns max on large screens) */}
        <div
          className="
            mt-8
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            auto-rows-fr
          "
        >
          {GROUPS.map((g, i) => (
            <motion.article
              key={g.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="
                group relative flex flex-col
                overflow-hidden rounded-xl
                border border-white/10
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl

                p-5 sm:p-5
                min-h-[210px]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* softer glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
                }}
              />

              {/* HEADER */}
              <div className="flex items-start gap-3">
                <span className="icon-halo h-9 w-9 shrink-0 text-white">
                  <g.icon className="h-4.5 w-4.5" />
                </span>

                <div>
                  <h3 className="text-base font-semibold">{g.label}</h3>
                  <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                    {g.blurb}
                  </p>
                </div>
              </div>

              {/* ITEMS (compact chips) */}
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.slice(0, 8).map((item) => (
                  <li
                    key={item}
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      border border-white/10
                      bg-white/70 dark:bg-white/10
                      px-2.5 py-1
                      text-[10px]
                      font-medium
                    "
                  >
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-white">
                      <SkillIcon name={item} className="h-2.5 w-2.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* FOOTER */}
          
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-gradient">
        Toolkit
      </p>

      <h2 className="mt-2 text-2xl sm:text-2xl lg:text-3xl font-semibold">
        Technologies I use
      </h2>

      <p className="mt-2 text-xs text-muted-foreground">
        A focused stack for building scalable full-stack applications.
      </p>
    </div>
  );
}