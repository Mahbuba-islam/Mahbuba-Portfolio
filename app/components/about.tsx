"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  User,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

const PORTRAIT_SRC = "/img/my-new-portfolio-img-about.jpg";

const FACTS = [
  { icon: User,  label: "Name",      value: "Mahbuba Akter" },
  { icon: MapPin, label: "Location", value: "New York, USA" },
  { icon: Mail,  label: "Email",     value: "mahbubaislam7010@gmail.com" },
  { icon: Phone, label: "Available", value: "Internship & FT roles" },
];

const SOCIALS: Array<{
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}> = [
  { Icon: GithubIcon,   label: "GitHub",   href: "https://github.com/" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/" },
  { Icon: MessageCircle, label: "Chat",    href: "https://twitter.com/" },
  { Icon: Mail,         label: "Email",   href: "mailto:mahbubaislam7010@gmail.com" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-12 sm:py-16">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-purple) 30%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-cyan) 28%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* ── LEFT: portrait with brand-gradient blobs + social row ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Decorative gradient blobs (screenshot-5 vibe) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <span
                className="absolute -left-6 top-6 h-44 w-44 rounded-full blur-2xl opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-purple), var(--brand-blue))",
                }}
              />
              <span
                className="absolute -right-4 top-24 h-36 w-36 rounded-full blur-2xl opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
                }}
              />
              <span
                className="absolute -bottom-6 left-12 h-40 w-40 rounded-full blur-2xl opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-cyan), var(--brand-aqua))",
                }}
              />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-xl shadow-blue-500/15">
              <span
                aria-hidden
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan))",
                }}
              />
              <Image
                src={PORTRAIT_SRC}
                alt="Mahbuba Akter"
                width={520}
                height={620}
                className="relative h-auto w-full rounded-[1.85rem] object-cover"
              />
            </div>

            {/* Social icons row beneath the photo (screenshot-5 style) */}
            <div className="mt-6 flex justify-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="group relative grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/30 shadow-md shadow-blue-500/20 transition-transform hover:-translate-y-0.5 hover:scale-105"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-brand-gradient opacity-90"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-[2px] rounded-full bg-background"
                  />
                  <s.Icon
                    className="relative h-4 w-4 text-foreground transition-colors group-hover:text-[color:var(--brand-blue)]"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: copy ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {/* "About Me" pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/60 px-4 py-1.5 text-sm font-semibold backdrop-blur-md dark:bg-white/10">
              <span className="text-brand-gradient">About Me</span>
            </span>

            <h2 className="mt-5 text-balance text-xl font-semibold leading-[1.15] tracking-tight sm:text-2xl md:text-3xl">
              I build websites that{" "}
              <span className="text-brand-gradient">leave a lasting impression</span>{" "}
              on your users.
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground text-xs">
             Junior Full Stack Web Developer, recently graduated from Programming Hero’s 
             Level 1 & 2 bootcamp. Coding started as curiosity and quickly became 
             my passion—I enjoy the process of turning ideas into working products. I build end-to-end web applications, from designing data models to developing APIs and crafting clean, responsive user interfaces.

Along the way, I’ve learned to move fast, adapt quickly, and keep improving through hands-on practice. I’m hardworking, a fast learner, and someone who genuinely enjoys solving real problems through code. I care about writing clean, maintainable code and shipping features that feel simple for users but are strong under the hood.
            </p>

            {/* Info card */}
            <dl className="mt-7 grid gap-4 rounded-2xl border border-white/15 bg-white/55 p-5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:grid-cols-2 dark:border-white/10 dark:bg-white/5">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="icon-halo h-9 w-9 shrink-0 text-white">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-widest text-brand-gradient">
                      {f.label}
                    </dt>
                    <dd className="mt-0.5 truncate text-sm font-medium text-foreground/90">
                      {f.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-brand-gradient px-5 text-white border-0 shadow-lg shadow-blue-500/30 ring-1 ring-white/20 hover:opacity-95"
              >
                <Link href="#contact">
                  Contact me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-5 backdrop-blur"
              >
                <Link href="/resume">
                  <Download className="h-4 w-4" /> Download resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
