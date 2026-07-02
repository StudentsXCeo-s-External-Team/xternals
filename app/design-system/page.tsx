'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardGradientClass,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const sectionNav = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'tagline', label: 'Tagline' },
  { id: 'grid', label: 'Grid' },
  { id: 'logo', label: 'Logo Usage' },
  { id: 'components', label: 'Components' },
];

function SectionLabel({ name }: { name: string }) {
  return (
    <p className="text-sxc-navy/50 text-xs font-bold uppercase tracking-widest mb-3">
      {name}
    </p>
  );
}

function PageSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 md:px-20 py-16 max-w-screen-xl mx-auto scroll-mt-20 border-b border-sxc-navy/10 last:border-b-0">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-sxc-skyblue font-black text-sm tracking-widest">{number}</span>
        <h2 className="text-[1.75rem] font-black text-sxc-navy">{title}</h2>
      </div>
      {children}
    </section>
  );
}

const primaryColorsTop = [
  { name: 'Yellow', hex: '#F4CC0A' },
  { name: 'Sky Blue', hex: '#00ADF1' },
  { name: 'Steel Blue', hex: '#1E517D' },
  { name: 'Navy', hex: '#07224F' },
  { name: 'Eggplant', hex: '#1B0A40' },
];

const primaryColorsBottom = [
  { name: 'White', hex: '#FFFFFF', dark: true },
  { name: 'Sky Blue Light', hex: '#8ECAE6' },
  { name: 'Blue', hex: '#2061E3' },
  { name: 'Indigo', hex: '#180A5E' },
  { name: 'Indigo Dark', hex: '#0F1266' },
];

const secondaryColors = [
  { name: 'Secondary Indigo', hex: '#24277B' },
  { name: 'Secondary Violet Dark', hex: '#220D5C' },
  { name: 'Secondary Violet', hex: '#20106B' },
  { name: 'Secondary Purple', hex: '#5942C8' },
];

const gradients = [
  { name: 'Gradient 01', var: 'var(--gradient-sxc-1)' },
  { name: 'Gradient 02', var: 'var(--gradient-sxc-2)' },
  { name: 'Gradient 03', var: 'var(--gradient-sxc-3)' },
  { name: 'Gradient 04', var: 'var(--gradient-sxc-4)' },
  { name: 'Gradient 05', var: 'var(--gradient-sxc-5)' },
  { name: 'Gradient 06', var: 'var(--gradient-sxc-6)' },
  { name: 'Gradient 07', var: 'var(--gradient-sxc-7)' },
  { name: 'Gradient 08', var: 'var(--gradient-sxc-8)' },
  { name: 'Gradient 09', var: 'var(--gradient-sxc-9)' },
  { name: 'Gradient 10', var: 'var(--gradient-sxc-10)' },
];

const typeStyles = [
  { label: 'Black', weight: 900 },
  { label: 'Bold', weight: 700 },
  { label: 'Medium', weight: 600 },
  { label: 'Roman', weight: 400 },
  { label: 'Light', weight: 300 },
  { label: 'XThin', weight: 200 },
];

const headingScale = [
  { label: 'H1', size: '2.25rem', weight: 900, note: '36px · Black' },
  { label: 'H2', size: '1.75rem', weight: 900, note: '28px · Black' },
  { label: 'H3', size: '1.5rem', weight: 900, note: '24px · Black' },
  { label: 'H4', size: '1.25rem', weight: 700, note: '20px · Bold' },
  { label: 'H5', size: '1rem', weight: 700, note: '16px · Bold' },
];

