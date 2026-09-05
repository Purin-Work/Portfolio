import {
  Code2,
  Database,
  PanelsTopLeft,
  ServerCog,
  Wrench,
} from "lucide-react";
import type { IconType } from "react-icons";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { portfolio } from "@/data/portfolio";
import type { Locale, SkillLevel } from "@/types/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groupIcons = [Code2, ServerCog, PanelsTopLeft, Database, Wrench];
const skillLogos: Record<string, { icon: IconType; color: string; secondaryIcon?: IconType; secondaryColor?: string }> = {
  "C#": { icon: SiSharp, color: "#9b4f96" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  Python: { icon: SiPython, color: "#3776ab" },
  SQL: { icon: TbSql, color: "#38bdf8" },
  NestJS: { icon: SiNestjs, color: "#e0234e" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "RESTful APIs": { icon: SiOpenapiinitiative, color: "#6ba539" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#d946ef" },
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#663399" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  "SQL Server": { icon: DiMsqlServer, color: "#cc2927" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  "Git & GitHub": { icon: SiGit, color: "#f05032", secondaryIcon: SiGithub, secondaryColor: "currentColor" },
  "Visual Studio": { icon: DiVisualstudio, color: "#a855f7" },
  "VS Code": { icon: VscVscode, color: "#23a8f2" },
  Figma: { icon: SiFigma, color: "#f24e1e" },
};
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
            const Icon = groupIcons[index] ?? Code2;
            return (
              <Reveal key={group.title.en} delay={index * .04} className="h-full">
                <article className="glass card-hover h-full min-h-44 rounded-3xl p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/12 to-purple-400/12 text-cyan-200"><Icon size={19} /></span><h3 className="font-display text-base font-semibold text-white">{group.title[locale]}</h3></div>
                  <ul className="flex flex-wrap items-start gap-2.5">
                    {group.skills.map((skill) => {
                      const skillLogo = skillLogos[skill.name];
                      const SkillLogo = skillLogo?.icon;
                      const SecondarySkillLogo = skillLogo?.secondaryIcon;
                      return (
                        <li key={skill.name} className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-white/8 bg-white/[.035] py-1.5 pl-1.5 pr-3">
                          <span
                            className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-300/12 to-purple-400/12 text-slate-100"
                            aria-hidden="true"
                          >
                            {SkillLogo ? (
                              <span className="flex items-center justify-center gap-0.5">
                                <SkillLogo size={SecondarySkillLogo ? 14 : 17} style={{ color: skillLogo.color }} />
                                {SecondarySkillLogo && <SecondarySkillLogo size={14} style={{ color: skillLogo.secondaryColor }} />}
                              </span>
                            ) : <Code2 size={15} strokeWidth={1.8} />}
                          </span>
                          <span className="whitespace-nowrap text-xs font-medium text-slate-300 sm:text-sm">{skill.name}</span>
                          <span className="shrink-0 rounded-md bg-cyan-300/8 px-2 py-1 text-[9px] text-cyan-100/70">{levelLabel[skill.level][locale]}</span>
                        </li>
                      );
                    })}
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
