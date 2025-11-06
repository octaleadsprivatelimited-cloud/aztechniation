import type { Metadata } from 'next'
import { Shield, Clock, FileText, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy - AZ technician | Money Back Guarantee',
  description: 'Learn about our refund policy and money-back guarantee for appliance repair services. Fair and transparent refund terms for customer satisfaction.',
  openGraph: {
    title: 'Refund Policy - AZ technician',
    description: 'Learn about our refund policy and money-back guarantee for appliance repair services.',
    type: 'website',
  },
}


const RefundPolicy = () => {
  const refundConditions = [
    {
      icon: CheckCircle,
      title: 'Service Not Provided',
      description: 'Full refund if our technician fails to provide the scheduled service without prior notice.'
    },
    {
      icon: CheckCircle,
      title: 'Duplicate Payment',
      description: 'Complete refund for any accidental duplicate payments made for the same service.'
    },
    {
      icon: CheckCircle,
      title: 'Service Cancellation',
      description: 'Full refund if service is cancelled more than 24 hours before the scheduled appointment.'
    },
    {
      icon: AlertCircle,
      title: 'Partial Refund',
      description: 'Partial refund if service is partially completed due to parts unavailability or technical limitations.'
    }
  ]

  const nonRefundable = [
    'Service charges for completed repairs',
    'Diagnosis fees for successfully identified issues',
    'Travel charges for completed service visits',
    'Cancellation within 24 hours of scheduled appointment',
    'Services cancelled after technician arrival',
    'Repairs completed as per customer requirements'
  ]

  const refundProcess = [
    {
      step: '1',
      title: 'Submit Refund Request',
      description: 'Contact our customer support team with your service details and reason for refund request.'
    },
    {
      step: '2',
      title: 'Review & Verification',
      description: 'Our team will review your request and verify the service details within 2 business days.'
    },
    {
      step: '3',
      title: 'Approval & Processing',
      description: 'Once approved, refund will be processed within 5-7 business days to your original payment method.'
    },
    {
      step: '4',
      title: 'Confirmation',
      description: 'You will receive confirmation via SMS and email once the refund is processed.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We stand behind our services with a fair and transparent refund policy. 
              Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Refund Guarantee
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At AZ technician, we are committed to providing excellent service. 
                  If you are not satisfied with our service or if we fail to meet our commitments, 
                  we offer a fair refund policy. We process all valid refund requests promptly 
                  and ensure you get your money back without unnecessary delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              When Refunds Are Available
            </h2>
            <p className="text-lg text-gray-600">
              We provide refunds in the following situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {refundConditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <condition.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {condition.title}
                    </h3>
                    <p className="text-gray-600">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Refundable Items */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Non-Refundable Items
            </h2>
            <p className="text-lg text-gray-600">
              Please note that the following are not eligible for refunds
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {nonRefundable.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Refund Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to request and receive your refund
            </p>
          </div>

          <div className="space-y-8">
            {refundProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
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

      {/* Timeline & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Timeline */}
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Refund Timeline</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Request Review</span>
                  <span className="font-semibold text-primary-600">2 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Refund Processing</span>
                  <span className="font-semibold text-primary-600">5-7 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bank Processing</span>
                  <span className="font-semibold text-primary-600">1-3 business days</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Request Refund</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <Link href="tel:+919182107334" className="text-primary-600 hover:text-primary-700">
                    +91 91821 07334
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <Link href="mailto:mra760063@gmail.com" className="text-primary-600 hover:text-primary-700">
                    mra760063@gmail.com
                  </Link>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Please have your service ID and payment details ready when contacting us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Policy Updates
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may update this refund policy from time to time. 
            Any changes will be posted on this page with an updated revision date.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 2024<br />
              <strong>Effective Date:</strong> January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Refunds?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our customer support team is here to help you with any refund-related queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/customer-support"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link
                href="tel:+919182107334"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RefundPolicy
