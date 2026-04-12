// app/join-us/volunteer/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const OTHER_PAGES = [
  { label: "Community", href: "/join-us/community", num: "01" },
  { label: "Open Recruitment", href: "/join-us/open-recruitment", num: "03" },
];

export default function VolunteerPage() {
  const ghostRef = useRef<HTMLSpanElement>(null);

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
        <span ref={ghostRef} className="absolute right-[-2vw] top-1/2 text-[20vw] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.025)", transition: "transform 0.05s linear" }}>
          VOL
        </span>
        {/* Blue RIGHT stripe — differentiates from community page */}
        <div className="absolute top-0 right-0 w-[3px] h-full bg-blue-600" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/join-us" className="text-zinc-600 text-xs tracking-widest uppercase hover:text-blue-400 transition-colors">Join Us</Link>
            <span className="text-zinc-700 text-xs">/</span>
            <span className="text-blue-400 text-xs tracking-widest uppercase font-bold">Volunteer</span>
          </div>

          <p className="text-blue-500 tracking-[0.5em] uppercase text-xs font-semibold mb-4">02 — Contribute</p>
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-black text-white uppercase leading-[0.88] tracking-tight mb-10">
            Volunteer<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #2563eb" }}>With Us.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
            Give back and grow simultaneously. Shape events, lead projects, and build real skills that go beyond the classroom.
          </p>
        </div>

        <div className="absolute bottom-10 left-14 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-14 bg-white animate-pulse" />
          <span className="text-white text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
        </div>

        {/* Wave — to zinc-50 this time */}
        <div className="absolute bottom-0 left-0 w-full z-20" style={{ height: "180px" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(13,13,13,0.7) 40%, #fafafa 100%)" }} />
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "80px" }}>
            <path d="M0,60 C360,0 720,80 1080,20 C1260,0 1380,50 1440,60 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </section>

      {/* ── VOLUNTEER CONTENT: image left, text right ── */}
      <section className="relative w-full min-h-screen bg-zinc-50 flex flex-col lg:flex-row-reverse" style={{ marginTop: "-2px" }}>

        {/* Image / visual block */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-zinc-200 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[22vw] lg:text-[13vw] font-black text-zinc-300/50 leading-none select-none">02</span>
          </div>
          <div className="absolute top-0 right-0 w-[3px] h-full bg-blue-600" />
          {/* Image swap hint */}
          <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm px-3 py-1">
            <p className="text-white/60 text-[10px] tracking-widest uppercase">Replace with volunteer photo</p>
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 py-24 lg:py-0 relative">
          <span className="absolute top-8 left-4 text-[20vw] lg:text-[13vw] font-black text-zinc-200 leading-none select-none pointer-events-none">02</span>
          <div className="relative z-10 max-w-lg">
            <p className="text-blue-600 tracking-[0.4em] uppercase text-xs font-bold mb-6">Contribute</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-zinc-900 mb-8">
              Volunteer<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #18181b" }}>With Us</span>
            </h2>
            <div className="h-[3px] w-16 bg-blue-600 mb-8" />
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              We are always looking for passionate individuals to help organise events, manage projects, and drive our initiatives forward. Every role is hands-on and high-impact.
            </p>

            {/* Role tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["Event Planning","Project Management","Community Building","Content Creation","Logistics","Design"].map(tag => (
                <span key={tag} className="border border-zinc-300 text-zinc-600 text-xs px-4 py-2 font-semibold tracking-wide hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-4 text-zinc-900 font-bold uppercase text-sm tracking-wider hover:text-blue-600 transition-colors duration-300 group/link border-b-2 border-zinc-900 hover:border-blue-600 pb-1">
              View Open Positions
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL GAIN ── */}
      <section className="bg-[#0d0d0d] px-6 sm:px-16 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)` }} />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <p className="text-blue-400 tracking-[0.4em] uppercase text-xs font-bold mb-12">What You'll Gain</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              ["Real Experience", "Run actual events with real stakes, real teams, and real outcomes."],
              ["Leadership Skills", "Step into coordinator and lead roles earlier than most of your peers."],
              ["Your Network", "Meet CEOs, executives, and ambitious peers at every event you run."],
              ["A Portfolio", "Walk away with documented projects that speak louder than a GPA."],
            ].map(([title, desc], i) => (
              <div key={title} className="border-r border-white/10 last:border-r-0 p-8 group hover:bg-white/5 transition-colors duration-300">
                <p className="text-[10px] text-zinc-600 font-black tracking-widest mb-4">0{i + 1}</p>
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <div className="h-[2px] w-6 bg-blue-600 mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER PATHS ── */}
      <section className="bg-white px-6 sm:px-16 py-20 border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-blue-600 tracking-[0.4em] uppercase text-xs font-bold mb-8">Other Ways to Join</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-zinc-200">
            {OTHER_PAGES.map(({ label, href, num }) => (
              <Link key={label} href={href} className="group flex items-center justify-between p-8 border-b sm:border-b-0 sm:border-r last:border-0 hover:bg-zinc-50 transition-colors duration-300">
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