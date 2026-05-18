const solutions = [
  {
    title: "Blueprint funcional de procesos HR",
    objective: "Diagnóstico y diseño de procesos de Capital Humano para preparar una implementación SAP HCM o SAP SuccessFactors.",
    deliverables: ["Mapa AS-IS", "BPML", "Brechas", "Normativa", "Riesgos", "TO-BE", "Roadmap", "Estrategia de adopción"]
  },
  {
    title: "Preparación para SAP SuccessFactors",
    objective: "Preparar a empresas que evalúan implementar o migrar a SAP SuccessFactors.",
    deliverables: ["Madurez digital", "Datos maestros", "Modelo organizacional", "Roadmap de módulos", "Gobierno funcional", "Caso de negocio", "Plan de implementación"]
  },
  {
    title: "Blueprint de Employee Central",
    objective: "Diseñar el modelo funcional de Employee Central antes de su implementación.",
    deliverables: ["Modelo organizacional", "Empleados", "Posiciones", "Eventos", "Workflows", "Seguridad", "Datos maestros", "Integraciones base"]
  },
  {
    title: "Roadmap SAP HCM hacia SAP SuccessFactors",
    objective: "Diseñar una hoja de ruta para evolucionar desde SAP HCM hacia SAP SuccessFactors.",
    deliverables: ["Inventario funcional", "Diagnóstico de brechas", "Mapa de datos", "Procesos críticos", "Riesgos de transición", "Roadmap por fases", "Estrategia de adopción"]
  },
  {
    title: "Academia de adopción digital HR",
    objective: "Academia de adopción para usuarios de SAP HCM and SAP SuccessFactors y soluciones asociadas.",
    deliverables: ["Rutas de aprendizaje", "Capacitación por rol", "Manuales", "Videos cortos", "Evaluaciones", "Certificación", "Refuerzo post go-live"]
  }
];

export function PackagedSolutions() {
  return (
    <section className="section-pad bg-fiori-grey">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Soluciones empaquetadas</p>
          <h2 className="section-title mt-4">Soluciones empaquetadas para acelerar la transformación de Capital Humano</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.title} className="premium-card p-7">
              <h3 className="text-2xl font-black text-deep-navy">{solution.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/70">{solution.objective}</p>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.1em] text-sap-blue">Entregables</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {solution.deliverables.map((item) => (
                  <span key={item} className="rounded-full bg-fiori-grey px-3 py-2 text-xs font-black text-deep-navy">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
