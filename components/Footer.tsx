'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const services = [
    { name: 'AC Repair', href: '/services/ac-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ]

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Book Service', href: '/book-service' },
    { name: 'Track Service', href: '/track-service' },
    { name: 'Customer Support', href: '/support' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Sitemap', href: '/sitemap' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
  ]

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-gray-900/20"></div>
      <div className="absolute inset-0 bg-white/5"></div>
      
      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">A</span>
              </div>
              <span className="ml-3 text-lg sm:text-xl font-bold text-white">AZ technician</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm leading-relaxed">
              Professional electronics and appliance repair services in Hyderabad. 
              Trusted by thousands of customers for reliable, affordable, and quality repairs.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-gray-800/50 transition-colors duration-200">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <a href="tel:+919182107334" className="font-semibold text-xs sm:text-sm hover:text-white">+91 91821 07334</a>
                  <div className="text-xs text-gray-400">Primary phone</div>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-gray-800/50 transition-colors duration-200">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <a href="mailto:mra760063@gmail.com" className="font-semibold text-xs sm:text-sm hover:text-white">mra760063@gmail.com</a>
                  <div className="text-xs text-gray-400">Email support</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-gray-800/50 transition-colors duration-200">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm">Mon-Sun: 8:00 AM - 8:00 PM</div>
                  <div className="text-xs text-gray-400">24/7 Emergency service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold mb-4 text-white">Support & Legal</h3>
            <ul className="space-y-2">
              {[...support, ...legal].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4 sm:space-y-6">
            {/* Services */}
            <div className="bg-black/30 rounded-lg p-3 sm:p-4">
              <button
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-base font-bold text-white">Our Services</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 text-gray-400 ${
                    openSections.includes('services') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('services') && (
                <ul className="mt-3 space-y-2 pl-4">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></div>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Company */}
            <div className="bg-black/30 rounded-lg p-3 sm:p-4">
              <button
                onClick={() => toggleSection('company')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-base font-bold text-white">Company</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 text-gray-400 ${
                    openSections.includes('company') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('company') && (
                <ul className="mt-3 space-y-2 pl-4">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Support */}
            <div className="bg-black/30 rounded-lg p-3 sm:p-4">
              <button
                onClick={() => toggleSection('support')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-base font-bold text-white">Support</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 text-gray-400 ${
                    openSections.includes('support') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('support') && (
                <ul className="mt-3 space-y-2 pl-4">
                  {support.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Legal */}
            <div className="bg-black/30 rounded-lg p-3 sm:p-4">
              <button
                onClick={() => toggleSection('legal')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-base font-bold text-white">Legal</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 text-gray-400 ${
                    openSections.includes('legal') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('legal') && (
                <ul className="mt-3 space-y-2 pl-4">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-black/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                )
              })}
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <div className="text-gray-400 text-xs mb-1">
                © 2025 AZ technician.in. All rights reserved.
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Designed and developed by <a href="http://octaleads.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Octaleads Pvt Ltd</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
