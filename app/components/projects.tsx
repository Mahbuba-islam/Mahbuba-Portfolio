"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Layers,
  MessageSquare,
  Sparkles,
  Workflow,
  Zap,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "./brand-icons";

type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
  icon: LucideIcon;
  badge?: { label: string; icon: LucideIcon };
};

const PROJECTS: Project[] = [
  {
    title: "Consultdge",
    tagline: "Chat, notifications, live sessions, AI",
    description:
      "It’s a full-stack consultation platform where users can connect with experts, book sessions, communicate in real time, and complete the entire consultation workflow — including chat, video calls, AI features, and payments — inside a single system.",
    features: [
      "Real-time chat (Socket.io)",
      "Live notifications",
      "Collaborative sessions",
      "AI feature integration",
    ],
    stack: ["Next.js", "Node.js", "Socket.io", "Prisma", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://consultedge-frontend.vercel.app",
    featured: true,
    icon: Zap,
    badge: { label: "Featured", icon: Sparkles },
  },
  {
    title: "TaskForge",
    tagline: "Kanban + analytics for small teams",
    description:
      "Modern team task manager with drag-and-drop boards, presence indicators, and lightweight analytics dashboards.",
    features: [
      "Drag-and-drop kanban",
      "Presence avatars",
      "Tag + filter search",
      "Analytics dashboard",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "TanStack Query"],
    github: "https://github.com/",
    demo: "#",
    icon: Workflow,
    badge: { label: "Productivity", icon: Workflow },
  },
  {
    title: "DevBlog",
    tagline: "Headless blog with code highlighting",
    description:
      "Polished blog engine with Markdown, syntax-highlighted code blocks, and great typography out of the box.",
    features: [
      "Markdown + frontmatter",
      "Prism code highlighting",
      "Reading time + tags",
      "SEO metadata",
    ],
    stack: ["Next.js", "Tailwind", "remark", "rehype"],
    github: "https://github.com/",
    demo: "/blog",
    icon: Layers,
    badge: { label: "Open Source", icon: Layers },
  },
  {
    title: "RAG Knowledge Assistant",
    tagline: "Retrieval-augmented chatbot over your docs",
    description:
      "RAG-powered assistant that answers questions from a private knowledge base — chunked, embedded, retrieved with citations.",
    features: [
      "Document ingestion + chunking",
      "Vector embeddings",
      "Streamed answers + citations",
      "JWT-protected admin upload",
    ],
    stack: ["Next.js", "Node.js", "Postgres", "Better Auth", "Zod"],
    github: "https://github.com/",
    demo: "#",
    icon: Bot,
    badge: { label: "AI Project", icon: Bot },
  },
  {
    title: "AuthGuard",
    tagline: "Drop-in auth starter with social + magic link",
    description:
      "Production-ready authentication starter with email magic links, OAuth, role-based access, and a typed admin panel.",
    features: [
      "Magic link + OAuth",
      "Role-based access",
      "Audit logs",
      "Typed admin panel",
    ],
    stack: ["Next.js", "Better Auth", "Prisma", "PostgreSQL"],
    github: "https://github.com/",
    demo: "#",
    icon: Shield,
    badge: { label: "Security", icon: Shield },
  },
  {
    title: "MessageStream",
    tagline: "Multi-channel inbox & live notifications",
    description:
      "Unified inbox aggregating chat, email, and webhook events into a single live, searchable, real-time stream.",
    features: [
      "Unified inbox",
      "Webhook ingest",
      "Realtime search",
      "Slack-style threads",
    ],
    stack: ["Next.js", "Socket.io", "Prisma", "Postgres"],
    github: "https://github.com/",
    demo: "#",
    icon: MessageSquare,
    badge: { label: "Realtime", icon: MessageSquare },
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-12 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-purple) 25%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gradient">
            Projects
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected <span className="text-brand-gradient">work</span>.
          </h2>
          <p className="max-w-2xl text-muted-foreground text-sm">
            A collection of full-stack, real-time, and AI-powered products
            shipped end-to-end — design, data model, API, and UI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const BadgeIcon = project.badge?.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/65 p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-blue)]/40 hover:shadow-[0_20px_55px_-18px_rgba(59,130,246,0.45)] dark:border-white/10 dark:bg-white/[0.04]"
    >
      {/* corner gradient blob */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
        }}
      />
      {/* hairline gradient top accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-brand-gradient opacity-80"
      />

      <header className="flex items-start justify-between gap-3">
        <span className="icon-halo h-11 w-11 shrink-0 text-white">
          <Icon className="h-5 w-5" />
        </span>

        {project.badge && BadgeIcon && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/80 backdrop-blur dark:border-white/15 dark:bg-white/10">
            <BadgeIcon className="h-3 w-3" />
            {project.badge.label}
          </span>
        )}
      </header>

      <h3 className="mt-5 text-xl font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-gradient">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--brand-cyan)" }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-white/30 bg-white/50 px-2 py-0.5 text-[10px] font-medium text-foreground/80 backdrop-blur dark:border-white/15 dark:bg-white/10"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-2 border-t border-white/20 pt-5 dark:border-white/10">
        <Link
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          Code
        </Link>
        <Link
          href={project.demo}
          target={project.demo.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25 ring-1 ring-white/30 transition-transform hover:scale-[1.04]"
        >
          View
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
