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
    status: "Proyecto destacado",
    type: "Tienda online + gestion interna",
    url: agrovetProjectUrl,
    image: "/agrovet-preview-actual.png",
    description:
      "Tienda online para una veterinaria/pet shop, con catalogo de productos, carrito, pedidos y estructura de administracion. Es un proyecto en evolucion, pero ya muestra una solucion real aplicada a un negocio concreto.",
    points: ["Catalogo de productos", "Carrito y pedidos", "Panel de administracion", "Base para control de stock"],
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
              <p className="eyebrow"><LayoutDashboard size={16} /> Proyecto destacado</p>
              <h2>Una muestra real del tipo de software que se puede construir</h2>
            </div>
            <p className="section-note">
              Este primer caso muestra una tienda con funcionalidades reales. A medida que termine
              nuevos trabajos, este apartado va creciendo.
            </p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card reveal" key={project.name}>
                <div className="work-preview">
                  <Image
                    src={project.image}
                    alt={`Vista previa del proyecto ${project.name}`}
                    width={1200}
                    height={568}
                    loading="eager"
                    sizes="(max-width: 920px) calc(100vw - 64px), 1100px"
                  />
                </div>
                <div className="work-content">
                  <div>
                    <span className="status-pill">{project.status}</span>
                    <h3>{project.name}</h3>
                    <strong>{project.type}</strong>
                    <p>{project.description}</p>
                    <a
                      className={`button work-link ${project.url ? "" : "button-disabled"}`}
                      href={project.url || "#trabajos"}
                      target={project.url ? "_blank" : undefined}
                      rel={project.url ? "noreferrer" : undefined}
                      aria-disabled={!project.url}
                    >
                      {project.url ? "Ver proyecto online" : "Proximamente online"}
                      {project.url ? <ExternalLink size={18} /> : <Clock3 size={18} />}
                    </a>
                  </div>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}><Check size={16} /> {point}</li>
                    ))}
                  </ul>
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

      <ScrollToTopProgress />
    </main>
  );
}
