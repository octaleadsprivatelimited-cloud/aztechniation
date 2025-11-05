'use client'

import { useState, useEffect, useRef } from 'react'
import { Users, Clock, Star, Shield, TrendingUp, Sparkles } from 'lucide-react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<{[key: string]: number}>({})
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    {
      icon: Users,
      number: 5000,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Satisfied customers across HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Clock,
      number: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Professional expertise in electronics and appliance repair in Hyderabad',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Star,
      number: 4.7,
      suffix: '/5',
      label: 'Customer Rating',
      description: 'Based on 5000+ customer reviews across Hyderabad',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      number: 100,
      suffix: '%',
      label: 'Satisfaction Guarantee',
      description: 'We stand behind our work across all areas of Hyderabad',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateNumber(stat.number, `stat-${index}`)
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateNumber = (target: number, key: string) => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      // Preserve decimals for rating (4.7), use floor for whole numbers
      const value = target < 10 ? current : Math.floor(current)
      setAnimatedNumbers(prev => ({
        ...prev,
        [key]: value
      }))
    }, duration / steps)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/90"></div>
      <div className="absolute inset-0 bg-white/5"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${(i * 0.2)}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Trusted by <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Thousands in Hyderabad</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Our numbers speak for themselves. We've been serving HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad with 
            professional electronics and appliance repair services for over 15 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const animatedValue = animatedNumbers[`stat-${index}`] || 0
            const displayValue = stat.number === 4.7 ? animatedValue.toFixed(1) : animatedValue
            
            return (
              <div 
                key={index} 
                className={`text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 group-hover:bg-white/20 transition-all duration-500 hover:scale-105 transform border border-white/10 hover:border-white/20">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    {displayValue}{stat.suffix}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
