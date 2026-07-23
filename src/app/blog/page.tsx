import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Roofing Blog | Tips & Guides for Calgary Homeowners",
  description:
    "Roofing tips, material guides, and honest advice for Calgary homeowners — roof materials, costs, hail damage, and when to renovate. From Four Brothers Exteriors.",
  keywords: [
    "roofing blog Calgary",
    "roofing tips Calgary",
    "Calgary roofing guide",
    "roof maintenance Calgary",
  ],
  alternates: { canonical: "https://www.fourbrothersexteriors.com/blog" },
  openGraph: {
    title: "Roofing Blog | Four Brothers Exteriors Calgary",
    description: "Roofing tips, material guides, and honest advice for Calgary homeowners.",
    url: "https://www.fourbrothersexteriors.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Four Brothers Exteriors — Roofing Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Blog | Four Brothers Exteriors Calgary",
    description: "Roofing tips, material guides, and honest advice for Calgary homeowners.",
    images: ["/og-image.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ background: "#080808", minHeight: "40vh" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37" }}>
            🏠 Roofing Tips &amp; Guides
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "0.01em" }}>
            The Four Brothers <span style={{ color: "#D4AF37" }}>Blog</span>
          </h1>
          <p className="text-gray-400 text-xl">Honest, practical roofing advice for Calgary homeowners.</p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}
              >
                <div className="relative aspect-video" style={{ background: "linear-gradient(155deg, #161616, #0a0a0a)" }}>
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail.src}
                      alt={post.thumbnail.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <ImageIcon size={26} style={{ color: "rgba(212,175,55,0.3)" }} />
                      <span className="text-gray-600 text-xs">Thumbnail coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={12} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                  <h2 className="text-lg font-black text-white mb-2 leading-snug group-hover:text-[#E8C766] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm font-bold" style={{ color: "#D4AF37" }}>
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
