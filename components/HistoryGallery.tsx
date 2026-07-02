"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export function HistoryGallery({ photos }: { photos: string[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const prev = useCallback(() => setIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIndex((i) => ((i ?? 0) + 1) % photos.length), [photos.length]);
  const close = useCallback(() => setIndex(null), []);

  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = index !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [index]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {photos.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 cursor-zoom-in group"
          >
            <Image src={src} alt={`Archive photo ${idx + 1}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl leading-none transition-colors z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 text-white/40 text-xs tracking-widest uppercase z-10">
            {index + 1} / {photos.length}
          </div>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[80vh] aspect-video mx-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[index]}
              alt={`Archive photo ${index + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white/50 transition-all text-xl"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white/50 transition-all text-xl"
            aria-label="Next"
          >
            ›
          </button>

          {/* Dot nav */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={`h-[3px] transition-all duration-300 ${i === index ? "w-6 bg-sxc-skyblue" : "w-3 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
