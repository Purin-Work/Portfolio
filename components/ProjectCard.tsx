import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Locale, Project } from "@/types/portfolio";
import ProjectGallery from "./ProjectGallery";
import ProjectVideo from "./ProjectVideo";
import { FigmaIcon, GitHubIcon } from "./SocialIcons";

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
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display pt-1 text-xl font-semibold text-white">{project.title}</h3>
          <div className="flex shrink-0 flex-wrap justify-end gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/12 bg-white/4 px-3 text-xs font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/8 hover:text-cyan-100"
                aria-label={`${project.title} GitHub repository`}
              >
                <GitHubIcon size={17} />
                GitHub
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/12 bg-white/4 px-3 text-xs font-semibold text-slate-200 transition hover:border-purple-300/40 hover:bg-purple-300/8 hover:text-purple-100"
                aria-label={`${project.title} Figma design`}
              >
                <FigmaIcon size={17} />
                Figma
              </a>
            )}
          </div>
        </div>
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
