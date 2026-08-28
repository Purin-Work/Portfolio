"use client";

import { useEffect, useRef } from "react";

const GLOW_SIZE = 340;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let frame: number | null = null;
    let targetX = -GLOW_SIZE;
    let targetY = -GLOW_SIZE;
    let currentX = targetX;
    let currentY = targetY;

    const draw = () => {
      currentX += (targetX - currentX) * 0.28;
      currentY += (targetY - currentY) * 0.28;
      glow.style.transform = `translate3d(${currentX - GLOW_SIZE / 2}px, ${currentY - GLOW_SIZE / 2}px, 0)`;

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        frame = window.requestAnimationFrame(draw);
      } else {
        frame = null;
      }
    };

    const moveGlow = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.dataset.visible = "true";
      if (frame === null) frame = window.requestAnimationFrame(draw);
    };

    const hideGlow = () => {
      glow.dataset.visible = "false";
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideGlow);
    window.addEventListener("blur", hideGlow);

    return () => {
      window.removeEventListener("pointermove", moveGlow);
      document.documentElement.removeEventListener("mouseleave", hideGlow);
      window.removeEventListener("blur", hideGlow);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
