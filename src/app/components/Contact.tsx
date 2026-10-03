import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { contact, whatsappUrl } from "../content";
import { socials } from "./socials";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <h2>{contact.title}</h2>
          <p className={styles.copy}>{contact.copy}</p>
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            {contact.cta}
          </a>
          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
