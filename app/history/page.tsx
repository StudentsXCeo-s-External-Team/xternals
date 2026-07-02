import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HistoryGallery } from "@/components/HistoryGallery";
import { CountUp } from "@/components/CountUp";
export const metadata: Metadata = {
  title: "History | StudentsxCEOs Jakarta",
  description: "An elegant overview of StudentsxCEOs Jakarta's origins, timeline, and flagship evolution.",
};

type Milestone = {
  year: string;
  title: string;
  detail: string;
};

const MILESTONES: Milestone[] = [
  { year: "Oct, 2010", title: "The beginning of StudentsxCEOs", detail: "First planted our seeds of leadership in Bandung and Jakarta. StudentsxCEOs was founded as an organization for aspiring future business leaders in Indonesia. Estabelished by Iqbal, an alumnus of ITB, StudentsxCEOs was built as leadership accelerator, guild boardroom and think-tank for future business leaders designed for students." },
  { year: "2012-2015", title: "The first StudentsxCEOs Summit", detail: "StudentsxCEOs hosted its first ever summit in 2012 and marking a pivotal step in empowering youth entreprenuership. " },
  { year: "2015-2021", title: "Expanding the StudentsxCEOs Journey", detail: "Extended our reach to key student hubs in Yogyakarta, Semarang, and East Java. his expansion strengthened the organization's national presence and broadened its impact among young leaders." },
  { year: "2021-2025", title: "The First SxC International Sumit by StudentsxCEOs Jakarta", detail: "A milestone moment for the organization, SxC International Summit showcased StudentsxCEOs Jakarta's capability to host a large scale, globally oriented event." },
  { year: "2025-2026", title: "Expanding to the Global Stage", detail: "StudentsxCEOs reached a new chapter in its journey by launching its first international chapter, StudentsxCEOs Australia. This expansion marked the organization's transformation from a national movement into a growing global network." },
  { year: "Recap", title: "Recap of Our Journey & Achievement", detail: "Over the years, StudentsxCEOs Jakarta has successfully delivered 14 impactful programs at both national and international levels. With 70,000+ future leaders impacted and 30+ outstanding facilitators involved, the organization continues to grow as a platform that empowers the next generation of leaders to create meaningful change." },
];

