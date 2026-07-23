import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PRIMARY_PHONE_TEL, PRIMARY_PHONE_DISPLAY, CONTACT_EMAIL } from "@/lib/config";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(16,185,129,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Four Brothers Exteriors logo" width={44} height={44} className="rounded-lg" />
              <div>
                <div className="font-black text-lg" style={{ color: "#10B981" }}>Four Brothers</div>
                <div className="text-xs text-gray-500">Exteriors</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic mb-4">&quot;Calgary&apos;s Trusted Roofing &amp; Exterior Experts&quot;</p>
            <p className="text-gray-500 text-sm">Family-run &amp; locally operated — Calgary, AB and surrounding areas</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/roof-installation", label: "Roof Installation" },
                { href: "/roof-repair", label: "Roof Repair" },
                { href: "/siding-exterior", label: "Siding & Exterior" },
                { href: "/#gallery", label: "Projects" },
                { href: "/faq", label: "FAQ" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-2">
              <a href={`tel:${PRIMARY_PHONE_TEL}`} className="block font-bold text-emerald-400 hover:text-emerald-300">{PRIMARY_PHONE_DISPLAY}</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block text-gray-400 hover:text-white text-sm">{CONTACT_EMAIL}</a>
              <p className="text-gray-500 text-sm pt-2">Serving Calgary, AB &amp; surrounding areas</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(16,185,129,0.1)" }}>
          <p className="text-gray-600 text-sm">© 2026 Four Brothers Exteriors — Calgary, AB</p>
          <p className="text-gray-600 text-sm italic">Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
