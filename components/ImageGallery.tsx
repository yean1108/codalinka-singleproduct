'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    id: 1,
    url: '/images/CodaPhone-Silver.png',
    alt: 'CodaPhone Silver - Front View',
  },
  {
    id: 2,
    url: '/images/CodaPhone-Silver.png',
    alt: 'CodaPhone Silver - Side View',
  },
  {
    id: 3,
    url: '/images/CodaPhone-Silver.png',
    alt: 'CodaPhone Silver - Back View',
  },
  {
    id: 4,
    url: '/images/CodaPhone-Silver.png',
    alt: 'CodaPhone Silver - Detail View',
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-2xl cursor-zoom-in"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700">
          <span className="mr-1">🔍</span>Click to Zoom
        </div>
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? 'border-blue-600 shadow-lg scale-105'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {selectedImage === index && (
              <motion.div
                className="absolute inset-0 bg-blue-600/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Fullscreen Zoom View */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-white/10 backdrop-blur-sm w-12 h-12 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsZoomed(false)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
