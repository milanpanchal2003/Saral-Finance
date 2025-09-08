import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Real-Time Market Data",
    description: "Stay updated with real-time stock, forex, and crypto prices.",
  },
  {
    title: "Smart Portfolio Tracker",
    description: "Track your investments and analyze performance easily.",
  },
  {
    title: "Budget Planner",
    description: "Plan and manage your monthly budgets with AI assistance.",
  },
  {
    title: "Secure Transactions",
    description: "Bank-grade security for your data and transactions.",
  },
];

export default function Card() {
  return (
    <motion.div
  className="w-full bg-gray-100 text-gray-800 min-h-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      {/* Hero Section */}
      <section className="w-full bg-yellow-600 text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Take Control of Your Finances</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">All-in-one finance platform for personal and professional financial growth.</p>
          <button className="bg-white text-indigo-600 font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded shadow hover:bg-gray-100 transition">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="w-full py-8 sm:py-12 md:py-16 lg:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
  <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose FinWise?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-lg shadow hover:shadow-md transition h-auto flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Chart Placeholder */}
      <motion.section
        className="w-full py-12 sm:py-16 md:py-20 bg-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Live Market Trends</h3>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            {/* Replace with real chart component (e.g., Chart.js, Recharts, etc.) */}
            <div className="h-48 sm:h-64 flex items-center justify-center text-gray-500">
              [ Chart Loading... ]
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-white border-t py-5 sm:py-6 mt-8 sm:mt-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FinWise. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}
