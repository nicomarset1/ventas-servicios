"use client";

import { useEffect, useState } from "react";
import { ctaLabel, whatsappUrl } from "../content";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./MobileCta.module.css";

/*
  Botón de WhatsApp fijo abajo, solo en el celular.
  Se esconde mientras se ve otro botón de WhatsApp grande (los que llevan data-hide-mobile-cta).
*/
export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-hide-mobile-cta]"));
    const showing = new Set<Element>();
    let scrolled = window.scrollY > 240;

    const update = () => setVisible(scrolled && showing.size === 0);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) showing.add(entry.target);
        else showing.delete(entry.target);
      }
      update();
    });
    targets.forEach((target) => observer.observe(target));

    const onScroll = () => {
      const next = window.scrollY > 240;
      if (next !== scrolled) {
        scrolled = next;
        update();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.bar} data-visible={visible || undefined} aria-hidden={!visible} inert={!visible}>
      <a className={`btn btn-primary ${styles.button}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {ctaLabel}
      </a>
    </div>
  );
}
