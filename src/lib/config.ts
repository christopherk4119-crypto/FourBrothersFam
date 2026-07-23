// Web3Forms access key — used server-side only (src/app/api/contact/route.ts),
// never shipped to the client bundle. Set WEB3FORMS_ACCESS_KEY in your Vercel
// project env vars for production; this fallback is the test key provided
// for initial setup.
export const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY || "b8c6ff9f-764f-42e4-aa2d-0e5c46870521";

export const BUSINESS_NAME = "Four Brothers Exteriors";
export const PRIMARY_PHONE_DISPLAY = "(587) 891-9200";
export const PRIMARY_PHONE_TEL = "5878919200";
export const SECONDARY_PHONE_DISPLAY = "(514) 348-1366";
export const SECONDARY_PHONE_TEL = "5143481366";
export const CONTACT_EMAIL = "fourbrothersexterior@gmail.com";

export const SERVICE_TYPES = ["Roof Repair", "Roof Installation", "Siding & Exterior", "Other"] as const;
