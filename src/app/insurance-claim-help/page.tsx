import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Roof Insurance Claim Help Calgary | Damage Documentation",
  description:
    "Roof insurance claim help for Calgary homeowners — thorough damage documentation and honest guidance through the claims process. Call (587) 891-9200.",
  keywords: ["roof insurance claim Calgary", "roof damage documentation Calgary", "insurance adjuster roof Calgary", "storm damage insurance claim Calgary", "roof claim help Calgary"],
  alternates: { canonical: `${SITE_URL}/insurance-claim-help` },
  openGraph: {
    title: "Roof Insurance Claim Help Calgary | Four Brothers Exteriors",
    description: "Thorough roof damage documentation and honest guidance through the insurance claims process for Calgary homeowners. Call (587) 891-9200.",
    url: `${SITE_URL}/insurance-claim-help`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Four Brothers Exteriors — Roof Insurance Claim Help Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Insurance Claim Help Calgary | Four Brothers Exteriors",
    description: "Thorough roof damage documentation and honest guidance through the insurance claims process for Calgary homeowners. Call (587) 891-9200.",
    images: ["/og-image.png"],
  },
};

const services = [
  { title: "Roof Damage Documentation", desc: "", bullets: ["★ Detailed Photos", "★ Written Damage Notes", "★ Full-Roof Assessment", "★ Ready for Your Adjuster"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Roof damage documentation for insurance claim in Calgary" },
  { title: "Claim Process Guidance", desc: "", bullets: ["★ Plain-Language Explanations", "★ What to Expect Next", "★ Your Role vs. Ours", "★ No-Pressure Advice"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Roof insurance claim process guidance for Calgary homeowners" },
  { title: "Adjuster Meeting Support", desc: "", bullets: ["★ We Can Meet Your Adjuster On-Site", "★ Point to Documented Damage", "★ Answer Roofing Questions", "★ Honest, Straightforward Input"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Roof contractor meeting insurance adjuster on-site in Calgary" },
  { title: "Storm & Hail Damage Assessment", desc: "", bullets: ["★ Hail & Wind Damage Check", "★ Full Roof Evaluation", "★ Honest Findings", "★ No Obligation"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Storm and hail damage assessment for insurance claim Calgary" },
  { title: "Repairs After Your Claim Is Settled", desc: "", bullets: ["★ Scope Matched to Approved Work", "★ Quality Materials", "★ Workmanship Guarantee", "★ Clear, Itemized Pricing"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Roof repair after insurance claim settlement Calgary" },
];

const faqs = [
  {
    q: "How does a roof insurance claim actually work?",
    a: "Generally, you report the damage to your insurance company, they assign an adjuster to assess it, and the adjuster determines what your policy covers based on their findings and your coverage terms. Our role is to inspect your roof, document the damage thoroughly, and give you an honest, detailed picture of its condition — the actual claim decision is made entirely by your insurance company.",
  },
  {
    q: "What's the difference between the contractor's role and the homeowner's role in a claim?",
    a: "You're the one who reports the claim to your insurer and communicates with them about your policy and coverage — that's not something a contractor can do on your behalf. Our role is to inspect the roof, document what we find, and be available to answer roofing-specific questions if your adjuster has them. Think of us as support for the technical side, not a replacement for your conversation with your insurance company.",
  },
  {
    q: "What does an adjuster typically look for on a roof?",
    a: "Adjusters are generally checking for evidence of the specific damage being claimed — things like hail bruising, cracked or missing shingles, damaged flashing, or wind-related lifting — and assessing whether it matches the storm event and your policy's coverage. Having clear, thorough documentation of the roof's condition makes that assessment easier for everyone involved.",
  },
  {
    q: "Why does documentation matter so much for a claim?",
    a: "Damage like hail bruising or granule loss isn't always easy to see later, especially once weather or time has passed. Detailed photos and notes taken close to when the damage happened give both you and your insurer a clear, accurate record to work from, instead of relying on memory or a quick visual check.",
  },
  {
    q: "Can you guarantee my insurance claim will be approved?",
    a: "No — and you should be skeptical of any contractor who tells you otherwise. Claim approval is decided entirely by your insurance company based on your policy and their adjuster's assessment. What we can do is give you a thorough, honest inspection and clear documentation to support your claim, not a guaranteed outcome.",
  },
  {
    q: "Do you handle the repairs once a claim is approved?",
    a: "Yes. Once your claim is settled, we can complete the repair or replacement work with a clear, itemized quote based on the approved scope, backed by our workmanship guarantee.",
  },
];

const learnMore = {
  heading: "Roof Insurance Claim Help for Calgary Homeowners — Honest, No Guarantees",
  paragraphs: [
    "Filing a roof insurance claim can feel confusing if you've never done it before, and it's worth being clear up front about who does what. You're the one who reports the claim and communicates with your insurance company about your policy and coverage — no contractor can do that part for you. What we can do is the technical side: a thorough inspection of your roof, detailed photo documentation of any damage we find, and honest, plain-language explanations of what that damage actually is and how it likely happened.",
    "Insurance adjusters are generally looking to match visible damage against the storm event and your policy's terms — hail bruising, cracked or missing shingles, damaged flashing, wind-lifted sections, that kind of thing. Documentation matters because damage like granule loss can become harder to assess as time passes, so having clear photos and notes taken soon after the storm gives both you and your insurer something concrete to work from. If it's useful, we're also available to be on-site when your adjuster inspects the roof, to answer roofing-specific questions.",
    "Here's the part we won't budge on: we can't and won't promise you what your insurance company will approve. Anyone who guarantees a claim outcome before your adjuster has even looked at the roof isn't being straight with you. What we can promise is an honest assessment, real documentation, and — if your claim is approved — quality repair or replacement work with a clear, itemized quote and our workmanship guarantee.",
  ],
  highlights: [
    "Thorough roof damage documentation with photos",
    "Plain-language guidance on the claims process",
    "Available to meet your adjuster on-site",
    "Honest assessment — no guaranteed outcomes, ever",
    "Repairs completed after your claim is settled",
    "Free, no-obligation roof inspection to start",
  ],
};

export default function InsuranceClaimHelpPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Roof Insurance Claim Help Calgary"
        heroSubheadline="Thorough Damage Documentation & Honest Guidance Through the Claims Process"
        heroCta="Get Help With My Claim"
        serviceType="Insurance Claim Help"
        path="/insurance-claim-help"
        services={services}
        galleryPhotos={[
          { src: "/images/gallery/roofing/calgary-roof-vent-flashing-installation-1.webp", alt: "Roof vent flashing checked as part of an insurance claim assessment in Calgary" },
          { src: "/images/gallery/roofing/calgary-roofer-shingle-installation-workmanship-1.webp", alt: "Four Brothers Exteriors roofer documenting roof condition for a Calgary insurance claim" },
        ]}
        learnMore={learnMore}
      />
      <FAQSection faqs={faqs} heading="Insurance Claim Help FAQ" subheading="What Calgary homeowners ask about roof insurance claims." />
    </>
  );
}
