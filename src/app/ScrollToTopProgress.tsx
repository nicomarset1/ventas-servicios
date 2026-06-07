"use client";

import { ArrowUp } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

export default function ScrollToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.max(0, Math.min(1, nextProgress)));
      setIsVisible(window.scrollY > 180);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-indicator ${isVisible ? "is-visible" : ""}`}
      type="button"
      onClick={handleClick}
      aria-label="Volver al inicio"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      style={{ "--scroll-progress": `${progress * 100}%` } as CSSProperties}
    >
      <ArrowUp size={23} />
    </button>
  );
}
