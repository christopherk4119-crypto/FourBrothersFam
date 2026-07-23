import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "Siding & Exterior Services Calgary | Siding Installation & Repair",
  description:
    "Professional siding and exterior upgrades for Calgary homes. Protect and improve your home's appearance with durable, weather-resistant materials. Call (587) 891-9200.",
  keywords: ["siding Calgary", "siding installation Calgary", "vinyl siding Calgary", "exterior renovation Calgary", "fascia soffit Calgary"],
  alternates: { canonical: "https://www.fourbrothersexteriors.com/siding-exterior" },
  openGraph: {
    title: "Siding & Exterior Services Calgary | Four Brothers Exteriors",
    description: "Professional siding and exterior upgrades to protect and improve your home's appearance. Call (587) 891-9200.",
    url: "https://www.fourbrothersexteriors.com/siding-exterior",
  },
};

const services = [
  { title: "Vinyl Siding Installation", desc: "", bullets: ["★ Wide Color Selection", "★ Low Maintenance", "★ Weather-Resistant", "★ Full Installation"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Vinyl siding installation Calgary" },
  { title: "Hardie & Fiber Cement Siding", desc: "", bullets: ["★ Durable & Fire-Resistant", "★ Premium Finish", "★ Long Lifespan", "★ Increases Home Value"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Hardie fiber cement siding installation Calgary" },
  { title: "Fascia & Soffit", desc: "", bullets: ["★ Ventilation & Protection", "★ Rot Repair", "★ Matched to Your Home", "★ Pest Prevention"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Fascia and soffit installation Calgary" },
  { title: "Eavestrough & Gutters", desc: "", bullets: ["★ Seamless Eavestrough", "★ Downspout Placement", "★ Ice Dam Prevention", "★ Foundation Protection"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Eavestrough and gutter installation Calgary" },
  { title: "Exterior Upgrades", desc: "", bullets: ["★ Trim & Fascia Boards", "★ Exterior Repairs", "★ Curb Appeal Upgrades", "★ Storm Damage Restoration"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Exterior home upgrades Calgary" },
];

const faqs = [
  {
    q: "What's the best siding material for Calgary's climate?",
    a: "Vinyl siding is a popular, cost-effective choice that handles temperature swings well, while fiber cement (Hardie board) offers superior durability and a premium look at a higher price point. We'll walk you through the trade-offs based on your budget and how long you plan to stay in the home.",
  },
  {
    q: "How long does siding installation take?",
    a: "Most residential siding jobs take a few days to a week depending on the size of the home, the material chosen, and weather conditions. We'll give you a clear timeline as part of your free quote.",
  },
  {
    q: "Can you match new siding to my existing exterior?",
    a: "Yes — for repairs or partial replacements we do our best to match existing siding color and profile. For full exterior upgrades, we'll help you choose a look that fits your home and neighborhood.",
  },
  {
    q: "Do you repair damaged fascia and soffit?",
    a: "Yes. Damaged or rotting fascia and soffit are common entry points for pests and moisture. We repair or replace them to protect your roofline and keep your attic properly ventilated.",
  },
  {
    q: "How much does siding cost in Calgary?",
    a: "Cost depends on the size of your home, material choice, and the condition of the existing exterior. We provide a clear, itemized, no-obligation quote before any work begins.",
  },
  {
    q: "I want to renew my roof covering — what should I know?",
    a: "No matter which roofing or siding material you switch to, the quality of the installation is what actually determines whether it holds up. Even first-quality materials will fail early if the workmanship is wrong — that's why we focus as much on how it's installed as what it's made of.",
  },
];

const learnMore = {
  heading: "Siding & Exterior Upgrades That Protect the Whole House",
  paragraphs: [
    "Siding does more than change the look of your home — it's the first line of defense against Calgary's wind, hail, and moisture. We install vinyl siding for homeowners who want a durable, low-maintenance option in a wide range of colors, and fiber cement (Hardie board) for those who want a premium, fire-resistant finish that holds up longer and adds real resale value. Either way, the material is only half the equation: proper house wrap, flashing around windows and doors, and correct fastening spacing are what actually keep water out. We don't cut corners on the parts you can't see once the siding is up.",
    "Fascia, soffit, and eavestrough are part of the same system as your roof and siding, even though they're often sold as separate jobs by other contractors. Damaged or rotting fascia and soffit are one of the most common entry points for pests and moisture into your attic, and worn gutters that overflow or pull away from the house send water straight down your siding and into your foundation. We look at the whole exterior envelope together, so a siding job doesn't leave a gap in your roofline unaddressed.",
    "For repairs or partial replacements, we do our best to match your existing siding color and profile so new sections blend in. For full exterior upgrades or storm damage restoration, we'll walk you through options that fit both your home's style and your budget — and give you a clear, itemized quote before any work begins.",
  ],
  highlights: [
    "Vinyl and Hardie fiber cement siding",
    "Proper house wrap and flashing, not just panels",
    "Fascia, soffit & eavestrough included",
    "Color and profile matching for repairs",
    "Storm damage restoration",
    "Free, no-obligation quotes",
  ],
};

export default function SidingExteriorPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Siding & Exterior Services Calgary"
        heroSubheadline="Professional Siding & Exterior Upgrades to Protect and Improve Your Home's Appearance"
        heroCta="Get Siding Quote"
        serviceType="Siding & Exterior"
        services={services}
        galleryPhotos={[]}
        learnMore={learnMore}
      />
      <FAQSection faqs={faqs} heading="Siding & Exterior FAQ" subheading="What Calgary homeowners ask about siding and exterior upgrades." />
    </>
  );
}
