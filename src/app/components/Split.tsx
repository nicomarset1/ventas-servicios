import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { AreaSlug } from "../content";
import { areas, hero, projects, whatsappUrl } from "../content";
import { isPortrait } from "./projectMedia";
import styles from "./Split.module.css";

// Orden en pantalla: software a la izquierda, web a la derecha.
const order: AreaSlug[] = ["software", "web"];

// Home: pantalla dividida en dos, cada mitad lleva a la página de su área.
export default function Split() {
  const panels = order.map((slug) => {
    const area = areas.find((item) => item.slug === slug)!;
    // Captura que asoma abajo: la primera horizontal de un proyecto del área.
    const cover = projects.find((project) => project.area === slug && !isPortrait(project.images[0]))?.images[0];
    return { area, cover };
  });

  return (
    <main className={styles.split}>
      <h1 className="sr-only">{`NM Software: ${hero.title}`}</h1>

      <div className={styles.top}>
        <span className={styles.brand}>
          <Image src="/logo-circle.png" alt="" width={36} height={36} preload />
          NM Software
        </span>
        <a className={`button button-primary ${styles.whatsapp}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      <div className={styles.panels}>
        {panels.map(({ area, cover }) => {
          const Icon = area.icon;

          return (
            <Link key={area.slug} href={`/${area.slug}`} className={`${styles.panel} ${styles[area.slug]}`}>
              <span className={styles.shade} aria-hidden="true" />
              {cover && (
                <span className={styles.preview} aria-hidden="true">
                  <Image src={cover} alt="" fill sizes="440px" className={styles.previewImage} />
                </span>
              )}

              <span className={styles.content}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={24} />
                </span>
                <span className={styles.eyebrow}>{area.hero.eyebrow}</span>
                <h2>{area.label}</h2>
                <span className={styles.summary}>{area.summary}</span>
                <span className={styles.cta}>
                  Entrar
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
