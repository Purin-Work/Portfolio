import Image from "next/image";
import { CalendarDays, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import ProjectGallery from "./ProjectGallery";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Activities({ locale }: { locale: Locale }) {
  return (
    <section id="activities" className="activities-section-space bg-white/[.018]">
      <div className="container-shell">
        <SectionHeading locale={locale} index="04" title={{ th: "กิจกรรมและการมีส่วนร่วม", en: "Activities & contributions" }} />
        <div className="relative max-w-5xl before:absolute before:bottom-6 before:left-[1.2rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-cyan-300/40 before:to-purple-400/10 sm:before:left-[1.45rem]">
          {portfolio.activities.map((activity, index) => (
            <Reveal key={`${activity.title.en}-${index}`} className="relative pl-14 sm:pl-20">
              <span className="absolute left-2.5 top-6 z-10 grid size-6 place-items-center rounded-full border border-cyan-300/30 bg-[#0b1320] sm:left-[.7rem]"><span className="size-2 rounded-full bg-cyan-300" /></span>
              <article className="glass rounded-3xl p-5 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>{activity.role && <div className="mb-2 flex items-center gap-2 text-xs text-cyan-200"><Sparkles size={14} />{activity.role[locale]}</div>}<h3 className="font-display text-xl font-semibold text-white">{activity.title[locale]}</h3></div>
                  {activity.date && <span className="flex shrink-0 items-center gap-2 text-xs text-slate-500"><CalendarDays size={14} />{activity.date[locale]}</span>}
                </div>
                {activity.images?.length ? (
                  <div className="mt-6">
                    <ProjectGallery images={activity.images} title={activity.title[locale]} locale={locale} />
                  </div>
                ) : activity.image ? (
                  <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-2xl border border-white/10"><Image src={activity.image} alt={`${activity.title[locale]} activity`} fill sizes="(max-width: 1000px) 90vw, 950px" className="object-contain" /></div>
                ) : null}
                <p className="muted mt-6 whitespace-pre-line text-sm leading-7">{activity.description[locale]}</p>
                {activity.highlights?.[locale]?.length ? (
                  <ul className="mt-5 space-y-3">
                    {activity.highlights[locale].map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-400">
                        <span className="mt-2.5 shrink-0 text-cyan-300">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {activity.skills.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{activity.skills.map((skill) => <span key={skill} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-400">{skill}</span>)}</div>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
