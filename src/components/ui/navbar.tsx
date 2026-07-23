"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Home, Wrench, Mail } from "lucide-react";
import RoofIcon from "@/components/ui/roof-icon";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL, SECONDARY_PHONE_DISPLAY, SECONDARY_PHONE_TEL } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid rgba(212,175,55,0.2)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 min-w-[180px]">
            <RoofIcon size={42} />
            <div>
              <div className="display-font font-bold text-xl leading-tight tracking-wide uppercase" style={{ color: "#D4AF37" }}>
                Four Brothers
              </div>
              <div className="text-[11px] text-gray-400 leading-tight tracking-[0.2em] uppercase">Exteriors</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
                style={{ color: pathname === l.href ? "#D4AF37" : "#e5e7eb" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <a href={`tel:${PRIMARY_PHONE_TEL}`} className="flex items-center gap-2 text-white font-bold text-sm">
                <Phone size={16} style={{ color: "#D4AF37" }} />
                {PRIMARY_PHONE_DISPLAY}
              </a>
              <a href={`tel:${SECONDARY_PHONE_TEL}`} className="flex items-center gap-2 font-bold text-sm" style={{ color: "#10B981" }}>
                <Phone size={16} style={{ color: "#10B981" }} />
                {SECONDARY_PHONE_DISPLAY}
              </a>
            </div>
            <Link
              href="/#contact"
              className="px-5 py-2 rounded-full font-bold text-sm text-black transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D4AF37, #9B7A22)" }}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile quick-access bar */}
        <div className="md:hidden flex items-center justify-around pb-2" style={{ borderTop: "1px solid rgba(212,175,55,0.12)" }}>
          <Link href="/" className="flex flex-col items-center gap-0.5 px-4 pt-2" style={{ color: pathname === "/" ? "#D4AF37" : "#e5e7eb" }}>
            <Home size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Home</span>
          </Link>
          <Link href="/#services" className="flex flex-col items-center gap-0.5 px-4 pt-2 text-gray-200">
            <Wrench size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Services</span>
          </Link>
          <a href={`tel:${PRIMARY_PHONE_TEL}`} className="flex flex-col items-center gap-0.5 px-4 pt-2 text-gray-200">
            <Phone size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Call</span>
          </a>
          <Link href="/#contact" className="flex flex-col items-center gap-0.5 px-4 pt-2 text-gray-200">
            <Mail size={18} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Quote</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(212,175,55,0.2)" }}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-bold text-lg py-2"
                style={{ color: pathname === l.href ? "#D4AF37" : "#e5e7eb" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <a href={`tel:${PRIMARY_PHONE_TEL}`} className="flex items-center gap-2 text-white font-bold">
                <Phone size={16} style={{ color: "#D4AF37" }} />
                {PRIMARY_PHONE_DISPLAY}
              </a>
              <a href={`tel:${SECONDARY_PHONE_TEL}`} className="flex items-center gap-2 font-bold" style={{ color: "#10B981" }}>
                <Phone size={16} style={{ color: "#10B981" }} />
                {SECONDARY_PHONE_DISPLAY}
              </a>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 rounded-full font-bold text-black"
                style={{ background: "linear-gradient(135deg, #D4AF37, #9B7A22)" }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
