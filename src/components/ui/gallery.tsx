"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryProps {
  photos: GalleryPhoto[];
  columns?: number;
}

export default function Gallery({ photos, columns = 4 }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + photos.length) % photos.length);
  const next = () => setLightbox((i) => (i! + 1) % photos.length);

  const colClass =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  return (
    <>
      <div className={`grid ${colClass} gap-3`}>
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            style={{ border: "1px solid rgba(255,215,0,0.1)" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <ChevronRight size={40} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full mx-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-auto mx-auto rounded-xl"
            />
            <p className="text-center text-gray-400 text-sm mt-3">{photos[lightbox].alt}</p>
          </div>
          <div className="absolute bottom-4 text-gray-500 text-sm">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
