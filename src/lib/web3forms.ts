import { WEB3FORMS_ACCESS_KEY } from "@/lib/config";

export interface QuoteSubmission {
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export interface SubmitResult {
  success: boolean;
  error?: string;
}

// Submits directly from the browser to Web3Forms, matching their own
// documented usage — this is a genuine browser request with a real page
// Origin, which is what a domain-restricted access key checks against.
export async function submitToWeb3Forms(data: QuoteSubmission): Promise<SubmitResult> {
  const phone = data.phone?.trim();
  const email = data.email?.trim();

  if (!data.name || !(phone || email)) {
    return { success: false, error: "Please provide your name and a phone number or email." };
  }

  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("name", data.name);
  if (phone) formData.append("phone", phone);
  if (email) formData.append("email", email);
  if (!email) formData.append("replyto", "no-reply@fourbrothersexteriors.ca");
  formData.append("service", data.service ?? "Not specified");
  formData.append("message", data.message || "(no additional details provided)");
  formData.append("subject", `New Quote Request — ${data.name} — ${data.service ?? "General"}`);
  formData.append("from_name", "Four Brothers Exteriors Website");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    const text = await res.text();
    let json: { success?: boolean; message?: string } = {};
    try {
      json = JSON.parse(text);
    } catch {
      console.error("Web3Forms returned non-JSON:", res.status, text.slice(0, 500));
      return { success: false, error: "Something went wrong sending your request. Please call us directly." };
    }

    if (!res.ok || !json.success) {
      console.error("Web3Forms rejected submission:", res.status, json);
      return { success: false, error: json.message || "Something went wrong sending your request. Please call us directly." };
    }

    return { success: true };
  } catch (err) {
    console.error("Web3Forms network error:", err);
    return { success: false, error: "Could not send your request. Please check your connection or call us directly." };
  }
}
