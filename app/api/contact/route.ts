import { NextResponse } from "next/server";
import { integrationTargets } from "@/content/site";
import { validateContactPayload, type ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<ContactPayload>;
  const validation = validateContactPayload(payload);

  if (!validation.valid) {
    return NextResponse.json(
      {
        ok: false,
        errors: validation.errors
      },
      { status: 400 }
    );
  }

  // Integration point prepared for: Resend, HubSpot, Airtable, Google Sheets or a CRM to define.
  // Use CONTACT_WEBHOOK_URL or provider-specific environment variables when the commercial flow is selected.
  console.info("Grupo Actual HR contact request", {
    nombre: payload.nombre,
    empresa: payload.empresa,
    email: payload.email,
    telefono: payload.telefono,
    interes: payload.interes,
    integrationTargets,
    receivedAt: new Date().toISOString()
  });

  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          source: "grupo-actual-hr-web",
          payload,
          integrationTargets,
          receivedAt: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error("Contact webhook delivery failed", error);
    }
  }

  return NextResponse.json({ ok: true });
}
