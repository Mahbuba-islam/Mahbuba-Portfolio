// "use client";

// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Mail, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const PORTRAIT_SRC = "/img/mahbuba-professional.jpg";

// /**
//  * Hero
//  *  - Uses the real portrait (NOT the logo).
//  *  - No animation on the photo itself (still, framed glass card).
//  *  - Background is intentionally minimal: tiny floating dots + 1 small square,
//  *    with subtle blue glow ambience.
//  */
// export function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden pt-2 pb-0 sm:pt-20 sm:pb-20 lg:pt-10">
//       <ShapeField />

//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-background/0 via-background/30 to-background"
//       />
//       <div
//         aria-hidden
//         className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
//       />

//       <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12 lg:gap-16">
//         {/* Copy — LEFT */}
//         <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
//           {/* "Hello, I'm" pill with waving hand */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="relative inline-flex"
//           >
//             <span className="inline-flex items-center gap-0 rounded-full border border-white/25 bg-white/60 px-4 py-0 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md dark:bg-white/10">
//               <span>
//                 Hey <span className="text-brand-gradient"></span>
//               </span>
//               <span className="animate-wave text-base" aria-hidden>
//                 👋
//               </span>
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.05 }}
//             className="font-display mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl"
//           >
//             I&apos;m{" "}
//             <span className="text-brand-gradient animate-gradient-x">
//               Mahbuba Akter
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="mt-3 text-base font-medium tracking-tight text-foreground/85 sm:text-sm"
//           >
//             Full Stack Web Developer specializing in {" "}
//             <span className="text-muted-foreground">
//              Next.js, Node.js, TypeScript, and Prisma.Turning ideas into scalable, production-ready web apps.
//             </span>
//           </motion.p>

//           {/* <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//             className="mt-5 max-w-2xl text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm"
//           >
//             Full Stack Developer building scalable, high-performance web apps
//             with clean UX and real-time systems. I ship fast, reliable,
//             production-ready products using modern tech and strong attention to
//             detail.
//           </motion.p> */}

//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur dark:bg-white/10"
//           >
//             <Sparkles
//               className="h-3.5 w-3.5"
//               style={{ color: "var(--brand-cyan)" }}
//             />
//             Open to junior full-stack internships
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.25 }}
//             className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="h-11 px-5 bg-brand-gradient text-white border-0 shadow-lg shadow-blue-500/30 ring-1 ring-white/20 hover:opacity-95"
//             >
//               <Link href="#projects">
//                 View Projects <ArrowRight className="h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="h-11 px-5 backdrop-blur"
//             >
//               <Link href="#contact">
//                 <Mail className="h-4 w-4" />
//                 Let&apos;s Work Together
//               </Link>
//             </Button>
//           </motion.div>
//         </div>

//         {/* Portrait — RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="order-1 relative mx-auto md:order-2 md:mx-0"
//         >
//           <PortraitBlob src={PORTRAIT_SRC} />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /**
//  * PortraitBlob — organic blob backdrop in brand palette + floating accents.
//  */
// function PortraitBlob({ src }: { src: string }) {
//   return (
//     <div className="relative h-72 w-56 sm:h-60 sm:w-64 md:h-96 md:w-72 lg:h-88 lg:w-[20rem] mt-5">
//       {/* Blobs */}
//       <svg
//         aria-hidden
//         viewBox="0 0 400 480"
//         preserveAspectRatio="xMidYMid meet"
//         className="absolute inset-0 h-full w-full"
//       >
//         <defs>
//           <linearGradient id="heroBlobA" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="var(--brand-purple)" />
//             <stop offset="100%" stopColor="var(--brand-blue)" />
//           </linearGradient>
//           <linearGradient id="heroBlobB" x1="0%" y1="100%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="var(--brand-blue)" />
//             <stop offset="100%" stopColor="var(--brand-cyan)" />
//           </linearGradient>
//           <linearGradient id="heroBlobC" x1="100%" y1="0%" x2="0%" y2="100%">
//             <stop offset="0%" stopColor="var(--brand-cyan)" />
//             <stop offset="100%" stopColor="var(--brand-aqua)" />
//           </linearGradient>
//         </defs>

