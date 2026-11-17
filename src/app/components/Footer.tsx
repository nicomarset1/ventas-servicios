import Image from "next/image";
import Link from "next/link";
import { areas, footer, whatsappUrl } from "../content";
import { projects } from "../projects";
import { socials } from "./socials";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-hide-mobile-cta>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            <Image src="/logo-circle.png" alt="" width={40} height={40} />
            <span>NM Software</span>
          </Link>
          <p className={styles.tagline}>{footer.tagline}</p>
          <div className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.social}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.col} aria-label="Servicios">
          <p className={styles.colTitle}>Servicios</p>
          {areas.map((area) => (
            <Link key={area.slug} href={`/${area.slug}`}>
              {area.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>

        <nav className={styles.col} aria-label="Trabajos">
          <p className={styles.colTitle}>Trabajos</p>
          {projects.map((project) => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`}>
              {project.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} NM Software</p>
        <p>Mar del Plata, Argentina</p>
      </div>
    </footer>
  );
}
