import siteConfig from "./Siteconfig";
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <>
    <motion.section
      className="w-full py-10 sm:py-16 md:py-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
  <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why {siteConfig.siteName}?
        </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {siteConfig.features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section></>
  );
}