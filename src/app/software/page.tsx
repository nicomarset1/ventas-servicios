import type { Metadata } from "next";
import AreaPage from "../components/AreaPage";

export const metadata: Metadata = {
  title: "Software para empresas: sistemas de gestión y automatizaciones",
  description: "Sistemas de gestión, automatizaciones de procesos e integraciones a medida para empresas, desarrollados por NM Software.",
  alternates: {
    canonical: "/software",
  },
  openGraph: {
    title: "Software para empresas: sistemas de gestión y automatizaciones",
    description: "Sistemas de gestión, automatizaciones de procesos e integraciones a medida para empresas, desarrollados por NM Software.",
    url: "https://nmsoftware.com.ar/software",
  },
};

export default function SoftwareAreaPage() {
  return <AreaPage slug="software" />;
}
