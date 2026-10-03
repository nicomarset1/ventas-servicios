import { notFound } from "next/navigation";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTopProgress from "../ScrollToTopProgress";
import type { AreaSlug } from "../content";
import { areas, projects } from "../content";

// Plantilla común de las páginas de área (/web y /software): mismas secciones que la home, con el contenido de esa área.
export default function AreaPage({ slug }: { slug: AreaSlug }) {
  const area = areas.find((item) => item.slug === slug);
  if (!area) notFound();

  const items = projects.filter((project) => project.area === slug);

  return (
    <>
      <Header area={slug} />
      <main>
        <Hero text={area.hero} items={items} />
        <Projects items={items} title={area.projectsTitle} />
        <Services items={area.services} title={area.servicesTitle} />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopProgress />
    </>
  );
}
