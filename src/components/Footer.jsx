import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
  <footer className="bg-white text-yellow-700 pt-8 pb-4 px-4 md:px-0 mt-10 shadow-lg rounded-xl border border-gray-200">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Contact Info</h2>
          <p className="mb-1 text-gray-700">📍 Tours, 10001, 5th Avenue, #06 lane street, NY - 62617</p>
          <p className="mb-1 text-gray-700">📞 <a href="tel:+1(21)2344567" className="hover:text-yellow-600">+1(21) 234 4567</a></p>
          <p className="mb-3 text-gray-700">✉️ <a href="mailto:info@example.com" className="hover:text-yellow-600">info@example.com</a></p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
            <a href="#" aria-label="Google Plus"><FaGooglePlusG className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
            <a href="#" aria-label="GitHub"><FaGithub className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
            <a href="#" aria-label="Whatsapp"><FaWhatsapp className="text-2xl text-yellow-600 hover:text-yellow-500 transition-colors" /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-600">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-600">Services</a></li>
            <li><a href="#" className="hover:text-yellow-600">Work with us</a></li>
            <li><a href="/contact" className="hover:text-yellow-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-600">Rewards</a></li>
          </ul>
        </div>
        {/* Explore */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Explore</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-600">Blog Posts</a></li>
            <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-600">Our Partners</a></li>
            <li><a href="#" className="hover:text-yellow-600">License & Uses</a></li>
            <li><a href="#" className="hover:text-yellow-600">Events</a></li>
          </ul>
        </div>
        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-600 uppercase tracking-wide">Subscribe</h2>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={e => e.preventDefault()}>
            <input type="email" name="email" placeholder="Email Address" required className="px-3 py-2 rounded text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            <button type="submit" className="bg-yellow-600 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-700 transition-colors shadow">Subscribe</button>
          </form>
          <p className="mt-3 text-sm text-gray-700">Subscribe to our mailing list and get updates to your email inbox.</p>
        </div>
      </div>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500 border-t border-gray-200 mt-6">
        <p>© 2025 Tours. All rights reserved.</p>
        <a href="https://example.com/" className="hover:text-yellow-600">example.com</a>
      </div>
    </footer>
  );
};
export default Footer;