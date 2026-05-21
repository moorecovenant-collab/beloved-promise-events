"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const packages = [
  {
    name: "The Seed",
    subtitle: "Starter Celebrations",
    price: "Starting at $500",
    range: "$500 – $1,500",
    desc: "Perfect for intimate gatherings where love is in the details. Simple, elegant, and beautifully executed.",
    includes: [
      "1–2 focal décor pieces",
      "Balloon garland or arch (up to 8 ft)",
      "Table centerpiece (1–2 tables)",
      "Color palette consultation",
      "Day-of setup & breakdown",
    ],
    ideal: "Birthday dinners, bridal teas, baby showers, small celebrations",
    featured: false,
  },
  {
    name: "The Promise",
    subtitle: "Signature Events",
    price: "Starting at $1,500",
    range: "$1,500 – $3,500",
    desc: "Our most popular package. A full transformation with multiple focal points, florals, and custom styling.",
    includes: [
      "Full backdrop + balloon installation",
      "Organic balloon arch or garland (up to 16 ft)",
      "Table centerpieces (up to 5 tables)",
      "Floral or faux floral accents",
      "Theme consultation included",
      "Setup, styling & breakdown",
    ],
    ideal: "Birthday milestones, baby showers, bridal showers, graduation parties",
    featured: true,
  },
  {
    name: "The Covenant",
    subtitle: "Luxury Experience",
    price: "Starting at $3,500",
    range: "$3,500 – $7,500",
    desc: "A fully immersive event design experience. Every corner of the space tells your story.",
    includes: [
      "Full venue décor transformation",
      "Custom balloon ceiling or organic installation",
      "Floral design throughout",
      "Backdrop + multiple focal points",
      "Centerpieces for full event (up to 15 tables)",
      "Mood lighting coordination",
      "Full design consultation + mood board",
      "Day-of coordination support",
    ],
    ideal: "Galas, weddings, large birthdays, corporate events, quinceañeras",
    featured: false,
  },
  {
    name: "The Bespoke",
    subtitle: "Grand Scale",
    price: "Starting at $10,000",
    range: "$10,000+",
    desc: "Reserved for events that demand nothing but perfection. Fully custom, fully immersive, fully unforgettable.",
    includes: [
      "Complete event design & production",
      "Custom fabricated décor elements",
      "Floral design (fresh or high-quality faux)",
      "Full venue transformation",
      "Ceiling installs & statement pieces",
      "VIP consultation & mood board",
      "Full day-of team & management",
      "Travel options available",
    ],
    ideal: "Luxury weddings, celebrity & high-profile events, large galas, destination events",
    featured: false,
  },
];

const alaCarte = [
  { item: "Theme Consultation", price: "$150", note: "1-hour session, credited toward booking" },
  { item: "Balloon Garland — Mini (6 ft)", price: "$250+", note: "Organic style, custom colors" },
  { item: "Balloon Garland — Standard (12 ft)", price: "$450+", note: "Organic style, floral accents available" },
  { item: "Balloon Garland — Luxury (20+ ft)", price: "$750+", note: "Large installs, ceiling options" },
  { item: "Organic Balloon Arch", price: "$650+", note: "Freestanding or attached" },
  { item: "Backdrop (Sequin, Floral, or Custom)", price: "$350+", note: "Rentals available" },
  { item: "Backdrop + Arch Combo", price: "$900+", note: "Most popular add-on" },
  { item: "Table Centerpiece", price: "$150–$350", note: "Per table, style-dependent" },
  { item: "Floral Arrangement", price: "$200+", note: "Fresh or faux, per arrangement" },
  { item: "Floral Wall / Backdrop", price: "$800+", note: "Faux florals, full panel" },
  { item: "Balloon Column (pair)", price: "$300+", note: "Entrance or stage framing" },
  { item: "Number or Letter Balloons", price: "$80+", note: "Per character, jumbo or standard" },
  { item: "Neon Sign (rental)", price: "$200+", note: "Custom phrases available" },
  { item: "Charger Plates & Linens", price: "$15–$25/place setting", note: "Luxury table settings" },
  { item: "Rush Fee (under 2 weeks)", price: "+20%", note: "Applied to total" },
];

