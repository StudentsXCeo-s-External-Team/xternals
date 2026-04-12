import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { VALUES_DATA } from "@/data/values-data";

export const metadata: Metadata = {
  title: "Resources | StudentsxCEOs Jakarta",
  description: "Explore our insights, leadership toolkit, and career resources.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      
      {/* HERO */}
      <section className="relative min-h-[80svh] md:min-h-screen w-full bg-zinc-950">
        <Image 
          src="/resources/Partnership.jpg" 
          alt="Resources Hero"
          fill
          priority
          className="object-cover opacity-40" 
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 sm:px-12 max-w-[1400px] mx-auto z-10">
          <h1 className="text-6xl sm:text-8xl font-serif text-white leading-[0.9] tracking-tighter mb-8">
            Capturing<br />Leadership<br />Insights.
          </h1>
          <div className="bg-blue-600 p-6 sm:p-8 max-w-xl border-l-4 border-white">
            <p className="text-lg text-white font-medium leading-snug">
              Our thinking reveals possibilities unimagined by others. We empower the next generation of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16 px-6 sm:px-12 max-w-[1400px] mx-auto border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold uppercase text-blue-600 mb-2">Our Approach</h2>
            <p className="text-4xl sm:text-5xl font-serif text-zinc-900 leading-none tracking-tighter">
              Driving knowledge to <span className="italic text-blue-600">impactful</span> minds.
            </p>
          </div>
          <div className="lg:col-span-7 lg:pl-8 border-l border-black/10">
            <p className="text-lg text-zinc-600 leading-normal">
              We explore any territory in pursuit of an idea. Our resources are designed to be actionable, practical, and transformative for your career journey.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-white px-6 sm:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-serif text-zinc-900 tracking-tighter mb-10">
            Four Pillars. One Commitment.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-black/10 pt-8">
            {VALUES_DATA.map((value) => (
              <div key={value.index} className="group flex flex-col border-b border-black/5 pb-6">
                <span className="text-blue-600 font-bold text-xs mb-2">0{value.index}</span>
                <h3 className="text-xl font-serif text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {value.title.join(" ")}
                </h3>
                <p className="text-zinc-500 text-sm leading-snug">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH CATEGORIES */}
      <section className="py-16 bg-white px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-serif text-zinc-900 tracking-tighter mb-10">Research & Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Blog / Insights", href: "/resources/blog-insights" },
              { title: "Leadership Toolkit", href: "/resources/leadership-toolkit" },
              { title: "Career Resources", href: "/resources/career-resources" }
            ].map((card, idx) => (
              <Link key={idx} href={card.href} className="group block border border-black/10 p-6 hover:border-blue-600 transition-all">
                <div className="aspect-video bg-blue-900 mb-6 relative flex items-center justify-center overflow-hidden">
                   <span className="text-white/20 font-serif italic text-4xl">SxC.</span>
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-blue-600">{card.title}</h3>
                <span className="text-blue-600 font-bold text-xs uppercase border-b border-blue-600 pb-0.5">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}