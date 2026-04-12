// app/our-people/page.tsx
// ─────────────────────────────────────────────────────────────────
// ARCHITECTURE (OOP-style thinking):
//   PersonCard      → "class"  (photo card template)
//   BoardMemberCard → "class"  (text-only card template)
//   EXECUTIVES      → instances of PersonCard (executive variant)
//   MANAGEMENT      → instances of PersonCard (management variant)
//   BOARD_MEMBERS   → instances of BoardMemberCard
//   OurPeoplePage   → "orchestrator" (renders all instances)
//
// To add/remove a person: edit people-data.ts only.
// ─────────────────────────────────────────────────────────────────

import { Metadata } from "next";
import { PersonCard, BoardMemberCard } from "@/components/PersonCard";
import { MANAGEMENT, BOARD_MEMBERS } from "@/data/people-data";

export const metadata: Metadata = {
  title: "Our People | StudentsxCEOs Jakarta",
  description: "Meet the Board of Executive, Board of Management, and Board Members of StudentsxCEOs Jakarta.",
};

function SectionLabel({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-blue-600 font-bold text-xl">{number}</span>
      <div className="h-[1px] w-12 bg-blue-600" />
      <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
        {label}
      </span>
    </div>
  );
}

export default function OurPeoplePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">

      {/* ══════════════════════════════════════════
          HERO — minimal dark banner, consistent with About
          ══════════════════════════════════════════ */}
      <section className="relative bg-[#0d0d0d] pt-40 pb-24 px-6 sm:px-12 overflow-hidden">
        {/* Subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #fff 0px, #fff 1px,
              transparent 1px, transparent 12px
            )`,
          }}
        />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <p className="text-blue-500 tracking-[0.4em] uppercase text-xs sm:text-sm font-semibold mb-4">
            StudentsxCEOs Jakarta
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white uppercase">
            Our People
          </h1>
          <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-relaxed">
            The individuals who drive our mission — leaders, innovators, and changemakers shaping the future.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-12 max-w-[1400px] mx-auto">

        {/* ══════════════════════════════════════════
            1. BOARD OF EXECUTIVE
            ══════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 border-b border-zinc-100">
          <SectionLabel number={1} label="Board of Executive" />
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900 mb-16">
            Executive Board
          </h2>

          {(() => {
            const EXEC_TOP = [
              { name: "Andhika Pratama", role: "Controller", imageSrc: "/boards/controller.jpg", variant: "management" as const, className: "order-2 md:order-none" },
              { name: "Nicholas Audric Adonis Mathew", role: "Chief Executive Officer", imageSrc: "/boards/ceo.jpg", variant: "management" as const, className: "order-1 md:order-none" },
              { name: "Alisya Mutiara Arsyisi", role: "General Secretary", imageSrc: "/boards/gensec.png", variant: "management" as const, className: "order-3 md:order-none" },
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {EXEC_TOP.map((p, i) => (
                  <div key={i} className={p.className}>
                    <PersonCard {...p} />
                  </div>
                ))}
              </div>
            );
          })()}

          {(() => {
            const EXEC_BOTTOM = [
              { name: "Ari Muhamad Juliansyah", role: "Chief Data & Technology Officer", imageSrc: "/boards/CDNT.png", variant: "management" as const },
              { name: "Rona Sasia Nabila Harahap", role: "Chief Human Resources Officer", imageSrc: "/boards/CHR.JPG", variant: "management" as const },
              { name: "Fazril Harun", role: "Chief Finance Officer", imageSrc: "/boards/CFO.JPG", variant: "management" as const },
              { name: "Darrell Damareka", role: "Chief Operation Officer", imageSrc: "/boards/COO.JPG", variant: "management" as const },
              { name: "Rasya Amalya Putri Purwanto", role: "Chief Marketing Officer", imageSrc: "/boards/CMO.jpg", variant: "management" as const },
            ];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {EXEC_BOTTOM.map((p, i) => <PersonCard key={i} {...p} />)}
              </div>
            );
          })()}
        </section>

        {/* ══════════════════════════════════════════
            2. BOARD OF MANAGEMENT
            ══════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 border-b border-zinc-100">
          <SectionLabel number={2} label="Board of Management" />
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900 mb-16">
            Management Board
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {MANAGEMENT.map((person, i) => (
              <PersonCard key={i} {...person} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. ASSOCIATES (text only)
            ══════════════════════════════════════════ */}
        <section className="py-20 sm:py-28">
          <SectionLabel number={3} label="Associates" />
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900 mb-16">
            Associates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {BOARD_MEMBERS.map((member, i) => (
              <BoardMemberCard key={i} {...member} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
