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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Four Brothers Exteriors — Roof Repair Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repair Calgary | Four Brothers Exteriors",
    description: "Fast, reliable repairs for leaks, storm damage, and wear. Emergency service available. Call (587) 891-9200.",
    images: ["/og-image.png"],
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
  {
    q: "Is my roof leaking water?",
    a: "If your roof uses tile and the tiles have reached the end of their service life, the roof usually needs a full recover rather than a spot patch. Part of doing that right is installing proper water-resistant underlayment beneath the tiles during the re-cover, so your roof stays protected against leaks for years, not just months.",
  },
  {
    q: "Are my rain gutters worn?",
    a: "Sagging, pulling-away, cracked, or overflowing gutters put your roofline and foundation at risk. Call us to inspect and renew worn rain gutters on your roof before they cause water damage to your fascia, siding, or basement.",
  },
];

const learnMore = {
  heading: "Roof Repair in Calgary — Fast, Honest, and Built to Last",
  paragraphs: [
    "Most roof problems don't start as emergencies — they start as a lifted shingle, a cracked seal around a vent, or a gutter that's just slightly out of pitch. Left alone, Calgary's freeze-thaw cycles turn small issues into real leaks fast. When you call us, we start with a full inspection of the roof, not just the spot you're worried about, because water has a habit of traveling before it shows up as a stain on your ceiling. That's how we catch the actual source of a leak instead of patching a symptom.",
    "For storm and hail damage, we document everything thoroughly so you have what you need if you're filing an insurance claim, and we'll give you a straight answer on whether a targeted repair is enough or whether the damage is widespread enough that a fuller recover makes more sense. If your roof uses tile and the coverings have expired, that usually means a full recover with fresh water-resistant underlayment laid beneath the tile — patch jobs on an expired tile roof rarely hold. The same logic applies to rain gutters: sagging, pulling away from the fascia, or overflowing gutters are a repair issue today and a foundation or siding issue tomorrow if they're ignored.",
    "Emergency calls get priority. If you've got an active leak, storm damage, or anything putting the inside of your home at risk, we aim for same-day or next-day response with temporary tarping if needed to stop the damage while we schedule the permanent fix. Whatever the job, the quote you get up front is honest and itemized — no inflated \"emergency\" pricing just because the timeline is tight.",
  ],
  highlights: [
    "Full-roof inspection, not just a spot check",
    "Leak, flashing, and shingle repair",
    "Storm & hail damage assessment",
    "Gutter and eavestrough repair",
    "Emergency service, same/next-day response",
    "Clear, itemized pricing before work starts",
  ],
};

export default function RoofRepairPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Roof Repair Calgary"
        heroSubheadline="Fast, Reliable Repairs for Leaks, Storm Damage & Wear | Emergency Service Available"
        heroCta="Get Repair Quote"
        serviceType="Roof Repair"
        services={services}
        galleryPhotos={[
          { src: "/images/gallery/roofing/calgary-roof-pipe-boot-flashing-repair-1.webp", alt: "Pipe boot flashing repair on a Calgary shingle roof" },
          { src: "/images/gallery/roofing/calgary-roofer-shingle-installation-workmanship-1.webp", alt: "Four Brothers Exteriors roofer working on a Calgary roof repair" },
        ]}
        learnMore={learnMore}
      />
      <FAQSection faqs={faqs} heading="Roof Repair FAQ" subheading="What Calgary homeowners ask about roof repair and leaks." />
    </>
  );
}
