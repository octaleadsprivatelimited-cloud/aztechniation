import type { Metadata } from 'next'
import { FileText, Home, Wrench, User, Shield, Mail, Calendar, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap - AZ technician | Website Navigation',
  description: 'Complete sitemap of AZ technician website. Find all pages and services easily with our comprehensive site navigation.',
  openGraph: {
    title: 'Sitemap - AZ technician',
    description: 'Complete sitemap of AZ technician website.',
    type: 'website',
  },
}


const Sitemap = () => {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Main homepage with service overview' },
    { name: 'About Us', href: '/about', description: 'Learn about our company and team' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
  ]

  const servicePages = [
    { name: 'All Services', href: '/services', description: 'Overview of our repair services' },
    { name: 'AC Repair', href: '/services/ac-repair', description: 'Air conditioning repair and maintenance' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair', description: 'Washing machine repair services' },
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair', description: 'Refrigerator repair and maintenance' }
  ]

  const supportPages = [
    { name: 'Book Service', href: '/book-service', description: 'Schedule your appliance repair service' },
    { name: 'Track Service', href: '/track-service', description: 'Track your service request status' },
    { name: 'Customer Support', href: '/customer-support', description: 'Get help and support from our team' },
    { name: 'Service Areas', href: '/service-areas', description: 'Check if we provide service in your area' }
  ]

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy-policy', description: 'Our privacy policy and data protection' },
    { name: 'Terms of Service', href: '/terms-of-service', description: 'Terms and conditions for our services' },
    { name: 'Refund Policy', href: '/refund-policy', description: 'Our refund policy and money-back guarantee' },
    { name: 'Warranty', href: '/warranty', description: 'Service warranty terms and coverage' }
  ]

  const quickLinks = [
    { name: 'Contact Us', href: '/contact', icon: Mail },
  { name: 'Email Us', href: 'mailto:mra760063@gmail.com', icon: Mail },
    { name: 'Book Online', href: '/book-service', icon: Calendar },
    { name: 'Track Service', href: '/track-service', icon: Search }
  ]

  const contactInfo = [
  { label: 'Email', value: 'mra760063@gmail.com', icon: Mail },
    { label: 'Service Hours', value: '8:00 AM - 8:00 PM (Mon-Sat)', icon: Calendar }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Navigate through all pages and services available on our website. 
              Find everything you need quickly and easily.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-lg text-gray-600">
              Most frequently accessed pages and contact options
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-primary-50 hover:bg-primary-100 rounded-lg p-4 text-center transition-colors duration-200 group"
              >
                <link.icon className="h-8 w-8 text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-semibold text-primary-900">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Home className="h-8 w-8 text-primary-600 mr-3" />
              Main Pages
            </h2>
            <p className="text-lg text-gray-600">
              Core pages of our website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {page.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Wrench className="h-8 w-8 text-primary-600 mr-3" />
              Service Pages
            </h2>
            <p className="text-lg text-gray-600">
              All our appliance repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Pages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <User className="h-8 w-8 text-primary-600 mr-3" />
              Support & Customer Service
            </h2>
            <p className="text-lg text-gray-600">
              Customer support and service management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {page.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary-600 mr-3" />
              Legal & Policies
            </h2>
            <p className="text-lg text-gray-600">
              Important legal information and policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {page.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            XML Sitemap
          </h2>
          <p className="text-gray-600 mb-6">
            For search engines and developers, you can access our XML sitemap at:
          </p>
          <Link
            href="/sitemap.xml"
            className="btn btn-primary px-6 py-3 rounded-lg font-semibold"
          >
            View XML Sitemap
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact our support team for assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/customer-support"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sitemap
