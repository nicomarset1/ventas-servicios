import type { Metadata } from "next";
import ProjectCase from "../ProjectCase";

export const metadata: Metadata = {
  title: "Mareflota, sistema de gestión para una pesquera",
  description: "Web app para una empresa pesquera con gestión de tripulación, barcos, viajes y capturas, desarrollada por NM Software.",
  alternates: {
    canonical: "/proyectos/mareflota",
  },
  openGraph: {
    title: "Mareflota, sistema de gestión para una pesquera",
    description: "Web app para una empresa pesquera con gestión de tripulación, barcos, viajes y capturas, desarrollada por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/mareflota",
    images: ["/mareflota-preview.png"],
  },
};

const highlights = [
  { title: "Tripulación y documentos", text: "Roles a bordo y alertas antes de que venza una libreta o un certificado." },
  { title: "Viajes", text: "Dotación, zarpe, regreso y captura por especie en cada viaje." },
  { title: "Estadísticas", text: "Capturas por barco, especie y mes para decidir con datos." },
];

export default function MareflotaProjectPage() {
  return <ProjectCase slug="mareflota" highlights={highlights} />;
}
