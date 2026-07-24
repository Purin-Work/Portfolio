import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const icons = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Email: Mail, Phone };

export default function Contact({ locale }: { locale: Locale }) {
  return (
    <section id="contact" className="section-space">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          index="07"
          title={{ th: "ช่องทางติดต่อ", en: "Contact" }}
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {portfolio.profile.socials.map((social, index) => {
            const Icon = icons[social.platform];
            const platformLabel = social.platform === "Phone"
              ? (locale === "th" ? "โทรศัพท์" : "Phone")
              : social.platform;
            const opensNewTab = social.platform === "GitHub" || social.platform === "LinkedIn";
            const content = (
              <>
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/12 to-purple-400/12 text-cyan-200">
                  <Icon size={21} />
                </span>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{platformLabel}</h3>
                    <p className="mt-1 break-words text-sm leading-6 text-slate-500">{social.label}</p>
                  </div>
                  {social.href && <ArrowUpRight size={18} className="shrink-0 text-slate-500" />}
                </div>
              </>
            );

            return (
              <Reveal key={social.platform} delay={index * 0.05} className="h-full">
                {social.href ? (
                  <a
                    href={social.href}
                    target={opensNewTab ? "_blank" : undefined}
                    rel={opensNewTab ? "noreferrer" : undefined}
                    className="glass card-hover block h-full min-h-48 rounded-3xl p-6"
                    aria-label={`${platformLabel}: ${social.label}`}
                  >
                    {content}
                  </a>
                ) : (
                  <article className="glass h-full min-h-48 rounded-3xl border-dashed p-6">{content}</article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
