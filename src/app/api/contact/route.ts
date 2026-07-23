import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/config";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    if (!rateLimit(ip, 5, 60 * 60 * 1000)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if ((message ?? "").length > 2000) {
      return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }

    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        phone,
        email,
        service,
        message,
        subject: `New Quote Request — ${name} — ${service}`,
      }),
    });

    const web3formsData = await web3formsRes.json();
    if (!web3formsRes.ok || !web3formsData.success) {
      console.error("Web3Forms error:", web3formsData);
      return NextResponse.json({ error: "Failed to send. Please call us directly." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
