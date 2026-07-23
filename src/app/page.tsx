"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import QuoteForm from "@/components/ui/quote-form";
import {
  Phone, Mail, Home as HomeIcon, HardHat, PanelsTopLeft, ShieldCheck,
  Camera, MapPin,
} from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL, SECONDARY_PHONE_DISPLAY, SECONDARY_PHONE_TEL, CONTACT_EMAIL } from "@/lib/config";

const services = [
  {
    icon: <HardHat size={28} />,
    title: "Roof Installation",
    desc: "New roof installations for homes and commercial buildings. Durable materials built for Calgary weather.",
    href: "/roof-installation",
  },
  {
    icon: <HomeIcon size={28} />,
    title: "Roof Repair",
    desc: "Fast, reliable repairs for leaks, damage, and wear. Emergency service available.",
    href: "/roof-repair",
  },
  {
    icon: <PanelsTopLeft size={28} />,
    title: "Siding & Exterior",
    desc: "Professional siding and exterior upgrades to protect and improve your home's appearance.",
    href: "/siding-exterior",
  },
];

const reasons = [
  { icon: "🏗️", title: "Experienced Roofing Professionals", desc: "Years of hands-on experience across Calgary, working with established roofing companies before starting our own." },
  { icon: "🧱", title: "High-Quality Materials", desc: "Weather-resistant materials built to hold up against Calgary's snow, hail, and wind." },
  { icon: "💰", title: "Honest & Transparent Pricing", desc: "Clear, upfront quotes — no hidden fees, no surprises." },
  { icon: "😊", title: "Customer Satisfaction First", desc: "Reliable service and clear communication from the first call to the final walkthrough." },
  { icon: "🛡️", title: "Licensed & Insured", desc: "Full professionalism and peace of mind on every job, big or small." },
  { icon: "✅", title: "Workmanship Guarantee", desc: "We stand behind every project we complete." },
];

const team = [
  {
    role: "Co-Founder",
    name: "Name Coming Soon",
    bio: "Brings years of hands-on roofing experience earned working with established Calgary roofing companies before helping start Four Brothers Exteriors. Focused on quality workmanship and doing the job right the first time.",
  },
  {
    role: "Co-Founder",
    name: "Name Coming Soon",
    bio: "Learned the trade from the ground up on real Calgary job sites before co-founding Four Brothers Exteriors. Believes in honest pricing, clear communication, and treating every home like his own.",
  },
];

const serviceAreas = ["NW Calgary", "NE Calgary", "SW Calgary", "SE Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"];

