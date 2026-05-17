const blocks = [
  "Discovery funcional",
  "Diseño de procesos HR",
  "Arquitectura funcional SAP",
  "Adopción operacional"
];

export function PositioningSection() {
  return (
    <section className="section-pad bg-deep-navy text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.1em] text-electric-cyan">Posicionamiento</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight md:text-5xl">Una consultora experta en procesos de Capital Humano</h2>
          <p className="mt-6 text-lg leading-8 text-white/74">
            Grupo Actual HR no se posiciona únicamente como un partner tecnológico, sino como una consultora experta en procesos de Capital Humano, capaz de diseñar el modelo funcional que dará sentido a la implementación de SAP HCM and SAP SuccessFactors y soluciones asociadas.
          </p>
          <p className="mt-6 rounded-xl border border-electric-cyan/28 bg-white/8 p-5 text-base font-black leading-7 text-white">
            No configuramos primero. Primero entendemos el negocio, diseñamos el proceso y luego habilitamos la tecnología.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block} className="rounded-xl border border-white/12 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:border-electric-cyan/45">
              <span className="block h-1 w-12 rounded-full bg-electric-cyan" />
              <h3 className="mt-6 text-xl font-black text-white">{block}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-white/68">
                Claridad ejecutiva para conectar necesidades del negocio, procesos, datos, tecnología y operación diaria.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
