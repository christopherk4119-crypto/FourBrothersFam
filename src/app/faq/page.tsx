import type { Metadata } from "next";
import FAQSection from "@/components/ui/faq-section";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL, SECONDARY_PHONE_DISPLAY, SECONDARY_PHONE_TEL } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ | Calgary Roofing & Exterior Questions Answered",
  description:
    "Answers to common questions about roof repair, roof installation, and siding in Calgary. Pricing, permits, timelines, gutter repair, roof winterizing, and more. Four Brothers Exteriors — (587) 891-9200.",
  keywords: [
    "roofing FAQ Calgary",
    "is my roof leaking Calgary",
    "rain gutter repair Calgary",
    "roof winterizing Calgary",
    "roof recover Calgary",
    "roof replacement cost Calgary",
    "emergency roof repair Calgary",
  ],
  alternates: { canonical: "https://www.fourbrothersexteriors.com/faq" },
  openGraph: {
    title: "FAQ | Four Brothers Exteriors Calgary",
    description: "Common questions about roof repair, roof installation, and siding in Calgary. Call (587) 891-9200.",
    url: "https://www.fourbrothersexteriors.com/faq",
  },
};

const faqs = [
  // General
  {
    q: "What areas do you serve?",
    a: "We serve all of Calgary, AB — NW, NE, SW, SE — plus surrounding communities including Airdrie, Cochrane, Okotoks, and Chestermere.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Four Brothers Exteriors is fully licensed and insured for roofing and exterior work in Calgary, so you have peace of mind on every project.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes. Every quote is free and comes with no obligation. Fill out the quote form on this site or call us directly and we'll get back to you with honest, upfront pricing.",
  },
  {
    q: "How is your pricing different from other roofing companies?",
    a: "We give you a clear, itemized quote before any work begins — no hidden fees, no surprise add-ons partway through the job. Our team came up working directly on job sites for established roofing companies, so we know exactly what fair pricing looks like.",
  },
  {
    q: "Do you offer a workmanship guarantee?",
    a: "Yes. We stand behind every project we complete. If something isn't right, we make it right.",
  },
  // Roof repair
  {
    q: "What should I do if my roof is leaking?",
    a: "Contain the water damage indoors if you can, avoid climbing onto the roof yourself, and call us right away. We offer emergency service and can typically inspect the leak same-day or next-day, apply a temporary fix if needed, and give you an honest repair quote.",
  },
  {
    q: "How do I know if my gutters need repair or replacement?",
    a: "Warning signs include water pooling near your foundation, gutters pulling away from the fascia, visible sagging or rust, and overflow during rain even when clear of debris. If your gutters are more than 15–20 years old or damaged in multiple spots, replacement is usually more cost-effective than repeated repairs.",
  },
  {
    q: "Can you fix hail or storm damage?",
    a: "Yes. We assess the full extent of storm and hail damage, document it for insurance purposes, and complete repairs or shingle replacement as needed.",
  },
  {
    q: "Do you offer emergency roof repair?",
    a: "Yes. We prioritize emergency calls for leaks, storm damage, and safety issues, and aim for same-day or next-day response. Call (587) 891-9200 directly for the fastest response.",
  },
  // Roof installation
  {
    q: "When should I replace my roof?",
    a: "Most asphalt shingle roofs in Calgary last 15–25 years depending on material and weather exposure. Signs it's time to replace include curling or missing shingles, granules collecting in your gutters, daylight visible through the attic boards, or repeated leaks in different spots.",
  },
  {
    q: "How much does roof repair or installation cost in Calgary?",
    a: "Costs vary based on roof size, pitch, material, and the extent of damage or work needed. We provide a clear, itemized, no-obligation quote before any work begins — no hidden fees.",
  },
  {
    q: "Do you offer roof maintenance or seasonal inspections?",
    a: "Yes. We recommend a roof inspection at least once a year — ideally in the spring after winter snow load, or in the fall before winter hits. Regular inspections catch small issues before they turn into leaks or expensive repairs.",
  },
  {
    q: "What roofing materials do you install?",
    a: "We install asphalt shingle and metal roofing for residential and commercial properties, chosen to hold up against Calgary's snow, hail, and wind.",
  },
  // Siding
  {
    q: "What's the best siding material for Calgary's climate?",
    a: "Vinyl siding is a popular, cost-effective choice that handles temperature swings well, while fiber cement (Hardie board) offers superior durability and a premium look at a higher price point. We'll walk you through the trade-offs based on your budget.",
  },
  // Maintenance & renewal
  {
    q: "Is my roof leaking water?",
    a: "If your roof uses tile and the tiles have reached the end of their service life, the roof usually needs a full recover rather than a spot patch. Part of doing that right is installing proper water-resistant underlayment beneath the tiles during the re-cover, so your roof stays protected against leaks for years, not just months.",
  },
  {
    q: "Are my rain gutters worn?",
    a: "Sagging, pulling-away, cracked, or overflowing gutters put your roofline and foundation at risk. Call us to inspect and renew worn rain gutters on your roof before they cause water damage to your fascia, siding, or basement.",
  },
  {
    q: "I want to renew my roof covering — what should I know?",
    a: "No matter which roofing material you switch to, the quality of the installation is what actually determines whether your roof holds up. Even first-quality materials will leak if the workmanship is wrong — that's why we focus as much on how a roof is installed as what it's made of.",
  },
  {
    q: "I want to have my roof winterized — how do I start?",
    a: "Reach out through our contact form or call us directly to schedule roof maintenance and repair work before winter hits, so your roof, gutters, and flashing are ready for Calgary's snow load and freeze-thaw cycles.",
  },
  {
    q: "I want to fully renew my roof — what's the process?",
    a: "If your roof is outdated or beyond a reasonable repair, we completely remove the old roof — tearing it down and hauling away all the old materials — then install new, first-quality materials from the deck up, backed by a 10-year workmanship guarantee.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ background: "#080808", minHeight: "40vh" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}>
            🏠 Quick Answers
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "0.01em" }}>
            Roofing &amp; Exterior <span style={{ color: "#10B981" }}>FAQs</span>
          </h1>
          <p className="text-gray-400 text-xl">Everything Calgary homeowners ask about roof repair, installation &amp; siding.</p>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="All Questions Answered" />

      {/* CTA */}
      <section className="section" style={{ background: "#080808" }}>
        <div className="text-center max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Still have a question?</h2>
          <p className="text-gray-400 mb-8">Call us directly — we pick up.</p>
          <a href={`tel:${PRIMARY_PHONE_TEL}`} className="btn-gold inline-block px-10 py-4 text-lg font-black">
            Call {PRIMARY_PHONE_DISPLAY}
          </a>
          <p className="text-gray-300 text-base mt-4">
            No answer? Call our other line: <a href={`tel:${SECONDARY_PHONE_TEL}`} className="font-bold" style={{ color: "#D4AF37" }}>{SECONDARY_PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>
    </>
  );
}
