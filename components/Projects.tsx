"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolio, projectCategories } from "@/data/portfolio";
import type { Locale, Project, ProjectCategory } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Filter = "All" | ProjectCategory;

export default function Projects({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduce = useReducedMotion();
  const filtered = useMemo(
    () => portfolio.projects
      .filter((item) => filter === "All" || item.category === filter)
      .sort((first, second) => second.year - first.year),
    [filter],
  );

  return (
    <section id="projects" className="projects-section-space bg-white/[.018]">
      <div className="container-shell">
        <SectionHeading locale={locale} index="02" title={{ th: "ผลงาน", en: "Selected projects" }} />
        <Reveal delay={0.04}>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-3" role="group" aria-label={locale === "th" ? "กรองประเภทโปรเจกต์" : "Filter projects"}>
            {projectCategories.map((category) => (
              <button key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category} className={`min-h-11 shrink-0 rounded-full border px-4 text-xs font-medium transition ${filter === category ? "border-cyan-300/40 bg-cyan-300/12 text-cyan-100" : "border-white/10 bg-white/3 text-slate-400 hover:border-white/20 hover:text-white"}`}>
                {category === "All" ? (locale === "th" ? "ทั้งหมด" : "All") : category}
              </button>
            ))}
          </div>
        </Reveal>
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={reduce ? undefined : { opacity: 0, scale: .96 }}
                transition={{ duration: .5, delay: reduce ? 0 : Math.min(index * .05, .2), ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} locale={locale} onSelect={() => setSelected(project)} pauseMedia={Boolean(selected)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>{selected && <ProjectModal project={selected} locale={locale} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
