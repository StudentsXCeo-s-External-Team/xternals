// app/join-us/open-recruitment/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const OTHER_PAGES = [
  { label: "Community", href: "/join-us/community", num: "01" },
  { label: "Volunteer", href: "/join-us/volunteer", num: "02" },
];

const ROLES = [
  {
    num: "A",
    title: "Board of Management",
    badge: "NOT OPEN",
    color: "red",
    desc: "Lead strategic initiatives and manage core divisions. Drive the organisation's vision from the top.",
    cta: "Learn More",
    responsibilities: ["Strategic planning", "Division leadership", "Stakeholder management"],
  },
  {
    num: "B",
    title: "Project Officers",
    badge: "NOT OPEN",
    color: "red",
    desc: "Own specific events and short-term projects end-to-end. Ideal for hands-on executors.",
    cta: "Apply Now",
    responsibilities: ["End-to-end event ownership", "Team coordination", "Budget management"],
  },
  {
    num: "C",
    title: "Division Staff",
    badge: "NOT OPEN",
    color: "red",
    desc: "Embed within a division and develop deep domain expertise. Great for aspiring specialists.",
    cta: "Explore Roles",
    responsibilities: ["Division-specific work", "Skill development", "Mentored growth"],
  },
];

export default function OpenRecruitmentPage() {
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
    <main className="min-h-screen font-sans overflow-x-hidden bg-[#0d0d0d]">

      {/* ── HERO — stays fully dark, no wave, cuts straight into content ── */}
      <section className="relative h-screen w-full bg-[#0d0d0d] flex flex-col justify-end pb-28 px-6 sm:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)` }} />

        {/* Ghost — left side this time */}
        <span ref={ghostRef} className="absolute left-[-2vw] top-1/2 text-[20vw] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.025)", transition: "transform 0.05s linear" }}>
          REC
        </span>

        {/* Blue BOTTOM stripe instead of side */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 z-30" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/join-us" className="text-zinc-600 text-xs tracking-widest uppercase hover:text-blue-400 transition-colors">Join Us</Link>
            <span className="text-zinc-700 text-xs">/</span>
            <span className="text-blue-400 text-xs tracking-widest uppercase font-bold">Open Recruitment</span>
          </div>

          <p className="text-blue-500 tracking-[0.5em] uppercase text-xs font-semibold mb-4">03 — Careers</p>
          <h1 className="text-[11vw] sm:text-[9vw] md:text-[7vw] font-black text-white uppercase leading-[0.88] tracking-tight mb-10">
            Open<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #2563eb" }}>Recruitment.</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Ready to step into leadership? We recruit annually for management roles — and on a rolling basis for everything else.
            </p>
            <div className="flex gap-6 text-white/35 text-xs tracking-widest uppercase font-semibold">
              {ROLES.map(r => (
                <a key={r.num} href={`#role-${r.num}`} className="hover:text-blue-400 transition-colors">{r.num} — {r.title.split(" ")[0]}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-14 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-14 bg-white animate-pulse" />
          <span className="text-white text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
        </div>
      </section>

      {/* ── ROLES — stays dark, editorial grid ── */}
      <section className="relative bg-[#0d0d0d] text-white px-6 sm:px-16 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 14px)` }} />
        <span className="absolute left-0 bottom-0 text-[14vw] font-black text-white/[0.025] leading-none select-none pointer-events-none">RECRUIT</span>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
            {ROLES.map(({ num, title, badge, color, desc, cta, responsibilities }) => (
              <div
                id={`role-${num}`}
                key={title}
                className="border-r border-white/10 last:border-r-0 p-10 flex flex-col gap-6 group hover:bg-white/[0.05] transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="text-6xl font-black text-white/8 leading-none">{num}</span>
                  <span className={`text-xs px-3 py-1 font-bold tracking-widest uppercase ${
                    color === "green"
                      ? "bg-green-500/10 text-green-400"
                      : color === "red"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-blue-500/10 text-blue-400"
                  }`}>{badge}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white leading-tight mb-3">{title}</h3>
                  <div className="h-[2px] w-8 bg-blue-600 mb-5 group-hover:w-16 transition-all duration-300" />
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{desc}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {responsibilities.map(r => (
                      <li key={r} className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="w-1 h-1 bg-blue-600 rounded-full shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="mt-auto text-sm font-bold text-white flex items-center gap-2 group-hover:gap-4 transition-all duration-300 hover:text-blue-400">
                  {cta} →
                </a>
              </div>
            ))}
          </div>

          {/* Timeline bar */}
          <div className="mt-16 border border-white/10 p-10">
            <p className="text-blue-400 text-xs tracking-widest uppercase font-bold mb-8">Recruitment Timeline</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                ["Jan — Mar", "Applications Open", "blue"],
                ["Apr", "Interviews", "white"],
                ["May", "Announcements", "white"],
                ["Jun", "Onboarding", "blue"],
              ].map(([period, label, accent]) => (
                <div key={label} className="flex flex-col gap-2">
                  <p className={`text-xs font-black tracking-widest uppercase ${accent === "blue" ? "text-blue-400" : "text-zinc-500"}`}>{period}</p>
                  <p className="text-white font-bold text-sm">{label}</p>
                  <div className={`h-[2px] w-8 ${accent === "blue" ? "bg-blue-600" : "bg-white/20"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0d0d0d] border-t border-white/10 px-6 sm:px-16 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-zinc-500 text-sm mb-1">Applications open periodically — don't miss the window.</p>
            <p className="text-white font-bold">Get notified when recruitment opens.</p>
          </div>
          <a href="#" className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-sm uppercase tracking-wider transition-colors duration-300">
            Get Notified
          </a>
        </div>
      </section>

      {/* ── EXPLORE OTHER PATHS — light section at the end ── */}
      <section className="bg-white px-6 sm:px-16 py-20">
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
