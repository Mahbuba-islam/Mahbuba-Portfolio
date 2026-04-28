"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    title: "Real-Time Full Stack Application",
    tagline: "Featured · Real-time chat, notifications, live sessions, AI",
    description:
      "An end-to-end real-time platform with chat, push notifications, live collaborative sessions, and AI-assisted features. Built with WebSockets and a typed full-stack architecture.",
    features: [
      "Real-time chat (Socket.io)",
      "Live notifications",
      "Collaborative sessions",
      "AI feature integration",
      "Auth + role-based access",
    ],
    stack: ["Next.js", "Node.js", "Socket.io", "Prisma", "PostgreSQL"],
    github: "https://github.com/",
    demo: "#",
    featured: true,
    gradient: "from-indigo-500/40 via-purple-500/30 to-pink-500/30",
  },
  {
    title: "TaskForge — Team Productivity",
    tagline: "Kanban + analytics for small teams",
    description:
      "A modern team task manager with drag-and-drop boards, presence indicators, and lightweight analytics dashboards.",
    features: [
      "Drag-and-drop kanban",
      "Presence avatars",
      "Tag + filter search",
      "Analytics dashboard",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "TanStack Query"],
    github: "https://github.com/",
    demo: "#",
    gradient: "from-sky-500/30 via-cyan-500/20 to-emerald-500/30",
  },
  {
    title: "DevBlog — Markdown CMS",
    tagline: "Headless blog with code highlighting",
    description:
      "A polished blog engine with Markdown content, syntax-highlighted code blocks, and great typography out of the box.",
    features: [
      "Markdown + frontmatter",
      "Prism code highlighting",
      "Reading time + tags",
      "SEO metadata",
    ],
    stack: ["Next.js", "Tailwind", "remark", "rehype"],
    github: "https://github.com/",
    demo: "/blog",
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Selected work I&apos;m proud of.
            </h2>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> All projects
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                p.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br ${p.gradient} blur-3xl opacity-60 transition-opacity group-hover:opacity-90`}
              />

              <div className="flex flex-wrap items-center gap-2">
                {p.featured && (
                  <Badge className="bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/30">
                    <Sparkles className="h-3 w-3" /> Featured
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">
                  {p.tagline}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {p.description}
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Features
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Stack
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border/60 bg-background/60 px-2 py-1 text-xs"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={p.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={p.demo} target="_blank" rel="noreferrer">
                    Live demo <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
