"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { CertificateItem } from "@/data/certificates";
import type { Locale } from "@/types/portfolio";

interface CertificateCarouselProps {
  certificates: CertificateItem[];
  locale: Locale;
}

const PAGE_SIZE = 3;

const pageVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

export default function CertificateCarousel({ certificates, locale }: CertificateCarouselProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCertificate, setExpandedCertificate] = useState<CertificateItem | null>(null);
  const animationLock = useRef(false);
  const animationTimer = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const pageCount = Math.ceil(certificates.length / PAGE_SIZE);
  const visibleCertificates = certificates.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const unlockAnimation = () => {
    if (animationTimer.current !== null) {
      window.clearTimeout(animationTimer.current);
      animationTimer.current = null;
    }
    animationLock.current = false;
    setIsAnimating(false);
  };

  const lockAnimation = () => {
    animationLock.current = true;
    setIsAnimating(true);
    if (animationTimer.current !== null) window.clearTimeout(animationTimer.current);
    animationTimer.current = window.setTimeout(unlockAnimation, reduceMotion ? 75 : 550);
  };

  const move = (nextDirection: 1 | -1) => {
    if (pageCount < 2 || animationLock.current) return;
    lockAnimation();
    setDirection(nextDirection);
    setPage((current) => (current + nextDirection + pageCount) % pageCount);
  };

  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

  useEffect(() => () => {
    if (animationTimer.current !== null) window.clearTimeout(animationTimer.current);
  }, []);

  useEffect(() => {
    if (!expandedCertificate) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedCertificate(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expandedCertificate]);

  if (certificates.length === 0) return null;

  return (
    <>
      <div
        className="overflow-x-clip"
        role="region"
        aria-roledescription="carousel"
        aria-label={locale === "th" ? "รายการประกาศนียบัตร" : "Certificates"}
        tabIndex={0}
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
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={pageVariants}
            initial={reduceMotion ? false : "enter"}
            animate="active"
            exit={reduceMotion ? { opacity: 0 } : "exit"}
            transition={transition}
            onAnimationComplete={(definition) => {
              if (definition !== "active") return;
              unlockAnimation();
            }}
            className="flex flex-wrap justify-center gap-5"
          >
            {visibleCertificates.map((certificate) => (
              <article
                key={certificate.id}
                className="glass w-full overflow-hidden rounded-3xl sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedCertificate(certificate)}
                  className="group/image relative block aspect-[4/3] w-full overflow-hidden border-b border-white/8 bg-[#060b14]"
                  aria-label={locale === "th" ? `ขยายรูป ${certificate.title}` : `Enlarge ${certificate.title}`}
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="eager"
                    className="object-contain transition duration-300 group-hover/image:scale-[1.015]"
                  />
                  <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/15 bg-[#080d18]/80 text-white backdrop-blur-md transition group-hover/image:bg-[#101a2b]">
                    <Maximize2 size={15} aria-hidden="true" />
                  </span>
                </button>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold leading-6 text-white">
                    {certificate.title}
                  </h3>
                  <time dateTime={String(certificate.year)} className="mt-2 block font-mono text-xs text-slate-500">
                    {certificate.year}
                  </time>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={isAnimating}
              className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[.03] text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-200 disabled:cursor-wait disabled:opacity-40"
              aria-label={locale === "th" ? "ดูประกาศนียบัตรชุดก่อนหน้า" : "View previous certificates"}
            >
              <ChevronLeft size={19} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" aria-label={locale === "th" ? "หน้าปัจจุบัน" : "Current page"}>
              {Array.from({ length: pageCount }, (_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === page ? "w-6 bg-cyan-200" : "w-2 bg-white/20"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => move(1)}
              disabled={isAnimating}
              className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[.03] text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-200 disabled:cursor-wait disabled:opacity-40"
              aria-label={locale === "th" ? "ดูประกาศนียบัตรชุดถัดไป" : "View next certificates"}
            >
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {expandedCertificate && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0.01 } : { duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={locale === "th" ? `ภาพขยาย ${expandedCertificate.title}` : `Enlarged ${expandedCertificate.title}`}
            onClick={() => setExpandedCertificate(null)}
          >
            <motion.div
              className="relative h-[88vh] w-[96vw] max-w-[1500px]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={reduceMotion ? { duration: 0.01 } : { duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={expandedCertificate.image}
                alt={expandedCertificate.title}
                fill
                sizes="96vw"
                className="object-contain"
                priority
              />
              <button
                type="button"
                autoFocus
                onClick={() => setExpandedCertificate(null)}
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
