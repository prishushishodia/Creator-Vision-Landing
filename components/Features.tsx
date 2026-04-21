"use client";

import { motion } from "motion/react";
import { Target, Users, BrainCircuit, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Create Campaign",
    description: "Set your budget, target audience, and define the visual assets (logos, products) our AI should look for.",
  },
  {
    icon: Users,
    title: "Assign Creators",
    description: "Invite handpicked creators or let our platform match you with influencers who align with your brand.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description: "When creators post to social media, our computer vision models analyze the content frame-by-frame for brand exposure.",
  },
  {
    icon: Wallet,
    title: "Fair Payouts",
    description: "Creator payments are calculated from the exact seconds your brand was visible, multiplied by the post's views.",
  },
];

export function Features() {
  return (
    <section
      className="relative z-[5] overflow-visible pt-24 lg:pt-28"
      style={{ marginTop: "-120px" }}
    >
      {/* Teal background with reversed diagonal clip at the bottom */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, #D0EEF1 30%, #1E4D53 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 110px))",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-900 font-semibold tracking-wide uppercase text-base mb-4">How it works</h2>
          <h3 className="text-4xl md:text-6xl font-display font-semibold text-gray-900 leading-tight">
            Pay for performance, not posting.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative pb-56 lg:pb-96">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-brand-400/10 hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-white group-hover:border-brand-900 transition-all duration-300 text-brand-900 relative z-10">
                  <step.icon size={24} />
                </div>
                <h4 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-gray-300 z-10">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
