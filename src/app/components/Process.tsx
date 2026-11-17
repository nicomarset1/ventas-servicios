import Image from "next/image";
import { Check } from "lucide-react";
import { process, proposalSample } from "../content";
import styles from "./Process.module.css";

// Pasos reales de trabajo, al lado de un ejemplo de la propuesta por escrito que recibe el cliente.
export default function Process() {
  return (
    <section id="proceso" className="section" aria-labelledby="proceso-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <h2 id="proceso-title">{process.title}</h2>
          <p className={`lead ${styles.lead}`}>{process.lead}</p>

          <ol className={styles.steps}>
            {process.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.number} aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.docWrap}>
          <figure className={styles.doc} role="img" aria-label={proposalSample.alt}>
            <div className={styles.docHead}>
              <Image src="/logo-circle.png" alt="" width={30} height={30} />
              <span>NM Software</span>
              <span className={styles.docLabel}>{proposalSample.label}</span>
            </div>
            <p className={styles.docTitle}>{proposalSample.title}</p>

            <p className={styles.docSection}>{proposalSample.includesTitle}</p>
            <ul className={styles.docList}>
              {proposalSample.includes.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.6} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.docSection}>{proposalSample.laterTitle}</p>
            <ul className={`${styles.docList} ${styles.docLater}`}>
              {proposalSample.later.map((item) => (
                <li key={item}>
                  <span className={styles.dash} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.docSection}>{proposalSample.termsTitle}</p>
            <div className={styles.terms}>
              {proposalSample.terms.map((term) => (
                <div key={term} className={styles.term}>
                  <span>{term}</span>
                  <span className={styles.blur} aria-hidden="true" />
                </div>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
