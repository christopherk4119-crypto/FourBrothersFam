"use client";
import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, SERVICE_TYPES } from "@/lib/config";

type ServiceType = (typeof SERVICE_TYPES)[number];

interface QuoteFormProps {
  defaultService?: ServiceType;
}

export default function QuoteForm({ defaultService = "Roof Repair" }: QuoteFormProps) {
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

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.status === 429) {
      setStatus("error");
      setErrorMsg("Too many requests. Please try again later or call us directly.");
      return;
    }

    if (!res.ok) {
      const data = await res.json();
      setStatus("error");
      setErrorMsg(data.error || "Something went wrong.");
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
          We&apos;ll call you back shortly at <span style={{ color: "#10B981" }}>{PRIMARY_PHONE_DISPLAY}</span>.
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
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="px-4 py-3 rounded-lg text-white placeholder-gray-500 text-sm"
          style={{ background: "#1a1a1a", border: "1px solid #333" }}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
