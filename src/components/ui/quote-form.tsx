"use client";
import React, { useState } from "react";
import { CheckCircle, AlertCircle, Phone, Mail } from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, SERVICE_TYPES } from "@/lib/config";
import { submitToWeb3Forms } from "@/lib/web3forms";

type ServiceType = (typeof SERVICE_TYPES)[number];
type ContactMethod = "phone" | "email";

interface QuoteFormProps {
  defaultService?: ServiceType;
}

export default function QuoteForm({ defaultService = "Roof Repair" }: QuoteFormProps) {
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await submitToWeb3Forms({
      name: form.name,
      phone: contactMethod === "phone" ? form.phone : undefined,
      email: contactMethod === "email" ? form.email : undefined,
      service: form.service,
      message: form.message,
    });

    if (!result.success) {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
      return;
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <CheckCircle size={64} className="mx-auto mb-4" style={{ color: "#10B981" }} />
        <h3 className="text-3xl font-black text-white mb-2">Quote Request Sent!</h3>
        <p className="text-gray-300 text-lg">
          We&apos;ll get back to you shortly. In a hurry? Call <span style={{ color: "#10B981" }}>{PRIMARY_PHONE_DISPLAY}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
          style={{ background: "#1a1a1a", border: "1px solid #333" }}
        />
        <select
          required
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value as ServiceType })}
          className="px-4 py-3 rounded-lg text-white text-sm"
          style={{ background: "#1a1a1a", border: "1px solid #333" }}
        >
          {SERVICE_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">How should we reach you?</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button
            type="button"
            onClick={() => setContactMethod("phone")}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all"
            style={{
              background: contactMethod === "phone" ? "rgba(16,185,129,0.15)" : "#1a1a1a",
              border: contactMethod === "phone" ? "1px solid #10B981" : "1px solid #333",
              color: contactMethod === "phone" ? "#10B981" : "#9ca3af",
            }}
          >
            <Phone size={15} /> Phone
          </button>
          <button
            type="button"
            onClick={() => setContactMethod("email")}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all"
            style={{
              background: contactMethod === "email" ? "rgba(16,185,129,0.15)" : "#1a1a1a",
              border: contactMethod === "email" ? "1px solid #10B981" : "1px solid #333",
              color: contactMethod === "email" ? "#10B981" : "#9ca3af",
            }}
          >
            <Mail size={15} /> Email
          </button>
        </div>

        {contactMethod === "phone" ? (
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
            style={{ background: "#1a1a1a", border: "1px solid #333" }}
          />
        ) : (
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
            style={{ background: "#1a1a1a", border: "1px solid #333" }}
          />
        )}
      </div>

      <textarea
        placeholder="Project Details — tell us about your roof, siding, or exterior project"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm resize-none"
        style={{ background: "#1a1a1a", border: "1px solid #333" }}
      />

      {status === "error" && (
        <div className="flex items-center gap-2 p-4 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
          <AlertCircle size={18} className="text-red-400" />
          <p className="text-red-400 text-sm">{errorMsg || "Something went wrong. Please try again."}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-full font-black text-black text-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ background: "linear-gradient(135deg, #D4AF37, #9B7A22)" }}
      >
        {status === "loading" ? "Sending..." : "Request My Free Quote"}
      </button>
    </form>
  );
}
