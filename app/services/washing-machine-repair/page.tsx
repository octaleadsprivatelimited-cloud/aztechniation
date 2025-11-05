import type { Metadata } from 'next'
import { Monitor, CheckCircle, Clock, Shield, Wrench, Star, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import ServiceImages from '@/components/ServiceImages'

export const metadata: Metadata = {
  title: 'Washing Machine Repair Hyderabad | Samsung, LG, Whirlpool Washing Machine Repair | AZ technician',
  description: 'Professional washing machine repair service in Hyderabad. We repair Samsung, LG, Whirlpool, IFB, Bosch washing machines. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar. Call +91 91821 07334.',
  openGraph: {
    title: 'Washing Machine Repair Hyderabad | AZ technician',
    description: 'Professional washing machine repair service in Hyderabad. Same-day service available.',
    type: 'website',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function WashingMachineRepair() {
  const services = [
    'Drum Repair & Replacement',
    'Motor Problems',
    'Water Leakage Issues',
    'Spin Problems',
    'Door Lock Issues',
    'Control Panel Repair',
    'Water Inlet Valve',
    'Drain Pump Repair'
  ]

  const brands = [
    'LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Haier', 'Godrej', 'Panasonic', 'TCL', 'Onida'
  ]

  const problems = [
    {
      issue: 'Washing Machine Not Spinning',
      solution: 'Motor or belt repair/replacement',
    },
    {
      issue: 'Water Leakage',
      solution: 'Seal or gasket replacement',
    },
    {
      issue: 'Drum Not Moving',
      solution: 'Motor or drum bearing repair',
    },
    {
      issue: 'Door Not Opening',
      solution: 'Door lock mechanism repair',
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-yellow-300">Washing Machine Repair</span> in Hyderabad
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              Expert washing machine repair for all brands including Samsung, LG, Whirlpool, IFB, Bosch. 
              Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+919182107334"
                className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Call Now: +91 91821 07334</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
              <GetQuoteButton
                serviceType="washing-machine-repair"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors duration-200 text-center text-sm sm:text-base"
              >
                Get Free Quote
              </GetQuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Washing Machine Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive washing machine repair services for all types of machines. 
              From drum issues to motor problems, we handle it all.
            </p>
          </div>

          {/* Service Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Professional Washing Machine Repair Service"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Expert Washing Machine Technicians</h3>
                <p className="text-lg">Professional repair service with genuine parts and warranty</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Washing Machine Problems
            </h2>
            <p className="text-xl text-gray-600">
              Quick diagnosis and repair for the most common washing machine issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.issue}</h3>
                <p className="text-gray-600 mb-4">{problem.solution}</p>
                <div className="flex justify-end items-center">
                  <GetQuoteButton 
                    size="sm" 
                    serviceType="washing-machine-repair"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Washing Machine Repair Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most washing machine repairs completed within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all repairs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Washing Machine Repair? We're Here to Help!
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get your washing machine fixed by expert technicians. Same-day service with warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919182107334"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 91821 07334
            </Link>
            <GetQuoteButton
              serviceType="washing-machine-repair"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Get Free Quote
            </GetQuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}
