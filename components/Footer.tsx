import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-[0.28em] text-white">
                  <span className="tracking-[0.28em]">STUDENTS</span>
                  <span className="mx-1 text-[0.75em] font-semibold tracking-normal align-baseline">x</span>
                  <span className="tracking-[0.28em]">CEO</span>
                  <span className="text-[0.75em] font-semibold tracking-normal align-baseline">S</span>
                </div>
                <div className="text-xs font-semibold tracking-wider text-blue-400">Jakarta</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Developing future leaders through programs, mentorship, and industry connections.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">About Us</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Know About Us</Link></li>
              <li><Link href="/our-people" className="hover:text-blue-400 transition-colors">Our People</Link></li>
              <li><Link href="/alumni-network" className="hover:text-blue-400 transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/programs" className="hover:text-blue-400 transition-colors">Programs</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link href="/partners" className="hover:text-blue-400 transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Get Involved + Follow */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Get Involved</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/join-us/community" className="hover:text-blue-400 transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold tracking-wider text-white/80">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              {/* Instagram */}
              <a 
                aria-label="Instagram" 
                href="https://www.instagram.com/studentsxceosjkt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="h-5 w-5 text-white"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.069-1.646-.069-4.849 0-3.204.013-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                aria-label="LinkedIn" 
                href="https://www.linkedin.com/company/studentsxceos-jakarta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="h-5 w-5 text-white"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* TikTok */}
              <a 
                aria-label="TikTok" 
                href="https://www.tiktok.com/@studentsxceosjkt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="h-5 w-5 text-white"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.81.47-1.37 1.33-1.53 2.24-.21 1.07.23 2.23 1.04 2.93.76.66 1.81.86 2.8.72 1.22-.18 2.23-1.1 2.59-2.26.14-.34.19-.71.18-1.08-.02-3.44 0-6.88-.02-10.32z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} StudentsxCEOs Jakarta. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
