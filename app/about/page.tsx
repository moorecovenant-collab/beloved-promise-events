"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  { letter: "B", word: "Beloved", desc: "Every client is treated as beloved — known, seen, and worthy of something extraordinary. This isn't just business; it's ministry." },
  { letter: "P", word: "Promise", desc: "God's promises never fail. We build every event on the foundation that what He ordains will come to pass — beautifully." },
  { letter: "E", word: "Excellence", desc: "We operate at the highest standard — not to impress, but because everything we do is ultimately unto the Lord." },
];

const timeline = [
  { label: "The Calling", desc: "Amyah discovered her love for decorating through peace — the kind only God gives. Every time she created, she felt it. This was the calling." },
  { label: "The Name", desc: "Beloved Promise came naturally. Beloved is what Amyah means in Hebrew. Promise is what God guarantees. Together, they are the foundation." },
  { label: "The Launch", desc: "Beloved Promise Events was launched in obedience — not fully knowing every detail, but trusting the One who does." },
  { label: "The Vision", desc: "To grow into a luxury decor agency serving clients across the DMV and beyond — including Christian leaders, galas, weddings, and milestone events." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 bg-ivory overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
            <div>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="section-label mb-6 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />About Amyah
              </motion.p>
              <div className="overflow-hidden mb-2">
                <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3rem, 7vw, 6rem)" }}
                  className="block text-wine leading-none">
                  She is
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6">
                <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-display-2xl font-light text-plum leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <em className="italic text-rose">Beloved</em>
                </motion.h1>
              </div>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="text-text-secondary text-base md:text-lg leading-loose max-w-lg">
                Amyah is a faith-rooted creative, a decorator, and the founder of Beloved Promise Events — a luxury event decorating company built on the unwavering promises of God.
              </motion.p>
            </div>

            {/* Right photo placeholder */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] max-h-[600px]">
              <div className="photo-placeholder w-full h-full">
                <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-rose/30" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-rose/30" />
                <div className="z-10 flex flex-col items-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.45">
                    <circle cx="14" cy="10" r="5" stroke="#BE7B8E" strokeWidth="1.5"/>
                    <path d="M4 27c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#BE7B8E" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-rose/60 text-[10px] tracking-[0.2em] uppercase">Amyah headshot</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 md:py-36 px-6 md:px-10 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="section-label mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />The Story
              </p>
              <h2 className="font-display text-display-lg font-light text-plum leading-tight mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Born from<br /><em className="italic text-rose">Obedience</em>
              </h2>
              {/* Secondary photo */}
              <div className="photo-placeholder aspect-[3/4] max-w-sm">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rose/30" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rose/30" />
                <div className="z-10 text-[10px] tracking-[0.18em] uppercase text-rose/50">Add work photo</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-text-secondary text-sm md:text-base leading-loose">
                <p>
                  Beloved Promise Events didn&apos;t start with a business plan. It started with a feeling — the deep, quiet peace that Amyah experienced every time she picked up a ribbon, arranged a centerpiece, or styled a space. That peace was the signal. That peace was the calling.
                </p>
                <p>
                  Amyah&apos;s name means <em className="italic text-plum">Beloved</em> in Hebrew. And she believes that&apos;s exactly who she is in the eyes of God — and who every client is too. The word &ldquo;Promise&rdquo; was added because that&apos;s what every event is: a promise fulfilled. A moment that was always meant to happen.
                </p>
                <p>
                  This business is a ministry. Every client — believer or not — encounters something different when they work with Beloved Promise Events. Maybe they notice the peace. Maybe they feel the excellence. Maybe they ask why it&apos;s different. And prayerfully, they see Christ.
                </p>
                <p>
                  Beloved Promise Events is rooted in the DMV, but the vision is far greater — luxury decor, destination events, and eventually a full-scale creative agency. One God-given promise at a time.
                </p>

                <blockquote className="font-display text-xl italic text-plum border-l-2 border-rose/40 pl-5 my-8 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  &ldquo;He gave me peace when I created. That was enough to know — this is where I was supposed to be.&rdquo;
                  <span className="block text-[10px] tracking-[0.15em] uppercase text-rose not-italic mt-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}>— Amyah, Founder</span>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND ON */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-lg mx-auto mb-16">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Our Foundation
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                What <em className="italic text-rose">B.P.E.</em> Stands For
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.letter} delay={i * 0.12} direction="up">
                <div className="service-card p-8 md:p-10 group text-center">
                  <span className="font-display text-7xl font-light text-rose/15 block leading-none mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v.letter}</span>
                  <h3 className="font-display text-2xl font-light text-plum mb-3 group-hover:text-wine transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v.word}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-plum">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="block text-gold/50 mb-2"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                The journey
              </span>
              <h2 className="font-display text-display-lg font-light text-cream"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                From Calling to <em className="italic text-gold">Company</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1} direction="left">
                <div className="flex gap-8 items-start border-b border-white/10 py-8 last:border-0">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center mt-1">
                    <span className="text-gold text-xs font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">{item.label}</p>
                    <p className="text-cream/70 text-sm md:text-base leading-loose">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS WE SERVE */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Who We Serve
              </p>
              <h2 className="font-display text-display-lg font-light text-plum leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Whoever God Brings<br /><em className="italic text-rose">Through the Door</em>
              </h2>
              <div className="space-y-4 text-text-secondary text-sm md:text-base leading-loose">
                <p>
                  Beloved Promise Events is open to all — but our heart is for kingdom-minded clients. Believers, Christian leaders, musicians, and families who want a decorator who prays over their event before setting up a single piece.
                </p>
                <p>
                  We also welcome non-believing clients warmly. We don&apos;t preach — we serve. And prayerfully, through the excellence of the work and the warmth of the experience, they see something different.
                </p>
                <p className="text-wine font-medium">
                  What we will not do: environments or events centered around sin — explicit content, adult entertainment venues, or anything that directly conflicts with our faith values.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {["Weddings & Engagements", "Birthday Milestones (18th, 21st, 30th, 50th+)",
                  "Baby & Bridal Showers", "Galas & Formal Events", "Church & Ministry Events",
                  "Corporate & Brand Activations", "Quinceañeras & Sweet 16s", "Graduation Celebrations"].map((event) => (
                  <div key={event} className="flex items-center gap-4 py-3 border-b border-border">
                    <span className="text-gold text-sm">✦</span>
                    <span className="text-sm text-text-secondary">{event}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-wine">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <span className="block text-gold/50 mb-4"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Let&apos;s make your moment
            </span>
            <h2 className="font-display text-display-lg font-light text-cream leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to Work With<br /><em className="italic text-gold">Beloved Promise Events?</em>
            </h2>
            <p className="text-cream/70 text-sm md:text-base leading-loose mb-8 max-w-lg mx-auto">
              Book a free consultation. No pressure — just a conversation about your vision, your budget, and how we can bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-ghost-light"><span>Book a Free Consultation</span></Link>
              <Link href="/services" className="btn-ghost-light"><span>View Services & Pricing</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
