import { NextResponse } from "next/server";
import { integrationTargets, siteConfig } from "@/content/site";
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

  const contact = payload as ContactPayload;

  // Integration point prepared for: Resend, HubSpot, Airtable, Google Sheets or a CRM to define.
  // Use CONTACT_WEBHOOK_URL or provider-specific environment variables when the commercial flow is selected.
  console.info("Grupo Actual HR contact request", {
    nombre: contact.nombre,
    empresa: contact.empresa,
    email: contact.email,
    telefono: contact.telefono,
    interes: contact.interes,
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
          payload: contact,
          integrationTargets,
          receivedAt: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error("Contact webhook delivery failed", error);
    }
  }

  const mailtoSubject = `Solicitud de diagnostico - ${contact.empresa}`;
  const mailtoBody = [
    "Nueva solicitud desde la app web de Grupo Actual HR",
    "",
    `Nombre: ${contact.nombre}`,
    `Empresa: ${contact.empresa}`,
    `Email: ${contact.email}`,
    `Telefono: ${contact.telefono || "No informado"}`,
    `Interes principal: ${contact.interes}`,
    "",
    "Necesidad:",
    contact.necesidad
  ].join("\n");

  const fallbackHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

  return NextResponse.json({
    ok: true,
    delivered: Boolean(process.env.CONTACT_WEBHOOK_URL),
    fallback: process.env.CONTACT_WEBHOOK_URL
      ? null
      : {
          type: "mailto",
          href: fallbackHref
        }
  });
}
