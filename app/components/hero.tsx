"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center"
      >
        <div className="h-[420px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent_70%)] blur-2xl" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.30),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent_70%)] blur-3xl"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          Open to junior full-stack internships
          <span className="inline-flex items-center gap-1 text-foreground/80">
            <MapPin className="h-3 w-3" /> New York
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Mahbuba Akter
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-balance text-lg text-muted-foreground sm:text-xl"
        >
          Junior Full Stack Web Developer — building modern, scalable, real-time
          web applications with Next.js, Node.js, and a sharp eye for design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="h-11 px-5">
            <Link href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 px-5">
            <Link href="#contact">
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid w-full grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 text-sm"
        >
          {[
            { k: "Bootcamp", v: "Programming Hero L1 + L2" },
            { k: "Stack", v: "Next.js · Node · Prisma" },
            { k: "Status", v: "Available for internships" },
          ].map((s) => (
            <div
              key={s.k}
              className="bg-background/60 px-4 py-4 text-left backdrop-blur"
            >
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.k}
              </dt>
              <dd className="mt-1 text-sm font-medium">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
