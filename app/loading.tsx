import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid min-h-[60dvh] place-items-center text-muted-foreground">
      <div className="flex items-center gap-2 text-sm">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading…
      </div>
    </div>
  );
}
