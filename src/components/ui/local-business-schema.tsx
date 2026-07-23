export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "RoofingContractor"],
    "@id": "https://www.fourbrothersexteriors.com",
    name: "Four Brothers Exteriors",
    alternateName: "Four Brothers Exteriors Calgary",
    description:
      "Calgary's trusted local roofing and exterior experts. Roof installation, roof repair, and siding services for Calgary homes and businesses. Honest pricing, licensed & insured, workmanship guarantee.",
    url: "https://www.fourbrothersexteriors.com",
    logo: "https://www.fourbrothersexteriors.com/icon.png",
    image: "https://www.fourbrothersexteriors.com/icon.png",
    telephone: "+15878919200",
    email: "info@fourbrothersexteriors.com",
    slogan: "Calgary's Trusted Roofing & Exterior Experts",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit, E-transfer",
    areaServed: [
      { "@type": "City", name: "Calgary", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Airdrie", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Cochrane", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Okotoks", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Chestermere", addressRegion: "AB", addressCountry: "CA" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.0447, longitude: -114.0719 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing & Exterior Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Installation", url: "https://www.fourbrothersexteriors.com/roof-installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair", url: "https://www.fourbrothersexteriors.com/roof-repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding & Exterior", url: "https://www.fourbrothersexteriors.com/siding-exterior" } },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
