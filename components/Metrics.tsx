"use client";

import { motion } from "motion/react";
import { useDemoForm } from "@/lib/demo-form-context";

const metrics = [
  { label: "Frames Analyzed", value: "10M+" },
  { label: "Detection Accuracy", value: "97%+" },
  { label: "Lower Organic CPMs vs. Traditional Creator Campaigns", value: "Up to 95%" },
];

export function Metrics() {
  const { open } = useDemoForm();
  return (
    <section className="relative z-0 text-white overflow-hidden pt-48 lg:pt-56 pb-24" style={{ background: "#1E4D53", marginTop: "-120px" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight mb-6">
              Aligned Incentives Make Better Partnerships.
            </h2>
            <p className="text-brand-100 text-lg max-w-lg leading-relaxed mb-8">
              By tying creator payouts to both brand visibility and views, Creator Vision rewards great content that performs and ensures brands only pay for real results.
            </p>
            <button
              onClick={open}
              className="bg-white text-brand-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Book a Demo
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-brand-800/50 backdrop-blur-sm border border-brand-700/50 rounded-2xl p-8 ${index === 2 ? "sm:col-span-2" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-brand-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-brand-100 font-medium text-sm tracking-wide uppercase">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
