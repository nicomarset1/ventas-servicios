import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check, Clock3, MapPinned, MessageCircle, ShieldCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyecto Mecanica Marset - sitio web para taller mecanico",
  description:
    "Caso de proyecto de NM Software: sitio web para taller mecanico con turnos por WhatsApp, resenas, ubicacion y contenido comercial.",
  alternates: {
    canonical: "/proyectos/mecanica-marset",
  },
  openGraph: {
    title: "Proyecto Mecanica Marset - sitio web para taller mecanico",
    description:
      "Sitio web para taller mecanico desarrollado por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/mecanica-marset",
    images: ["/pag-taller-preview.png"],
  },
};

const highlights = [
  "Turnos por WhatsApp",
  "Reseñas y prueba social",
  "Ubicacion visible y directa",
];

export default function MecanicaMarsetProjectPage() {
  return (
    <main style={{ background: "#f4f8fc" }}>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ display: "grid", gap: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "760px" }}>
              <p className="eyebrow">
                <Wrench size={16} /> Proyecto
              </p>
              <h1 style={{ margin: "12px 0 0", fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02 }}>
                Mecanica Marset
              </h1>
              <p style={{ margin: "14px 0 0", color: "var(--muted)", fontSize: "17px", lineHeight: 1.7 }}>
                Sitio pensado para un taller mecanico con hero fuerte, turnos por WhatsApp, prueba
                social y una estructura simple para que el cliente entienda rapido como contactar.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
              <Link className="button button-dark" href="/#trabajos">
                <ArrowLeft size={18} />
                Volver
              </Link>
              <a className="button button-primary" href="https://wa.me/5492235499001" target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          <div style={{ border: "1px solid var(--line)", borderRadius: "8px", overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <Image
              src="/pag-taller-preview.png"
              alt="Vista previa del proyecto Mecanica Marset"
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
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "12px",
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
                <Clock3 size={16} /> Flujo
              </p>
              <p style={{ margin: "12px 0 0", color: "var(--muted)", lineHeight: 1.75 }}>
                1. Escribir por WhatsApp. 2. Indicar marca, modelo y falla. 3. Coordinar turno y
                disponibilidad.
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
                <ShieldCheck size={16} /> Enfoque
              </p>
              <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
                Orden visual, confianza y un contacto directo que simplifica la consulta antes de
                acercarse al taller.
              </p>
            </div>
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
                <MapPinned size={16} /> Ubicacion
              </p>
              <p style={{ margin: "12px 0 0", color: "var(--muted)", lineHeight: 1.75 }}>
                Alberti 5584, Mar del Plata. La pagina prioriza que la gente ubique el taller y
                entienda el paso siguiente en segundos.
              </p>
            </div>
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
                <MessageCircle size={16} /> Contacto
              </p>
              <p style={{ margin: "12px 0 0", color: "var(--muted)", lineHeight: 1.75 }}>
                Un boton visible y directo para pedir turno sin pasar por formularios largos o
                recorridos confusos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
