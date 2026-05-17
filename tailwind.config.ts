import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#0A3761",
        "deep-sap-navy": "#0A3761",
        "sap-blue": "#0A6ED1",
        "electric-cyan": "#00B8D9",
        "cloud-white": "#FFFFFF",
        "fiori-grey": "#F5F7FA",
        "graphite-blue": "#1D2D3E"
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 46px rgba(29, 45, 62, 0.08)",
        soft: "0 28px 90px rgba(10, 55, 97, 0.18)",
        enterprise: "0 24px 80px rgba(10, 55, 97, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
