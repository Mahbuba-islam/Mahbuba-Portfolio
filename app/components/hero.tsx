"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PORTRAIT_SRC = "/img/new-portfolio-img.png";

/**
 * Hero
 *  - Uses the real portrait (NOT the logo).
 *  - No animation on the photo itself (still, framed glass card).
 *  - Background is intentionally minimal: tiny floating dots + 1 small square,
 *    with subtle blue glow ambience.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24">
      <ShapeField />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background/0 via-background/30 to-background"
      />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12 lg:gap-16">
        {/* Copy — LEFT */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          {/* "Hello, I'm" pill with waving hand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative inline-flex"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/60 px-4 py-1.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md dark:bg-white/10">
             
              <span>
                Hey <span className="text-brand-gradient"></span>
              </span>
               <span className="animate-wave text-base" aria-hidden>
                👋
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            I&apos;m{" "}
            <span className="text-brand-gradient animate-gradient-x">Mahbuba Akter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-medium tracking-tight text-foreground/85 sm:text-sm"
          >
            Full Stack Web Developer{" "}
            <span className="text-muted-foreground">
              · Next.js · Node.js · TypeScript · Prisma
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-2xl text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm"
          >Full Stack Developer building scalable, high-performance web 
          apps with clean UX and real-time systems. I ship fast, reliable, production-ready products
           using modern tech and strong attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur dark:bg-white/10"
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--brand-cyan)" }} />
            Open to junior full-stack internships
            {/* <span className="inline-flex items-center gap-1 text-foreground/80">
              <MapPin className="h-3 w-3" /> New York
            </span> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start"
          >
            <Button
              asChild
              size="lg"
              className="h-11 px-5 bg-brand-gradient text-white border-0 shadow-lg shadow-blue-500/30 ring-1 ring-white/20 hover:opacity-95"
            >
              <Link href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-5 backdrop-blur">
              <Link href="#contact">
                <Mail className="h-4 w-4" />Let&apos;s Work Together
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Portrait — RIGHT, with organic blob backdrop (screenshot-2 vibe, brand palette) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-1 relative mx-auto md:order-2 md:mx-0"
        >
          <PortraitBlob src={PORTRAIT_SRC} />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * PortraitBlob — organic blob backdrop in brand palette + floating accents.
 * Portrait is a tall rounded card with a generous round on the bottom.
 */
function PortraitBlob({ src }: { src: string }) {
  return (
    <div className="relative h-88 w-[16rem] sm:h-104 sm:w-76 md:h-120 md:w-88 lg:h-128 lg:w-[24rem]">
      {/* ── Organic blobs (SVG so we can morph cleanly) ──────────────── */}
      <svg
        aria-hidden
        viewBox="0 0 400 480"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="heroBlobA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-purple)" />
            <stop offset="100%" stopColor="var(--brand-blue)" />
          </linearGradient>
          <linearGradient id="heroBlobB" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-blue)" />
            <stop offset="100%" stopColor="var(--brand-cyan)" />
          </linearGradient>
          <linearGradient id="heroBlobC" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-cyan)" />
            <stop offset="100%" stopColor="var(--brand-aqua)" />
          </linearGradient>
        </defs>

        <path
          d="M310,90 C360,140 380,220 340,300 C300,380 220,420 140,390 C60,360 30,260 60,180 C90,100 180,40 240,50 C275,56 300,70 310,90 Z"
          fill="url(#heroBlobA)"
          opacity="0.85"
          style={{ transformOrigin: "center", animation: "blob-morph 16s ease-in-out infinite" }}
        />
        <path
          d="M120,80 C200,40 290,80 320,160 C350,240 300,330 220,360 C140,390 60,330 50,250 C40,170 60,110 120,80 Z"
          fill="url(#heroBlobB)"
          opacity="0.55"
          style={{ transformOrigin: "center", animation: "blob-morph 22s ease-in-out infinite reverse" }}
        />
        <path
          d="M300,330 C340,310 360,360 340,400 C320,440 270,440 250,410 C235,385 270,346 300,330 Z"
          fill="url(#heroBlobC)"
          opacity="0.7"
          style={{ transformOrigin: "center", animation: "blob-morph 18s ease-in-out infinite" }}
        />
      </svg>

      {/* ── Floating accents ─────────────────────────────────────── */}
      <span
        aria-hidden
        className="absolute h-6 w-6 rounded-full ring-2 animate-float-y"
        style={{ top: "8%", right: "6%", borderColor: "var(--brand-cyan)" }}
      />
      <span
        aria-hidden
        className="absolute h-3 w-3 rounded-full animate-drift"
        style={{ top: "20%", left: "-2%", background: "var(--brand-aqua)", boxShadow: "0 0 12px var(--brand-aqua)" }}
      />
      <span
        aria-hidden
        className="absolute h-2 w-2 rounded-full animate-float-x"
        style={{ bottom: "18%", right: "-3%", background: "var(--brand-purple)", boxShadow: "0 0 12px var(--brand-purple)" }}
      />
      <span
        aria-hidden
        className="absolute h-4 w-4 rotate-45 animate-float-y"
        style={{
          bottom: "8%",
          left: "8%",
          background: "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
          borderRadius: 4,
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 40 16"
        className="absolute h-4 w-10 animate-drift"
        style={{ top: "12%", left: "12%", color: "var(--brand-cyan)" }}
      >
        <path
          d="M2 8 Q 8 2, 14 8 T 26 8 T 38 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 40 16"
        className="absolute h-4 w-10 animate-drift"
        style={{ bottom: "26%", right: "8%", color: "var(--brand-aqua)" }}
      >
        <path
          d="M2 8 Q 8 14, 14 8 T 26 8 T 38 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* ── Portrait card: original rounded rectangle with gradient frame ── */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-2xl shadow-blue-500/20">
          <span
            aria-hidden
            className="absolute inset-0 rounded-[2rem] opacity-90"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-purple), var(--brand-blue) 50%, var(--brand-cyan))",
            }}
          />
          <Image
            src={src}
            alt="Mahbuba Akter"
            width={413}
            height={400}
            priority
            className="relative h-72 w-56 rounded-[1.85rem] object-cover sm:h-80 sm:w-64 md:h-[26rem] md:w-72 lg:h-[28rem] lg:w-80"
          />
        </div>
      </div>
    </div>
  );
}

