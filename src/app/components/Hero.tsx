import { Check } from "lucide-react";
import type { AreaSlug, HeroText } from "../content";
import { ctaLabel, heroPoints, whatsappUrl } from "../content";
import HeroCollage from "./HeroCollage";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Hero.module.css";

export default function Hero({ text, area }: { text: HeroText; area?: AreaSlug }) {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
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
    </section>
  );
}
