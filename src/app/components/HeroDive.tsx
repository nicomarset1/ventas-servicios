"use client";

import { useEffect } from "react";

/*
  Al bajar, la portada queda fija y entramos a la pantalla de la notebook:
  la notebook va al centro y crece hasta que la pantalla ocupa todo, y ahí se vuelve la banda azul de trabajos.
  Los elementos se marcan con data-dive en Hero y HeroCollage. Solo mueve transform y opacity.
  Con "reducir movimiento" no corre: la portada queda quieta (ver Hero.module.css).
*/

// Las mismas curvas que --ease-in-out y --ease-out de globals.css.
const easeInOut = cubicBezier(0.77, 0, 0.175, 1);
const easeOut = cubicBezier(0.23, 1, 0.32, 1);

// Inclinación de la tapa en reposo: igual que .lid en HeroCollage.module.css.
const LID_TILT = 12;

export default function HeroDive() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let stop: (() => void) | undefined;

    const sync = () => {
      stop?.();
      stop = motion.matches ? start() : undefined;
    };

    sync();
    motion.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      stop?.();
    };
  }, []);

  return null;
}

function start() {
  const root = document.querySelector<HTMLElement>("[data-dive-root]");
  if (!root) return undefined;

  const get = (name: string) => root.querySelector<HTMLElement>(`[data-dive="${name}"]`);
  const stage = get("stage");
  const space = get("space");
  const copy = get("copy");
  const laptop = get("laptop");
  const lid = get("lid");
  const screen = get("screen");
  const night = get("night");
  const portal = get("portal");
  const phone = get("phone");
  const second = get("second");
  const caption = get("caption");
  if (!stage || !space || !copy || !laptop || !lid || !screen || !night || !portal) return undefined;

  const header = document.querySelector<HTMLElement>("header");
  const flyers = [phone, second].filter((el): el is HTMLElement => el !== null);

  let top = 0;
  let travel = 1;
  let dx = 0;
  let dy = 0;
  let zoom = 1;
  let vw = 0;
  let vh = 0;
  let frame = 0;
  let last = -1;

  // Medidas de layout (sin transforms): dónde está la pantalla y cuánto tiene que crecer para cubrir todo.
  const measure = () => {
    vw = document.documentElement.clientWidth;
    vh = window.innerHeight;
    const headerH = header?.offsetHeight ?? 0;

    // Si la portada no entra en la pantalla (celular), se fija cuando su parte de abajo llega al borde.
    top = Math.min(headerH, vh - stage.offsetHeight);
    stage.style.top = `${top}px`;
    travel = Math.max(space.offsetHeight, 1);

    const sw = screen.offsetWidth;
    const sh = screen.offsetHeight;
    const inStage = offsetWithin(screen, stage);
    const inLaptop = offsetWithin(screen, laptop);
    laptop.style.transformOrigin = `${inLaptop.x + sw / 2}px ${inLaptop.y + sh / 2}px`;

    const visibleH = vh - headerH;
    dx = vw / 2 - (stage.getBoundingClientRect().left + inStage.x + sw / 2);
    dy = headerH + visibleH / 2 - (top + inStage.y + sh / 2);
    zoom = Math.max(vw / sw, visibleH / sh) * 1.08;

    last = -1;
    render();
  };

  const render = () => {
    frame = 0;
    const p = clamp((top - root.getBoundingClientRect().top) / travel);
    if (p === last) return;
    last = p;

    // La notebook va al centro, se endereza la tapa y la cámara entra a velocidad pareja (zoom geométrico).
    const move = easeInOut(clamp(p / 0.55));
    const scale = Math.pow(zoom, clamp(p / 0.9));
    laptop.style.transform = `translate3d(${dx * move}px, ${dy * move}px, 0) scale(${scale})`;
    laptop.style.pointerEvents = p > 0.02 ? "none" : "";
    lid.style.transform = `rotateX(${LID_TILT * (1 - easeOut(clamp(p / 0.4)))}deg)`;

    // El texto sube y se va.
    const textOut = clamp(p / 0.28);
    copy.style.opacity = `${1 - textOut}`;
    copy.style.transform = `translate3d(0, ${-48 * easeOut(textOut)}px, 0)`;
    copy.style.visibility = textOut >= 1 ? "hidden" : "";

    if (caption) {
      const captionOut = clamp(p / 0.1);
      caption.style.opacity = `${1 - captionOut}`;
      caption.style.visibility = captionOut >= 1 ? "hidden" : "";
    }

    // El celular y la hoja pasan al costado de la cámara.
    const fly = easeInOut(clamp(p / 0.4));
    const flyOut = clamp((p - 0.04) / 0.2);
    flyers.forEach((el, index) => {
      const side = index === 0 ? -1 : 1;
      el.style.transform = `translate3d(${side * 0.3 * vw * fly}px, ${0.24 * vh * fly}px, 0) rotate(${side * 10 * fly}deg) scale(${1 + 0.6 * fly})`;
      el.style.opacity = `${1 - flyOut}`;
      el.style.visibility = flyOut >= 1 ? "hidden" : "";
    });

    // Adentro de la pantalla todo se vuelve el azul de la banda de trabajos.
    night.style.opacity = `${easeInOut(clamp((p - 0.66) / 0.2))}`;
    portal.style.opacity = `${clamp((p - 0.84) / 0.1)}`;
  };

  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };

  const resizeObserver = new ResizeObserver(() => measure());
  resizeObserver.observe(stage);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", measure);
  document.fonts?.ready.then(measure);
  measure();

  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", measure);
    [stage, copy, laptop, lid, night, portal, caption, ...flyers].forEach((el) => el?.removeAttribute("style"));
  };
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

// Posición de layout (sin transforms) de un elemento dentro de un ancestro posicionado.
function offsetWithin(element: HTMLElement, ancestor: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = element;
  while (node && node !== ancestor) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

// Evalúa una cubic-bezier de CSS para usar las mismas curvas del sitio en JS.
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const slopeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;

  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const error = sampleX(t) - x;
      if (Math.abs(error) < 1e-5) return sampleY(t);
      const slope = slopeX(t);
      if (Math.abs(slope) < 1e-6) break;
      t -= error / slope;
    }
    let low = 0;
    let high = 1;
    t = x;
    for (let i = 0; i < 24; i++) {
      const value = sampleX(t);
      if (Math.abs(value - x) < 1e-5) break;
      if (value < x) low = t;
      else high = t;
      t = (low + high) / 2;
    }
    return sampleY(t);
  };
}
