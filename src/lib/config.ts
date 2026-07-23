// TODO: replace with a Formspree form ID created for Four Brothers Exteriors
// (https://formspree.io) — or swap this whole helper for another form backend.
// Using a placeholder here on purpose: leads must NOT be sent to a different
// business's inbox.
export const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/YOUR_FORM_ID";

export const BUSINESS_NAME = "Four Brothers Exteriors";
export const PRIMARY_PHONE_DISPLAY = "(587) 891-9200";
export const PRIMARY_PHONE_TEL = "5878919200";
export const SECONDARY_PHONE_DISPLAY = "(514) 348-1366";
export const SECONDARY_PHONE_TEL = "5143481366";
// TODO: replace with the business's real email address once available.
export const CONTACT_EMAIL = "info@fourbrothersexteriors.com";

export const SERVICE_TYPES = ["Roof Repair", "Roof Installation", "Siding & Exterior", "Other"] as const;
