const audiences = [
  ["Gerente de RR.HH.", "Transforme sus procesos de Capital Humano con una mirada cloud, trazable y adoptada por la organizacion."],
  ["CIO / Tecnología", "Implemente SAP HCM and SAP SuccessFactors sobre una arquitectura funcional clara, segura, integrada y escalable."],
  ["CFO", "Reduzca reprocesos, riesgos laborales y costos administrativos mediante procesos claros, datos confiables y trazabilidad end-to-end."],
  ["Payroll / Remuneraciones", "Asegure datos consistentes de personas, estructura, asistencia, ausencias y novedades para procesos de nómina más controlados y auditables."],
  ["Personas y Cultura", "Digitalice talento, desempeno, aprendizaje y experiencia del colaborador con procesos modernos, simples y sostenibles."],
  ["Legal / Cumplimiento", "Diseñe procesos laborales con trazabilidad, evidencia, cumplimiento normativo y alineamiento con requerimientos de la Dirección del Trabajo."],
  ["Operaciones", "Conecte personas, turnos, asistencia y dotación en una operación laboral más visible, controlada y eficiente."]
];

export function AudienceMessages() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Audiencias</p>
          <h2 className="section-title mt-4">Una propuesta de valor para cada rol de decision</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([role, message]) => (
            <article key={role} className="premium-card p-6">
              <h3 className="text-xl font-black text-deep-navy">{role}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/70">{message}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
