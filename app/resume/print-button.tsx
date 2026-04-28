"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted"
    >
      <Printer className="h-3.5 w-3.5" />
      Print / Save PDF
    </button>
  );
}
