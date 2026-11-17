import type { AreaSlug, HeroText } from "../content";
import { stage } from "../content";
import { projectsFor } from "../projects";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Ledger from "./Ledger";
import MobileCta from "./MobileCta";
import Process from "./Process";
import Services from "./Services";
import WorkStage from "./WorkStage";

// Estructura común de la home y de las páginas de área (/web y /software).
export default function SitePage({ hero, area }: { hero: HeroText; area?: AreaSlug }) {
  return (
    <>
      <Header />
      <main>
        <Hero text={hero} area={area} />
        <WorkStage title={stage.title} projects={projectsFor(area)} />
        <Ledger area={area} />
        <Services area={area} />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
