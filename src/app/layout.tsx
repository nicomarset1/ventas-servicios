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
  title: "Desarrollo de software a medida para negocios",
  description:
    "Desarrollo de software a medida para negocios: paginas web, paneles de gestion, sistemas de stock y herramientas digitales para vender y administrar mejor.",
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
