import ExperienceCarousel from "./ExperienceCarousel";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experiences";
import type { Locale } from "@/types/portfolio";

export default function Experience({ locale }: { locale: Locale }) {
  return (
    <section id="experience" className="experience-section-space overflow-x-clip bg-white/[.018]">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          index="06"
          title={{ th: "ประสบการณ์การทำงาน", en: "Work Experience" }}
        />
        <ExperienceCarousel items={experiences} locale={locale} />
      </div>
    </section>
  );
}
