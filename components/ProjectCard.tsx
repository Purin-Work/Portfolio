import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Locale, Project } from "@/types/portfolio";
import ProjectGallery from "./ProjectGallery";
import ProjectVideo from "./ProjectVideo";

export default function ProjectCard({ project, locale, onSelect, pauseMedia = false }: { project: Project; locale: Locale; onSelect: () => void; pauseMedia?: boolean }) {
  const hasGallery = Boolean(project.images?.length);

  return (
    <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
      <div className={`relative overflow-hidden border-b border-white/8 bg-[#0b1321] ${hasGallery ? "" : "aspect-[16/10]"}`}>
        {project.images?.length ? (
          <ProjectGallery images={project.images} video={project.video} poster={project.image} title={project.title} locale={locale} variant="card" pauseVideo={pauseMedia} />
        ) : project.video ? (
          <ProjectVideo source={project.video} poster={project.image} title={project.title} paused={pauseMedia} />
        ) : (
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#080d18]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-100 backdrop-blur-lg">{project.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="muted mt-3 line-clamp-3 text-sm leading-6">{project.description[locale]}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400">{technology}</span>)}
          {project.technologies.length > 4 && <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-500">+{project.technologies.length - 4}</span>}
        </div>
        <button type="button" onClick={onSelect} className="mt-6 flex min-h-11 w-full items-center justify-between border-t border-white/8 pt-4 text-left text-sm font-medium text-slate-200 transition hover:text-cyan-200">
          {locale === "th" ? "ดูรายละเอียด" : "View details"}<ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}
