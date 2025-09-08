// src/pages/Login.jsx
import { useState } from "react";
import { motion } from 'framer-motion';

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const hour = new Date().getHours();
  let greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${formData.email}`);
  };

  return (
    <motion.div
      className="bg-gray-50 min-h-screen w-full pt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto text-center px-4 md:px-20 py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">Login</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
          {greeting}, welcome back to FinanceApp!
        </p>
  </motion.section>

      {/* Login Form */}
      <motion.section
        className="w-full max-w-md mx-auto px-2 sm:px-6 md:px-8 py-12 sm:py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border-t-4 border-yellow-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign In to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50"
                placeholder="you@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-50"
                  placeholder="Your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-sm text-yellow-600 font-semibold focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 text-white font-bold rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Login
              </button>
            </div>
          </form>

          {/* Extra Links */}
          <div className="mt-6 text-center text-gray-600">
            <p className="text-sm">
              Don’t have an account?{' '}
              <a href="/signup" className="text-yellow-600 font-bold hover:underline">Sign Up</a>
            </p>
            <p className="text-sm mt-2">
              <a href="/forgot-password" className="text-yellow-600 font-bold hover:underline">Forgot Password?</a>
            </p>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}