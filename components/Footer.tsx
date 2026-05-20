"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border/40">
      {/* CTA Banner */}
      <div className="border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="section-label mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-gold" />
                Ready to Build?
              </p>
              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Let&apos;s build something{" "}
                <em className="text-gold italic">worth remembering.</em>
              </h2>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              <span>Start a Conversation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10">
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
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center">
                <span
                  className="font-display text-lg font-semibold text-gold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  M
                </span>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-cream group-hover:text-gold transition-colors">Moore Covenant</p>
                <p className="text-[9px] tracking-[0.22em] uppercase text-gold">Productions</p>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-5">
              Faith-driven social media management and storytelling for kingdom-minded entrepreneurs.
            </p>
            <p
              className="font-display text-base italic text-gold/60"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              &ldquo;My story is who I am. Are you ready to tell yours?&rdquo;
            </p>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-gold mb-5">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/moore.covenant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  Instagram · @moore.covenant
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@moorefavor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  YouTube · @moorefavor
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@moorefavor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  TikTok · @moorefavor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-gold mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:3013776958"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  (301) 377-6958
                </a>
              </li>
              <li>
                <a
                  href="mailto:moorecovenant@gmail.com"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 break-all"
                >
                  moorecovenant@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-[9px] py-2.5 px-4">
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            <span className="text-gold">Moore Covenant Productions</span> &copy; {year}
          </p>
          <p className="text-[10px] text-text-muted italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            &ldquo;Built on Covenant. Established for More.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
