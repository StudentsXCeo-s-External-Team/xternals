import { Metadata } from "next";
import Image from "next/image";
import { getEventsList, formatDate, DashboardEvent } from "@/lib/dashboard";

export const metadata: Metadata = {
  title: "Events | StudentsxCEOs Jakarta",
  description: "Join our upcoming events, workshops, and speaker sessions.",
};

export const revalidate = 60;

function EventCard({ event }: { event: DashboardEvent }) {
  const href = event.registration_url ?? undefined;
  return (
    <a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`group block ${href ? "cursor-pointer" : "cursor-default"}`}
    >
      <div className="relative aspect-4/5 overflow-hidden mb-8 border border-zinc-200 bg-white flex items-center justify-center p-4">
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
        <div className="absolute top-0 right-0 p-3 bg-sxc-blue translate-x-full group-hover:translate-x-0 transition-transform duration-300">
          <div className="w-5 h-5 flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
      <span className="text-sxc-blue font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">Event</span>
      <h3 className="text-xl font-display font-medium leading-tight mb-4 group-hover:text-sxc-blue transition-colors">
        {event.title}
      </h3>
      <div className="flex flex-col gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
        <span className="text-zinc-900">{formatDate(event.start_date)}</span>
        {event.location && <span>{event.location}</span>}
      </div>
      {href && (
        <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-sxc-blue group-hover:underline">
          Register →
        </span>
      )}
    </a>
  );
}

export default async function EventsPage() {
  const events = await getEventsList(20);
  const [featured, ...rest] = events;

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">

      {/* HERO SECTION */}
      <section className="relative pt-10 md:pt-20 pb-20 bg-sxc-navy overflow-hidden">
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[5%] right-[2%] w-48 h-48 sm:w-64 sm:h-64 pointer-events-none select-none opacity-65"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/orb-gold-1.png" alt="" aria-hidden="true" width={160} height={160}
          className="absolute bottom-[10%] right-[28%] w-10 h-10 sm:w-14 sm:h-14 pointer-events-none select-none opacity-40"
          style={{ mixBlendMode: "screen" }} />
        <div className="px-6 sm:px-12 max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-sxc-skyblue" />
                <span className="text-sxc-skyblue font-bold tracking-[0.2em] uppercase text-[10px]">
                  Batch 14
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display text-white tracking-tighter leading-none">
                SXC Events
              </h1>
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <p className="text-zinc-400 text-base leading-relaxed border-l border-sxc-skyblue pl-6 py-1">
                Our latest sessions, workshops, and leadership initiatives for future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      {featured && (
        <a
          href={featured.registration_url ?? undefined}
          target={featured.registration_url ? "_blank" : undefined}
          rel={featured.registration_url ? "noopener noreferrer" : undefined}
          className={`group block border-b border-zinc-200 bg-white ${featured.registration_url ? "cursor-pointer" : "cursor-default"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-16/10 lg:aspect-auto overflow-hidden bg-white flex items-center justify-center">
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
            <div className="p-12 sm:p-20 flex flex-col justify-center border-l border-zinc-200 group-hover:bg-sxc-navy transition-colors duration-500">
              <div className="max-w-md">
                <span className="inline-block px-3 py-1 bg-sxc-skyblue text-sxc-navy text-[9px] font-black uppercase tracking-[0.15em] mb-8">
                  Featured
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.1] mb-8 group-hover:text-white">
                  {featured.title}
                </h2>
                {featured.description && (
                  <p className="text-zinc-600 text-lg mb-10 leading-relaxed group-hover:text-zinc-400">
                    {featured.description}
                  </p>
                )}
                <div className="flex flex-col gap-2 text-xs font-bold tracking-widest uppercase text-zinc-400">
                  <span className="text-zinc-900 group-hover:text-sxc-skyblue-light">{formatDate(featured.start_date)}</span>
                  {featured.location && <span className="group-hover:text-zinc-500">{featured.location}</span>}
                </div>
              </div>
            </div>
          </div>
        </a>
      )}

      {/* EVENTS GRID */}
      {rest.length > 0 && (
        <section className="px-6 sm:px-12 max-w-[1400px] mx-auto py-32 bg-white">
          <div className="flex items-center gap-4 mb-16">
            <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900">Past Events</h3>
            <div className="h-px grow bg-black/10" />
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
          <div className="h-1 w-12 bg-sxc-skyblue mb-6" />
          <p className="text-xl font-semibold text-zinc-700">No events yet. Check back soon!</p>
        </section>
      )}

      <div className="pb-32" />
    </main>
  );
}
