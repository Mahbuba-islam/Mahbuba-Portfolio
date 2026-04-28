"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto grid min-h-[70dvh] max-w-3xl place-items-center px-4 py-20 text-center sm:px-6">
      <div>
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-rose-500/20 to-orange-500/20 ring-1 ring-rose-400/30">
          <AlertTriangle className="h-5 w-5 text-rose-300" />
        </div>
        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-rose-400">
          Something went wrong
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Unexpected error
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-xs text-muted-foreground/70">
            digest: {error.digest}
          </p>
        )}
        <div className="mt-6 flex justify-center gap-2">
          <Button onClick={reset}>
            <RotateCcw className="h-4 w-4" /> Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
