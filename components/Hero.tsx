import { ArrowRight, CheckCircle2 } from "lucide-react";

const nodes = ["Discovery", "Diseño del proceso", "Solución tecnológica", "Adopción operacional"];
const layers = ["Negocio", "Proceso", "Tecnología", "Adopción"];
const portlets = [
  {
    title: "El colaborador en el centro de la gestión",
    items: ["Ciclo de vida del colaborador", "Adopción operacional", "Experiencia del colaborador", "Gestión del cambio"]
  },
  {
    title: "Cumplimiento y trazabilidad de procesos HR",
    items: ["Consultoría de procesos", "Discovery funcional", "Diseño de procesos de negocio", "Arquitectura funcional HR", "Cumplimiento normativo laboral", "Procesos end-to-end", "Modelo operativo HR", "Blueprint funcional"]
  },
  {
    title: "Automatización de procesos HR",
    items: ["Gobierno de datos de personas", "Optimización de procesos de Capital Humano"]
  },
  {
    title: "Sistemas",
    items: ["SAP HCM", "SAP SuccessFactors"]
  },
  {
    title: "De lo que no se habla",
    items: ["Asignación de KUs", "Datos maestros", "Escenarios de prueba", "Ruta crítica", "Pruebas integrales", "Documentación"]
  }
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-deep-navy pt-[calc(var(--header-height)+2rem)] text-white">
      <div className="absolute inset-0 dark-blueprint-grid opacity-55" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[640px] items-start gap-10 pb-16 pt-8 sm:pb-20 lg:grid-cols-[1fr_0.92fr] lg:pb-24 lg:pt-10">
        <div className="lg:pt-8">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-electric-cyan">
            Plano funcional de procesos de Capital Humano
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] sm:text-5xl md:text-7xl">
            Consultoría de procesos para transformar Capital Humano en la nube
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
            Diseñamos el Discovery, los procesos y la arquitectura funcional para implementar SAP HCM and SAP SuccessFactors con trazabilidad, cumplimiento y adopción real.
          </p>
          <p className="mt-5 max-w-2xl border-l-4 border-electric-cyan pl-5 text-base font-extrabold leading-7 text-white">
            Antes de implementar, entendemos. Antes de configurar, diseñamos. Antes del sistema, está el proceso.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contacto?interes=Discovery%20funcional#contacto"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-sap-blue px-5 py-3 text-sm font-black text-white shadow-[0_18px_42px_rgba(10,110,209,0.28)] transition hover:-translate-y-0.5 hover:bg-white hover:text-deep-navy"
            >
              Solicitar diagnóstico de procesos HR
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href="#metodologia"
              className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Conocer nuestra metodología
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="premium-card relative rounded-[1.5rem] border-white/20 bg-white p-4 text-graphite-blue shadow-soft">
            <div className="blueprint-panel rounded-[1.25rem] p-5 text-white">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.08em] text-electric-cyan">Ruta Blueprint</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Arquitectura funcional HR</h2>
                </div>
                <span className="rounded-lg border border-electric-cyan/40 px-3 py-2 text-center text-xs font-black text-electric-cyan">
                  BPML
                  <span className="mt-1 block text-[0.62rem] font-bold normal-case tracking-normal text-white/70">(Maestro de Procesos)</span>
                </span>
              </div>

              <div className="relative mt-8 rounded-xl border border-white/10 bg-white/10 p-5">
                <div className="absolute left-10 right-10 top-[3.1rem] hidden h-px bg-electric-cyan/70 md:block" aria-hidden="true" />
                <div className="grid gap-4 md:grid-cols-4">
                  {nodes.map((node, index) => (
                    <div key={node} className="relative">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-electric-cyan/70 bg-deep-navy text-xs font-black text-electric-cyan">
                        {index + 1}
                      </span>
                      <p className="mt-4 text-sm font-black leading-snug text-white">{node}</p>
                      <p className="mt-2 text-xs font-bold leading-5 text-white/70">
                        {index === 0
                          ? "Realidad operacional"
                          : index === 1
                            ? "Reglas, roles y flujos"
                            : index === 2
                              ? "SAP HCM and SuccessFactors"
                              : "Uso real y sostenibilidad"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {layers.map((layer) => (
                  <div key={layer} className="rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-electric-cyan">Capa</p>
                    <p className="mt-2 text-sm font-black text-white">{layer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3">
                {portlets.map((portlet) => (
                  <div key={portlet.title} className="rounded-xl border border-white/10 bg-white p-4 text-deep-navy">
                    <p className="text-sm font-black leading-snug">{portlet.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {portlet.items.map((item) => (
                        <span key={item} className="rounded-full bg-fiori-grey px-3 py-2 text-[0.7rem] font-black leading-none text-deep-navy">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-deep-navy/10 bg-fiori-grey p-4">
              <p className="text-xs font-black uppercase tracking-[0.1em] text-sap-blue">Trazabilidad funcional</p>
              <div className="mt-4 grid gap-3">
                {["AS-IS validado", "TO-BE diseñado", "Controles y cumplimiento"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-white px-3 py-3 text-sm font-black text-deep-navy">
                    <CheckCircle2 className="shrink-0 text-electric-cyan" size={18} aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
