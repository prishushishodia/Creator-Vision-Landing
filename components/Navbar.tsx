"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ScanEye } from "lucide-react";
import { useDemoForm } from "@/lib/demo-form-context";

export function Navbar() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -80]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const { open } = useDemoForm();

  return (
    <motion.nav
      style={{ y, opacity }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 mx-auto mt-6 w-[90%] max-w-5xl"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-white">
            <ScanEye size={18} />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-brand-900">
            Creator Vision
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-brand-900 transition-colors">
            Log in
          </button>
          <button
            onClick={open}
            className="bg-brand-900 hover:bg-brand-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Demo
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
