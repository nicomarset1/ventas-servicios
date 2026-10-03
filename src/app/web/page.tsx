import type { Metadata } from "next";
import AreaPage from "../components/AreaPage";

export const metadata: Metadata = {
  title: "Desarrollo web: sitios y tiendas online a medida",
  description: "Sitios web, landings y tiendas online a medida para negocios, con diseño propio y pensados para el celular, desarrollados por NM Software.",
  alternates: {
    canonical: "/web",
  },
  openGraph: {
    title: "Desarrollo web: sitios y tiendas online a medida",
    description: "Sitios web, landings y tiendas online a medida para negocios, con diseño propio y pensados para el celular, desarrollados por NM Software.",
    url: "https://nmsoftware.com.ar/web",
  },
};

export default function WebAreaPage() {
  return <AreaPage slug="web" />;
}
