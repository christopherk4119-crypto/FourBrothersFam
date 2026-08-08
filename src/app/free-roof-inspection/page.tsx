import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Free Roof Inspection Calgary | No-Obligation Roof Check",
  description:
    "Free, no-obligation roof inspection for Calgary homes. Full condition check, storm damage assessment and honest findings. Call (587) 891-9200 to book.",
  keywords: ["free roof inspection Calgary", "roof inspection Calgary", "no obligation roof check Calgary", "roof condition assessment Calgary", "Calgary roof inspector"],
  alternates: { canonical: `${SITE_URL}/free-roof-inspection` },
  openGraph: {
    title: "Free Roof Inspection Calgary | Four Brothers Exteriors",
    description: "Free, no-obligation roof inspection for Calgary homes — full condition check and honest findings. Call (587) 891-9200.",
    url: `${SITE_URL}/free-roof-inspection`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Four Brothers Exteriors — Free Roof Inspection Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Roof Inspection Calgary | Four Brothers Exteriors",
    description: "Free, no-obligation roof inspection for Calgary homes — full condition check and honest findings. Call (587) 891-9200.",
    images: ["/og-image.png"],
  },
};

const services = [
  { title: "Full Roof Condition Assessment", desc: "", bullets: ["★ Shingles & Flashing", "★ Vents & Penetrations", "★ Ridge & Valleys", "★ Overall Roof Age & Wear"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Full roof condition assessment in Calgary" },
  { title: "Storm & Hail Damage Check", desc: "", bullets: ["★ Granule Loss", "★ Impact Marks", "★ Wind Damage", "★ Honest Findings"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Storm and hail damage check during a free roof inspection in Calgary" },
  { title: "Gutter & Eavestrough Check", desc: "", bullets: ["★ Sagging or Damage", "★ Downspout Function", "★ Attachment Points", "★ Drainage Issues"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Gutter and eavestrough check during a Calgary roof inspection" },
  { title: "Flashing & Seal Check", desc: "", bullets: ["★ Vent & Skylight Seals", "★ Chimney Flashing", "★ Valley Flashing", "★ Early Leak Prevention"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Roof flashing and seal check Calgary" },
  { title: "Honest Recommendation", desc: "", bullets: ["★ No Pressure, No Upsell", "★ Repair, Replace, or Nothing", "★ Clear Explanation of Findings", "★ Free Quote If Work Is Needed"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Honest roof inspection recommendation Calgary" },
];

const faqs = [
  {
    q: "What's included in a free roof inspection?",
    a: "We check the overall condition of your roof — shingles, flashing, vents, ridge and valleys — along with any signs of storm or hail damage, and take a look at your gutters and eavestroughs while we're up there. It's a full look at the roof's condition, not just a glance at one problem area.",
  },
  {
    q: "How long does a roof inspection take?",
    a: "It depends on the size and accessibility of your roof, but it's a quick, straightforward visit — most homeowners have it done in a single trip out to the property.",
  },
  {
    q: "Is the inspection really free, with no obligation?",
    a: "Yes. There's no cost and no pressure to book any work afterward. If your roof is in good shape, we'll tell you that. If something needs attention, we'll explain what we found and give you a free, no-obligation quote — but the decision on whether to move forward is entirely yours.",
  },
  {
    q: "What do I get after the inspection?",
    a: "A clear, honest explanation of what we found, including photos if there's any damage worth showing you. If repair or other work makes sense, we'll walk you through the options and provide a free, itemized quote. If nothing needs doing, we'll say so.",
  },
  {
    q: "Should I get a free inspection even if I don't see any problems?",
    a: "It's a reasonable thing to do periodically, and especially worth doing after a significant storm or hailstorm, since a lot of roof damage isn't visible from the ground or from inside your home. An inspection catches issues early, before they turn into a leak or a bigger repair.",
  },
  {
    q: "Will you try to sell me work I don't need?",
    a: "No. Our whole approach is built on honest, upfront assessments — if your roof doesn't need anything, we'll tell you that directly instead of manufacturing a reason to sell you a repair.",
  },
];

const learnMore = {
  heading: "Free Roof Inspections for Calgary Homeowners — No Cost, No Pressure",
  paragraphs: [
    "A roof inspection is one of the simplest ways to catch a problem while it's still small and inexpensive to fix, instead of finding out about it when water is already coming through your ceiling. We check the overall condition of the roof — shingles, flashing around vents and skylights, ridge and valleys, and general wear for the roof's age — along with a look at your gutters and eavestroughs, since a roof and its drainage system work together as one unit.",
    "It's especially worth booking after a significant storm or hailstorm, since a lot of the damage that matters — granule loss, bruised shingles, minor flashing damage — genuinely isn't visible from the ground or from inside your attic. Getting eyes directly on the roof is the only reliable way to know its real condition.",
    "The inspection itself is free, and there's no obligation attached to it. If we get up there and your roof is in good shape, we'll tell you exactly that instead of inventing a reason to sell you work. If we do find something, we'll explain clearly what it is, why it matters, and give you a free, itemized quote so you can decide what to do next — on your timeline, not ours.",
  ],
  highlights: [
    "Full roof condition check — shingles, flashing, vents, valleys",
    "Storm & hail damage assessment included",
    "Gutter & eavestrough check included",
    "No cost, no obligation, no pressure",
    "Honest findings — even if that means \"nothing needed\"",
    "Free, itemized quote if work is recommended",
  ],
};

export default function FreeRoofInspectionPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Free Roof Inspection Calgary"
        heroSubheadline="A Full, No-Obligation Roof Check for Calgary Homes — Honest Findings, No Pressure"
        heroCta="Book My Free Inspection"
        serviceType="Free Roof Inspection"
        path="/free-roof-inspection"
        services={services}
        galleryPhotos={[
          { src: "/images/gallery/roofing/calgary-roofing-aerial-shingle-inspection-1.webp", alt: "Free aerial roof inspection performed on a Calgary home" },
          { src: "/images/gallery/roofing/calgary-roof-peak-vent-shingle-installation-1.webp", alt: "Roof peak and vent checked during a free Calgary roof inspection" },
        ]}
        learnMore={learnMore}
      />
      <FAQSection faqs={faqs} heading="Free Roof Inspection FAQ" subheading="What Calgary homeowners ask before booking an inspection." />
    </>
  );
}
