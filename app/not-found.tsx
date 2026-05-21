"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-label mb-6"
        >
          404
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block text-wine mb-2"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Oh no...
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl font-light text-plum mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          This page doesn&apos;t exist yet.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-text-secondary text-sm max-w-sm mx-auto mb-10"
        >
          But every promise has a purpose. Head back home and let&apos;s find what you&apos;re looking for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/" className="btn-primary">
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
