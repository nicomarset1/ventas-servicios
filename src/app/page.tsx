'use client';

import Image from "next/image";
import ScrollToTopProgress from "./ScrollToTopProgress";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  Gauge,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MousePointer2,
  PackageCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Zap,
} from "lucide-react";

const whatsappNumber = "5492234264682";
const email = "nicolasmarsetg@gmail.com";
const agrovetProjectUrl = "";

const services = [
  {
    icon: Store,
    title: "Webs que venden",
    text: "Landings, catalogos y tiendas online con una estructura pensada para convertir visitas en consultas reales.",
    details: ["Copy comercial", "WhatsApp directo", "SEO inicial"],
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas de gestion",
    text: "Paneles privados para administrar pedidos, clientes, productos, movimientos y reportes desde un solo lugar.",
    details: ["Usuarios y permisos", "Reportes", "Flujos a medida"],
  },
  {
    icon: Database,
    title: "Stock e inventario",
    text: "Control de productos, categorias, variantes, precios, movimientos y alertas para ordenar la operacion diaria.",
    details: ["Base de datos", "Alertas", "Historial"],
  },
];

const trustSignals = [
  { value: "1:1", label: "Atencion directa del equipo" },
  { value: "100%", label: "Responsive y preparado para publicar" },
  { value: "24/7", label: "Tu web o sistema disponible online" },
  { value: "+IA", label: "Automatizaciones cuando aportan valor" },
];

const stack = ["Next.js", "React", "Base de datos", "APIs", "WhatsApp", "Deploy"];

