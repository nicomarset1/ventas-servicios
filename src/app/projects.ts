import type { StaticImageData } from "next/image";
import type { AreaSlug } from "./content";

import agrovetPanel from "../../public/agrovet-panel.png";
import agrovetStore from "../../public/agrovet-desktop.jpg";
import agrovetMobile from "../../public/agrovet-mobile.jpg";
import mareflotaDesktop from "../../public/mareflota-desktop.jpg";
import mareflotaMobile from "../../public/mareflota-mobile.jpg";
import mecanicaDesktop from "../../public/mecanica-desktop.jpg";
import mecanicaMobile from "../../public/mecanica-mobile.jpg";
import forzaApp from "../../public/forza-preview.png";
import forzaPdf from "../../public/forza-pdf-preview.png";
import latinDesktop from "../../public/latin-prospects-desktop.jpg";
import latinMobile from "../../public/latin-prospects-mobile.jpg";
import hnvDesktop from "../../public/hnv-desktop.jpg";
import hnvMobile from "../../public/hnv-mobile.jpg";

type Shot = { image: StaticImageData; alt: string };

export type Project = {
  slug: string;
  areas: AreaSlug[];
  name: string;
  // Rubro corto para la pestaña de trabajos.
  rubro: string;
  // Quién es el cliente y dónde está.
  client: string;
  type: string;
  summary: string;
  need: string;
  highlights: string[];
  built: string[];
  liveUrl?: string;
  // Captura principal: ventana de navegador o una hoja (PDF).
  screen: Shot & { kind: "browser" | "paper"; label: string };
  phone?: Shot;
  extra?: Shot & { kind: "browser"; label: string; caption: string };
  message: string;
  metaTitle: string;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "agrovet",
    areas: ["web", "software"],
    name: "Agrovet MDP",
    rubro: "Veterinaria",
    client: "Veterinaria y pet shop con dos sucursales en Mar del Plata",
    type: "Tienda online y sistema de gestión",
    summary: "Tienda online y sistema de gestión para una veterinaria con dos sucursales.",
    need: "Querían vender online y, al mismo tiempo, manejar la caja, el stock y las ventas de sus dos sucursales desde un solo lugar.",
    highlights: [
      "Más de 400 productos con foto, buscador y filtros",
      "Pago con Mercado Pago y stock reservado mientras se paga",
      "Caja, ventas y stock de cada sucursal en un panel",
    ],
    built: [
      "Tienda con catálogo, buscador y filtros por categoría.",
      "Carrito y pago con Mercado Pago, con el stock reservado mientras el cliente paga.",
      "Mapa con las dos sucursales.",
      "Panel con caja, ventas del local y de la web, clientes y stock por sucursal.",
      "Tablero con cómo viene cada día y reportes en PDF.",
    ],
    liveUrl: "https://agrovet-gestion-y-web.vercel.app",
    screen: {
      kind: "browser",
      image: agrovetStore,
      label: "agrovet-gestion-y-web.vercel.app",
      alt: "Portada de la tienda online de Agrovet en la computadora",
    },
    phone: { image: agrovetMobile, alt: "Tienda online de Agrovet vista en el celular" },
    extra: {
      kind: "browser",
      image: agrovetPanel,
      label: "Panel de gestión",
      alt: "Panel de gestión de Agrovet con las ventas del día, el stock y la comparación entre sucursales",
      caption: "El panel de gestión: caja, ventas y stock de las dos sucursales en un solo lugar.",
    },
    message: "Hola Nicolás, vi el trabajo de Agrovet en la web de NM Software y quiero algo parecido para mi negocio.",
    metaTitle: "Agrovet MDP: tienda online y sistema de gestión para una veterinaria",
    metaDescription:
      "Tienda online con Mercado Pago y sistema de gestión con caja, ventas y stock por sucursal para una veterinaria de Mar del Plata, hecho por NM Software.",
  },
  {
    slug: "mareflota",
    areas: ["software"],
    name: "Mareflota",
    rubro: "Pesquera",
    client: "Empresa pesquera",
    type: "Sistema de gestión",
    summary: "Sistema para una pesquera: tripulación, barcos, viajes y capturas en un solo lugar.",
    need: "Necesitaban tener la tripulación, los barcos, los viajes y las capturas en un solo lugar, y enterarse a tiempo de los documentos por vencer.",
    highlights: [
      "Avisos antes de que venza un documento",
      "Cada viaje con su dotación y su captura por especie",
      "Estadísticas por barco, especie y mes",
    ],
    built: [
      "Tripulación con los roles a bordo de cada persona.",
      "Avisos antes de que venza un documento.",
      "Viajes con dotación, zarpe, regreso y captura por especie.",
      "Estadísticas de capturas por barco, especie y mes.",
    ],
    liveUrl: "https://mareflota.com.ar",
    screen: {
      kind: "browser",
      image: mareflotaDesktop,
      label: "mareflota.com.ar",
      alt: "Portada de Mareflota, el sistema de gestión de la flota pesquera",
    },
    phone: { image: mareflotaMobile, alt: "Mareflota visto en el celular" },
    message: "Hola Nicolás, vi el trabajo de Mareflota en la web de NM Software y quiero un sistema parecido para mi empresa.",
    metaTitle: "Mareflota: sistema de gestión para una flota pesquera",
    metaDescription:
      "Sistema para una empresa pesquera: tripulación, barcos, viajes, capturas y avisos de vencimiento de documentos, hecho por NM Software.",
  },
  {
    slug: "mecanica-marset",
    areas: ["web"],
    name: "Mecánica Marset",
    rubro: "Taller mecánico",
    client: "Taller mecánico en Mar del Plata",
    type: "Sitio web",
    summary: "Sitio para un taller mecánico, pensado para que el cliente pida turno por WhatsApp.",
    need: "Un taller con más de 25 años en Mar del Plata necesitaba que lo encuentren en internet y que pedir turno fuera fácil.",
    highlights: ["Turnos por WhatsApp con un toque", "Reseñas de Google y cómo llegar", "Rápido y cómodo en el celular"],
    built: [
      "Botón para pedir turno por WhatsApp en toda la página.",
      "Servicios del taller explicados en simple.",
      "Reseñas de Google y mapa para llegar.",
      "Pensado primero para el celular.",
    ],
    liveUrl: "https://mecanicamarset.netlify.app/",
    screen: {
      kind: "browser",
      image: mecanicaDesktop,
      label: "mecanicamarset.netlify.app",
      alt: "Portada del sitio de Mecánica Marset con el botón para pedir turno por WhatsApp",
    },
    phone: { image: mecanicaMobile, alt: "Sitio de Mecánica Marset visto en el celular" },
    message: "Hola Nicolás, vi el sitio de Mecánica Marset en la web de NM Software y quiero algo parecido para mi negocio.",
    metaTitle: "Mecánica Marset: sitio web para un taller mecánico",
    metaDescription:
      "Sitio web para un taller mecánico de Mar del Plata con turnos por WhatsApp, reseñas y ubicación, hecho por NM Software.",
  },
  {
    slug: "forza",
    areas: ["software"],
    name: "Forza",
    rubro: "Reformas",
    client: "Empresa de reformas en Mallorca, España",
    type: "App de presupuestos",
    summary: "App para una empresa de reformas en Mallorca: presupuestos desde el celular, con el PDF listo.",
    need: "Necesitaban armar presupuestos desde cualquier lugar, con el celular, y mandarlos en PDF con su marca.",
    highlights: ["Presupuestos desde el celular", "PDF con la marca de la empresa", "Historial con buscador"],
    built: [
      "Presupuestos desde el celular, con numeración automática.",
      "PDF con la marca de la empresa, listo para mandar.",
      "Historial de presupuestos con buscador.",
      "Acceso con usuario y contraseña.",
    ],
    screen: {
      kind: "paper",
      image: forzaPdf,
      label: "Presupuesto en PDF",
      alt: "Presupuesto en PDF generado por la app de Forza",
    },
    phone: { image: forzaApp, alt: "App de presupuestos de Forza en el celular" },
    message: "Hola Nicolás, vi la app de presupuestos de Forza en la web de NM Software y quiero algo parecido para mi negocio.",
    metaTitle: "Forza: app de presupuestos en PDF para una empresa de reformas",
    metaDescription:
      "App para una empresa de reformas en Mallorca que arma presupuestos desde el celular y genera el PDF con su marca, hecha por NM Software.",
  },
  {
    slug: "latin-prospects",
    areas: ["web"],
    name: "Latin Prospects",
    rubro: "Scouting de básquet",
    client: "Plataforma de scouting de básquet de Latinoamérica",
    type: "Sitio web",
    summary: "Sitio de scouting con los rankings de los mejores prospectos de básquet de Latinoamérica.",
    need: "Necesitaban mostrar sus rankings de prospectos latinoamericanos y recibir pedidos de evaluación de jugadores.",
    highlights: ["Rankings por año de nacimiento", "Perfil de cada jugador", "Pedidos de evaluación desde el sitio"],
    built: [
      "Rankings de prospectos por año de nacimiento.",
      "Perfil de cada jugador.",
      "Noticias y calendario de eventos.",
      "Formulario para pedir una evaluación.",
    ],
    liveUrl: "https://latin-prospects-web.vercel.app",
    screen: {
      kind: "browser",
      image: latinDesktop,
      label: "latin-prospects-web.vercel.app",
      alt: "Portada del sitio de Latin Prospects",
    },
    phone: { image: latinMobile, alt: "Sitio de Latin Prospects visto en el celular" },
    message: "Hola Nicolás, vi el sitio de Latin Prospects en la web de NM Software y quiero algo parecido.",
    metaTitle: "Latin Prospects: sitio de scouting de básquet",
    metaDescription:
      "Sitio para una plataforma de scouting de básquet de Latinoamérica, con rankings de prospectos, perfiles, noticias y evaluaciones, hecho por NM Software.",
  },
  {
    slug: "hasta-que-nos-vayamos",
    areas: ["web", "software"],
    name: "Hasta Que Nos Vayamos",
    rubro: "Radio",
    client: "Programa de radio de Mar del Plata",
    type: "Sitio web y automatización",
    summary: "Sitio para un programa de radio, con la transmisión en vivo y un archivo que se arma solo.",
    need: "Necesitaban transmitir en vivo y dejar cada programa disponible, sin trabajo manual todas las semanas.",
    highlights: ["Se escucha en vivo desde el sitio", "Cada programa se graba, se sube y se publica solo", "Archivo con todos los programas"],
    built: [
      "Transmisión en vivo desde el sitio.",
      "Cada programa se graba, se sube y se publica solo.",
      "Archivo con los programas anteriores.",
      "Sección con el equipo y contacto.",
    ],
    liveUrl: "https://hastaquenosvayamos.com.ar",
    screen: {
      kind: "browser",
      image: hnvDesktop,
      label: "hastaquenosvayamos.com.ar",
      alt: "Portada del sitio de Hasta Que Nos Vayamos",
    },
    phone: { image: hnvMobile, alt: "Sitio de Hasta Que Nos Vayamos visto en el celular" },
    message: "Hola Nicolás, vi el trabajo de Hasta Que Nos Vayamos en la web de NM Software y quiero algo parecido.",
    metaTitle: "Hasta Que Nos Vayamos: sitio y automatización para un programa de radio",
    metaDescription:
      "Sitio para un programa de radio con transmisión en vivo y un archivo que se graba, se sube y se publica solo, hecho por NM Software.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectsFor(area?: AreaSlug) {
  return area ? projects.filter((project) => project.areas.includes(area)) : projects;
}
