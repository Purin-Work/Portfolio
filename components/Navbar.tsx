"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { Locale } from "@/types/portfolio";

const navigation = [
  { id: "home", th: "หน้าแรก", en: "Home" },
  { id: "about", th: "เกี่ยวกับ", en: "About" },
  { id: "projects", th: "ผลงาน", en: "Projects" },
  { id: "skills", th: "ทักษะ", en: "Skills" },
  { id: "activities", th: "กิจกรรม", en: "Activities" },
  { id: "certifications", th: "ประกาศนียบัตร", en: "Certificates" },
  { id: "experience", th: "ประสบการณ์", en: "Experience" },
  { id: "contact", th: "ติดต่อ", en: "Contact" },
] as const;

export default function Navbar({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const themeTimerRef = useRef<number | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -58% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => () => {
    if (themeTimerRef.current !== null) window.clearTimeout(themeTimerRef.current);
  }, []);

  const go = () => setOpen(false);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    const applyTheme = () => {
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("portfolio-theme", nextTheme);
    };

    if (reduce) {
      applyTheme();
      return;
    }

    const root = document.documentElement;
    root.classList.add("theme-changing");
    window.requestAnimationFrame(() => {
      applyTheme();
      if (themeTimerRef.current !== null) window.clearTimeout(themeTimerRef.current);
      themeTimerRef.current = window.setTimeout(() => {
        root.classList.remove("theme-changing");
        themeTimerRef.current = null;
      }, 300);
    });
  };

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
      <nav className="container-shell flex h-[4.75rem] items-center justify-between" aria-label={locale === "th" ? "เมนูหลัก" : "Main navigation"}>
        <a href="#home" onClick={go} className="flex items-center gap-3" aria-label={locale === "th" ? "กลับหน้าแรก" : "Back to home"}>
          <span className="relative size-10 overflow-hidden rounded-xl border border-cyan-300/25 bg-[#102533] shadow-[0_0_22px_rgba(62,231,255,.12)]">
            <Image
              src="/images/logo-v4.png"
              alt="Purin logo"
              fill
              priority
              sizes="40px"
              className="object-cover object-[52%_50%]"
            />
          </span>
          <span className="font-sans text-base font-semibold tracking-wide text-white">
            Purin
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "page" : undefined} className={`relative rounded-lg px-2.5 py-2 text-xs transition-colors xl:px-3 ${active === item.id ? "text-white" : "text-slate-400 hover:text-white"}`}>
              {item[locale]}
              {active === item.id && <motion.span layoutId="nav-active" className="absolute inset-x-2 -bottom-[1.1rem] h-px bg-gradient-to-r from-cyan-300 to-purple-400" />}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle grid size-11 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label={locale === "th" ? "สลับโหมดสว่างและโหมดมืด" : "Toggle light and dark mode"}
            title={locale === "th" ? "สลับธีม" : "Toggle theme"}
          >
            <Sun className="theme-icon-light" size={19} aria-hidden="true" />
            <Moon className="theme-icon-dark" size={19} aria-hidden="true" />
          </button>
          <div className="flex rounded-xl border border-white/10 bg-white/4 p-1" aria-label={locale === "th" ? "เลือกภาษา" : "Select language"}>
            {(["th", "en"] as Locale[]).map((item) => (
              <button key={item} type="button" onClick={() => onLocaleChange(item)} aria-pressed={locale === item} className={`min-h-9 rounded-lg px-2.5 text-xs font-bold uppercase transition ${locale === item ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"}`}>{item}</button>
            ))}
          </div>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-white/10 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -12 }} className="mobile-menu-panel border-t border-white/8 bg-[#070b14]/98 px-4 py-5 lg:hidden">
            <div className="container-shell grid gap-1">
              {navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={go} className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-sm ${active === item.id ? "bg-cyan-300/10 text-cyan-200" : "text-slate-300"}`}>
                  {item[locale]}<span className="font-mono text-xs text-slate-600">0{navigation.indexOf(item) + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
