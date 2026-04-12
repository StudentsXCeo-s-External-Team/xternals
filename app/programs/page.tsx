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
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-10 md:pt-20 pb-20">
      <section className="px-6 sm:px-12 max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 border-b border-black/10 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-zinc-900 tracking-tighter leading-none">
                Our Programs
              </h1>
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <p className="text-zinc-500 text-base leading-relaxed border-l border-blue-600 pl-6 py-1">
                We offer a variety of programs designed to empower students and foster leadership.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {PROGRAMS.map((program, index) => (
            <div
              key={program.slug}
              id={program.slug}
              className={`group flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/9] bg-white border border-black/5 overflow-hidden relative flex items-center justify-center p-6 lg:p-10 transition-all duration-500 group-hover:border-blue-600">
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
                  <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {program.badge}
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                    {program.excerpt}
                  </p>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="group/link inline-flex items-center gap-3 text-zinc-900 font-bold text-xs uppercase tracking-widest border-b-2 border-zinc-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
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
      
      {/* Visual Footer Space */}
      <div className="mt-32 border-t border-black/5" />
    </main>
  );
}