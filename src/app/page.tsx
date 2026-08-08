"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import QuoteForm from "@/components/ui/quote-form";
import Gallery from "@/components/ui/gallery";
import {
  Phone, Mail, Home as HomeIcon, HardHat, PanelsTopLeft, ShieldCheck,
  MapPin, Handshake, CloudHail, FileSearch, ClipboardCheck,
} from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL, SECONDARY_PHONE_DISPLAY, SECONDARY_PHONE_TEL, CONTACT_EMAIL } from "@/lib/config";

const homeGallery = [
  { src: "/images/gallery/roofing/calgary-roof-installation-aerial-view-sunset-1.webp", alt: "Aerial sunset view of a completed shingle roof installation in Calgary" },
  { src: "/images/gallery/roofing/calgary-roofing-aerial-shingle-inspection-1.webp", alt: "Aerial shingle roof inspection over a Calgary neighborhood" },
  { src: "/images/gallery/roofing/calgary-roof-peak-vent-shingle-installation-1.webp", alt: "New shingle roof peak and vent installation on a Calgary home" },
  { src: "/images/gallery/roofing/calgary-roof-ridge-cap-shingle-installation-1.webp", alt: "Ridge cap shingle installation on a Calgary roof" },
  { src: "/images/gallery/roofing/calgary-roof-pipe-boot-flashing-repair-1.webp", alt: "Pipe boot flashing repair on a Calgary shingle roof" },
  { src: "/images/gallery/roofing/calgary-roofer-shingle-installation-workmanship-1.webp", alt: "Four Brothers Exteriors roofer walking a freshly shingled Calgary roof" },
  { src: "/images/gallery/roofing/calgary-roof-vent-flashing-installation-1.webp", alt: "Roof vent flashing installation on a Calgary shingle roof" },
];

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
  {
    icon: <CloudHail size={28} />,
    title: "Hail Damage Repair",
    desc: "Free hail damage inspection and honest, fast repairs for Calgary roofs after a storm.",
    href: "/hail-damage-repair",
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: "Insurance Claim Help",
    desc: "Thorough damage documentation and honest guidance through the insurance claims process.",
    href: "/insurance-claim-help",
  },
  {
    icon: <FileSearch size={28} />,
    title: "Free Roof Inspection",
    desc: "A full, no-obligation roof check with honest findings — no cost, no pressure.",
    href: "/free-roof-inspection",
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
    name: "Kuzay",
    bio: "Brings years of hands-on roofing experience earned working with established Calgary roofing companies before helping start Four Brothers Exteriors. Focused on quality workmanship and doing the job right the first time.",
  },
  {
    role: "Co-Founder",
    name: "Suhrab",
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
        stormBanner={{ text: `Hail damage? Free roof inspection — call ${PRIMARY_PHONE_DISPLAY}`, tel: PRIMARY_PHONE_TEL }}
        headline={{ line1: "Calgary's Trusted Local", line2: "Roofing Experts" }}
        subtitle="Quality Work You Can Rely On — Roofing, Siding & Exterior Services for Calgary Homes and Businesses"
        buttons={{
          primary: { text: "Get a Free Quote", onClick: () => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }) },
          secondary: { text: `Call Now: ${PRIMARY_PHONE_DISPLAY}`, onClick: () => { window.location.href = `tel:${PRIMARY_PHONE_TEL}`; } },
        }}
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
      <div style={{ background: "#111", borderTop: "1px solid rgba(212,175,55,0.15)", borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
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
                <div className="rounded-2xl h-full p-8 flex flex-col" style={{ background: "linear-gradient(160deg, #141414, #0a0a0a)", border: "1px solid rgba(212,175,55,0.12)" }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(155deg, rgba(212,175,55,0.18), rgba(212,175,55,0.04))", border: "2px solid rgba(212,175,55,0.35)", color: "#D4AF37" }}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="flex items-center gap-4">
                    <Link href={s.href} className="btn-gold inline-block text-center px-6 py-3 text-sm font-black">
                      Get Quote
                    </Link>
                    <Link href={s.href} className="text-sm font-bold hover:underline" style={{ color: "#D4AF37" }}>
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
      <section className="section" style={{ background: "linear-gradient(160deg, #0f2b21 0%, #071711 55%, #050f0c 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Why Calgary Homeowners <span>Choose Us</span></h2>
            <p className="section-subheading">Real experience, honest pricing, and results you can trust.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 80}>
                <div className="p-6 rounded-2xl h-full" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.1)" }}>
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
      <section className="section relative overflow-hidden" id="about">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37" }}>
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Family-Owned. <span style={{ color: "#D4AF37" }}>Built to Last.</span>
            </h2>
            <div className="relative max-w-2xl mx-auto mb-14 text-left">
              <span
                className="absolute select-none pointer-events-none"
                style={{ top: -56, left: -8, fontSize: 120, color: "rgba(212,175,55,0.15)", fontFamily: "Georgia, serif", lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-xl text-gray-200 leading-relaxed relative mb-5">
                Our roofing business was founded as a{" "}
                <span style={{ color: "#D4AF37" }}>family-owned company</span> with a simple
                vision: to provide honest, dependable, and high-quality roofing services while
                building a legacy that can be passed on to future generations. We believe that
                every customer should be treated like a neighbor, and every roof should be
                completed with the same level of care and attention we would give our own home.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed relative">
                The idea for our business came from years of experience in the construction
                industry and a shared passion within our family for skilled craftsmanship and
                hard work. We saw the need for a roofing company that values{" "}
                <span style={{ color: "#D4AF37" }}>integrity, clear communication, and lasting
                relationships</span> just as much as quality workmanship. Rather than focusing
                only on completing projects, we wanted to create a business built on trust,
                accountability, and a strong reputation in our community.
              </p>
              <p className="text-gray-500 text-sm italic mt-6 text-center">— Kuzay &amp; Suhrab, Co-Founders</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: HardHat, text: "Founded on years of hands-on experience in the Calgary construction and roofing industry, and a shared family passion for skilled craftsmanship" },
              { icon: Handshake, text: "Every customer is treated like a neighbor, and every roof gets the same care and attention we'd give our own home" },
              { icon: ShieldCheck, text: "Built on integrity, clear communication, and lasting relationships — not just completed projects" },
            ].map((item, i) => (
              <FadeIn key={item.text} delay={i * 100}>
                <div className="h-full p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                  <div
                    className="flex items-center justify-center rounded-full mx-auto mb-4"
                    style={{ width: 48, height: 48, background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}
                  >
                    <item.icon size={20} style={{ color: "#D4AF37" }} />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
              {[
                { number: "Free", label: "Estimates" },
                { number: "100%", label: "Honest Pricing" },
                { number: "0", label: "Hidden Fees" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <div className="text-3xl font-black" style={{ color: "#D4AF37" }}>{stat.number}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <a href={`tel:${PRIMARY_PHONE_TEL}`} className="inline-block px-8 py-4 rounded-full font-black text-black text-lg hover:scale-105 transition-transform duration-200"
              style={{ background: "linear-gradient(135deg, #D4AF37, #9B7A22)" }}>
              Call Us Now
            </a>
          </FadeIn>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="section" style={{ background: "linear-gradient(160deg, #0f2b21 0%, #071711 55%, #050f0c 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Meet the <span>Team</span></h2>
            <p className="section-subheading">The two brothers behind Four Brothers Exteriors.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="rounded-2xl p-8 text-center" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "linear-gradient(155deg, #1a1a1a, #0a0a0a)", border: "2px solid rgba(212,175,55,0.25)" }}>
                    <HardHat size={36} style={{ color: "#D4AF37" }} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#D4AF37" }}>{member.role}</div>
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
              <Link href="/faq" className="font-bold text-sm" style={{ color: "#D4AF37" }}>See all FAQs →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY / PROJECTS */}
      <section className="section" id="gallery" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="section-heading">Our <span>Work</span></h2>
            <p className="section-subheading">Real jobs, real roofs — Calgary homes we&apos;ve worked on.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <Gallery photos={homeGallery} columns={4} />
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
                <div key={area} className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-gray-200" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <MapPin size={16} style={{ color: "#D4AF37" }} /> {area}
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
              <div className="rounded-2xl p-8" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.1)" }}>
                <QuoteForm />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Phone size={24} style={{ color: "#D4AF37" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Call Us</span>
                  </div>
                  <a href={`tel:${PRIMARY_PHONE_TEL}`} className="text-3xl font-black text-white hover:text-[#E8C766] transition-colors block">{PRIMARY_PHONE_DISPLAY}</a>
                  <p className="text-gray-500 text-sm mt-2">
                    Direct line: <a href={`tel:${SECONDARY_PHONE_TEL}`} className="font-semibold hover:brightness-110 transition-colors" style={{ color: "#10B981" }}>{SECONDARY_PHONE_DISPLAY}</a>
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "#111", border: "1px solid rgba(212,175,55,0.1)" }}>
                  <div className="flex items-center gap-4 mb-2">
                    <Mail size={24} style={{ color: "#D4AF37" }} />
                    <span className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Email</span>
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-bold text-white hover:text-[#E8C766] transition-colors">{CONTACT_EMAIL}</a>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck size={20} style={{ color: "#D4AF37" }} />
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPreview.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <div className="space-y-3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqPreview.map((item, i) => (
        <FadeIn key={item.q} delay={i * 60}>
          <div
            className="rounded-xl overflow-hidden transition-all duration-200"
            style={{ background: "#111", border: open === i ? "1px solid rgba(212,175,55,0.3)" : "1px solid rgba(255,255,255,0.06)" }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-bold text-white text-sm leading-snug">{item.q}</span>
              <span className="text-xl shrink-0 transition-transform duration-200" style={{ color: "#D4AF37", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
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
