import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMS } from "../../../data/programs";
import NewsGallery from "../../../components/NewsGallery";

export function generateStaticParams() {
  return PROGRAMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = PROGRAMS.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.badge} — StudentsxCEOs Jakarta`,
    description: item.excerpt,
  };
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = PROGRAMS.find((p) => p.slug === slug);
  if (!item) return notFound();

  // Related programs — up to 3 others, excluding current
  const related = PROGRAMS.filter((p) => p.slug !== item.slug).slice(0, 3);

  return (
    <main className="relative w-full bg-white text-zinc-900 overflow-hidden">

      {/* Hero section with 16:9 Aspect Ratio */}
<section className="relative w-full aspect-video max-h-[75vh] overflow-hidden bg-white">
  {/* Layer 1: Blurred background fill */}
  <div className="absolute inset-0 z-0">
    <Image
      src={item.hero}
      alt=""
      fill
      aria-hidden="true"
      className="object-cover scale-110 blur-2xl opacity-50"
    />
  </div>

  {/* Layer 2: Sharp foreground image */}
  <div className="relative h-full w-full flex items-center justify-center z-10 px-4">
    <div className="relative h-full w-full max-w-5xl">
      <Image
        src={item.hero}
        alt={item.title}
        fill
        priority
        className="object-contain"
      />
    </div>
  </div>

  {/* Layer 3: Clean edge fades */}
  {/* Bottom fade: Subtle transition to the white content section */}
  <div 
    className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
    style={{ background: "linear-gradient(to top, white 0%, rgba(255,255,255,0.6) 30%, transparent 100%)" }}
  />
  
  {/* Side fades: Ensure the edges blend into the page body */}
  <div 
    className="absolute inset-y-0 left-0 w-12 z-20 pointer-events-none hidden sm:block"
    style={{ background: "linear-gradient(to right, white, transparent)" }}
  />
  <div 
    className="absolute inset-y-0 right-0 w-12 z-20 pointer-events-none hidden sm:block"
    style={{ background: "linear-gradient(to left, white, transparent)" }}
  />
</section>
      {/* Header block — cleanly on white, no overlap with the image */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 pt-6 pb-0">
        {/* Back link */}
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[11px]">
            ←
          </span>
          Back to Programs
        </Link>

        {/* Category pill + month badge row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase">
            {item.category}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-semibold tracking-widest uppercase">
            {item.month}
          </span>
        </div>

        {/* Badge + Title */}
        <p className="text-blue-600 font-bold text-lg tracking-wide mb-2">{item.badge}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl text-zinc-900">
          {item.title}
        </h1>

        {/* Audience row */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="h-1 w-4 bg-blue-600 inline-block rounded-full" />
            {item.audience}
          </span>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-zinc-200" />
      </section>

      {/* Body */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left accent bar — decorative, desktop only */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 flex flex-col items-center gap-3">
              <div className="h-20 w-[2px] bg-blue-600" />
              <div className="h-2 w-2 rounded-full bg-blue-600" />
            </div>
          </div>

          {/* Program body */}
          <div className="lg:col-span-8">
            {/* Excerpt / lead paragraph */}
            <p className="text-xl sm:text-2xl text-zinc-700 font-medium leading-relaxed border-l-2 border-blue-600 pl-5 mb-10">
              {item.excerpt}
            </p>

            {/* Full content — split on double newline into paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              {item.content.split("\n\n").map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>

            {/* Gallery — only rendered if images array has entries */}
            <NewsGallery images={item.images} title={item.title} />
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-6">

              {/* What you'll get — highlights block */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5">
                  <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">What You&apos;ll Get</p>
                  <ul className="space-y-3">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Program info block */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5 space-y-4">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Program Info</p>
                <div>
                  <p className="text-xs text-zinc-400 mb-1">Category</p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-1">Runs in</p>
                  <p className="text-sm text-zinc-700 font-medium">{item.month}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-1">For</p>
                  <p className="text-sm text-zinc-700 font-medium">{item.audience}</p>
                </div>
              </div>

              {/* Share block */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">Share</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(item.badge)}&url=${encodeURIComponent(`https://sxcjakarta.com/programs/${item.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                  >
                    <span className="h-8 w-8 rounded-md bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold">X</span>
                    Share on X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sxcjakarta.com/programs/${item.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                  >
                    <span className="h-8 w-8 rounded-md bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold">in</span>
                    Share on LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </section>

      {/* Other Programs */}
      <section className="relative z-10 w-full bg-zinc-50 border-t border-zinc-200 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-10 bg-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Other Programs</h2>
          </div>

          {related.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/programs/${rel.slug}`}
                  className="group relative h-[300px] overflow-hidden rounded-xl bg-zinc-200"
                >
                  {/* Blurred background fill for related cards */}
                  <Image
                    src={rel.cover}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover scale-110 blur-lg opacity-60"
                  />
                  {/* Cover image */}
                  <Image
                    src={rel.cover}
                    alt={rel.title}
                    fill
                    className="object-contain z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-20" />
                  {/* Blue accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500 z-30" />
                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end z-30">
                    <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-2">
                      {rel.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug text-white group-hover:text-blue-100 transition-colors">
                      {rel.badge}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-300">{rel.month}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Fallback when there are no other programs yet */
            <div className="flex flex-col items-center text-center py-10 border border-dashed border-zinc-300 rounded-xl">
              <div className="h-1 w-12 bg-blue-600 mb-6" />
              <p className="text-lg sm:text-xl font-semibold text-zinc-700 max-w-md">
                Stay tuned for more programs from StudentsxCEOs Jakarta!
              </p>
              <p className="mt-3 text-sm text-zinc-400 max-w-sm">
                We&apos;re always developing new ways to help you grow. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back to programs CTA */}
      <section className="relative z-10 w-full bg-white border-t border-zinc-200 py-14 sm:py-20 flex flex-col items-center text-center px-6">
        <div className="h-1 w-16 bg-blue-600 mb-6" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-4">Ready to grow?</h2>
        <p className="text-zinc-500 max-w-md mb-8">
          Explore all our programs and find the one that fits where you are in your leadership journey.
        </p>
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-7 py-3 rounded-md"
        >
          View All Programs
          <span className="text-sm">→</span>
        </Link>
      </section>

    </main>
  );
}