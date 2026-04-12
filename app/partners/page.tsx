// app/partners/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { sponsors } from "@/data/sponsor";
import { mediaPartners } from "@/data/mediapartners";
import Image from "next/image";

// ── Data ──────────────────────────────────────────────────────────
// Replace placeholder arrays with real logo imports when ready
// ── Logo card ─────────────────────────────────────────────────────
function LogoCard({ label, size = "md", image, }: { label: string; size?: "lg" | "md" | "sm"; image: string;}) {
  const pad = size === "lg" ? "p-8" : size === "md" ? "p-6" : "p-5";
  return (
    <div className={`group relative z-10 aspect-[3/2] bg-white border border-zinc-100 ${pad} flex items-center justify-center overflow-hidden`}>
      {/* Logo placeholder — swap with <Image> */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Image
          src={image}
          alt="partners"
          width={600}
          height={400}
          className="object-contain max-w-full h-auto"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
        />
      </div>
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

// ── Section divider label ─────────────────────────────────────────
function SectionDivider({ number, label, light = false }: { number: string; label: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-5 mb-14 ${light ? "text-white" : "text-zinc-900"}`}>
      <span className={`text-xs font-black tracking-[0.3em] uppercase ${light ? "text-blue-400" : "text-blue-600"}`}>{number}</span>
      <div className={`h-[1px] w-10 ${light ? "bg-blue-400" : "bg-blue-600"}`} />
      <h2 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${light ? "text-white" : "text-zinc-900"}`}>{label}</h2>
      <div className={`h-[1px] flex-grow ${light ? "bg-white/10" : "bg-zinc-100"}`} />
    </div>
  );
}

export default function PartnersPage() {
  const ghostRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ghostRef.current) {
        ghostRef.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.12}px))`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans overflow-x-hidden bg-white text-zinc-900">

      {/* ══════════════════════════════════════════
          HERO — full dark viewport
          ══════════════════════════════════════════ */}
      <section className="relative h-screen w-full bg-[#0d0d0d] flex flex-col justify-end pb-28 px-6 sm:px-16 overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.045]" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)`
        }} />

        {/* Ghost text parallax */}
        <span
          ref={ghostRef}
          className="absolute right-[-2vw] top-1/2 text-[22vw] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.028)", transition: "transform 0.05s linear" }}
        >
          SXC
        </span>

        {/* Blue left stripe */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-blue-600" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <p className="text-blue-500 tracking-[0.5em] uppercase text-xs font-semibold mb-6">
            StudentsxCEOs Jakarta
          </p>

          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-black text-white uppercase leading-[0.88] tracking-tight mb-10">
            Our<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #2563eb" }}>
              Partners.
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              We collaborate with leading companies and organisations to bridge the gap between students and industry leaders.
            </p>
            <div className="flex gap-8 text-white/35 text-xs tracking-widest uppercase font-semibold">
              <a href="#corporate" className="hover:text-blue-400 transition-colors">01 — Previous Corporate</a>
              <a href="#media" className="hover:text-blue-400 transition-colors">02 — Previous Media</a>
              <a href="#community" className="hover:text-blue-400 transition-colors">03 — Previous Community</a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-14 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-14 bg-white animate-pulse" />
          <span className="text-white text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 w-full z-20" style={{ height: "180px" }}>
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(13,13,13,0.7) 40%, #ffffff 100%)"
          }} />
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80"
            preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "80px" }}>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          01 — PREVIOUS CORPORATE PARTNERS
          Full-width, generous grid
          ══════════════════════════════════════════ */}
      <section id="corporate" className="relative bg-white py-24 sm:py-32 px-6 sm:px-16" style={{ marginTop: "-2px" }}>
        {/* Ghost number */}
        <span className="absolute top-8 right-8 text-[15vw] font-black text-zinc-100 leading-none select-none pointer-events-none">01</span>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionDivider number="01" label="Previous Corporate Partners" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-zinc-100">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="border-r border-b border-zinc-100 last:border-r-0">
                <LogoCard label={sponsor.name} image={sponsor.image} size="lg" />

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02 — PREVIOUS MEDIA PARTNERS
          Dark band — visual contrast break
          ══════════════════════════════════════════ */}
      <section id="media" className="relative bg-[#0d0d0d] py-24 sm:py-32 px-6 sm:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)`
        }} />
        <span className="absolute top-8 right-8 text-[15vw] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.03)" }}>02</span>
        <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600" />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionDivider number="02" label="Previous Media Partners" light />

          {/* Larger cards for media — showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-white/10">
            {mediaPartners.map((media) => (
              <div key={media.id} className="border-r border-b border-white/10 last:border-r-0">
                <div className="group relative aspect-[3/2] bg-transparent flex items-center justify-center overflow-hidden border-0">
                  <Image
                    src={media.image}
                    alt={media.alt}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          03 — PREVIOUS COMMUNITY PARTNERS
          Light section, staggered grid
          ══════════════════════════════════════════ */}
      <section id="community" className="relative bg-zinc-50 py-24 sm:py-32 px-6 sm:px-16 overflow-hidden">
        <span className="absolute top-8 right-8 text-[15vw] font-black text-zinc-200 leading-none select-none pointer-events-none">03</span>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionDivider number="03" label="Previous Community Partners" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border border-zinc-200">
            {mediaPartners.map((media) => (
              <div key={media.id} className="border-r border-b border-zinc-200 last:border-r-0">
                <LogoCard label={media.name} image={media.image} size="md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — full-bleed dark, no rounded corners
          ══════════════════════════════════════════ */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.045]" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)`
        }} />
        {/* Blue glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-3xl rounded-full" />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600" />

        {/* Ghost text */}
        <span className="absolute left-0 bottom-0 text-[14vw] font-black leading-none select-none pointer-events-none translate-y-2" style={{ color: "rgba(255,255,255,0.025)" }}>
          PARTNER
        </span>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-16 py-28 sm:py-36">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <p className="text-blue-400 tracking-[0.4em] uppercase text-xs font-bold mb-6">Partner</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white mb-0">
                Collaborate<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #2563eb" }}>With Us.</span>
              </h2>
            </div>

            <div className="max-w-lg">
              <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                Interested in collaborating with StudentsxCEOs Jakarta? We are always open to new partnerships that bring real value to our student community and your organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 transition-colors duration-300 uppercase text-sm tracking-wider">
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-blue-600 text-white font-bold px-8 py-4 transition-colors duration-300 uppercase text-sm tracking-wider">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
