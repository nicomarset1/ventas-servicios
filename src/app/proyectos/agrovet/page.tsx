import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check, ExternalLink, Store } from "lucide-react";

const liveUrl = "https://agrovet-gestion-y-web.vercel.app";

export const metadata: Metadata = {
  title: "Proyecto Agrovet MDP - tienda online para veterinaria",
  description:
    "Caso de proyecto de NM Software: tienda online para veterinaria y pet shop con catalogo, carrito y estructura preparada para crecer.",
  alternates: {
    canonical: "/proyectos/agrovet",
  },
  openGraph: {
    title: "Proyecto Agrovet MDP - tienda online para veterinaria",
    description:
      "Tienda online para veterinaria y pet shop desarrollada por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/agrovet",
    images: ["/agrovet-preview-actual.png"],
  },
};

const highlights = [
  "Catalogo con foco comercial",
  "Base para carrito y pedidos",
  "Estructura lista para crecer",
];

export default function AgrovetProjectPage() {
  return (
    <main style={{ background: "#f4f8fc" }}>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ display: "grid", gap: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "760px" }}>
              <p className="eyebrow">
                <Store size={16} /> Proyecto
              </p>
              <h1 style={{ margin: "12px 0 0", fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02 }}>
                Agrovet MDP
              </h1>
              <p style={{ margin: "14px 0 0", color: "var(--muted)", fontSize: "17px", lineHeight: 1.7 }}>
                Tienda online para veterinaria y pet shop con foco comercial, navegacion simple y
                una base visual lista para convertir visitas en compras o consultas.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
              <Link className="button button-dark" href="/#trabajos">
                <ArrowLeft size={18} />
                Volver
              </Link>
              <a className="button button-primary" href={liveUrl} target="_blank" rel="noreferrer">
                Ver sitio online
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div style={{ border: "1px solid var(--line)", borderRadius: "8px", overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <Image
              src="/agrovet-preview-actual.png"
              alt="Vista previa del proyecto Agrovet MDP"
              width={1600}
              height={900}
              sizes="(max-width: 920px) 100vw, 1180px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            {highlights.map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  background: "white",
                  padding: "18px",
                  boxShadow: "0 10px 28px rgba(11,16,20,0.05)",
                }}
              >
                <Check size={18} color="var(--coral)" />
                <h2 style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: 1.1 }}>{item}</h2>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "14px",
            }}
          >
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "8px",
                background: "white",
                padding: "24px",
                boxShadow: "0 12px 32px rgba(11,16,20,0.06)",
              }}
            >
              <p className="eyebrow">
                <Check size={16} /> Resumen
              </p>
              <p style={{ margin: "12px 0 0", color: "var(--muted)", lineHeight: 1.75 }}>
                El objetivo es mostrar la marca de forma clara, con productos accesibles y una
                experiencia simple para seguir navegando sin fricción. Esta pieza funciona como base
                comercial para seguir sumando módulos.
              </p>
            </div>
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "8px",
                background: "#03101f",
                color: "white",
                padding: "24px",
                boxShadow: "0 12px 32px rgba(11,16,20,0.12)",
              }}
            >
              <p className="eyebrow" style={{ color: "#eaf5ff" }}>
                <Check size={16} /> Enfoque
              </p>
              <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
                Orden visual, conversión directa y base lista para escalar con stock, carrito y
                gestión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
