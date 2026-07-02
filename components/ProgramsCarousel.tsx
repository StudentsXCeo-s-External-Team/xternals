"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { PROGRAMS } from "@/data/programs";

export function ProgramsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const sync = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = scrollRef.current;
    el?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-program-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <div className="relative mt-10">
      {/* Prev arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Previous"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg transition-all duration-200 ${canLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Next"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg transition-all duration-200 ${canRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ›
      </button>

      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PROGRAMS.map((program) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            data-program-card
            className="group relative flex-none w-[80vw] sm:w-[44vw] lg:w-[calc(20%-1rem)] h-[520px] sm:h-[600px] overflow-hidden bg-zinc-900"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={program.cover}
              alt={program.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-sxc-skyblue px-3 py-1 text-sxc-navy text-sm font-semibold whitespace-nowrap">
              {program.badge}
            </div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h4 className="text-lg font-semibold text-white">{program.title}</h4>
              <p className="mt-2 text-sm text-white/80">{program.excerpt}</p>
              <div className="mt-4 inline-flex h-10 items-center justify-center bg-sxc-skyblue text-sxc-navy px-5 text-sm font-semibold">
                {program.month}
              </div>
              <p className="mt-3 text-xs text-white/70">{program.audience}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
