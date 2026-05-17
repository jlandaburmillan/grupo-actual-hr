export const siteConfig = {
  name: "Grupo Actual HR",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://grupoactualhr.com",
  email: "contacto@grupoactualhr.com",
  logoLines: ["GRUPO", "Actual HR"],
  concept: "Blueprint funcional para Capital Humano",
  visualTerritory: "Ruta Blueprint",
  strategicPhrase:
    "Antes de implementar, entendemos. Antes de configurar, diseñamos. Antes del sistema, está el proceso.",
  description:
    "Consultoría de procesos para transformar Capital Humano en la nube. Diseñamos el Discovery, los procesos y la arquitectura funcional para implementar SAP HCM and SAP SuccessFactors con trazabilidad, cumplimiento y adopción real.",
  keywords: [
    "Grupo Actual HR",
    "Blueprint funcional",
    "Capital Humano",
    "SAP HCM",
    "SAP SuccessFactors",
    "Discovery funcional",
    "consultoría procesos HR",
    "transformación digital RRHH",
    "arquitectura funcional HR"
  ]
} as const;

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Brochure", href: "/brochure" },
  { label: "Panel", href: "/panel" },
  { label: "Contacto", href: "/contacto" }
] as const;

export const homeAnchors = [
  { label: "Blueprint", href: "/#blueprint" },
  { label: "SAP HCM", href: "/#sap-hcm" },
  { label: "SAP SuccessFactors", href: "/#successfactors" },
  { label: "Adopción", href: "/#adopcion" }
] as const;

export const contactInterests = [
  "Discovery funcional",
  "Blueprint de procesos HR",
  "SAP HCM",
  "SAP SuccessFactors",
  "Integraciones",
  "Adopción y gestión del cambio",
  "Brochure / reunión comercial"
] as const;

export const integrationTargets = [
  "Resend",
  "HubSpot",
  "Airtable",
  "Google Sheets",
  "CRM a definir"
] as const;

export const brochure = {
  title: "Brochure ejecutivo Grupo Actual HR",
  description:
    "Resumen comercial del enfoque Blueprint funcional para Capital Humano, servicios, soluciones y modelo de trabajo.",
  downloadLabel: "Solicitar brochure",
  note:
    "La página queda preparada para publicar un PDF final o capturar solicitudes mediante formulario."
} as const;
