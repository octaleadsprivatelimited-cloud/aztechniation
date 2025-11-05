'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Search, Clock, MapPin, User, Wrench, CheckCircle, AlertCircle, Package, Truck, Mail } from 'lucide-react'
import Link from 'next/link'

const TrackService = () => {
  const [trackingId, setTrackingId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [searchResult, setSearchResult] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  // Mock service data
  const mockServiceData = {
    'ABC123': {
      id: 'ABC123',
      customerName: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      service: 'AC Repair',
      address: 'Pragathi Nagar, Hyderabad',
      status: 'In Progress',
      technician: 'Suresh Kumar',
      technicianPhone: 'Contact via email',
      estimatedTime: '2-3 hours',
      issue: 'AC not cooling properly',
      bookedDate: '2024-01-15',
      assignedDate: '2024-01-15',
      completedDate: null,
      progress: 60
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    
    // Simulate API call
    setTimeout(() => {
      const result = mockServiceData[trackingId as keyof typeof mockServiceData]
      setSearchResult(result || null)
      setIsSearching(false)
    }, 1000)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'in progress':
        return 'text-blue-600 bg-blue-100'
      case 'scheduled':
        return 'text-yellow-600 bg-yellow-100'
      case 'cancelled':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return CheckCircle
      case 'in progress':
        return Clock
      case 'scheduled':
        return Package
      default:
        return AlertCircle
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Track Your Service
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Track the status of your appliance repair service in real-time. 
              Get updates on technician arrival and service progress.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Track Service Status
              </h2>
              <p className="text-gray-600">
                Enter your service tracking ID or phone number to check status
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Search className="h-4 w-4 inline mr-2" />
                    Service Tracking ID
                  </label>
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="input"
                    placeholder="Enter tracking ID (e.g., ABC123)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Contact Information
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="input"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="btn btn-primary px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50"
                >
                  {isSearching ? 'Searching...' : 'Track Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResult && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Service Details
                </h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(searchResult.status)}`}>
                  {searchResult.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Information</h3>
                  
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Customer Name</p>
                      <p className="font-semibold">{searchResult.customerName}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="font-semibold">{searchResult.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Wrench className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Service Type</p>
                      <p className="font-semibold">{searchResult.service}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Service Address</p>
                      <p className="font-semibold">{searchResult.address}</p>
                    </div>
                  </div>
                </div>

                {/* Technician Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technician Details</h3>
                  
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Technician Name</p>
                      <p className="font-semibold">{searchResult.technician}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Technician Contact</p>
                      <p className="font-semibold">{searchResult.technicianPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Estimated Time</p>
                      <p className="font-semibold">{searchResult.estimatedTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${searchResult.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{searchResult.progress}% Complete</p>
              </div>

              {/* Timeline */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Service Booked</p>
                      <p className="text-sm text-gray-600">{searchResult.bookedDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Technician Assigned</p>
                      <p className="text-sm text-gray-600">{searchResult.assignedDate}</p>
                    </div>
                  </div>
                  
                  {searchResult.status.toLowerCase() === 'in progress' && (
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Service In Progress</p>
                        <p className="text-sm text-gray-600">Currently being repaired</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {searchResult === null && trackingId && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                No service found with the provided tracking ID or phone number. 
                Please check your details and try again.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary px-6 py-3 rounded-lg font-semibold"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600">
              Can't find your service or need assistance?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Contact Support
              </h3>
              <p className="text-gray-600 mb-4">
                Send us a message and we'll get back to you
              </p>
              <Link
                href="/customer-support"
                className="btn btn-primary px-6 py-3 rounded-lg font-semibold"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrackService
