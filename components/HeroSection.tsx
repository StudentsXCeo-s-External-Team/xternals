"use client";

import Link from "next/link";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95svh] w-full flex items-end overflow-hidden bg-sxc-navy">

      {/* ── Photo layer ── */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/About_us.jpg" alt="" fill priority className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-sxc-navy/75" />
      </div>

      {/* ── Figma ornaments ── */}
      <Image
        src="/ornaments/asterisk-navy.png"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        className="absolute top-[4%] right-[2%] w-40 h-40 sm:w-56 sm:h-56 pointer-events-none select-none opacity-75"
        style={{ mixBlendMode: "screen" }}
      />
      <Image
        src="/ornaments/ring-gold-1.png"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        className="absolute bottom-[20%] right-[8%] w-20 h-20 sm:w-28 sm:h-28 pointer-events-none select-none opacity-40"
        style={{ mixBlendMode: "screen" }}
      />
      <Image
        src="/ornaments/orb-gold-1.png"
        alt=""
        aria-hidden="true"
        width={160}
        height={160}
        className="absolute top-[30%] right-[28%] w-10 h-10 sm:w-14 sm:h-14 pointer-events-none select-none opacity-50"
        style={{ mixBlendMode: "screen" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-24 pt-32">
        <p
          className="text-white/50 text-[11px] font-bold tracking-[0.3em] uppercase mb-8"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          Batch 14 &nbsp; 2026
        </p>

        <h1 className="font-black leading-[0.9] tracking-tight">
          <span
            className="block text-[clamp(3rem,9vw,7.5rem)] text-white whitespace-nowrap"
            style={{ animation: "fadeInUp 0.8s ease-out 0.28s both" }}
          >
            STUDENTS<span className="text-sxc-skyblue">×</span>CEOS
          </span>
          <span
            className="block text-[clamp(2.5rem,7vw,6rem)] text-sxc-skyblue-light"
            style={{ animation: "fadeInUp 0.8s ease-out 0.46s both" }}
          >
            JAKARTA
          </span>
        </h1>

        <p
          className="mt-8 text-white/55 text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ animation: "fadeInUp 0.7s ease-out 0.65s both" }}
        >
          A student community that learns directly from CEOs and industry leaders across Indonesia.
        </p>

        <div
          className="mt-10 flex items-center gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out 0.82s both" }}
        >
          <MagneticButton>
            <Link
              href="/about"
              className="inline-flex h-11 items-center bg-white text-sxc-navy px-8 text-sm font-black hover:bg-sxc-yellow transition-colors duration-200"
            >
              About Us
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/programs"
              className="inline-flex h-11 items-center border border-white/30 text-white/70 px-8 text-sm font-bold hover:border-white/60 hover:text-white transition-colors duration-200"
            >
              Our Programs
            </Link>
          </MagneticButton>
        </div>
      </div>

    </section>
  );
}
