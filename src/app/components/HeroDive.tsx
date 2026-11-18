"use client";

import { useEffect } from "react";

/*
  Al bajar, la portada queda fija y entramos a la pantalla de la notebook:
  la notebook va al centro y crece hasta que la pantalla ocupa todo, y ahí se vuelve la banda azul de trabajos.
  La animación sigue al scroll con un poco de inercia: cada golpe de ruedita se desliza en vez de saltar.
  Los elementos se marcan con data-dive en Hero y HeroCollage. Solo mueve transform y opacity.
  Con "reducir movimiento" no corre: la portada queda quieta (ver Hero.module.css).
*/

// Segundos que tarda la animación en alcanzar al scroll (constante de tiempo de la inercia).
const SMOOTHING = 0.15;
// Lo más atrás del scroll que puede quedar la animación (avance de 0 a 1), para que un tirón largo no la deje colgada.
const MAX_LAG = 0.1;

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

  let alive = true;
  let top = 0;
  let travel = 1;
  let dx = 0;
  let dy = 0;
  let zoom = 1;
  let vw = 0;
  let vh = 0;
  let frame = 0;
  let then = 0;
  let headerHalf = 0;
  // Escala a la que la pantalla, ya centrada, toca el borde de abajo del header.
  let reachScale = 1;
  // Avance que se ve en pantalla: persigue al del scroll con inercia. Vale -1 hasta la primera medida.
  let shown = -1;

  // Avance real del scroll mientras la portada está fija, de 0 a 1, y si la portada sigue debajo del header.
  const read = () => {
    const rect = root.getBoundingClientRect();
    return { target: clamp((top - rect.top) / travel), under: rect.bottom > headerHalf };
  };

  // Medidas de layout (sin transforms): dónde está la pantalla y cuánto tiene que crecer para cubrir todo.
  const measure = () => {
    if (!alive) return;
    vw = document.documentElement.clientWidth;
    vh = window.innerHeight;
    const headerH = header?.offsetHeight ?? 0;
    headerHalf = headerH / 2;

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
    reachScale = sh > 0 ? visibleH / sh : 1;

    const { target, under } = read();
    if (shown < 0) shown = target;
    draw(shown, target, under);
    request();
  };

  const draw = (p: number, target: number, under: boolean) => {
    // La notebook va al centro, se endereza la tapa y la cámara entra a velocidad pareja (zoom geométrico).
    const move = smooth(p / 0.6);
    const scale = Math.pow(zoom, p);
    laptop.style.transform = `translate3d(${dx * move}px, ${dy * move}px, 0) scale(${scale})`;
    laptop.style.pointerEvents = p > 0.02 ? "none" : "";
    lid.style.transform = `rotateX(${LID_TILT * (1 - smooth(p / 0.45))}deg)`;

    // El texto sube y se va.
    const textOut = clamp(p / 0.3);
    copy.style.opacity = `${1 - textOut}`;
    copy.style.transform = `translate3d(0, ${-48 * smooth(textOut)}px, 0)`;
    copy.style.visibility = textOut >= 1 ? "hidden" : "";

    if (caption) {
      const captionOut = clamp(p / 0.12);
      caption.style.opacity = `${1 - captionOut}`;
      caption.style.visibility = captionOut >= 1 ? "hidden" : "";
    }

    // El celular y la hoja pasan al costado de la cámara.
    const fly = smooth(p / 0.45);
    const flyOut = clamp((p - 0.05) / 0.25);
    flyers.forEach((el, index) => {
      const side = index === 0 ? -1 : 1;
      el.style.transform = `translate3d(${side * 0.3 * vw * fly}px, ${0.24 * vh * fly}px, 0) rotate(${side * 10 * fly}deg) scale(${1 + 0.6 * fly})`;
      el.style.opacity = `${1 - flyOut}`;
      el.style.visibility = flyOut >= 1 ? "hidden" : "";
    });

    // El panel se tiñe de a poco del azul de la banda de trabajos y al final el azul cubre todo.
    const tint = smooth((p - 0.42) / 0.53);
    night.style.opacity = `${tint}`;
    // Cuando la portada se suelta ya está toda azul, aunque la animación venga un poco atrás del scroll.
    const cover = Math.max(smooth((p - 0.72) / 0.25), clamp((target - 0.95) / 0.05));
    portal.style.opacity = `${cover}`;
    // La barra de arriba toma el azul de lo que tiene justo debajo: primero el fondo con el portal y,
    // cuando la pantalla (o su marco oscuro) llega al borde del header, el azul de la pantalla.
    const reach = clamp((scale - reachScale * 0.82) / (reachScale * 0.18));
    const headerNight = Math.max(cover, tint * reach);
    header?.style.setProperty("--dive-night", under ? headerNight.toFixed(3) : "0");
  };

  // Cada cuadro acerca lo que se ve al avance real, igual a cualquier frecuencia de pantalla.
  const tick = (now: number) => {
    frame = 0;
    const { target, under } = read();
    const dt = then ? Math.min(now - then, 100) / 1000 : 1 / 60;
    shown += (target - shown) * (1 - Math.exp(-dt / SMOOTHING));
    shown = Math.min(target + MAX_LAG, Math.max(target - MAX_LAG, shown));
    if (Math.abs(target - shown) < 1e-4) shown = target;
    draw(shown, target, under);

    if (shown === target) {
      then = 0;
    } else {
      then = now;
      frame = requestAnimationFrame(tick);
    }
  };

  const request = () => {
    if (alive && !frame) frame = requestAnimationFrame(tick);
  };

  const resizeObserver = new ResizeObserver(() => measure());
  resizeObserver.observe(stage);
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", measure);
  document.fonts?.ready.then(measure);
  measure();

  return () => {
    alive = false;
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    window.removeEventListener("scroll", request);
    window.removeEventListener("resize", measure);
    [stage, copy, laptop, lid, night, portal, caption, ...flyers].forEach((el) => el?.removeAttribute("style"));
    header?.style.removeProperty("--dive-night");
  };
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

/*
  Curva seno de ida y vuelta (easeInOutSine): arranca y termina suave.
  Lo que sigue al scroll necesita una curva pareja: las fuertes de los tokens juntan casi todo el cambio en un par de golpes de ruedita.
*/
function smooth(value: number) {
  return 0.5 - 0.5 * Math.cos(Math.PI * clamp(value));
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
