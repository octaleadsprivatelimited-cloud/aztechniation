'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, ZoomIn, Star } from 'lucide-react'

interface ServiceImageProps {
  src: string
  alt: string
  title: string
  description: string
  rating?: number
  reviews?: number
  className?: string
}

const ServiceImage = ({ 
  src, 
  alt, 
  title, 
  description, 
  rating = 4.7, 
  reviews = 5000,
  className = ""
}: ServiceImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={imgRef}
      className={`relative group ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
        <img
          src={src}
          alt={alt}
          className={`w-full h-80 object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Play Button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
            <Play className="h-8 w-8 text-gray-800 ml-1" />
          </div>
        </div>

        {/* Zoom Icon */}
        <div className={`absolute top-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <ZoomIn className="h-5 w-5 text-gray-800" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-4'
      }`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-3">{description}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-xs text-gray-300">({reviews}+ reviews)</span>
        </div>
      </div>

      {/* Floating Badge */}
      <div className={`absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${
        isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
      }`}>
        <span className="text-sm font-semibold">Expert Service</span>
      </div>
    </div>
  )
}

export default ServiceImage