const faqPreview = [
  {
    q: "What should I do if my roof is leaking?",
    a: "Contain the water damage indoors if you can (a bucket, moving belongings), avoid climbing onto the roof yourself, and call us right away. We offer emergency service and can typically get someone out same-day or next-day to inspect the leak, apply a temporary fix if needed, and give you an honest repair quote.",
  },
  {
    q: "How do I know if my gutters need repair or replacement?",
    a: "Warning signs include water pooling near your foundation, gutters pulling away from the fascia, visible sagging, cracking, or rust, and overflow during rain even when they're clear of debris. If your gutters are more than 15–20 years old or damaged in multiple spots, replacement is usually more cost-effective than repeated repairs — we'll give you a straight answer either way.",
  },
  {
    q: "When should I replace my roof?",
    a: "Most asphalt shingle roofs in Calgary last 15–25 years depending on material and weather exposure. Signs it's time to replace include curling or missing shingles, granules collecting in your gutters, daylight visible through the attic boards, or repeated leaks in different spots. If your roof is past its expected lifespan or storm damage is widespread, a full replacement is usually the smarter long-term investment over patch repairs.",
  },
  {
    q: "Do you offer roof maintenance or seasonal inspections?",
    a: "Yes. We recommend a roof inspection at least once a year — ideally in the spring after winter snow load and freeze-thaw cycles, or in the fall before winter hits. Regular inspections catch small issues (loose flashing, worn seals, minor shingle damage) before they turn into leaks or expensive repairs.",
  },
  {
    q: "How much does roof repair or installation cost in Calgary?",
    a: "Costs vary based on roof size, pitch, material, and the extent of damage or work needed. Minor repairs can start in the low hundreds, while full roof replacements are typically a larger investment based on square footage and material choice (asphalt shingle, metal, etc.). We provide a clear, itemized, no-obligation quote before any work begins — no hidden fees.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
  return <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <AnimatedShaderHero
        trustBadge={{ text: "Licensed & Insured · Honest, Upfront Pricing · Workmanship Guarantee", icons: ["🏠"] }}
        headline={{ line1: "Calgary's Trusted Local", line2: "Roofing Experts" }}
        subtitle="Quality Work You Can Rely On — Roofing, Siding & Exterior Services for Calgary Homes and Businesses"
        buttons={{
          primary: { text: "Get a Free Quote", onClick: () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }) },
          secondary: { text: `Call Now: ${PRIMARY_PHONE_DISPLAY}`, onClick: () => { window.location.href = `tel:${PRIMARY_PHONE_TEL}`; } },
        }}
        footnote={<>No answer? Call our other line: <a href={`tel:${SECONDARY_PHONE_TEL}`} className="font-bold text-base" style={{ color: "#D4AF37" }}>{SECONDARY_PHONE_DISPLAY}</a></>}
      />

      {/* SEO: visually hidden h1 and NAP */}
      <div className="sr-only" aria-hidden="false">
        <h1>Four Brothers Exteriors — Calgary Roofing &amp; Exterior Company</h1>
        <p>Calgary&apos;s trusted local roofing and exterior experts, offering roof installation, roof repair, and siding services for homes and businesses across Calgary, AB and surrounding areas including Airdrie, Cochrane, Okotoks, and Chestermere.</p>
        <address>
          <span itemProp="name">Four Brothers Exteriors</span><br />
          <span itemProp="addressLocality">Calgary</span>, <span itemProp="addressRegion">AB</span>, <span itemProp="addressCountry">Canada</span><br />
          Phone: <a href={`tel:+1${PRIMARY_PHONE_TEL}`} itemProp="telephone">{PRIMARY_PHONE_DISPLAY}</a><br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`} itemProp="email">{CONTACT_EMAIL}</a>
        </address>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: "#111", borderTop: "1px solid rgba(16,185,129,0.15)", borderBottom: "1px solid rgba(16,185,129,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6">
          {["✅ Licensed & Insured", "✅ Honest, Upfront Pricing", "✅ Workmanship Guarantee"].map((item) => (
            <span key={item} className="text-sm font-semibold text-gray-300 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Roofing &amp; Exterior <span>Services</span></h2>
            <p className="section-subheading">Built on real hands-on roofing experience — done right, every time.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <div className="rounded-2xl h-full p-8 flex flex-col" style={{ background: "linear-gradient(160deg, #141414, #0a0a0a)", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(155deg, rgba(16,185,129,0.18), rgba(16,185,129,0.04))", border: "2px solid rgba(16,185,129,0.35)", color: "#10B981" }}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="flex items-center gap-4">
                    <Link href={s.href} className="btn-gold inline-block text-center px-6 py-3 text-sm font-black">
                      Get Quote
                    </Link>
                    <Link href={s.href} className="text-sm font-bold hover:underline" style={{ color: "#10B981" }}>
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Why Calgary Homeowners <span>Choose Us</span></h2>
            <p className="section-subheading">Real experience, honest pricing, and results you can trust.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 80}>
                <div className="p-6 rounded-2xl h-full" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.1)" }}>
                  <div className="text-4xl mb-4">{r.icon}</div>
                  <h3 className="text-lg font-black text-white mb-2">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981" }}>
                  About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Built on Experience. <span style={{ color: "#10B981" }}>Focused on Quality.</span>
                </h2>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>
                    Our team brings years of hands-on experience working with established roofing and exterior companies across Calgary.
                    We&apos;ve taken that experience and built our own company with a simple goal — deliver honest service, reliable
                    workmanship, and results homeowners can trust.
                  </p>
                  <p>
                    Whether it&apos;s a small repair or a full exterior project, we take pride in doing the job right the first time.
                    No matter your budget, we work with you to find the right solution for your home.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { number: "2", label: "Brothers Running It" },
                    { number: "100%", label: "Honest Pricing" },
                    { number: "0", label: "Hidden Fees" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.15)" }}>
                      <div className="text-3xl font-black" style={{ color: "#10B981" }}>{stat.number}</div>
                      <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a href={`tel:${PRIMARY_PHONE_TEL}`} className="inline-block mt-8 px-8 py-4 rounded-full font-black text-black text-lg hover:scale-105 transition-transform duration-200"
                  style={{ background: "linear-gradient(135deg, #D4AF37, #9B7A22)" }}>
                  Call Us Now
                </a>
                <p className="text-gray-400 text-sm mt-3">
                  No answer? Call <a href={`tel:${SECONDARY_PHONE_TEL}`} className="font-bold" style={{ color: "#D4AF37" }}>{SECONDARY_PHONE_DISPLAY}</a>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative rounded-2xl overflow-hidden flex items-center justify-center" style={{ minHeight: 420, background: "linear-gradient(155deg, #1a1a1a, #0a0a0a)", border: "2px solid rgba(16,185,129,0.15)" }}>
                <HardHat size={96} style={{ color: "rgba(16,185,129,0.25)" }} />
                <span className="absolute bottom-6 text-gray-500 text-sm">Project photos coming soon</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="section" style={{ background: "#0d0d0d" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Meet the <span>Team</span></h2>
            <p className="section-subheading">The two brothers behind Four Brothers Exteriors.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="rounded-2xl p-8 text-center" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "linear-gradient(155deg, #1a1a1a, #0a0a0a)", border: "2px solid rgba(16,185,129,0.25)" }}>
                    <HardHat size={36} style={{ color: "#10B981" }} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#10B981" }}>{member.role}</div>
                  <h3 className="text-xl font-black text-white mb-3 italic text-gray-400">{member.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Roofing &amp; Exterior <span>FAQs</span></h2>
            <p className="section-subheading">Honest answers to common questions Calgary homeowners ask.</p>
          </FadeIn>
          <FAQAccordion />
          <FadeIn delay={100}>
            <div className="text-center mt-8">
              <Link href="/faq" className="font-bold text-sm" style={{ color: "#10B981" }}>See all FAQs →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY / PROJECTS */}
      <section className="section" id="gallery" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Our <span>Work</span></h2>
            <p className="section-subheading">Real before/after project photos are on their way — check back soon.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(155deg, #161616, #0a0a0a)", border: "1px solid rgba(16,185,129,0.1)" }}>
                  <Camera size={28} style={{ color: "rgba(16,185,129,0.2)" }} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Serving Calgary &amp; <span>Surrounding Areas</span></h2>
            <p className="section-subheading">Proudly serving homeowners and businesses across the region.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-gray-200" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.15)" }}>
                  <MapPin size={16} style={{ color: "#10B981" }} /> {area}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE FORM / CONTACT */}
      <section className="section" id="quote" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Get Your Free <span>Roofing Quote</span></h2>
            <p className="section-subheading">Ready to get started? Fill out the form or call us directly.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact">
            <FadeIn>
              <div className="rounded-2xl p-8" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.1)" }}>
                <QuoteForm />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Phone size={24} style={{ color: "#10B981" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Call Us</span>
                  </div>
                  <a href={`tel:${PRIMARY_PHONE_TEL}`} className="text-3xl font-black text-white hover:text-emerald-400 transition-colors block">{PRIMARY_PHONE_DISPLAY}</a>
                  <p className="text-gray-500 text-xs mt-2 mb-1">No answer? Call our other line:</p>
                  <a href={`tel:${SECONDARY_PHONE_TEL}`} className="text-2xl font-black transition-colors block hover:brightness-110" style={{ color: "#D4AF37" }}>{SECONDARY_PHONE_DISPLAY}</a>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(16,185,129,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Mail size={24} style={{ color: "#10B981" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Email</span>
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-bold text-white hover:text-emerald-400 transition-colors">{CONTACT_EMAIL}</a>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.3)" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck size={20} style={{ color: "#10B981" }} />
                    <span className="font-black text-white">Calgary, AB</span>
                  </div>
                  <p className="text-gray-400 text-sm">Serving Calgary and surrounding areas including Airdrie, Cochrane, Okotoks, and Chestermere.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQAccordion() {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqPreview.map((item, i) => (
        <FadeIn key={item.q} delay={i * 60}>
          <div
            className="rounded-xl overflow-hidden transition-all duration-200"
            style={{ background: "#111", border: open === i ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(255,255,255,0.06)" }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-bold text-white text-sm leading-snug">{item.q}</span>
              <span className="text-xl shrink-0 transition-transform duration-200" style={{ color: "#10B981", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            {open === i && (
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
