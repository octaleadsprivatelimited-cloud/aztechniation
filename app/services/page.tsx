import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import { Wind, Refrigerator, Monitor, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Our Services - AZ technician | Electronics & Appliance Repair Services',
  description: 'Professional electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, and more. Expert technicians, same-day service.',
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

const ServicesPage = () => {
  const services = [
    {
      icon: Wind,
      title: 'AC Repair',
      description: 'Complete AC repair and maintenance services for all types of air conditioners.',
      features: ['Gas Filling', 'Compressor Repair', 'Cooling Issues', 'Maintenance', 'Filter Cleaning', 'Remote Problems'],
      href: '/services/ac-repair',
      color: 'bg-cyan-500',
    },
    {
      icon: Monitor,
      title: 'Washing Machine Repair',
      description: 'Expert washing machine repair for all brands and models.',
      features: ['Drum Issues', 'Motor Problems', 'Water Leakage', 'Spin Problems', 'Door Issues', 'Control Panel'],
      href: '/services/washing-machine-repair',
      color: 'bg-indigo-500',
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator Repair',
      description: 'Comprehensive refrigerator repair services for all types of fridges.',
      features: ['Cooling Issues', 'Compressor Repair', 'Thermostat', 'Door Seals', 'Ice Maker', 'Water Dispenser'],
      href: '/services/refrigerator-repair',
      color: 'bg-green-500',
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-blue-700 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Professional electronics and appliance repair services in Hyderabad. 
              We fix it right the first time, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>


                    {/* Features */}
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best repair services in Hyderabad with 
              professional expertise and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most repairs completed within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Guarantee</h3>
              <p className="text-gray-600">We stand behind our work</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Your Appliance Fixed?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for fast, reliable, and affordable repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <GetQuoteButton
              serviceType="general"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Get Free Quote
            </GetQuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
