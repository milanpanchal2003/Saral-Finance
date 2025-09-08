import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <motion.footer
  className="bg-white text-yellow-700 pt-8 pb-4 px-2 sm:px-4 md:px-6 lg:px-8 mt-10 shadow-sm rounded-xl mx-auto w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-7xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
  className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.13 } },
        }}
      >
        {/* Contact Info */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.05 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Contact Info</h2>
          <p className="mb-1 text-gray-700">📍 Tours, 10001, 5th Avenue, #06 lane street, NY - 62617</p>
          <p className="mb-1 text-gray-700">📞 <a href="tel:+1(21)2344567" className="hover:text-yellow-600 transition-colors">+1(21) 234 4567</a></p>
          <p className="mb-3 text-gray-700">✉️ <a href="mailto:info@example.com" className="hover:text-yellow-600 transition-colors">info@example.com</a></p>
          <motion.div className="flex gap-3 mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}>
            {[
              { icon: FaFacebookF, label: "Facebook", href: "#" },
              { icon: FaTwitter, label: "Twitter", href: "#" },
              { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
              { icon: FaGooglePlusG, label: "Google Plus", href: "#" },
              { icon: FaGithub, label: "GitHub", href: "#" },
              { icon: FaInstagram, label: "Instagram", href: "#" },
              { icon: FaWhatsapp, label: "Whatsapp", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
                }}
                whileHover={{ scale: 1.18, color: "#ca8a04" }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors"
              >
                <Icon className="text-2xl text-yellow-600 hover:text-yellow-300 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        {/* Quick Links */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.10 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Quick Links</h2>
          <motion.ul
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.11,
                },
              },
            }}
          >
            {[
              { href: "/about", label: "About Us" },
              { href: "#", label: "Services" },
              { href: "#", label: "Work with us" },
              { href: "/contact", label: "Contact Us" },
              { href: "#", label: "Rewards" },
            ].map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
                }}
              >
                <motion.a
                  href={item.href}
                  className="text-black hover:text-yellow-600 focus:text-yellow-600 transition-colors"
                  whileHover={{ scale: 1.08, color: "#ca8a04", x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* Explore */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.15 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Explore</h2>
          <motion.ul
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.11,
                },
              },
            }}
          >
            {[
              { href: "#", label: "Blog Posts" },
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "Our Partners" },
              { href: "#", label: "License & Uses" },
              { href: "#", label: "Events" },
            ].map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
                }}
              >
                <motion.a
                  href={item.href}
                  className="text-black hover:text-yellow-600 focus:text-yellow-600 transition-colors"
                  whileHover={{ scale: 1.08, color: "#ca8a04", x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* Subscribe */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.20 }}
        >
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Subscribe</h2>
          <motion.form className="flex flex-col sm:flex-row gap-2" onSubmit={e => e.preventDefault()} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.25 }}>
            <input type="email" name="email" placeholder="Email Address" required className="px-3 py-2 rounded text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            <button type="submit" className="bg-yellow-600 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-300 hover:text-yellow-700 focus:text-yellow-700 focus:bg-yellow-300 transition-colors shadow">Subscribe</button>
          </motion.form>
          <motion.p className="mt-3 text-sm text-gray-700" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Subscribe to our mailing list and get updates to your email inbox.</motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>© 2025 Tours. All rights reserved.</motion.p>
        <motion.a href="https://example.com/" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>example.com</motion.a>
      </motion.div>
    </motion.footer>
  );
};
export default Footer;