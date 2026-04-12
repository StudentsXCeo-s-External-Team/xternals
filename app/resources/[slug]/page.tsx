import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCES } from "@/data/resources-data";

export function generateStaticParams() {
  return RESOURCES.map((item) => ({ slug: item.slug }));
}

export default async function ResourceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = RESOURCES.find((r) => r.slug === slug);
  if (!item) return notFound();

  const otherResources = RESOURCES.filter((r) => r.slug !== item.slug).slice(0, 3);

  return (
    <main className="relative w-full bg-white text-zinc-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full aspect-video max-h-[60vh] overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 z-0">
          <Image src={item.hero} alt="" fill className="object-cover scale-110 blur-2xl opacity-30" />
        </div>
        <div className="relative h-full w-full flex items-center justify-center z-10 px-4">
          <div className="relative h-full w-full max-w-5xl">
            <Image src={item.hero} alt={item.title} fill priority className="object-contain" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 z-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 pt-6">
        <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-600 mb-8 group">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">←</span>
          Back to Resources
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-widest">{item.category}</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-widest">{item.month}</span>
        </div>

        <p className="text-blue-600 font-bold text-lg tracking-wide mb-2">{item.badge}</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">{item.title}</h1>
        
        <div className="mt-8 h-px w-full bg-zinc-200" />
      </section>

      {/* Content Grid */}
      <section className="mx-auto max-w-5xl px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8">
            <p className="text-xl text-zinc-700 font-medium border-l-2 border-blue-600 pl-5 mb-10 leading-relaxed">
              {item.excerpt}
            </p>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              {item.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-zinc-200 p-6 sticky top-28">
              <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">Inside this Resource</p>
              <ul className="space-y-4">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Suggested Section */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold mb-10">More Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherResources.map((res) => (
              <Link key={res.slug} href={`/resources/${res.slug}`} className="group block bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={res.cover} alt={res.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{res.badge}</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 transition-colors">{res.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}