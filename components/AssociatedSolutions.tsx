const items = [
  "Time & Attendance",
  "Scheduling",
  "Absence Management",
  "Labor Forecasting",
  "Integración con SAP SuccessFactors",
  "Integración con SAP HCM",
  "Integración con nómina",
  "Reglas laborales y cumplimiento"
];

export function AssociatedSolutions() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Soluciones asociadas</p>
            <h2 className="section-title mt-4">Soluciones asociadas para una operación HR integrada</h2>
            <p className="section-copy mt-6">
              Cuando el proceso lo requiere, Grupo Actual HR integra soluciones asociadas al ecosistema SAP y Capital Humano, incluyendo herramientas de tiempo, asistencia, turnos, nómina, control documental, capacitación y adopción.
            </p>
            <p className="mt-6 rounded-xl bg-deep-navy p-5 text-base font-black leading-7 text-white">
              Las soluciones asociadas deben responder al blueprint funcional, no al revés.
            </p>
          </div>
          <div className="premium-card p-7">
            <h3 className="text-2xl font-black text-deep-navy">WorkForce Software como solucion asociada</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <span key={item} className="rounded-lg bg-fiori-grey px-4 py-3 text-sm font-black text-graphite-blue">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
