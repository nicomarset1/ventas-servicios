import Image from "next/image";
import type { Project } from "../projects";
import styles from "./Showcase.module.css";

type Props = {
  project: Project;
  priority?: boolean;
  // Ancho aproximado que ocupa la composición, para que next/image elija el tamaño justo.
  width?: string;
  tone?: "night" | "light";
};

// Composición de capturas reales: ventana de navegador (o una hoja PDF) con el celular adelante.
export default function Showcase({ project, priority = false, width = "(max-width: 900px) 92vw, 700px", tone = "night" }: Props) {
  const { screen, phone } = project;

  return (
    <div className={styles.showcase} data-kind={screen.kind} data-tone={tone}>
      {screen.kind === "browser" ? (
        <div className={styles.browser}>
          <div className={styles.bar} aria-hidden="true">
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.address}>{screen.label}</span>
          </div>
          <div className={styles.screen}>
            <Image
              src={screen.image}
              alt={screen.alt}
              fill
              sizes={width}
              placeholder="blur"
              preload={priority}
              className={styles.image}
            />
          </div>
        </div>
      ) : (
        <div className={styles.paper}>
          <Image
            src={screen.image}
            alt={screen.alt}
            fill
            sizes="(max-width: 900px) 50vw, 340px"
            placeholder="blur"
            preload={priority}
            className={styles.image}
          />
        </div>
      )}

      {phone && (
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>
            <Image
              src={phone.image}
              alt={phone.alt}
              fill
              sizes="(max-width: 900px) 30vw, 200px"
              placeholder="blur"
              preload={priority}
              className={styles.image}
            />
          </div>
        </div>
      )}
    </div>
  );
}
