import React from 'react';
import { motion } from 'framer-motion';
// Update the path below to your actual image location
import { useEffect, useState } from "react";
import Card from '../components/Card';
import Emi from '../components/Emi';
import Features from '../components/Config';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Home() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const [fact, setFact] = useState("");

  // Some finance facts (dynamic info)
  const facts = [
    "Saving just ₹500 per month can grow into ₹6 lakh in 10 years with compounding.",
    "The Rule of 72: Divide 72 by your interest rate to know how fast money doubles.",
    "India has one of the fastest-growing fintech markets in the world.",
    "Diversification is the safest way to minimize risk in investments.",
    "An emergency fund should cover at least 3-6 months of expenses.",
  ];

  useEffect(() => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  }, []);

  return (
   <>
   <Navbar />
  <motion.div
    className="bg-gray-50 w-full pt-16 sm:pt-20 min-h-0 flex flex-col"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-20 py-8 sm:py-14 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg rounded-none sm:rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight break-words">
          {greeting}, Welcome to Saral Finance
        </h1>
  <p className="text-base xs:text-lg md:text-xl max-w-xs sm:max-w-2xl mx-auto font-medium drop-shadow mb-6 break-words">
          Smarter financial tools to help you manage, invest, and grow your wealth with confidence.
        </p>
        <a
          href="/services"
          className="bg-white text-yellow-700 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base w-full xs:w-auto block xs:inline-block"
        >
          Explore Services
        </a>
  </motion.section>

      {/* Features Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-12 py-8 sm:py-16 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
  <div className="bg-white shadow-lg rounded-2xl p-4 xs:p-6 md:p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
          <span className="text-yellow-600 text-3xl">📊</span>
          <h3 className="text-xl font-bold mt-4 mb-2 text-yellow-600">Smart Investments</h3>
          <p className="text-gray-600 leading-relaxed">
            Personalized investment strategies for long-term wealth growth.
          </p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-4 xs:p-6 md:p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
          <span className="text-yellow-600 text-3xl">💳</span>
          <h3 className="text-xl font-bold mt-4 mb-2 text-yellow-600">Secure Payments</h3>
          <p className="text-gray-600 leading-relaxed">
            Fast, safe, and reliable financial transactions with modern tech.
          </p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-4 xs:p-6 md:p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
          <span className="text-yellow-600 text-3xl">📈</span>
          <h3 className="text-xl font-bold mt-4 mb-2 text-yellow-600">Wealth Growth</h3>
          <p className="text-gray-600 leading-relaxed">
            Tools and insights to maximize your savings and investments.
          </p>
        </div>
  </motion.section>

      {/* Dynamic Fact */}
      <motion.section
        className="w-full bg-yellow-100 py-6 sm:py-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
  <p className="text-base xs:text-lg sm:text-xl text-gray-800 font-medium max-w-xs sm:max-w-3xl mx-auto px-2 break-words">
          💡 Finance Fact:{" "}
          <span className="text-yellow-700 font-semibold">{fact}</span>
        </p>
  </motion.section>

      {/* Testimonials */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-12 py-8 sm:py-14 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-2xl xs:text-3xl font-extrabold text-yellow-700 mb-8 sm:mb-12 tracking-tight">What Our Clients Say</h2>
  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-10">
          <div className="bg-white rounded-2xl shadow-md p-4 xs:p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
            <p className="text-gray-600 italic">
              “FinanceApp helped me save smarter and invest wisely. Highly recommend!”
            </p>
            <h4 className="text-yellow-600 font-semibold mt-4">– Rahul Sharma</h4>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 xs:p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
            <p className="text-gray-600 italic">
              “Their tools are so easy to use. I feel more confident about my money now.”
            </p>
            <h4 className="text-yellow-600 font-semibold mt-4">– Priya Verma</h4>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 xs:p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
            <p className="text-gray-600 italic">
              “Secure, reliable, and user-friendly. The best finance app I’ve used.”
            </p>
            <h4 className="text-yellow-600 font-semibold mt-4">– Amit Patel</h4>
          </div>
        </div>
  </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full text-center py-8 sm:py-14 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <h2 className="text-2xl xs:text-3xl font-extrabold mb-4 sm:mb-6 tracking-tight">
          Ready to take control of your finances?
        </h2>
        <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 px-2 w-full max-w-xs sm:max-w-md mx-auto">
          <Link
            to="/login"
            className="bg-white text-yellow-700 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base w-full xs:w-auto block xs:inline-block"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="bg-white text-yellow-700 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base w-full xs:w-auto block xs:inline-block"
          >
            Sign Up
          </Link>
        </div>
      </motion.section>
    </motion.div>
    <Features/>
    <Emi/>
    <Card/>
    <Footer/>
   </>
  );
};

