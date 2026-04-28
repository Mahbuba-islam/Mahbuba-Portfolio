"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  CornerDownLeft,
  ArrowRight,
  User,
  Wrench,
  FolderKanban,
  Mail,
  FileText,
  Home,
  Hash,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

type ItemKind = "section" | "post" | "tag" | "action";

type CommandItem = {
  id: string;
  kind: ItemKind;
  title: string;
  subtitle?: string;
  href: string;
  external?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  keywords?: string[];
};

type PostLite = { slug: string; title: string; description: string; tags: string[] };

const SECTIONS: CommandItem[] = [
  { id: "home", kind: "section", title: "Home", href: "/", icon: Home },
  { id: "about", kind: "section", title: "About", href: "/#about", icon: User, keywords: ["bio"] },
  { id: "skills", kind: "section", title: "Skills", href: "/#skills", icon: Wrench, keywords: ["tech", "stack"] },
  { id: "projects", kind: "section", title: "Projects", href: "/#projects", icon: FolderKanban, keywords: ["work", "portfolio"] },
  { id: "blog", kind: "section", title: "Blog", href: "/blog", icon: FileText, keywords: ["writing", "posts"] },
  { id: "resume", kind: "section", title: "Resume", href: "/resume", icon: FileText, keywords: ["cv", "experience", "print"] },
  { id: "contact", kind: "section", title: "Contact", href: "/#contact", icon: Mail, keywords: ["email", "reach"] },
];

const ACTIONS: CommandItem[] = [
  {
    id: "email",
    kind: "action",
    title: "Email Mahbuba",
    subtitle: "mahbubaislam7010@gmail.com",
    href: "mailto:mahbubaislam7010@gmail.com",
    external: true,
    icon: Mail,
  },
  {
    id: "github",
    kind: "action",
    title: "GitHub",
    href: "https://github.com/",
    external: true,
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    kind: "action",
    title: "LinkedIn",
    href: "https://linkedin.com/",
    external: true,
    icon: LinkedinIcon,
  },
  {
    id: "rss",
    kind: "action",
    title: "RSS feed",
    subtitle: "/rss.xml",
    href: "/rss.xml",
    icon: Hash,
  },
];

function score(item: CommandItem, q: string): number {
  if (!q) return 1;
  const needle = q.toLowerCase();
  const haystack =
    `${item.title} ${item.subtitle ?? ""} ${(item.keywords ?? []).join(" ")} ${item.kind}`.toLowerCase();
  if (item.title.toLowerCase().startsWith(needle)) return 4;
  if (item.title.toLowerCase().includes(needle)) return 3;
  if (haystack.includes(needle)) return 2;
  // token fallback
  const tokens = needle.split(/\s+/).filter(Boolean);
  if (tokens.length > 1 && tokens.every((t) => haystack.includes(t))) return 1;
  return 0;
}

function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const KIND_LABEL: Record<ItemKind, string> = {
  section: "Page",
  post: "Post",
  tag: "Tag",
  action: "Action",
};

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const [posts, setPosts] = React.useState<PostLite[]>([]);
  const [postsLoaded, setPostsLoaded] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Global ⌘K / Ctrl+K + custom event
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpenEvent() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", onOpenEvent);
    };
  }, []);

  // Lock scroll + focus input when open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => inputRef.current?.focus(), 10);
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Fetch posts once on first open
  React.useEffect(() => {
    if (!open || postsLoaded) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error(String(res.status));
        const json = (await res.json()) as { posts: PostLite[] };
        if (!cancelled) {
          setPosts(json.posts ?? []);
          setPostsLoaded(true);
        }
      } catch {
        if (!cancelled) setPostsLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, postsLoaded]);

  const allItems = React.useMemo<CommandItem[]>(() => {
    const postItems: CommandItem[] = posts.map((p) => ({
      id: `post:${p.slug}`,
      kind: "post",
      title: p.title,
      subtitle: p.description,
      href: `/blog/${p.slug}`,
      icon: FileText,
      keywords: p.tags,
    }));
    const tagSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    const tagItems: CommandItem[] = Array.from(tagSet)
      .sort()
      .map((t) => ({
        id: `tag:${t}`,
        kind: "tag",
        title: `#${t}`,
        href: `/blog/tag/${tagToSlug(t)}`,
        icon: Hash,
        keywords: [t, "tag"],
      }));
    return [...SECTIONS, ...postItems, ...tagItems, ...ACTIONS];
  }, [posts]);

  const filtered = React.useMemo(() => {
    return allItems
      .map((it) => ({ it, s: score(it, query) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.it);
  }, [allItems, query]);

  const grouped = React.useMemo(() => {
    const groups: Record<ItemKind, CommandItem[]> = {
      section: [],
      post: [],
      tag: [],
      action: [],
    };
    for (const it of filtered) groups[it.kind].push(it);
    return groups;
  }, [filtered]);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(0);
  }, [query, open]);

  function go(item: CommandItem) {
    setOpen(false);
    setQuery("");
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[active];
      if (item) go(item);
    }
  }

  // Scroll active into view
  React.useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(
      `[data-index="${active}"]`,
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  let runningIndex = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-border/60 px-3">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search pages, posts, tags…"
            aria-label="Command palette search"
            className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded border border-border/60 bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
            Esc
          </kbd>
        </div>

        <ul
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto p-1.5 text-sm"
        >
          {filtered.length === 0 && (
            <li className="px-3 py-8 text-center text-xs text-muted-foreground">
              No matches.
            </li>
          )}
          {(["section", "post", "tag", "action"] as ItemKind[]).map((kind) => {
            const items = grouped[kind];
            if (items.length === 0) return null;
            return (
              <li key={kind}>
                <p className="px-3 pb-1 pt-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {KIND_LABEL[kind]}
                </p>
                <ul>
                  {items.map((item) => {
                    runningIndex += 1;
                    const idx = runningIndex;
                    const isActive = idx === active;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          data-index={idx}
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => go(item)}
                          className={
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors " +
                            (isActive
                              ? "bg-indigo-500/10 text-foreground"
                              : "text-muted-foreground hover:bg-muted/40 hover:text-foreground")
                          }
                        >
                          <item.icon className="h-4 w-4 shrink-0" aria-hidden />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-foreground">
                              {item.title}
                            </span>
                            {item.subtitle && (
                              <span className="block truncate text-xs text-muted-foreground">
                                {item.subtitle}
                              </span>
                            )}
                          </span>
                          {isActive && (
                            <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between gap-3 border-t border-border/60 px-3 py-2 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-border/60 bg-background/60 px-1.5 py-0.5 font-mono">↑↓</kbd>
              navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="rounded border border-border/60 bg-background/60 px-1.5 py-0.5 font-mono">↵</kbd>
              open
            </span>
          </div>
          <span className="inline-flex items-center gap-1">
            <ArrowRight className="h-3 w-3" />
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CommandPaletteTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("palette:open"))}
      aria-label="Open command palette"
      className="hidden h-9 items-center gap-2 rounded-md border border-border/60 bg-background/40 px-2.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
    >
      <Search className="h-3.5 w-3.5" />
      <span>Search</span>
      <kbd className="ml-2 hidden rounded border border-border/60 bg-background/60 px-1.5 py-0.5 font-mono text-[10px] md:inline">
        ⌘K
      </kbd>
    </button>
  );
}
