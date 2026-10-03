"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { AreaSlug } from "../content";
import { areas, hero, navItems, whatsappUrl } from "../content";
import styles from "./Header.module.css";

type Props = {
  // Página de área (/web o /software); sin valor es la home.
  area?: AreaSlug;
};

export default function Header({ area }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Fondo al scrollear + sección activa según lo que se ve en pantalla
  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);

        const marker = window.innerHeight * 0.35;
        let current = "";
        navItems.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= marker) current = id;
        });

        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom) current = navItems[navItems.length - 1].id;

        setActiveSection(current);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Menú mobile: bloquea el scroll, atrapa el foco, cierra con Esc y al pasar a desktop
  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const links = panelRef.current ? Array.from(panelRef.current.querySelectorAll<HTMLElement>("a")) : [];
      const focusables = [toggleRef.current, ...links].filter((el): el is HTMLElement => el !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (event.shiftKey && (current === first || !focusables.includes(current!))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !focusables.includes(current!))) {
        event.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const onChange = () => desktop.matches && setMenuOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);
  // En una página de área se ofrece el salto a la otra.
  const otherArea = area ? areas.find((item) => item.slug !== area) : undefined;
  const brand = (
    <>
      <Image src="/logo-circle.png" alt="" width={36} height={36} preload />
      <span>NM Software</span>
    </>
  );

  return (
    <>
      {/* Fuera del header: su backdrop-filter haría que el fixed quede contenido en él */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} aria-hidden="true" onClick={closeMenu} />

      <header className={`${styles.header} ${solid ? styles.solid : ""} ${menuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.bar}>
          {area ? (
            <Link className={styles.brand} href="/" onClick={closeMenu}>
              {brand}
            </Link>
          ) : (
            <a className={styles.brand} href="#inicio" onClick={closeMenu}>
              {brand}
            </a>
          )}

          <nav className={styles.nav} aria-label="Principal">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ""}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
            {otherArea && (
              <Link href={`/${otherArea.slug}`} className={styles.switch}>
                {otherArea.short}
              </Link>
            )}
          </nav>

          <div className={styles.actions}>
            <a className={`button button-primary ${styles.cta}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className={styles.toggle}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          ref={panelRef}
          id="menu-mobile"
          className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}
          inert={!menuOpen}
        >
          <nav className={styles.panelNav} aria-label="Principal mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            {otherArea && (
              <Link href={`/${otherArea.slug}`} onClick={closeMenu}>
                {otherArea.label}
              </Link>
            )}
            <a
              className={`button button-primary ${styles.panelCta}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <MessageCircle size={18} aria-hidden="true" />
              {hero.primaryCta}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
