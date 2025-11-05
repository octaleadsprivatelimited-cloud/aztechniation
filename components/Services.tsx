'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import { Wind, Refrigerator, Monitor, ArrowRight, Sparkles } from 'lucide-react'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Wind,
      title: 'AC Repair Hyderabad',
      description: 'Complete AC repair and maintenance services for all types of air conditioners in Hyderabad. Samsung, LG, Daikin, Voltas, Blue Star, Carrier AC repair.',
      features: ['Gas Filling', 'Compressor Repair', 'Cooling Issues', 'Maintenance'],
      href: '/services/ac-repair',
      color: 'bg-cyan-500'
    },
    {
      icon: Monitor,
      title: 'Washing Machine Repair Hyderabad',
      description: 'Expert washing machine repair for all brands and models in Hyderabad. Samsung, LG, Whirlpool, IFB washing machine repair.',
      features: ['Drum Issues', 'Motor Problems', 'Water Leakage', 'Spin Problems'],
      href: '/services/washing-machine-repair',
      color: 'bg-indigo-500'
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator Repair Hyderabad',
      description: 'Comprehensive refrigerator repair services for all types of fridges in Hyderabad. Samsung, LG, Whirlpool, Godrej refrigerator repair.',
      features: ['Cooling Issues', 'Compressor Repair', 'Thermostat', 'Door Seals'],
      href: '/services/refrigerator-repair',
      color: 'bg-green-500'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services in Hyderabad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional repair services for all your electronics and home appliances in Hyderabad. 
            We fix it right the first time, every time. Serving HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)
            const isHovered = hoveredCard === index
            
            return (
              <Link
                key={service.title}
                href={service.href}
                data-index={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-100 hover:border-gray-300 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-18 sm:h-18 ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 relative ${
                    isHovered ? 'shadow-lg' : ''
                  }`}>
                    <Icon className="h-7 w-7 sm:h-9 sm:w-9 text-white group-hover:animate-pulse" />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 ${service.color} rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center group-hover:text-gray-700 transition-colors duration-200">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors duration-200"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="mt-6 flex items-center text-blue-600 font-medium text-base group-hover:text-blue-700 transition-colors duration-200">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Don't see your appliance listed? We repair everything in Hyderabad!
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              We repair all types of electronics and home appliances in Hyderabad. Serving HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad. Contact us for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <GetQuoteButton
                serviceType="general"
                className="border-2 border-primary-600 text-primary-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 text-sm sm:text-base"
              >
                Get Free Quote
              </GetQuoteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
