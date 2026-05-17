import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Servicios",
  description:
    "Servicios de consultoría funcional para Discovery, Blueprint de procesos HR, SAP HCM and SAP SuccessFactors, integraciones y adopción operacional.",
  path: "/servicios"
});

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="section-pad blueprint-grid bg-fiori-grey">
          <div className="section-shell max-w-4xl">
            <p className="eyebrow">Servicios</p>
            <h1 className="section-title mt-4">Consultoría funcional para transformar Capital Humano desde el proceso</h1>
            <p className="section-copy mt-6">
              Una oferta estructurada para entender, diseñar, implementar y sostener procesos de Capital Humano preparados para SAP HCM and SAP SuccessFactors.
            </p>
          </div>
        </section>
        <Services />
        <Methodology />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
