import { CheckCircle2, Compass, FileCheck2, Layers3, ShieldCheck, Workflow } from "lucide-react";

const differentiators = [
  {
    title: "Blueprint funcional para Capital Humano",
    icon: Workflow,
    text: "Diseñamos el plano funcional de los procesos de Capital Humano antes de llevarlos a la tecnología."
  },
  {
    title: "Consultoria desde el negocio",
    icon: Compass,
    text: "Asesoramos desde la realidad operacional, normativa, industria, estructura y ciclo de vida del colaborador."
  },
  {
    title: "Especializacion SAP HR",
    icon: Layers3,
    text: "Foco en SAP HCM and SAP SuccessFactors, Employee Central, talento, desempeño, aprendizaje, compensación, nómina e integración."
  },
  {
    title: "Cumplimiento y trazabilidad",
    icon: ShieldCheck,
    text: "Integramos normativa laboral, procesos asociados a la Dirección del Trabajo, evidencia, auditoría y control end-to-end."
  },
  {
    title: "Adopción operacional",
    icon: CheckCircle2,
    text: "Diseñamos procesos pensando en RR.HH., líderes, payroll, operaciones, supervisores y colaboradores."
  },
  {
    title: "Claridad metodologica",
    icon: FileCheck2,
    text: "Evitamos mensajes genericos. Explicamos que hacemos, como lo hacemos y por que agrega valor."
  }
];

export function Differentiators() {
  return (
    <section id="adopcion" className="section-pad bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Diferenciadores</p>
          <h2 className="section-title mt-4">Por que Grupo Actual HR?</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ title, icon: Icon, text }) => (
            <article key={title} className="premium-card p-7">
              <Icon className="text-electric-cyan" size={30} aria-hidden />
              <h3 className="mt-6 text-xl font-black leading-tight text-deep-navy">{title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
