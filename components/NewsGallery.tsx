"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function NewsGallery({ images, title }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="mt-14">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 w-10 bg-blue-600" />
        <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Gallery</span>
        <span className="ml-auto text-xs text-zinc-400 tabular-nums">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Main image viewer */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100">
        <Image
          key={current}
          src={images[current]}
          alt={`${title} — image ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
        />

        {/* Only show arrows if more than 1 image */}
        {images.length > 1 && (
          <>
            {/* Left arrow */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-2 bg-blue-600"
                    : "w-2 h-2 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip — only if more than 2 images */}
      {images.length > 2 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                i === current
                  ? "ring-2 ring-blue-600 ring-offset-1 opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}