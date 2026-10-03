import type { Metadata } from "next";
import ProjectCase from "../ProjectCase";

export const metadata: Metadata = {
  title: "Mecánica Marset, sitio web para taller mecánico",
  description: "Sitio web para un taller mecánico con turnos por WhatsApp, reseñas y ubicación, desarrollado por NM Software.",
  alternates: {
    canonical: "/proyectos/mecanica-marset",
  },
  openGraph: {
    title: "Mecánica Marset, sitio web para taller mecánico",
    description: "Sitio web para un taller mecánico con turnos por WhatsApp, reseñas y ubicación, desarrollado por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/mecanica-marset",
    images: ["/pag-taller-preview.png"],
  },
};

const highlights = [
  { title: "Turnos por WhatsApp", text: "Un toque y el cliente ya está pidiendo turno." },
  { title: "Reseñas", text: "Opiniones reales que generan confianza." },
  { title: "Ubicación", text: "El taller se encuentra en segundos." },
];

export default function MecanicaMarsetProjectPage() {
  return <ProjectCase slug="mecanica-marset" highlights={highlights} />;
}
