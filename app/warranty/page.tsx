import type { Metadata } from 'next'
import { Shield, Clock, CheckCircle, AlertCircle, Phone, Mail, FileText, Wrench } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Warranty - AZ technician | 90-Day Service Warranty',
  description: 'Learn about our comprehensive warranty coverage for appliance repair services. 90-day warranty on all repairs with free re-service guarantee.',
}

const Warranty = () => {
  const warrantyCoverage = [
    {
      icon: CheckCircle,
      title: 'Repair Work',
      description: 'All repair work performed by our technicians is covered under warranty.'
    },
    {
      icon: CheckCircle,
      title: 'Replaced Parts',
      description: 'All genuine parts replaced during repair are covered under warranty.'
    },
    {
      icon: CheckCircle,
      title: 'Labor Charges',
      description: 'Labor charges for warranty repairs are completely free of cost.'
    },
    {
      icon: CheckCircle,
      title: 'Service Call',
      description: 'Warranty service calls are free of charge within coverage period.'
    }
  ]

  const warrantyTerms = [
    {
      period: '90 Days',
      description: 'Standard warranty period for all repair services',
      coverage: 'Parts and Labor'
    },
    {
      period: '6 Months',
      description: 'Extended warranty for major appliance repairs',
      coverage: 'Parts and Labor'
    },
    {
      period: '1 Year',
      description: 'Premium warranty for new part installations',
      coverage: 'Parts Only'
    }
  ]

  const warrantyConditions = [
    'Warranty is valid only for the specific issue that was repaired',
    'Warranty covers only the original customer and service address',
    'Regular maintenance and cleaning are not covered under warranty',
    'Warranty is void if appliance is tampered with by unauthorized persons',
    'Warranty does not cover damage due to misuse, accidents, or natural disasters',
    'Warranty is valid only if payment for original service is completed'
  ]

  const warrantyProcess = [
    {
      step: '1',
      title: 'Report Issue',
      description: 'Contact our support team and report the warranty issue with your service ID.'
    },
    {
      step: '2',
      title: 'Verification',
      description: 'We will verify your warranty status and the nature of the issue.'
    },
    {
      step: '3',
      title: 'Schedule Service',
      description: 'Free warranty service will be scheduled at your convenience.'
    },
    {
      step: '4',
      title: 'Repair Service',
      description: 'Our technician will visit and perform the warranty repair free of charge.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Warranty
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We stand behind our work with comprehensive warranty coverage. 
              Your peace of mind is our commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  90-Day Warranty Guarantee
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At AZ technician, we provide a comprehensive 90-day warranty on all our repair services. 
                  If the same issue occurs within the warranty period, we will fix it completely free of charge. 
                  This includes parts, labor, and service call charges. We believe in the quality of our work 
                  and want you to have complete confidence in our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Covered Under Warranty
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage for all our repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warrantyCoverage.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <item.icon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Periods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warranty Periods
            </h2>
            <p className="text-lg text-gray-600">
              Different warranty periods based on service type
            </p>
          </div>

          <div className="space-y-6">
            {warrantyTerms.map((term, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary-600">{term.period}</h3>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {term.coverage}
                  </span>
                </div>
                <p className="text-gray-700">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warranty Terms & Conditions
            </h2>
            <p className="text-lg text-gray-600">
              Important conditions for warranty coverage
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-4">
              {warrantyConditions.map((condition, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warranty Claim Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to claim your warranty service
            </p>
          </div>

          <div className="space-y-8">
            {warrantyProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Warranty Matters
            </h2>
            <p className="text-lg text-gray-600">
              Benefits of choosing AZ technician warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Peace of Mind
              </h3>
              <p className="text-gray-600">
                Complete confidence in our repair quality with comprehensive warranty coverage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Re-Service
              </h3>
              <p className="text-gray-600">
                No additional charges for warranty repairs within the coverage period
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                We use only genuine parts and follow manufacturer specifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Warranty */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Warranty Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us to claim your warranty service or get more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919182107334"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now
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

      {/* Warranty Document */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <FileText className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Warranty Certificate
            </h3>
            <p className="text-gray-600 mb-4">
              You will receive a warranty certificate after each repair service. 
              Keep this document safe as it contains your warranty details.
            </p>
            <p className="text-sm text-gray-500">
              Warranty Terms • Last Updated: January 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Warranty
