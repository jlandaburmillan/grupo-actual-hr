import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function CTASection() {
  return (
    <section id="contacto" className="section-pad bg-deep-navy text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.1em] text-electric-cyan">Contacto</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight md:text-6xl">Antes de implementar tecnología, diseñemos el proceso</h2>
          <p className="mt-7 text-lg leading-9 text-white/76">
            Cada organización tiene una realidad distinta: sistemas heredados, reglas locales, procesos manuales, integraciones críticas, cumplimiento laboral, datos dispersos y usuarios con distintos niveles de madurez digital. En Grupo Actual HR ayudamos a convertir esa complejidad en procesos de Capital Humano claros, trazables, adoptados y preparados para SAP HCM and SAP SuccessFactors.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:contacto@grupoactualhr.com" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-sap-blue px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-deep-navy">
              Solicitar diagnóstico de procesos HR <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#blueprint" className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/18 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Conocer soluciones empaquetadas
            </a>
          </div>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-electric-cyan">
            Grupo Actual HR · Blueprint funcional para Capital Humano
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
