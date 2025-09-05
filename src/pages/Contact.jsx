// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, we’ll get back to you soon!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="text-center px-6 md:px-20 py-12 bg-gradient-to-r from-yellow-600 to-yellow-300 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We’d love to hear from you! Reach out with any questions or feedback.
        </p>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <span className="text-yellow-600 text-3xl mb-3">📞</span>
          <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <span className="text-yellow-600 text-3xl mb-3">📧</span>
          <h3 className="text-xl font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600">support@financeapp.com</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <span className="text-yellow-600 text-3xl mb-3">📍</span>
          <h3 className="text-xl font-semibold text-gray-800">Location</h3>
          <p className="text-gray-600">Mumbai, India</p>
        </div>
      </section>

      {/* Dynamic Info */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-8 text-center">
        <p className="text-lg text-gray-700">
          📅 Today is <span className="font-semibold text-yellow-600">{today}</span>
        </p>
        <p className="text-lg text-gray-700 mt-2">
          🕒 Office Hours: <span className="font-semibold text-yellow-600">Mon - Fri, 9 AM - 6 PM</span>
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-yellow-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}