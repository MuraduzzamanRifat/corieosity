import { NextResponse } from "next/server";

// Native Next.js API route (runs on Vercel/Node). Validates + logs the lead and,
// if configured, forwards it into the Corieosity AIOS CRM.
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

    console.log("[contact] new lead", { ...lead, at: new Date().toISOString() });

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