const features = [
  "Diseno responsive para celular, tablet y escritorio",
  "Carga rapida y estructura clara para Google",
  "Contacto directo por WhatsApp, email o formulario",
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

const projects = [
  {
    name: "Agrovet MDP",
    status: "Tienda online",
    type: "Catalogo + carrito",
    url: agrovetProjectUrl,
    image: "/agrovet-preview-actual.png",
    description:
      "Una tienda online para veterinaria y pet shop con enfoque comercial, navegacion limpia y base lista para seguir creciendo.",
    chips: ["Responsive", "Carrito", "Stock"],
    note: "Proyecto en evolucion con base real de negocio.",
    stats: ["Catalogo de productos", "Pedidos online", "Panel de gestion"],
  },
  {
    name: "Mecanica Marset",
    status: "Sitio local",
    type: "Taller mecanico",
    url: "",
    image: "/pag-taller-preview.png",
    description:
      "Sitio informativo para un taller mecanico con hero fuerte, turnos por WhatsApp, reseñas, ubicacion y contenido pensado para generar confianza.",
    chips: ["WhatsApp", "Reseñas", "Ubicacion"],
    note: "Disponible como proyecto de portfolio.",
    stats: ["Atencion por turno", "Mapa embebido", "Prueba social"],
  },
];

export default function Home() {
  const message =
    "Hola Nicolas, quiero hacer una consulta por desarrollo de software a medida para mi negocio.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Consulta por desarrollo de software a medida"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-core">NM</span>
            <span className="brand-orbit brand-orbit-one" />
            <span className="brand-orbit brand-orbit-two" />
            <i />
          </span>
          <span>
            <strong>Nicolas Marset</strong>
            <small>Software, webs y gestion</small>
          </span>
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Proyectos</a>
          <a href="#proceso">Proceso</a>
          <a href="#planes">Planes</a>
          <a href="#contacto">Contacto</a>
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
              <Sparkles size={16} /> Desarrollo de software a medida
            </p>
            <h1>Creamos software a medida para negocios que venden, operan y escalan</h1>
            <p className="hero-copy">
              Traducimos objetivos comerciales y procesos internos en sitios web, catalogos, paneles
              de gestion y sistemas de stock. Tecnologia clara, rapida y confiable para convertir
              consultas, ordenar operaciones y sostener el crecimiento.
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
              Dos ejemplos actuales: una tienda online para Agrovet y un sitio para un taller mecanico.
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
              <article className="project-card reveal" key={project.name}>
                <div className="project-preview">
                  <Image
                    src={project.image}
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
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-chips" aria-label={`Tecnologias y rasgos de ${project.name}`}>
                      {project.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                    <a
                      className={`button project-link ${project.url ? "" : "button-disabled"}`}
                      href={project.url || "#trabajos"}
                      target={project.url ? "_blank" : undefined}
                      rel={project.url ? "noreferrer" : undefined}
                      aria-disabled={!project.url}
                    >
                      {project.url ? "Ver proyecto online" : "Proyecto en portfolio"}
                      {project.url ? <ExternalLink size={18} /> : <Clock3 size={18} />}
                    </a>
                  </div>
                  <ul className="project-points">
                    {project.stats.map((point) => (
                      <li key={point}><Check size={15} /> {point}</li>
                    ))}
                  </ul>
                  <p className="project-note">{project.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-section">
        <div className="container ai-panel reveal">
          <div>
            <p className="eyebrow"><Bot size={16} /> Extra profesional</p>
            <h2>Automatizaciones e IA cuando realmente mejoran el negocio</h2>
            <p>
              Se pueden sumar respuestas automaticas, clasificacion de consultas, reportes,
              formularios inteligentes o integraciones con herramientas ya existentes.
            </p>
          </div>
          <div className="automation-flow" aria-hidden="true">
            <span><MousePointer2 size={18} /> Consulta</span>
            <i />
            <span><Blocks size={18} /> Sistema</span>
            <i />
            <span><BarChart3 size={18} /> Reporte</span>
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
            <a className="contact-link" href={mailUrl}>
              <Mail size={22} />
              <span><strong>Email</strong><small>{email}</small></span>
              <ArrowRight size={18} />
            </a>
            <a className="contact-link" href="#inicio">
              <BarChart3 size={22} />
              <span><strong>Ver enfoque</strong><small>Web, gestion y stock</small></span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Nicolas Marset</span>
          <span>Desarrollo de software, paginas web, paneles de gestion y sistemas de stock</span>
        </div>
      </footer>

      <style jsx global>{`
        .work-proofs {
          margin-bottom: 18px;
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .project-card {
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 16px 48px rgba(11, 16, 20, 0.1);
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8, 124, 123, 0.28);
          box-shadow: 0 24px 64px rgba(11, 16, 20, 0.14);
        }

        .project-preview {
          position: relative;
          border-bottom: 1px solid var(--line);
          aspect-ratio: 16 / 10;
          background:
            linear-gradient(135deg, rgba(8, 124, 123, 0.1), rgba(239, 107, 74, 0.1)),
            #fbf8ff;
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
          padding: 22px;
          display: grid;
          gap: 18px;
        }

        .project-meta {
          margin-bottom: 14px;
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
          font-size: clamp(24px, 2.2vw, 32px);
          line-height: 1.05;
        }

        .project-content p {
          margin: 12px 0 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .project-chips {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-chips span {
          min-height: 32px;
          padding: 0 10px;
          border: 1px solid rgba(8, 124, 123, 0.14);
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          background: rgba(8, 124, 123, 0.05);
          color: var(--teal-dark);
          font-size: 12px;
          font-weight: 820;
        }

        .project-points {
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          list-style: none;
        }

        .project-points li {
          min-height: 52px;
          padding: 12px;
          border: 1px solid var(--line);
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text);
          background: var(--soft);
          font-size: 13px;
          font-weight: 820;
        }

        .project-points li svg {
          color: var(--coral);
          flex: 0 0 auto;
        }

        .project-link {
          width: fit-content;
          margin-top: 2px;
          background: var(--teal);
          color: white;
        }

        .project-link:hover {
          background: var(--teal-dark);
        }

        .project-note {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
        }

        .button-disabled,
        .button-disabled:hover {
          background: #e9eeee;
          color: #637076;
          border-color: #d8e1e2;
          box-shadow: none;
          cursor: default;
          transform: none;
        }

        @media (max-width: 920px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .project-points {
            grid-template-columns: 1fr;
          }

          .project-preview {
            aspect-ratio: 16 / 10;
          }

          .project-link {
            width: 100%;
          }
        }
      `}</style>

      <ScrollToTopProgress />
    </main>
  );
}
