import Split from "./components/Split";
import { areas, facebookUrl, instagramUrl, projects, siteUrl, whatsappNumber } from "./content";

const services = areas.flatMap((area) => area.services);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "NM Software",
      alternateName: "Nicolás Marset Software",
      url: siteUrl,
      logo: `${siteUrl}/logo-circle.png`,
      description:
        "Desarrollo de software a medida, automatizaciones de procesos e integraciones entre herramientas: páginas web, tiendas online y paneles de gestión para negocios.",
      areaServed: [{ "@type": "Country", name: "Argentina" }],
      founder: { "@type": "Person", name: "Nicolás Marset" },
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
      "@id": `${siteUrl}/#projects`,
      name: "Proyectos de NM Software",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          ...(project.liveUrl ? { url: project.liveUrl } : {}),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Split />
    </>
  );
}
