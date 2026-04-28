import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const alt = "Blog post — Mahbuba Akter";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Mahbuba Akter — Blog";
  const description =
    post?.description ?? "Notes on full-stack web development.";
  const date = post
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "white",
          background:
            "radial-gradient(1100px 600px at 0% 0%, rgba(56,189,248,0.45), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(168,85,247,0.45), transparent 60%), #0a0a0a",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 22, opacity: 0.85 }}>mahbuba.dev / blog</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {date && (
            <div
              style={{
                fontSize: 20,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#a5b4fc",
              }}
            >
              {date}
            </div>
          )}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.08,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.8,
              maxWidth: 960,
              lineHeight: 1.35,
            }}
          >
            {description}
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#cbd5e1" }}>
          Mahbuba Akter · Junior Full Stack Web Developer
        </div>
      </div>
    ),
    size,
  );
}
