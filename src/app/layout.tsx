import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PopupForm from "@/components/ui/popup-form";
import LocalBusinessSchema from "@/components/ui/local-business-schema";
import { SITE_URL } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Calgary Roofing & Hail Damage Repair | Four Brothers Exteriors",
    template: "%s | Four Brothers Exteriors",
  },
  description:
    "Calgary's trusted roofing experts — hail damage repair, roof installation, repair & siding. Honest pricing, licensed & insured. Call (587) 891-9200.",
  keywords: [
    "hail damage repair Calgary",
    "hail damage roof repair Calgary",
    "roofing Calgary",
    "roof repair Calgary",
    "roof installation Calgary",
    "siding Calgary",
    "exterior contractor Calgary",
    "emergency roof repair Calgary",
    "Calgary roofing company",
    "Four Brothers Exteriors",
  ],
  authors: [{ name: "Four Brothers Exteriors" }],
  creator: "Four Brothers Exteriors",
  publisher: "Four Brothers Exteriors",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Four Brothers Exteriors",
    title: "Calgary Roofing & Hail Damage Repair | Four Brothers Exteriors",
    description:
      "Calgary's trusted roofing experts — hail damage repair, honest pricing, quality workmanship, and reliable service. Call (587) 891-9200.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Four Brothers Exteriors — Calgary Roofing & Hail Damage Repair Experts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Roofing & Hail Damage Repair | Four Brothers Exteriors",
    description: "Hail damage repair, roof repairs & siding for Calgary homes and businesses. Call (587) 891-9200.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.className} ${oswald.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "#0a0a0a" }}>
        <Navbar />
        <main className="flex-1 pt-32 md:pt-20">{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  );
}
