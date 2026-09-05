import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check, Clock3, MessageCircle, Radio, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyecto Hasta Que Nos Vayamos - sitio con automatizacion para radio",
  description:
    "Caso de proyecto de NM Software: sitio para un programa de radio estudiantil con streaming en vivo, archivo de programas y publicacion automatizada cada semana.",
  alternates: {
    canonical: "/proyectos/hasta-que-nos-vayamos",
  },
  openGraph: {
    title: "Proyecto Hasta Que Nos Vayamos - sitio con automatizacion para radio",
    description:
      "Sitio con streaming en vivo y automatizacion semanal desarrollado por NM Software.",
    url: "https://nmsoftware.com.ar/proyectos/hasta-que-nos-vayamos",
    images: ["/hnv-preview.png"],
  },
};

const highlights = [
  "Streaming en vivo",
  "Automatizacion semanal",
  "Archivo de programas",
];

export default function HastaQueNosVayamosProjectPage() {
  return (
    <main style={{ background: "#f4f8fc" }}>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ display: "grid", gap: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "760px" }}>
              <p className="eyebrow">
                <Radio size={16} /> Proyecto
              </p>
              <h1 style={{ margin: "12px 0 0", fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02 }}>
                Hasta Que Nos Vayamos
              </h1>
              <p style={{ margin: "14px 0 0", color: "var(--muted)", fontSize: "17px", lineHeight: 1.7 }}>
                Sitio para un programa de radio estudiantil con streaming en vivo, archivo de
                programas y un flujo de grabacion, subida y publicacion 100% automatizado cada
                semana.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-start" }}>
              <Link className="button button-dark" href="/#trabajos">
                <ArrowLeft size={18} />
                Volver
              </Link>
              <a
                className="button button-primary"
                href="https://hastaquenosvayamos.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                <Radio size={18} />
                Ver sitio en vivo
              </a>
            </div>
          </div>

          <div style={{ border: "1px solid var(--line)", borderRadius: "8px", overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <Image
              src="/hnv-preview.png"
              alt="Vista previa del proyecto Hasta Que Nos Vayamos"
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
                1. El streaming se escucha en vivo cada lunes. 2. El programa se graba, se sube y se
                publica solo. 3. Queda disponible en el archivo sin intervencion manual.
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
                <Zap size={16} /> Automatizacion
              </p>
              <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
                Un flujo automatico graba el streaming, sube el audio y publica el nuevo programa
                cada semana sin que nadie tenga que hacerlo a mano.
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
                <ShieldCheck size={16} /> Enfoque
              </p>
              <p style={{ margin: "12px 0 0", color: "var(--muted)", lineHeight: 1.75 }}>
                Diseno simple y directo para que la audiencia entienda rapido como escuchar en vivo
                y encontrar los programas anteriores.
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
                Seguimiento y contacto directo por Instagram para que la audiencia interactue con el
                programa cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
