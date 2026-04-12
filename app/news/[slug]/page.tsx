import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS } from "../../../data/news";
import NewsGallery from "../../../components/NewsGallery";

export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — StudentsxCEOs Jakarta`,
    description: item.excerpt,
  };
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) return notFound();

  // Related articles — up to 3 others, excluding current
  const related = NEWS.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <main className="relative w-full bg-white text-zinc-900 overflow-hidden">

      {/* Hero section with 16:9 Aspect Ratio - Matched to Program Detail */}
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
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, white 0%, rgba(255,255,255,0.6) 30%, transparent 100%)" }}
        />
        
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
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-[11px]">
            ←
          </span>
          Back to Home
        </Link>

        {/* Category pill */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl text-zinc-900">
          {item.title}
        </h1>

        {/* Meta row */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          {item.author && (
            <span className="flex items-center gap-2">
              <span className="h-1 w-4 bg-blue-600 inline-block rounded-full" />
              {item.author}
            </span>
          )}
          <span>{item.date}</span>
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

          {/* Article body */}
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
              {/* Share block */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">Share</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(item.title)}&url=${encodeURIComponent(`https://sxcjakarta.com/news/${item.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                  >
                    <span className="h-8 w-8 rounded-md bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold">X</span>
                    Share on X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sxcjakarta.com/news/${item.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                  >
                    <span className="h-8 w-8 rounded-md bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold">in</span>
                    Share on LinkedIn
                  </a>
                </div>
              </div>

              {/* Category tag */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">Category</p>
                <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Date block */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">Published</p>
                <p className="text-sm text-zinc-700 font-medium">{item.date}</p>
                {item.author && <p className="text-xs text-zinc-400 mt-1">{item.author}</p>}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      <section className="relative z-10 w-full bg-zinc-50 border-t border-zinc-200 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-10 bg-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">More Articles</h2>
          </div>

          {related.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="group relative h-[300px] overflow-hidden rounded-xl bg-zinc-200"
                >
                  <Image
                    src={rel.cover}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-2">
                      {rel.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug text-white group-hover:text-blue-100 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-300">{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center py-10 border border-dashed border-zinc-300 rounded-xl">
              <div className="h-1 w-12 bg-blue-600 mb-6" />
              <p className="text-lg sm:text-xl font-semibold text-zinc-700 max-w-md">
                Stay tuned for more news from StudentsxCEOs Jakarta!
              </p>
              <p className="mt-3 text-sm text-zinc-400 max-w-sm">
                We&apos;re always working on something new. Check back soon for more updates, recaps, and stories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back to home CTA */}
      <section className="relative z-10 w-full bg-white border-t border-zinc-200 py-14 sm:py-20 flex flex-col items-center text-center px-6">
        <div className="h-1 w-16 bg-blue-600 mb-6" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-4">Stay in the loop</h2>
        <p className="text-zinc-500 max-w-md mb-8">
          Explore more research, insights, and stories from the StudentsxCEOs Jakarta community.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-7 py-3 rounded-md"
        >
          Back to Home
          <span className="text-sm">→</span>
        </Link>
      </section>

    </main>
  );
}