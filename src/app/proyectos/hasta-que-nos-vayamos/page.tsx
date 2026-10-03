import type { Metadata } from "next";
import ProjectCase from "../ProjectCase";

export const metadata: Metadata = {
  title: "Hasta Que Nos Vayamos, radio online con automatización",
  description: "Sitio para un programa de radio con streaming en vivo y un archivo que se graba, sube y publica solo cada semana, desarrollado por NM Software.",
  alternates: {
    canonical: "/proyectos/hasta-que-nos-vayamos",
  },
  openGraph: {
    title: "Hasta Que Nos Vayamos, radio online con automatización",
    description: "Sitio para un programa de radio con streaming en vivo y un archivo que se graba, sube y publica solo cada semana, desarrollado por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/hasta-que-nos-vayamos",
    images: ["/hnv-preview.png"],
  },
};

const highlights = [
  { title: "En vivo", text: "El programa se escucha en vivo desde el sitio." },
  { title: "Automatización", text: "Cada semana se graba, sube y publica solo." },
  { title: "Archivo", text: "Los programas anteriores, siempre a mano." },
];

export default function HastaQueNosVayamosProjectPage() {
  return <ProjectCase slug="hasta-que-nos-vayamos" highlights={highlights} />;
}
