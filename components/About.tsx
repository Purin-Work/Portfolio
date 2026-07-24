import { CalendarDays, GraduationCap, UserRound } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About({ locale }: { locale: Locale }) {
  const { profile } = portfolio;

  return (
    <section id="about" className="about-section-space border-t border-white/5">
      <div className="container-shell">
        <SectionHeading locale={locale} index="01" title={{ th: "เกี่ยวกับผม", en: "About me" }} subtitle={{ th: "เรื่องราว แนวคิด และเส้นทางการพัฒนาตัวเองของผม", en: "My story, mindset, and journey of personal growth." }} />
        <div>
          <Reveal>
            <div className="max-w-5xl space-y-5">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph.en}
                  className={locale === "en" ? "text-xs leading-6 text-slate-300 sm:text-sm" : "text-sm leading-7 text-slate-300 sm:text-base"}
                >
                  {paragraph[locale]}
                </p>
              ))}
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-purple-300/8 text-purple-200">
                    <UserRound size={19} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {locale === "th" ? "โปรไฟล์" : "Profile"}
                  </h3>
                </div>

                <dl className="mt-8 divide-y divide-white/8 border-y border-white/8">
                  {profile.personalDetails.map((detail) => (
                    <div key={detail.label.en} className="grid grid-cols-[7rem_1fr] gap-3 py-4 sm:grid-cols-[8rem_1fr] lg:grid-cols-[7rem_1fr]">
                      <dt className="text-sm text-slate-500">{detail.label[locale]}</dt>
                      <dd className="text-sm leading-6 text-slate-200 sm:text-base">{detail.value[locale]}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-cyan-300/8 text-cyan-200">
                    <GraduationCap size={19} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {locale === "th" ? "การศึกษา" : "Education"}
                  </h3>
                </div>

                <div className="relative mt-8 space-y-10 border-l border-cyan-300/20 pl-7 sm:pl-10">
                  {profile.educationHistory.map((item) => (
                    <article key={item.institution.en} className="relative">
                      <span className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full border-2 border-cyan-200 bg-[#070b14] sm:-left-[2.85rem]" />
                      <div className="flex flex-col gap-2 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
                        <h4 className="font-display text-lg font-semibold leading-7 text-white sm:text-xl">
                          {item.institution[locale]}
                        </h4>
                        <span className="flex shrink-0 items-center gap-2 text-sm text-cyan-200">
                          <CalendarDays size={15} />
                          {item.period[locale]}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {item.details[locale].map((detail) => (
                          <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-400 sm:text-base">
                            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-purple-300" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
