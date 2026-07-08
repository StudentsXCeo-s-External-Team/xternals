import { Metadata } from "next";
import Image from "next/image";
import { PersonCard, BoardMemberCard } from "@/components/PersonCard";
import { MANAGEMENT, BOARD_MEMBERS } from "@/data/people-data";
import { getMembersList, DashboardMember } from "@/lib/dashboard";

export const metadata: Metadata = {
  title: "Our People | StudentsxCEOs Jakarta",
  description: "Meet the Board of Executive, Board of Management, and Board Members of StudentsxCEOs Jakarta.",
};

export const revalidate = 60;

type ExecTopItem = { name: string; role: string; imageSrc: string; variant: "management"; className?: string };

const HARDCODED_EXEC_TOP: ExecTopItem[] = [
  { name: "Andhika Pratama", role: "Controller", imageSrc: "/boards/controller.jpg", variant: "management", className: "order-2 md:order-none" },
  { name: "Nicholas Audric Adonis Mathew", role: "Chief Executive Officer", imageSrc: "/boards/ceo.jpg", variant: "management", className: "order-1 md:order-none md:-translate-y-10" },
  { name: "Alisya Mutiara Arsyisi", role: "General Secretary", imageSrc: "/boards/gensec.png", variant: "management", className: "order-3 md:order-none" },
];

const HARDCODED_EXEC_BOTTOM = [
  { name: "Ari Muhamad Juliansyah", role: "Chief Data & Technology Officer", imageSrc: "/boards/CDNT.png", variant: "management" as const },
  { name: "Rona Sasia Nabila Harahap", role: "Chief Human Resources Officer", imageSrc: "/boards/CHR.JPG", variant: "management" as const },
  { name: "Fazril Harun", role: "Chief Finance Officer", imageSrc: "/boards/CFO.JPG", variant: "management" as const },
  { name: "Darrell Damareka", role: "Chief Operation Officer", imageSrc: "/boards/COO.JPG", variant: "management" as const },
  { name: "Rasya Amalya Putri Purwanto", role: "Chief Marketing Officer", imageSrc: "/boards/CMO.jpg", variant: "management" as const },
];

function memberToPersonCard(m: DashboardMember): ExecTopItem {
  return {
    name: m.name,
    role: m.position ?? m.department ?? "",
    imageSrc: m.photo_url ?? "",
    variant: "management",
  };
}

function memberToBoardCard(m: DashboardMember) {
  return {
    name: m.name,
    role: m.position ?? "",
    variant: m.department ?? "",
  };
}

function SectionLabel({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sxc-blue font-bold text-xl">{number}</span>
      <div className="h-px w-12 bg-sxc-blue" />
      <span className="text-sxc-blue font-bold tracking-[0.15em] uppercase text-sm">{label}</span>
    </div>
  );
}

export default async function OurPeoplePage() {
  const [remoteExec, remoteMgmt, remoteAssoc] = await Promise.all([
    getMembersList("executive"),
    getMembersList("management"),
    getMembersList("associate"),
  ]);

  const execTop = remoteExec.length > 0 ? remoteExec.slice(0, 3).map(memberToPersonCard) : HARDCODED_EXEC_TOP;
  const execBottom = remoteExec.length > 0 ? remoteExec.slice(3).map(memberToPersonCard) : HARDCODED_EXEC_BOTTOM;
  const management = remoteMgmt.length > 0 ? remoteMgmt.map(memberToPersonCard) : MANAGEMENT;
  const associates = remoteAssoc.length > 0 ? remoteAssoc.map(memberToBoardCard) : BOARD_MEMBERS;

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">

      <section className="relative bg-sxc-navy pt-40 pb-24 px-6 sm:px-12 overflow-hidden">
        <Image src="/ornaments/asterisk-navy.png" alt="" aria-hidden="true" width={400} height={400}
          className="absolute top-[5%] right-[2%] w-44 h-44 sm:w-60 sm:h-60 pointer-events-none select-none opacity-65"
          style={{ mixBlendMode: "screen" }} />
        <Image src="/ornaments/orb-gold-1.png" alt="" aria-hidden="true" width={160} height={160}
          className="absolute bottom-[10%] right-[10%] w-12 h-12 sm:w-16 sm:h-16 pointer-events-none select-none opacity-40"
          style={{ mixBlendMode: "screen" }} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <p className="text-sxc-skyblue tracking-[0.15em] uppercase text-xs sm:text-sm font-semibold mb-4">
            StudentsxCEOs Jakarta
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white uppercase">Our People</h1>
          <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-relaxed">
            The people behind our mission: leading, building, and making things happen.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-12 max-w-[1400px] mx-auto">

        {/* 1. BOARD OF EXECUTIVE */}
        <section className="py-20 sm:py-28 border-b border-zinc-100">
          <SectionLabel number={1} label="Board of Executive" />
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900 mb-16">Executive Board</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {execTop.map((p, i) => (
              <div key={i} className={p.className}>
                <PersonCard name={p.name} role={p.role} imageSrc={p.imageSrc} variant={p.variant} />
              </div>
            ))}
          </div>

          {execBottom.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {execBottom.map((p, i) => (
                <PersonCard key={i} name={p.name} role={p.role} imageSrc={p.imageSrc} variant={p.variant} />
              ))}
            </div>
          )}
        </section>

        {/* 2. BOARD OF MANAGEMENT */}
        <section className="py-20 sm:py-28 border-b border-zinc-100">
          <SectionLabel number={2} label="Board of Management" />
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900 mb-16">Management Board</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {management.map((person, i) => (
              <PersonCard key={i} name={person.name} role={person.role} imageSrc={person.imageSrc} variant={person.variant} />
            ))}
          </div>
        </section>

        {/* 3. ASSOCIATES */}
        <section className="py-20 sm:py-28">
          <SectionLabel number={3} label="Associates" />
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide text-zinc-900 mb-16">Associates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {associates.map((member, i) => (
              <BoardMemberCard key={i} name={member.name} role={member.role} variant={member.variant} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
