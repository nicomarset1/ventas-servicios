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
  // En la pantalla de la notebook.
  screen: Piece;
  phone: Piece;
  // A la derecha: una hoja (PDF) o un segundo celular.
  second: Piece & { kind: "paper" | "phone" };
};

const panel: Piece = {
  slug: "agrovet",
  name: "Agrovet",
  image: agrovetPanel,
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
  home: { screen: panel, phone: mecanica, second: forza },
  web: {
    screen: {
      slug: "agrovet",
      name: "Agrovet",
      image: agrovetStore,
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
    screen: panel,
    phone: {
      slug: "mareflota",
      name: "Mareflota",
      image: mareflotaMobile,
      alt: "Mareflota, el sistema de una flota pesquera, en el celular",
    },
    second: forza,
  },
};

/*
  Trabajos reales en la portada: una notebook, un celular y una hoja. Cada uno lleva a su página.
  Los data-dive son las piezas que mueve HeroDive al bajar.
*/
export default function HeroCollage({ area }: { area?: AreaSlug }) {
  const { screen, phone, second } = collages[area ?? "home"];

  return (
    <figure className={styles.figure}>
      <div className={styles.collage}>
        <div className={styles.laptop} data-dive="laptop">
          <div className={styles.lidWrap}>
            <div className={styles.lid} data-dive="lid">
              <div className={styles.bezel}>
                <span className={styles.camera} aria-hidden="true" />
                <Link
                  href={`/proyectos/${screen.slug}`}
                  className={styles.screen}
                  data-dive="screen"
                  aria-label={`Ver el trabajo de ${screen.name}`}
                >
                  <Image
                    src={screen.image}
                    alt={screen.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 1440px"
                    placeholder="blur"
                    preload
                    className={styles.image}
                  />
                  <span className={styles.glare} aria-hidden="true" />
                  <span className={styles.power} aria-hidden="true" />
                  <span className={styles.night} data-dive="night" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.base} aria-hidden="true" />
        </div>

        <div className={styles.flyPhone} data-dive="phone">
          <Link href={`/proyectos/${phone.slug}`} className={styles.phone} aria-label={`Ver el trabajo de ${phone.name}`}>
            <span className={styles.phoneScreen}>
              <Image src={phone.image} alt={phone.alt} fill sizes="(max-width: 960px) 28vw, 190px" placeholder="blur" className={styles.image} />
            </span>
          </Link>
        </div>

        <div className={second.kind === "paper" ? styles.flyPaper : styles.flyPhoneRight} data-dive="second">
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
      </div>
      <figcaption className={styles.caption} data-dive="caption">
        Trabajos reales para <Link href={`/proyectos/${screen.slug}`}>{screen.name}</Link>,{" "}
        <Link href={`/proyectos/${phone.slug}`}>{phone.name}</Link> y <Link href={`/proyectos/${second.slug}`}>{second.name}</Link>.
      </figcaption>
    </figure>
  );
}
