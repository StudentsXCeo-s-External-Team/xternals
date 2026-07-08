import { sponsors } from "@/data/sponsor";
import { mediaPartners } from "@/data/mediapartners";
import Image from "next/image";
import { getPartnersList, DashboardPartner } from "@/lib/dashboard";
import { ParallaxGhost } from "@/components/ParallaxGhost";

export const revalidate = 60;

function LogoCard({ label, size = "md", image }: { label: string; size?: "lg" | "md" | "sm"; image: string }) {
  const pad = size === "lg" ? "p-8" : size === "md" ? "p-6" : "p-5";
  return (
    <div className={`group relative z-10 aspect-3/2 bg-white border border-zinc-100 ${pad} flex items-center justify-center overflow-hidden`}>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Image
          src={image}
          alt={label}
          width={600}
          height={400}
          className="object-contain max-w-full h-auto"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-sxc-skyblue group-hover:w-full transition-all duration-500" />
    </div>
  );
}

function SectionDivider({ number, label, light = false }: { number: string; label: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-5 mb-14 ${light ? "text-white" : "text-zinc-900"}`}>
      <span className={`text-xs font-black tracking-[0.3em] uppercase ${light ? "text-sxc-skyblue-light" : "text-sxc-blue"}`}>{number}</span>
      <div className={`h-px w-10 ${light ? "bg-sxc-skyblue-light" : "bg-sxc-blue"}`} />
      <h2 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${light ? "text-white" : "text-zinc-900"}`}>{label}</h2>
      <div className={`h-px grow ${light ? "bg-white/10" : "bg-zinc-100"}`} />
    </div>
  );
}

type LogoItem = { id: string | number; name: string; image: string; alt: string };

function toLogoItem(p: DashboardPartner): LogoItem {
  return { id: p.id, name: p.name, image: p.logo_url, alt: p.name };
}

export default async function PartnersPage() {
  const [remoteCorpRaw, remoteMediaRaw, remoteCommunityRaw] = await Promise.all([
    getPartnersList("corporate"),
    getPartnersList("media"),
    getPartnersList("community"),
  ]);

  const corporate: LogoItem[] = remoteCorpRaw.length > 0
    ? remoteCorpRaw.map(toLogoItem)
    : sponsors.map((s) => ({ id: s.id, name: s.name, image: s.image, alt: s.alt }));

  const media: LogoItem[] = remoteMediaRaw.length > 0
    ? remoteMediaRaw.map(toLogoItem)
    : mediaPartners.map((m) => ({ id: m.id, name: m.name, image: m.image, alt: m.alt }));

  const community: LogoItem[] = remoteCommunityRaw.length > 0
    ? remoteCommunityRaw.map(toLogoItem)
    : mediaPartners.map((m) => ({ id: m.id, name: m.name, image: m.image, alt: m.alt }));

  return (
    <main className="min-h-screen font-sans overflow-x-hidden bg-white text-zinc-900">

      {/* HERO */}
      <section className="relative h-screen w-full bg-sxc-navy flex flex-col justify-end pb-28 px-6 sm:px-16 overflow-hidden">
        <ParallaxGhost />

        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[6%] right-[20%] w-44 h-44 sm:w-60 sm:h-60 pointer-events-none select-none opacity-65"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/ring-gold-1.png" alt="" aria-hidden="true" width={200} height={200}
          className="absolute top-[30%] right-[4%] w-20 h-20 sm:w-28 sm:h-28 pointer-events-none select-none opacity-35"
          style={{ mixBlendMode: "screen" }} />

        <div className="absolute top-0 left-0 w-[3px] h-full bg-sxc-skyblue" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <p className="text-sxc-skyblue tracking-[0.15em] uppercase text-xs font-semibold mb-6">
            StudentsxCEOs Jakarta
          </p>
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-black text-white uppercase leading-[0.88] tracking-tight mb-10">
            Our<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-sxc-skyblue)" }}>
              Partners.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              We collaborate with leading companies and organisations to bridge the gap between students and industry leaders.
            </p>
            <div className="flex gap-8 text-white/35 text-xs tracking-widest uppercase font-semibold">
              <a href="#corporate" className="hover:text-sxc-skyblue-light transition-colors">01 — Previous Corporate</a>
              <a href="#media" className="hover:text-sxc-skyblue-light transition-colors">02 — Previous Media</a>
              <a href="#community" className="hover:text-sxc-skyblue-light transition-colors">03 — Previous Community</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-14 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-14 bg-white animate-pulse" />
          <span className="text-white text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20" style={{ height: "180px" }}>
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(12,15,30,0.7) 40%, #ffffff 100%)"
          }} />
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80"
            preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "80px" }}>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* 01 — CORPORATE */}
      <section id="corporate" className="relative bg-white py-24 sm:py-32 px-6 sm:px-16" style={{ marginTop: "-2px" }}>
        <span className="absolute top-8 right-8 text-[15vw] font-black text-zinc-100 leading-none select-none pointer-events-none">01</span>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionDivider number="01" label="Previous Corporate Partners" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-zinc-100">
            {corporate.map((item) => (
              <div key={item.id} className="border-r border-b border-zinc-100 last:border-r-0">
                <LogoCard label={item.name} image={item.image} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — MEDIA */}
      <section id="media" className="relative bg-sxc-navy py-24 sm:py-32 px-6 sm:px-16 overflow-hidden">
        <span className="absolute top-8 right-8 text-[15vw] font-black leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.03)" }}>02</span>
        <div className="absolute top-0 left-0 w-full h-[3px] bg-sxc-skyblue" />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-sxc-skyblue" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionDivider number="02" label="Previous Media Partners" light />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-white/10">
            {media.map((item) => (
              <div key={item.id} className="border-r border-b border-white/10 last:border-r-0">
                <div className="group relative aspect-3/2 bg-transparent flex items-center justify-center overflow-hidden border-0">
                  <Image src={item.image} alt={item.alt} fill className="object-contain p-6"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw" />
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-sxc-skyblue-light group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — COMMUNITY */}
      <section id="community" className="relative bg-zinc-50 py-24 sm:py-32 px-6 sm:px-16 overflow-hidden">
        <span className="absolute top-8 right-8 text-[15vw] font-black text-zinc-200 leading-none select-none pointer-events-none">03</span>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionDivider number="03" label="Previous Community Partners" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border border-zinc-200">
            {community.map((item) => (
              <div key={item.id} className="border-r border-b border-zinc-200 last:border-r-0">
                <LogoCard label={item.name} image={item.image} size="md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-sxc-navy overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sxc-skyblue/10 blur-3xl rounded-full" />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-sxc-skyblue" />
        <span className="absolute left-0 bottom-0 text-[14vw] font-black leading-none select-none pointer-events-none translate-y-2" style={{ color: "rgba(255,255,255,0.025)" }}>
          PARTNER
        </span>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-16 py-28 sm:py-36">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <p className="text-sxc-skyblue-light tracking-[0.15em] uppercase text-xs font-bold mb-6">Partner</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white mb-0">
                Collaborate<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-sxc-skyblue)" }}>With Us.</span>
              </h2>
            </div>
            <div className="max-w-lg">
              <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                Interested in collaborating with StudentsxCEOs Jakarta? We are always open to new partnerships that bring real value to our student community and your organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-sxc-blue hover:bg-sxc-navy text-white font-bold px-8 py-4 transition-colors duration-300 uppercase text-sm tracking-[0.15em]">
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-sxc-skyblue text-white font-bold px-8 py-4 transition-colors duration-300 uppercase text-sm tracking-wider">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
