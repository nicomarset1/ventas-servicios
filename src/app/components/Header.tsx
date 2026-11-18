"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ctaLabel, navItems, whatsappUrl } from "../content";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Header.module.css";

/*
  Barra de arriba. Acompaña el recorrido:
  - una pastilla se desliza hasta la sección en la que estás;
  - al bajar aparece una sombra suave;
  - se vuelve azul sobre las bandas azules que van de lado a lado ([data-header-dark]) y, en la portada,
    junto con la entrada a la pantalla (HeroDive le pasa --dive-night).
*/
// base: "" en páginas que tienen las secciones (home y áreas); "/" en las páginas de proyecto.
export default function Header({ base = "" }: { base?: "" | "/" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

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
      const line = header.offsetHeight / 2;
      const width = document.documentElement.clientWidth;
      header.toggleAttribute("data-scrolled", window.scrollY > 4);

      // Solo las bandas azules de lado a lado: con márgenes a los costados quedaría una franja clara.
      const dark = Array.from(document.querySelectorAll<HTMLElement>("[data-header-dark]")).some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= line && rect.bottom >= line && rect.left <= 1 && rect.right >= width - 1;
      });
      header.toggleAttribute("data-dark", dark);

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
    <header ref={headerRef} className={styles.header} data-open={open || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image src="/logo-circle.png" alt="" width={36} height={36} preload />
          <span>NM Software</span>
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
