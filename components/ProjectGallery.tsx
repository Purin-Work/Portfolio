"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/types/portfolio";
import ProjectVideo from "./ProjectVideo";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  locale: Locale;
  variant?: "card" | "modal";
  video?: string;
  poster?: string;
  pauseVideo?: boolean;
}

export default function ProjectGallery({ images, title, locale, variant = "modal", video, poster, pauseVideo = false }: ProjectGalleryProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const scrollEndTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoResetKey, setAutoResetKey] = useState(0);
  const reduceMotion = useReducedMotion();
  const media = [
    ...(video ? [{ type: "video" as const, source: video }] : []),
    ...images.map((source) => ({ type: "image" as const, source })),
  ];
  const mediaCount = media.length;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => () => {
    if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mediaCount <= 1 || !isInView || isPaused || pauseVideo) return;

    const timer = window.setInterval(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const currentIndex = activeIndexRef.current;
      const nextIndex = (currentIndex + 1) % mediaCount;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      viewport.scrollTo({
        left: viewport.clientWidth * nextIndex,
        behavior: !reduceMotion && nextIndex === currentIndex + 1 ? "smooth" : "auto",
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [autoResetKey, isInView, isPaused, mediaCount, pauseVideo, reduceMotion]);

  const goToSlide = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), mediaCount - 1);
    const viewport = viewportRef.current;
    if (!viewport) return;
    const adjacentSlide = Math.abs(nextIndex - activeIndex) <= 1;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    setAutoResetKey((key) => key + 1);
    viewport.scrollTo({
      left: viewport.clientWidth * nextIndex,
      behavior: reduceMotion || !adjacentSlide ? "auto" : "smooth",
    });
  };

  const updateActiveSlide = () => {
    if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = window.setTimeout(() => {
      scrollEndTimerRef.current = null;
      const viewport = viewportRef.current;
      if (!viewport?.clientWidth) return;
      const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
      if (nextIndex === activeIndexRef.current) return;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, 100);
  };

  return (
    <div
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsPaused(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsPaused(false);
      }}
    >
      <div className={`group relative overflow-hidden bg-[#060b14] ${variant === "modal" ? "rounded-2xl border border-white/10" : ""}`}>
        <div
          ref={viewportRef}
          className={`gallery-scroll flex snap-x snap-mandatory overflow-x-auto ${variant === "modal" ? "aspect-[3/4] sm:aspect-[16/9]" : "aspect-[16/10]"}`}
          onScroll={updateActiveSlide}
          onPointerDown={() => setAutoResetKey((key) => key + 1)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") goToSlide(activeIndex - 1);
            if (event.key === "ArrowRight") goToSlide(activeIndex + 1);
          }}
          tabIndex={0}
          role="region"
          aria-label={locale === "th" ? `แกลเลอรีสื่อ ${title}` : `${title} media gallery`}
        >
          {media.map((item, index) => (
            <figure key={`${item.type}-${item.source}`} className="relative min-w-full snap-center">
              {Math.abs(index - activeIndex) <= 1 && (
                item.type === "video" ? (
                  <ProjectVideo source={item.source} poster={poster ?? images[0]} title={title} paused={pauseVideo} />
                ) : (
                  <Image
                    src={item.source}
                    alt={`${title} screenshot ${index - (video ? 1 : 0) + 1} of ${images.length}`}
                    fill
                    sizes={variant === "card" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 900px) 95vw, 850px"}
                    quality={75}
                    loading={index === activeIndex ? "eager" : "lazy"}
                    className="object-contain"
                  />
                )
              )}
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#080d18]/90 text-white transition hover:bg-[#101a2b] disabled:pointer-events-none disabled:opacity-25"
          aria-label={locale === "th" ? "สื่อก่อนหน้า" : "Previous media"}
        >
          <ChevronLeft size={19} />
        </button>
        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          disabled={activeIndex === mediaCount - 1}
          className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#080d18]/90 text-white transition hover:bg-[#101a2b] disabled:pointer-events-none disabled:opacity-25"
          aria-label={locale === "th" ? "สื่อถัดไป" : "Next media"}
        >
          <ChevronRight size={19} />
        </button>

        <span className={`absolute right-3 rounded-full border border-white/10 bg-[#080d18]/90 px-3 py-1 font-mono text-[10px] text-slate-300 ${variant === "card" ? "top-3" : "bottom-3"}`}>
          {activeIndex + 1} / {mediaCount}
        </span>

        {variant === "card" && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-[#080d18]/90 px-3 py-2" role="group" aria-label={locale === "th" ? "เลือกสื่อ" : "Select media"}>
            {media.map((item, index) => (
              <button
                key={`${item.type}-${item.source}`}
                type="button"
                onClick={() => goToSlide(index)}
                className={`size-1.5 rounded-full transition-all ${index === activeIndex ? "gallery-dot-active w-5" : "gallery-dot-inactive"}`}
                aria-label={locale === "th" ? `ไปยังสื่อที่ ${index + 1}` : `Go to media ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>

      {variant === "modal" && (
        <div className="mt-4 flex gap-1" role="group" aria-label={locale === "th" ? "เลือกสื่อ" : "Select media"}>
          {media.map((item, index) => (
            <button
              key={`${item.type}-${item.source}`}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-1.5 min-w-1 flex-1 rounded-full transition-colors ${index === activeIndex ? "gallery-progress-active" : "gallery-progress-inactive"}`}
              aria-label={locale === "th" ? `ไปยังสื่อที่ ${index + 1}` : `Go to media ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
