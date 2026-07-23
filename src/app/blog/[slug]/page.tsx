import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import BlogPostLayout from "@/components/ui/blog-post-layout";

const siteUrl = "https://www.fourbrothersexteriors.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Four Brothers Exteriors" },
    publisher: {
      "@type": "Organization",
      name: "Four Brothers Exteriors",
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BlogPostLayout post={post} />
    </>
  );
}
