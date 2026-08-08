import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Hail Damage Roof Repair Calgary | Storm Damage Assessment",
  description:
    "Hail damage roof repair in Calgary — free inspection, honest assessment, and fast repairs after a storm. Serving Calgary, Airdrie, Cochrane & more. Call (587) 891-9200.",
  keywords: ["hail damage roof repair Calgary", "hail damage inspection Calgary", "storm damage roof repair Calgary", "Calgary hail storm roof", "roof hail damage assessment"],
  alternates: { canonical: `${SITE_URL}/hail-damage-repair` },
  openGraph: {
    title: "Hail Damage Roof Repair Calgary | Four Brothers Exteriors",
    description: "Free hail damage inspection and honest, fast repairs for Calgary roofs after a storm. Call (587) 891-9200.",
    url: `${SITE_URL}/hail-damage-repair`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Four Brothers Exteriors — Hail Damage Roof Repair Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Damage Roof Repair Calgary | Four Brothers Exteriors",
    description: "Free hail damage inspection and honest, fast repairs for Calgary roofs after a storm. Call (587) 891-9200.",
    images: ["/og-image.png"],
  },
};

const services = [
  { title: "Free Hail Damage Inspection", desc: "", bullets: ["★ Full Roof Assessment", "★ Ground & Roof-Level Check", "★ Photo Documentation", "★ Honest, No-Pressure Findings"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Free hail damage roof inspection in Calgary" },
  { title: "Shingle Bruising & Granule Loss Repair", desc: "", bullets: ["★ Impact Mark Assessment", "★ Granule Loss Repair", "★ Spot or Full-Slope Repairs", "★ Matched Materials"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Hail-damaged shingle repair on a Calgary roof" },
  { title: "Storm & Wind Damage Repair", desc: "", bullets: ["★ Wind-Lifted Shingles", "★ Flashing & Vent Repair", "★ Emergency Tarping", "★ Fast Response"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Storm and wind damage roof repair Calgary" },
  { title: "Post-Storm Roof Check", desc: "", bullets: ["★ After Any Major Hailstorm", "★ Free, No-Obligation", "★ Documented Findings", "★ Clear Next Steps"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Post-storm roof check in Calgary" },
  { title: "Gutter & Eavestrough Hail Check", desc: "", bullets: ["★ Dents & Damage Check", "★ Downspout Inspection", "★ Repair or Replace", "★ Full Exterior Look-Over"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Gutter and eavestrough hail damage check Calgary" },
];

const faqs = [
  {
    q: "What does hail damage on a roof actually look like?",
    a: "On asphalt shingles, hail damage usually shows up as dark, bruised spots where the granules have been knocked loose, sometimes with soft, dented areas underneath. It can also show up as cracked or split shingles, dented flashing, vents, or gutters, and granules collecting in your downspouts after a storm. None of these are always obvious from the ground.",
  },
  {
    q: "Why is hail damage often invisible from the ground?",
    a: "Most hail damage happens on the roof's upper slopes and doesn't create an obvious hole or visible sag — it's granule loss and bruising, which you generally can't see or judge accurately from your yard or driveway. That's exactly why a proper inspection means someone actually getting on the roof, not just looking up at it.",
  },
  {
    q: "How soon after a hailstorm should I get my roof inspected?",
    a: "As soon as reasonably possible. Damage that isn't addressed can let water in over time, turning a straightforward repair into a bigger problem, and many home insurance policies have time-sensitive windows for filing hail damage claims. Getting an inspection soon after a storm protects both your roof and your ability to claim.",
  },
  {
    q: "Does Calgary really get that much hail?",
    a: "Yes. Calgary sits in one of the most hail-prone regions in Canada, and severe hailstorms are a regular seasonal risk here, not a rare event. That's a big part of why we recommend a post-storm inspection any time your area sees a significant hailstorm, even if your roof looks fine from the street.",
  },
  {
    q: "What does the hail damage repair process look like?",
    a: "We start with a full roof inspection, not just a quick look at one spot, and document what we find with photos. From there we'll give you an honest read on whether the damage needs a targeted repair or something more extensive, and walk you through a clear, itemized quote before any work starts.",
  },
  {
    q: "Can you help with the insurance side of a hail damage claim?",
    a: "We can thoroughly document the damage we find, which is useful if you're filing a claim, and can talk through what we're seeing so you understand the extent of it. We can't make any promises about what your insurance company will approve — that decision is entirely up to your insurer and their adjuster.",
  },
];

const learnMore = {
  heading: "Hail Damage Roof Repair in Calgary — Inspect First, Repair Right",
  paragraphs: [
    "Hail damage is one of the most misleading kinds of roof damage, because it rarely announces itself. There's usually no hole, no obvious sag, nothing that jumps out from the sidewalk. What you're actually looking for is bruising — soft, dented spots where the impact knocked granules loose from the shingle — along with cracked or split shingles, dented flashing and vents, and granules building up in your gutters and downspouts. All of that is easy to miss unless someone is actually up on the roof looking for it, which is why a ground-level glance after a storm isn't a real inspection.",
    "Calgary sits in one of the most hail-prone parts of the country, so this isn't a once-a-decade concern — it's a normal part of owning a home here. After any significant hailstorm in your area, it's worth having your roof checked even if nothing looks wrong, because damage that goes unaddressed doesn't stay small. Water finds its way in through compromised shingles over time, turning what would have been a straightforward repair into a bigger, more expensive problem months down the line.",
    "When we inspect a roof for hail damage, we look at the whole roof, not just the section you're worried about, and we document what we find with photos so you have a clear picture of the actual condition. From there we give you an honest recommendation — a targeted repair, a fuller repair, or, if the damage is genuinely minor, we'll tell you that too instead of pushing work you don't need. If you're planning to file an insurance claim, our documentation can support that process, but we can't and won't promise what your insurer decides to approve.",
  ],
  highlights: [
    "Free, full-roof hail damage inspection",
    "Ground and roof-level assessment",
    "Photo documentation of findings",
    "Shingle, flashing, vent & gutter check",
    "Honest recommendation — repair only what's needed",
    "Clear, itemized quote before any work starts",
  ],
};

export default function HailDamageRepairPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Hail Damage Roof Repair Calgary"
        heroSubheadline="Free Hail Damage Inspection & Honest Repair for Calgary Roofs After a Storm"
        heroCta="Get a Free Inspection"
        serviceType="Hail Damage Repair"
        path="/hail-damage-repair"
        services={services}
        galleryPhotos={[
          { src: "/images/gallery/roofing/calgary-roofing-aerial-shingle-inspection-1.webp", alt: "Aerial roof inspection used to assess storm and hail damage on a Calgary home" },
          { src: "/images/gallery/roofing/calgary-roof-pipe-boot-flashing-repair-1.webp", alt: "Roof flashing repair after storm and hail damage on a Calgary shingle roof" },
        ]}
        learnMore={learnMore}
      />
      <FAQSection faqs={faqs} heading="Hail Damage Repair FAQ" subheading="What Calgary homeowners ask about hail and storm damage." />
    </>
  );
}
