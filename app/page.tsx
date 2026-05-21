"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BalloonArch, BalloonCluster, BalloonGarland } from "@/components/ui/BalloonDecor";

const pillars = [
  {
    icon: "✦",
    title: "Rooted in Faith",
    desc: "Every event we touch is first lifted in prayer. We believe God's hand is in the details — because He is a God of beauty, order, and promise.",
  },
  {
    icon: "✧",
    title: "Your Vision, Honored",
    desc: "You dreamed it. We deliver it — exactly as you imagined, if not more breathtaking. Your vision is sacred to us.",
  },
  {
    icon: "✦",
    title: "Luxury Without Compromise",
    desc: "Timeless, stunning, set apart. Every installation is built to leave guests speechless and take the room's breath away.",
  },
];

const services = [
  { num: "01", title: "Event Décor & Styling", desc: "Full-service decorating that transforms any space into a breathtaking environment — from intimate gatherings to grand galas." },
  { num: "02", title: "Balloon Artistry", desc: "Organic balloon arches, garlands, columns, and ceilings. Modern luxury balloon design that elevates any event aesthetic." },
  { num: "03", title: "Backdrop & Floral Design", desc: "Custom backdrops, floral walls, and fresh or faux florals curated to your theme, palette, and vision." },
  { num: "04", title: "Theme Consultation", desc: "Not sure what you want? Let's build it together. We help you find and define your theme, then execute it flawlessly." },
];

