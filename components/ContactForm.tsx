"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactInterests } from "@/content/site";

type SubmitState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setState("error");
      setMessage("Revisa los datos e intenta nuevamente.");
      return;
    }

    form.reset();
    setState("sent");
    setMessage("Solicitud recibida. El siguiente paso es conectar este flujo al CRM o email transaccional.");
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card bg-white p-5 text-graphite-blue sm:p-6">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-black text-deep-navy">
            Nombre
            <input
              name="nombre"
              className="focus-ring rounded-lg border border-deep-navy/14 bg-fiori-grey px-4 py-3 font-medium"
              placeholder="Tu nombre"
              autoComplete="name"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-black text-deep-navy">
            Empresa
            <input
              name="empresa"
              className="focus-ring rounded-lg border border-deep-navy/14 bg-fiori-grey px-4 py-3 font-medium"
              placeholder="Nombre de empresa"
              autoComplete="organization"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-black text-deep-navy">
            Email
            <input
              name="email"
              type="email"
              className="focus-ring rounded-lg border border-deep-navy/14 bg-fiori-grey px-4 py-3 font-medium"
              placeholder="nombre@empresa.com"
              autoComplete="email"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-black text-deep-navy">
            Teléfono opcional
            <input
              name="telefono"
              className="focus-ring rounded-lg border border-deep-navy/14 bg-fiori-grey px-4 py-3 font-medium"
              placeholder="+56 9..."
              autoComplete="tel"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-black text-deep-navy">
          Interés principal
          <select
            name="interes"
            className="focus-ring rounded-lg border border-deep-navy/14 bg-fiori-grey px-4 py-3 font-medium"
            defaultValue={contactInterests[0]}
            required
          >
            {contactInterests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-black text-deep-navy">
          Necesidad
          <textarea
            name="necesidad"
            className="focus-ring min-h-32 resize-y rounded-lg border border-deep-navy/14 bg-fiori-grey px-4 py-3 font-medium"
            placeholder="Cuéntanos el contexto: Discovery, blueprint, SAP HCM and SAP SuccessFactors, integraciones, adopción..."
            required
          />
        </label>

        <button
          type="submit"
          disabled={state === "sending"}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-deep-navy px-5 py-3 text-sm font-black text-white transition hover:bg-sap-blue disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "sending" ? "Enviando..." : "Enviar solicitud"}
          <Send size={16} aria-hidden />
        </button>

        <p className="min-h-6 text-sm font-bold leading-6 text-graphite-blue/70" role="status">
          {message}
        </p>
      </div>
    </form>
  );
}
