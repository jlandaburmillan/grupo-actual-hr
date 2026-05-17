# Publicación Grupo Actual HR

## Estado

- Proyecto local: `/Users/jorgelandaburmillan/Documents/Codex/grupo-actual-hr-final`
- GitHub sugerido: `jlandaburmillan/grupo-actual-hr`
- Framework: Next.js 14
- Build validado: `npm run build`
- Rutas principales:
  - `/`
  - `/servicios`
  - `/soluciones`
  - `/contacto`
  - `/brochure`
  - `/privacidad`
  - `/panel`

## 1. Crear repositorio local

Ejecutar en Terminal:

```bash
cd /Users/jorgelandaburmillan/Documents/Codex/grupo-actual-hr-final
git init
git add .
git commit -m "Initial Grupo Actual HR web app"
```

## 2. Crear repositorio en GitHub

Opción web:

1. Abrir <https://github.com/new>
2. Repository name: `grupo-actual-hr`
3. Owner: `jlandaburmillan`
4. Visibility: `Private` al inicio, `Public` si luego se desea mostrar el código.
5. No agregar README, .gitignore ni license desde GitHub.

Luego conectar:

```bash
git branch -M main
git remote add origin https://github.com/jlandaburmillan/grupo-actual-hr.git
git push -u origin main
```

## 3. Publicar en Vercel

Opción web recomendada:

1. Abrir <https://vercel.com/new>
2. Importar `jlandaburmillan/grupo-actual-hr`
3. Framework Preset: Next.js
4. Build Command: `npm run build`
5. Output Directory: dejar automático
6. Agregar variable:

```bash
NEXT_PUBLIC_SITE_URL=https://grupo-actual-hr.vercel.app
```

7. Deploy.

## 4. Validar URL pública

Revisar:

```text
/
/servicios
/soluciones
/contacto
/brochure
/privacidad
/panel
/sitemap.xml
/robots.txt
```

## 5. Dominio final

Cuando exista dominio:

1. En Vercel > Project > Settings > Domains, agregar `grupoactualhr.com`.
2. Actualizar `NEXT_PUBLIC_SITE_URL=https://grupoactualhr.com`.
3. Redeploy.

## 6. Formulario

Para conectar leads, definir uno:

- Resend
- HubSpot
- Airtable
- Google Sheets
- CRM a definir

La integración simple usa:

```bash
CONTACT_WEBHOOK_URL=https://...
```