const testimonials = [
  {
    quote: "Amyah turned my baby shower into something I still can't stop thinking about. Every detail was perfect — exactly what I pictured, even better.",
    name: "Client Name",
    event: "Baby Shower · Silver Spring, MD",
  },
  {
    quote: "She understood my vision from the first conversation. The day of, I walked in and literally cried. It was everything and more.",
    name: "Client Name",
    event: "Birthday Celebration · Washington, DC",
  },
  {
    quote: "Faith, professionalism, and creativity all in one. Beloved Promise Events is the real deal.",
    name: "Client Name",
    event: "Gala · Northern Virginia",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blush/60 to-transparent" />
          {/* Gold balloon arch — behind photo */}
          <BalloonArch className="absolute top-0 right-0 w-[580px] md:w-[700px] opacity-70" />
          <div className="absolute top-1/4 right-8 md:right-16 lg:right-24 w-[320px] md:w-[400px] lg:w-[480px] aspect-[3/4]">
            <div className="photo-placeholder w-full h-full relative">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rose/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rose/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.45">
                  <circle cx="14" cy="10" r="5" stroke="#BE7B8E" strokeWidth="1.5"/>
                  <path d="M4 27c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#BE7B8E" strokeWidth="1.5"/>
                </svg>
                <span className="text-rose/60 text-[10px] tracking-[0.2em] uppercase text-center px-4">Add Amyah photo here</span>
              </div>
            </div>
          </div>
          <motion.div animate={{ y: [0,-14,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-10 w-3 h-3 rounded-full bg-gold/30 hidden lg:block" />
          <motion.div animate={{ y: [0,10,0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-2/5 left-1/4 w-2 h-2 rounded-full bg-rose/30 hidden lg:block" />
        </div>

        <motion.div style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-[58%] lg:max-w-[52%]">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-rose/60" />
              <span className="section-label">Faith-Based Event Decorating · DMV</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <span className="block text-wine leading-none"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
                Beloved
              </span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              <span className="block text-rose leading-none"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
                Promise
              </span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8">
              <h1 className="font-display text-display-xl font-light text-plum leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Events
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md mb-4">
              Your vision. His promise. Delivered — exactly as you imagined, if not more beautiful than you dreamed.
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-display text-base italic text-rose/70 pl-4 border-l-2 border-rose/30 mb-8 md:mb-10 leading-relaxed max-w-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              &ldquo;Let us hold tightly without wavering to the hope we affirm, for God can be trusted to keep his promise.&rdquo;
              <br />
              <span className="text-[10px] tracking-[0.15em] uppercase text-gold not-italic" style={{ fontFamily: "'Inter', sans-serif" }}>Hebrews 10:23 NLT</span>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.35 }}
              className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="btn-primary"><span>Book a Consultation</span></Link>
              <Link href="/gallery" className="btn-outline"><span>View Our Work</span></Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-rose/50 to-transparent" />
          <p className="text-[9px] tracking-[0.3em] uppercase text-text-muted">Scroll</p>
        </motion.div>
      </section>

      {/* SCRIPTURE BANNER */}
      <section className="bg-wine py-14 md:py-20 overflow-hidden relative">
        {/* Balloon garland top */}
        <BalloonGarland className="absolute top-0 left-0 w-full h-20 opacity-40" />
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose/20 translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center relative z-10">
          <ScrollReveal direction="none">
            <span className="block text-gold/50 mb-4"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              His promises never fail
            </span>
            <p className="font-display text-xl md:text-2xl lg:text-3xl italic font-light text-cream/90 leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              &ldquo;Let us hold tightly without wavering to the hope we affirm,{" "}
              <span className="text-gold not-italic">for God can be trusted to keep his promise.</span>&rdquo;
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">Hebrews 10:23 · New Living Translation</p>
          </ScrollReveal>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-lg mx-auto mb-16">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />What Sets Us Apart<span className="block w-6 h-px bg-rose/60" />
              </p>
              <h2 className="font-display text-display-lg font-light text-plum leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Decorated by Faith,<br /><em className="italic text-rose">Designed for You</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.12} direction="up">
                <div className="service-card p-8 md:p-10 text-center group">
                  <span className="block text-2xl text-gold mb-5">{p.icon}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-plum mb-4 group-hover:text-wine transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT AMYAH TEASER */}
      <section className="py-20 md:py-36 px-6 md:px-10 lg:px-16 bg-cream relative overflow-hidden">
        <BalloonCluster className="absolute bottom-0 right-0 w-40 h-40 opacity-50" variant="right" />
        <BalloonCluster className="absolute top-8 left-0 w-28 h-28 opacity-30" variant="left" />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center relative z-10">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] max-w-md overflow-visible">
              <div className="photo-placeholder w-full h-full">
                <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-rose/30" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-rose/30" />
                <div className="z-10 flex flex-col items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.5">
                    <circle cx="12" cy="8" r="4" stroke="#BE7B8E" strokeWidth="1.5"/>
                    <path d="M3 21c0-4.971 4.029-9 9-9s9 4.029 9 9" stroke="#BE7B8E" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-rose/60 text-[10px] tracking-[0.2em] uppercase">Amyah — Founder</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-wine text-cream px-5 py-3 shadow-luxury z-10">
                <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#C9A878" }}>Faith · Vision · Beauty</span>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="section-label mb-6 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Meet Amyah
              </p>
              <h2 className="font-display text-display-lg font-light text-plum leading-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The Name Means<br /><em className="italic text-rose">Beloved</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-text-secondary text-sm md:text-base leading-loose mb-8">
                <p>Beloved — that&apos;s what my name means in Hebrew. And that&apos;s exactly how I treat every client: beloved. Known. Seen. Worthy of something extraordinary.</p>
                <p>Beloved Promise Events was born out of Amyah&apos;s passion for creativity, her peace in decorating, and her obedience to God&apos;s calling on her life. This business is a ministry — and every beautifully designed space is a testament to His faithfulness.</p>
                <p>Based in the DMV, I craft luxury event décor that is timeless, creative, and set apart — for you, the client who wants your event to feel like a God-given promise fulfilled.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Faith-Based", "DMV Area", "Luxury Decor", "Balloon Artistry", "Floral Design", "Theme Styling"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 border border-rose/20 text-[9px] tracking-[0.14em] uppercase text-rose bg-blush">{tag}</span>
                ))}
              </div>
              <Link href="/about" className="btn-primary"><span>Amyah&apos;s Story</span></Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-36 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />What We Offer
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Every Detail,<br /><em className="italic text-rose">Intentionally Placed</em>
              </h2>
              <p className="text-text-muted text-sm mt-4 leading-relaxed">
                Serving the DMV for intimate celebrations to grand-scale galas — all with the same level of care and excellence.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.08} direction="up">
                <div className="service-card p-8 md:p-10 bg-ivory group">
                  <span className="section-label">{s.num}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-plum mt-4 mb-4 group-hover:text-wine transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Link href="/services" className="btn-outline"><span>View Full Services + Pricing</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-blush relative overflow-hidden">
        <BalloonCluster className="absolute top-0 right-0 w-44 h-44 opacity-45" variant="right" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
            <ScrollReveal direction="left">
              <p className="section-label mb-3 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Featured Work
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Created with Love,<br /><em className="italic text-rose">Blessed by Faith</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Link href="/gallery" className="btn-primary"><span>Full Gallery</span></Link>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[{ span: "row-span-2", aspect: "aspect-[2/3]" }, { span: "", aspect: "aspect-square" },
              { span: "", aspect: "aspect-square" }, { span: "", aspect: "aspect-square" },
              { span: "", aspect: "aspect-square" }, { span: "", aspect: "aspect-square" },
              { span: "", aspect: "aspect-square" }].map((item, n) => (
              <div key={n} className={`gallery-item ${item.span}`}>
                <ScrollReveal delay={n * 0.07} direction="up">
                  <div className={`photo-placeholder ${item.aspect}`}>
                    <div className="z-10 text-[9px] tracking-[0.18em] uppercase text-rose/50">Add Photo</div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-36 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-lg mx-auto mb-16">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Client Love
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                What They Say<br /><em className="italic text-rose">After the Promise</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="bg-cream p-8 md:p-10 border border-border relative hover:border-rose/40 transition-colors duration-300">
                  <span className="block text-5xl text-rose/20 leading-none mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>&ldquo;</span>
                  <p className="font-display text-lg italic text-plum leading-relaxed mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.quote}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-[10px] tracking-[0.18em] uppercase text-text-primary font-medium">{t.name}</p>
                    <p className="text-[9px] tracking-[0.12em] uppercase text-rose mt-1">{t.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <div className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-wine flex flex-col justify-center relative overflow-hidden">
            <BalloonGarland className="absolute top-0 left-0 w-full h-16 opacity-30" />
            <BalloonCluster className="absolute -bottom-4 -left-4 w-32 h-32 opacity-25" variant="left" />
            <ScrollReveal>
              <p className="section-label mb-6 flex items-center gap-3" style={{ color: "#C9A878" }}>
                <span className="block w-6 h-px" style={{ background: "#C9A878" }} />Begin Your Promise
              </p>
              <h2 className="font-display text-display-lg font-light text-cream leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Your Dream Event<br /><em className="italic" style={{ color: "#C9A878" }}>Is Already Written</em>
              </h2>
              <p className="text-cream/70 text-sm md:text-base leading-loose mb-8 max-w-md">
                Book your free consultation and let&apos;s talk about your vision. God already has the details — we&apos;re just here to help you see them come alive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-ghost-light"><span>Book a Free Consultation</span></Link>
                <Link href="/services" className="btn-ghost-light"><span>View Pricing</span></Link>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative min-h-[320px] overflow-hidden">
            <div className="photo-placeholder w-full h-full min-h-[320px] border-0" style={{ background: "linear-gradient(135deg, #F0DCE0 0%, #E8C4C8 50%, #D4A0AF 100%)" }}>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.4">
                  <circle cx="12" cy="8" r="4" stroke="#6B1F3A" strokeWidth="1.5"/>
                  <path d="M3 21c0-4.971 4.029-9 9-9s9 4.029 9 9" stroke="#6B1F3A" strokeWidth="1.5"/>
                </svg>
                <span className="text-wine/40 text-[10px] tracking-[0.2em] uppercase">Add event photo here</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
