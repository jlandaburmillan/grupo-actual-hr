import { ArrowRight, CheckCircle2 } from "lucide-react";

const items = [
  "Administración y Cálculo de Nómina",
  "Gestión de Bandas Salariales",
  "Gestión de Funciones y Posiciones",
  "Actualización de Información del Colaborador",
  "Cambios de Posiciones",
  "Contratación",
  "Transferencia entre empresas",
  "Ausentismos y Evaluación de Tiempos",
  "Crear Planes de Beneficios",
  "Gestión de Incentivos, Reconocimiento y Recompensa",
  "Estructura organizacional",
  "Integración con nómina",
  "Roadmap hacia el mundo Cloud y SAP SuccessFactors"
];

export function SapHcmSection() {
  return (
    <section id="sap-hcm" className="section-pad bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">SAP HCM</p>
          <h2 className="section-title mt-4">SAP HCM: continuidad, control y evolución</h2>
          <p className="section-copy mt-6">
            SAP HCM sigue sosteniendo procesos críticos de Capital Humano en muchas organizaciones. Grupo Actual HR ayuda a entender, ordenar, documentar y evolucionar esos procesos hacia modelos más claros, integrados y preparados para la nube.
          </p>
          <a href="#contacto" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-lg bg-sap-blue px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-deep-navy">
            Evaluar procesos SAP HCM <ArrowRight size={18} aria-hidden />
          </a>
        </div>
        <div className="grid gap-3">
          {items.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl border border-deep-navy/10 bg-fiori-grey p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-electric-cyan" size={20} aria-hidden />
              <p className="text-sm font-bold leading-7 text-graphite-blue">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
