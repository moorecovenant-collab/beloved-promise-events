"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = ["All", "Balloons", "Florals", "Backdrops", "Galas", "Birthdays", "Weddings"];

const placeholders = [
  { span: "col-span-1 row-span-2", aspect: "aspect-[3/5]", label: "Feature Work" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1 row-span-2", aspect: "aspect-[3/5]", label: "Feature Work" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1 row-span-2", aspect: "aspect-[3/5]", label: "Feature Work" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
  { span: "col-span-1", aspect: "aspect-square", label: "Add Photo" },
];

export default function GalleryPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="section-label mb-6 flex items-center gap-3">
            <span className="block w-6 h-px bg-rose/60" />Our Work
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="overflow-hidden mb-2">
                <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-display-2xl font-light text-plum leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Created with
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3rem, 7vw, 6rem)" }}
                  className="block text-rose leading-none">
                  Love & Faith
                </motion.h1>
              </div>
            </div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="text-text-secondary text-base leading-loose max-w-lg">
              Every piece in this gallery was built with intention, prayer, and creativity. These are moments that mattered — decorated to reflect the beauty of the One who promises good things.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 px-6 md:px-10 lg:px-16 bg-cream border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button key={cat}
                className={`flex-shrink-0 px-5 py-2 text-[10px] tracking-[0.18em] uppercase transition-all duration-300 border ${
                  i === 0
                    ? "bg-wine text-ivory border-wine"
                    : "bg-transparent text-text-secondary border-border hover:border-rose hover:text-rose"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN GALLERY GRID */}
      <section className="py-12 md:py-20 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
            {placeholders.map((item, i) => (
              <div key={i} className={`gallery-item ${item.span}`}>
                <ScrollReveal delay={i * 0.05} direction="up">
                  <div className={`photo-placeholder ${item.aspect} group cursor-pointer`}>
                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-rose/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-rose/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="z-10 flex flex-col items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="2" y="5" width="16" height="12" rx="1" stroke="#BE7B8E" strokeWidth="1.2"/>
                        <circle cx="10" cy="11" r="3" stroke="#BE7B8E" strokeWidth="1.2"/>
                        <path d="M7 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="#BE7B8E" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[9px] tracking-[0.18em] uppercase text-rose/60">{item.label}</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-text-muted text-sm mb-6">
                More work coming soon — follow us on Instagram for the latest events.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="btn-primary"><span>Follow on Instagram</span></a>
                <Link href="/contact" className="btn-outline"><span>Book Your Event</span></Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED EVENT SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-lg mx-auto mb-14">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Feature Event
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Spotlight: <em className="italic text-rose">Recent Work</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Feature photo */}
            <ScrollReveal direction="left">
              <div className="photo-placeholder aspect-[4/3] max-w-full">
                <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-rose/30" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-rose/30" />
                <div className="z-10 flex flex-col items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="5" width="20" height="15" rx="1" stroke="#BE7B8E" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" stroke="#BE7B8E" strokeWidth="1.5"/>
                    <path d="M8 5V4a1 1 0 011-1h6a1 1 0 011 1v1" stroke="#BE7B8E" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-rose/60 text-[10px] tracking-[0.2em] uppercase">Add feature event photo</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature details */}
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[1,2,3,4].map((n) => (
                  <div key={n} className="photo-placeholder aspect-square">
                    <div className="z-10 text-[9px] tracking-[0.15em] uppercase text-rose/50">Detail {n}</div>
                  </div>
                ))}
              </div>
              <p className="section-label mb-3 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Event Spotlight
              </p>
              <h3 className="font-display text-3xl font-light text-plum mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Add Event Name Here<br /><em className="italic text-rose">Event Type · Location</em>
              </h3>
              <p className="text-sm text-text-secondary leading-loose mb-6">
                Add a short description of this event — the vision, the design elements chosen, and what made it special. This is where the story behind the work lives.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Balloon Garland", "Floral Accents", "Custom Backdrop", "Table Styling"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 border border-rose/20 text-[9px] tracking-[0.14em] uppercase text-rose bg-blush">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="btn-primary"><span>Book a Similar Event</span></Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-20 px-6 md:px-10 lg:px-16 bg-wine">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <span className="block text-5xl text-rose/20 leading-none mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>&ldquo;</span>
            <p className="font-display text-2xl md:text-3xl italic font-light text-cream leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              She didn&apos;t just decorate a room. She decorated a moment I will carry forever.
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold">Client Name · Event Type · DMV</p>
            <div className="mt-8">
              <Link href="/contact" className="btn-ghost-light"><span>Book Your Moment</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
