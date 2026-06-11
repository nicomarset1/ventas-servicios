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
    default: "NM Software | Desarrollo de software a medida para negocios",
    template: "%s | NM Software",
  },
  description:
    "NM Software desarrolla paginas web, tiendas online, paneles de gestion, sistemas de stock y herramientas digitales a medida para negocios.",
  keywords: [
    "NM Software",
    "desarrollo de software a medida",
    "paginas web para negocios",
    "sistemas de gestion",
    "sistemas de stock",
    "tiendas online",
    "software para empresas",
    "desarrollo web Argentina",
  ],
  authors: [{ name: "Nicolas Marset" }],
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
    title: "NM Software | Desarrollo de software a medida para negocios",
    description:
      "Paginas web, tiendas online, paneles de gestion y sistemas de stock hechos a medida para vender y administrar mejor.",
    images: [
      {
        url: "/hero-sistemas.png",
        width: 1823,
        height: 863,
        alt: "NM Software - desarrollo de software a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NM Software | Desarrollo de software a medida",
    description:
      "Software, webs, tiendas online y sistemas de gestion a medida para negocios.",
    images: ["/hero-sistemas.png"],
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
    <html lang="es">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
