"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MessageSquareText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { CommandPaletteTrigger } from "./command-palette";
import { palette } from "@/lib/palette";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeHash, setActiveHash] = React.useState<string>("");
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which homepage section is in view (for hash links).
  React.useEffect(() => {
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveHash("");
      return;
    }
    const ids = ["about", "services", "skills", "projects", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => !!e);
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveHash(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [pathname]);

  function isActive(href: string): boolean {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHash === href.slice(1);
    }
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-xl backdrop-saturate-150 transition-all",
        // Glassmorphism: translucent layer + soft border in both themes
        "bg-white/10 supports-backdrop-filter:bg-white/10 dark:bg-black/20 dark:supports-backdrop-filter:bg-black/20",
        "border-b border-white/20 dark:border-white/10",
        scrolled &&
          "bg-white/30 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.25)] dark:bg-black/40 dark:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight"
        >
          <span className="relative grid h-9.5 w-9.5 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/10 shadow-md shadow-blue-500/20 dark:bg-white dark:ring-white/40">
            <Image
              src="/img/my logo.png"
              alt="Mahbuba Akter logo"
              width={55}
              height={55}
              priority
              className="relative h-9.5 w-9.5 object-contain"
            />
          </span>

          
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-md bg-linear-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/20"
                    />
                  )}
                  {/* Animated colorful underline (hover only when not active) */}
                  <span
                    className={cn(
                      "pointer-events-none absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-indigo-500 via-sky-400 to-cyan-400 transition-transform duration-300 ease-out",
                      active
                        ? "scale-x-100"
                        : "group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <CommandPaletteTrigger />
          <ThemeToggle />
          <Link
            href="/#contact"
            aria-label="Hire me — open contact section"
            className="group relative hidden h-9 items-center gap-1.5 overflow-hidden rounded-md bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-500 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/30 transition-transform hover:scale-[1.04] focus-visible:scale-[1.04] sm:inline-flex"
          >
            {/* pulsing ring */}
            <motion.span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-md bg-linear-to-r from-indigo-400 via-sky-400 to-cyan-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* sweeping shine */}
             <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ["0%", "320%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
            /> 
            <MessageSquareText className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            <span>Let&apos;s Talk</span>
            {/* available dot */}
            <span className="relative ml-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white/40" />
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/20 bg-white/20 backdrop-blur-xl backdrop-saturate-150 md:hidden dark:border-white/10 dark:bg-black/40"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-linear-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 text-foreground ring-1 ring-inset ring-white/20"
                          : "text-foreground/80 hover:bg-white/20 hover:text-foreground dark:hover:bg-white/10",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
