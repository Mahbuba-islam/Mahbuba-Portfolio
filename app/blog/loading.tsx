export default function BlogLoading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-2xl">
        <div className="h-3 w-16 animate-pulse rounded bg-muted" />
        <div className="mt-4 h-10 w-2/3 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted/70" />
      </div>

      <ul className="mt-12 grid gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <li
            key={i}
            className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur"
          >
            <div className="h-3 w-32 animate-pulse rounded bg-muted" />
            <div className="mt-3 h-5 w-2/3 animate-pulse rounded bg-muted" />
            <div className="mt-2 h-4 w-full animate-pulse rounded bg-muted/70" />
            <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-muted/70" />
          </li>
        ))}
      </ul>
    </section>
  );
}
