import { NextResponse } from "next/server";

// Accepts contact/lead submissions. Validates + logs server-side so no lead is
// lost, and (if configured) forwards the lead into the Corieosity AIOS CRM.
// To also deliver email, wire a provider (e.g. Resend, HubSpot) at the marked spot.
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

    const lead = {
      name: body.name,
      email,
      company: body.company,
      website: body.website,
      message: body.message,
      source: "website",
    };

    // >>> Connect email/CRM delivery here (reads process.env.RESEND_API_KEY etc.)
    console.log("[contact] new lead", { ...lead, at: new Date().toISOString() });

    // Forward into the AIOS CRM if configured (fire-and-forget; never blocks the reply).
    if (process.env.AIOS_WEBHOOK_URL) {
      void fetch(process.env.AIOS_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-aios-secret": process.env.AIOS_WEBHOOK_SECRET ?? "",
        },
        body: JSON.stringify(lead),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
