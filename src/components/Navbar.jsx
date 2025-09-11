import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
  className="bg-white shadow-sm fixed top-0 w-full z-50 border-b border-gray-200 mb-8"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
  <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
          <div className="flex justify-center items-center space-x-2 font-bold text-yellow-600">
            <img
              src="./img/saral.png"
              alt="Saral Finance Logo"
              className="h-10 w-auto object-contain inline-block align-middle"
            />
            <span className="text-2xl leading-none align-middle mb-1">Saral finance</span>
          </div>
          </Link>
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border-2 border-yellow-600 bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-1 rounded-full bg-yellow-600 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-1 rounded-full bg-yellow-600 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1 rounded-full bg-yellow-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Desktop menu with animated links */}
          <motion.ul
            className="hidden md:flex space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/login", label: "Login" },
            ].map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
                }}
              >
                <Link
                  to={item.to}
                  className="hover:text-yellow-600 focus:text-yellow-600 transition-colors"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        {/* Mobile menu with animated links */}
        <motion.div
          className={`md:hidden flex flex-col w-full mt-2 rounded bg-yellow-600 transition-all duration-300 origin-top overflow-hidden z-40 ${menuOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}
          style={{ transformOrigin: 'top' }}
          initial={false}
          animate={menuOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto', transition: { when: 'beforeChildren', staggerChildren: 0.09 } },
            closed: { opacity: 0, height: 0, transition: { when: 'afterChildren' } },
          }}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
            { to: "/login", label: "Login" },
          ].map((item, idx, arr) => (
            <motion.div
              key={item.label}
              variants={{
                open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
                closed: { opacity: 0, x: -20 },
              }}
            >
              <Link
                to={item.to}
                className={`block px-4 py-3 text-white hover:bg-yellow-300 hover:text-yellow-600 focus:text-yellow-600 focus:bg-yellow-300 transition-colors border-b border-yellow-300 ${idx === arr.length - 1 ? 'last:border-b-0' : ''}`}
                aria-label={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;