const PLACEHOLDERS = ["/history/h1.jpg", "/history/h2.jpg", "/history/h3.jpg", "/history/h4.jpg", "/history/h5.jpg", "/history/h6.jpg", "/history/h7.jpg"];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* HEADER SECTION */}
      <section className="relative bg-sxc-navy py-20 px-6 sm:px-12 overflow-hidden">
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[5%] right-[2%] w-48 h-48 sm:w-64 sm:h-64 pointer-events-none select-none opacity-70"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/ring-gold-1.png" alt="" aria-hidden="true" width={200} height={200}
          className="absolute bottom-[-10%] right-[18%] w-24 h-24 sm:w-32 sm:h-32 pointer-events-none select-none opacity-35"
          style={{ mixBlendMode: "screen" }} />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center sm:text-left">
          <div className="flex items-center gap-4 mb-6 justify-center sm:justify-start">
            <div className="h-0.5 w-10 bg-sxc-skyblue" />
            <span className="text-sxc-skyblue-light tracking-[0.15em] uppercase text-xs font-bold">StudentsxCEOs Jakarta</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white uppercase">History</h1>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Founded in 2010. The Jakarta chapter evolved from intimate CEO access into a broader leadership accelerator and flagship summit programming.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-sxc-navy border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: 14, suffix: "", label: "Batches" },
            { value: 70000, suffix: "+", label: "Leaders Impacted" },
            { value: 30, suffix: "+", label: "Facilitators" },
            { value: 15, suffix: " yrs", label: "Since 2010" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-sxc-skyblue">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto py-16 px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-200 border border-zinc-200">

            {/* Card 1: Origin */}
            <div className="group relative p-10 bg-white hover:bg-sxc-navy transition-colors duration-300">
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.15em] text-sxc-skyblue font-bold mb-4 group-hover:text-sxc-skyblue-light">
                  Origin
                </p>
                <p className="text-xl font-bold text-zinc-900 group-hover:text-white transition-colors">
                  Original Chapter
                </p>
                <p className="mt-2 text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors leading-relaxed">
                  Jakarta and Bandung originated the network in 2010.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-sxc-skyblue transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Card 2: Purpose */}
            <div className="group relative p-10 bg-zinc-50 hover:bg-sxc-skyblue transition-colors duration-300">
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.15em] text-sxc-skyblue font-bold mb-4 group-hover:text-white/80">
                  Purpose
                </p>
                <p className="text-xl font-bold text-zinc-900 group-hover:text-white transition-colors">
                  Leadership Accelerator
                </p>
                <p className="mt-2 text-zinc-600 text-sm group-hover:text-white/80 transition-colors leading-relaxed">
                  CEO access, mentoring, and entrepreneurship incubation.
                </p>
              </div>
            </div>

            {/* Card 3: Status */}
            <div className="group relative p-10 bg-white hover:bg-sxc-navy transition-colors duration-300">
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.15em] text-sxc-skyblue font-bold mb-4 group-hover:text-sxc-skyblue-light">
                  Status
                </p>
                <p className="text-xl font-bold text-zinc-900 group-hover:text-white transition-colors">
                  Batch 14 Active
                </p>
                <p className="mt-2 text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors leading-relaxed">
                  Active programs including Preneuries and InterSummit 2026.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-sxc-skyblue transition-all duration-500 group-hover:w-full" />
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 sm:px-12">
        <div className="relative border-l border-zinc-200 ml-4 sm:ml-0 sm:border-none">
          {MILESTONES.map((m, i) => (
            <div key={i} className={`flex flex-col sm:flex-row gap-8 mb-24 last:mb-0 items-start ${i % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
              {/* Year Column */}
              <div className="w-full sm:w-1/2 flex flex-col items-start px-4 sm:px-12 sticky top-24">
                <span className="text-sxc-skyblue font-black text-6xl tracking-tighter opacity-20">{m.year}</span>
                <div className="h-0.5 w-12 bg-sxc-skyblue my-4" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{m.title}</h3>
                <p className="text-zinc-600 leading-relaxed max-w-md">{m.detail}</p>
              </div>

              {/* Image Column */}
              <div className="w-full sm:w-1/2 px-4 sm:px-0">
                <div className="relative aspect-16/10 bg-zinc-100 group overflow-hidden border border-zinc-200">
                  <Image
                    src={PLACEHOLDERS[i % PLACEHOLDERS.length]}
                    alt={m.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="relative bg-sxc-navy py-24 px-6 sm:px-12 text-white overflow-hidden">
        <Image src="/ornaments/asterisk-purple.png" alt="" aria-hidden="true" width={350} height={350}
          className="absolute top-[5%] right-[2%] w-40 h-40 sm:w-56 sm:h-56 pointer-events-none select-none opacity-50"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/ring-gold-2.png" alt="" aria-hidden="true" width={160} height={160}
          className="absolute bottom-[8%] left-[3%] w-16 h-16 sm:w-24 sm:h-24 pointer-events-none select-none opacity-30"
          style={{ mixBlendMode: "screen" }} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight uppercase">Archive Gallery</h2>
              <p className="text-zinc-500 mt-2">Historical moments from 2010 to present.</p>
            </div>
          </div>

          <HistoryGallery photos={PLACEHOLDERS} />
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-20 text-center border-t border-zinc-100">
        <h3 className="text-sm font-bold tracking-[0.15em] uppercase mb-8">Ready to be part of the next chapter?</h3>
        <Link href="/programs" className="inline-block bg-sxc-blue text-white px-12 py-4 font-bold text-sm tracking-[0.15em] uppercase hover:bg-sxc-navy transition-colors">
          Explore Current Programs
        </Link>
      </section>
    </main>
  );
}
