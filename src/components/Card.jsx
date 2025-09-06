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
      className="min-h-screen bg-gray-100 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      {/* Hero Section */}
      <section className="bg-yellow-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Take Control of Your Finances</h2>
          <p className="text-lg md:text-xl mb-8">All-in-one finance platform for personal and professional financial growth.</p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose FinWise?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Chart Placeholder */}
      <motion.section
        className="py-20 bg-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Live Market Trends</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Replace with real chart component (e.g., Chart.js, Recharts, etc.) */}
            <div className="h-64 flex items-center justify-center text-gray-500">
              [ Chart Loading... ]
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          © {new Date().getFullYear()} FinWise. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}
