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
];

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
      />
      <FAQSection faqs={faqs} heading="Siding & Exterior FAQ" subheading="What Calgary homeowners ask about siding and exterior upgrades." />
    </>
  );
}
