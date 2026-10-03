"use client";

import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent, MouseEvent, TouchEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Lock, X } from "lucide-react";
import type { Project } from "../content";
import { imageSize, isPortrait } from "./projectMedia";
import styles from "./ProjectModal.module.css";

type Props = {
  project: Project | null;
  // Elemento que abrió el modal: recibe el foco al cerrar (en Safari el click no le da foco, por eso no se lee activeElement).
  opener: HTMLElement | null;
  onClose: () => void;
};

const CLOSE_MS = 200;
// Proyectos que tienen subpágina en /proyectos/{slug}.
const CASE_PAGES = new Set(["agrovet", "mecanica-marset", "hasta-que-nos-vayamos"]);
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, opener, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closingRef = useRef(false);
  const [closing, setClosing] = useState(false);

  // Abrir: bloquear scroll y mostrar el dialog nativo (deja inerte el resto).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      root.style.overflow = "";
    };
  }, [project]);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    window.setTimeout(() => {
      closingRef.current = false;
      dialogRef.current?.close();
      setClosing(false);
      onClose();
      opener?.focus();
    }, CLOSE_MS);
  }, [onClose, opener]);

  // Foco atrapado dentro del modal.
  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!nodes || nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  // Click en el fondo (fuera del panel) cierra.
  const onClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) requestClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${closing ? styles.closing : ""}`}
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      {project && <ModalContent key={project.slug} project={project} onClose={requestClose} />}
    </dialog>
  );
}

function ModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const { images } = project;
  const many = images.length > 1;
  const src = images[index];
  const size = imageSize(src);

  const go = (step: number) => setIndex((current) => (current + step + images.length) % images.length);

  // Flechas del teclado para la galería.
  useEffect(() => {
    if (!many) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowRight") setIndex((current) => (current + 1) % images.length);
      if (event.key === "ArrowLeft") setIndex((current) => (current - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [many, images.length]);

  const onTouchStart = (event: TouchEvent) => {
    touchX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchX.current === null || !many) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div className={styles.panel}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Cerrar">
        <X size={20} />
      </button>

      <div
        className={`${styles.gallery} ${isPortrait(src) ? styles.galleryPortrait : ""}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={src}
          src={src}
          alt={`${project.name}: captura ${index + 1} de ${images.length}`}
          width={size.width}
          height={size.height}
          sizes="(max-width: 960px) 100vw, 920px"
          className={styles.image}
        />

        {many && (
          <>
            <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => go(-1)} aria-label="Imagen anterior">
              <ChevronLeft size={20} />
            </button>
            <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => go(1)} aria-label="Imagen siguiente">
              <ChevronRight size={20} />
            </button>
            <div className={styles.dots} aria-hidden="true">
              {images.map((image, i) => (
                <span key={image} className={i === index ? styles.dotActive : styles.dot} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.type}>{project.type}</p>
        <h2 id="project-modal-title" className={styles.title}>
          {project.name}
        </h2>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.chips}>
          {project.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          {project.liveUrl ? (
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver sitio
              <ExternalLink size={18} />
            </a>
          ) : (
            <p className={styles.private}>
              <Lock size={18} />
              App privada, con acceso por login
            </p>
          )}
          {CASE_PAGES.has(project.slug) && (
            <Link className="button button-secondary" href={`/proyectos/${project.slug}`}>
              Ver caso completo
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
