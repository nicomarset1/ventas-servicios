import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { areas } from "../content";
import styles from "./Areas.module.css";

// Home: las dos áreas del sitio, cada tarjeta lleva a su página (/web y /software).
export default function Areas() {
  return (
    <section id="servicios" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className="section-head is-center">
          <p className="eyebrow">Servicios</p>
          <h2>Qué puedo hacer por tu negocio</h2>
        </Reveal>

        <div className={styles.grid}>
          {areas.map(({ slug, icon: Icon, label, summary, services }, index) => (
            <Reveal key={slug} delay={index * 80}>
              <Link href={`/${slug}`} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{label}</h3>
                <p>{summary}</p>
                <ul className={styles.list}>
                  {services.map((service) => (
                    <li key={service.title}>{service.title}</li>
                  ))}
                </ul>
                <span className={styles.more}>
                  Ver más
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
