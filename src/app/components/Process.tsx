import Reveal from "./Reveal";
import { processSteps } from "../content";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container">
        <Reveal className="section-head is-center">
          <p className="eyebrow">Cómo trabajo</p>
          <h2>Cuatro pasos, sin vueltas</h2>
        </Reveal>

        <ol className={styles.steps}>
          {processSteps.map(({ step, title, text }, index) => (
            <Reveal key={step} as="li" delay={index * 80} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {step}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
