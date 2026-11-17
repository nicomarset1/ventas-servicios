"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ctaLabel, navItems, whatsappUrl } from "../content";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Header.module.css";

// base: "" en páginas que tienen las secciones (home y áreas); "/" en las páginas de proyecto.
export default function Header({ base = "" }: { base?: "" | "/" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header} data-open={open || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image src="/logo-circle.png" alt="" width={36} height={36} preload />
          <span>NM Software</span>
        </Link>

        <nav className={styles.nav} aria-label="Secciones">
          {navItems.map((item) => (
            <a key={item.id} href={`${base}#${item.id}`} className={styles.navLink}>
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
