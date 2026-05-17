import type { Metadata } from "next";
import { CheckCircle2, CircleDashed, Rocket, Settings2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Panel de avance",
  description:
    "Panel de avance para evolucionar Grupo Actual HR hacia una app web responsiva, publicable y mantenible.",
  path: "/panel"
});

const completed = [
  "Proyecto base revisado en grupo-actual-hr-final",
  "Build inicial validado antes de modificar",
  "Contenido centralizado en content/site.ts",
  "Rutas preparadas: servicios, soluciones, contacto, brochure y privacidad",
  "Formulario real con validación y endpoint /api/contact",
  "Integraciones futuras preparadas: Resend, HubSpot, Airtable, Google Sheets y CRM",
  "SEO técnico agregado: metadata, Open Graph, Twitter Cards, sitemap y robots",
  "Build final validado con 12 rutas generadas"
];

const nextSteps = [
  "Reiniciar el servidor local para ver la versión actualizada",
  "Revisar visualmente home, mobile, menú, contacto y nuevas rutas",
  "Conectar formulario al canal comercial elegido",
  "Publicar primera versión en Vercel",
  "Conectar dominio final y reemplazar brochure por PDF definitivo"
];

export default function PanelPage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="section-pad blueprint-grid bg-fiori-grey">
          <div className="section-shell">
            <div className="max-w-4xl">
              <p className="eyebrow">Panel de avance</p>
              <h1 className="section-title mt-4">Evolución de Grupo Actual HR a app web responsiva</h1>
              <p className="section-copy mt-6">
                Este panel resume qué ya quedó construido, qué falta revisar y cómo avanzamos hacia una versión publicable en Vercel.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
              <section className="premium-card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-electric-cyan" size={28} aria-hidden />
                  <h2 className="text-2xl font-black text-deep-navy">Completado</h2>
                </div>
                <div className="mt-7 grid gap-3">
                  {completed.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-deep-navy/10 bg-fiori-grey p-4">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-electric-cyan" size={18} aria-hidden />
                      <p className="text-sm font-bold leading-6 text-graphite-blue">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <aside className="grid gap-6">
                <section className="premium-card bg-deep-navy p-6 text-white sm:p-8">
                  <div className="flex items-center gap-3">
                    <Rocket className="text-electric-cyan" size={28} aria-hidden />
                    <h2 className="text-2xl font-black">Siguiente tramo</h2>
                  </div>
                  <div className="mt-7 grid gap-3">
                    {nextSteps.map((item) => (
                      <div key={item} className="flex gap-3 rounded-xl border border-white/12 bg-white/8 p-4">
                        <CircleDashed className="mt-0.5 shrink-0 text-electric-cyan" size={18} aria-hidden />
                        <p className="text-sm font-bold leading-6 text-white/78">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="premium-card p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Settings2 className="text-electric-cyan" size={28} aria-hidden />
                    <h2 className="text-2xl font-black text-deep-navy">Estado técnico</h2>
                  </div>
                  <dl className="mt-6 grid gap-4 text-sm font-bold text-graphite-blue/72">
                    <div>
                      <dt className="text-deep-navy">Build</dt>
                      <dd className="mt-1">Validado correctamente con npm run build.</dd>
                    </div>
                    <div>
                      <dt className="text-deep-navy">Servidor local</dt>
                      <dd className="mt-1">Debe reiniciarse para cargar la versión actualizada.</dd>
                    </div>
                    <div>
                      <dt className="text-deep-navy">Deploy</dt>
                      <dd className="mt-1">Listo para conectar a Vercel después de revisión visual.</dd>
                    </div>
                  </dl>
                </section>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