//         <path
//           d="M310,90 C360,140 380,220 340,300 C300,380 220,420 140,390 C60,360 30,260 60,180 C90,100 180,40 240,50 C275,56 300,70 310,90 Z"
//           fill="url(#heroBlobA)"
//           opacity="0.85"
//           style={{
//             transformOrigin: "center",
//             animation: "blob-morph 16s ease-in-out infinite",
//           }}
//         />
//         <path
//           d="M120,80 C200,40 290,80 320,160 C350,240 300,330 220,360 C140,390 60,330 50,250 C40,170 60,110 120,80 Z"
//           fill="url(#heroBlobB)"
//           opacity="0.55"
//           style={{
//             transformOrigin: "center",
//             animation: "blob-morph 22s ease-in-out infinite reverse",
//           }}
//         />
//         <path
//           d="M300,330 C340,310 360,360 340,400 C320,440 270,440 250,410 C235,385 270,346 300,330 Z"
//           fill="url(#heroBlobC)"
//           opacity="0.7"
//           style={{
//             transformOrigin: "center",
//             animation: "blob-morph 18s ease-in-out infinite",
//           }}
//         />
//       </svg>

//       {/* Floating accents */}
//       <span
//         aria-hidden
//         className="absolute h-6 w-6 rounded-full ring-2 animate-float-y"
//         style={{ top: "8%", right: "6%", borderColor: "var(--brand-cyan)" }}
//       />
//       <span
//         aria-hidden
//         className="absolute h-3 w-3 rounded-full animate-drift"
//         style={{
//           top: "20%",
//           left: "-2%",
//           background: "var(--brand-aqua)",
//           boxShadow: "0 0 12px var(--brand-aqua)",
//         }}
//       />
//       <span
//         aria-hidden
//         className="absolute h-2 w-2 rounded-full animate-float-x"
//         style={{
//           bottom: "18%",
//           right: "-3%",
//           background: "var(--brand-purple)",
//           boxShadow: "0 0 12px var(--brand-purple)",
//         }}
//       />
//       <span
//         aria-hidden
//         className="absolute h-4 w-4 rotate-45 animate-float-y"
//         style={{
//           bottom: "8%",
//           left: "8%",
//           background:
//             "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
//           borderRadius: 4,
//         }}
//       />

//       {/* Portrait card */}
//       <div className="relative z-10 flex h-full w-full items-center justify-center [perspective:1200px]">
//         <motion.div
//           initial={{ opacity: 0, y: 20, rotateX: -6 }}
//           animate={{
//             opacity: 1,
//             y: [0, -10, 0],
//             rotateX: [0, 2, 0],
//             rotateY: [0, -2, 0],
//           }}
//           transition={{
//             opacity: { duration: 0.8, ease: "easeOut" },
//             y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//             rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//             rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//           }}
//           whileHover={{ scale: 1.03, rotateY: 4, rotateX: -3 }}
//           className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-2xl shadow-blue-500/15 [transform-style:preserve-3d]"
//         >
//           {/* Halo */}
//           <span
//             aria-hidden
//             className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-50 blur-2xl"
//             style={{
//               background:
//                 "conic-gradient(from 0deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan), var(--brand-aqua), var(--brand-purple))",
//               animation: "halo-spin 14s linear infinite",
//             }}
//           />

//           {/* Glass layer */}
//           <span
//             aria-hidden
//             className="absolute inset-[2px] rounded-[1.85rem] backdrop-blur-2xl"
//             style={{
//               background:
//                 "linear-gradient(135deg, color-mix(in oklab, var(--brand-purple) 8%, transparent), color-mix(in oklab, var(--brand-cyan) 6%, transparent))",
//               boxShadow:
//                 "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(255,255,255,0.05)",
//             }}
//           />

//           {/* Inner highlight */}
//           <motion.span
//             aria-hidden
//             animate={{ opacity: [0.15, 0.45, 0.15] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="pointer-events-none absolute inset-[2px] rounded-[1.85rem] ring-1 ring-white/30"
//           />

