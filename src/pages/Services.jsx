import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Services() {
  return (
<>
    <Navbar />
    <motion.div
      className="bg-gray-50 min-h-screen w-full pt-16 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto text-center px-3 xs:px-4 sm:px-6 md:px-20 py-8 sm:py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg rounded-none sm:rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
  <h1 className="text-3xl xs:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg tracking-tight">Our Services</h1>
  <p className="text-base xs:text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
          Explore our wide range of financial solutions tailored to help you manage, grow, and secure your wealth.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12 py-8 sm:py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 md:gap-10">
          {/* Service Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-4 xs:p-6 sm:p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4 sm:mb-6 text-2xl xs:text-3xl">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Investment Planning</h3>
            <p className="text-gray-600 leading-relaxed">
              Smart investment strategies to maximize returns while minimizing risks, tailored to your goals.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-4 xs:p-6 sm:p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4 sm:mb-6 text-2xl xs:text-3xl">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Financial Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Data-driven financial insights to help you make informed business and personal finance decisions.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-4 xs:p-6 sm:p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4 sm:mb-6 text-2xl xs:text-3xl">🏦</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Wealth Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Personalized wealth management solutions to grow and secure your assets for the long term.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-4 xs:p-6 sm:p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4 sm:mb-6 text-2xl xs:text-3xl">🧾</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Tax Consulting</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert tax advisory services to optimize tax savings and ensure compliance with regulations.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-4 xs:p-6 sm:p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4 sm:mb-6 text-2xl xs:text-3xl">📉</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Risk Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Identify, assess, and minimize financial risks with proven strategies and secure solutions.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-4 xs:p-6 sm:p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-4 sm:mb-6 text-2xl xs:text-3xl">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Global Consulting</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing international finance and business consulting to help you scale beyond borders.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full text-center py-8 sm:py-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
  <h2 className="text-xl xs:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg">
          Let’s build your financial future together
        </h2>
        <button className="bg-white text-yellow-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-100 hover:text-yellow-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Contact Us
        </button>
      </motion.section>
    </motion.div>
    <Footer />
</>
  );
}