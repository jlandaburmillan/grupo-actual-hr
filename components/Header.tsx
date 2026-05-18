"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { homeAnchors, navItems } from "@/content/site";

const desktopItems = [...navItems, ...homeAnchors];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deep-navy/95 shadow-[0_8px_30px_rgba(10,55,97,0.16)] backdrop-blur-xl">
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-5">
        <a href="/" className="focus-ring flex shrink-0 items-center rounded-lg py-2">
          <span className="leading-tight">
            <span className="block text-[0.66rem] font-black uppercase tracking-[0.24em] text-white/70">GRUPO</span>
            <span className="block text-xl font-black text-white sm:text-2xl">Actual HR</span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-extrabold text-white xl:flex">
          {desktopItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-lg text-white transition hover:text-electric-cyan">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/contacto?interes=Discovery%20funcional#contacto"
          className="focus-ring hidden rounded-lg bg-sap-blue px-4 py-3 text-sm font-black text-white shadow-card transition hover:-translate-y-0.5 hover:bg-white hover:text-deep-navy lg:inline-flex"
        >
          Solicitar diagnóstico
        </a>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white xl:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-var(--header-height))] overflow-y-auto border-t border-white/10 bg-deep-navy xl:hidden">
          <nav className="section-shell grid gap-1 py-4">
            {desktopItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-2 py-3 text-base font-black text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contacto?interes=Discovery%20funcional#contacto"
              className="focus-ring mt-2 rounded-lg bg-sap-blue px-4 py-3 text-center text-sm font-black text-white"
              onClick={() => setOpen(false)}
            >
              Solicitar diagnóstico
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
