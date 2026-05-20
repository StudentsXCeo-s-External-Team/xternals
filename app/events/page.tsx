import { Metadata } from "next";
import Image from "next/image";
import { getEventsList, formatDate, DashboardEvent } from "@/lib/dashboard";

export const metadata: Metadata = {
  title: "Events | StudentsxCEOs Jakarta",
  description: "Join our upcoming events, workshops, and speaker sessions.",
};

export const revalidate = 60;

function EventCard({ event }: { event: DashboardEvent }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-black/10 bg-white flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          {event.image_url ? (
            <Image
              src={event.image_url}
              alt={event.title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">No image</span>
            </div>
          )}
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
        Event
      </span>
      <h3 className="text-xl font-serif font-medium leading-tight mb-4 group-hover:text-blue-600 transition-colors">
        {event.title}
      </h3>
      <div className="flex flex-col gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
        <span className="text-zinc-900">{formatDate(event.start_date)}</span>
        {event.location && <span>{event.location}</span>}
      </div>
      {event.registration_url && (
        <a
          href={event.registration_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:underline"
        >
          Register →
        </a>
      )}
    </div>
  );
}

export default async function EventsPage() {
  const events = await getEventsList(20);
  const [featured, ...rest] = events;

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">

      {/* HERO SECTION */}
      <section className="relative pt-10 md:pt-20 pb-16 border-b border-black/10 bg-white">
        <div className="px-6 sm:px-12 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
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
            <div className="md:w-1/3 lg:w-1/4">
              <p className="text-zinc-500 text-base leading-relaxed border-l border-zinc-200 pl-6 py-1">
                Our latest sessions, workshops, and leadership initiatives for future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      {featured && (
        <section className="group cursor-pointer border-b border-black/10 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-white flex items-center justify-center">
              <div className="relative w-full h-full p-6 lg:p-12">
                {featured.image_url ? (
                  <Image
                    src={featured.image_url}
                    alt={featured.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-100" />
                )}
              </div>
            </div>
            <div className="p-12 sm:p-20 flex flex-col justify-center border-l border-black/10 group-hover:bg-zinc-950 transition-colors duration-500">
              <div className="max-w-md">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest mb-8">
                  Featured
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 group-hover:text-white">
                  {featured.title}
                </h2>
                {featured.description && (
                  <p className="text-zinc-600 text-lg mb-10 leading-relaxed group-hover:text-zinc-400">
                    {featured.description}
                  </p>
                )}
                <div className="flex flex-col gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400">
                  <span className="text-zinc-900 group-hover:text-blue-400">— {formatDate(featured.start_date)}</span>
                  {featured.location && <span className="group-hover:text-zinc-500">{featured.location}</span>}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EVENTS GRID */}
      {rest.length > 0 && (
        <section className="px-6 sm:px-12 max-w-[1400px] mx-auto py-32 bg-white">
          <div className="flex items-center gap-4 mb-16">
            <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900">Past Events</h3>
            <div className="h-[1px] flex-grow bg-black/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
            {rest.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* EMPTY STATE */}
      {events.length === 0 && (
        <section className="px-6 py-32 flex flex-col items-center text-center">
          <div className="h-1 w-12 bg-blue-600 mb-6" />
          <p className="text-xl font-semibold text-zinc-700">No events yet — check back soon!</p>
        </section>
      )}

      <div className="pb-32" />
    </main>
  );
}
