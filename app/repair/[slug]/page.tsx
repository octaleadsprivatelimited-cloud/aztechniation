import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Phone, Wrench, Clock, Shield, Star, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import WhatsAppButton, { WhatsAppLink } from '@/components/WhatsAppButton'
import Link from 'next/link'

// This would typically come from a database or CMS
const repairPages = {
  'blue-star-ac-repair': {
    title: 'Blue Star AC Repair Service',
    brand: 'Blue Star',
    category: 'AC',
    description: 'Professional Blue Star AC repair service in Hyderabad. Expert technicians for all Blue Star air conditioner models.',
    issues: [
      'Blue Star AC Not Cooling',
      'Blue Star AC Gas Leak',
      'Blue Star AC Compressor Problem',
      'Blue Star AC Remote Not Working',
      'Blue Star AC Installation',
      'Blue Star AC Maintenance'
    ],
    models: [
      'Blue Star Split AC',
      'Blue Star Window AC',
      'Blue Star Inverter AC',
      'Blue Star Cassette AC',
      'Blue Star Ducted AC'
    ],
    features: [
      'Same Day Service Available',
      'Genuine Blue Star Parts',
      '90 Days Warranty',
      'Free Diagnosis',
      'Expert Technicians',
      'Transparent Pricing'
    ]
  },
  'samsung-ac-repair': {
    title: 'Samsung AC Repair Service',
    brand: 'Samsung',
    category: 'AC',
    description: 'Professional Samsung AC repair service in Hyderabad. Expert technicians for all Samsung air conditioner models.',
    issues: [
      'Samsung AC Not Cooling',
      'Samsung AC Gas Leak',
      'Samsung AC Compressor Problem',
      'Samsung AC Remote Not Working',
      'Samsung AC Installation',
      'Samsung AC Maintenance'
    ],
    models: [
      'Samsung Split AC',
      'Samsung Window AC',
      'Samsung Inverter AC',
      'Samsung Cassette AC',
      'Samsung Ducted AC'
    ],
    features: [
      'Same Day Service Available',
      'Genuine Samsung Parts',
      '90 Days Warranty',
      'Free Diagnosis',
      'Expert Technicians',
      'Transparent Pricing'
    ]
  },
  'lg-ac-repair': {
    title: 'LG AC Repair Service',
    brand: 'LG',
    category: 'AC',
    description: 'Professional LG AC repair service in Hyderabad. Expert technicians for all LG air conditioner models.',
    issues: [
      'LG AC Not Cooling',
      'LG AC Gas Leak',
      'LG AC Compressor Problem',
      'LG AC Remote Not Working',
      'LG AC Installation',
      'LG AC Maintenance'
    ],
    models: [
      'LG Split AC',
      'LG Window AC',
      'LG Inverter AC',
      'LG Cassette AC',
      'LG Ducted AC'
    ],
    features: [
      'Same Day Service Available',
      'Genuine LG Parts',
      '90 Days Warranty',
      'Free Diagnosis',
      'Expert Technicians',
      'Transparent Pricing'
    ]
  },
  'daikin-ac-repair': {
    title: 'Daikin AC Repair Service',
    brand: 'Daikin',
    category: 'AC',
    description: 'Professional Daikin AC repair service in Hyderabad. Expert technicians for all Daikin air conditioner models.',
    issues: [
      'Daikin AC Not Cooling',
      'Daikin AC Gas Leak',
      'Daikin AC Compressor Problem',
      'Daikin AC Remote Not Working',
      'Daikin AC Installation',
      'Daikin AC Maintenance'
    ],
    models: [
      'Daikin Split AC',
      'Daikin Window AC',
      'Daikin Inverter AC',
      'Daikin Cassette AC',
      'Daikin Ducted AC'
    ],
    features: [
      'Same Day Service Available',
      'Genuine Daikin Parts',
      '90 Days Warranty',
      'Free Diagnosis',
      'Expert Technicians',
      'Transparent Pricing'
    ]
  },
  'carrier-ac-repair': {
    title: 'Carrier AC Repair Service',
    brand: 'Carrier',
    category: 'AC',
    description: 'Professional Carrier AC repair service in Hyderabad. Expert technicians for all Carrier air conditioner models.',
    issues: [
      'Carrier AC Not Cooling',
      'Carrier AC Gas Leak',
      'Carrier AC Compressor Problem',
      'Carrier AC Remote Not Working',
      'Carrier AC Installation',
      'Carrier AC Maintenance'
    ],
    models: [
      'Carrier Split AC',
      'Carrier Window AC',
      'Carrier Inverter AC',
      'Carrier Cassette AC',
      'Carrier Ducted AC'
    ],
    features: [
      'Same Day Service Available',
      'Genuine Carrier Parts',
      '90 Days Warranty',
      'Free Diagnosis',
      'Expert Technicians',
      'Transparent Pricing'
    ]
  },
  'voltas-ac-repair': {
    title: 'Voltas AC Repair Service',
    brand: 'Voltas',
    category: 'AC',
    description: 'Professional Voltas AC repair service in Hyderabad. Expert technicians for all Voltas air conditioner models.',
    issues: [
      'Voltas AC Not Cooling',
      'Voltas AC Gas Leak',
      'Voltas AC Compressor Problem',
      'Voltas AC Remote Not Working',
      'Voltas AC Installation',
      'Voltas AC Maintenance'
    ],
    models: [
      'Voltas Split AC',
      'Voltas Window AC',
      'Voltas Inverter AC',
      'Voltas Cassette AC',
      'Voltas Ducted AC'
    ],
    features: [
      'Same Day Service Available',
      'Genuine Voltas Parts',
      '90 Days Warranty',
      'Free Diagnosis',
      'Expert Technicians',
      'Transparent Pricing'
    ]
  }
}

