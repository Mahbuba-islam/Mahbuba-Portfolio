import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short").max(5000),
});

export async function POST(request: NextRequest) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // TODO: integrate an email provider (Resend, SES, etc.) to deliver the message.
  // For now we just log the validated payload server-side.
  console.info("[contact] new message:", parsed.data);

  return NextResponse.json({ ok: true });
}
