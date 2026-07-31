import { SITE_URL, BUSINESS_NAME } from "@/lib/config";

interface ServiceSchemaProps {
  name: string;
  description: string;
  path: string; // e.g. "/roof-installation"
}

export default function ServiceSchema({ name, description, path }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} — ${BUSINESS_NAME}`,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "RoofingContractor",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "City", name: "Calgary", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Airdrie", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Cochrane", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Okotoks", addressRegion: "AB", addressCountry: "CA" },
      { "@type": "City", name: "Chestermere", addressRegion: "AB", addressCountry: "CA" },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
