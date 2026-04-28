import { ImageResponse } from "next/og";

export const alt = "Mahbuba Akter — Junior Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            "radial-gradient(1100px 600px at 0% 0%, rgba(99,102,241,0.55), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(168,85,247,0.45), transparent 60%), #0a0a0a",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 24, opacity: 0.85 }}>mahbuba.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#a5b4fc",
            }}
          >
            Portfolio · New York
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Mahbuba Akter
          </div>
          <div style={{ fontSize: 36, opacity: 0.85, maxWidth: 950 }}>
            Junior Full Stack Web Developer — building modern, scalable,
            real-time web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 22,
            color: "#cbd5e1",
          }}
        >
          {["Next.js", "TypeScript", "Node", "Prisma", "Socket.io"].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
