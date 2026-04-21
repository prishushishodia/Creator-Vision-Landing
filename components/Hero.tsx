"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play, BarChart3, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useDemoForm } from "@/lib/demo-form-context";

export function Hero() {
  const { open } = useDemoForm();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  return (
    <section ref={sectionRef} className="relative z-10 overflow-visible pt-12 pb-0 lg:pt-20">
      {/* Diagonal-clipped background — right side is 110px shorter, creating the slanted edge */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #FDFDFD 0%, #F0F0F0 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 110px), 0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Copy */}
          <div className="max-w-2xl pt-4 pb-24 lg:pb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/10 text-brand-900 text-sm font-medium mb-6 border border-brand-900/20"
            >
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              Computer Vision for Creator ROI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-semibold tracking-tight text-gray-900 leading-[1.05] mb-6"
            >
              Pay creators for <br />
              <span className="text-brand-900">actual visibility.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Stop paying flat fees for sponsored posts. Our AI analyzes a creator&apos;s content frame-by-frame to measure exact brand exposure time, calculating payouts based on performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={open}
                className="bg-brand-900 hover:bg-brand-800 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-brand-900/20 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Play size={18} />
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-500" />
                Frame-by-frame analysis
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-500" />
                Performance-based payouts
              </div>
            </motion.div>
          </div>

          {/* Right Column: Card — extends below the diagonal into teal section */}
          <motion.div
            style={{ y: cardY, rotate: cardRotate }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none pb-8 lg:pb-16"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-900/5 to-brand-400/5 rounded-[2.5rem] transform -rotate-3" />
            <div className="absolute -inset-4 bg-gradient-to-bl from-brand-900/5 to-brand-400/5 rounded-[2.5rem] transform rotate-2" />

            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl shadow-brand-900/15 border border-gray-100">
              <div className="relative rounded-[1.5rem] overflow-hidden bg-gray-900 aspect-[4/5] group">

                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                  alt="Creator content"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                  unoptimized
                />

                {/* Scanning Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-400/20 to-transparent h-32 w-full"
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />

                {/* Bounding Box 1: Creator */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute top-[15%] left-[30%] w-[40%] h-[25%] border-2 border-brand-400 bg-brand-400/10 rounded-sm"
                >
                  <div className="absolute -top-6 left-[-2px] bg-brand-400 text-white text-[10px] font-mono px-2 py-0.5 font-bold tracking-wider rounded-t-sm flex items-center gap-1">
                    CREATOR <span className="opacity-70">99%</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-brand-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-brand-400" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-brand-400" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-brand-400" />
                </motion.div>

                {/* Bounding Box 2: Brand Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                  className="absolute top-[50%] left-[45%] w-[25%] h-[15%] border-2 border-[#FF6B6B] bg-[#FF6B6B]/10 rounded-sm"
                >
                  <div className="absolute -top-6 left-[-2px] bg-[#FF6B6B] text-white text-[10px] font-mono px-2 py-0.5 font-bold tracking-wider rounded-t-sm flex items-center gap-1">
                    BRAND_LOGO <span className="opacity-70">94%</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#FF6B6B]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#FF6B6B]" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#FF6B6B]" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#FF6B6B]" />
                </motion.div>

                {/* Floating Stats Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="absolute bottom-6 right-6 glass-dark rounded-xl p-4 shadow-2xl w-48"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-xs font-mono uppercase tracking-wider">Exposure Time</span>
                    <BarChart3 size={14} className="text-brand-400" />
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-display font-bold text-white">12.4</span>
                    <span className="text-white/50 text-sm">sec</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
                      className="bg-brand-400 h-full rounded-full"
                    />
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                    <span className="text-white/70 text-xs">Est. Payout</span>
                    <span className="text-brand-400 font-mono font-bold text-sm">$450.00</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
