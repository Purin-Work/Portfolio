"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Activities from "./Activities";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import type { Locale } from "@/types/portfolio";

export default function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("th");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <a href="#main-content" className="skip-link">{locale === "th" ? "ข้ามไปยังเนื้อหา" : "Skip to content"}</a>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <main id="main-content">
        <Hero locale={locale} />
        <About locale={locale} />
        <Projects locale={locale} />
        <Skills locale={locale} />
        <Activities locale={locale} />
        <Certifications locale={locale} />
        <Experience locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
