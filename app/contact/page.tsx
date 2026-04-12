import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | StudentsxCEOs Jakarta",
  description: "Get in touch with StudentsxCEOs Jakarta.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pt-32 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Information */}
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">GET IN TOUCH</span>
            <h1 className="text-5xl sm:text-6xl font-serif text-zinc-900 mb-8 leading-tight">
              Let's Start a<br />Conversation
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12">
              Have questions about our programs, partnerships, or membership? We're here to help. Reach out to us through the form or our contact channels.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Visit Us</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Jakarta, Indonesia<br />
                    
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Email Us</h3>
                  <p className="text-zinc-600">
                    marketing.studentsxceosjakarta@gmail.com
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Follow Us</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.instagram.com/studentsxceosjkt" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/company/studentsxceos-jakarta/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">LinkedIn</a>
                    <a href="https://www.tiktok.com/@studentsxceosjkt" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-neutral-50 p-8 sm:p-12 rounded-2xl border border-black/5">
            <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-zinc-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-zinc-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all text-zinc-600">
                  <option>General Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Membership Question</option>
                  <option>Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
