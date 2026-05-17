const columns = [
  {
    title: "Servicios",
    items: ["HR Process Discovery", "HR Process Blueprint", "SAP HCM Advisory", "SAP SuccessFactors Advisory & Implementation", "Integration & Functional Architecture", "Change, Training & Adoption"]
  },
  {
    title: "Plataformas",
    items: ["SAP HCM", "SAP SuccessFactors", "Employee Central", "People Analytics", "Soluciones asociadas HR"]
  },
  {
    title: "Soluciones",
    items: ["HR Process Blueprint", "SuccessFactors Readiness", "Employee Central Blueprint", "SAP HCM to SuccessFactors Roadmap", "Digital HR Adoption Academy"]
  },
  {
    title: "Marca",
    items: ["Blueprint funcional para Capital Humano", "Consultoría de procesos", "Capital Humano", "Adopción operacional", "Trazabilidad end-to-end"]
  },
  {
    title: "Contacto",
    items: ["Solicitar diagnóstico", "Agendar reunión"]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071f39] py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="leading-none">
                <span className="block text-[0.65rem] font-black uppercase tracking-[0.24em] text-white/58">GRUPO</span>
                <span className="mt-1 block text-xl font-black text-white">Actual HR</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-semibold leading-7 text-white/66">
              Consultoría de procesos para transformar Capital Humano en la nube.
            </p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-electric-cyan">
              Blueprint funcional para Capital Humano
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black text-white">{column.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {column.items.map((item) => (
                    <li key={item} className="text-sm font-semibold leading-6 text-white/58">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs font-bold text-white/48">
          Grupo Actual HR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
