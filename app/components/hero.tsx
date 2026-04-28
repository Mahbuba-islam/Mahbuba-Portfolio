"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { palette } from "@/lib/palette";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32">
      {/* Palette-driven gradient background */}
      <div
        aria-hidden
        className="bg-palette-radial pointer-events-none absolute inset-0 -z-10 opacity-70"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
      />
      {/* Soft top-to-bottom overlay so content reads cleanly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background/0 via-background/20 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-105 w-205 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(closest-side, ${palette.Vibrant}55, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-95 w-95 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(closest-side, ${palette.LightVibrant}40, transparent 70%)`,
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12 lg:gap-16">
        {/* Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0"
        >
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] blur-2xl"
            style={{
              background: `conic-gradient(from 140deg, ${palette.Vibrant}, ${palette.LightVibrant}, ${palette.DarkVibrant}, ${palette.Vibrant})`,
              opacity: 0.45,
            }}
          />
          <div
            className="relative overflow-hidden rounded-[1.6rem] border bg-card/40 p-1.5 backdrop-blur"
            style={{
              borderColor: `color-mix(in oklab, ${palette.Vibrant} 40%, transparent)`,
            }}
          >
            {palette.image && (
              <Image
                src={palette.image}
                alt="Mahbuba Akter"
                width={360}
                height={440}
                priority
                className="h-72 w-56 rounded-[1.3rem] object-cover sm:h-80 sm:w-64 md:h-96 md:w-72"
              />
            )}
          </div>
        </motion.div>

        {/* Copy */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles
              className="h-3.5 w-3.5"
              style={{ color: palette.LightVibrant }}
            />
            Open to junior full-stack internships
            <span className="inline-flex items-center gap-1 text-foreground/80">
              <MapPin className="h-3 w-3" /> New York
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${palette.LightVibrant}, ${palette.Vibrant}, ${palette.DarkVibrant})`,
              }}
            >
              Mahbuba Akter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl"
          >
            Junior Full Stack Web Developer — building modern, scalable,
            real-time web applications with Next.js, Node.js, and a sharp eye
            for design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start"
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
            className="mt-12 grid w-full max-w-xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 text-sm sm:grid-cols-3"
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
      </div>
    </section>
  );
}
