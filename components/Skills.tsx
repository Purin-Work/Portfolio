import { Braces, Code2, Database, Layers3, Wrench } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Locale, SkillLevel } from "@/types/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Code2, Layers3, Database, Wrench, Braces];
const levelLabel: Record<SkillLevel, Record<Locale, string>> = {
  Basic: { th: "พื้นฐาน", en: "Basic" },
  Familiar: { th: "คุ้นเคย", en: "Familiar" },
  "Basic / Familiar": { th: "พื้นฐาน / คุ้นเคย", en: "Basic / Familiar" },
  Intermediate: { th: "ระดับกลาง", en: "Intermediate" },
  Advanced: { th: "ระดับสูง", en: "Advanced" },
};

export default function Skills({ locale }: { locale: Locale }) {
  return (
    <section id="skills" className="skills-section-space">
      <div className="container-shell">
        <SectionHeading locale={locale} index="03" title={{ th: "ทักษะ", en: "Skills" }} />
        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={group.title.en} delay={index * .04} className="h-full">
                <article className="glass card-hover h-full min-h-44 rounded-3xl p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/12 to-purple-400/12 text-cyan-200"><Icon size={19} /></span><h3 className="font-display text-base font-semibold text-white">{group.title[locale]}</h3></div>
                  <ul className="flex flex-wrap items-start gap-2">
                    {group.skills.map((skill) => <li key={skill.name} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/8 bg-white/[.035] px-3 py-2"><span className="whitespace-nowrap text-xs font-medium text-slate-300 sm:text-sm">{skill.name}</span><span className="shrink-0 rounded-md bg-cyan-300/8 px-2 py-1 text-[9px] text-cyan-100/70">{levelLabel[skill.level][locale]}</span></li>)}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
