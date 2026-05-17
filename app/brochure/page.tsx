import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { brochure } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Brochure",
  description: brochure.description,
  path: "/brochure"
});

export default function BrochurePage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="section-pad blueprint-grid bg-fiori-grey">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">Brochure</p>
              <h1 className="section-title mt-4">{brochure.title}</h1>
              <p className="section-copy mt-6">{brochure.description}</p>
              <p className="mt-6 rounded-xl border border-deep-navy/10 bg-white p-5 text-base font-black leading-7 text-deep-navy">
                {brochure.note}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
