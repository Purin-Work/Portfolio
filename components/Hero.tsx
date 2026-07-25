"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Locale } from "@/types/portfolio";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const icons = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Email: Mail, Phone };

export default function Hero({ locale }: { locale: Locale }) {
  const { profile } = portfolio;
  const transition = { duration: .65, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="pointer-events-none absolute left-[8%] top-[22%] size-64 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[16%] right-[5%] size-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={transition}>
          <p className="mb-2 text-base text-cyan-200 sm:text-lg">{profile.greeting[locale]}</p>
          <h1 className="font-display text-[clamp(3.2rem,10vw,7.7rem)] font-semibold leading-[.88] tracking-[-.065em] text-white">
            {profile.displayName[locale].first}<br />
            <span className="gradient-text">{profile.displayName[locale].last}</span>
          </h1>
          <div className="mt-7 flex items-start gap-3">
            <span className="mt-2 h-6 w-px bg-cyan-300/60" />
            <div>
              <p className="font-display text-lg font-medium text-slate-100 sm:text-xl">{profile.roles[locale][0]}</p>
              <p className="mt-1 text-sm text-slate-500 sm:text-base">{profile.roles[locale].slice(1).join(" • ")}</p>
            </div>
          </div>
          <p className="muted mt-7 max-w-2xl text-sm leading-7 sm:text-base">{profile.introduction[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              {locale === "th" ? "ดูโปรเจกต์ของผม" : "View my projects"}<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/4 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/6">
              {locale === "th" ? "ติดต่อผม" : "Contact me"}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {profile.socials.map((social) => {
              const Icon = icons[social.platform];
              const opensNewTab = social.platform === "GitHub" || social.platform === "LinkedIn";
              return social.href ? (
                <a key={social.platform} href={social.href} target={opensNewTab ? "_blank" : undefined} rel={opensNewTab ? "noreferrer" : undefined} aria-label={social.platform} className="grid size-11 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-200"><Icon size={18} /></a>
              ) : (
                <span key={social.platform} title={social.label} aria-label={`${social.platform}: ${social.label}`} className="grid size-11 cursor-help place-items-center rounded-xl border border-dashed border-white/10 text-slate-600"><Icon size={18} /></span>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ ...transition, delay: .15 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/15 to-purple-500/15 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#0a1120]">
              <Image src={profile.profileImage} alt={`Profile photo of ${profile.name}`} fill priority sizes="(max-width: 1024px) 90vw, 420px" className="scale-[1.15] object-cover object-[58%_44%]" />
            </div>
          </div>
          
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.25em] text-slate-600 md:flex"><span>{locale === "th" ? "เลื่อนลง" : "Scroll"}</span><ArrowDown size={14} /></a>
    </section>
  );
}
