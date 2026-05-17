import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacidad",
  description:
    "Política de privacidad para formularios comerciales de Grupo Actual HR.",
  path: "/privacidad"
});

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="section-pad bg-white">
          <div className="section-shell max-w-3xl">
            <p className="eyebrow">Privacidad</p>
            <h1 className="section-title mt-4">Política de privacidad</h1>
            <div className="mt-8 grid gap-6 text-base font-semibold leading-8 text-graphite-blue/76">
              <p>
                Grupo Actual HR utiliza los datos enviados en sus formularios únicamente para responder solicitudes comerciales, coordinar reuniones y evaluar necesidades relacionadas con procesos de Capital Humano.
              </p>
              <p>
                Los datos solicitados pueden incluir nombre, empresa, email, teléfono opcional, necesidad e interés principal. Estos datos no se venden ni se comparten con terceros para fines ajenos a la relación comercial.
              </p>
              <p>
                La app queda preparada para integraciones futuras con Resend, HubSpot, Airtable, Google Sheets o un CRM a definir. Cuando se active una integración, deberá revisarse esta política según el proveedor seleccionado.
              </p>
              <p>
                Para solicitar actualización o eliminación de datos, escribe a{" "}
                <a className="font-black text-sap-blue" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
