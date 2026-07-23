"use client";
import React, { useEffect, useRef } from "react";
import Gallery, { GalleryPhoto } from "@/components/ui/gallery";
import QuoteForm from "@/components/ui/quote-form";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL, SECONDARY_PHONE_DISPLAY, SECONDARY_PHONE_TEL } from "@/lib/config";

interface ServiceItem {
  title: string;
  desc: string;
  bullets?: string[];
  bg: string;
  alt?: string;
}

interface ServicePageLayoutProps {
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;
  serviceType: "Roof Repair" | "Roof Installation" | "Siding & Exterior";
  services: ServiceItem[];
  galleryPhotos: GalleryPhoto[];
  learnMore?: {
    heading: string;
    paragraphs: string[];
    highlights: string[];
  };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function ServicePageLayout({
  heroHeadline,
  heroSubheadline,
  heroCta,
  serviceType,
  services,
  galleryPhotos,
  learnMore,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 70%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-28">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37" }}>
            🏠 Licensed &amp; Insured &nbsp;·&nbsp; Free Estimates
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ letterSpacing: "0.01em" }}>
            {heroHeadline.split(" ").map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} style={{ color: "#D4AF37" }}> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">{heroSubheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="btn-gold inline-block px-10 py-4 text-lg font-black">{heroCta}</a>
            <a href={`tel:${PRIMARY_PHONE_TEL}`}
              className="inline-block px-10 py-4 rounded-full font-bold text-white text-lg transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
              Call {PRIMARY_PHONE_DISPLAY}
            </a>
          </div>
          <p className="text-gray-300 text-base mt-5">
            No answer? Call our other line: <a href={`tel:${SECONDARY_PHONE_TEL}`} className="font-bold" style={{ color: "#10B981" }}>{SECONDARY_PHONE_DISPLAY}</a>
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {["Honest, Upfront Pricing", "Workmanship Guarantee", "Fast Response"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                <span style={{ color: "#D4AF37" }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">{serviceType} <span>Services</span></h2>
            <p className="section-subheading">Everything you need, done right the first time.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="service-card h-80 group">
                  <div className="service-card-bg absolute inset-0"
                    style={{ background: s.bg, backgroundSize: "cover", backgroundPosition: "center" }}
                    role="img"
                    aria-label={s.alt ?? s.title} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)" }} />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <h3 className="text-xl font-black text-white mb-2">{s.title}</h3>
                    {s.bullets ? (
                      <ul className="mb-4 space-y-1">
                        {s.bullets.map((b) => <li key={b} className="text-gray-300 text-xs font-semibold">{b}</li>)}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{s.desc}</p>
                    )}
                    <a href="#quote" className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: "#D4AF37" }}>
                      Get a Quote <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MINI GALLERY */}
      {galleryPhotos.length > 0 && (
        <section className="section" style={{ background: "#0d0d0d" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="section-heading">Real <span>Work</span></h2>
              <p className="section-subheading">Photos straight from the job site — Calgary homes and businesses.</p>
            </FadeIn>
            <FadeIn delay={100}>
              <Gallery photos={galleryPhotos} columns={3} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* LEARN MORE */}
      {learnMore && (
        <section className="section" style={{ background: "linear-gradient(160deg, #0f2b21 0%, #071711 55%, #050f0c 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <FadeIn className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ letterSpacing: "0.01em" }}>
                  {learnMore.heading}
                </h2>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  {learnMore.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="rounded-2xl p-7 lg:sticky lg:top-28" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#D4AF37" }}>At a Glance</h3>
                  <ul className="space-y-3 mb-6">
                    {learnMore.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: "#D4AF37" }} className="mt-0.5">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <a href="#quote" className="btn-gold block text-center px-6 py-3 text-sm font-black">
                    Get Your Free Quote
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* QUOTE FORM */}
      <section className="section" id="quote" style={{ background: "#0a0a0a" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Get Your Free <span>Quote</span></h2>
            <p className="section-subheading">Tell us about your project — we&apos;ll get back to you with honest pricing.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl p-8" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", boxShadow: "0 0 60px rgba(212,175,55,0.04)" }}>
              <QuoteForm defaultService={serviceType} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
