'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Exceptional Performance',
    description: 'Powered by the latest processor, delivering 50% faster performance to handle complex tasks effortlessly.',
    color: 'from-gray-200 to-gray-300',
  },
  {
    icon: '🎨',
    title: 'Elegant Design',
    description: 'Crafted from aerospace-grade aluminum alloy with precision engineering, every detail reflects quality.',
    color: 'from-gray-200 to-gray-300',
  },
  {
    icon: '🔋',
    title: 'Long Battery Life',
    description: 'Intelligent power management system provides up to 24 hours of battery life, eliminating battery anxiety.',
    color: 'from-gray-200 to-gray-300',
  },
  {
    icon: '📸',
    title: 'Professional Imaging',
    description: 'Equipped with professional-grade camera system supporting 4K video recording to capture every moment.',
    color: 'from-gray-200 to-gray-300',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Multiple security protection mechanisms safeguard your privacy and data for peace of mind.',
    color: 'from-gray-200 to-gray-300',
  },
  {
    icon: '🌐',
    title: 'Smart Connectivity',
    description: 'Supports 5G network and Wi-Fi 6 for high-speed connectivity anywhere, anytime.',
    color: 'from-gray-200 to-gray-300',
  },
]

export default function ProductFeatures() {
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
          Product Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Every detail is meticulously designed to deliver an exceptional user experience
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            
            {/* Icon */}
            <div className="text-5xl mb-4">{feature.icon}</div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>

            {/* Decorative Element */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full rounded-tr-2xl`} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
