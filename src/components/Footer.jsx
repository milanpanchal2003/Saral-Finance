import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-yellow-700 pt-8 pb-4 px-4 md:px-0 mt-10 shadow-sm rounded-xl border border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.13 } },
        }}
      >
        {/* Contact Info */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Contact Info</h2>
          <p className="mb-1 text-gray-700">📍 Tours, 10001, 5th Avenue, #06 lane street, NY - 62617</p>
          <p className="mb-1 text-gray-700">📞 <a href="tel:+1(21)2344567" className="hover:text-yellow-600 transition-colors">+1(21) 234 4567</a></p>
          <p className="mb-3 text-gray-700">✉️ <a href="mailto:info@example.com" className="hover:text-yellow-600 transition-colors">info@example.com</a></p>
          <motion.div className="flex gap-3 mt-2" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }}>
            <motion.a href="#" aria-label="Facebook" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaFacebookF className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
            <motion.a href="#" aria-label="Twitter" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaTwitter className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
            <motion.a href="#" aria-label="LinkedIn" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaLinkedinIn className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
            <motion.a href="#" aria-label="Google Plus" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaGooglePlusG className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
            <motion.a href="#" aria-label="GitHub" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaGithub className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
            <motion.a href="#" aria-label="Instagram" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaInstagram className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
            <motion.a href="#" aria-label="Whatsapp" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><FaWhatsapp className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" /></motion.a>
          </motion.div>
        </motion.div>
        {/* Quick Links */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.05 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Work with us</a></li>
            <li><a href="/contact" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Rewards</a></li>
          </ul>
        </motion.div>
        {/* Explore */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.1 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Explore</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Blog Posts</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Our Partners</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">License & Uses</a></li>
            <li><a href="#" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Events</a></li>
          </ul>
        </motion.div>
        {/* Subscribe */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.15 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Subscribe</h2>
          <motion.form className="flex flex-col sm:flex-row gap-2" onSubmit={e => e.preventDefault()} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}>
            <input type="email" name="email" placeholder="Email Address" required className="px-3 py-2 rounded text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            <button type="submit" className="bg-yellow-600 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-300 hover:text-yellow-700 focus:text-yellow-700 focus:bg-yellow-300 transition-colors shadow">Subscribe</button>
          </motion.form>
          <motion.p className="mt-3 text-sm text-gray-700" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>Subscribe to our mailing list and get updates to your email inbox.</motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500 border-t border-gray-200 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.3 }}
      >
        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>© 2025 Tours. All rights reserved.</motion.p>
        <motion.a href="https://example.com/" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>example.com</motion.a>
      </motion.div>
    </motion.footer>
  );
};
export default Footer;