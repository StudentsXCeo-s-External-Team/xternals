import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ValueCard } from "@/components/ValueCard";
import { VALUES_DATA } from "@/data/values-data";

export const metadata: Metadata = {
  title: "About Us | StudentsxCEOs Jakarta",
  description:
    "Learn about the StudentsxCEOs Jakarta DNA, our values, and our history.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">

      {/* ══════════════════════════════════════════
          1. HERO SECTION
          ══════════════════════════════════════════ */}
      <section
        aria-labelledby="about-hero"
        className="relative min-h-[60svh] sm:min-h-[80svh] w-full overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/about/abus.JPG"
            alt="StudentsxCEOs Jakarta participants networking at an event"
            fill
            priority
            className="object-cover object-center z-0"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-sxc-navy/65 z-10" />
        </div>

        {/* Figma ornaments */}
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[6%] right-[3%] w-40 h-40 sm:w-56 sm:h-56 pointer-events-none select-none opacity-65 z-20"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/asterisk-purple.png" alt="" aria-hidden="true" width={300} height={300}
          className="absolute bottom-[15%] left-[3%] w-28 h-28 sm:w-40 sm:h-40 pointer-events-none select-none opacity-40 z-20"
          style={{ mixBlendMode: "screen" }} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
          <p className="text-sxc-skyblue-light tracking-[0.15em] uppercase text-xs sm:text-sm font-semibold">
            StudentsxCEOs Jakarta
          </p>

          <h1
            id="about-hero"
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white uppercase text-center px-4 animate-[fadeInUp_0.9s_ease-out_0.2s_both]"
          >
            About Us
          </h1>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-20">
          <span className="text-white text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-white animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. DNA / INTRO SECTION
          ══════════════════════════════════════════ */}
      <section
        aria-labelledby="dna-section"
        className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="text-sxc-blue font-bold text-xl">1</span>
          <div className="h-px w-12 bg-sxc-blue" />
          <span
            id="dna-section"
            className="text-sxc-blue font-bold tracking-[0.15em] uppercase text-sm"
          >
            SXC DNA
          </span>
        </div>

        <p className="text-xl sm:text-3xl md:text-4xl leading-relaxed font-normal text-zinc-800 max-w-5xl mx-auto">
          Born of the spirit of leadership, StudentsxCEOs epitomises the power
          of a lifelong passion and the beauty of limitless human achievement,
          creating timeless connections for a changing world.
        </p>
      </section>

      {/* ══════════════════════════════════════════
          3. VALUES SECTION
          ══════════════════════════════════════════ */}
      <section
        aria-labelledby="values-section"
        className="py-8 md:py-10 px-6 sm:px-12 max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sxc-blue font-bold text-xl">2</span>
            <div className="h-px w-12 bg-sxc-blue" />
            <span
              id="values-section"
              className="text-sxc-blue font-bold tracking-[0.15em] uppercase text-sm"
            >
              Our Values
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES_DATA.map((value) => (
            <ValueCard key={value.index} {...value} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. HISTORY SECTION
          ══════════════════════════════════════════ */}
      <section
        aria-labelledby="history-section"
        className="w-full flex flex-col md:flex-row min-h-[600px] md:min-h-[80svh]"
      >
        {/* Left: Text */}
        <div className="w-full md:w-1/2 bg-sxc-navy text-white p-12 sm:p-20 flex flex-col justify-between relative overflow-hidden">
          {/* Label */}
          <div className="flex items-center gap-4 relative z-10">
            <span className="text-sxc-skyblue font-bold text-lg">3</span>
            <div className="h-px w-12 bg-sxc-skyblue" />
            <span
              id="history-section"
              className="text-sxc-skyblue font-bold tracking-[0.15em] uppercase text-sm"
            >
              History
            </span>
          </div>

          {/* Content */}
          <div className="max-w-xl relative z-10 py-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight mb-8">
              The Foundation<br />of the SxC<br />Brand
            </h2>

            <p className="text-lg text-zinc-400 leading-relaxed mb-12">
              Our story officially begins in 2010 when the first chapter was
              established, creating a bridge between students and CEOs. It
              marked the start of connecting students with leaders through
              direct mentorship and real-world exposure.
            </p>

            <Link
              href="/history"
              className="inline-flex items-center gap-3 text-white font-bold tracking-wider hover:text-sxc-skyblue transition-colors group"
            >
              DISCOVER MORE
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-sxc-skyblue transition-colors group-hover:translate-x-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Year */}
          <div className="relative z-10 text-zinc-700 text-7xl font-bold select-none">
            2010
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[400px]">
          <Image
            src="/history/h1.jpg"
            alt="StudentsxCEOs Jakarta early events and founding moments"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-zinc-900/20" />
        </div>
      </section>
    </main>
  );
}
