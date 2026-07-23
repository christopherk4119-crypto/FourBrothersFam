"use client";
import React, { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  subheading?: string;
}

export default function FAQSection({ faqs, heading = "Frequently Asked Questions", subheading = "Honest answers to common questions Calgary homeowners ask." }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="section" id="faq" style={{ background: "#0d0d0d" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading" style={{ marginBottom: 16 }}>{heading.split(" ").slice(0, -1).join(" ")} <span>{heading.split(" ").slice(-1)}</span></h2>
        <p className="section-subheading">{subheading}</p>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
}
