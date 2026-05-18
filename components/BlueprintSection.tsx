const steps = [
  ["Entender", "Levantamos la realidad operacional, normativa, organizacional y tecnológica de cada cliente."],
  ["Diseñar", "Construimos procesos AS-IS, TO-BE, reglas, roles, flujos, integraciones y puntos de control."],
  ["Implementar", "Habilitamos SAP HCM and SAP SuccessFactors sobre una arquitectura funcional clara."],
  ["Adoptar", "Acompañamos la adopción operacional para asegurar uso real, trazabilidad y sostenibilidad."]
];

export function BlueprintSection() {
  return (
    <section id="blueprint" className="section-pad bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Ruta Blueprint</p>
          <h2 className="section-title mt-4">Blueprint funcional para Capital Humano</h2>
          <p className="section-copy mt-6">
            El plano funcional de los procesos de Capital Humano antes de llevarlos a la tecnología. Este eje posiciona a Grupo Actual HR como una firma que no solo implementa plataformas, sino que diseña el modelo de negocio, funcional y operativo que esas plataformas deberán soportar.
          </p>
        </div>

        <div className="relative mt-14 rounded-2xl border border-deep-navy/10 bg-fiori-grey p-5 md:p-8">
          <div className="absolute left-12 right-12 top-[4.8rem] hidden h-px bg-electric-cyan/70 lg:block" aria-hidden="true" />
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article key={title} className="premium-card bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-deep-navy text-sm font-black text-white ring-4 ring-electric-cyan/18">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-2xl font-black text-deep-navy">{title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
