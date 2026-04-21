"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  // Only visible after scrolling 300px
  const opacity = useTransform(scrollY, [280, 340], [0, 1]);
  const scale = useTransform(scrollY, [280, 340], [0.8, 1]);

  return (
    <motion.button
      style={{ opacity, scale }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-brand-900 hover:bg-brand-800 text-white shadow-lg shadow-brand-900/30 flex items-center justify-center transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}
