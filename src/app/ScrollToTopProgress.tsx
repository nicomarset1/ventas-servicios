"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./ScrollToTopProgress.module.css";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
        setProgress(Math.max(0, Math.min(1, nextProgress)));
        setIsVisible(window.scrollY > 400);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.isVisible : ""}`}
      type="button"
      onClick={handleClick}
      aria-label="Volver al inicio"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg className={styles.ring} viewBox="0 0 48 48" aria-hidden="true">
        <circle className={styles.track} cx="24" cy="24" r={RADIUS} />
        <circle
          className={styles.progress}
          cx="24"
          cy="24"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <ArrowUp size={18} />
    </button>
  );
}
