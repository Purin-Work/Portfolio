"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CodeXml, ExternalLink, X } from "lucide-react";
import type { Locale, Project } from "@/types/portfolio";
import ProjectGallery from "./ProjectGallery";
import ProjectVideo from "./ProjectVideo";
import { FigmaIcon } from "./SocialIcons";

export default function ProjectModal({ project, locale, onClose }: { project: Project; locale: Locale; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    document.body.classList.add("project-modal-open");
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const modal = closeRef.current?.closest("[role=dialog]");
        const focusable = modal?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("project-modal-open");
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-3 sm:p-6" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="project-title" initial={reduce ? false : { opacity: 0, y: 30, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduce ? undefined : { opacity: 0, y: 20 }} className="glass max-h-[92vh] w-full max-w-4xl overscroll-contain overflow-y-auto rounded-3xl">
        <div className="modal-header sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0a101c]/95 px-5 py-4 sm:px-7">
          <div><p className="eyebrow">{project.category}</p><h2 id="project-title" className="font-display mt-1 text-xl font-semibold text-white sm:text-2xl">{project.title}</h2></div>
          <button ref={closeRef} type="button" onClick={onClose} className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white" aria-label={locale === "th" ? "ปิดรายละเอียด" : "Close details"}><X size={20} /></button>
        </div>
        <div className="p-5 sm:p-7">
          {project.images?.length ? (
            <ProjectGallery images={project.images} video={project.video} poster={project.image} title={project.title} locale={locale} />
          ) : project.video ? (
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <ProjectVideo source={project.video} poster={project.image} title={project.title} />
            </div>
          ) : (
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-white/10 bg-[#08101e]"><Image src={project.image} alt={`${project.title} detailed project preview`} fill sizes="(max-width: 900px) 95vw, 850px" className="object-cover" /></div>
          )}
          <p className="mt-6 whitespace-pre-line text-base leading-7 text-slate-300">{project.description[locale]}</p>
          {project.role && (
            <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[.045] px-4 py-4 sm:px-5">
              <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-cyan-200">
                {locale === "th" ? "หน้าที่รับผิดชอบ" : "Role"}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-200 sm:text-base">
                {project.role[locale]}
              </p>
            </div>
          )}
          {project.highlights?.[locale]?.length ? (
            <ul className="mt-6 space-y-3">
              {project.highlights[locale].map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-400 sm:text-base">
                  <span className="mt-2.5 shrink-0 text-cyan-300">▸</span>
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-white/10 bg-white/4 px-3 py-1.5 font-mono text-xs text-slate-300">{technology}</span>)}</div>
          {(project.github || project.figma || project.demo) && <div className="mt-8 flex flex-wrap gap-3">{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950"><CodeXml size={17} />GitHub</a>}{project.figma && <a href={project.figma} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-purple-300/25 bg-purple-300/8 px-4 text-sm font-semibold text-purple-100"><FigmaIcon size={17} />Figma</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white"><ExternalLink size={17} />Website Demo</a>}</div>}
        </div>
      </motion.div>
    </motion.div>
  );
}
