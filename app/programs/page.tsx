import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PROGRAMS } from "../../data/programs";

export const metadata: Metadata = {
  title: "Our Programs | StudentsxCEOs Jakarta",
  description: "Explore our diverse range of programs designed to bridge the gap between students and CEOs.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen font-sans">

      {/* Dark header */}
      <section className="relative bg-sxc-navy pt-10 md:pt-20 pb-20 px-6 sm:px-12 overflow-hidden">
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[5%] right-[2%] w-48 h-48 sm:w-64 sm:h-64 pointer-events-none select-none opacity-65"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/ring-gold-1.png" alt="" aria-hidden="true" width={180} height={180}
          className="absolute bottom-[5%] left-[3%] w-20 h-20 sm:w-28 sm:h-28 pointer-events-none select-none opacity-30"
          style={{ mixBlendMode: "screen" }} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <p className="text-sxc-skyblue tracking-[0.15em] uppercase text-xs font-semibold mb-4">StudentsxCEOs Jakarta</p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display text-white tracking-tighter leading-none">
                Our Programs
              </h1>
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <p className="text-zinc-400 text-base leading-relaxed border-l border-sxc-skyblue pl-6 py-1">
                We offer a variety of programs designed to help students grow and develop as leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 max-w-[1400px] mx-auto bg-white text-zinc-900 py-20 pb-20">
        <div className="space-y-24">
          {PROGRAMS.map((program, index) => (
            <div
              key={program.slug}
              id={program.slug}
              className={`group flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video bg-white border border-zinc-100 overflow-hidden relative flex items-center justify-center p-6 lg:p-10 transition-all duration-500 group-hover:border-sxc-skyblue">
                  {/* Sharp foreground image */}
                  <Image
                    src={program.hero}
                    alt={program.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 z-10"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2">
                <div className="max-w-md">
                  <h2 className="text-4xl sm:text-5xl font-display mb-6 text-zinc-900 group-hover:text-sxc-blue transition-colors">
                    {program.badge}
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                    {program.excerpt}
                  </p>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="group/link inline-flex items-center gap-3 text-zinc-900 font-bold text-xs uppercase tracking-[0.15em] border-b-2 border-zinc-900 pb-1 hover:text-sxc-blue hover:border-sxc-blue transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-zinc-100" />
    </main>
  );
}
