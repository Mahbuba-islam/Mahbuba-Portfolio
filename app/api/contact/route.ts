import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short").max(5000),
});

const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "mahbubaislam7010@gmail.com";

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  let body: unknown;

  // 1. Parse JSON safely
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // 2. Validate with Zod
  const parsed = ContactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;

  // 3. Dev fallback (no email service)
  if (!apiKey) {
    console.warn("[contact] Missing RESEND_API_KEY — message logged only:", {
      name,
      email,
      message,
    });

    // In production this is almost certainly a misconfiguration; surface a clear error.
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured (missing RESEND_API_KEY). Contact the site owner directly.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      ok: true,
      delivered: false,
      error: "Email not sent (missing RESEND_API_KEY in development)",
    });
  }

  // 4. Send email via Resend
  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    // 5. Handle Resend failure
    if (error) {
      console.error("[contact] Resend error:", error);

      return NextResponse.json(
        {
          ok: false,
          error:
            typeof error === "object" && error && "message" in error
              ? String((error as { message?: unknown }).message)
              : "Failed to send email",
        },
        { status: 502 },
      );
    }

    // 6. Success response
    return NextResponse.json({
      ok: true,
      delivered: true,
    });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);

    return NextResponse.json(
      {
        ok: false,
        error: "Unexpected server error",
      },
      { status: 500 }
    );
  }
}

// 🔒 Prevent HTML injection in email body
function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}