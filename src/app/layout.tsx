import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nmsoftware.com.ar"),
  title: {
    default: "NM Software | Software, automatizaciones e integraciones a medida",
    template: "%s | NM Software",
  },
  description:
    "NM Software desarrolla software a medida, automatizaciones de procesos e integraciones entre herramientas para negocios: páginas web, tiendas online, paneles de gestión y sistemas de stock.",
  keywords: [
    "NM Software",
    "desarrollo de software a medida",
    "automatización de procesos",
    "integraciones entre sistemas",
    "páginas web para negocios",
    "sistemas de gestión",
    "sistemas de stock",
    "tiendas online",
    "software para empresas",
    "desarrollo web Argentina",
  ],
  authors: [{ name: "Nicolás Marset" }],
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
    title: "NM Software | Software, automatizaciones e integraciones a medida",
    description:
      "Software a medida, automatizaciones de procesos e integraciones entre herramientas para vender y administrar mejor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NM Software | Software, automatizaciones e integraciones",
    description:
      "Software, automatizaciones e integraciones a medida para negocios.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
