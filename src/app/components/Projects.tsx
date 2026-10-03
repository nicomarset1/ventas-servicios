"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "../content";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import { isPortrait } from "./projectMedia";
import styles from "./Projects.module.css";

export default function Projects() {
  const [active, setActive] = useState<{ index: number; opener: HTMLElement } | null>(null);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <Reveal className="section-head is-center">
          <p className="eyebrow">Proyectos</p>
          <h2>Trabajos recientes</h2>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => {
            const portrait = isPortrait(project.images[0]);
            const shots = portrait ? project.images.slice(0, 2) : project.images.slice(0, 1);

            return (
              <Reveal key={project.slug} delay={index * 80}>
                <button
                  type="button"
                  className={styles.card}
                  onClick={(event) => setActive({ index, opener: event.currentTarget })}
                  aria-haspopup="dialog"
                  aria-label={`${project.name}: ver detalle`}
                >
                  <span className={`${styles.media} ${portrait ? styles.mediaPortrait : ""}`}>
                    {shots.map((src) => (
                      <span key={src} className={styles.shot}>
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes={portrait ? "(max-width: 760px) 45vw, 260px" : "(max-width: 760px) 100vw, 560px"}
                          className={styles.image}
                        />
                      </span>
                    ))}
                  </span>
                  <span className={styles.body}>
                    <span className={styles.type}>{project.type}</span>
                    <span className={styles.name}>{project.name}</span>
                    <span className={styles.summary}>{project.summary}</span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={active ? projects[active.index] : null}
        opener={active?.opener ?? null}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
