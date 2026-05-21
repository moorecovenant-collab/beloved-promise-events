"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="section-label mb-4 flex items-center gap-3" style={{ color: "#C9A878" }}>
                <span className="block w-6 h-px" style={{ background: "#C9A878" }} />
                Ready to bring your vision to life?
              </p>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Let&apos;s create something{" "}
                <em className="italic" style={{ color: "#C9A878" }}>beautifully promised.</em>
              </h2>
            </div>
            <Link href="/contact" className="btn-ghost-light shrink-0">
              <span>Book a Consultation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5 group">
              <span
                className="text-4xl text-gold/80 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Beloved Promise
              </span>
              <p className="text-[9px] tracking-[0.28em] uppercase text-gold/50 mt-1">Events</p>
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs mb-5">
              Faith-rooted luxury event decorating for the DMV and beyond. Where your vision meets His promise.
            </p>
            <p
              className="font-display text-base italic text-gold/50 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              &ldquo;Let us hold tightly without wavering to the hope we affirm.&rdquo;
            </p>
            <p className="text-[9px] tracking-[0.15em] uppercase text-gold/40 mt-1">— Hebrews 10:23</p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[9px] tracking-[0.22em] uppercase text-gold/70 mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Amyah" },
                { href: "/services", label: "Services & Pricing" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Book a Consultation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/50 hover:text-cream transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[9px] tracking-[0.22em] uppercase text-gold/70 mb-5">Connect</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-cream/50 hover:text-cream transition-colors duration-300">
                  Instagram · @belovedpromiseevents
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/50 hover:text-cream transition-colors duration-300">
                  TikTok · @belovedpromiseevents
                </a>
              </li>
              <li>
                <a href="mailto:hello@belovedpromiseevents.com" className="text-sm text-cream/50 hover:text-cream transition-colors duration-300 break-all">
                  hello@belovedpromiseevents.com
                </a>
              </li>
            </ul>
            <p className="text-[10px] text-gold/40 mt-5 leading-relaxed">
              Based in the DMV<br />Serving DC · Maryland · Virginia
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            &copy; {year} Beloved Promise Events. All rights reserved.
          </p>
          <p className="text-[10px] text-cream/20 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Built on faith. Delivered with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
