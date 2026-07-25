"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, type PanInfo, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ExperienceItem } from "@/data/experiences";
import type { Locale } from "@/types/portfolio";

interface ExperienceCarouselProps {
  items: ExperienceItem[];
  locale: Locale;
}

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "14%" : "-14%",
    opacity: 0,
    scale: 0.96,
  }),
  active: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-14%" : "14%",
    opacity: 0,
    scale: 0.96,
  }),
};

function ExperienceCard({
  item,
  locale,
  onImageClick,
}: {
  item: ExperienceItem;
  locale: Locale;
  onImageClick: () => void;
}) {
  const title = locale === "th" ? item.title : item.titleEn;
  const description = locale === "th" ? item.description : item.descriptionEn;

  return (
    <article className="glass overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/25">
      <button
        type="button"
        onClick={onImageClick}
        className="group/image relative block aspect-video w-full overflow-hidden border-b border-white/8 bg-[#060b14]"
        aria-label={locale === "th" ? `ขยายรูปภาพ ${title}` : `Enlarge image for ${title}`}
      >
        <Image
          src={item.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          loading="eager"
          className="object-cover transition duration-500 group-hover/image:scale-[1.015]"
          draggable={false}
        />
        <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-[#080d18]/80 text-white backdrop-blur-md transition group-hover/image:bg-[#101a2b]">
          <Maximize2 size={17} aria-hidden="true" />
        </span>
      </button>

      <div className="p-6 sm:p-8 lg:p-9">
        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
        <div className="mt-5 space-y-4">
          {description.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
        {item.skills && item.skills.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span key={skill} className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExperienceCarousel({ items, locale }: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedItem, setExpandedItem] = useState<ExperienceItem | null>(null);
  const animationLock = useRef(false);
  const reduceMotion = useReducedMotion();

  const unlockAnimation = () => {
    animationLock.current = false;
    setIsAnimating(false);
  };

  const move = (nextDirection: 1 | -1) => {
    if (items.length < 2 || animationLock.current) return;
    animationLock.current = true;
    setIsAnimating(true);
    setDirection(nextDirection);
    setCurrentIndex((index) => (index + nextDirection + items.length) % items.length);
  };

  const goTo = (index: number) => {
    if (index === currentIndex || animationLock.current) return;
    const forwardDistance = (index - currentIndex + items.length) % items.length;
    const backwardDistance = (currentIndex - index + items.length) % items.length;
    animationLock.current = true;
    setIsAnimating(true);
    setDirection(forwardDistance <= backwardDistance ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!expandedItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedItem(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expandedItem]);

  if (items.length === 0) return null;

  const activeItem = items[currentIndex];
  const backLayerCount = Math.min(2, items.length - 1);
  const backLayers = Array.from({ length: backLayerCount }, (_, index) => index + 1).reverse();
  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <div className="relative mx-auto w-full max-w-6xl overflow-x-clip px-1 pb-1 sm:px-14">
        <div
          className="relative mx-auto max-w-5xl pb-7"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={locale === "th" ? "ประสบการณ์การทำงาน" : "Work experience"}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
          }}
        >
          {backLayers.map((depth) => (
            <motion.div
              key={`${currentIndex}-${depth}`}
              aria-hidden="true"
              className="glass pointer-events-none absolute inset-x-0 bottom-7 top-0 rounded-[1.75rem]"
              initial={reduceMotion ? false : {
                y: (depth + 1) * 12,
                scale: 1 - (depth + 1) * 0.04,
                opacity: depth === 1 ? 0.3 : 0,
              }}
              animate={{
                y: depth * 12,
                scale: 1 - depth * 0.04,
                opacity: depth === 1 ? 0.6 : 0.3,
              }}
              transition={transition}
              style={{ zIndex: 20 - depth, transformOrigin: "top center" }}
            />
          ))}

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeItem.id}
              custom={direction}
              variants={cardVariants}
              initial={reduceMotion ? false : "enter"}
              animate="active"
              exit={reduceMotion ? { opacity: 0 } : "exit"}
              transition={transition}
              onAnimationComplete={(definition) => {
                if (definition === "active") unlockAnimation();
              }}
              drag={items.length > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={reduceMotion ? 0 : 0.16}
              onDragEnd={(_, info: PanInfo) => {
                const shouldMove = Math.abs(info.offset.x) > 70 || Math.abs(info.velocity.x) > 500;
                if (!shouldMove) return;
                move(info.offset.x < 0 ? 1 : -1);
              }}
              className="relative z-30 touch-pan-y"
            >
              <ExperienceCard item={activeItem} locale={locale} onImageClick={() => setExpandedItem(activeItem)} />
            </motion.div>
          </AnimatePresence>
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={isAnimating}
              className="absolute left-3 top-[min(28vw,18rem)] z-40 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#080d18]/90 text-white shadow-xl backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-[#101a2b] disabled:cursor-wait disabled:opacity-45 sm:left-1 sm:size-12"
              aria-label={locale === "th" ? "ดูประสบการณ์ก่อนหน้า" : "View previous experience"}
            >
              <ChevronLeft size={21} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={isAnimating}
              className="absolute right-3 top-[min(28vw,18rem)] z-40 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#080d18]/90 text-white shadow-xl backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-[#101a2b] disabled:cursor-wait disabled:opacity-45 sm:right-1 sm:size-12"
              aria-label={locale === "th" ? "ดูประสบการณ์ถัดไป" : "View next experience"}
            >
              <ChevronRight size={21} aria-hidden="true" />
            </button>
          </>
        )}

        <div className="mt-3 flex justify-center gap-2" role="group" aria-label={locale === "th" ? "เลือกรายการประสบการณ์" : "Select experience"}>
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-7 bg-cyan-300" : "w-2 bg-white/25 hover:bg-white/50"}`}
              aria-label={locale === "th" ? `ไปยังประสบการณ์ที่ ${index + 1}` : `Go to experience ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedItem && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={locale === "th" ? `ภาพขยาย ${expandedItem.title}` : `Enlarged image for ${expandedItem.titleEn}`}
            onClick={() => setExpandedItem(null)}
          >
            <motion.div
              className="relative h-[86vh] w-[96vw] max-w-[1400px]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={reduceMotion ? { duration: 0.01 } : { duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={expandedItem.image}
                alt={locale === "th" ? expandedItem.title : expandedItem.titleEn}
                fill
                sizes="96vw"
                className="object-contain"
                priority
              />
              <button
                type="button"
                autoFocus
                onClick={() => setExpandedItem(null)}
                className="absolute right-0 top-0 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-[#080d18]/90 text-white shadow-xl transition hover:bg-[#101a2b]"
                aria-label={locale === "th" ? "ปิดภาพขยาย" : "Close enlarged image"}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
