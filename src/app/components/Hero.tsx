import { Check } from "lucide-react";
import type { AreaSlug, HeroText } from "../content";
import { ctaLabel, heroPoints, whatsappUrl } from "../content";
import HeroCollage from "./HeroCollage";
import HeroDive from "./HeroDive";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Hero.module.css";

/*
  Portada. Con movimiento activado, "stage" queda fija mientras se recorre "space"
  y HeroDive hace entrar a la pantalla de la notebook hasta la banda de trabajos.
*/
export default function Hero({ text, area }: { text: HeroText; area?: AreaSlug }) {
  return (
    <section className={styles.hero} id="inicio" data-dive-root>
      <div className={styles.stage} data-dive="stage">
        <div className={`container ${styles.layout}`}>
          <div className={styles.copy} data-dive="copy">
            <h1 className={styles.title}>{text.title}</h1>
            <p className={styles.lead}>{text.lead}</p>
            <div className={styles.action}>
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-hide-mobile-cta>
                <WhatsAppIcon />
                {ctaLabel}
              </a>
              <ul className={styles.points}>
                {heroPoints.map((point) => (
                  <li key={point}>
                    <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.visual}>
            <HeroCollage area={area} />
          </div>
        </div>
        <div className={styles.portal} data-dive="portal" aria-hidden="true" />
      </div>
      <div className={styles.space} data-dive="space" aria-hidden="true" />
      <HeroDive />
    </section>
  );
}
