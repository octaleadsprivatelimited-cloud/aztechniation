'use client'

import Link from 'next/link'
import { Home, Phone, RefreshCw, AlertTriangle } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AZ technician</h1>
        </div>

        {/* Error Content */}
        <div className="mb-8">
          <h2 className="text-6xl font-bold text-red-600 mb-4">500</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Internal Server Error
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Something went wrong on our end. We're working to fix this issue. 
            Please try again in a few moments.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <Phone className="h-5 w-5" />
            Contact Support
          </Link>
        </div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <h4 className="text-sm font-semibold text-red-800 mb-2">
              Error Details (Development Only)
            </h4>
            <p className="text-sm text-red-700 font-mono">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

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
            Need immediate assistance? Contact our support team
          </p>
          <Link
            href="/contact"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
