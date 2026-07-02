import Image from "next/image";
import Link from "next/link";
import ScrollGradient from "../components/ScrollGradient";
import ScrollReveal from "../components/ScrollReveal";
import { getNewsList } from "@/lib/dashboard";
import { sponsors } from "@/data/sponsor";
import { mediaPartners } from "@/data/mediapartners";
import HeroSection from "../components/HeroSection";
import { ProgramsCarousel } from "../components/ProgramsCarousel";
import { MagneticButton } from "../components/MagneticButton";
export const dynamic = "force-dynamic";

export default async function Home() {
  const dashboardNews = await getNewsList(4);
  const newsItems = dashboardNews.map((n) => ({
    slug: n.slug,
    cover: n.image_url ?? "",
    category: "NEWS",
    title: n.title,
  }));
  return (
    <main className="relative min-h-[50svh] w-full bg-sxc-navy text-white overflow-hidden">
      <ScrollGradient />
      <ScrollReveal />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="relative z-20 w-full px-0 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-zinc-50 text-zinc-900 px-6 sm:px-12 min-h-[520px] sm:min-h-[680px] flex items-center js-reveal relative overflow-hidden">
            <div className="max-w-2xl md:max-w-3xl relative z-10">
              <div className="h-1 w-14 bg-sxc-skyblue mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base font-semibold tracking-wider text-zinc-700 mb-4 sm:mb-6">Discover who we are</p>
              <h3 className="mt-0 text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight">About StudentsxCEOs Jakarta</h3>
              <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl text-justify">
                We are a leadership community that connects university students directly with CEOs, founders, and industry professionals, creating space for growth, collaboration, and real experience.
              </p>
              <MagneticButton className="mt-8 inline-block">
                <a href="/our-people" className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-sxc-blue text-white hover:bg-sxc-navy transition-colors px-6 text-lg font-semibold">Find out more</a>
              </MagneticButton>
            </div>
          </div>
          <div className="min-h-[520px] sm:min-h-[680px] js-reveal relative overflow-hidden">
            <Image
              src="/About_us.jpg"
              alt="About StudentsxCEOs"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-sxc-navy/40 pointer-events-none" />
            <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={300} height={300}
              className="absolute bottom-[-4%] right-[-4%] w-36 h-36 sm:w-48 sm:h-48 pointer-events-none select-none opacity-55"
              style={{ mixBlendMode: "screen" }} />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative z-20 overflow-hidden mx-auto max-w-screen-2xl px-6 sm:px-8 py-14 sm:py-20">
        <Image src="/ornaments/ring-gold-1.png" alt="" aria-hidden="true" width={200} height={200}
          className="absolute top-[5%] right-[1%] w-20 h-20 sm:w-28 sm:h-28 pointer-events-none select-none opacity-30"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/asterisk-purple.png" alt="" aria-hidden="true" width={300} height={300}
          className="absolute bottom-[5%] left-[0%] w-28 h-28 sm:w-40 sm:h-40 pointer-events-none select-none opacity-35"
          style={{ mixBlendMode: "screen" }} />
        <div className="text-center js-reveal">
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-sxc-skyblue mb-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our Programs</h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            We offer programs centering around soft skills education for university students,
            from short events to dedicated training and scholarship opportunities.
          </p>
        </div>
        <ProgramsCarousel />
      </section>

      {/* Partners Section */}
      <section className="relative z-20 w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-8">
          <div className="text-center js-reveal">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Company Partners</h2>
          </div>
          <div className="mt-8 relative overflow-hidden js-reveal">
            <div className="logo-marquee flex items-center gap-x-10">
              {[...sponsors, ...sponsors].map((logo, i) => (
                <img key={i} src={logo.image} alt={logo.alt} className="h-10 sm:h-12 w-28 object-contain" />
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center js-reveal">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700">and many more</span>
          </div>
          <div className="mt-12 text-center js-reveal">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Media &amp; Community Partners</h2>
          </div>
          <div className="mt-8 relative overflow-hidden js-reveal">
            <div className="logo-marquee flex items-center gap-x-10">
              {[...mediaPartners, ...mediaPartners].map((logo, i) => (
                <img key={i} src={logo.image} alt={logo.alt} className="h-10 sm:h-12 w-28 object-contain" />
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center js-reveal">
            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700">and many more</span>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="relative z-20 w-full bg-zinc-50 py-14 sm:py-20">
        <div className="mx-auto max-w-none px-6 sm:px-8 lg:px-12">
          <div className="text-center js-reveal">
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-sxc-skyblue mb-4" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">Our Latest News</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {newsItems.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="group relative h-[520px] sm:h-[640px] overflow-hidden rounded-lg js-reveal">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                  <span className="text-xs font-semibold tracking-wider text-white/80">{item.category}</span>
                  <h4 className="mt-2 text-lg sm:text-xl font-semibold text-white">{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
