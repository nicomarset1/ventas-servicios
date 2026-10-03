import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { imageSize } from "../components/projectMedia";
import { contact, projects, whatsappUrl } from "../content";
import ScrollToTopProgress from "../ScrollToTopProgress";
import styles from "./ProjectCase.module.css";

type Highlight = { title: string; text: string };

type Props = {
  slug: string;
  highlights: Highlight[];
};

// Plantilla común de las subpáginas /proyectos/*: datos desde content.ts + 3 puntos propios de cada proyecto.
export default function ProjectCase({ slug, highlights }: Props) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const cover = project.images[0];
  const size = imageSize(cover);
  const domain = project.liveUrl ? new URL(project.liveUrl).hostname : "";

  return (
    <>
      <header className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <Link href="/" className={styles.brand}>
            <Image src="/logo-circle.png" alt="" width={32} height={32} />
            NM Software
          </Link>
          <Link href={`/${project.area}#proyectos`} className={styles.back}>
            <ArrowLeft size={18} />
            Volver a proyectos
          </Link>
        </div>
      </header>

      <main>
        <section className={styles.intro}>
          <div className="container">
            <Reveal className={styles.introText}>
              <p className="eyebrow">{project.type}</p>
              <h1 className={styles.title}>{project.name}</h1>
              <p className={styles.lead}>{project.description}</p>
              {project.liveUrl && (
                <div className={styles.actions}>
                  <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver sitio
                    <ExternalLink size={18} />
                  </a>
                </div>
              )}
            </Reveal>

            <Reveal delay={120} className={styles.frame}>
              <div className={styles.frameBar} aria-hidden="true">
                <span />
                <span />
                <span />
                {domain && <em>{domain}</em>}
              </div>
              <Image
                src={cover}
                alt={`Captura de ${project.name}`}
                width={size.width}
                height={size.height}
                sizes="(max-width: 1160px) 100vw, 1120px"
                className={styles.cover}
                priority
              />
            </Reveal>
          </div>
        </section>

        <section className={styles.highlights}>
          <div className={`container ${styles.grid}`}>
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className={styles.card}>
                <span className={styles.number}>0{index + 1}</span>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <Reveal className={styles.cta}>
              <h2>¿Querés algo así para tu negocio?</h2>
              <p>{contact.copy}</p>
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                {contact.cta}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopProgress />
    </>
  );
}