/** Minimal, tiny background — matches screenshot-2 vibe: very subtle dots + a tiny square. */
function ShapeField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Very soft, low-opacity glow washes */}
      <div
        className="absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-purple) 25%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand-cyan) 22%, transparent), transparent 70%)",
        }}
      />

      {/* Tiny floating dots */}
      <span className="glass-shape animate-float-y" style={{ width: 10, height: 10, top: "14%", left: "12%" }} />
      <span className="glass-shape animate-drift"   style={{ width: 6,  height: 6,  top: "62%", left: "8%" }} />
      <span className="glass-shape animate-float-x" style={{ width: 8,  height: 8,  top: "30%", right: "10%" }} />
      <span className="glass-shape animate-float-y" style={{ width: 5,  height: 5,  top: "20%", right: "32%", animationDelay: "1.2s" }} />
      <span className="glass-shape animate-drift"   style={{ width: 4,  height: 4,  top: "44%", left: "48%" }} />
      <span className="glass-shape animate-float-x" style={{ width: 7,  height: 7,  bottom: "12%", left: "52%" }} />
      <span className="glass-shape animate-float-y" style={{ width: 5,  height: 5,  top: "8%",  right: "44%" }} />

      {/* Tiny rounded square (screenshot-2 style) */}
      <span
        className="absolute animate-float-x"
        style={{
          bottom: "16%",
          right: "14%",
          width: 12,
          height: 12,
          borderRadius: 3,
          background: "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
          boxShadow: "0 0 14px rgba(59,130,246,0.45)",
          opacity: 0.7,
        }}
      />
      {/* And one paired with it like in screenshot-2 */}
      <span
        className="absolute animate-float-y"
        style={{
          bottom: "18%",
          right: "20%",
          width: 14,
          height: 14,
          borderRadius: 9999,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 60%), linear-gradient(135deg, var(--brand-purple), var(--brand-blue))",
          boxShadow: "0 0 14px rgba(79,31,230,0.45)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
