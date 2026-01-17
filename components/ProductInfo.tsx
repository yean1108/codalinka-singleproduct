'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ProductInfoProps {
  onColorChange?: (color: string) => void
}

export default function ProductInfo({ onColorChange }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('Silver')
  const [selectedSize, setSelectedSize] = useState('Standard')

  const colors = ['Silver', 'Black', 'Golden', 'Space Gray']
  const sizes = ['Standard', 'Pro', 'Ultimate']
  
  // Color image mapping
  const colorImages: Record<string, string> = {
    'Silver': '/images/CodaPhone-Silver.png',
    'Black': '/images/CodaPhone-Black.png',
    'Golden': '/images/CodaPhone-Golden.png',
    'Space Gray': '/images/CodaPhone-Spacegrey.png',
  }

  // Version pricing mapping
  const versionPricing: Record<string, { current: number; original: number }> = {
    'Standard': { current: 999, original: 1299 },
    'Pro': { current: 1299, original: 1599 },
    'Ultimate': { current: 1599, original: 1999 },
  }

  const currentPrice = versionPricing[selectedSize]?.current || 999
  const originalPrice = versionPricing[selectedSize]?.original || 1299

  useEffect(() => {
    if (onColorChange) {
      onColorChange(selectedColor)
    }
  }, [selectedColor, onColorChange])

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
  }

  const handleAddToCart = () => {
    // Add to cart logic
    alert(`Added ${quantity} item(s) to cart`)
  }

  const handleBuyNow = () => {
    // Buy now logic
    alert('Redirecting to checkout page')
  }

  return (
    <div className="space-y-6">
      {/* Brand Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-block"
      >
        <span className="px-4 py-1.5 bg-gray-800 text-white text-sm font-semibold rounded-full">
          New Arrival
        </span>
      </motion.div>

      {/* Product Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
      >
        CodaPhone
        <br />
        <span className="text-gray-600">
          Exceptional Experience, Infinite Possibilities
        </span>
      </motion.h1>

      {/* Price */}
      <motion.div
        key={selectedSize}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-baseline space-x-3"
      >
        <span className="text-4xl font-bold text-gray-900">${currentPrice.toLocaleString()}</span>
        <span className="text-xl text-gray-500 line-through">${originalPrice.toLocaleString()}</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
          Limited Offer
        </span>
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center space-x-2"
      >
        <div className="flex text-gray-400">
          {'★★★★★'.split('').map((star, i) => (
            <span key={i} className="text-2xl">{star}</span>
          ))}
        </div>
        <span className="text-gray-600 font-medium">4.9</span>
        <span className="text-gray-400">(1,234 reviews)</span>
      </motion.div>

      {/* Product Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-lg text-gray-600 leading-relaxed"
      >
        CodaPhone features cutting-edge technology, combining elegant design with exceptional performance.
        Every detail is meticulously crafted to deliver an unparalleled user experience.
        Perfect for both work and life, meeting all your needs.
      </motion.p>

      {/* Color Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-3"
      >
        <label className="text-sm font-semibold text-gray-700">Select Color</label>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedColor === color
                  ? 'bg-gray-800 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Version Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-3"
      >
        <label className="text-sm font-semibold text-gray-700">Select Version</label>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                selectedSize === size
                  ? 'bg-gray-800 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Quantity Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex items-center space-x-4"
      >
        <label className="text-sm font-semibold text-gray-700">Quantity</label>
        <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-colors"
          >
            −
          </button>
          <span className="w-12 text-center font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white transition-colors"
          >
            +
          </button>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <motion.button
          onClick={handleBuyNow}
          className="flex-1 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Buy Now
        </motion.button>
        <motion.button
          onClick={handleAddToCart}
          className="flex-1 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-800 hover:text-gray-900 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add to Cart
        </motion.button>
      </motion.div>

      {/* Guarantee Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200"
      >
        {[
          { icon: '🚚', text: 'Free Shipping' },
          { icon: '↩️', text: '14 Days Return' },
          { icon: '🛡️', text: 'Authentic Guarantee' },
          { icon: '💳', text: 'Secure Payment' },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="text-sm text-gray-600">{item.text}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
