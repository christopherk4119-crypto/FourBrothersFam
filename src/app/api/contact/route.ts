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

  if (!name || !(phone?.trim() || email?.trim())) {
    return NextResponse.json({ error: "Please provide your name and a phone number or email." }, { status: 400 });
  }

  if ((message ?? "").length > 2000) {
    return NextResponse.json({ error: "Message too long." }, { status: 400 });
  }

  let web3formsRes: Response;
  try {
    web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        phone: phone || "Not provided",
        email: email || "Not provided",
        service,
        message,
        subject: `New Quote Request — ${name} — ${service ?? "General"}`,
      }),
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
    console.error("Web3Forms returned non-JSON response:", web3formsRes.status, rawText.slice(0, 500));
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
