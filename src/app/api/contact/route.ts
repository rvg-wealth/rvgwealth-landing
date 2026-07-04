import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  interest: z.enum(["foundation", "growth", "apex", "general"]),
  message: z.string().trim().min(10).max(5000),
  // Honeypot — humans never see this field; bots fill it.
  company: z.string().max(0).optional().or(z.literal("")),
});

const interestLabels: Record<string, string> = {
  foundation: "Foundation Stage",
  growth: "Growth Stage",
  apex: "Apex Stage",
  general: "General Enquiry",
};

// Naive per-IP rate limit. Resets on redeploy/cold start — good enough
// to stop form spam without external infra.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  const { name, email, interest, message, company } = parsed.data;

  // Honeypot tripped — pretend success so bots don't adapt.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "enquiries@rvgwealth.com",
    to: process.env.CONTACT_TO_EMAIL ?? "rvgwealth@gmail.com",
    replyTo: email,
    subject: `New enquiry — ${interestLabels[interest]} — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interested in: ${interestLabels[interest]}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please try again or call us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
