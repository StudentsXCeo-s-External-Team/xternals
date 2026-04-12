// app/join-us/community/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const OTHER_PAGES = [
  { label: "Volunteer", href: "/join-us/volunteer", num: "02" },
  { label: "Open Recruitment", href: "/join-us/open-recruitment", num: "03" },
];

export default function CommunityPage() {
  const ghostRef = useRef<HTMLSpanElement>(null);
  const [showClosed, setShowClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (ghostRef.current)
        ghostRef.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.13}px))`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative h-screen w-full bg-[#0d0d0d] flex flex-col justify-end pb-28 px-6 sm:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)` }} />
        <span ref={ghostRef} className="absolute right-[-2vw] top-1/2 text-[24vw] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.025)", transition: "transform 0.05s linear" }}>
          SXC
        </span>
        <div className="absolute top-0 left-0 w-[3px] h-full bg-blue-600" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <Link href="/join-us" className="text-zinc-600 text-xs tracking-widest uppercase hover:text-blue-400 transition-colors">Join Us</Link>
            <span className="text-zinc-700 text-xs">/</span>
            <span className="text-blue-400 text-xs tracking-widest uppercase font-bold">Community</span>
          </div>

          <p className="text-blue-500 tracking-[0.5em] uppercase text-xs font-semibold mb-4">01 — Membership</p>
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-black text-white uppercase leading-[0.88] tracking-tight mb-10">
            Join Our<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #2563eb" }}>Community.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
            Become a member of a network built on ambition, leadership, and the belief that tomorrow's CEOs are in university today.
          </p>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 right-14 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-14 bg-white animate-pulse" />
          <span className="text-white text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 w-full z-20" style={{ height: "180px" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(13,13,13,0.7) 40%, #ffffff 100%)" }} />
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "80px" }}>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── MEMBERSHIP CONTENT ── */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-white" style={{ marginTop: "-2px" }}>

        {/* Left: text */}
        <div className="relative w-full lg:w-[55%] bg-white flex flex-col justify-center px-8 sm:px-16 py-24 lg:py-32">
          <span className="absolute top-8 left-4 text-[20vw] lg:text-[13vw] font-black text-zinc-100 leading-none select-none pointer-events-none">01</span>
          <div className="relative z-10 max-w-lg">
            <p className="text-blue-600 tracking-[0.4em] uppercase text-xs font-bold mb-6">Membership</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-zinc-900 mb-8">
              Become<br />a Member
            </h2>
            <div className="h-[3px] w-16 bg-blue-600 mb-8" />
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              Join a network of ambitious students and future leaders. Gain exclusive access to events, mentorship programs, and a community that relentlessly pushes you forward.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 pb-12 border-b border-zinc-100">
              {[["50+","Events / yr"],["200+","Members"],["100+","CEO Links"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-4xl font-black text-zinc-900 leading-none">{n}</p>
                  <p className="text-xs text-zinc-400 mt-2 uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowClosed(true)}
              className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 transition-colors duration-300 uppercase text-sm tracking-wider"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            {showClosed && (
              <p className="mt-4 text-sm font-bold tracking-widest uppercase text-red-500">
                Currently Not Open
              </p>
            )}
          </div>
        </div>

        {/* Right: dark benefits */}
        <div className="w-full lg:w-[45%] bg-[#0d0d0d] flex flex-col justify-center px-8 sm:px-16 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)` }} />
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600" />
          <div className="relative z-10">
            <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-10">Why join?</p>
            <ul className="space-y-8">
              {[
                ["Priority Access","First in line for flagship events, workshops, and exclusive SxC experiences."],
                ["CEO Network","Direct connections to industry leaders across Jakarta and beyond."],
                ["Skill Workshops","Hands-on sessions covering leadership, strategy, and business acumen."],
                ["Mentorship","One-on-one guidance from professionals who've been where you want to go."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-5">
                  <span className="text-blue-600 font-black text-lg mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="text-white font-bold mb-1">{title}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER PATHS ── */}
      <section className="bg-zinc-50 px-6 sm:px-16 py-20 border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-blue-600 tracking-[0.4em] uppercase text-xs font-bold mb-8">Other Ways to Join</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-zinc-200">
            {OTHER_PAGES.map(({ label, href, num }) => (
              <Link key={label} href={href} className="group flex items-center justify-between p-8 border-b sm:border-b-0 sm:border-r last:border-0 hover:bg-white transition-colors duration-300">
                <div>
                  <p className="text-[10px] text-zinc-400 font-black tracking-widest mb-2">{num}</p>
                  <h3 className="text-2xl font-black uppercase text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">{label}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-zinc-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
