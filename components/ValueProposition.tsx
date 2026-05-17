import { CheckCircle2 } from "lucide-react";

const items = [
  "Orientar procesos de negocio segun la realidad de cada cliente.",
  "Alinear la operación de Capital Humano con normativas laborales y requerimientos de la Dirección del Trabajo.",
  "Comprender el ciclo de vida completo del colaborador en distintas industrias.",
  "Aumentar la trazabilidad de los procesos de punta a punta.",
  "Diseñar procesos implementables sobre SAP HCM and SAP SuccessFactors.",
  "Reducir brechas entre la expectativa del negocio y la configuración tecnológica.",
  "Acompañar la adopción operacional posterior a la implementación."
];

export function ValueProposition() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <p className="eyebrow">Propuesta de valor</p>
          <h2 className="section-title mt-4">Transformamos Capital Humano desde el proceso de negocio</h2>
          <p className="section-copy mt-6">
            Grupo Actual HR ayuda a las organizaciones a transformar sus procesos de Capital Humano mediante una consultoría especializada que combina experiencia funcional, conocimiento normativo, visión tecnológica y capacidad de implementación sobre soluciones SAP.
          </p>
        </div>
        <div className="grid gap-3">
          {items.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl border border-deep-navy/10 bg-fiori-grey p-4 transition hover:border-electric-cyan/40 hover:bg-white hover:shadow-card">
              <CheckCircle2 className="mt-0.5 shrink-0 text-electric-cyan" size={20} aria-hidden />
              <p className="text-sm font-bold leading-7 text-graphite-blue">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
