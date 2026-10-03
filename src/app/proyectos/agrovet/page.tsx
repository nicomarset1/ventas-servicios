import type { Metadata } from "next";
import ProjectCase from "../ProjectCase";

export const metadata: Metadata = {
  title: "Agrovet MDP, tienda online para veterinaria",
  description: "Tienda online para veterinaria y pet shop con catálogo, carrito, stock y panel de gestión, desarrollada por NM Software.",
  alternates: {
    canonical: "/proyectos/agrovet",
  },
  openGraph: {
    title: "Agrovet MDP, tienda online para veterinaria",
    description: "Tienda online para veterinaria y pet shop con catálogo, carrito, stock y panel de gestión, desarrollada por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/agrovet",
    images: ["/agrovet-preview-actual.png"],
  },
};

const highlights = [
  { title: "Catálogo", text: "Productos claros y fáciles de recorrer." },
  { title: "Carrito y stock", text: "Pedidos y stock en un mismo lugar." },
  { title: "Panel de gestión", text: "Todo se administra desde el celular." },
];

export default function AgrovetProjectPage() {
  return <ProjectCase slug="agrovet" highlights={highlights} />;
}
