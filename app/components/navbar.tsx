"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { CommandPaletteTrigger } from "./command-palette";
import { palette } from "@/lib/palette";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-background transition-transform group-hover:scale-105"
            style={{
              boxShadow: `0 0 0 1px color-mix(in oklab, ${palette.Vibrant} 50%, transparent), 0 4px 18px -4px ${palette.Vibrant}66`,
              background: `linear-gradient(135deg, ${palette.LightVibrant}, ${palette.Vibrant}, ${palette.DarkVibrant})`,
            }}
          >
            {palette.image ? (
              <Image
                src={palette.image}
                alt="Mahbuba Akter"
                width={72}
                height={72}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span className="text-[11px] font-bold text-white">MA</span>
            )}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm">Mahbuba Akter</span>
            <span className="text-[10px] font-normal text-muted-foreground">
              Junior Full Stack Dev
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CommandPaletteTrigger />
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#contact">Hire me</Link>
          </Button>
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
            className="overflow-hidden border-t border-border/60 bg-background/90 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
