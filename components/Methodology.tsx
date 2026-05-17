const steps = [
  ["Descubrir", "Entendemos la realidad operacional, normativa, organizacional, tecnológica y de datos."],
  ["Mapear", "Mapeamos procesos AS-IS, brechas, riesgos, actores, sistemas, decisiones y puntos de control."],
  ["Diseñar", "Diseñamos procesos TO-BE, BPML, reglas, integraciones y arquitectura funcional."],
  ["Habilitar", "Habilitamos SAP HCM and SAP SuccessFactors y soluciones asociadas sobre un diseño validado."],
  ["Adoptar", "Acompañamos capacitación, comunicaciones, key users, hiper-care y adopción operacional."],
  ["Mejorar", "Medimos adopción, resolvemos brechas y evolucionamos procesos de Capital Humano."]
];

export function Methodology() {
  return (
    <section id="metodologia" className="section-pad bg-fiori-grey">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Metodología Blueprint</p>
          <h2 className="section-title mt-4">Nuestra metodología Blueprint</h2>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-8 right-8 top-8 hidden h-px bg-electric-cyan/70 lg:block" aria-hidden="true" />
          <div className="grid gap-5 lg:grid-cols-6">
            {steps.map(([title, text], index) => (
              <article key={title} className="premium-card p-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-sm font-black text-sap-blue ring-4 ring-electric-cyan/18">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-black text-deep-navy">{title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
