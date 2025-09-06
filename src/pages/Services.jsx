import { motion } from 'framer-motion';
export default function Services() {
  return (
    <motion.div
      className="bg-gray-50 min-h-screen pt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center px-4 md:px-20 py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
          Explore our wide range of financial solutions tailored to help you manage, grow, and secure your wealth.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="max-w-7xl mx-auto px-4 md:px-12 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Service Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 text-3xl">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Investment Planning</h3>
            <p className="text-gray-600 leading-relaxed">
              Smart investment strategies to maximize returns while minimizing risks, tailored to your goals.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 text-3xl">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Financial Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Data-driven financial insights to help you make informed business and personal finance decisions.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 text-3xl">🏦</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Wealth Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Personalized wealth management solutions to grow and secure your assets for the long term.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 text-3xl">🧾</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Tax Consulting</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert tax advisory services to optimize tax savings and ensure compliance with regulations.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 text-3xl">📉</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Risk Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Identify, assess, and minimize financial risks with proven strategies and secure solutions.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 text-3xl">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Global Consulting</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing international finance and business consulting to help you scale beyond borders.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center py-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 drop-shadow-lg">
          Let’s build your financial future together
        </h2>
        <button className="bg-white text-yellow-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-100 hover:text-yellow-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Contact Us
        </button>
      </motion.section>
    </motion.div>
  );
}