import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function About() {

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
  <h1 className="text-3xl xs:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg tracking-tight">About Us</h1>
  <p className="text-base xs:text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
          Empowering you with smarter financial solutions to achieve stability, growth, and long-term success.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12 py-8 sm:py-16 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
  <div className="bg-white shadow-lg rounded-2xl p-4 xs:p-6 sm:p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to simplify financial management for individuals and businesses by providing innovative solutions that are secure, reliable, and easy to use. Our mission is to bridge the gap between technology and finance to create long-lasting value.
          </p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-4 xs:p-6 sm:p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a trusted global leader in digital finance solutions, empowering millions to make confident financial decisions and achieve financial freedom.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="w-full bg-yellow-50 py-8 sm:py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
  <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-3xl font-extrabold text-yellow-700 mb-12 tracking-tight">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-7 md:gap-10">
            {/* Team Member */}
            <motion.div
              className="bg-white rounded-2xl shadow-md p-3 xs:p-4 sm:p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mx-auto rounded-full mb-3 sm:mb-4 object-cover border-4 border-yellow-300 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800">Milan Panchal</h3>
              <p className="text-yellow-600 font-semibold">CEO & Founder</p>
              <p className="text-gray-600 text-sm mt-2">
                Passionate about fintech innovation and helping people achieve financial stability.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-md p-3 xs:p-4 sm:p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mx-auto rounded-full mb-3 sm:mb-4 object-cover border-4 border-yellow-300 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
              <p className="text-yellow-600 font-semibold">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm mt-2">
                Expert in financial planning and risk management with 10+ years of experience.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-md p-3 xs:p-4 sm:p-6 border-b-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 mx-auto rounded-full mb-3 sm:mb-4 object-cover border-4 border-yellow-300 shadow"
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
        className="w-full text-center py-8 sm:py-14 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
  <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-6 tracking-tight">
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
    <Footer />
</>
  );
}