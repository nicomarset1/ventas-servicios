import type { Metadata } from "next";
import ProjectCase from "../ProjectCase";

export const metadata: Metadata = {
  title: "Latin Prospects, sitio de scouting de básquet",
  description: "Sitio para una plataforma de scouting de básquet de Latinoamérica con rankings de prospectos, noticias y calendario, desarrollado por NM Software.",
  alternates: {
    canonical: "/proyectos/latin-prospects",
  },
  openGraph: {
    title: "Latin Prospects, sitio de scouting de básquet",
    description: "Sitio para una plataforma de scouting de básquet de Latinoamérica con rankings de prospectos, noticias y calendario, desarrollado por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/latin-prospects",
    images: ["/latin-prospects-preview.png"],
  },
};

const highlights = [
  { title: "Rankings", text: "Prospectos por año de nacimiento, con el perfil de cada jugador." },
  { title: "Noticias y calendario", text: "Reportes de scouting y eventos siempre al día." },
  { title: "Evaluaciones", text: "Los jugadores piden su evaluación desde el sitio." },
];

export default function LatinProspectsProjectPage() {
  return <ProjectCase slug="latin-prospects" highlights={highlights} />;
}
