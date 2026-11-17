import { Plus } from "lucide-react";
import { faqSection, faqs, whatsappLink } from "../content";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section id="preguntas" className={`section ${styles.section}`} aria-labelledby="preguntas-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.head}>
          <h2 id="preguntas-title">{faqSection.title}</h2>
          <p className={styles.lead}>{faqSection.lead}</p>
          <a
            className="btn btn-ghost"
            href={whatsappLink("Hola Nicolás, vi la web de NM Software y tengo una pregunta.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={19} />
            {faqSection.cta}
          </a>
        </div>

        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.item} name="preguntas">
              <summary className={styles.question}>
                <span>{faq.question}</span>
                <Plus className={styles.icon} size={22} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
