import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero } from "./content";

export const alt = "NM Software, desarrollo web y software a medida en Mar del Plata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que se ve al compartir el link (WhatsApp, redes). Colores y letra = los del sitio.
export default async function OpengraphImage() {
  const [logo, display, text] = await Promise.all([
    readFile(join(process.cwd(), "public/logo-circle.png"), "base64"),
    readFile(join(process.cwd(), "src/app/fonts/Archivo-ExpandedExtraBold.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Archivo-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b1b33",
          color: "white",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${logo}`} width={64} height={64} alt="" style={{ borderRadius: 9999 }} />
          <div style={{ fontFamily: "Archivo Expanded", fontSize: 30, letterSpacing: -1 }}>NM Software</div>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 1000,
            fontFamily: "Archivo Expanded",
            fontSize: 76,
            lineHeight: 1.02,
            letterSpacing: -3.4,
          }}
        >
          {hero.title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#c7d3e6" }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: "#ff7a1a" }} />
          Tiendas online, sitios web y sistemas a medida. Mar del Plata.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo Expanded", data: display, weight: 800, style: "normal" },
        { name: "Archivo", data: text, weight: 500, style: "normal" },
      ],
    }
  );
}
