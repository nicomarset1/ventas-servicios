import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero } from "./content";

export const alt = "NM Software, software a medida para negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que se ve al compartir el link (WhatsApp, redes). Colores = tokens de globals.css.
export default async function OpengraphImage() {
  const [logo, font] = await Promise.all([
    readFile(join(process.cwd(), "public/logo-circle.png"), "base64"),
    readFile(join(process.cwd(), "src/app/fonts/SpaceGrotesk-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          // Un solo glow de marca arriba a la derecha, sobre el fondo navy
          backgroundImage:
            "radial-gradient(circle at 88% 18%, rgba(0, 84, 210, 0.5) 0px, rgba(0, 84, 210, 0) 520px), linear-gradient(180deg, #061629 0%, #050f1d 100%)",
          color: "white",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${logo}`} width={72} height={72} alt="" style={{ borderRadius: 9999 }} />
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -0.5 }}>NM Software</div>
        </div>
        <div
          style={{
            marginTop: 48,
            maxWidth: 860,
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          {hero.title}
        </div>
        <div style={{ marginTop: 28, fontSize: 30, letterSpacing: -0.3, color: "rgba(255, 255, 255, 0.72)" }}>
          Webs, sistemas y automatizaciones
        </div>
        <div
          style={{
            position: "absolute",
            left: 96,
            bottom: 64,
            width: 96,
            height: 6,
            borderRadius: 9999,
            background: "#ff7a1a",
          }}
        />
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, weight: 600, style: "normal" }] }
  );
}
