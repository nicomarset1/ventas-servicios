import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// Archivo es de Omnibus-Type (Argentina). Variable con ancho (wdth) para los títulos expandidos.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const title = "NM Software | Desarrollo web y software a medida en Mar del Plata";
const description =
  "Tiendas online, sitios web y sistemas de gestión a medida para comercios y empresas. Equipo de desarrollo de Mar del Plata que trabaja con clientes de todo el país.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nmsoftware.com.ar"),
  title: {
    default: title,
    template: "%s | NM Software",
  },
  description,
  keywords: [
    "NM Software",
    "desarrollo web Mar del Plata",
    "software a medida Mar del Plata",
    "diseño web Mar del Plata",
    "tienda online",
    "sistemas de gestión a medida",
    "automatización de procesos",
    "páginas web para negocios",
    "desarrollo de software Argentina",
  ],
  authors: [{ name: "NM Software" }],
  creator: "NM Software",
  publisher: "NM Software",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://nmsoftware.com.ar/",
    siteName: "NM Software",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
