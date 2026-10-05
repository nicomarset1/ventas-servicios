import type { LucideIcon } from "lucide-react";
import { Blocks, Globe, LayoutDashboard, Palette, ShoppingCart, Zap } from "lucide-react";

export const whatsappNumber = "5492234264682";
export const instagramUrl = "https://www.instagram.com/nm.software/";
export const facebookUrl = "https://www.facebook.com/profile.php?id=61590461681057";
export const siteUrl = "https://nmsoftware.com.ar";

const whatsappMessage = "Hola Nicolás, quiero consultar por un desarrollo para mi negocio.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const navItems = [
  { id: "proyectos", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Cómo trabajo" },
  { id: "contacto", label: "Contacto" },
];

export const hero = {
  eyebrow: "Webs · Sistemas · Automatizaciones",
  title: "Software a medida que trabaja por vos",
  copy: "Herramientas hechas para tu negocio, para que venda más y pierda menos tiempo.",
  primaryCta: "Hablemos por WhatsApp",
  secondaryCta: "Ver proyectos",
};

export type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type AreaSlug = "web" | "software";

export type Area = {
  slug: AreaSlug;
  label: string;
  // Nombre corto para el menú.
  short: string;
  icon: LucideIcon;
  summary: string;
  hero: { eyebrow: string; title: string; copy: string };
  servicesTitle: string;
  services: Service[];
  projectsTitle: string;
};

// Las dos áreas del sitio: cada una tiene su página (/web y /software) con sus servicios y proyectos.
export const areas: Area[] = [
  {
    slug: "web",
    label: "Desarrollo web",
    short: "Web",
    icon: Globe,
    summary: "Sitios y tiendas online a medida para que te encuentren, te conozcan y te compren.",
    hero: {
      eyebrow: "Sitios · Tiendas online · Landings",
      title: "Tu negocio en internet, bien hecho",
      copy: "Sitios y tiendas a medida para que te encuentren, te conozcan y te compren.",
    },
    servicesTitle: "Qué hago",
    services: [
      {
        icon: Globe,
        title: "Sitios web",
        text: "Sitios y landings que cargan rápido y se ven bien en el celular.",
      },
      {
        icon: ShoppingCart,
        title: "Tiendas online",
        text: "Catálogo, carrito, stock y cobro online, sin depender de terceros.",
      },
      {
        icon: Palette,
        title: "Diseño a medida",
        text: "Un diseño pensado para tu marca, no una plantilla.",
      },
    ],
    projectsTitle: "Sitios y tiendas publicados",
  },
  {
    slug: "software",
    label: "Software para empresas",
    short: "Software",
    icon: LayoutDashboard,
    summary: "Sistemas de gestión, automatizaciones e integraciones hechos para tu operación.",
    hero: {
      eyebrow: "Sistemas · Automatizaciones",
      title: "Software a medida para tu empresa",
      copy: "Sistemas y automatizaciones para ordenar tu operación y decidir con datos.",
    },
    servicesTitle: "Qué hago",
    services: [
      {
        icon: LayoutDashboard,
        title: "Sistemas de gestión",
        text: "Paneles para manejar personal, stock, flota o lo que necesites.",
      },
      {
        icon: Zap,
        title: "Automatizaciones",
        text: "Reportes, avisos y cargas que hoy hacés a mano, resueltos solos.",
      },
      {
        icon: Blocks,
        title: "Integraciones",
        text: "WhatsApp, planillas, pagos y tus sistemas, conectados.",
      },
    ],
    projectsTitle: "Sistemas en uso",
  },
];

export const processSteps = [
  { step: "01", title: "Charlamos", text: "Entiendo tu negocio y qué querés resolver." },
  { step: "02", title: "Propuesta", text: "Alcance, plazo y precio claros." },
  { step: "03", title: "Desarrollo", text: "Vas viendo avances reales." },
  { step: "04", title: "Online", text: "Lo publico y te sigo acompañando." },
];

export type Project = {
  slug: string;
  area: AreaSlug;
  name: string;
  type: string;
  summary: string;
  description: string;
  chips: string[];
  liveUrl?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "agrovet",
    area: "web",
    name: "Agrovet MDP",
    type: "Tienda online",
    summary: "Tienda online con carrito y control de stock para una veterinaria.",
    description:
      "Tienda online para veterinaria y pet shop con catálogo, carrito, stock y un panel para administrar todo desde el celular.",
    chips: ["Catálogo", "Carrito", "Stock"],
    liveUrl: "https://agrovet-gestion-y-web.vercel.app",
    images: ["/agrovet-preview-actual.png"],
  },
  {
    slug: "mecanica-marset",
    area: "web",
    name: "Mecánica Marset",
    type: "Sitio web",
    summary: "Sitio para un taller mecánico con turnos por WhatsApp.",
    description:
      "Sitio para un taller mecánico con turnos por WhatsApp, reseñas y ubicación, pensado para generar confianza desde el primer vistazo.",
    chips: ["WhatsApp", "Reseñas", "Ubicación"],
    liveUrl: "https://mecanicamarset.netlify.app/",
    images: ["/pag-taller-preview.png"],
  },
  {
    slug: "hasta-que-nos-vayamos",
    area: "web",
    name: "Hasta Que Nos Vayamos",
    type: "Radio online",
    summary: "Radio en vivo con grabación y publicación automática.",
    description:
      "Sitio para un programa de radio con streaming en vivo y un archivo de programas que se graba, sube y publica solo cada semana.",
    chips: ["En vivo", "Automatización", "Archivo"],
    liveUrl: "https://hastaquenosvayamos.com.ar",
    images: ["/hnv-preview.png"],
  },
  {
    slug: "latin-prospects",
    area: "web",
    name: "Latin Prospects",
    type: "Sitio web",
    summary: "Sitio de scouting de básquet con rankings de prospectos latinoamericanos.",
    description:
      "Sitio para una plataforma de scouting de básquet de Latinoamérica: rankings de prospectos por año de nacimiento con el perfil de cada jugador, noticias, calendario de eventos y solicitud de evaluación.",
    chips: ["Rankings", "Noticias", "Evaluaciones"],
    liveUrl: "https://latin-prospects-web.vercel.app",
    images: ["/latin-prospects-preview.png"],
  },
  {
    slug: "mareflota",
    area: "software",
    name: "Mareflota",
    type: "Sistema de gestión",
    summary: "Gestión de tripulación, barcos y capturas para una pesquera.",
    description:
      "Web app para una empresa pesquera: tripulación, barcos, viajes y capturas en un solo lugar, con alertas de vencimiento de documentos y estadísticas por barco y especie.",
    chips: ["Tripulación", "Viajes", "Vencimientos"],
    liveUrl: "https://mareflota.com.ar",
    images: ["/mareflota-preview.png"],
  },
  {
    slug: "forza",
    area: "software",
    name: "Forza Presupuestos",
    type: "App privada",
    summary: "App para armar presupuestos en PDF desde el celular.",
    description:
      "Webapp para una empresa de reformas en Mallorca: arma presupuestos, guarda el historial y genera el PDF final desde cualquier lugar, con acceso por login.",
    chips: ["Login", "Historial", "PDF"],
    images: ["/forza-preview.png", "/forza-pdf-preview.png"],
  },
];

export const contact = {
  title: "¿Tenés algo en mente?",
  copy: "Contame qué necesitás y te paso una propuesta concreta.",
  cta: "Escribime por WhatsApp",
};
