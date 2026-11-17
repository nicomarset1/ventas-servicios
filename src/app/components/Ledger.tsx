import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AreaSlug } from "../content";
import { ledger } from "../content";
import { getProject } from "../projects";
import styles from "./Ledger.module.css";

// Problemas del día a día y lo que ya hicimos para resolverlos, con el cliente de cada caso.
export default function Ledger({ area }: { area?: AreaSlug }) {
  const rows = area ? ledger.rows.filter((row) => row.area === area) : ledger.rows;

  return (
    <section className="section" aria-labelledby="problemas-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="problemas-title">{ledger.title}</h2>
          <p className="lead">{ledger.lead}</p>
        </div>

        <div className={styles.table} role="table" aria-label="Problemas que ya resolvimos">
          <div className={styles.columns} role="row">
            <span role="columnheader">{ledger.columns.today}</span>
            <span role="columnheader">{ledger.columns.solved}</span>
            <span role="columnheader">{ledger.columns.client}</span>
          </div>
          {rows.map((row) => {
            const project = getProject(row.project);
            return (
              <div key={row.today} className={styles.row} role="row">
                <p className={styles.today} role="cell">
                  {row.today}
                </p>
                <p className={styles.solved} role="cell">
                  <ArrowRight className={styles.arrow} size={20} aria-hidden="true" />
                  <span>{row.solved}</span>
                </p>
                <p className={styles.client} role="cell">
                  {project && (
                    <>
                      <Link href={`/proyectos/${project.slug}`} className={styles.clientLink}>
                        {project.name}
                      </Link>
                      <span className={styles.rubro}>{project.rubro}</span>
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
