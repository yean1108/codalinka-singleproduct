'use client'

import { motion } from 'framer-motion'

const specs = [
  { category: 'Processor', value: 'Latest Generation High-Performance Processor' },
  { category: 'Memory', value: '16GB LPDDR5' },
  { category: 'Storage', value: '512GB / 1TB / 2TB SSD' },
  { category: 'Display', value: '6.7-inch Super Retina Display' },
  { category: 'Resolution', value: '2778 × 1284 pixels' },
  { category: 'Camera', value: '48MP Main Camera with 4K Video Support' },
  { category: 'Audio', value: 'Stereo Speakers with Spatial Audio Support' },
  { category: 'Connectivity', value: 'Wi-Fi 6E, Bluetooth 5.3, 5G' },
  { category: 'Ports', value: 'USB-C (Fast Charging & Data Transfer)' },
  { category: 'Battery', value: 'Up to 24 hours battery life' },
  { category: 'Weight', value: 'Approx. 200g' },
  { category: 'Operating System', value: 'Latest Operating System' },
]

export default function ProductSpecs() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Technical Specifications
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the detailed technical specifications of CodaPhone
        </p>
      </motion.div>

      {/* Specifications Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <span className="text-gray-600 font-medium">{spec.category}</span>
                <span className="text-gray-900 font-semibold text-right ml-4">
                  {spec.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-800 rounded-2xl p-8 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
          <p className="text-gray-300 mb-6">
            Our professional team is ready to provide detailed product consultation and technical support
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
