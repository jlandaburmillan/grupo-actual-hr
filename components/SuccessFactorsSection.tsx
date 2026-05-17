import { ArrowRight } from "lucide-react";

const modules = [
  "Employee Central",
  "Recruiting",
  "Onboarding",
  "Performance & Goals",
  "Learning",
  "Compensation",
  "Succession",
  "People Analytics",
  "Payroll Integration"
];

export function SuccessFactorsSection() {
  return (
    <section id="successfactors" className="section-pad blueprint-grid bg-fiori-grey">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">SAP SuccessFactors</p>
          <h2 className="section-title mt-4">SAP SuccessFactors: transformación HR Cloud con sentido de negocio</h2>
          <p className="section-copy mt-6">
            Grupo Actual HR diseña e implementa SAP SuccessFactors desde el proceso de Capital Humano, asegurando que cada módulo responda a una necesidad real de negocio, cumplimiento, operación y experiencia del colaborador.
          </p>
          <p className="mt-6 rounded-xl border border-electric-cyan/30 bg-white p-5 text-base font-black leading-7 text-deep-navy">
            Modernizar Capital Humano no es activar módulos. Es diseñar procesos integrados, simples, trazables y adoptados.
          </p>
          <a href="#contacto" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-lg bg-deep-navy px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-sap-blue">
            Diseñar roadmap SAP SuccessFactors <ArrowRight size={18} aria-hidden />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <article key={module} className="premium-card p-5">
              <span className="block h-1 w-10 rounded-full bg-electric-cyan" />
              <h3 className="mt-5 text-lg font-black text-deep-navy">{module}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-graphite-blue/68">
                Diseño funcional, datos, controles, workflows, roles y adopción por audiencia.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
