import SitePage from "./components/SitePage";
import { facebookUrl, faqs, hero, instagramUrl, services, siteUrl, whatsappNumber } from "./content";
import { projects } from "./projects";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "NM Software",
      url: siteUrl,
      logo: `${siteUrl}/logo-circle.png`,
      image: `${siteUrl}/opengraph-image`,
      description:
        "Desarrollo web y software a medida en Mar del Plata: tiendas online, sitios web, sistemas de gestión y automatizaciones para comercios y empresas.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mar del Plata",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      areaServed: [{ "@type": "Country", name: "Argentina" }],
      sameAs: [instagramUrl, facebookUrl],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: `+${whatsappNumber}`,
        availableLanguage: "Spanish",
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.text },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NM Software",
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "es-AR",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#trabajos`,
      name: "Trabajos de NM Software",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/proyectos/${project.slug}`,
        name: project.name,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#preguntas`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SitePage hero={hero} />
    </>
  );
}
