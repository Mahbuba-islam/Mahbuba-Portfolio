export default function BlogPostLoading() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="h-3 w-20 animate-pulse rounded bg-muted" />
      <div className="mt-8 h-3 w-32 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-12 w-3/4 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-5 w-full animate-pulse rounded bg-muted/70" />

      <div className="mt-10 space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-4 animate-pulse rounded bg-muted/70"
            style={{ width: `${70 + ((i * 7) % 30)}%` }}
          />
        ))}
      </div>
    </article>
  );
}
