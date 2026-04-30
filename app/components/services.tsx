"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  LayoutGrid,
  Database,
  Bot,
  Zap,
  Rocket,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    icon: LayoutGrid,
    title: "Frontend Engineering",
    blurb:
      "Pixel-perfect, accessible UIs in Next.js, React and Tailwind — fast on every device.",
    bullets: ["Next.js · React · TypeScript", "Tailwind · ShadCN UI", "Framer Motion polish"],
  },
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    blurb:
      "Typed APIs, auth and validation that scale from MVP to production traffic.",
    bullets: ["REST APIs · Zod · JWT", "Better Auth · OAuth", "Role-based access"],
  },
  {
    icon: Database,
    title: "Database & Data Modelling",
    blurb:
      "Relational and NoSQL schemas with Prisma — clean, typed, query-efficient.",
    bullets: ["PostgreSQL · MongoDB", "Prisma ORM · Firebase", "Indexing & migrations"],
  },
  {
    icon: Zap,
    title: "Real-time Features",
    blurb:
      "Live chat, notifications, presence and collaborative sessions powered by WebSockets.",
    bullets: ["Socket.io · streams", "Presence + typing", "Push notifications"],
  },
  {
    icon: Bot,
    title: "AI Integrations",
    blurb:
      "RAG pipelines, streaming chat UIs and AI-assisted workflows wired into your product.",
    bullets: ["Embeddings · RAG", "Streamed responses", "Citations + guardrails"],
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    blurb:
      "Deploy on Vercel with CI, perf audits, SEO and analytics ready out of the box.",
    bullets: ["Vercel · CI/CD", "Lighthouse 95+", "SEO · OpenGraph · RSS"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative scroll-mt-24 py-12 sm:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-0 -z-10 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-blue) 28%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/60 px-4 py-1.5 text-sm font-semibold backdrop-blur-md dark:bg-white/10">
            <span className="text-brand-gradient">Services</span>
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            What I can <span className="text-brand-gradient">build for you</span>.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-xs">
            From a single landing page to a full real-time SaaS — I ship
            production-ready, typed, well-tested code with care for the
            details that make products feel premium.
          </p>
        </motion.div>

        <div className="mt-12 grid text-sm auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/65 p-7 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_-18px_rgba(59,130,246,0.45)] dark:border-white/10 dark:bg-white/5"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-7 top-0 h-px bg-brand-gradient opacity-70"
              />

              <header className="flex items-start justify-between gap-3">
                <span className="icon-halo h-12 w-12 shrink-0 text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </header>

              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {s.blurb}
              </p>

              <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-foreground/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between gap-2 border-t border-white/20 pt-5 dark:border-white/10">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground/50">
                  service
                </span>
                <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
