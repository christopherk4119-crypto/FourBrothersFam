"use client";
import React, { useState, useEffect } from "react";
import { X, AlertCircle, Phone, Mail } from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, SERVICE_TYPES } from "@/lib/config";
import { submitToWeb3Forms } from "@/lib/web3forms";

type ContactMethod = "phone" | "email";

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      if (!submitted) setVisible(true);
    }, 120000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const result = await submitToWeb3Forms({
      name: form.name,
      phone: contactMethod === "phone" ? form.phone : undefined,
      email: contactMethod === "email" ? form.email : undefined,
      service: form.service,
      message: `[Popup Form] ${form.message}`,
    });

    setSending(false);

    if (!result.success) {
      setError(result.error || "Something went wrong. Please call us directly.");
      return;
    }

    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ background: "#111", border: "1px solid rgba(16,185,129,0.3)", animation: "slideUp 0.4s ease-out" }}
      >
        <style>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <button onClick={close} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-black text-white mb-2">You&apos;re All Set!</h3>
            <p className="text-gray-300">Thank you! We&apos;ll be in touch shortly. In a hurry? Call <span style={{ color: "#10B981" }}>{PRIMARY_PHONE_DISPLAY}</span>.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-black text-white mb-1">Get a Free Quote</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;ll be in touch shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm outline-none focus:ring-2"
                style={{ background: "#1a1a1a", border: "1px solid #333" }}
              />

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setContactMethod("phone")}
                  className="flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all"
                  style={{
                    background: contactMethod === "phone" ? "rgba(16,185,129,0.15)" : "#1a1a1a",
                    border: contactMethod === "phone" ? "1px solid #10B981" : "1px solid #333",
                    color: contactMethod === "phone" ? "#10B981" : "#9ca3af",
                  }}
                >
                  <Phone size={14} /> Phone
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod("email")}
                  className="flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all"
                  style={{
                    background: contactMethod === "email" ? "rgba(16,185,129,0.15)" : "#1a1a1a",
                    border: contactMethod === "email" ? "1px solid #10B981" : "1px solid #333",
                    color: contactMethod === "email" ? "#10B981" : "#9ca3af",
                  }}
                >
                  <Mail size={14} /> Email
                </button>
              </div>

              {contactMethod === "phone" ? (
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm outline-none focus:ring-2"
                  style={{ background: "#1a1a1a", border: "1px solid #333" }}
                />
              ) : (
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm outline-none focus:ring-2"
                  style={{ background: "#1a1a1a", border: "1px solid #333" }}
                />
              )}

              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ background: "#1a1a1a", border: "1px solid #333", color: form.service ? "#fff" : "#6b7280" }}
              >
                <option value="" disabled>Service Type</option>
                {SERVICE_TYPES.map((s) => (
                  <option key={s} value={s} style={{ color: "#fff" }}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Project Details (optional)"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm outline-none resize-none"
                style={{ background: "#1a1a1a", border: "1px solid #333" }}
              />

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <p className="text-red-400 text-xs">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-full font-black text-black text-lg transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ background: "linear-gradient(135deg, #D4AF37, #9B7A22)" }}
              >
                {sending ? "Sending..." : "Send My Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
