import { FileText, Network } from "lucide-react";

const cards = [
  {
    title: "Procesos",
    icon: FileText,
    text: "Toda transformación tecnológica debe partir desde una comprensión clara del negocio, sus flujos, reglas, normativas, roles y decisiones operacionales."
  },
  {
    title: "Consultoria",
    icon: Network,
    text: "El valor está en asesorar, diseñar y acompañar al cliente desde el proceso de negocio, no solo desde la configuración del sistema."
  }
];

export function BrandEssence() {
  return (
    <section className="section-pad soft-gradient">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">Esencia de marca</p>
          <h2 className="section-title mt-4">Diseñamos procesos antes de implementar tecnología</h2>
          <p className="section-copy mt-6">
            Grupo Actual HR nace desde una convicción central: antes de implementar tecnología, es necesario entender cómo opera realmente el negocio, cómo se gestionan las personas, qué procesos soportan el ciclo de vida del colaborador y qué nivel de trazabilidad, cumplimiento y eficiencia requiere cada organización.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map(({ title, icon: Icon, text }) => (
            <article key={title} className="premium-card p-7">
              <Icon className="text-electric-cyan" size={30} aria-hidden />
              <h3 className="mt-6 text-2xl font-black text-deep-navy">{title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/72">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
