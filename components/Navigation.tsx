"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled
            ? "bg-ivory/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="group flex flex-col leading-none">
              <span
                className="text-2xl md:text-3xl text-wine group-hover:text-rose transition-colors duration-300"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Beloved Promise
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-text-muted group-hover:text-rose/70 transition-colors duration-300 -mt-0.5">
                Events
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx("nav-link", pathname === link.href && "active")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden md:inline-flex btn-primary text-[9px] py-2.5 px-5">
                <span>Book a Consultation</span>
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-px bg-plum w-6 origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="block h-px bg-plum w-4"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-px bg-plum w-6 origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-plum md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              <span
                className="text-5xl text-gold/60 mb-2"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Beloved Promise
              </span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "font-display text-4xl font-light tracking-wide transition-colors duration-300",
                      pathname === link.href ? "text-gold" : "text-cream hover:text-rose-light"
                    )}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4">
                <Link href="/contact" className="btn-ghost-light">
                  <span>Book a Consultation</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
