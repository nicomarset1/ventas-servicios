import Reveal from "./Reveal";
import { services } from "../content";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="servicios" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className="section-head is-center">
          <p className="eyebrow">Servicios</p>
          <h2>Qué puedo hacer por tu negocio</h2>
        </Reveal>

        <div className={styles.grid}>
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} as="article" delay={index * 80} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
