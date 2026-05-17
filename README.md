# Grupo Actual HR

App web corporativa B2B enterprise para Grupo Actual HR, construida con Next.js 14, App Router, TypeScript, Tailwind CSS y componentes React reutilizables.

## Marca

- Nombre: Grupo Actual HR
- Logo textual: GRUPO / Actual HR
- Eje conceptual: Blueprint funcional para Capital Humano
- Territorio visual: Ruta Blueprint
- Frase estratégica: Antes de implementar, entendemos. Antes de configurar, diseñamos. Antes del sistema, está el proceso.
- Paleta: Deep SAP Navy `#0A3761`, SAP-like Blue `#0A6ED1`, Electric Cyan `#00B8D9`, Cloud White `#FFFFFF`, Fiori Grey `#F5F7FA`, Graphite Blue `#1D2D3E`
- Alias Tailwind preservado: `deep-navy`

## Arquitectura

```text
app/
  api/contact/route.ts   Endpoint de contacto preparado para integraciones
  brochure/page.tsx      Página comercial para solicitar brochure
  contacto/page.tsx      Página de contacto
  privacidad/page.tsx    Política de privacidad para formularios
  servicios/page.tsx     Ruta futura de servicios
  soluciones/page.tsx    Ruta futura de soluciones
  robots.ts              SEO técnico
  sitemap.ts             SEO técnico
components/
  ContactForm.tsx        Formulario validado
  *.tsx                  Secciones reutilizables de la landing
content/site.ts          Brand kit, navegación, intereses e integraciones
lib/contact.ts           Validación del formulario
lib/metadata.ts          Metadata por página
```

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Luego abre:

```text
http://127.0.0.1:3000
```

Si el puerto está ocupado:

```bash
npm run dev -- -p 3022
```

## Validación

```bash
npm run typecheck
npm run build
```

## Formulario

El formulario envía a:

```text
POST /api/contact
```

Campos:

- Nombre
- Empresa
- Email
- Teléfono opcional
- Necesidad
- Interés principal

Integraciones preparadas:

- Resend
- HubSpot
- Airtable
- Google Sheets
- CRM a definir

Para activar un webhook simple:

```bash
CONTACT_WEBHOOK_URL=https://...
```

## Variables de entorno

Usa `.env.example` como base:

```bash
NEXT_PUBLIC_SITE_URL=https://grupoactualhr.com
CONTACT_WEBHOOK_URL=
```

## Despliegue en Vercel

1. Sube este proyecto a un repositorio Git.
2. Crea un proyecto en Vercel e importa el repositorio.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Configura `NEXT_PUBLIC_SITE_URL` con el dominio final.
6. Conecta el dominio y valida `/sitemap.xml`, `/robots.txt`, `/contacto` y `/privacidad`.

## Roadmap

1. Publicación inicial en Vercel.
2. Conexión real del formulario al CRM elegido.
3. Reemplazo de brochure por PDF final.
4. Páginas comerciales por industria y servicio.
5. CMS headless si marketing necesita editar casos, artículos o campañas recurrentes.
