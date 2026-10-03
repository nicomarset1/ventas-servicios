import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { hero, projects, whatsappUrl } from "../content";
import styles from "./Hero.module.css";

// Capturas reales de proyectos publicados, rotan despacio dentro del marco
const showcase = projects.filter((project) => project.liveUrl).slice(0, 3);

const domainOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={`eyebrow ${styles.eyebrow} ${styles.enter}`}>{hero.eyebrow}</p>
          <h1 className={styles.enter} style={{ animationDelay: "80ms" }}>
            {hero.title}
          </h1>
          <p className={`${styles.copy} ${styles.enter}`} style={{ animationDelay: "160ms" }}>
            {hero.copy}
          </p>
          <div className={`${styles.actions} ${styles.enter}`} style={{ animationDelay: "240ms" }}>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              {hero.primaryCta}
            </a>
            <a className="button button-ghost" href="#proyectos">
              {hero.secondaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className={`${styles.browser} ${styles.enterVisual}`} aria-label="Proyectos publicados">
          <div className={styles.chrome} aria-hidden="true">
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.address}>
              {showcase.map((project, index) => (
                <span key={project.slug} className={styles.slide} style={{ animationDelay: `${index * 5}s` }}>
                  {domainOf(project.liveUrl!)}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.screen}>
            {showcase.map((project, index) => (
              <Image
                key={project.slug}
                className={styles.slide}
                style={{ animationDelay: `${index * 5}s` }}
                src={project.images[0]}
                alt={`${project.name}: ${project.summary}`}
                fill
                sizes="(min-width: 900px) 560px, 100vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
