import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "Roof Repair Calgary | Leak & Storm Damage Repair",
  description:
    "Fast, reliable roof repair in Calgary for leaks, storm damage, and wear. Emergency service available. Honest pricing, licensed & insured. Call (587) 891-9200.",
  keywords: ["roof repair Calgary", "roof leak repair Calgary", "emergency roof repair Calgary", "hail damage roof repair Calgary", "shingle repair Calgary"],
  alternates: { canonical: "https://www.fourbrothersexteriors.com/roof-repair" },
  openGraph: {
    title: "Roof Repair Calgary | Four Brothers Exteriors",
    description: "Fast, reliable repairs for leaks, storm damage, and wear. Emergency service available. Call (587) 891-9200.",
    url: "https://www.fourbrothersexteriors.com/roof-repair",
  },
};

const services = [
  { title: "Roof Leak Repair", desc: "", bullets: ["★ Leak Detection", "★ Flashing & Seal Repair", "★ Interior Damage Prevention", "★ Fast Response"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Roof leak repair service in Calgary" },
  { title: "Storm & Hail Damage Repair", desc: "", bullets: ["★ Damage Assessment", "★ Insurance Claim Support", "★ Shingle Replacement", "★ Full Restoration"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Storm and hail damage roof repair Calgary" },
  { title: "Emergency Roof Repair", desc: "", bullets: ["★ Fast Response", "★ Temporary Tarping", "★ Same-Day Estimates", "★ 24/7 Emergency Calls"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Emergency roof repair Calgary" },
  { title: "Shingle & Flashing Repair", desc: "", bullets: ["★ Missing/Curling Shingles", "★ Flashing Replacement", "★ Vent & Skylight Seals", "★ Spot Repairs"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Shingle and flashing repair Calgary" },
  { title: "Gutter & Eavestrough Repair", desc: "", bullets: ["★ Leak & Sag Repair", "★ Cleaning & Maintenance", "★ Downspout Fixes", "★ Ice Dam Prevention"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Gutter and eavestrough repair Calgary" },
];

const faqs = [
  {
    q: "What should I do if my roof is leaking right now?",
    a: "Move belongings out of the way, place a bucket to catch water, and avoid climbing onto the roof yourself. Call us right away — we offer emergency service and can typically inspect and apply a temporary fix same-day or next-day to stop further damage before a full repair.",
  },
  {
    q: "Can you fix hail or storm damage?",
    a: "Yes. We assess the full extent of storm and hail damage, document it for insurance purposes, and complete repairs or shingle replacement as needed. We can walk you through what your insurance is likely to cover based on our assessment.",
  },
  {
    q: "How fast can you respond to an emergency roof repair in Calgary?",
    a: "We prioritize emergency calls — leaks, storm damage, and safety issues — and aim for same-day or next-day response. Call (587) 891-9200 directly for the fastest response.",
  },
  {
    q: "Is roof repair or full replacement the better option?",
    a: "It depends on the roof's age and the extent of damage. If damage is isolated and the roof is under 15 years old, repair is usually the smarter, more cost-effective option. If there's widespread damage or the roof is near the end of its lifespan, we'll be honest with you if replacement makes more financial sense long-term.",
  },
  {
    q: "How much does roof repair cost in Calgary?",
    a: "Minor repairs like flashing or a small section of shingles typically cost less, while larger repairs involving structural or widespread damage cost more. We give you a clear, itemized quote before any work begins — no hidden fees.",
  },
];

export default function RoofRepairPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Roof Repair Calgary"
        heroSubheadline="Fast, Reliable Repairs for Leaks, Storm Damage & Wear | Emergency Service Available"
        heroCta="Get Repair Quote"
        serviceType="Roof Repair"
        services={services}
        galleryPhotos={[]}
      />
      <FAQSection faqs={faqs} heading="Roof Repair FAQ" subheading="What Calgary homeowners ask about roof repair and leaks." />
    </>
  );
}
