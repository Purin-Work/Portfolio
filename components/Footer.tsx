import { ArrowUp, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const icons = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Email: Mail, Phone };

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-display font-semibold text-white">{portfolio.profile.displayName[locale].first} {portfolio.profile.displayName[locale].last}</p><p className="mt-1 text-xs text-slate-600">© {new Date().getFullYear()} · Designed and Developed by Purin Amang</p></div>
        <div className="flex items-center gap-2">
          {portfolio.profile.socials.map((social) => { const Icon = icons[social.platform]; return social.href ? <a key={social.platform} href={social.href} aria-label={social.platform} className="grid size-10 place-items-center rounded-xl border border-white/8 text-slate-500 hover:text-cyan-200"><Icon size={16} /></a> : null; })}
          <a href="#home" className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-3 text-xs text-slate-400 transition hover:border-cyan-300/30 hover:text-cyan-200">{locale === "th" ? "กลับด้านบน" : "Back to top"}<ArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
