import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/roof-installation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/roof-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/siding-exterior`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hail-damage-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/insurance-claim-help`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/free-roof-inspection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