function Swatch({ name, hex, dark = false }: { name: string; hex: string; dark?: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-20 rounded-lg border border-sxc-navy/10 flex items-end p-2"
        style={{ background: hex }}
      >
        <span
          className="text-[10px] font-mono font-bold uppercase"
          style={{ color: dark ? '#07224F' : 'rgba(255,255,255,0.85)' }}
        >
          {hex}
        </span>
      </div>
      <p className="text-sxc-navy text-xs font-semibold mt-2">{name}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="pt-28 pb-16 px-6 md:px-20 text-white relative overflow-hidden"
        style={{ backgroundImage: 'var(--gradient-sxc-4)' }}
      >
        <p className="text-white/60 text-xs font-bold tracking-widest mb-3">2026</p>
        <h1 className="text-5xl md:text-6xl font-black leading-none mb-4">Design System</h1>
        <p className="text-white/80 text-lg font-semibold">
          StudentsxCEOs Jakarta — Batch 14 · Brand Guidelines
        </p>
        <p className="mt-6 font-black text-xl">
          Learn.<span className="italic font-bold text-sxc-skyblue-light">Share</span>.Impact!
        </p>
      </header>

      {/* Sticky nav */}
      <nav
        className="sticky top-0 z-40 flex justify-center gap-1 px-4 py-3 border-b border-sxc-navy/10 bg-white/90 backdrop-blur-md"
        aria-label="Design system sections"
      >
        {sectionNav.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="px-4 py-1.5 rounded-full text-sm font-semibold text-sxc-navy/60 hover:text-sxc-navy hover:bg-sxc-skyblue-light/30 transition-all duration-200"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* ═══ COLORS ═══ */}
      <PageSection id="colors" number="03" title="Color Palette">
        <div className="space-y-12">
          <div>
            <SectionLabel name="Primary Colors" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {primaryColorsTop.map((c) => (
                <Swatch key={c.hex} {...c} />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              {primaryColorsBottom.map((c) => (
                <Swatch key={c.hex} {...c} />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel name="Secondary Colors" />
            <div className="flex flex-col gap-1 max-w-2xl overflow-hidden rounded-lg border border-sxc-navy/10">
              {secondaryColors.map((c) => (
                <div
                  key={c.hex}
                  className="px-5 py-4 text-white font-bold text-lg"
                  style={{ background: c.hex }}
                >
                  {c.hex}
                  <span className="ml-3 text-sm font-semibold opacity-70">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel name="Gradient Colors" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {gradients.map((g) => (
                <div key={g.name} className="flex flex-col gap-2">
                  <div
                    className="w-full h-16 rounded-lg border border-sxc-navy/10"
                    style={{ backgroundImage: g.var }}
                  />
                  <p className="text-sxc-navy/60 text-[11px] font-mono">{g.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel name="Logo on Color Pairing" />
            <p className="text-sxc-navy/70 text-sm max-w-2xl">
              Logo formal (full color) dipakai di atas latar terang (Sky Blue Light, White) maupun
              gelap (Indigo, Indigo Dark gradasi) — selama kontras tetap terjaga agar wordmark
              &ldquo;Students x CEOs&rdquo; tetap terbaca jelas.
            </p>
          </div>
        </div>
      </PageSection>

      {/* ═══ TYPOGRAPHY ═══ */}
      <PageSection id="typography" number="07" title="Typography">
        <div className="space-y-10">
          <div>
            <p className="italic text-sxc-navy/50 text-sm mb-1">Font:</p>
            <h3 className="text-4xl font-black text-sxc-navy mb-2">Neue Haas Grostek Display Pro</h3>
            <p className="text-sxc-navy/70 text-sm max-w-xl">
              Satu typeface untuk seluruh desain. Dipakai untuk Instagram Story &amp; Feeds; ukuran
              dapat disesuaikan untuk booklet, proposal, presentasi, dsb.
            </p>
          </div>

          <div>
            <SectionLabel name="Weights" />
            <div className="space-y-4">
              {typeStyles.map((t) => (
                <div key={t.label} className="flex items-baseline gap-6 border-b border-sxc-navy/10 pb-4 last:border-0">
                  <span className="text-sxc-navy/40 font-mono text-xs w-16 shrink-0">{t.label}</span>
                  <span
                    className="text-sxc-navy text-3xl leading-none"
                    style={{ fontWeight: t.weight }}
                  >
                    The quick brown fox
                  </span>
                  <span className="text-sxc-navy/40 text-xs ml-auto shrink-0 hidden md:block">
                    weight {t.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel name="Heading Scale" />
            <div className="space-y-3">
              {headingScale.map((h) => (
                <div key={h.label} className="flex items-baseline gap-6 border-b border-sxc-navy/10 pb-3 last:border-0">
                  <span className="text-sxc-navy/40 font-mono text-xs w-8 shrink-0">{h.label}</span>
                  <span
                    className="text-sxc-navy leading-tight"
                    style={{ fontSize: h.size, fontWeight: h.weight }}
                  >
                    Aa — Neue Haas Grostek
                  </span>
                  <span className="text-sxc-navy/40 text-xs ml-auto shrink-0">{h.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* ═══ TAGLINE ═══ */}
      <PageSection id="tagline" number="14" title="Tagline">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="italic text-sxc-navy/50 text-sm mb-1">Text</p>
            <p className="text-4xl font-black text-sxc-navy">
              Learn.<span className="italic">Share</span>.Impact!
            </p>
            <p className="text-sxc-navy/70 text-sm mt-4 max-w-md">
              <span className="font-bold">Learn</span> dan <span className="font-bold">Impact!</span>{' '}
              di-set Bold (non-italic), sementara <span className="italic font-bold">Share</span>{' '}
              di-set Bold Italic — semuanya Neue Haas Grostek Display Pro.
            </p>
          </div>
          <div>
            <SectionLabel name="Color Variations" />
            <div
              className="rounded-lg p-6 flex flex-col gap-3"
              style={{ background: 'var(--tagline-bg)' }}
            >
              <p className="text-2xl font-black" style={{ color: 'var(--tagline-color-1)' }}>
                Learn.<span className="italic" style={{ color: 'var(--tagline-color-3)' }}>Share</span>.Impact!
              </p>
              <p className="text-2xl font-black" style={{ color: 'var(--tagline-color-2)' }}>
                Learn.<span className="italic" style={{ color: 'var(--tagline-color-2)' }}>Share</span>.Impact!
              </p>
              <p className="text-2xl font-black" style={{ color: 'var(--tagline-color-3)' }}>
                Learn.<span className="italic" style={{ color: 'var(--tagline-color-3)' }}>Share</span>.Impact!
              </p>
              <p className="text-2xl font-black" style={{ color: 'var(--tagline-color-2)' }}>
                Learn.<span className="italic" style={{ color: 'var(--tagline-color-2)' }}>Share</span>.Impact!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold text-sxc-navy mb-1">
              Position: <span className="italic font-normal">Instagram Feeds</span>
            </p>
            <p className="text-sxc-navy/70 text-sm">Align center · between 40–87px from edge · font size 36px</p>
          </div>
          <div>
            <p className="font-bold text-sxc-navy mb-1">
              Position: <span className="italic font-normal">Story / Reels Cover</span>
            </p>
            <p className="text-sxc-navy/70 text-sm">Align center · between 45–120px from edge · font size 37px</p>
          </div>
        </div>
      </PageSection>

      {/* ═══ GRID ═══ */}
      <PageSection id="grid" number="13" title="Grid System">
        <p className="text-sxc-navy/70 text-sm max-w-xl mb-8">
          Mengatur teks, gambar, logo, dan elemen grafis agar informasi tetap terbaca jelas di setiap
          format media sosial.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-sxc-navy/10 rounded-lg p-5">
            <p className="italic font-bold text-sxc-navy mb-2">Instagram Feeds</p>
            <p className="text-sxc-navy/70 text-sm">Ratio 1080 × 1350px</p>
            <p className="text-sxc-navy/70 text-sm">Top &amp; bottom border: 130px</p>
            <p className="text-sxc-navy/70 text-sm">Left &amp; right border: 52px</p>
          </div>
          <div className="border border-sxc-navy/10 rounded-lg p-5">
            <p className="italic font-bold text-sxc-navy mb-2">Story &amp; Reels Cover</p>
            <p className="text-sxc-navy/70 text-sm">Ratio 1080 × 1920px</p>
            <p className="text-sxc-navy/70 text-sm">Top &amp; bottom border: 130px</p>
            <p className="text-sxc-navy/70 text-sm">Left &amp; right border: 52px</p>
          </div>
        </div>
      </PageSection>

      {/* ═══ LOGO USAGE ═══ */}
      <PageSection id="logo" number="15" title="Logo Usage">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="italic font-bold text-sxc-navy mb-2">Formal Logo Variations</p>
            <p className="text-sxc-navy/70 text-sm">
              Dokumen, sertifikat, proposal, surat, business deal, presentasi, serta materi yang
              dikirim ke media dan community partners.
            </p>
          </div>
          <div>
            <p className="italic font-bold text-sxc-navy mb-2">Chat Logo Variations</p>
            <p className="text-sxc-navy/70 text-sm">
              Konten media sosial dan poster event.
            </p>
          </div>
        </div>
      </PageSection>

      {/* ═══ COMPONENTS ═══ */}
      <PageSection id="components" number="—" title="Components (shadcn)">
        <p className="text-sxc-navy/70 text-sm max-w-xl mb-10">
          Bukan bagian dari brand guideline PDF — ini implementasi shadcn yang sudah
          direstyle pakai token di atas, supaya konsisten dengan brand saat dipakai di produk.
        </p>

        <div className="space-y-12">
          <div>
            <SectionLabel name="Button" />
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link button</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center mt-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          <div>
            <SectionLabel name="Badge" />
            <div className="flex flex-wrap gap-2">
              <Badge variant="open">Open</Badge>
              <Badge variant="active">Active</Badge>
              <Badge variant="closed">Closed</Badge>
              <Badge variant="draft">Draft</Badge>
              <Badge variant="accent">New</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div>
            <SectionLabel name="Input" />
            <div className="max-w-sm space-y-3">
              <Input placeholder="Masukkan nama..." />
              <Input placeholder="Disabled" disabled />
              <Input placeholder="Invalid" aria-invalid />
            </div>
          </div>

          <div>
            <SectionLabel name="Card" />
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Rekrutmen Mentor Batch 14</CardTitle>
                  <CardDescription>Dibuka untuk mahasiswa S1/S2 seluruh Indonesia</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="active">Active</Badge>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="primary">Daftar sekarang</Button>
                </CardFooter>
              </Card>

              <Card className={cardGradientClass}>
                <CardHeader>
                  <CardTitle className="text-white">Featured event</CardTitle>
                  <CardDescription className="text-white/70">
                    Card dengan latar gradient brand, untuk highlight/promo.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-white/20">
                  <Button size="sm" variant="accent">Lihat detail</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Footer */}
      <footer
        className="px-6 md:px-20 py-10 text-white"
        style={{ backgroundImage: 'var(--gradient-sxc-4)' }}
      >
        <p className="font-black text-xl">
          Learn.<span className="italic font-bold text-sxc-skyblue-light">Share</span>.Impact!
        </p>
        <p className="text-white/60 text-sm mt-2">StudentsxCEOs Jakarta Batch 14 · 2026</p>
      </footer>
    </div>
  );
}
