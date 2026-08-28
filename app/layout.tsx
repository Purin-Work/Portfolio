import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai, Space_Grotesk } from "next/font/google";
import { portfolio, siteUrl } from "@/data/portfolio";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const sans = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolio.profile.name} — Computer Science Portfolio`,
  description: portfolio.profile.introduction.en,
  keywords: ["Purin Amang", "Computer Science", "Software Developer", "Portfolio", "Full-Stack", "AI"],
  authors: [{ name: portfolio.profile.name }],
  openGraph: {
    title: `${portfolio.profile.name} — Developer Portfolio`,
    description: portfolio.profile.introduction.en,
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: `${portfolio.profile.name} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.profile.name} — Developer Portfolio`,
    description: portfolio.profile.introduction.en,
    images: ["/opengraph-image.svg"],
  },
  icons: {
    icon: "/images/logo-v4.png",
    apple: "/images/logo-v4.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      document.documentElement.dataset.theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <ScrollProgress />
        <CursorGlow />
      </body>
    </html>
  );
}
