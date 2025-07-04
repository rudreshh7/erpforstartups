"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animations";

const stats = [
  { number: "10K+", label: "Active Users", suffix: "" },
  { number: "99.9", label: "Uptime", suffix: "%" },
  { number: "50+", label: "Integrations", suffix: "" },
  { number: "24/7", label: "Support", suffix: "" },
];

export function StatsSection() {
  return (
    <AnimatedSection className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.6,
              }}
              className="text-center"
            >
              <motion.div
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stat.number}
                {stat.suffix}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
