"use client";

import * as React from "react";
import { Eye, Heart } from "lucide-react";

type Stats = { slug: string; views: number; likes: number };

const STORAGE_KEY = (slug: string) => `post-liked:${slug}`;

function formatCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10_000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return Math.round(n / 1000) + "k";
}

export function PostStats({ slug }: { slug: string }) {
  const [data, setData] = React.useState<Stats | null>(null);
  const [liked, setLiked] = React.useState<boolean>(false);
  const [pending, setPending] = React.useState<boolean>(false);
  const incremented = React.useRef(false);

  React.useEffect(() => {
    setLiked(
      typeof window !== "undefined" &&
        localStorage.getItem(STORAGE_KEY(slug)) === "1",
    );
  }, [slug]);

  React.useEffect(() => {
    let cancelled = false;
    async function bootstrap() {
      try {
        if (incremented.current) return;
        incremented.current = true;
        const res = await fetch(`/api/stats/${encodeURIComponent(slug)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "view" }),
        });
        if (!res.ok) throw new Error(String(res.status));
        const json = (await res.json()) as Stats;
        if (!cancelled) setData(json);
      } catch {
        // fall back to plain GET
        try {
          const res = await fetch(`/api/stats/${encodeURIComponent(slug)}`);
          if (res.ok) {
            const json = (await res.json()) as Stats;
            if (!cancelled) setData(json);
          }
        } catch {
          /* ignore */
        }
      }
    }
    bootstrap();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  async function toggleLike() {
    if (pending) return;
    setPending(true);
    const next = !liked;
    // optimistic
    setLiked(next);
    setData((d) =>
      d ? { ...d, likes: Math.max(0, d.likes + (next ? 1 : -1)) } : d,
    );
    try {
      const res = await fetch(`/api/stats/${encodeURIComponent(slug)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: next ? "like" : "unlike" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const json = (await res.json()) as Stats;
      setData(json);
      if (next) localStorage.setItem(STORAGE_KEY(slug), "1");
      else localStorage.removeItem(STORAGE_KEY(slug));
    } catch {
      // rollback
      setLiked(!next);
      setData((d) =>
        d ? { ...d, likes: Math.max(0, d.likes + (next ? -1 : 1)) } : d,
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-2 py-1">
        <Eye className="h-3.5 w-3.5" />
        <span>{data ? formatCount(data.views) : "—"} views</span>
      </span>
      <button
        type="button"
        onClick={toggleLike}
        disabled={pending}
        aria-pressed={liked}
        aria-label={liked ? "Unlike post" : "Like post"}
        className={
          "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 transition-colors disabled:opacity-60 " +
          (liked
            ? "border-rose-400/40 bg-rose-500/10 text-rose-300"
            : "border-border/60 bg-background/60 hover:border-rose-400/40 hover:text-rose-300")
        }
      >
        <Heart
          className={"h-3.5 w-3.5 " + (liked ? "fill-current" : "")}
          aria-hidden
        />
        <span>{data ? formatCount(data.likes) : "—"} likes</span>
      </button>
    </div>
  );
}
