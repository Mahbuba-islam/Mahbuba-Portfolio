import * as React from "react";
import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

type CalloutType = "info" | "warning" | "tip" | "success";

const STYLES: Record<
  CalloutType,
  { ring: string; bg: string; icon: React.ReactNode; label: string }
> = {
  info: {
    ring: "ring-sky-400/30",
    bg: "bg-sky-500/10",
    icon: <Info className="h-4 w-4 text-sky-300" />,
    label: "Note",
  },
  warning: {
    ring: "ring-amber-400/30",
    bg: "bg-amber-500/10",
    icon: <AlertTriangle className="h-4 w-4 text-amber-300" />,
    label: "Warning",
  },
  tip: {
    ring: "ring-indigo-400/30",
    bg: "bg-indigo-500/10",
    icon: <Lightbulb className="h-4 w-4 text-indigo-300" />,
    label: "Tip",
  },
  success: {
    ring: "ring-emerald-400/30",
    bg: "bg-emerald-500/10",
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
    label: "Success",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children?: React.ReactNode;
}) {
  const s = STYLES[type] ?? STYLES.info;
  return (
    <aside
      className={`my-6 flex gap-3 rounded-2xl ${s.bg} p-4 ring-1 ${s.ring} not-prose`}
    >
      <div className="mt-0.5 shrink-0">{s.icon}</div>
      <div className="min-w-0 flex-1 text-sm">
        <p className="m-0 font-medium tracking-tight">{title ?? s.label}</p>
        <div className="mt-1 text-muted-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </aside>
  );
}

export function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-border/60 bg-background/40 not-prose">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full"
        loading="lazy"
      />
      {caption && (
        <figcaption className="border-t border-border/60 bg-background/60 px-4 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-border/60 bg-background/60 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </kbd>
  );
}

export const mdxComponents = {
  Callout,
  Figure,
  Kbd,
};
