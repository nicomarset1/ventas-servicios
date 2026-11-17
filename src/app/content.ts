// Todos los textos del sitio. Los proyectos (con sus capturas) están en projects.ts.

export const whatsappNumber = "5492234264682";
export const instagramUrl = "https://www.instagram.com/nm.software/";
export const facebookUrl = "https://www.facebook.com/profile.php?id=61590461681057";
export const siteUrl = "https://nmsoftware.com.ar";

const defaultMessage = "Hola Nicolás, vi la web de NM Software y quiero consultar por un desarrollo para mi negocio.";

// Link a WhatsApp con el mensaje ya escrito. Sin texto, usa el mensaje general.
export function whatsappLink(message: string = defaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = whatsappLink();

export const navItems = [
  { id: "trabajos", label: "Trabajos" },
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Cómo trabajamos" },
  { id: "preguntas", label: "Preguntas" },
];

export type AreaSlug = "web" | "software";

export type HeroText = {
  title: string;
  lead: string;
};

export const hero: HeroText = {
  title: "Tu negocio, ordenado y vendiendo online.",
  lead: "Hacemos tiendas online, sitios web y sistemas de gestión a medida para comercios y empresas. Somos un equipo de Mar del Plata y trabajamos con clientes de todo el país.",
};

// Lo que saca el miedo a escribir, al lado del botón.
export const heroPoints = [
  "La primera charla es sin cargo",
  "Propuesta por escrito con plazo y precio",
  "Te responde quien programa tu proyecto",
];

export const stage = {
  title: "Mirá lo que hicimos para negocios como el tuyo",
};

// Problemas reales y lo que ya hicimos para resolverlos. "project" es el slug del trabajo que lo muestra.
export type Pain = {
  area: AreaSlug;
  today: string;
  solved: string;
  project: string;
};

export const ledger = {
  title: "¿Tu negocio todavía funciona con Excel y papeles?",
  lead: "Estas son cosas que ya resolvimos para otros negocios. Capaz alguna te suena.",
  columns: { today: "Lo que pasa hoy", solved: "Lo que hicimos", client: "Para quién" },
  rows: [
    {
      area: "web",
      today: "Los pedidos llegan por WhatsApp, Instagram y teléfono, y alguno se pierde.",
      solved: "Una tienda online donde el cliente elige, paga con Mercado Pago y el pedido queda registrado.",
      project: "agrovet",
    },
    {
      area: "software",
      today: "El stock está en una planilla que nadie actualiza.",
      solved: "Stock por sucursal que se descuenta solo con cada venta, en el local o en la web.",
      project: "agrovet",
    },
    {
      area: "software",
      today: "Te enterás de que un documento venció cuando ya es tarde.",
      solved: "Avisos antes de que venza cada documento de la tripulación.",
      project: "mareflota",
    },
    {
      area: "software",
      today: "Para armar un presupuesto tenés que sentarte en la compu.",
      solved: "Presupuestos desde el celular, con el PDF listo para mandar.",
      project: "forza",
    },
    {
      area: "web",
      today: "Te buscan en Google y encuentran poco o nada.",
      solved: "Un sitio con tus servicios, tus reseñas, cómo llegar y un botón para pedir turno.",
      project: "mecanica-marset",
    },
    {
      area: "software",
      today: "Hay tareas que repetís a mano todas las semanas.",
      solved: "Una automatización que graba, sube y publica cada programa sin que nadie toque nada.",
      project: "hasta-que-nos-vayamos",
    },
  ] satisfies Pain[],
};

export type Service = {
  area: AreaSlug;
  title: string;
  text: string;
  includes: string[];
  example: string;
  message: string;
};

export const servicesSection = {
  title: "Qué hacemos",
  lead: "Contanos qué querés lograr y te proponemos la forma más simple de hacerlo.",
  exampleLabel: "Ejemplo",
  ask: "Consultar por WhatsApp",
};

export const services: Service[] = [
  {
    area: "web",
    title: "Vender online",
    text: "Tiendas con catálogo, carrito y pago online. A medida o en Tiendanube, según lo que más te convenga.",
    includes: ["Catálogo con fotos, buscador y categorías", "Pago con Mercado Pago", "Stock y pedidos en un panel"],
    example: "agrovet",
    message: "Hola Nicolás, vi la web de NM Software y quiero vender online. ¿Me contás cómo sería?",
  },
  {
    area: "web",
    title: "Que te encuentren en internet",
    text: "Sitios rápidos y pensados para el celular, para que quien te busca entienda qué hacés y te escriba.",
    includes: ["Diseño propio, no una plantilla", "WhatsApp, ubicación y reseñas", "Bien armado para aparecer en Google"],
    example: "mecanica-marset",
    message: "Hola Nicolás, vi la web de NM Software y quiero un sitio para mi negocio. ¿Me contás cómo sería?",
  },
  {
    area: "software",
    title: "Ordenar tu operación",
    text: "Sistemas de gestión hechos para cómo trabaja tu negocio: stock, caja, ventas, personal, flota o lo que manejes.",
    includes: ["Todo en un solo lugar, también desde el celular", "Acceso con usuario para vos y tu equipo", "Reportes para decidir con datos"],
    example: "mareflota",
    message: "Hola Nicolás, vi la web de NM Software y quiero un sistema de gestión para mi negocio. ¿Me contás cómo sería?",
  },
  {
    area: "software",
    title: "Dejar de hacer todo a mano",
    text: "Automatizaciones e integraciones para que las tareas repetidas se hagan solas.",
    includes: ["Reportes y avisos automáticos", "WhatsApp, planillas y pagos conectados", "Cargas de datos sin copiar y pegar"],
    example: "hasta-que-nos-vayamos",
    message: "Hola Nicolás, vi la web de NM Software y quiero automatizar tareas de mi negocio. ¿Me contás cómo sería?",
  },
];

export const process = {
  title: "Cómo trabajamos",
  lead: "Somos un equipo chico: hablás directo con quien programa tu proyecto, sin intermediarios.",
  steps: [
    { title: "Charlamos", text: "Nos contás qué querés resolver y cómo trabajás hoy. La primera charla es sin cargo." },
    {
      title: "Te pasamos una propuesta",
      text: "Por escrito: qué incluye, qué no, plazos y precio. Si conviene, la separamos en etapas.",
    },
    { title: "Lo desarrollamos", text: "Vas viendo avances reales y opinás antes de que esté terminado." },
    { title: "Lo publicamos y te enseñamos", text: "Lo dejamos funcionando y te mostramos cómo usarlo." },
    { title: "Te acompañamos", text: "Si querés, sumás un mantenimiento mensual para soporte, ajustes y cambios." },
  ],
};

// Lo que muestra la propuesta de ejemplo al lado de los pasos.
export const proposalSample = {
  label: "Propuesta",
  title: "Tienda online para tu negocio",
  includesTitle: "Qué incluye",
  includes: ["Catálogo con fotos y categorías", "Carrito y pago con Mercado Pago", "Stock que se descuenta solo", "Panel para cargar productos y precios"],
  laterTitle: "Para una segunda etapa",
  later: ["Precios mayoristas", "Envíos a todo el país"],
  termsTitle: "Plazo y valor",
  terms: ["Plazo estimado", "Valor"],
  alt: "Ejemplo de propuesta por escrito, con lo que incluye, lo que queda para una segunda etapa, el plazo y el valor.",
};

export type Faq = { question: string; answer: string };

export const faqSection = {
  title: "Preguntas frecuentes",
  lead: "¿Te quedó alguna duda? Escribinos y la charlamos.",
  cta: "Preguntar por WhatsApp",
};

export const faqs: Faq[] = [
  {
    question: "¿Cuánto sale?",
    answer:
      "Depende de lo que necesites: no es lo mismo un sitio para mostrar tus servicios que una tienda con stock o un sistema con panel. Después de la primera charla te mandamos una propuesta por escrito con qué incluye, qué no, los plazos y el precio. Si conviene, la separamos en etapas.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "El plazo queda escrito en la propuesta. Depende del alcance y de que tengas listo el material: fotos, textos, productos y accesos.",
  },
  {
    question: "¿Lo voy a poder manejar yo?",
    answer:
      "Sí. Si necesitás cargar productos, precios o contenido, te dejamos un panel simple, que también funciona desde el celular, y te enseñamos a usarlo.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Podés sumar un mantenimiento mensual con soporte, ajustes y cambios de contenido. Si más adelante querés algo nuevo, lo presupuestamos aparte.",
  },
  {
    question: "¿Por qué a medida y no una plataforma o un sistema enlatado?",
    answer:
      "No siempre hace falta. Si Tiendanube o una herramienta que ya existe te alcanza, la armamos ahí: es más rápido y más barato. Hacemos a medida cuando necesitás algo que esas herramientas no resuelven, como stock por sucursal, la caja del local o la forma de trabajar de tu negocio.",
  },
  {
    question: "¿Necesito saber de computación?",
    answer: "No. Lo armamos para que lo use cualquiera de tu equipo y te enseñamos a usarlo paso a paso.",
  },
  {
    question: "¿Hay costos aparte del desarrollo?",
    answer:
      "Sí, y te los detallamos en la propuesta: el dominio, el hosting y los servicios externos que uses, como Mercado Pago o la plataforma de la tienda, se pagan aparte.",
  },
  {
    question: "¿Trabajan con negocios de otras ciudades?",
    answer:
      "Sí. Estamos en Mar del Plata y trabajamos por WhatsApp y videollamada con clientes de todo el país y del exterior, como Forza en Mallorca.",
  },
  {
    question: "¿Necesito tener todo claro para escribir?",
    answer:
      "No. Alcanza con que nos cuentes qué querés resolver. Si tenés logo, fotos o ejemplos que te gusten, mejor, pero lo vamos armando juntos.",
  },
];

export const contact = {
  title: "Contanos qué necesitás",
  lead: "Elegí una opción y te abrimos WhatsApp con el mensaje listo para mandar.",
  question: "¿Qué estás buscando?",
  options: ["Una tienda online", "Un sitio web", "Un sistema de gestión", "Automatizar tareas", "Todavía no sé"],
  detailLabel: "Contanos un poco de tu negocio (opcional)",
  detailPlaceholder: "Ej.: tengo una veterinaria con dos locales y quiero vender online",
  cta: "Enviar por WhatsApp",
  note: "Te responde quien va a programar tu proyecto.",
  // Arma el mensaje que se abre en WhatsApp.
  message(option: string, detail: string) {
    const parts = ["Hola Nicolás, vi la web de NM Software."];
    if (option === "Todavía no sé") parts.push("Quiero mejorar algo de mi negocio y no sé bien qué necesito.");
    else if (option) parts.push(`Estoy buscando: ${option.toLowerCase()}.`);
    if (detail.trim()) parts.push(detail.trim());
    return parts.join(" ");
  },
};

export const ctaLabel = "Escribinos por WhatsApp";

export const footer = {
  tagline: "Desarrollo web y software a medida en Mar del Plata, Argentina.",
};

export type Area = {
  slug: AreaSlug;
  label: string;
  hero: HeroText;
  metaTitle: string;
  metaDescription: string;
};

// Páginas de área (/web y /software): misma estructura que la home, filtrada por área.
export const areas: Area[] = [
  {
    slug: "web",
    label: "Desarrollo web",
    hero: {
      title: "Un sitio que trabaja para tu negocio.",
      lead: "Sitios web y tiendas online a medida, rápidos y pensados para el celular, para que te encuentren, te conozcan y te compren. Desde Mar del Plata para todo el país.",
    },
    metaTitle: "Desarrollo web en Mar del Plata: sitios y tiendas online a medida",
    metaDescription:
      "Sitios web y tiendas online a medida para negocios, con diseño propio, pago con Mercado Pago y pensados para el celular. NM Software, Mar del Plata.",
  },
  {
    slug: "software",
    label: "Software para empresas",
    hero: {
      title: "Tu operación, ordenada en un solo sistema.",
      lead: "Sistemas de gestión, automatizaciones e integraciones a medida para empresas: stock, caja, personal, flota o lo que tu negocio maneje. Desde Mar del Plata para todo el país.",
    },
    metaTitle: "Software a medida para empresas: sistemas de gestión y automatizaciones",
    metaDescription:
      "Sistemas de gestión, automatizaciones e integraciones a medida para empresas: stock, caja, personal y flota. NM Software, Mar del Plata.",
  },
];
