# NM Software

Sitio de NM Software (https://nmsoftware.com.ar): tiendas online, sitios web y sistemas de gestión a medida.
Hecho con Next.js 16, React 19 y CSS Modules, con íconos de lucide-react. La letra es Archivo (Omnibus-Type, Argentina): los títulos van expandidos con `font-stretch`.

## Correrlo en local

```bash
npm install
npm run dev
```

Abrir la URL que muestra Next (por defecto http://localhost:3000).

Antes de publicar conviene correr `npm run lint`, `npx tsc --noEmit` y `npm run build`.

## Dónde está cada cosa

- `src/app/content.ts`: todos los textos. WhatsApp (formato internacional, sin `+` ni espacios), mensajes ya escritos, portada, problemas resueltos, servicios, pasos de trabajo, propuesta de ejemplo, preguntas frecuentes, contacto y las páginas de área (`/web` y `/software`).
- `src/app/projects.ts`: los trabajos, con sus capturas, textos y datos para Google. Cada trabajo tiene su página en `/proyectos/<slug>`.
- `src/app/globals.css`: colores, letra, espaciados y botones. Los módulos usan solo esos tokens.

Para sumar un trabajo: poné las capturas en `public/` (computadora a 1440x900 y celular a 390x844), agregalo a `projects` con las áreas donde va y creá `src/app/proyectos/<slug>/page.tsx` copiando cualquiera de las otras.

## Estructura de la home

| Componente | Qué es |
| --- | --- |
| `components/SitePage.tsx` | Arma la home y las páginas de área con las secciones de abajo |
| `components/Header.tsx` | Header fijo con menú para el celular |
| `components/Hero.tsx` + `HeroCollage.tsx` | Portada: promesa, botón de WhatsApp y capturas reales |
| `components/WorkStage.tsx` + `Showcase.tsx` | Vitrina de trabajos por rubro; pasa sola mientras se ve, hasta que la persona toca algo |
| `components/Ledger.tsx` | Problemas del día a día y lo que ya hicimos para cada uno |
| `components/Services.tsx` | Servicios contados por lo que la persona quiere lograr |
| `components/Process.tsx` | Pasos de trabajo y la propuesta de ejemplo |
| `components/Faq.tsx` | Preguntas frecuentes |
| `components/Contact.tsx` | Arma el mensaje de WhatsApp según lo que la persona elige |
| `components/MobileCta.tsx` | Botón de WhatsApp fijo abajo, solo en el celular |
| `components/Footer.tsx` | Footer con servicios, trabajos y redes |
| `src/app/proyectos/ProjectCase.tsx` | Plantilla de la página de cada trabajo |

## Publicación

El sitio se publica en Netlify automáticamente con cada push a `main`. Los cambios se trabajan en otra rama y se mergean a `main` cuando están listos.

No borrar `public/google07109ac734617af8.html`: es la verificación del dominio en Google Search Console.
