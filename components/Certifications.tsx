import CertificateCarousel from "./CertificateCarousel";
import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/certificates";
import type { Locale } from "@/types/portfolio";

export default function Certifications({ locale }: { locale: Locale }) {
  return (
    <section id="certifications" className="section-space">
      <div className="container-shell">
        <SectionHeading locale={locale} index="05" title={{ th: "ประกาศนียบัตร", en: "Certificates" }} />
        <CertificateCarousel certificates={certificates} locale={locale} />
      </div>
    </section>
  );
}
