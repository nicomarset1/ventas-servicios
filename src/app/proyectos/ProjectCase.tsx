import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileCta from "../components/MobileCta";
import Showcase from "../components/Showcase";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { whatsappLink } from "../content";
import { getProject, projects } from "../projects";
import styles from "./ProjectCase.module.css";

export function caseMetadata(slug: string): Metadata {
  const project = getProject(slug);
  if (!project) return {};
  const url = `https://nmsoftware.com.ar/proyectos/${project.slug}`;
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url,
      images: [project.screen.image.src],
    },
  };
}

// Plantilla de las páginas /proyectos/*: todo sale de projects.ts.
export default function ProjectCase({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const others = [1, 2, 3].map((step) => projects[(index + step) % projects.length]);

  return (
    <>
      <Header base="/" />
      <main>
        <section className={styles.intro}>
          <div className="container">
            <Link href="/#trabajos" className={styles.back}>
              <ArrowLeft size={18} aria-hidden="true" />
              Todos los trabajos
            </Link>

            <div className={styles.introGrid}>
              <div>
                <p className={styles.client}>{project.client}</p>
                <h1 className={styles.title}>{project.name}</h1>
              </div>
              <div className={styles.introSide}>
                <p className={styles.lead}>{project.summary}</p>
                <div className={styles.actions}>
                  <a
                    className="btn btn-primary"
                    href={whatsappLink(project.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hide-mobile-cta
                  >
                    <WhatsAppIcon />
                    Quiero algo así
                  </a>
                  {project.liveUrl && (
                    <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visitar el sitio
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.visualBand} aria-label={`Capturas de ${project.name}`}>
          <div className={`container ${styles.visual}`}>
            <Showcase project={project} priority width="(max-width: 900px) 92vw, 1040px" />
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.details}`}>
            <div>
              <h2 className={styles.detailTitle}>Qué necesitaban</h2>
              <p className={styles.need}>{project.need}</p>
              <p className={styles.type}>{project.type}</p>
            </div>
            <div>
              <h2 className={styles.detailTitle}>Qué hicimos</h2>
              <ul className={styles.built}>
                {project.built.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.extra && (
            <figure className={`container ${styles.extra}`}>
              <div className={styles.extraFrame}>
                <div className={styles.extraBar} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <em>{project.extra.label}</em>
                </div>
                <Image
                  src={project.extra.image}
                  alt={project.extra.alt}
                  sizes="(max-width: 1240px) 92vw, 1200px"
                  placeholder="blur"
                  className={styles.extraImage}
                />
              </div>
              <figcaption>{project.extra.caption}</figcaption>
            </figure>
          )}
        </section>

        <section className={styles.cta} data-hide-mobile-cta>
          <div className="container">
            <h2>¿Querés algo así para tu negocio?</h2>
            <p className="lead">Contanos qué necesitás y te pasamos una propuesta por escrito con plazo y precio. La primera charla es sin cargo.</p>
            <a className="btn btn-primary" href={whatsappLink(project.message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Escribinos por WhatsApp
            </a>
          </div>
        </section>

        <nav className={`section ${styles.others}`} aria-label="Otros trabajos">
          <div className="container">
            <h2 className={styles.othersTitle}>Otros trabajos</h2>
            <ul className={styles.othersList}>
              {others.map((item) => (
                <li key={item.slug}>
                  <Link href={`/proyectos/${item.slug}`} className={styles.otherLink}>
                    <span className={styles.otherName}>{item.name}</span>
                    <span className={styles.otherType}>
                      {item.rubro}: {item.type.toLowerCase()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
