import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  Clock3,
  Code2,
  ExternalLink,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MousePointer2,
  PackageCheck,
  Rocket,
  Sparkles,
  Store,
} from "lucide-react";

const whatsappNumber = "5492230000000";
const email = "tu-email@ejemplo.com";
const agrovetProjectUrl = "";

const services = [
  {
    icon: Store,
    title: "Paginas para vender",
    text: "Landing pages, catalogos, tiendas online y sitios institucionales pensados para convertir visitas en consultas.",
  },
  {
    icon: LayoutDashboard,
    title: "Paneles de gestion",
    text: "Pantallas privadas para administrar pedidos, clientes, productos, movimientos y reportes sin depender de planillas.",
  },
  {
    icon: Boxes,
    title: "Stock e inventario",
    text: "Control de stock, alertas, categorias, variantes, precios y movimientos para negocios que necesitan orden diario.",
  },
];

const features = [
  "Diseno responsive para celular, tablet y escritorio",
  "Carga rapida y estructura lista para Google",
  "Contacto directo por WhatsApp, email o formulario",
  "Panel privado con permisos cuando el proyecto lo requiere",
  "Base de datos, reportes y automatizaciones a medida",
  "Preparado para publicar en Vercel, Netlify o hosting propio",
];

const packages = [
  {
    name: "Web de venta",
    price: "Ideal para empezar",
    items: ["Pagina principal", "Secciones comerciales", "Botones de contacto", "SEO basico"],
  },
  {
    name: "Catalogo o tienda",
    price: "Para vender mejor",
    items: ["Productos y categorias", "Carrito o consulta", "Filtros y busqueda", "Panel simple"],
  },
  {
    name: "Gestion a medida",
    price: "Para ordenar el negocio",
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
    "Hola, quiero consultar por desarrollo de software a medida para mi negocio.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Consulta por desarrollo de software a medida"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark" aria-hidden="true">
            <Code2 size={23} />
            <i />
          </span>
          <span>
            <strong>Software a Medida</strong>
            <small>Webs, stock y gestion</small>
          </span>
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Proyectos</a>
          <a href="#proceso">Proceso</a>
          <a href="#planes">Planes</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="icon-button" href={whatsappUrl} aria-label="Contactar por WhatsApp">
          <MessageCircle size={20} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media">
          <Image
            src="/hero-sistemas.png"
            alt="Mockups de tienda online, panel de gestion y sistema de stock"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">
            <Sparkles size={16} /> Desarrollo de software a medida
          </p>
          <h1>Desarrollo de software a medida para vender y administrar mejor tu negocio</h1>
          <p className="hero-copy">
            Creo paginas web, catalogos, paneles internos y sistemas de stock para comercios,
            profesionales y emprendimientos que necesitan una herramienta clara, rapida y usable.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl}>
              <MessageCircle size={20} /> Consultar por WhatsApp
            </a>
            <a className="button button-secondary" href="#servicios">
              Ver servicios <ArrowRight size={19} />
            </a>
          </div>
          <div className="hero-stats" aria-label="Beneficios">
            <span><strong>Web</strong> venta y presencia</span>
            <span><strong>Gestion</strong> pedidos y clientes</span>
            <span><strong>Stock</strong> inventario y reportes</span>
          </div>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><Code2 size={16} /> Que puedo crear</p>
            <h2>Soluciones concretas para que tu negocio deje de depender de parches</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card service-card" key={service.title}>
                <service.icon size={34} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow"><PackageCheck size={16} /> Funcionalidad real</p>
            <h2>No es solo una pagina: es software pensado para trabajar mejor</h2>
            <p>
              La idea es construir algo que te sirva todos los dias: recibir consultas, mostrar
              productos, registrar pedidos, controlar stock o ver datos importantes desde un panel.
            </p>
          </div>
          <div className="feature-list">
            {features.map((feature) => (
              <div className="feature-item" key={feature}>
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
            <article>
              <span>01</span>
              <h3>Relevamiento</h3>
              <p>Entiendo que vendes, como trabajas y que necesita resolver el proyecto.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Diseno y flujo</h3>
              <p>Defino secciones, pantallas, formularios, datos y acciones principales.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Desarrollo</h3>
              <p>Construyo el software con una interfaz clara y preparada para crecer.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Publicacion</h3>
              <p>Lo dejamos online, probamos el contacto y ajustamos detalles finales.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section work-section" id="trabajos">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow"><LayoutDashboard size={16} /> Proyecto destacado</p>
              <h2>Una muestra real del tipo de software que puedo construir</h2>
            </div>
            <p className="section-note">
              Este primer caso muestra una tienda con funcionalidades reales. A medida que termine nuevos trabajos, este apartado va creciendo.
            </p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.name}>
                <div className="work-preview">
                  <Image
                    src={project.image}
                    alt={`Vista previa del proyecto ${project.name}`}
                    width={1200}
                    height={568}
                    sizes="(max-width: 920px) calc(100vw - 64px), 600px"
                  />
                </div>
                <div className="work-content">
                  <span className="status-pill">{project.status}</span>
                  <h3>{project.name}</h3>
                  <strong>{project.type}</strong>
                  <p>{project.description}</p>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}><Check size={16} /> {point}</li>
                    ))}
                  </ul>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="planes">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow"><Rocket size={16} /> Formas de arrancar</p>
              <h2>Elegimos el alcance segun lo que necesitás vender o administrar</h2>
            </div>
            <a className="button button-dark" href={whatsappUrl}>Pedir presupuesto</a>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className="card package-card" key={item.name}>
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
          <div>
            <p className="eyebrow"><MousePointer2 size={16} /> Hablemos</p>
            <h2>Contame que querés vender, mostrar o gestionar</h2>
            <p>
              Mandame un mensaje con tu idea, rubro y que problema querés resolver. Te respondo
              con una propuesta de alcance y próximos pasos.
            </p>
          </div>
          <div className="contact-actions">
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
          <span>Software a Medida</span>
          <span>Desarrollo de software, paginas web, paneles de gestion y sistemas de stock</span>
        </div>
      </footer>
    </main>
  );
}
