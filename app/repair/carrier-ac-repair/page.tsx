import type { Metadata } from 'next'
import { Phone, Wrench, Clock, Shield, Star, MapPin, CheckCircle, AlertCircle, Thermometer, Zap, Settings } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import { WhatsAppLink } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Carrier AC Repair Service - AZ technician | Expert Carrier AC Repair',
  description: 'Professional Carrier AC repair service in Hyderabad. Expert technicians for all Carrier air conditioner models. Same day service available.',
  openGraph: {
    title: 'Carrier AC Repair Service - AZ technician',
    description: 'Professional Carrier AC repair service in Hyderabad. Expert technicians for all Carrier air conditioner models.',
    type: 'website',
  },
}

export default function CarrierACRepairPage() {
  const whatsappMessage = 'Hi! I need help with Carrier AC repair in Hyderabad. Please provide me with a quote and schedule a service.'

  const commonIssues = [
    'Carrier AC Not Cooling',
    'Carrier AC Gas Leak',
    'Carrier AC Compressor Problem',
    'Carrier AC Remote Not Working',
    'Carrier AC Water Leak',
    'Carrier AC Installation',
    'Carrier AC Maintenance',
    'Carrier AC Fan Not Working',
    'Carrier AC Making Noise',
    'Carrier AC Thermostat Issue'
  ]

  const models = [
    'Carrier Split AC',
    'Carrier Window AC',
    'Carrier Inverter AC',
    'Carrier Cassette AC',
    'Carrier Ducted AC',
    'Carrier Portable AC',
    'Carrier Central AC',
    'Carrier Tower AC'
  ]

  const features = [
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Quick response and same-day Carrier AC repair available'
    },
    {
      icon: Shield,
      title: 'Genuine Parts',
      description: 'We use only genuine Carrier AC parts and components'
    },
    {
      icon: Star,
      title: 'Expert Technicians',
      description: 'Certified and experienced Carrier AC repair technicians'
    },
    {
      icon: CheckCircle,
      title: '90 Days Warranty',
      description: 'Complete warranty on all Carrier AC repair work'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Carrier AC Repair Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional Carrier AC repair service in Hyderabad. Expert technicians for all Carrier air conditioner models. Same day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetQuoteButton
                serviceType="carrier-ac"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Get Quote for Carrier AC
              </GetQuoteButton>
              <Link
                href="tel:+919182107334"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert Carrier AC Repair Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in repairing all Carrier AC models with genuine parts and expert technicians. 
                Our service covers all areas of Hyderabad with same-day repair available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Same Day Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Genuine Carrier Parts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">90 Days Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Free Diagnosis</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Thermometer className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Carrier AC Expert
                </h3>
                <p className="text-blue-700 mb-6">
                  Professional repair service for all Carrier AC models
                </p>
                <WhatsAppLink
                  message={whatsappMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Get Quote via WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Carrier AC Issues
            </h2>
            <p className="text-lg text-gray-600">
              We repair all these common Carrier AC problems and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {issue}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Expert repair service for {issue.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Carrier AC Models We Repair
            </h2>
            <p className="text-lg text-gray-600">
              All Carrier AC models and variants covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {model}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional repair service
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Carrier AC Repair Service?
            </h2>
            <p className="text-lg text-gray-600">
              Professional service with guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide Carrier AC repair service across Hyderabad
          </p>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">Coverage Areas</span>
            </div>
            <p className="text-gray-700">
              Pragathi Nagar, Kukatpally, Miyapur, Chandanagar, Nizampet, Bachupally, 
              Gachibowli, Kondapur, HITEC City, Madhapur, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Carrier AC Repair?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us now for professional Carrier AC repair service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink
              message={whatsappMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              WhatsApp for Carrier AC
            </WhatsAppLink>
            <Link
              href="tel:+919182107334"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
