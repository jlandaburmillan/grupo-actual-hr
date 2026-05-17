# Prompt para evolucionar Grupo Actual HR a app web responsiva

Quiero evolucionar la landing page actual de **Grupo Actual HR** hacia una app web responsiva, publicable y mantenible.

## Punto de partida

Usar como base el proyecto existente:

```txt
/Users/jorgelandaburmillan/Documents/Codex/grupo-actual-hr-final
```

La versión local validada responde en:

```txt
http://127.0.0.1:3022/
```

La solución ya fue construida con:

- Next.js 14.
- App Router.
- TypeScript.
- Tailwind CSS.
- Componentes React reutilizables.
- lucide-react.

Antes de modificar, revisar:

```bash
npm install
npm run build
```

## Objetivo

Convertir esta base en una app web corporativa responsiva lista para producción, con mejor mantenibilidad, preparación para despliegue, formularios funcionales y arquitectura escalable.

## Reglas de marca

Mantener la marca vigente:

```txt
Grupo Actual HR
```

Logo textual:

```txt
GRUPO
Actual HR
```

No usar isotipo dominante. No usar “AP”. No usar nube, persona, corazón, caballo, tablero ni piezas de ajedrez.

Eje conceptual:

```txt
Blueprint funcional para Capital Humano
```

Territorio visual:

```txt
Ruta Blueprint
```

Frase estratégica:

```txt
Antes de implementar, entendemos. Antes de configurar, diseñamos. Antes del sistema, está el proceso.
```

## Paleta

- Deep SAP Navy: `#0A3761`
- SAP-like Blue: `#0A6ED1`
- Electric Cyan: `#00B8D9`
- Cloud White: `#FFFFFF`
- Fiori Grey: `#F5F7FA`
- Graphite Blue: `#1D2D3E`

Mantener el alias Tailwind:

```ts
"deep-navy": "#0A3761"
```

## Reglas editoriales

- Todo el sitio debe estar en español.
- Cuando se conecten ambas plataformas, escribir `SAP HCM and SAP SuccessFactors`.
- Mantener tono consultivo, técnico, enterprise, humano y claro.
- No volver a mensajes centrados en la marca anterior.
- No cambiar el contenido estratégico aprobado sin motivo.

## Tareas de evolución sugeridas

1. Extraer contenido a `content/site.ts` o estructura equivalente.
2. Crear una arquitectura preparada para futuras rutas:
   - `/`
   - `/servicios`
   - `/soluciones`
   - `/contacto`
   - `/brochure`
3. Mantener la landing actual como home.
4. Crear formulario real de contacto:
   - Nombre.
   - Empresa.
   - Email.
   - Teléfono opcional.
   - Necesidad.
   - Interés principal.
5. Preparar endpoint o integración futura para:
   - Resend.
   - HubSpot.
   - Airtable.
   - Google Sheets.
   - CRM a definir.
6. Agregar validaciones de formulario.
7. Mejorar SEO:
   - Open Graph.
   - Twitter Cards.
   - Sitemap.
   - Robots.
   - Metadata por página.
8. Agregar página de privacidad si el formulario queda activo.
9. Crear experiencia responsive pulida:
   - Hero mobile más compacto.
   - Cards con lectura clara.
   - Menú mobile robusto.
   - Evitar textos invisibles o baja legibilidad.
10. Mantener build limpio:

```bash
npm run build
```

## Resultado esperado

Entregar una app web lista para desplegar en Vercel, con instrucciones claras en README, build validado y una estructura preparada para seguir creciendo comercialmente.
