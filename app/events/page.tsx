import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | StudentsxCEOs Jakarta",
  description: "Join our upcoming events, workshops, and speaker sessions.",
};

// Mock data for events
const featuredEvent = {
  id: "onboarding-session",
  category: "Workshops",
  title: "StudentsxCEOs Jakarta Batch 14 Officially Kicks Off with Onboarding Session",
  date: "February 15, 2026",
  location: "StudentsxCEOs Jakarta",
  image: "/news/onboarding-session/cover.jpeg",
  description:"StudentsxCEOs Jakarta Batch 14 officially began with an onboarding session introducing new apprentices to the organization, its vision, and upcoming initiatives.",
};


const upcomingEvents = [
  {
    id: "evt-1",
    category: "Workshops",
    title: "StudentsxCEOs Jakarta Batch 14 Officially Kicks Off with Onboarding Session",
    date: "February 15, 2026",
    location: "Virtual (Zoom)",
    image: "/news/onboarding-session/cover.jpeg",
  },
  {
    id: "evt-2",
    category: "Workshops",
    title: "Apprentices of SxC Jakarta Kick Off Leadership Initiative with Insightful Webina",
    date: "February 8, 2026",
    location: "Virtual (Zoom)",
    image: "/news/leadership-initiative/cover.jpeg",
  },
  {
    id: "evt-3",
    category: "Workshops",
    title: "SxC Jakarta Empowers Aspiring Entrepreneurs to Build Sustainable Ventures with Preneuries",
    date: "February 7, 2026",
    location: "Virtual (Zoom)",
    image: "/news/preneuries/cover.jpeg",
  },
  {
    id: "evt-4",
    category: "Workshops",
    title: "SxC Jakarta Connects Students with Digital Industry Professionals Through SxDigital",
    date: "February 7, 2026",
    location: "Virtual (Zoom)",
    image: "/news/sxdigital/cover.jpeg",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 md:pt-20 pb-16 border-b border-black/10 bg-white">
        <div className="px-6 sm:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* Left Column */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-blue-600" />
                <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px]">
                  Batch 14
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-zinc-950 tracking-tighter leading-none">
                SXC Events
              </h1>
            </div>

            {/* Right Column */}
            <div className="md:w-1/3 lg:w-1/4">
              <p className="text-zinc-500 text-base leading-relaxed border-l border-zinc-200 pl-6 py-1">
                Our latest sessions, workshops, and leadership initiatives for future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT */}
      <section className="group cursor-pointer border-b border-black/10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-white flex items-center justify-center">
            <div className="relative w-full h-full p-6 lg:p-12">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="p-12 sm:p-20 flex flex-col justify-center border-l border-black/10 group-hover:bg-zinc-950 transition-colors duration-500">
            <div className="max-w-md">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest mb-8">
                {featuredEvent.category}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 group-hover:text-white">
                {featuredEvent.title}
              </h2>
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed group-hover:text-zinc-400">
                {featuredEvent.description}
              </p>
              <div className="flex flex-col gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400">
                <span className="text-zinc-900 group-hover:text-blue-400">— {featuredEvent.date}</span>
                <span className="group-hover:text-zinc-500">{featuredEvent.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS GRID */}
      <section className="px-6 sm:px-12 max-w-[1400px] mx-auto py-32 bg-white">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900">Past Events</h3>
          <div className="h-[1px] flex-grow bg-black/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-black/10 bg-white flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 right-0 p-3 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  <div className="w-5 h-5 flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">
                {event.category}
              </span>
              <h3 className="text-xl font-serif font-medium leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
              <div className="flex flex-col gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                <span className="text-zinc-900">{event.date}</span>
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-32" />
    </main>
  );
}