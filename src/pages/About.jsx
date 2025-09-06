import { motion } from 'framer-motion';
export default function About() {

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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
          Empowering you with smarter financial solutions to achieve stability, growth, and long-term success.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="max-w-6xl mx-auto px-4 md:px-12 py-16 grid md:grid-cols-2 gap-8 md:gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to simplify financial management for individuals and businesses by providing innovative solutions that are secure, reliable, and easy to use. Our mission is to bridge the gap between technology and finance to create long-lasting value.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a trusted global leader in digital finance solutions, empowering millions to make confident financial decisions and achieve financial freedom.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="bg-yellow-50 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl font-extrabold text-yellow-700 mb-12 tracking-tight">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* Team Member */}
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-yellow-300 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800">Milan Panchal</h3>
              <p className="text-yellow-600 font-semibold">CEO & Founder</p>
              <p className="text-gray-600 text-sm mt-2">
                Passionate about fintech innovation and helping people achieve financial stability.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-yellow-300 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
              <p className="text-yellow-600 font-semibold">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm mt-2">
                Expert in financial planning and risk management with 10+ years of experience.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-yellow-300 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
              <p className="text-yellow-600 font-semibold">Tech Lead</p>
              <p className="text-gray-600 text-sm mt-2">
                Building secure, scalable financial platforms using modern technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer Call to Action */}
      <motion.section
        className="text-center py-16 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-2xl xs:text-3xl font-extrabold mb-4 sm:mb-6 tracking-tight">
          Ready to join us on your financial journey?
        </h2>
        <a
          href="/contact"
          className="bg-white text-yellow-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300 text-base"
        >
          Contact Us
        </a>
      </motion.section>
    </motion.div>
  );
}