interface RepairPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: RepairPageProps): Promise<Metadata> {
  const { slug } = await params
  const repair = repairPages[slug as keyof typeof repairPages]
  
  if (!repair) {
    return {
      title: 'Repair Service Not Found - AZ technician',
    }
  }

  return {
    title: `${repair.title} - AZ technician | Expert ${repair.brand} ${repair.category} Repair`,
    description: repair.description,
    openGraph: {
      title: repair.title,
      description: repair.description,
      type: 'website',
    },
  }
}

export default async function RepairPage({ params }: RepairPageProps) {
  const { slug } = await params
  
  if (!slug || typeof slug !== 'string') {
    notFound()
  }
  
  const repair = repairPages[slug as keyof typeof repairPages]
  
  if (!repair) {
    notFound()
  }

  const whatsappMessage = `Hi! I need help with ${repair.brand} ${repair.category} repair in Hyderabad. Please provide me with a quote and schedule a service.`

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {repair.title}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              {repair.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={whatsappMessage}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                WhatsApp for {repair.brand} {repair.category}
              </WhatsAppLink>
              <Link
                href="tel:+919182107334"
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
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
                Expert {repair.brand} {repair.category} Repair Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in repairing all {repair.brand} {repair.category.toLowerCase()} models with genuine parts and expert technicians. 
                Our service covers all areas of Hyderabad with same-day repair available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Same Day Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Genuine {repair.brand} Parts</span>
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
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  {repair.brand} {repair.category} Expert
                </h3>
                <p className="text-primary-700 mb-6">
                  Professional repair service for all {repair.brand} {repair.category.toLowerCase()} models
                </p>
                <WhatsAppLink
                  message={whatsappMessage}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold"
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
              Common {repair.brand} {repair.category} Issues
            </h2>
            <p className="text-lg text-gray-600">
              We repair all these common problems and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repair.issues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-primary-600" />
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
              {repair.brand} {repair.category} Models We Repair
            </h2>
            <p className="text-lg text-gray-600">
              All models and variants covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repair.models.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors duration-200">
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
              Why Choose Our {repair.brand} {repair.category} Repair Service?
            </h2>
            <p className="text-lg text-gray-600">
              Professional service with guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repair.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature}
                </h3>
                <p className="text-gray-600">
                  Quality service guaranteed for all {repair.brand} {repair.category.toLowerCase()} repairs
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
            We provide {repair.brand} {repair.category} repair service across Hyderabad
          </p>
          <div className="bg-primary-50 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="h-6 w-6 text-primary-600" />
              <span className="font-semibold text-gray-900">Coverage Areas</span>
            </div>
            <p className="text-gray-700">
              Pragathi Nagar, Kukatpally, Miyapur, Lingampally, Chandanagar, Nizampet, Bachupally,
              Gachibowli, Kondapur, HITEC City, Madhapur, Tolichowki, Mehdipatnam, Golconda,
              Sangareddy, Patancheru, Zaheerabad, Shankarpally, Shankerpally, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need {repair.brand} {repair.category} Repair?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us now for professional {repair.brand} {repair.category.toLowerCase()} repair service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink
              message={whatsappMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              WhatsApp for {repair.brand} {repair.category}
            </WhatsAppLink>
            <Link
              href="tel:+919182107334"
              className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
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

// Generate static params for all repair pages
export async function generateStaticParams() {
  return Object.keys(repairPages).map((slug) => ({
    slug: slug,
  }))
}