//           {/* Shimmer */}
//           <span
//             aria-hidden
//             className="pointer-events-none absolute inset-[2px] overflow-hidden rounded-[1.85rem]"
//           >
//             <span
//               className="absolute -inset-y-4 -left-1/2 w-1/2 rotate-12"
//               style={{
//                 background:
//                   "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
//                 animation: "shimmer-sweep 5s ease-in-out infinite",
//               }}
//             />
//           </span>

//           {/* ⭐ UPDATED IMAGE HEIGHT ⭐ */}
//           <Image
//             src={src}
//             alt="Mahbuba Akter"
//             width={413}
//             height={400}
//             priority
//             className="
//               relative 
//               h-60 w-48 
//               rounded-[1.85rem] object-cover 
//               sm:h-64 sm:w-52 
//               md:h-72 md:w-60 
//               lg:h-80 lg:w-64
//             "
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// /** Minimal, tiny background — subtle dots + tiny square */
// function ShapeField() {
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//     >
//       <div
//         className="absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40"
//         style={{
//           background:
//             "radial-gradient(closest-side, color-mix(in oklab, var(--brand-purple) 25%, transparent), transparent 70%)",
//         }}
//       />
//       <div
//         className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full blur-3xl opacity-40"
//         style={{
//           background:
//             "radial-gradient(closest-side, color-mix(in oklab, var(--brand-cyan) 22%, transparent), transparent 70%)",
//         }}
//       />

//       {/* Tiny dots */}
//       <span
//         className="glass-shape animate-float-y"
//         style={{ width: 10, height: 10, top: "14%", left: "12%" }}
//       />
//       <span
//         className="glass-shape animate-drift"
//         style={{ width: 6, height: 6, top: "62%", left: "8%" }}
//       />
//       <span
//         className="glass-shape animate-float-x"
//         style={{ width: 8, height: 8, top: "30%", right: "10%" }}
//       />

//       {/* Tiny square */}
//       <span
//         className="absolute animate-float-x"
//         style={{
//           bottom: "16%",
//           right: "14%",
//           width: 12,
//           height: 12,
//           borderRadius: 3,
//           background:
//             "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
//           boxShadow: "0 0 14px rgba(59,130,246,0.45)",
//           opacity: 0.7,
//         }}
//       />
//     </div>
//   );
// }
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const PORTRAIT_SRC = "/img/mahbuba-professional.jpg";

/**
 * Hero Section
 * Clean, modern, minimal — with organic blob portrait card.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-2 pb-0 sm:pt-20 sm:pb-20 lg:pt-10">
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
        {/* LEFT — TEXT */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative inline-flex"
          >
            <span className="inline-flex items-center gap-0 rounded-full border border-white/25 bg-white/60 px-4 py-0 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md dark:bg-white/10">
              <span>Hey</span>
              <span className="animate-wave text-base" aria-hidden>
                👋
              </span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            I&apos;m{" "}
            <span className="text-brand-gradient animate-gradient-x">
              Mahbuba Akter
            </span>
          </motion.h1>

          {/* Subtitle — UPDATED */}
        <motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="mt-3 text-base font-semibold tracking-tight text-foreground sm:text-lg"
>
  Full Stack Web Developer
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.15 }}
  className="mt-2 text-[0.5rem]  dark:text-blue-200 text-gray-600 sm:text-base"
>
  Next.js · React · TypeScript · Node.js · Prisma · PostgreSQL · MongoDB 
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-3 text-sm font-medium text-shadow-gray-600 sm:text-base"
>
  Turning ideas into scalable, production‑ready web applications.
</motion.p>


         

          {/* Internship Badge — UPDATED ICON */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur dark:bg-white/10"
          >
            <Briefcase
              className="h-3.5 w-3.5 text-brand-cyan dark:text-brand-cyan"
            />
            Open to junior full‑stack internships
          </motion.div>

          {/* Buttons */}
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

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 px-5 backdrop-blur"
            >
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Let&apos;s Work Together
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT — PORTRAIT */}
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
 * PortraitBlob — organic blob backdrop + floating accents + glass card
 */
