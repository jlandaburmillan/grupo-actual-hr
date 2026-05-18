import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AssociatedSolutions } from "@/components/AssociatedSolutions";
import { PackagedSolutions } from "@/components/PackagedSolutions";
import { SuccessFactorsSection } from "@/components/SuccessFactorsSection";
import { SapHcmSection } from "@/components/SapHcmSection";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Soluciones",
  description:
    "Soluciones empaquetadas para Blueprint funcional, readiness de SAP SuccessFactors, Employee Central, roadmap SAP HCM y adopción digital HR.",
  path: "/soluciones"
});

export default function SolucionesPage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="section-pad bg-deep-navy text-white">
          <div className="section-shell max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.1em] text-electric-cyan">Soluciones</p>
            <h1 className="mt-4 text-balance text-4xl font-black leading-tight md:text-6xl">
              Rutas comerciales para ordenar decisiones antes de implementar tecnología
            </h1>
            <p className="mt-7 text-lg leading-9 text-white/75">
              Cada solución empaquetada traduce la Ruta Blueprint en entregables claros, trazables y accionables para equipos de negocio, tecnología y Capital Humano.
            </p>
          </div>
        </section>
        <PackagedSolutions />
        <SapHcmSection />
        <SuccessFactorsSection />
        <AssociatedSolutions />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
