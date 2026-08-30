"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (
      !element
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || typeof IntersectionObserver === "undefined"
      || typeof element.animate !== "function"
    ) return;

    let animation: Animation | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animation = element.animate(
          [
            { opacity: 0, transform: "translate3d(0, 18px, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 520,
            delay: delay * 1000,
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "both",
          },
        );
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [delay]);

  return <div ref={elementRef} className={className}>{children}</div>;
}
