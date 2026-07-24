import type { Locale } from "@/types/portfolio";

interface SectionHeadingProps {
  locale: Locale;
  index: string;
  title: Record<Locale, string>;
  subtitle?: Record<Locale, string>;
  align?: "left" | "center";
}

export default function SectionHeading({ locale, index, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{index} / {title[locale]}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title[locale]}</h2>
      {subtitle && <p className="muted mt-4 text-base leading-7 sm:text-lg">{subtitle[locale]}</p>}
    </div>
  );
}
