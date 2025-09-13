// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


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
// https://saral-backend-3nvn.onrender.com/api/users/contact
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Thanks ${formData.name}, we’ll get back to you soon!`);
  // };
   const handleSubmit = async (e) => {
  e.preventDefault();


  try {
    const res = await fetch("https://saral-backend-3nvn.onrender.com/api/users/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //JavaScript Object Notation
      },
      body: JSON.stringify(formData), // formData ko string me convert kar ke bhej rahe hain
    });


    const data = await res.json();
    console.log("Response:", data);
    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};


  return (
<>
    <Navbar />
    <motion.div
      className="bg-gray-50 min-h-screen w-full pt-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto text-center px-4 md:px-12 py-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg rounded-2xl mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
          We’d love to hear from you! Reach out with any questions or feedback.
        </p>
      </motion.section>

      {/* Info Section */}
      <motion.section
        className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-600 text-3xl mb-3">📞</span>
          <h3 className="text-xl font-bold text-gray-800">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-yellow-600 text-3xl mb-3">📧</span>
          <h3 className="text-xl font-bold text-gray-800">Email</h3>
          <p className="text-gray-600">support@financeapp.com</p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-yellow-600 text-3xl mb-3">📍</span>
          <h3 className="text-xl font-bold text-gray-800">Location</h3>
          <p className="text-gray-600">Mumbai, India</p>
        </motion.div>
      </motion.section>

      {/* Dynamic Info */}
      <motion.section
        className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-4 md:px-8 py-6 text-center bg-white rounded-2xl shadow-lg border-t-4 border-yellow-500 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p className="text-lg text-gray-700">
          📅 Today is <span className="font-semibold text-yellow-600">{today}</span>
        </p>
        <p className="text-lg text-gray-700 mt-2">
          🕒 Office Hours: <span className="font-semibold text-yellow-600">Mon - Fri, 9 AM - 6 PM</span>
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-4 md:px-8 py-8 bg-white rounded-2xl shadow-lg border-t-4 border-yellow-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <motion.div
          className="p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
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
        </motion.div>
      </motion.section>
    </motion.div>
    <Footer />
</>
  );
}