import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import OwlDefs from "@/components/svg/OwlDefs";
import JsonLd from "@/components/seo/JsonLd";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Corieosity — Be the answer, on Google and in AI",
    template: "%s · Corieosity",
  },
  description: site.description,
  applicationName: "Corieosity",
  keywords: [
    "AI search optimization",
    "answer engine optimization",
    "generative engine optimization",
    "AEO agency",
    "GEO agency",
    "Next.js agency",
    "WebGL agency",
    "US",
  ],
  authors: [{ name: "Corieosity" }],
  openGraph: {
    type: "website",
    siteName: "Corieosity",
    title: "Corieosity — Be the answer, on Google and in AI",
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corieosity — Be the answer",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#060a09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <OwlDefs />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="scene-backdrop" aria-hidden />
        <div className="overlay-grain" aria-hidden />
        <Cursor />
        <Preloader />
        <SmoothScroll>
          <Nav />
          <main id="main" className="page">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
