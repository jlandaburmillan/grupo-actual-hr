import { ArrowRight, ClipboardList, GitBranch, GraduationCap, Layers3, Network, Settings2 } from "lucide-react";

const services = [
  {
    title: "Descubrimiento funcional de procesos HR",
    icon: ClipboardList,
    text: "Levantamos la realidad actual de los procesos de Capital Humano, sistemas, roles, reglas, integraciones, datos y brechas operacionales.",
    items: ["Entrevistas funcionales", "Levantamiento AS-IS", "Mapa de procesos", "Reglas de negocio", "Cumplimiento laboral", "Dolor operacional", "Riesgos", "Brechas de adopción"]
  },
  {
    title: "Blueprint funcional de procesos HR",
    icon: Layers3,
    text: "Diseñamos el blueprint funcional que conecta negocio, procesos, cumplimiento, datos y tecnología.",
    items: ["TO-BE", "BPML", "Flujos end-to-end", "Roles y responsabilidades", "Puntos de control", "Integraciones", "Arquitectura funcional", "Roadmap de implementación"]
  },
  {
    title: "Consultoría funcional SAP HCM",
    icon: Settings2,
    text: "Acompañamos la estabilización, continuidad y evolución de procesos críticos sobre SAP HCM.",
    items: ["Administración de personal", "Estructura organizacional", "Datos maestros", "Tiempos y ausencias", "Soporte funcional", "Integraciones", "Roadmap hacia Cloud", "Gobierno de información"]
  },
  {
    title: "Consultoría e implementación SAP SuccessFactors",
    icon: Network,
    text: "Diseñamos e implementamos procesos Cloud sobre SAP SuccessFactors con foco en claridad, trazabilidad y adopción.",
    items: ["Employee Central", "Recruiting", "Onboarding", "Performance & Goals", "Learning", "Compensation", "Succession", "People Analytics", "Payroll Integration"]
  },
  {
    title: "Integración y arquitectura funcional",
    icon: GitBranch,
    text: "Diseñamos la arquitectura funcional e integraciones necesarias para conectar plataformas, datos y operación.",
    items: ["Datos maestros", "Modelo organizacional", "Integración SAP HCM", "Integración SuccessFactors", "Nómina", "Sistemas legados", "Middleware", "Controles y errores"]
  },
  {
    title: "Gestión del cambio, formación y adopción",
    icon: GraduationCap,
    text: "Acompañamos la adopción operacional para asegurar que las personas usen correctamente los procesos y plataformas.",
    items: ["Gestión del cambio", "Evaluación de impacto", "Capacitación por rol", "Key users", "Manuales", "Microlearning", "Comunicaciones", "Hiper-care"]
  }
];

export function Services() {
  return (
    <section id="servicios" className="section-pad bg-fiori-grey">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Servicios principales</p>
          <h2 className="section-title mt-4">Nuestras líneas de servicio</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, text, items }) => (
            <article key={title} className="premium-card p-7">
              <Icon className="text-electric-cyan" size={32} aria-hidden />
              <h3 className="mt-6 text-2xl font-black leading-tight text-deep-navy">{title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-graphite-blue/72">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full bg-fiori-grey px-3 py-2 text-xs font-black text-deep-navy">
                    {item}
                  </span>
                ))}
              </div>
              <a href="#contacto" className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-black text-sap-blue transition hover:gap-3 hover:text-deep-navy">
                Conversar sobre esta línea <ArrowRight size={16} aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
