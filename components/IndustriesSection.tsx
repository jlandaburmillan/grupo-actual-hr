const industries = [
  "Retail",
  "Agroindustria",
  "Mineria",
  "Logistica",
  "Salud",
  "Educacion",
  "Manufactura",
  "Servicios externalizados",
  "Construccion",
  "Utilities",
  "Empresas con contratistas",
  "Empresas con mas de 1.000 trabajadores",
  "Empresas con operación distribuida",
  "Empresas con alta exigencia de cumplimiento laboral"
];

export function IndustriesSection() {
  return (
    <section className="section-pad bg-deep-navy text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.1em] text-electric-cyan">Industrias objetivo</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight md:text-5xl">Diseñado para organizaciones con procesos complejos de Capital Humano</h2>
            <p className="mt-6 text-lg leading-8 text-white/74">
              Grupo Actual HR está orientado a empresas medianas y grandes con procesos complejos de RR.HH., alta dotación, operación distribuida, contratistas, cumplimiento laboral y necesidades de trazabilidad.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <span key={industry} className="rounded-xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-black text-white transition hover:border-electric-cyan/45 hover:bg-white/12">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
