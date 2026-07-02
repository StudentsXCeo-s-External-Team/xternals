import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { AlumniVoices } from "@/components/AlumniVoices";
export const metadata: Metadata = {
  title: "Alumni Network | StudentsxCEOs Jakarta",
  description: "Explore the history of StudentsxCEOs Jakarta alumni by year and cohort.",
};

type AlumniPerson = {
  name: string;
  role: string;
  org: string;
};

type AlumniYear = {
  year: number;
  people: AlumniPerson[];
};

const ALUMNI_HISTORY: AlumniYear[] = [
  {
    year: 2025,
    people: [
      { name: "Alya Rahma", role: "Associate Consultant", org: "McKinsey & Company" },
      { name: "Rendy Pratama", role: "Investment Analyst", org: "East Ventures" },
      { name: "Sabrina Putri", role: "Brand Strategist", org: "Unilever Indonesia" },
    ],
  },
  {
    year: 2024,
    people: [
      { name: "Jonathan L.", role: "Product Manager", org: "Gojek" },
      { name: "Nadia K.", role: "Software Engineer", org: "Tokopedia" },
      { name: "Fikri A.", role: "Business Analyst", org: "BCG" },
    ],
  },
  {
    year: 2023,
    people: [
      { name: "Diah Z.", role: "Marketing Specialist", org: "Shopee" },
      { name: "Rama I.", role: "Data Analyst", org: "Traveloka" },
      { name: "Intan P.", role: "Operations Lead", org: "Bukalapak" },
    ],
  },
];

export default function AlumniNetworkPage() {
  return (
    <main id="alumni-network" className="relative z-10">
      <section className="group relative overflow-hidden bg-sxc-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-sxc-skyblue/30 via-transparent to-transparent" />
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[5%] right-[2%] w-44 h-44 sm:w-60 sm:h-60 pointer-events-none select-none opacity-65"
          style={{ mixBlendMode: "screen" }} />
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-20 sm:py-28">
          <div className="js-reveal">
            <span className="text-sxc-skyblue-light font-bold tracking-[0.15em] uppercase text-sm mb-4 block">Community</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
              Alumni Network
            </h1>
            <div className="h-1 w-20 bg-white mt-6 mb-8" />
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
              A growing community of professionals working across different industries.
              Explore our alumni and where they are now.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white border-t border-zinc-200 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="js-reveal">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-sxc-skyblue" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">The SxC Alumni Story</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">Origins</h3>
                <p className="mt-3 text-zinc-600">
                  What began as a connection between students and executives grew into a community built on mentorship and genuine drive.
                </p>
              </div>
              <div className="border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">Momentum</h3>
                <p className="mt-3 text-zinc-600">
                  Members learned from founders and coaches. Projects moved from practice exercises to real client work.
                </p>
              </div>
              <div className="border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">Legacy</h3>
                <p className="mt-3 text-zinc-600">
                  Alumni take what they learned into their work, keeping the network and its values alive.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 js-reveal">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight text-zinc-900">Milestones</h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4 border-l-2 border-zinc-200 pl-4">
                <div className="mt-1 h-2 w-2 bg-sxc-skyblue" />
                <div>
                  <div className="font-semibold text-zinc-900">2019: Community Deepening</div>
                  <div className="text-zinc-600">Mentoring expanded; alumni groups formed across industries and functions.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l-2 border-zinc-200 pl-4">
                <div className="mt-1 h-2 w-2 bg-sxc-skyblue" />
                <div>
                  <div className="font-semibold text-zinc-900">2023: Practice to Impact</div>
                  <div className="text-zinc-600">Live projects and competitions moved into real client work.</div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l-2 border-zinc-200 pl-4">
                <div className="mt-1 h-2 w-2 bg-sxc-skyblue" />
                <div>
                  <div className="font-semibold text-zinc-900">2025: Network at Scale</div>
                  <div className="text-zinc-600">Alumni groups grew; collaboration now spans companies, cities, and fields.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex items-center gap-4 js-reveal">
            <div className="h-1 w-10 bg-sxc-skyblue" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">History by Year</h2>
          </div>

          <div className="mt-10 space-y-16">
            {ALUMNI_HISTORY.map((batch, idx) => {
              const imageCol = `lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`;
              const textCol = `lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`;
              const initials = batch.people[0]?.name
                ? batch.people[0].name.split(" ").slice(0, 2).map((s) => s[0]).join("")
                : "SXC";
              return (
                <div key={batch.year} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center js-reveal">
                  <div className={imageCol}>
                    <div className="aspect-4/3 overflow-hidden relative border border-zinc-200 bg-sxc-navy/8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-sxc-skyblue/30 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-sxc-navy text-2xl font-bold">
                          {initials}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={textCol}>
                    <div className="border border-zinc-200 bg-white p-6 sm:p-8">
                      <span className="text-sxc-blue font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-3 block">
                        {batch.people.length} Alumni
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-display font-bold leading-tight text-zinc-900">
                        Cohort {batch.year}
                      </h3>
                      <p className="mt-4 text-zinc-600 text-base sm:text-lg">
                        Highlights from this cohort include:
                      </p>
                      <ul className="mt-4 space-y-2 text-zinc-700">
                        {batch.people.map((p) => (
                          <li key={`${batch.year}-${p.name}`} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-sxc-skyblue" />
                            <span>
                              <span className="font-semibold text-zinc-900">{p.name}</span>{" "}
                              <span className="text-zinc-600">, {p.role} at {p.org}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-zinc-50 border-t border-zinc-200 py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="js-reveal">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-sxc-skyblue" />
              <h3 className="text-2xl font-extrabold text-zinc-900">Alumni Voices</h3>
            </div>
            <AlumniVoices />
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-sxc-navy border-t border-white/10 py-14 sm:py-20 overflow-hidden">
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={350} height={350}
          className="absolute top-[5%] right-[2%] w-36 h-36 sm:w-52 sm:h-52 pointer-events-none select-none opacity-60"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/ring-gold-1.png" alt="" aria-hidden="true" width={160} height={160}
          className="absolute bottom-[10%] left-[3%] w-14 h-14 sm:w-20 sm:h-20 pointer-events-none select-none opacity-30"
          style={{ mixBlendMode: "screen" }} />
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 relative z-10">
          <div className="text-center js-reveal">
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-sxc-skyblue mb-4" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Be Part of the Story</h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
              Want to connect with alumni or share your journey? Reach out and we'll help you plug into the network.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-sxc-yellow transition-colors text-sxc-navy font-semibold px-7 py-3"
              >
                Contact Us
                <span className="text-sm">→</span>
              </Link>
              <Link
                href="/join-us"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/70 transition-colors font-semibold px-7 py-3"
              >
                Join Us
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
