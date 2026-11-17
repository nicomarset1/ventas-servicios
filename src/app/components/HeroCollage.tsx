import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { AreaSlug } from "../content";
import agrovetPanel from "../../../public/agrovet-panel.png";
import agrovetStore from "../../../public/agrovet-desktop.jpg";
import mecanicaMobile from "../../../public/mecanica-mobile.jpg";
import mareflotaMobile from "../../../public/mareflota-mobile.jpg";
import latinMobile from "../../../public/latin-prospects-mobile.jpg";
import forzaPdf from "../../../public/forza-pdf-preview.png";
import styles from "./HeroCollage.module.css";

type Piece = { slug: string; name: string; image: StaticImageData; alt: string };
type Collage = {
  browser: Piece & { label: string };
  phone: Piece;
  // A la derecha: una hoja (PDF) o un segundo celular.
  second: Piece & { kind: "paper" | "phone" };
};

const panel: Collage["browser"] = {
  slug: "agrovet",
  name: "Agrovet",
  image: agrovetPanel,
  label: "Panel de gestión de Agrovet",
  alt: "Panel de gestión de Agrovet con las ventas del día y el stock de cada sucursal",
};

const mecanica: Piece = {
  slug: "mecanica-marset",
  name: "Mecánica Marset",
  image: mecanicaMobile,
  alt: "Sitio de Mecánica Marset en el celular, con el botón para pedir turno por WhatsApp",
};

const forza: Collage["second"] = {
  kind: "paper",
  slug: "forza",
  name: "Forza",
  image: forzaPdf,
  alt: "Presupuesto en PDF armado con la app de Forza",
};

const collages: Record<"home" | AreaSlug, Collage> = {
  home: { browser: panel, phone: mecanica, second: forza },
  web: {
    browser: {
      slug: "agrovet",
      name: "Agrovet",
      image: agrovetStore,
      label: "Tienda online de Agrovet",
      alt: "Tienda online de Agrovet en la computadora",
    },
    phone: mecanica,
    second: {
      kind: "phone",
      slug: "latin-prospects",
      name: "Latin Prospects",
      image: latinMobile,
      alt: "Sitio de Latin Prospects en el celular",
    },
  },
  software: {
    browser: panel,
    phone: {
      slug: "mareflota",
      name: "Mareflota",
      image: mareflotaMobile,
      alt: "Mareflota, el sistema de una flota pesquera, en el celular",
    },
    second: forza,
  },
};

// Trabajos reales en la portada, cada uno lleva a su página.
export default function HeroCollage({ area }: { area?: AreaSlug }) {
  const { browser, phone, second } = collages[area ?? "home"];

  return (
    <figure className={styles.figure}>
      <div className={styles.collage}>
        <Link href={`/proyectos/${browser.slug}`} className={styles.browser} aria-label={`Ver el trabajo de ${browser.name}`}>
          <span className={styles.bar} aria-hidden="true">
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.address}>{browser.label}</span>
          </span>
          <span className={styles.screen}>
            <Image
              src={browser.image}
              alt={browser.alt}
              fill
              sizes="(max-width: 960px) 90vw, 620px"
              placeholder="blur"
              preload
              className={styles.image}
            />
          </span>
        </Link>

        <Link href={`/proyectos/${phone.slug}`} className={styles.phone} aria-label={`Ver el trabajo de ${phone.name}`}>
          <span className={styles.phoneScreen}>
            <Image src={phone.image} alt={phone.alt} fill sizes="(max-width: 960px) 28vw, 190px" placeholder="blur" className={styles.image} />
          </span>
        </Link>

        <Link
          href={`/proyectos/${second.slug}`}
          className={second.kind === "paper" ? styles.paper : `${styles.phone} ${styles.phoneRight}`}
          aria-label={`Ver el trabajo de ${second.name}`}
        >
          {second.kind === "paper" ? (
            <Image src={second.image} alt={second.alt} fill sizes="(max-width: 960px) 30vw, 210px" placeholder="blur" className={styles.image} />
          ) : (
            <span className={styles.phoneScreen}>
              <Image src={second.image} alt={second.alt} fill sizes="(max-width: 960px) 28vw, 190px" placeholder="blur" className={styles.image} />
            </span>
          )}
        </Link>
      </div>
      <figcaption className={styles.caption}>
        Trabajos reales para <Link href={`/proyectos/${browser.slug}`}>{browser.name}</Link>,{" "}
        <Link href={`/proyectos/${phone.slug}`}>{phone.name}</Link> y <Link href={`/proyectos/${second.slug}`}>{second.name}</Link>.
      </figcaption>
    </figure>
  );
}
