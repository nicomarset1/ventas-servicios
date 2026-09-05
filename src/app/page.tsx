'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollToTopProgress from "./ScrollToTopProgress";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  ExternalLink,
  Gauge,
  LayoutDashboard,
  Lock,
  MessageCircle,
  MousePointer2,
  PackageCheck,
  Share2,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const whatsappNumber = "5492234264682";
const agrovetProjectUrl = "https://agrovet-gestion-y-web.vercel.app";
const instagramUrl = "https://www.instagram.com/nm.software/";
const facebookUrl = "https://www.facebook.com/profile.php?id=61590461681057";
const siteUrl = "https://nmsoftware.com.ar";

const services = [
  {
    icon: Code2,
    title: "Software a medida",
    text: "Sitios web, catalogos, tiendas online y paneles de gestion pensados para tu operacion real, no una plantilla generica.",
    details: ["Diseno a medida", "Panel de administracion", "Listo para publicar"],
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    text: "Tareas manuales y repetitivas resueltas solas: notificaciones, reportes, cargas de datos y seguimientos que hoy hacen a mano.",
    details: ["Menos trabajo manual", "Reportes automaticos", "Alertas en tiempo real"],
  },
  {
    icon: Blocks,
    title: "Integraciones",
    text: "Conectamos las herramientas que ya usas (WhatsApp, planillas, CRMs, sistemas de pago, APIs) para que la informacion fluya sola entre ellas.",
    details: ["WhatsApp y CRMs", "Planillas y bases de datos", "APIs y pagos"],
  },
];

const trustSignals = [
  { value: "1:1", label: "Atencion directa del equipo" },
  { value: "100%", label: "Responsive y preparado para publicar" },
  { value: "24/7", label: "Tu web o sistema disponible online" },
  { value: "+IA", label: "Automatizaciones cuando aportan valor" },
];

const stack = ["Next.js", "React", "Base de datos", "APIs", "WhatsApp", "Deploy"];

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "trabajos", label: "Proyectos" },
  { id: "planes", label: "Planes" },
  { id: "contacto", label: "Contacto" },
];

const features = [
  "Diseno responsive para celular, tablet y escritorio",
  "Carga rapida y estructura clara para Google",
  "Contacto directo por WhatsApp, Instagram o formulario",
  "Panel privado con permisos cuando el proyecto lo requiere",
  "Base de datos, reportes y automatizaciones a medida",
  "Preparado para publicar en Vercel, Netlify o hosting propio",
  "Arquitectura escalable para sumar nuevas funciones",
  "Acompanamiento para dejar todo probado y online",
];

const process = [
  {
    step: "01",
    title: "Diagnostico",
    text: "Se analiza el negocio, el objetivo comercial y las tareas que hoy frenan la operacion.",
  },
  {
    step: "02",
    title: "Mapa de pantallas",
    text: "Se definen secciones, formularios, datos, acciones y recorridos antes de desarrollar.",
  },
  {
    step: "03",
    title: "Construccion",
    text: "Se construye la web o sistema con una interfaz prolija, veloz y preparada para crecer.",
  },
  {
    step: "04",
    title: "Publicacion",
    text: "Se prueban formularios, enlaces, responsive y rendimiento antes de dejar la version online.",
  },
];

const packages = [
  {
    name: "Web de venta",
    price: "Ideal para validar y empezar a vender",
    items: ["Pagina principal", "Secciones comerciales", "Botones de contacto", "SEO basico"],
  },
  {
    name: "Catalogo o tienda",
    price: "Para mostrar productos y recibir pedidos",
    items: ["Productos y categorias", "Carrito o consulta", "Filtros y busqueda", "Panel simple"],
    highlighted: true,
  },
  {
    name: "Gestion a medida",
    price: "Para ordenar procesos internos",
    items: ["Stock y pedidos", "Clientes y reportes", "Usuarios privados", "Flujos personalizados"],
  },
];

type Project = {
  name: string;
  status: string;
  type: string;
  liveUrl?: string;
  images: string[];
  description: string;
  chips: string[];
};

