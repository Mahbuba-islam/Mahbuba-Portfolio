"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/markdown";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = React.useState<string | null>(
    items[0]?.id ?? null,
  );

  React.useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] },
    );

    const nodes = items
      .map((i) => document.getElementById(i.id))
      .filter((n): n is HTMLElement => n !== null);
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 hidden max-h-[calc(100dvh-8rem)] overflow-auto text-sm xl:block"
    >
      <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-border/60">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l border-transparent py-1 pl-3 text-muted-foreground transition-colors hover:text-foreground",
                item.depth === 3 && "pl-6",
                active === item.id &&
                  "border-indigo-400 text-foreground",
              )}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