const faqs = [
  {
    q: "Do you offer payment plans?",
    a: "Yes. For larger events, we offer structured payment plans — typically split into a deposit at booking, a mid-payment, and a final payment before the event date. We will work with you to find something that makes sense.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 4–8 weeks in advance for smaller events, and 3–6 months for large galas or weddings. Popular dates fill quickly.",
  },
  {
    q: "Do you travel outside the DMV?",
    a: "Yes — travel options are available, especially for Bespoke-level events. Travel fees apply. Contact us for details.",
  },
  {
    q: "Can I provide my own items for you to incorporate?",
    a: "Absolutely. We love incorporating sentimental or personal pieces into your design. Just let us know during the consultation.",
  },
  {
    q: "Do you work with non-Christian clients?",
    a: "Yes. We serve clients of all backgrounds. Our faith informs how we work — not who we work with. Everyone is welcome and treated as beloved.",
  },
  {
    q: "What events do you decline?",
    a: "We do not decorate for events in adult entertainment venues or spaces explicitly celebrating lifestyles that conflict with our faith values. We are happy to discuss this during consultation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-10 lg:px-16 bg-ivory overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="section-label mb-6 flex items-center gap-3">
            <span className="block w-6 h-px bg-rose/60" />Services & Pricing
          </motion.p>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-2xl font-light text-plum leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Every Vision Has a
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3rem, 7vw, 6rem)" }}
              className="block text-rose leading-none">
              Promise Attached
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-text-secondary text-base md:text-lg leading-loose max-w-2xl">
            Below you&apos;ll find our service packages, à la carte pricing, and everything you need to start planning. All packages are customizable — book a free consultation and we&apos;ll build around your vision and budget.
          </motion.p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Investment Packages
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Choose Your <em className="italic text-rose">Promise Level</em>
              </h2>
              <p className="text-text-muted text-sm mt-3">
                All packages include a consultation. Final pricing based on event specifics, guest count, and customizations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1} direction="up">
                <div className={`pricing-card flex flex-col h-full ${pkg.featured ? "featured" : ""}`}>
                  {pkg.featured && (
                    <div className="bg-rose text-ivory text-[9px] tracking-[0.2em] uppercase text-center py-2 px-4">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <p className={`text-[9px] tracking-[0.22em] uppercase mb-2 ${pkg.featured ? "text-gold/70" : "text-rose"}`}>
                      {pkg.subtitle}
                    </p>
                    <h3 className={`font-display text-3xl font-light mb-3 ${pkg.featured ? "text-cream" : "text-plum"}`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>{pkg.name}</h3>
                    <div className={`text-2xl font-display font-light mb-1 ${pkg.featured ? "text-gold" : "text-wine"}`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>{pkg.price}</div>
                    <p className={`text-[10px] mb-4 ${pkg.featured ? "text-cream/50" : "text-text-muted"}`}>Range: {pkg.range}</p>
                    <p className={`text-sm leading-relaxed mb-6 ${pkg.featured ? "text-cream/70" : "text-text-secondary"}`}>{pkg.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-xs leading-relaxed ${pkg.featured ? "text-cream/70" : "text-text-secondary"}`}>
                          <span className={`mt-0.5 flex-shrink-0 ${pkg.featured ? "text-gold" : "text-rose"}`}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className={`text-[9px] tracking-[0.12em] uppercase mb-6 leading-relaxed ${pkg.featured ? "text-gold/50" : "text-text-muted"}`}>
                      Ideal for: {pkg.ideal}
                    </p>
                    <Link href="/contact"
                      className={pkg.featured ? "btn-ghost-light text-center justify-center" : "btn-outline text-center justify-center"}>
                      <span>Book This Package</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-text-muted text-xs mt-8 max-w-xl mx-auto leading-relaxed">
              * All prices are starting rates. Final quotes are provided after consultation. A 50% non-refundable deposit is required to hold your date.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* À LA CARTE */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Individual Items
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                À La Carte <em className="italic text-rose">Pricing</em>
              </h2>
              <p className="text-text-muted text-sm mt-3">
                Add individual elements to any package or book standalone pieces. Prices are starting rates.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="border border-border">
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto] bg-plum px-6 py-3">
                <span className="text-[9px] tracking-[0.22em] uppercase text-cream/60">Service Item</span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-cream/60">Starting Price</span>
              </div>
              {alaCarte.map((item, i) => (
                <ScrollReveal key={item.item} delay={i * 0.03} direction="none">
                  <div className={`grid grid-cols-[1fr_auto] px-6 py-4 border-b border-border last:border-0 items-start gap-4 ${i % 2 === 0 ? "bg-ivory" : "bg-cream"} hover:bg-blush/50 transition-colors duration-200`}>
                    <div>
                      <p className="text-sm text-text-primary font-medium">{item.item}</p>
                      <p className="text-[10px] text-text-muted mt-0.5">{item.note}</p>
                    </div>
                    <span className="text-sm font-display font-medium text-wine whitespace-nowrap mt-0.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.price}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-blush">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-lg mx-auto mb-14">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />The Process
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                How It <em className="italic text-rose">Works</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Book a free consultation. We talk budget, theme, venue, and vision. This is where the promise begins." },
              { step: "02", title: "Design & Proposal", desc: "We create a custom proposal and mood board tailored to your vision, timeline, and investment level." },
              { step: "03", title: "Confirm & Deposit", desc: "Secure your date with a 50% deposit. Your event is officially on our calendar — covered in prayer." },
              { step: "04", title: "Day of Magic", desc: "We arrive early, set up beautifully, and leave before your guests arrive so your first impression is breathtaking." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1} direction="up">
                <div className="service-card p-8 bg-ivory group">
                  <span className="section-label block mb-4">{s.step}</span>
                  <h3 className="font-display text-2xl font-light text-plum mb-3 group-hover:text-wine transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-ivory">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <ScrollReveal>
              <p className="section-label justify-center mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-rose/60" />Questions
              </p>
              <h2 className="font-display text-display-lg font-light text-plum"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Frequently <em className="italic text-rose">Asked</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="space-y-0 border border-border">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="none">
                <div className="p-6 md:p-8 border-b border-border last:border-0">
                  <p className="font-display text-lg text-plum mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    <span className="text-rose mr-2">✦</span>{faq.q}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed pl-5">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-wine">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-display-lg font-light text-cream mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to Begin?<br /><em className="italic text-gold">Let&apos;s Build Your Promise.</em>
            </h2>
            <p className="text-cream/70 text-sm md:text-base leading-loose mb-8 max-w-lg mx-auto">
              Book your free 30-minute consultation. No commitment — just a conversation about your vision and how we can bring it to life beautifully.
            </p>
            <Link href="/contact" className="btn-ghost-light"><span>Book a Free Consultation</span></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
