import Link from 'next/link'
import { Home, Phone, Wrench, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
            <Wrench className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AZ technician</h1>
        </div>

        {/* 404 Content */}
        <div className="mb-8">
          <h2 className="text-6xl font-bold text-primary-600 mb-4">404</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <Phone className="h-5 w-5" />
            Contact Us
          </Link>
        </div>

        {/* Popular Services */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Services
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link
              href="/services/ac-repair"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
            >
              AC Repair
            </Link>
            <Link
              href="/services/washing-machine-repair"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
            >
              Washing Machine
            </Link>
            <Link
              href="/services/refrigerator-repair"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
            >
              Refrigerator
            </Link>
            <Link
              href="/services"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
            >
              All Services
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">
            Need help? Contact our support team
          </p>
          <Link
            href="tel:+919182107334"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            +91 91821 07334
          </Link>
        </div>
      </div>
    </div>
  )
}
