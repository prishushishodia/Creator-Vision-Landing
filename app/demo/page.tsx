"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScanEye, BarChart3, CheckCircle2, ArrowLeft } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "How campaigns run",
    desc: "Brief → creator selection → approvals → launch → reporting",
  },
  {
    n: "2",
    title: "Brand safety & control",
    desc: "Approvals, category exclusions, audit trail",
  },
  {
    n: "3",
    title: "Reporting & payouts",
    desc: "Campaign status, summaries, payout ledger view",
  },
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [goals, setGoals] = useState<string[]>([]);

  function toggleGoal(g: string) {
    setGoals((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen selection:bg-brand-400/30 selection:text-brand-900">
      {/* Minimal nav */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-white">
              <ScanEye size={18} />
            </div>
            <span className="font-display font-semibold text-lg tracking-tight text-brand-900">
              Creator Vision
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>
      </nav>

      {/* Hero header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/10 text-brand-900 text-sm font-medium mb-5 border border-brand-900/20"
        >
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
          15-minute walkthrough
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 leading-[1.08] mb-4"
        >
          Book a{" "}
          <span className="text-brand-700 relative">
            Brand Demo
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand-400/60" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
        >
          Launch creator-led paid media with full approvals, brand safety
          controls, and clear reporting.{" "}
          <span className="text-gray-400">
            Built for performance marketing teams at brands and agencies.
          </span>
        </motion.p>
      </div>

      {/* Main panel */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-[420px_1fr] rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-gray-100"
        >
          {/* Left: visual */}
          <div className="relative bg-brand-900 hidden lg:block overflow-hidden">
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative h-full flex flex-col justify-between p-8">
              {/* Creator image card */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4] shadow-xl shadow-black/30">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
                  alt="Creator"
                  fill
                  className="object-cover opacity-75"
                  referrerPolicy="no-referrer"
                  unoptimized
                />

                {/* Scan line */}
                <motion.div
                  className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-brand-400/25 to-transparent"
                  animate={{ y: ["-100%", "500%"] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                />

                {/* Creator bbox */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute top-[12%] left-[25%] w-[50%] h-[22%] border-2 border-brand-400 bg-brand-400/10 rounded-sm"
                >
                  <div className="absolute -top-6 left-[-2px] bg-brand-400 text-white text-[9px] font-mono px-2 py-0.5 font-bold tracking-wider rounded-t-sm flex items-center gap-1">
                    CREATOR <span className="opacity-70">99%</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-brand-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-brand-400" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-brand-400" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-brand-400" />
                </motion.div>

                {/* Brand logo bbox */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                  className="absolute top-[48%] left-[40%] w-[30%] h-[14%] border-2 border-[#FF6B6B] bg-[#FF6B6B]/10 rounded-sm"
                >
                  <div className="absolute -top-6 left-[-2px] bg-[#FF6B6B] text-white text-[9px] font-mono px-2 py-0.5 font-bold tracking-wider rounded-t-sm flex items-center gap-1">
                    BRAND_LOGO <span className="opacity-70">94%</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#FF6B6B]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#FF6B6B]" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#FF6B6B]" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#FF6B6B]" />
                </motion.div>

                {/* Stats widget */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="absolute bottom-4 right-4 glass-dark rounded-xl p-3 shadow-2xl w-40"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white/70 text-[10px] font-mono uppercase tracking-wider">
                      Exposure
                    </span>
                    <BarChart3 size={12} className="text-brand-400" />
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xl font-display font-bold text-white">
                      12.4
                    </span>
                    <span className="text-white/50 text-xs">sec</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1 mt-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
                      className="bg-brand-400 h-full rounded-full"
                    />
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 flex justify-between items-center">
                    <span className="text-white/70 text-[10px]">Payout</span>
                    <span className="text-brand-400 font-mono font-bold text-xs">
                      $450.00
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Trust badges */}
              <div className="mt-6 space-y-2">
                {[
                  "Frame-by-frame AI analysis",
                  "Performance-based payouts",
                  "Brand safety controls",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-brand-400 shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white px-8 py-10 lg:px-12 lg:py-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-900/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-8 h-8 text-brand-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                  You&apos;re on the list
                </h3>
                <p className="text-gray-500 max-w-xs leading-relaxed">
                  We&apos;ll respond within 2 business days to schedule your
                  15-minute demo.
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to home
                </Link>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-semibold text-gray-900 mb-1">
                    Request A Demo
                  </h2>
                  <p className="text-brand-600 text-sm font-medium">
                    We&apos;ll respond within 2 business days.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Email <span className="text-brand-600">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Email ID"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-brand-600">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center gap-1.5 px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-sm text-gray-500 shrink-0">
                          🇺🇸 +1
                        </span>
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          className="w-full rounded-r-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Company <span className="text-brand-600">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Enter company name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition"
                      />
                    </div>
                  </div>

                  {/* Role + Monthly spend */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Role
                      </label>
                      <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition appearance-none">
                        <option value="">Select an option</option>
                        <option>Brand / Marketing Team</option>
                        <option>Agency</option>
                        <option>Creator / Influencer</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Monthly paid social spend{" "}
                        <span className="text-brand-600">*</span>
                      </label>
                      <select
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition appearance-none"
                      >
                        <option value="">Select an Option</option>
                        <option>Under $10k</option>
                        <option>$10k – $50k</option>
                        <option>$50k – $200k</option>
                        <option>$200k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary goal */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Primary goal
                    </label>
                    <div className="grid grid-cols-3 gap-y-2.5 gap-x-2">
                      {[
                        "Scale conversions",
                        "Test creator ads",
                        "Improve CAC",
                        "Brand lift",
                        "Other",
                      ].map((g) => (
                        <label
                          key={g}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <div
                            onClick={() => toggleGoal(g)}
                            className={`w-4 h-4 rounded border-2 shrink-0 transition-all cursor-pointer flex items-center justify-center ${
                              goals.includes(g)
                                ? "border-brand-600 bg-brand-600"
                                : "border-gray-300 bg-white group-hover:border-brand-400"
                            }`}
                          >
                            {goals.includes(g) && (
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-gray-700">{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Anything you'd like us to know before the call..."
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition resize-none"
                    />
                  </div>

                  <p className="text-xs text-gray-400">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-brand-600 hover:underline">
                      Terms &amp; Privacy Policy
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium py-3.5 rounded-full transition-all shadow-md shadow-brand-900/20 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Request a Demo
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    Prefer email?{" "}
                    <a
                      href="mailto:info@creatorvision.com"
                      className="text-brand-600 hover:underline"
                    >
                      info@creatorvision.com
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* What you'll see section */}
      <div className="border-t border-gray-100 bg-gray-50/60 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-semibold text-gray-900">
              What you&apos;ll see in{" "}
              <span className="text-brand-700">15 minutes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-brand-900 text-white font-display font-bold text-lg flex items-center justify-center mx-auto mb-5">
                  {step.n}
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-gray-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-brand-900 flex items-center justify-center text-white">
              <ScanEye size={13} />
            </div>
            <span className="font-display font-semibold text-sm text-brand-900">
              Creator Vision
            </span>
          </div>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Creator Vision Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
