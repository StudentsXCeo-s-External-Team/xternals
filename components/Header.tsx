"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Know About Us", href: "/about" },
      { label: "Our People", href: "/our-people" },
    ],
  },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  {
    label: "Join Us",
    dropdown: [
      { label: "Community", href: "/join-us/community" },
      { label: "Volunteer", href: "/join-us/volunteer" },
      { label: "Open Recruitment", href: "/join-us/open-recruitment" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  useEffect(() => {
    const onScroll = () => setIsShrunk(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-200 bg-white ${isShrunk ? "shadow-sm" : ""}`}>
      <nav className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div className={`items-center flex justify-between lg:grid lg:grid-cols-3 ${isShrunk ? "h-12 sm:h-16" : "h-16 sm:h-20"} transition-[height] duration-200`}>

          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link href="/" className="group shrink-0">
              <div className="leading-tight">
                <div className={`${isShrunk ? "text-base sm:text-lg" : "text-lg sm:text-xl"} font-bold tracking-[0.28em] text-sxc-navy transition-[font-size] duration-200`}>
                  <span className="tracking-[0.28em]">STUDENTS</span>
                  <span className="mx-1 text-[0.75em] font-semibold tracking-normal align-baseline">x</span>
                  <span className="tracking-[0.28em]">CEO</span>
                  <span className="text-[0.75em] font-semibold tracking-normal align-baseline">S</span>
                </div>
                <div className={`${isShrunk ? "text-xs sm:text-sm" : "text-sm sm:text-base"} font-semibold tracking-wider text-sxc-blue transition-[font-size] duration-200`}>
                  Jakarta
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-6 text-sm font-bold text-zinc-900">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center">
                    {item.href ? (
                      <Link href={item.href} className="transition-colors duration-300 ease-out hover:text-sxc-blue py-2 uppercase whitespace-nowrap">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="transition-colors duration-300 ease-out py-2 uppercase whitespace-nowrap cursor-default">
                        {item.label}
                      </span>
                    )}
                    <button className="flex items-center justify-center p-1 transition-colors duration-300 ease-out hover:text-sxc-blue cursor-pointer outline-none ml-0.5">
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link href={item.href!} className="transition-colors duration-300 ease-out hover:text-sxc-blue py-2 block uppercase whitespace-nowrap">
                    {item.label}
                  </Link>
                )}

                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-4 z-50">
                    <div className="backdrop-blur-xl bg-white/95 shadow-2xl border border-zinc-100 overflow-hidden p-1">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-sxc-skyblue/10 hover:text-sxc-blue transition-colors group/sub"
                        >
                          <span className="text-[10px] text-zinc-300 font-black group-hover/sub:text-sxc-blue transition-colors">
                            0{i + 1}
                          </span>
                          {sub.label}
                        </Link>
                      ))}
                      <div className="h-0.5 bg-sxc-skyblue mt-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile burger */}
          <div className="flex items-center justify-end">
            <button
              className="lg:hidden p-2 ml-2 text-zinc-700"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileExpand(item.label)}
                        className="flex w-full items-center justify-between px-4 py-3 text-sm font-bold text-zinc-800 hover:text-sxc-blue hover:bg-zinc-50 uppercase"
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="bg-zinc-50 border-l-2 border-sxc-skyblue ml-4 py-2">
                          {item.dropdown.map((sub, i) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-center gap-3 px-6 py-2 text-sm text-zinc-600 hover:text-sxc-blue"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="text-[10px] text-zinc-300 font-black">0{i + 1}</span>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-4 py-3 text-sm font-bold text-zinc-800 hover:text-sxc-blue hover:bg-zinc-50 uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
