import CertificateCarousel from "./CertificateCarousel";
import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/certificates";
import type { Locale } from "@/types/portfolio";
import Reveal from "./Reveal";

export default function Certifications({ locale }: { locale: Locale }) {
  return (
    <section id="certifications" className="section-space">
      <div className="container-shell">
        <SectionHeading locale={locale} index="05" title={{ th: "ประกาศนียบัตร", en: "Certificates" }} />
        <Reveal delay={0.06}>
          <CertificateCarousel certificates={certificates} locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
