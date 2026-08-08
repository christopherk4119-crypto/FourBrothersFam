// Web3Forms access key. Submitted directly from the browser (matching
// Web3Forms' own documented usage) so it's a public, client-side key by
// design — Web3Forms' security model is the domain restriction you set on
// the key in their dashboard, not keeping the key secret. Set
// NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel project env vars for
// production; this fallback is the key provided for initial setup.
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "b8c6ff9f-764f-42e4-aa2d-0e5c46870521";

export const SITE_URL = "https://www.fourbrothersexteriors.ca";

export const BUSINESS_NAME = "Four Brothers Exteriors";
export const PRIMARY_PHONE_DISPLAY = "(587) 891-9200";
export const PRIMARY_PHONE_TEL = "5878919200";
export const CONTACT_EMAIL = "fourbrothersexterior@gmail.com";

export const SERVICE_TYPES = [
  "Roof Repair",
  "Roof Installation",
  "Siding & Exterior",
  "Hail Damage Repair",
  "Insurance Claim Help",
  "Free Roof Inspection",
  "Other",
] as const;
