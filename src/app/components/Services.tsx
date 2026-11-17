import Link from "next/link";
import type { AreaSlug } from "../content";
import { services, servicesSection, whatsappLink } from "../content";
import { getProject } from "../projects";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Services.module.css";

export default function Services({ area }: { area?: AreaSlug }) {
  const items = area ? services.filter((service) => service.area === area) : services;

  return (
    <section id="servicios" className={`section ${styles.section}`} aria-labelledby="servicios-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="servicios-title">{servicesSection.title}</h2>
          <p className="lead">{servicesSection.lead}</p>
        </div>

        <ul className={styles.grid} data-count={items.length}>
          {items.map((service) => {
            const example = getProject(service.example);
            return (
              <li key={service.title} className={styles.item}>
                <h3>{service.title}</h3>
                <p className={styles.text}>{service.text}</p>
                <ul className={styles.includes}>
                  {service.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  {example && (
                    <p className={styles.example}>
                      {servicesSection.exampleLabel}:{" "}
                      <Link href={`/proyectos/${example.slug}`} className="text-link">
                        {example.name}
                      </Link>
                    </p>
                  )}
                  <a className={styles.ask} href={whatsappLink(service.message)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={18} />
                    {servicesSection.ask}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
