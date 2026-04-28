"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

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
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    icon: Server,
    label: "Backend",
    accent:
      "from-emerald-500/20 to-teal-500/20 text-emerald-300 ring-emerald-400/30",
    items: ["Node.js", "Express", "REST APIs", "Socket.io"],
  },
  {
    icon: Database,
    label: "Database",
    accent:
      "from-purple-500/20 to-fuchsia-500/20 text-purple-300 ring-purple-400/30",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    icon: Wrench,
    label: "Tools",
    accent: "from-amber-500/20 to-orange-500/20 text-amber-300 ring-amber-400/30",
    items: ["Git", "Docker", "Axios", "Zod", "TanStack Query"],
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div
                className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ring-1 ${g.accent}`}
              >
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{g.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/60 bg-background/60 px-2 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
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
