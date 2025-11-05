'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'AC Repair', href: '/services/ac-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
  ]

  return (
    <>
          {/* Main navigation */}
          <header className={`fixed w-full z-50 transition-all duration-500 top-0 ${
            isScrolled
              ? 'bg-black/95 backdrop-blur-xl shadow-xl border-b border-gray-800/50'
              : 'bg-black/98 backdrop-blur-md shadow-md border-b border-gray-800'
          }`}>
        <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 min-h-[64px] sm:min-h-[72px]">
            {/* Home Link */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-800">
                Home
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="ml-10 flex items-center space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-sm"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center hover:bg-gray-800 hover:shadow-sm">
                    Services
                    <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-6 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 font-medium hover:translate-x-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+919182107334"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-blue-500 hover:to-blue-600 flex items-center whitespace-nowrap gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            {/* Mobile menu button with smooth animation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
              >
                <div className={`transition-all duration-300 transform ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation with Smooth Motion */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-white text-gray-300 ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms` 
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className={`pt-4 border-t border-gray-800 transition-all duration-500 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="text-gray-400 text-sm font-semibold px-4 py-2 mb-2">
                  Services
                </div>
                {services.map((service, index) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className={`block px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-white text-gray-400 ${
                      isMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-6 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${300 + index * 50}ms` 
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className={`pt-6 transition-all duration-500 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full text-center px-4 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </header>
    </>
  )
}

export default Header
