import { NextResponse } from "next/server";

// Accepts contact/lead submissions. Currently validates + logs server-side so no
// lead is lost. To deliver: wire an email/CRM provider here (e.g. Resend, HubSpot)
// behind an env var — a single call in the marked spot below.
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const email = String(body.email ?? "");
    if (!email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "invalid email" },
        { status: 400 },
      );
    }

    // >>> Connect email/CRM delivery here (reads process.env.RESEND_API_KEY etc.)
    console.log("[contact] new lead", {
      name: body.name,
      email,
      company: body.company,
      website: body.website,
      message: body.message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