function PortraitBlob({ src }: { src: string }) {
  return (
    <div className="relative h-72 w-56 sm:h-60 sm:w-64 md:h-96 md:w-72 lg:h-88 lg:w-[20rem] mt-5">
      {/* Blobs */}
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
          style={{
            transformOrigin: "center",
            animation: "blob-morph 16s ease-in-out infinite",
          }}
        />
        <path
          d="M120,80 C200,40 290,80 320,160 C350,240 300,330 220,360 C140,390 60,330 50,250 C40,170 60,110 120,80 Z"
          fill="url(#heroBlobB)"
          opacity="0.55"
          style={{
            transformOrigin: "center",
            animation: "blob-morph 22s ease-in-out infinite reverse",
          }}
        />
        <path
          d="M300,330 C340,310 360,360 340,400 C320,440 270,440 250,410 C235,385 270,346 300,330 Z"
          fill="url(#heroBlobC)"
          opacity="0.7"
          style={{
            transformOrigin: "center",
            animation: "blob-morph 18s ease-in-out infinite",
          }}
        />
      </svg>

      {/* Floating accents */}
      <span
        aria-hidden
        className="absolute h-6 w-6 rounded-full ring-2 animate-float-y"
        style={{ top: "8%", right: "6%", borderColor: "var(--brand-cyan)" }}
      />
      <span
        aria-hidden
        className="absolute h-3 w-3 rounded-full animate-drift"
        style={{
          top: "20%",
          left: "-2%",
          background: "var(--brand-aqua)",
          boxShadow: "0 0 12px var(--brand-aqua)",
        }}
      />
      <span
        aria-hidden
        className="absolute h-2 w-2 rounded-full animate-float-x"
        style={{
          bottom: "18%",
          right: "-3%",
          background: "var(--brand-purple)",
          boxShadow: "0 0 12px var(--brand-purple)",
        }}
      />

      {/* Portrait Card */}
      <div className="relative z-10 flex h-full w-full items-center justify-center [perspective:1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -6 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            rotateX: [0, 2, 0],
            rotateY: [0, -2, 0],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.03, rotateY: 4, rotateX: -3 }}
          className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-2xl shadow-blue-500/15 [transform-style:preserve-3d]"
        >
          {/* Halo */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-50 blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, var(--brand-purple), var(--brand-blue), var(--brand-cyan), var(--brand-aqua), var(--brand-purple))",
              animation: "halo-spin 14s linear infinite",
            }}
          />

          {/* Glass layer */}
          <span
            aria-hidden
            className="absolute inset-[2px] rounded-[1.85rem] backdrop-blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--brand-purple) 8%, transparent), color-mix(in oklab, var(--brand-cyan) 6%, transparent))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(255,255,255,0.05)",
            }}
          />

          {/* Shimmer */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[2px] overflow-hidden rounded-[1.85rem]"
          >
            <span
              className="absolute -inset-y-4 -left-1/2 w-1/2 rotate-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                animation: "shimmer-sweep 5s ease-in-out infinite",
              }}
            />
          </span>

          {/* Portrait — UPDATED HEIGHT */}
          <Image
            src={src}
            alt="Mahbuba Akter"
            width={413}
            height={400}
            priority
            className="
              relative 
              h-60 w-48 
              rounded-[1.85rem] object-cover 
              sm:h-64 sm:w-52 
              md:h-72 md:w-60 
              lg:h-80 lg:w-64
            "
          />
        </motion.div>
      </div>
    </div>
  );
}

/** Background shapes */
function ShapeField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
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

      {/* Tiny dots */}
      <span
        className="glass-shape animate-float-y"
        style={{ width: 10, height: 10, top: "14%", left: "12%" }}
      />
      <span
        className="glass-shape animate-drift"
        style={{ width: 6, height: 6, top: "62%", left: "8%" }}
      />
      <span
        className="glass-shape animate-float-x"
        style={{ width: 8, height: 8, top: "30%", right: "10%" }}
      />

      {/* Tiny square */}
      <span
        className="absolute animate-float-x"
        style={{
          bottom: "16%",
          right: "14%",
          width: 12,
          height: 12,
          borderRadius: 3,
          background:
            "linear-gradient(135deg, var(--brand-blue), var(--brand-cyan))",
          boxShadow: "0 0 14px rgba(59,130,246,0.45)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
