# NM Software

Sitio de NM Software (https://nmsoftware.com.ar): software a medida, automatizaciones e integraciones para negocios.
Hecho con Next.js 16, React 19, Tailwind 4 y CSS Modules, con íconos de lucide-react.

## Correrlo en local

```bash
npm install
npm run dev
```

Abrir la URL que muestra Next (por defecto http://localhost:3000).

Antes de publicar conviene correr `npm run lint` y `npx tsc --noEmit`.

## Textos, proyectos y contacto

Todo el contenido está en `src/app/content.ts`: número de WhatsApp (formato internacional, sin `+` ni espacios), mensaje predefinido, redes, textos de cada sección, servicios, pasos del proceso y proyectos.

Para sumar un proyecto, agregalo a `projects` en ese archivo y poné sus capturas en `public/`. Cargá también el tamaño real de cada captura en `src/app/components/projectMedia.ts`.

Los colores, radios, sombras y espaciados son tokens definidos en `src/app/globals.css`. Los módulos usan solo esos tokens.

## Estructura

| Archivo | Qué es |
| --- | --- |
| `src/app/page.tsx` | Home: arma las secciones en orden y el JSON de datos estructurados |
| `components/Header.tsx` | Header fijo, links con sección activa y menú mobile |
| `components/Hero.tsx` | Portada con CTA a WhatsApp y capturas de proyectos |
| `components/Projects.tsx` | Grilla de proyectos; cada tarjeta abre `ProjectModal.tsx` |
| `components/Services.tsx` | Tarjetas de servicios |
| `components/Process.tsx` | Pasos de cómo trabajo |
| `components/Contact.tsx` | Bloque final de contacto |
| `components/Footer.tsx` | Footer con redes (íconos en `socials.tsx`) |
| `components/Reveal.tsx` | Animación de entrada al hacer scroll |
| `src/app/proyectos/*` | Subpáginas de cada proyecto, sobre la plantilla `ProjectCase.tsx` |
| `src/app/ScrollToTopProgress.tsx` | Botón de volver arriba con progreso |

Cada componente tiene sus estilos en un `.module.css` al lado.

## Publicación

El sitio se publica en Netlify automáticamente con cada push a `main`. Los cambios se trabajan en otra rama y se mergean a `main` cuando están listos.

No borrar `public/google07109ac734617af8.html`: es la verificación del dominio en Google Search Console.
