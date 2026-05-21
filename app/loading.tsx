"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-ivory z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block text-wine"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.5rem" }}
        >
          Beloved Promise
        </motion.span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-rose/50"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
