"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ctaLabel, navItems, whatsappUrl } from "../content";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Header.module.css";

// La entrada de la barra va una sola vez por visita: al pasar de una página a otra no se repite.
let headerEntered = false;

/*
  Barra de arriba. Acompaña el recorrido:
  - los links van en una cápsula y una pastilla blanca se desliza hasta la sección en la que estás;
  - al bajar aparece una sombra suave;
  - toma el azul de lo que tiene debajo, siguiendo el borde con el scroll y sin demoras:
    --header-dark es cuánto del header tapa una banda azul de lado a lado ([data-header-dark]) y,
    en la portada, HeroDive le pasa --dive-night mientras se entra a la pantalla.
*/
// base: "" en páginas que tienen las secciones (home y áreas); "/" en las páginas de proyecto.
export default function Header({ base = "" }: { base?: "" | "/" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [enter] = useState(() => !headerEntered);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    headerEntered = true;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const height = header.offsetHeight;
      const width = document.documentElement.clientWidth;
      header.toggleAttribute("data-scrolled", window.scrollY > 4);

      // Qué parte del header tapa una banda azul de lado a lado (con márgenes quedaría una franja clara).
      let covered = 0;
      for (const element of Array.from(document.querySelectorAll<HTMLElement>("[data-header-dark]"))) {
        const rect = element.getBoundingClientRect();
        if (rect.left > 1 || rect.right < width - 1) continue;
        const overlap = Math.min(rect.bottom, height) - Math.max(rect.top, 0);
        covered = Math.max(covered, overlap / height);
      }
      header.style.setProperty("--header-dark", Math.min(1, Math.max(0, covered)).toFixed(3));

      if (base === "") {
        const probe = window.innerHeight * 0.4;
        let current: string | null = null;
        for (const item of navItems) {
          const rect = document.getElementById(item.id)?.getBoundingClientRect();
          if (rect && rect.top <= probe && rect.bottom > probe) current = item.id;
        }
        setActive(current);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [base]);

  // La pastilla va debajo del link activo. La primera vez aparece en su lugar, sin viajar desde el costado.
  useLayoutEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    const place = () => {
      const link = active ? nav.querySelector<HTMLElement>(`a[data-id="${active}"]`) : null;
      if (!link) {
        pill.dataset.on = "0";
        return;
      }
      const move = () => {
        pill.style.width = `${link.offsetWidth}px`;
        pill.style.transform = `translateX(${link.offsetLeft}px)`;
      };
      if (pill.dataset.on !== "1") {
        pill.style.transition = "none";
        move();
        pill.getBoundingClientRect();
        pill.style.transition = "";
      } else {
        move();
      }
      pill.dataset.on = "1";
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [active]);

  return (
    <header ref={headerRef} className={styles.header} data-open={open || undefined} data-enter={enter || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image src="/logo-circle.png" alt="" width={38} height={38} preload />
          <span className={styles.brandText}>
            <span className={styles.brandName}>NM Software</span>
            <span className={styles.brandTag}>Desarrollo a medida</span>
          </span>
        </Link>

        <nav ref={navRef} className={styles.nav} aria-label="Secciones">
          <span ref={pillRef} className={styles.pill} aria-hidden="true" />
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`${base}#${item.id}`}
              className={styles.navLink}
              data-id={item.id}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={`btn ${styles.cta}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={19} />
            <span className={styles.ctaLong}>{ctaLabel}</span>
            <span className={styles.ctaShort}>WhatsApp</span>
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={styles.panel} hidden={!open}>
        <nav className="container" aria-label="Secciones">
          {navItems.map((item) => (
            <a key={item.id} href={`${base}#${item.id}`} className={styles.panelLink} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
