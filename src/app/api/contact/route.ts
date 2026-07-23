import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/config";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!rateLimit(ip, 5, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, service, message } = body as {
    name?: string; phone?: string; email?: string; service?: string; message?: string;
  };

  const trimmedPhone = phone?.trim();
  const trimmedEmail = email?.trim();

  if (!name || !(trimmedPhone || trimmedEmail)) {
    return NextResponse.json({ error: "Please provide your name and a phone number or email." }, { status: 400 });
  }

  if ((message ?? "").length > 2000) {
    return NextResponse.json({ error: "Message too long." }, { status: 400 });
  }

  // Web3Forms' own docs submit as multipart FormData, not raw JSON — mirror
  // that exactly since it's the officially supported/tested path. Also only
  // send fields we actually have a value for; sending a placeholder like
  // "Not provided" in the email field can trip their email-format validation.
  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("name", name);
  if (trimmedPhone) formData.append("phone", trimmedPhone);
  if (trimmedEmail) formData.append("email", trimmedEmail);
  if (!trimmedEmail) formData.append("replyto", "no-reply@fourbrothersexteriors.com");
  formData.append("service", service ?? "Not specified");
  formData.append("message", message || "(no additional details provided)");
  formData.append("preferred_contact_method", trimmedPhone && !trimmedEmail ? "Phone" : trimmedEmail && !trimmedPhone ? "Email" : "Phone or Email");
  formData.append("subject", `New Quote Request — ${name} — ${service ?? "General"}`);
  formData.append("from_name", "Four Brothers Exteriors Website");

  let web3formsRes: Response;
  try {
    web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
  } catch (err) {
    console.error("Web3Forms network error:", err);
    return NextResponse.json({ error: "Could not reach the form service. Please call us directly." }, { status: 502 });
  }

  const rawText = await web3formsRes.text();
  let web3formsData: { success?: boolean; message?: string } = {};
  try {
    web3formsData = JSON.parse(rawText);
  } catch {
    console.error(
      "Web3Forms returned non-JSON response:",
      web3formsRes.status,
      web3formsRes.headers.get("content-type"),
      rawText.slice(0, 500)
    );
    return NextResponse.json({ error: "Form service returned an unexpected response. Please call us directly." }, { status: 502 });
  }

  if (!web3formsRes.ok || !web3formsData.success) {
    console.error("Web3Forms rejected the submission:", web3formsRes.status, web3formsData);
    return NextResponse.json(
      { error: web3formsData.message || "Failed to send. Please call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
