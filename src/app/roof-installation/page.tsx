import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";
import FAQSection from "@/components/ui/faq-section";

export const metadata: Metadata = {
  title: "Roof Installation Calgary | New Roof Installs",
  description:
    "New roof installations for Calgary homes and commercial buildings. Durable materials built for Calgary weather, honest pricing, licensed & insured. Call (587) 891-9200.",
  keywords: ["roof installation Calgary", "new roof Calgary", "roof replacement Calgary", "shingle roof installation Calgary", "commercial roofing Calgary"],
  alternates: { canonical: "https://www.fourbrothersexteriors.com/roof-installation" },
  openGraph: {
    title: "Roof Installation Calgary | Four Brothers Exteriors",
    description: "New roof installations for Calgary homes and businesses. Durable materials, honest pricing. Call (587) 891-9200.",
    url: "https://www.fourbrothersexteriors.com/roof-installation",
  },
};

const services = [
  { title: "Asphalt Shingle Roofing", desc: "", bullets: ["★ Full Tear-Off & Install", "★ Wide Range of Colors", "★ Built for Calgary Weather", "★ Manufacturer Warranties"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Asphalt shingle roof installation in Calgary" },
  { title: "Metal Roofing", desc: "", bullets: ["★ Longer Lifespan", "★ Snow & Hail Resistant", "★ Energy Efficient", "★ Residential & Commercial"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Metal roof installation in Calgary" },
  { title: "New Construction Roofing", desc: "", bullets: ["★ Builder & Contractor Partnerships", "★ On-Schedule Installs", "★ Permits Handled", "★ Quality Materials"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "New construction roofing for Calgary homes" },
  { title: "Full Roof Replacement", desc: "", bullets: ["★ Old Roof Removal", "★ Deck Inspection & Repair", "★ Underlayment & Flashing", "★ Complete Cleanup"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Full roof replacement service Calgary" },
  { title: "Commercial Roof Installation", desc: "", bullets: ["★ Flat & Low-Slope Roofing", "★ Durable Membrane Systems", "★ Minimal Business Disruption", "★ Free Estimates"], bg: "linear-gradient(160deg,#141414,#0a0a0a)", alt: "Commercial roof installation Calgary" },
];

const faqs = [
  {
    q: "How long does a roof installation take in Calgary?",
    a: "Most residential roof installations take 1–3 days depending on the size, pitch, and complexity of the roof, plus weather conditions. We'll give you a realistic timeline as part of your free quote so you know exactly what to expect.",
  },
  {
    q: "What roofing materials work best for Calgary's climate?",
    a: "Calgary weather means heavy snow load, hail, freeze-thaw cycles, and strong winds. Impact-resistant asphalt shingles and metal roofing both perform well here. We'll walk you through the trade-offs — cost, lifespan, and hail resistance — so you can pick the right material for your home and budget.",
  },
  {
    q: "Do I need a permit for a new roof installation in Calgary?",
    a: "Simple like-for-like re-roofs generally don't require a permit, but structural changes or new construction do. We handle all necessary permitting on your behalf so you don't have to navigate the City of Calgary process yourself.",
  },
  {
    q: "How much does a full roof replacement cost in Calgary?",
    a: "Cost depends on roof size, pitch, material, and the condition of the existing deck. We provide a clear, itemized, no-obligation quote before any work begins — no hidden fees, no surprise add-ons partway through the job.",
  },
  {
    q: "Do you offer warranties on new roof installations?",
    a: "Yes. New installations are backed by both manufacturer material warranties and our own workmanship guarantee, so you're covered on the materials and the labor.",
  },
];

export default function RoofInstallationPage() {
  return (
    <>
      <ServicePageLayout
        heroHeadline="Roof Installation Calgary"
        heroSubheadline="New Roof Installations for Homes & Commercial Buildings | Durable Materials Built for Calgary Weather"
        heroCta="Get Installation Quote"
        serviceType="Roof Installation"
        services={services}
        galleryPhotos={[]}
      />
      <FAQSection faqs={faqs} heading="Roof Installation FAQ" subheading="What Calgary homeowners ask before a new roof install." />
    </>
  );
}
