"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Calendar } from "lucide-react";
import { BlogPost, getRelatedPosts } from "@/lib/blog-posts";

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2 my-2"
      style={{
        minHeight: 220,
        background: "linear-gradient(155deg, #161616, #0a0a0a)",
        border: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <ImageIcon size={28} style={{ color: "rgba(212,175,55,0.35)" }} />
      <span className="text-gray-500 text-sm text-center px-6">{caption} — photo coming soon</span>
    </div>
  );
}

function ContentImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-2">
      <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 260, border: "1px solid rgba(212,175,55,0.2)" }}>
        <Image src={src} alt={alt} width={900} height={600} className="w-full h-full object-cover" />
      </div>
      <figcaption className="text-gray-500 text-xs text-center mt-2">{caption}</figcaption>
    </figure>
  );
}

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post);
  const formattedDate = new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      {/* HERO — image/text overlay */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          minHeight: "48vh",
          background: post.heroImage ? undefined : "linear-gradient(160deg, #141414 0%, #0a0a0a 60%, #050f0c 100%)",
        }}
      >
        {post.heroImage ? (
          <>
            <Image
              src={post.heroImage.src}
              alt={post.heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.92) 100%)" }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
            />
            <div className="absolute top-6 right-6 flex items-center gap-2 text-xs text-gray-600">
              <ImageIcon size={14} />
              <span>Featured image coming soon</span>
            </div>
          </>
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Calendar size={14} />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ letterSpacing: "0.01em" }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-content space-y-5 text-gray-300 leading-relaxed">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-black text-white mt-10 mb-2">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p") {
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "image") {
                return block.src ? (
                  <ContentImage key={i} src={block.src} alt={block.alt ?? block.caption} caption={block.caption} />
                ) : (
                  <ImagePlaceholder key={i} caption={block.caption} />
                );
              }
              if (block.type === "cta") {
                return (
                  <div key={i} className="pt-4">
                    <Link href="/#contact" className="btn-gold inline-block px-8 py-4 text-base font-black">
                      {block.label} →
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="section" style={{ background: "linear-gradient(160deg, #0f2b21 0%, #071711 55%, #050f0c 100%)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading">Related <span>Reading</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)" }}
                >
                  <h3 className="text-lg font-black text-white mb-2 leading-snug">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.excerpt}</p>
                  <span className="inline-block mt-3 text-sm font-bold" style={{ color: "#D4AF37" }}>
                    Read More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
