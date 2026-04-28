"use client";

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
  icon: LucideIcon;
  label: string;
  accent: string;
  items: string[];
};

const GROUPS: Group[] = [
  {
    icon: Code2,
    label: "Frontend",
    accent: "from-sky-500/20 to-blue-500/20 text-sky-300 ring-sky-400/30",
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
    icon: Server,
    label: "Backend",
    accent:
      "from-emerald-500/20 to-teal-500/20 text-emerald-300 ring-emerald-400/30",
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
    icon: Database,
    label: "Database",
    accent:
      "from-purple-500/20 to-fuchsia-500/20 text-purple-300 ring-purple-400/30",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"],
  },
  {
    icon: Wrench,
    label: "Tools",
    accent:
      "from-amber-500/20 to-orange-500/20 text-amber-300 ring-amber-400/30",
    items: ["Git", "Docker"],
  },
  {
    icon: Brain,
    label: "Engineering",
    accent: "from-rose-500/20 to-pink-500/20 text-rose-300 ring-rose-400/30",
    items: ["Problem Solving (JS)", "Critical Thinker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            The toolkit I build with.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A focused stack picked for shipping real-world, full-stack products
            quickly and reliably.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-border hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* hover gradient sheen */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 -z-10 bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${g.accent}`}
              />
              <div className="flex items-center gap-3">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br ring-1 ${g.accent}`}
                >
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{g.label}</h3>
              </div>
              <ul className="mt-4 grid gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    <SkillIcon name={item} className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
