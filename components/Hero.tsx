'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Star, Shield, Clock, CheckCircle, Sparkles, Zap } from 'lucide-react'
import ServiceImages from './ServiceImages'

const Hero = () => {
  const [selectedService, setSelectedService] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setAnimateStats(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    { name: 'AC Repair', href: '/services/ac-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Household Appliances Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/household-appliances-background.jpg"
          alt="Household appliances repair background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${(i * 0.2)}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-electric-200 to-cosmic-200 bg-clip-text text-transparent">
                  Professional Electronics & Appliance Repair in Hyderabad
                </span>
              </h1>
                  <p className="hidden lg:block text-base sm:text-lg text-primary-100 leading-relaxed max-w-2xl">
                Expert repair services for ACs, washing machines, and refrigerators. 
                Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad. Fast, reliable, and affordable solutions with 15+ years of experience.
              </p>
            </div>

            {/* Trust Indicators - Hidden on mobile and tablet */}
            <div className="hidden lg:flex flex-row items-center justify-center gap-2 sm:gap-6 text-xs">
              <div className="flex items-center gap-1 sm:gap-2 group bg-gradient-to-r from-sunset-500/20 to-accent-500/20 backdrop-blur-sm px-2 sm:px-3 py-2 rounded-lg hover:from-sunset-400/30 hover:to-accent-400/30 transition-all duration-300 border border-sunset-400/30">
                <div className="p-1 bg-sunset-500/30 rounded">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-sunset-300 fill-current group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-semibold text-white group-hover:text-sunset-200 transition-colors duration-200 text-xs hidden xs:inline">4.7/5 Rating</span>
                <span className="font-semibold text-white group-hover:text-sunset-200 transition-colors duration-200 text-xs xs:hidden">4.7★</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 group bg-gradient-to-r from-neon-500/20 to-success-500/20 backdrop-blur-sm px-2 sm:px-3 py-2 rounded-lg hover:from-neon-400/30 hover:to-success-400/30 transition-all duration-300 border border-neon-400/30">
                <div className="p-1 bg-neon-500/30 rounded">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-neon-300 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-semibold text-white group-hover:text-neon-200 transition-colors duration-200 text-xs hidden xs:inline">100% Guaranteed</span>
                <span className="font-semibold text-white group-hover:text-neon-200 transition-colors duration-200 text-xs xs:hidden">100%</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 group bg-gradient-to-r from-electric-500/20 to-primary-500/20 backdrop-blur-sm px-2 sm:px-3 py-2 rounded-lg hover:from-electric-400/30 hover:to-primary-400/30 transition-all duration-300 border border-electric-400/30">
                <div className="p-1 bg-electric-500/30 rounded">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-electric-300 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-semibold text-white group-hover:text-electric-200 transition-colors duration-200 text-xs hidden xs:inline">Same Day Service</span>
                <span className="font-semibold text-white group-hover:text-electric-200 transition-colors duration-200 text-xs xs:hidden">Same Day</span>
              </div>
            </div>

            {/* Service Selection - Hidden on mobile and tablet */}
            <div className="hidden lg:block space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">What needs repair?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setSelectedService(service.name)}
                    className={`p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 text-left group ${
                      selectedService === service.name
                        ? 'border-primary-400 bg-primary-500/30 text-white shadow-lg shadow-primary-500/25'
                        : 'border-white/30 bg-white/10 hover:border-primary-400/50 hover:bg-primary-500/20 text-white backdrop-blur-sm'
                    }`}
                  >
                    <div className="font-medium text-xs sm:text-xs group-hover:scale-105 transition-transform duration-200">{service.name}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Hidden on mobile and tablet */}
            <div className="hidden lg:flex flex-row gap-2 sm:gap-4">
              <Link
                href={selectedService ? services.find(s => s.name === selectedService)?.href || '/contact' : '/contact'}
                className="group border-2 border-gradient-to-r from-cosmic-400 to-secondary-400 bg-gradient-to-r from-cosmic-500/20 to-secondary-500/20 text-white px-3 sm:px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm hover:from-cosmic-400/30 hover:to-secondary-400/30 hover:border-cosmic-300 transition-all duration-300 text-center hover:scale-105 transform backdrop-blur-sm flex-1"
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <span className="hidden sm:inline">
                    {selectedService ? `Book ${selectedService}` : 'Book Service Online'}
                  </span>
                  <span className="sm:hidden text-xs">
                    {selectedService ? 'Book Now' : 'Book Online'}
                  </span>
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-pulse" />
                </span>
              </Link>
            </div>

            {/* Quick Stats - Hidden on mobile and tablet */}
            <div className={`hidden lg:grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/30 transition-all duration-1000 delay-500 ${animateStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="text-center group bg-gradient-to-br from-sunset-500/20 to-accent-500/20 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 rounded-lg hover:from-sunset-400/30 hover:to-accent-400/30 transition-all duration-300 border border-sunset-400/30">
                <div className="text-lg sm:text-xl font-bold text-white group-hover:text-sunset-300 transition-colors duration-300">5000+</div>
                <div className="text-xs text-sunset-200 group-hover:text-white transition-colors duration-300 font-medium">Happy Customers</div>
              </div>
              <div className="text-center group bg-gradient-to-br from-neon-500/20 to-success-500/20 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 rounded-lg hover:from-neon-400/30 hover:to-success-400/30 transition-all duration-300 border border-neon-400/30">
                <div className="text-lg sm:text-xl font-bold text-white group-hover:text-neon-300 transition-colors duration-300">15+</div>
                <div className="text-xs text-neon-200 group-hover:text-white transition-colors duration-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center group bg-gradient-to-br from-electric-500/20 to-primary-500/20 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 rounded-lg hover:from-electric-400/30 hover:to-primary-400/30 transition-all duration-300 border border-electric-400/30">
                <div className="text-lg sm:text-xl font-bold text-white group-hover:text-electric-300 transition-colors duration-300">24/7</div>
                <div className="text-xs text-electric-200 group-hover:text-white transition-colors duration-300 font-medium">Service Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative z-10">
              {/* Service Images Grid */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-5 hover:shadow-3xl transition-all duration-500 hover:scale-105 transform border border-white/20">
                <ServiceImages serviceType="general" />
                
                {/* Central Call-to-Action */}
                <div className="mt-3 sm:mt-4 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg hover:scale-110 transition-transform duration-300 animate-glow">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary-900 mb-1 sm:mb-2">
                    Expert Repair Services
                  </h3>
                  <p className="text-primary-700 font-medium text-xs sm:text-sm">
                    Professional technicians at your doorstep
                  </p>
                </div>
              </div>

              {/* Floating Cards - Hidden on mobile and tablet */}
              <div className="hidden lg:block absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 animate-float border border-white/20" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-warning-100 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="h-4 w-4 sm:h-6 sm:w-6 text-warning-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-gray-900">Top Rated</div>
                    <div className="text-xs text-gray-600 font-medium">5000+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero