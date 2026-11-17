"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { KeyboardEvent } from "react";
import type { Project } from "../projects";
import Showcase from "./Showcase";
import styles from "./WorkStage.module.css";

const DURATION = 6500;

// Preferencia de "reducir movimiento" del sistema.
const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

type Props = {
  title: string;
  projects: Project[];
};

/*
  Vitrina de trabajos: una pestaña por rubro y la captura real de cada proyecto.
  Pasa sola mientras está a la vista, hasta que la persona toca algo. Con "reducir movimiento" no pasa sola.
*/
export default function WorkStage({ title, projects }: Props) {
  const [active, setActive] = useState(0);
  // Pasa a false apenas la persona elige un trabajo.
  const [untouched, setUntouched] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(motionQuery).matches,
    () => false
  );
  const autoplay = untouched && !reducedMotion;
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  const rootRef = useRef<HTMLElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const elapsed = useRef(0);

  // Solo corre mientras la vitrina se ve en pantalla.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const running = autoplay && inView && !paused;

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      if (document.visibilityState === "visible") elapsed.current += now - last;
      last = now;
      const progress = Math.min(elapsed.current / DURATION, 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      if (progress >= 1) {
        elapsed.current = 0;
        setActive((value) => (value + 1) % projects.length);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, projects.length]);

  // Mantiene la pestaña activa a la vista dentro de la fila (en el celular la fila se desliza).
  useEffect(() => {
    const list = tablistRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  const choose = useCallback((index: number, focus = false) => {
    setUntouched(false);
    elapsed.current = 0;
    setActive(index);
    if (focus) tabRefs.current[index]?.focus();
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = projects.length - 1;
    const keys: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (event.key in keys) {
      event.preventDefault();
      choose(keys[event.key], true);
    }
  };

  return (
    <section
      ref={rootRef}
      id="trabajos"
      className={styles.stage}
      aria-labelledby="trabajos-title"
      onPointerEnter={(event) => event.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="container">
        <h2 id="trabajos-title" className={styles.title}>
          {title}
        </h2>

        <div ref={tablistRef} className={styles.tabs} role="tablist" aria-label="Trabajos por rubro" onKeyDown={onKeyDown}>
          {projects.map((project, index) => {
            const selected = index === active;
            return (
              <button
                key={project.slug}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`tab-${project.slug}`}
                aria-selected={selected}
                aria-controls={`trabajo-${project.slug}`}
                tabIndex={selected ? 0 : -1}
                className={styles.tab}
                onClick={() => choose(index)}
              >
                {selected && autoplay && (
                  <span
                    className={styles.progress}
                    aria-hidden="true"
                    ref={(node) => {
                      progressRef.current = node;
                    }}
                  />
                )}
                <span className={styles.tabLabel}>{project.rubro}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.panels}>
          {projects.map((project, index) => {
            const selected = index === active;
            return (
              <div
                key={project.slug}
                role="tabpanel"
                id={`trabajo-${project.slug}`}
                aria-labelledby={`tab-${project.slug}`}
                className={styles.panel}
                data-active={selected || undefined}
                inert={!selected}
              >
                <div className={styles.visual}>
                  <Showcase project={project} />
                </div>

                <div className={styles.info}>
                  <p className={styles.client}>{project.client}</p>
                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <ul className={styles.highlights}>
                    {project.highlights.map((item) => (
                      <li key={item}>
                        <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    <Link href={`/proyectos/${project.slug}`} className="btn btn-night">
                      Ver el trabajo completo
                    </Link>
                    {project.liveUrl && (
                      <a className={styles.live} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Visitar el sitio
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
