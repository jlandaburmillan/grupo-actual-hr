import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contacto",
  description:
    "Solicita una conversación con Grupo Actual HR para evaluar Discovery funcional, Blueprint de procesos HR, SAP HCM and SAP SuccessFactors o adopción.",
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