const projects: Project[] = [
  {
    name: "Agrovet MDP",
    status: "Tienda online",
    type: "Catalogo + carrito",
    liveUrl: agrovetProjectUrl,
    images: ["/agrovet-preview-actual.png"],
    description:
      "Una tienda online para veterinaria y pet shop con enfoque comercial, navegacion limpia y base lista para seguir creciendo.",
    chips: ["Responsive", "Carrito", "Stock"],
  },
  {
    name: "Mecanica Marset",
    status: "Sitio online",
    type: "Taller mecanico",
    liveUrl: "https://mecanicamarset.netlify.app/",
    images: ["/pag-taller-preview.png"],
    description:
      "Sitio informativo para un taller mecanico con hero fuerte, turnos por WhatsApp, resenas, ubicacion y contenido pensado para generar confianza.",
    chips: ["WhatsApp", "Resenas", "Ubicacion"],
  },
  {
    name: "Hasta Que Nos Vayamos",
    status: "Sitio online",
    type: "Programa de radio",
    liveUrl: "https://hastaquenosvayamos.com.ar",
    images: ["/hnv-preview.png"],
    description:
      "Sitio para un programa de radio estudiantil con streaming en vivo, archivo de programas y grabacion, subida y publicacion 100% automatizadas cada semana.",
    chips: ["Streaming en vivo", "Automatizacion", "Archivo de audios"],
  },
  {
    name: "Forza Presupuestos",
    status: "Panel privado",
    type: "App de presupuestos",
    images: ["/forza-preview.png", "/forza-pdf-preview.png"],
    description:
      "Webapp pensada para celular para una empresa de reformas en Mallorca (España): arma presupuestos, guarda el historial y genera el PDF final desde cualquier lugar, con acceso protegido por login.",
    chips: ["Acceso con login", "Historial", "PDF"],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const closeProjectModal = () => {
    setSelectedProject(null);
    setGalleryIndex(0);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProjectModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const message =
    "Hola Nicolas, quiero hacer una consulta por desarrollo de software a medida para mi negocio.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "NM Software",
        alternateName: "Nicolas Marset Software",
        url: siteUrl,
        logo: `${siteUrl}/logo-circle.png`,
        image: `${siteUrl}/hero-sistemas.png`,
        description:
          "Desarrollo de software a medida, automatizaciones de procesos e integraciones entre herramientas, paginas web, tiendas online y paneles de gestion para negocios.",
        areaServed: [
          {
            "@type": "Country",
            name: "Argentina",
          },
        ],
        founder: {
          "@type": "Person",
          name: "Nicolas Marset",
        },
        sameAs: [instagramUrl, facebookUrl],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${whatsappNumber}`,
          availableLanguage: "Spanish",
        },
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "NM Software",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
        inLanguage: "es-AR",
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Proyectos de NM Software",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.description,
            ...(project.liveUrl ? { url: project.liveUrl } : {}),
          },
        })),
      },
    ],
  };

  useEffect(() => {
    const sections = ["inicio", ...navItems.map((item) => item.id)];
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = 360;
        let current = "inicio";
        let closestDistance = Number.POSITIVE_INFINITY;

        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (!element) return;

          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - marker);

          if (rect.top <= marker && rect.bottom > marker) {
            current = id;
            closestDistance = 0;
            return;
          }

          if (rect.top <= marker && distance < closestDistance) {
            current = id;
            closestDistance = distance;
          }
        });

        setActiveSection(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark" aria-hidden="true">
            <Image
              className="brand-core"
              src="/logo-circle.png"
              alt=""
              width={48}
              height={48}
              priority
            />
            <span className="brand-orbit" />
          </span>
          <span>
            <strong>Nicolas Marset</strong>
            <small>Software, automatizaciones e integraciones</small>
          </span>
        </a>
        <nav className="nav" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={whatsappUrl}>
          <MessageCircle size={18} />
          <span>Consultar</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/hero-sistemas.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="container hero-layout">
          <div className="hero-content reveal">
            <p className="eyebrow">
              <Sparkles size={16} /> Software, automatizaciones e integraciones a medida
            </p>
            <h1>Creamos software, automatizaciones e integraciones para negocios que venden, operan y escalan</h1>
            <p className="hero-copy">
              Traducimos objetivos comerciales y procesos internos en sitios web, sistemas de gestion,
              automatizaciones y conexiones entre las herramientas que ya usas. Tecnologia clara, rapida
              y confiable para convertir consultas, ordenar operaciones y sostener el crecimiento.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl}>
                <MessageCircle size={20} /> Solicitar diagnostico
              </a>
              <a className="button button-secondary" href="#trabajos">
                Ver proyecto real <ArrowRight size={19} />
              </a>
            </div>
            <div className="stack-strip" aria-label="Tecnologias y capacidades">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-console reveal reveal-delay-2" aria-label="Vista previa de sistema de gestion">
            <div className="console-top">
              <span />
              <span />
              <span />
              <strong>dashboard.negocio</strong>
            </div>
            <div className="console-body">
              <div className="console-sidebar">
                <Code2 size={20} />
                <i />
                <i />
                <i />
              </div>
              <div className="console-main">
                <div className="console-kpis">
                  <div>
                    <small>Pedidos</small>
                    <strong>128</strong>
                    <em>+18%</em>
                  </div>
                  <div>
                    <small>Consultas</small>
                    <strong>42</strong>
                    <em>online</em>
                  </div>
                </div>
                <div className="chart-card">
                  <div className="chart-line" />
                  <div className="chart-bars">
                    <span style={{ height: "42%" }} />
                    <span style={{ height: "68%" }} />
                    <span style={{ height: "54%" }} />
                    <span style={{ height: "82%" }} />
                    <span style={{ height: "64%" }} />
                    <span style={{ height: "92%" }} />
                  </div>
                </div>
                <div className="task-list">
                  {["Catalogo sincronizado", "Stock bajo detectado", "Pedido listo para revisar"].map((item) => (
                    <div key={item}>
                      <Check size={15} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="floating-badge badge-one">
              <Zap size={16} />
              <span>Rapido</span>
            </div>
            <div className="floating-badge badge-two">
              <ShieldCheck size={16} />
              <span>Confiable</span>
            </div>
          </div>
        </div>

        <div className="container hero-stats" aria-label="Beneficios">
          {trustSignals.map((signal) => (
            <span key={signal.label}>
              <strong>{signal.value}</strong>
              {signal.label}
            </span>
          ))}
        </div>
      </section>

      <section className="logo-band" aria-label="Enfoque de trabajo">
        <div className="container logo-band-inner">
          <span>Diseno comercial</span>
          <span>Desarrollo moderno</span>
          <span>Paneles internos</span>
          <span>Automatizaciones</span>
          <span>Publicacion online</span>
        </div>
      </section>

      <section className="section services-section" id="servicios">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><Code2 size={16} /> Soluciones digitales</p>
            <h2>Soluciones concretas para que tu negocio deje de depender de parches</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="card service-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={service.title}>
                <div className="card-shine" />
                <service.icon size={34} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}><ChevronRight size={15} /> {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-section">
        <div className="container ai-panel reveal">
          <div>
            <p className="eyebrow"><Bot size={16} /> Automatizaciones e integraciones</p>
            <h2>Procesos que se resuelven solos, sistemas que se hablan entre si</h2>
            <p>
              No es un agregado, es parte del sistema: respuestas automaticas, reportes que se arman
              solos, sincronizacion de datos y conexiones entre las herramientas que ya usas como
              WhatsApp, planillas, CRMs y sistemas de pago.
            </p>
          </div>
          <div className="automation-flow" aria-hidden="true">
            <span><MessageCircle size={18} /> WhatsApp</span>
            <i />
            <span><Zap size={18} /> Automatizacion</span>
            <i />
            <span><Share2 size={18} /> CRM / Planilla</span>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="reveal">
            <p className="eyebrow"><PackageCheck size={16} /> Funcionalidad real</p>
            <h2>No es solo una pagina: es software pensado para trabajar mejor</h2>
            <p>
              La idea es construir algo que te sirva todos los dias: recibir consultas, mostrar
              productos, registrar pedidos, controlar stock o ver datos importantes desde un panel.
            </p>
            <div className="mini-proof">
              <Gauge size={22} />
              <span>
                <strong>Performance, claridad y confianza</strong>
                Cada pantalla se piensa para que el cliente entienda rapido y la operacion diaria avance sin friccion.
              </span>
            </div>
          </div>
          <div className="feature-list">
            {features.map((feature, index) => (
              <div className="feature-item reveal" style={{ animationDelay: `${index * 55}ms` }} key={feature}>
                <Check size={18} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><Clock3 size={16} /> Metodo de trabajo</p>
            <h2>Un proceso simple para pasar de la idea a una version usable</h2>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <article className="reveal" style={{ animationDelay: `${index * 100}ms` }} key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="trabajos">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow"><LayoutDashboard size={16} /> Portfolio</p>
              <h2>Proyectos reales, mostrados de forma mas limpia y ordenada</h2>
            </div>
            <p className="section-note">
              Ejemplos actuales: una tienda online para Agrovet, un sitio para un taller mecanico, una
              web con automatizacion para un programa de radio y una app de presupuestos a medida.
            </p>
          </div>
          <div className="work-proofs" aria-label="Señales de confianza">
            <span><ShieldCheck size={16} /> Trabajo real</span>
            <span><MousePointer2 size={16} /> CTA directo</span>
            <span><Gauge size={16} /> Diseno ordenado</span>
            <span><BarChart3 size={16} /> Pensado para vender</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card reveal"
                key={project.name}
                role="button"
                tabIndex={0}
                aria-label={`Ver mas sobre ${project.name}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="project-preview">
                  <Image
                    src={project.images[0]}
                    alt={`Vista previa del proyecto ${project.name}`}
                    width={1200}
                    height={750}
                    loading="eager"
                    sizes="(max-width: 920px) calc(100vw - 56px), (max-width: 1280px) 46vw, 560px"
                  />
                  <div className="project-badge">
                    <span>{project.status}</span>
                    <strong>{project.type}</strong>
                  </div>
                </div>
                <div className="project-content">
                  <div>
                    <div className="project-meta">
                      <span className="status-pill">{project.status}</span>
                      <span className="project-kind">{project.type}</span>
                    </div>
                    <div className="project-body">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-footer">
                      <div className="project-chips" aria-label={`Tecnologias y rasgos de ${project.name}`}>
                        {project.chips.map((chip) => (
                          <span key={chip}>{chip}</span>
                        ))}
                      </div>
                      {project.liveUrl ? (
                        <a
                          className="button project-link"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Abrir sitio online
                          <ExternalLink size={18} />
                        </a>
                      ) : (
                        <span className="project-link project-link-locked">
                          Panel privado
                          <Lock size={16} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section assurance-section">
        <div className="container assurance-shell reveal">
          <div className="assurance-copy">
            <p className="eyebrow"><ShieldCheck size={16} /> Garantia y orden</p>
            <h2>Si algo no queda como lo acordamos, se ajusta hasta que quede correcto.</h2>
            <p>
              Trabajo con revisiones claras, seguimiento directo y una entrega pensada para que no
              tengas una pagina suelta sino una presencia comercial seria.
            </p>
            <div className="assurance-list">
              <span>Revisiones incluidas</span>
              <span>Sin letra chica</span>
              <span>Soporte por WhatsApp</span>
              <span>Entrega lista para publicar</span>
            </div>
          </div>
          <div className="assurance-stats" aria-label="Indicadores de valor">
            <div>
              <strong>4</strong>
              <span>Proyectos en portada</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Disponible online</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Atencion directa</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section plans-section" id="planes">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow"><Rocket size={16} /> Formas de arrancar</p>
              <h2>Elegimos el alcance segun lo que necesitas vender o administrar</h2>
            </div>
            <a className="button button-dark" href={whatsappUrl}>Pedir presupuesto</a>
          </div>
          <div className="package-grid">
            {packages.map((item, index) => (
              <article
                className={`card package-card reveal ${item.highlighted ? "featured-package" : ""}`}
                style={{ animationDelay: `${index * 90}ms` }}
                key={item.name}
              >
                {item.highlighted ? <span className="status-pill">Mas pedido</span> : null}
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <ul>
                  {item.items.map((feature) => (
                    <li key={feature}><Check size={16} /> {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="container contact-grid">
          <div className="reveal">
            <p className="eyebrow"><MousePointer2 size={16} /> Diagnostico inicial</p>
            <h2>El proximo sistema empieza con una conversacion clara</h2>
            <p>
              El primer paso es entender el rubro, el objetivo y el problema operativo o comercial
              a resolver. A partir de eso se propone un alcance concreto y los proximos pasos.
            </p>
          </div>
          <div className="contact-actions reveal reveal-delay-2">
            <a className="contact-link" href={whatsappUrl}>
              <MessageCircle size={22} />
              <span><strong>WhatsApp</strong><small>Consulta rapida y directa</small></span>
              <ArrowRight size={18} />
            </a>
            <a className="contact-link" href={instagramUrl} target="_blank" rel="noreferrer">
              <Camera size={22} />
              <span><strong>Instagram</strong><small>@nm.software</small></span>
              <ArrowRight size={18} />
            </a>
            <a className="contact-link" href={facebookUrl} target="_blank" rel="noreferrer">
              <Share2 size={22} />
              <span><strong>Facebook</strong><small>NM Software</small></span>
              <ArrowRight size={18} />
            </a>
            <a className="contact-link" href="#inicio">
              <BarChart3 size={22} />
              <span><strong>Ver enfoque</strong><small>Software, automatizaciones e integraciones</small></span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Nicolas Marset</span>
          <span>Desarrollo de software, automatizaciones e integraciones a medida</span>
        </div>
      </footer>

      <style jsx global>{`
        .work-proofs {
          margin-bottom: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .work-proofs span {
          min-height: 34px;
          padding: 0 12px;
          border: 1px solid var(--line);
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--soft);
          color: var(--text);
          font-size: 13px;
          font-weight: 820;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
          max-width: 880px;
          margin: 0 auto;
          align-items: stretch;
        }

        .project-card {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 12px 28px rgba(3, 16, 31, 0.07);
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 84, 210, 0.28);
          box-shadow: 0 18px 42px rgba(3, 16, 31, 0.1);
        }

        .project-preview {
          position: relative;
          border-bottom: 1px solid var(--line);
          aspect-ratio: 16 / 8.2;
          background:
            linear-gradient(135deg, rgba(0, 84, 210, 0.1), rgba(255, 122, 26, 0.1)),
            #f5f9ff;
          overflow: hidden;
        }

        .project-preview::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 22%, rgba(255, 255, 255, 0.22), transparent 42%);
          transform: translateX(-120%);
          transition: transform 0.7s ease;
          pointer-events: none;
        }

        .project-card:hover .project-preview::after {
          transform: translateX(120%);
        }

        .project-preview img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.34s ease;
        }

        .project-card:hover .project-preview img {
          transform: scale(1.025);
        }

        .project-badge {
          position: absolute;
          left: 14px;
          bottom: 14px;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 8px;
          background: rgba(8, 14, 18, 0.72);
          color: white;
          backdrop-filter: blur(14px);
        }

        .project-badge span {
          display: block;
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .project-badge strong {
          display: block;
          margin-top: 4px;
          font-size: 14px;
          line-height: 1.1;
        }

        .project-content {
          padding: 10px;
          display: flex;
          flex: 1;
        }

        .project-content > div {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 8px;
          min-height: 0;
        }

        .project-body {
          display: grid;
          gap: 8px;
          align-content: start;
        }

        .project-footer {
          margin-top: auto;
          display: grid;
          gap: 8px;
        }

        .project-meta {
          margin-bottom: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .project-kind {
          min-height: 32px;
          padding: 0 12px;
          border: 1px solid var(--line);
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          color: var(--muted);
          font-size: 12px;
          font-weight: 850;
        }

        .project-content h3 {
          margin: 0;
          font-size: clamp(17px, 1.4vw, 20px);
          line-height: 1.05;
        }

        .project-content p {
          margin: 7px 0 0;
          color: var(--muted);
          line-height: 1.4;
          font-size: 12.5px;
        }

        .project-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-chips span {
          min-height: 26px;
          padding: 0 10px;
          border: 1px solid rgba(0, 84, 210, 0.14);
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          background: rgba(0, 84, 210, 0.05);
          color: var(--teal-dark);
          font-size: 12px;
          font-weight: 820;
        }

        .project-link {
          min-height: 34px;
          width: fit-content;
          margin-top: auto;
          padding: 0 12px;
          background: var(--teal);
          color: white;
          align-self: start;
          font-size: 13px;
          border-radius: 7px;
          box-shadow: 0 10px 22px rgba(0, 84, 210, 0.18);
        }

        .project-link:hover {
          background: var(--teal-dark);
          box-shadow: 0 14px 28px rgba(0, 84, 210, 0.22);
        }

        .project-link-locked {
          background: var(--soft);
          color: var(--muted);
          cursor: default;
          box-shadow: none;
        }

        .project-card {
          cursor: pointer;
        }

        .project-card:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 3px;
        }

        .project-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(3, 16, 31, 0.6);
          backdrop-filter: blur(6px);
          animation: modalFade 0.18s ease;
        }

        .project-modal {
          width: 100%;
          max-width: 640px;
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 30px 80px rgba(3, 16, 31, 0.32);
          position: relative;
        }

        .project-modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: none;
          background: rgba(8, 14, 18, 0.65);
          color: white;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .project-modal-gallery {
          position: relative;
          background: var(--soft);
        }

        .project-modal-gallery img {
          width: 100%;
          height: auto;
          display: block;
        }

        .project-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: none;
          background: rgba(8, 14, 18, 0.6);
          color: white;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .project-modal-prev {
          left: 12px;
        }

        .project-modal-next {
          right: 12px;
        }

        .project-modal-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
        }

        .project-modal-dots span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.55);
          cursor: pointer;
        }

        .project-modal-dots span.is-active {
          background: white;
        }

        .project-modal-content {
          padding: 22px;
          display: grid;
          gap: 12px;
        }

        .project-modal-content h3 {
          margin: 0;
          font-size: clamp(20px, 2.4vw, 26px);
        }

        .project-modal-content p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        @keyframes modalFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .nav a.is-active {
          color: white;
          background: rgba(255, 255, 255, 0.14);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
        }

        .assurance-section {
          background:
            radial-gradient(circle at 10% 20%, rgba(255, 196, 61, 0.12), transparent 22rem),
            linear-gradient(180deg, #03101f, #061a33);
          color: white;
        }

        .assurance-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          gap: 18px;
          align-items: stretch;
        }

        .assurance-copy,
        .assurance-stats {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
        }

        .assurance-copy {
          padding: 28px;
        }

        .assurance-copy h2 {
          margin: 12px 0 0;
          color: white;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.06;
        }

        .assurance-copy p {
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
          font-size: 16px;
        }

        .assurance-list {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .assurance-list span {
          min-height: 34px;
          padding: 0 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          color: white;
          background: rgba(255, 255, 255, 0.05);
          font-size: 13px;
          font-weight: 850;
        }

        .assurance-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          overflow: hidden;
        }

        .assurance-stats div {
          min-height: 150px;
          padding: 22px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: grid;
          align-content: center;
          gap: 8px;
          text-align: center;
        }

        .assurance-stats div:nth-child(2n) {
          border-right: 0;
        }

        .assurance-stats div:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .assurance-stats strong {
          color: #ff9b24;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1;
        }

        .assurance-stats span {
          color: rgba(255, 255, 255, 0.74);
          font-size: 15px;
          font-weight: 800;
        }

        @media (max-width: 920px) {
          .assurance-shell {
            grid-template-columns: 1fr;
          }

          .project-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .project-link {
            width: 100%;
          }

          .assurance-copy {
            padding: 22px;
          }

          .assurance-stats {
            grid-template-columns: 1fr;
          }

          .assurance-stats div {
            min-height: 120px;
            border-right: 0;
          }
        }
      `}</style>

      {selectedProject ? (
        <div
          className="project-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle del proyecto ${selectedProject.name}`}
          onClick={closeProjectModal}
        >
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button className="project-modal-close" onClick={closeProjectModal} aria-label="Cerrar">
              <X size={20} />
            </button>

            <div className="project-modal-gallery">
              <Image
                src={selectedProject.images[galleryIndex]}
                alt={`Captura ${galleryIndex + 1} de ${selectedProject.name}`}
                width={1200}
                height={750}
                sizes="(max-width: 720px) 100vw, 640px"
              />
              {selectedProject.images.length > 1 ? (
                <>
                  <button
                    className="project-modal-nav project-modal-prev"
                    aria-label="Imagen anterior"
                    onClick={() =>
                      setGalleryIndex(
                        (index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length
                      )
                    }
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="project-modal-nav project-modal-next"
                    aria-label="Imagen siguiente"
                    onClick={() => setGalleryIndex((index) => (index + 1) % selectedProject.images.length)}
                  >
                    <ChevronRight size={22} />
                  </button>
                  <div className="project-modal-dots">
                    {selectedProject.images.map((image, index) => (
                      <span
                        key={image}
                        className={index === galleryIndex ? "is-active" : ""}
                        onClick={() => setGalleryIndex(index)}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <div className="project-modal-content">
              <div className="project-meta">
                <span className="status-pill">{selectedProject.status}</span>
                <span className="project-kind">{selectedProject.type}</span>
              </div>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-chips" aria-label={`Tecnologias y rasgos de ${selectedProject.name}`}>
                {selectedProject.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              {selectedProject.liveUrl ? (
                <a className="button project-link" href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                  Abrir sitio online
                  <ExternalLink size={18} />
                </a>
              ) : (
                <span className="project-link project-link-locked">
                  Panel privado
                  <Lock size={16} />
                </span>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <ScrollToTopProgress />
    </main>
  );
}
