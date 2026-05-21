"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const eventTypes = [
  "Wedding / Engagement", "Birthday Celebration", "Baby Shower",
  "Bridal Shower", "Gala / Formal Event", "Quinceañera / Sweet 16",
  "Church / Ministry Event", "Corporate Event", "Graduation", "Other",
];

const budgetRanges = [
  "Under $500", "$500 – $1,500", "$1,500 – $3,500",
  "$3,500 – $7,500", "$7,500 – $10,000", "$10,000+",
  "Not sure yet — let's talk",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-10 lg:px-16 bg-ivory overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="section-label mb-6 flex items-center gap-3">
            <span className="block w-6 h-px bg-rose/60" />Let&apos;s Connect
          </motion.p>
          <div className="overflow-hidden mb-2">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-2xl font-light text-plum leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Tell Us Your
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3rem, 7vw, 6rem)" }}
              className="block text-rose leading-none">
              Vision
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-text-secondary text-base md:text-lg leading-loose max-w-2xl">
            Your free consultation starts here. Fill out the form below and Amyah will reach out within 48 hours to schedule your vision call. We can&apos;t wait to hear what God has placed on your heart for this event.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-10 md:py-16 px-6 md:px-10 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

            {/* Left info */}
            <ScrollReveal direction="left">
              <div className="space-y-10">
                {/* Info cards */}
                {[
                  {
                    icon: "✦",
                    title: "Free Consultation",
                    desc: "Every booking starts with a free 30-minute consultation — no pressure, no commitment. Just a conversation about your vision.",
                  },
                  {
                    icon: "✧",
                    title: "Response Time",
                    desc: "We respond to all inquiries within 48 hours. If you need something urgent, note it in your message.",
                  },
                  {
                    icon: "✦",
                    title: "Service Area",
                    desc: "We are based in the DMV — Washington DC, Maryland, and Virginia. Travel is available for larger events.",
                  },
                ].map((info) => (
                  <div key={info.title} className="flex items-start gap-5">
                    <span className="text-gold text-xl mt-1 flex-shrink-0">{info.icon}</span>
                    <div>
                      <h3 className="font-display text-xl text-plum mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}>{info.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{info.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Scripture */}
                <blockquote className="font-display text-lg italic text-plum border-l-2 border-rose/30 pl-5 leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  &ldquo;Commit to the Lord whatever you do, and he will establish your plans.&rdquo;
                  <span className="block text-[10px] tracking-[0.15em] uppercase text-rose not-italic mt-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}>— Proverbs 16:3</span>
                </blockquote>

                {/* Social */}
                <div>
                  <p className="text-[9px] tracking-[0.22em] uppercase text-text-muted mb-3">Follow Our Work</p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-sm text-text-secondary hover:text-rose transition-colors duration-300">Instagram</a>
                    <span className="text-border">·</span>
                    <a href="#" className="text-sm text-text-secondary hover:text-rose transition-colors duration-300">TikTok</a>
                    <span className="text-border">·</span>
                    <a href="mailto:hello@belovedpromiseevents.com"
                      className="text-sm text-text-secondary hover:text-rose transition-colors duration-300">Email</a>
                  </div>
                </div>

                {/* Photo placeholder */}
                <div className="photo-placeholder aspect-[4/3]">
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rose/30" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rose/30" />
                  <div className="z-10 text-[10px] tracking-[0.18em] uppercase text-rose/50">Add event photo</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal direction="right">
              {submitted ? (
                <div className="bg-ivory border border-border p-12 text-center">
                  <span className="block text-5xl text-gold mb-6">✦</span>
                  <span className="block text-4xl text-wine mb-4"
                    style={{ fontFamily: "'Great Vibes', cursive" }}>Thank You</span>
                  <h3 className="font-display text-2xl text-plum mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Your Message Was Received
                  </h3>
                  <p className="text-text-secondary text-sm leading-loose max-w-sm mx-auto mb-6">
                    Amyah will reach out within 48 hours to schedule your free consultation. We&apos;re excited to hear about your vision — God has something beautiful in store.
                  </p>
                  <p className="font-display italic text-rose/70 text-base"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    &ldquo;For I know the plans I have for you...&rdquo; — Jeremiah 29:11
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-ivory border border-border p-8 md:p-10 space-y-6">
                  <h3 className="font-display text-2xl text-plum"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Consultation Request
                  </h3>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">First Name *</label>
                      <input type="text" required placeholder="Your first name" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Last Name *</label>
                      <input type="text" required placeholder="Your last name" className="form-input" />
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input type="email" required placeholder="your@email.com" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input type="tel" placeholder="(000) 000-0000" className="form-input" />
                    </div>
                  </div>

                  {/* Event type */}
                  <div>
                    <label className="form-label">Event Type *</label>
                    <select required className="form-input">
                      <option value="">Select event type...</option>
                      {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Date + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Event Date</label>
                      <input type="date" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Venue / Location</label>
                      <input type="text" placeholder="City, venue name, or TBD" className="form-input" />
                    </div>
                  </div>

                  {/* Guest count */}
                  <div>
                    <label className="form-label">Expected Guest Count</label>
                    <input type="text" placeholder="Approximate number of guests" className="form-input" />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="form-label">Estimated Budget *</label>
                    <select required className="form-input">
                      <option value="">Select budget range...</option>
                      {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  {/* Vision */}
                  <div>
                    <label className="form-label">Describe Your Vision *</label>
                    <textarea required rows={5} placeholder="Tell us about your dream event — the theme, the vibe, the colors, the feeling you want guests to have. The more detail, the better."
                      className="form-input resize-none" />
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label className="form-label">How Did You Hear About Us?</label>
                    <select className="form-input">
                      <option value="">Select...</option>
                      {["Instagram", "TikTok", "Word of Mouth / Referral", "Google Search",
                        "Attended an Event We Decorated", "Other"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Faith note */}
                  <div className="bg-blush border border-rose/20 p-4">
                    <p className="text-xs text-text-secondary leading-relaxed">
                      <span className="text-rose font-medium">A note from Amyah:</span> Every inquiry is received with gratitude and covered in prayer. Whether you&apos;re a believer or not, you will be treated with the same excellence, warmth, and intentionality. Welcome to Beloved Promise Events.
                    </p>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <span>Send My Consultation Request</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="py-14 md:py-20 px-6 md:px-10 lg:px-16 bg-wine">
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-xl md:text-2xl italic font-light text-cream/80 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              &ldquo;God can be trusted to keep <span className="text-gold not-italic">his promise.</span>&rdquo;
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-gold/60 mt-3">Hebrews 10:23 · The Foundation of Everything We Do</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
