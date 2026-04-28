"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Layers,
  MessageSquare,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "./brand-icons";
import { TiltCard } from "./tilt-card";
import { cn } from "@/lib/utils";

type IconLike = React.ComponentType<{ className?: string }>;

type ProjectBadge = {
  label: string;
  icon: LucideIcon;
  /** Tailwind color classes for the chip. */
  className: string;
};

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
  badges: ProjectBadge[];
};

const PROJECTS: Project[] = [
  {
    title: "Real-Time Full Stack Application",
    tagline: "Real-time chat, notifications, live sessions, AI",
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
    demo: "https://consultedge-frontend.vercel.app",
    featured: true,
    gradient: "from-indigo-500/40 via-violet-500/30 to-sky-500/30",
    badges: [
      {
        label: "Featured",
        icon: Sparkles,
        className:
          "bg-linear-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 text-white ring-1 ring-inset ring-indigo-400/40 dark:text-blue-800",
      },
      {
        label: "AI Project",
        icon: Bot,
        className:
          "bg-violet-500/15 text-violet-700 ring-1 ring-inset ring-violet-400/40 dark:text-violet-200",
      },
    ],
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
    badges: [
      {
        label: "Productivity",
        icon: Workflow,
        className:
          "bg-emerald-500/15 text-emerald-700 ring-1 ring-inset ring-emerald-400/40 dark:text-emerald-200",
      },
    ],
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
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    badges: [
      {
        label: "Open Source",
        icon: Layers,
        className:
          "bg-amber-500/15 text-amber-700 ring-1 ring-inset ring-amber-400/40 dark:text-amber-200",
      },
    ],
  },
  {
    title: "RAG Knowledge Assistant",
    tagline: "Retrieval-augmented chatbot over your docs",
    description:
      "A RAG-powered assistant that answers questions from a private knowledge base — chunked, embedded, and retrieved with citations.",
    features: [
      "Document ingestion + chunking",
      "Vector embeddings + similarity search",
      "Streamed answers with citations",
      "JWT-protected admin upload",
    ],
    stack: ["Next.js", "Node.js", "Postgres", "Better Auth", "Zod"],
    github: "https://github.com/",
    demo: "#",
    gradient: "from-cyan-500/30 via-violet-500/20 to-indigo-500/30",
    badges: [
      {
        label: "AI Project",
        icon: Bot,
        className:
          "bg-violet-500/15 text-violet-700 ring-1 ring-inset ring-violet-400/40 dark:text-violet-200",
      },
      {
        label: "RAG",
        icon: MessageSquare,
        className:
          "bg-cyan-500/15 text-cyan-700 ring-1 ring-inset ring-cyan-400/40 dark:text-cyan-200",
      },
    ],
  },
];

/** Glass button with ripple-on-click + animated trailing icon. */
function GlassButton({
  href,
  external,
  variant = "outline",
  icon: Icon,
  iconPosition = "left",
  iconAnimation = "translate",
  children,
}: {
  href: string;
  external?: boolean;
  variant?: "outline" | "primary";
  icon: IconLike;
  iconPosition?: "left" | "right";
  iconAnimation?: "translate" | "rotate";
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const a = ref.current;
    if (!a) return;
    const rect = a.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    a.appendChild(span);
    window.setTimeout(() => span.remove(), 650);
  }

  const base =
    "group/btn relative inline-flex h-9 items-center gap-1.5 overflow-hidden rounded-md px-3.5 text-sm font-medium transition-all";
  const styles =
    variant === "primary"
      ? "bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/20 hover:scale-[1.03] hover:shadow-indigo-500/40"
      : "border border-white/20 bg-white/10 text-foreground/90 backdrop-blur-xl hover:scale-[1.03] hover:border-indigo-400/50 hover:bg-white/20 dark:bg-white/5";

  const iconCls = cn(
    "h-4 w-4 transition-transform duration-300",
    iconAnimation === "translate" &&
      iconPosition === "right" &&
      "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5",
    iconAnimation === "translate" &&
      iconPosition === "left" &&
      "group-hover/btn:-translate-x-0.5",
    iconAnimation === "rotate" && "group-hover/btn:rotate-12",
  );

  return (
    <Link
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={handleClick}
      className={cn(base, styles)}
    >
      {iconPosition === "left" && <Icon className={iconCls} />}
      <span>{children}</span>
      {iconPosition === "right" && <Icon className={iconCls} />}
    </Link>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-72 w-72 rounded-full bg-linear-to-br from-indigo-400/15 via-sky-400/10 to-cyan-400/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Selected work I&apos;m{" "}
              <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-sky-300 dark:to-cyan-300">
                proud of
              </span>
              .
            </h2>
          </div>
          <GlassButton
            href="https://github.com/"
            external
            icon={GithubIcon}
            iconPosition="left"
          >
            All projects
          </GlassButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.015, rotate: 0.3 }}
              className={cn(p.featured && "lg:col-span-2")}
            >
              <TiltCard
                as="article"
                className="gradient-border group relative isolate overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/15 sm:p-7 dark:bg-black/20"
              >
                {/* gradient blob */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90 bg-linear-to-br",
                    p.gradient,
                  )}
                />
                {/* sweeping sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                />

                {/* Inner parallax wrapper — translates slightly using TiltCard CSS vars */}
                <div
                  className="relative will-change-transform"
                  style={{
                    transform:
                      "translate3d(calc(var(--tilt-y, 0deg) / 6 * 1px), calc(var(--tilt-x, 0deg) / -6 * 1px), 0)",
                  }}
                >
                  {/* Header badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {p.badges.map((b) => (
                      <Badge
                        key={b.label}
                        className={cn("backdrop-blur", b.className)}
                      >
                        <b.icon className="h-3 w-3" />
                        {b.label}
                      </Badge>
                    ))}
                    <span className="text-xs text-muted-foreground">
                      {p.tagline}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.description}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {/* Features */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                        Features
                      </p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {p.features.map((f, fi) => (
                          <motion.li
                            key={f}
                            initial={{ opacity: 0, x: -6 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{
                              duration: 0.35,
                              delay: 0.1 + fi * 0.05,
                              ease: "easeOut",
                            }}
                            className="flex items-start gap-2.5 leading-relaxed"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500 dark:text-indigo-300" />
                            <span className="text-muted-foreground">{f}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                        Stack
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <li
                            key={s}
                            className="rounded-md border border-white/20 bg-white/30 px-2 py-1 text-xs font-medium text-foreground/80 backdrop-blur dark:bg-white/10"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    <GlassButton
                      href={p.github}
                      external
                      icon={GithubIcon}
                      iconPosition="left"
                      iconAnimation="rotate"
                    >
                      GitHub
                    </GlassButton>
                    <GlassButton
                      href={p.demo}
                      external={p.demo.startsWith("http")}
                      icon={ArrowUpRight}
                      iconPosition="right"
                      variant="primary"
                    >
                      Live demo
                    </GlassButton>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
