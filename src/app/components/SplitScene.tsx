"use client";

import { useEffect, useRef, useState } from "react";
import type { AreaSlug } from "../content";
import styles from "./SplitScene.module.css";

// Animación de fondo de cada mitad de la home. Todo es SVG + CSS: solo corre mientras se ve.
export default function SplitScene({ area }: { area: AreaSlug }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`${styles.scene} ${styles[area]}`} data-playing={playing} aria-hidden="true">
      {area === "software" ? <SoftwareScene /> : <WebScene />}
    </span>
  );
}

// Panel de gestión: indicadores, gráficos que se actualizan y una automatización que va tildando pasos.
function SoftwareScene() {
  const bars = [62, 88, 54, 110, 96, 132, 118];
  const steps = ["Pedido recibido", "Stock actualizado", "Factura enviada"];

  return (
    <svg className={styles.svg} viewBox="0 0 640 460" fill="none">
      <defs>
        <linearGradient id="sw-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4d8dff" />
          <stop offset="1" stopColor="#0054d2" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="sw-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff7a1a" stopOpacity="0.32" />
          <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ventana del sistema */}
      <rect className={styles.window} x="0" y="0" width="560" height="460" rx="16" />
      <path className={styles.rule} d="M0 40h560" />
      <circle className={styles.dot} cx="22" cy="20" r="5" />
      <circle className={styles.dot} cx="40" cy="20" r="5" />
      <circle className={styles.dot} cx="58" cy="20" r="5" />

      {/* Menú lateral */}
      <path className={styles.rule} d="M120 40v420" />
      <rect className={styles.menuActive} x="14" y="60" width="92" height="22" rx="6" />
      {[96, 128, 160, 192].map((y) => (
        <rect key={y} className={styles.line} x="24" y={y} width={y % 64 === 0 ? 56 : 70} height="8" rx="4" />
      ))}

      {/* Indicadores */}
      {[136, 276, 416].map((x, i) => (
        <g key={x}>
          <rect className={styles.card} x={x} y="60" width="128" height="78" rx="10" />
          <rect className={styles.line} x={x + 14} y="76" width="50" height="7" rx="3.5" />
          <rect className={styles.number} x={x + 14} y="94" width={[72, 58, 80][i]} height="14" rx="4" />
          <rect className={styles.track} x={x + 14} y="120" width="100" height="5" rx="2.5" />
          <rect
            className={styles.fill}
            style={{ animationDelay: `${i * -1.3}s` }}
            x={x + 14}
            y="120"
            width="100"
            height="5"
            rx="2.5"
          />
        </g>
      ))}

      {/* Barras que se van actualizando */}
      <rect className={styles.card} x="136" y="154" width="220" height="190" rx="10" />
      <rect className={styles.line} x="150" y="170" width="70" height="7" rx="3.5" />
      {bars.map((height, i) => (
        <rect
          key={i}
          className={styles.bar}
          style={{ animationDelay: `${i * -0.7}s` }}
          x={152 + i * 28}
          y={330 - height}
          width="16"
          height={height}
          rx="4"
          fill="url(#sw-bar)"
        />
      ))}

      {/* Línea de tendencia que se dibuja */}
      <rect className={styles.card} x="368" y="154" width="176" height="190" rx="10" />
      <rect className={styles.line} x="382" y="170" width="60" height="7" rx="3.5" />
      <path className={styles.area} d="M382 300 L412 284 L442 292 L472 256 L502 262 L530 222 V330 H382 Z" fill="url(#sw-area)" />
      <path className={styles.trend} d="M382 300 L412 284 L442 292 L472 256 L502 262 L530 222" pathLength={1} />
      <circle className={styles.trendDot} cx="530" cy="222" r="5" />

      {/* Tabla */}
      <rect className={styles.card} x="136" y="360" width="408" height="100" rx="10" />
      {[382, 410, 438].map((y, i) => (
        <g key={y}>
          <rect className={styles.line} x="152" y={y} width={[120, 96, 132][i]} height="7" rx="3.5" />
          <rect className={styles.line} x="340" y={y} width="56" height="7" rx="3.5" />
          <rect className={styles.chip} style={{ animationDelay: `${i * 0.6}s` }} x="480" y={y - 4} width="48" height="15" rx="7.5" />
        </g>
      ))}

      {/* Automatización: los pasos se van tildando en orden */}
      <g>
        <rect className={styles.floating} x="410" y="108" width="226" height="148" rx="14" />
        <rect className={styles.line} x="428" y="126" width="84" height="7" rx="3.5" />
        <path className={styles.flowRail} d="M440 160v68" />
        <path className={styles.flowPulse} d="M440 160v68" pathLength={1} />
        {steps.map((step, i) => (
          <g key={step} className={styles.step} style={{ animationDelay: `${i * 0.9}s` }}>
            <circle className={styles.stepDot} cx="440" cy={160 + i * 34} r="9" />
            <path className={styles.stepCheck} d={`M436 ${160 + i * 34}l3 3 5-6`} />
            <text className={styles.stepText} x="458" y={164 + i * 34}>
              {step}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// Un sitio que se arma solo: portada, productos, un clic en "agregar" y la versión de celular al lado.
function WebScene() {
  return (
    <svg className={styles.svg} viewBox="0 0 640 460" fill="none">
      <defs>
        <linearGradient id="web-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a1a" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0054d2" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="web-product" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <clipPath id="web-phone">
          <rect x="478" y="166" width="132" height="268" rx="16" />
        </clipPath>
      </defs>

      {/* Navegador */}
      <rect className={styles.window} x="0" y="0" width="560" height="460" rx="16" />
      <path className={styles.rule} d="M0 40h560" />
      <circle className={styles.dot} cx="22" cy="20" r="5" />
      <circle className={styles.dot} cx="40" cy="20" r="5" />
      <circle className={styles.dot} cx="58" cy="20" r="5" />
      <rect className={styles.urlBar} x="150" y="10" width="260" height="20" rx="10" />
      <text className={styles.url} x="280" y="24" textAnchor="middle">
        tunegocio.com.ar
      </text>

      {/* Barra del sitio */}
      <g className={styles.build} style={{ animationDelay: "0s" }}>
        <circle className={styles.logo} cx="34" cy="68" r="10" />
        <rect className={styles.line} x="52" y="64" width="56" height="8" rx="4" />
        {[300, 350, 400].map((x) => (
          <rect key={x} className={styles.line} x={x} y="64" width="36" height="7" rx="3.5" />
        ))}
        <rect className={styles.cartIcon} x="502" y="58" width="26" height="22" rx="6" />
        <circle className={styles.cartBadge} cx="528" cy="58" r="7" />
      </g>

      {/* Portada */}
      <g className={styles.build} style={{ animationDelay: "0.35s" }}>
        <rect className={styles.number} x="24" y="114" width="210" height="18" rx="5" />
        <rect className={styles.accentBar} x="24" y="140" width="150" height="18" rx="5" />
        <rect className={styles.line} x="24" y="172" width="196" height="7" rx="3.5" />
        <rect className={styles.line} x="24" y="186" width="160" height="7" rx="3.5" />
        <rect className={styles.button} x="24" y="208" width="98" height="28" rx="14" />
      </g>
      <rect className={`${styles.build} ${styles.heroImage}`} style={{ animationDelay: "0.6s" }} x="270" y="100" width="266" height="150" rx="12" fill="url(#web-hero)" />

      {/* Productos */}
      {[24, 196, 368].map((x, i) => (
        <g key={x} className={styles.build} style={{ animationDelay: `${0.9 + i * 0.2}s` }}>
          <rect className={styles.card} x={x} y="272" width="160" height="170" rx="10" />
          <rect x={x + 10} y="282" width="140" height="86" rx="7" fill="url(#web-product)" />
          <rect className={styles.line} x={x + 10} y="380" width="96" height="7" rx="3.5" />
          <rect className={styles.number} x={x + 10} y="396" width="52" height="10" rx="3" />
          <rect className={i === 0 ? styles.addButton : styles.ghostButton} x={x + 96} y="410" width="54" height="22" rx="11" />
        </g>
      ))}

      {/* Clic en "agregar" del primer producto */}
      <circle className={styles.ripple} cx="148" cy="421" r="14" />
      <g transform="translate(150 424)">
        <path className={styles.cursor} d="M0 0 L0 20 L5.5 15 L9.5 23.5 L13 22 L9 13.8 L16 13.8 Z" />
      </g>

      {/* Versión de celular del mismo sitio */}
      <g className={styles.phone}>
        <rect className={styles.phoneBody} x="470" y="156" width="148" height="288" rx="24" />
        <g clipPath="url(#web-phone)">
          <rect x="478" y="166" width="132" height="268" fill="#061629" />
          <g className={styles.phoneScroll}>
            <rect className={styles.line} x="488" y="186" width="40" height="7" rx="3.5" />
            <rect x="488" y="204" width="112" height="76" rx="8" fill="url(#web-hero)" />
            <rect className={styles.number} x="488" y="292" width="92" height="10" rx="3" />
            <rect className={styles.line} x="488" y="310" width="104" height="6" rx="3" />
            <rect className={styles.button} x="488" y="326" width="62" height="18" rx="9" />
            {[356, 452, 548].map((y) => (
              <g key={y}>
                <rect className={styles.card} x="488" y={y} width="112" height="84" rx="8" />
                <rect x="496" y={y + 8} width="96" height="44" rx="6" fill="url(#web-product)" />
                <rect className={styles.line} x="496" y={y + 60} width="60" height="6" rx="3" />
                <rect className={styles.number} x="496" y={y + 72} width="34" height="6" rx="3" />
              </g>
            ))}
          </g>
        </g>
        <rect className={styles.notch} x="526" y="164" width="36" height="8" rx="4" />
      </g>
    </svg>
  );
}
