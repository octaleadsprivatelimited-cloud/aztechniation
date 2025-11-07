import type { Metadata } from 'next'
import { Refrigerator, Star, Shield, Clock, Wrench, CheckCircle, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import ServiceImages from '@/components/ServiceImages'

export const metadata: Metadata = {
  title: 'Refrigerator Repair Hyderabad | Samsung, LG, Whirlpool Refrigerator Repair | AZ technician',
  description: 'Professional refrigerator repair service in Hyderabad. We repair Samsung, LG, Whirlpool, Godrej refrigerators. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar. Call +91 91821 07334.',
  openGraph: {
    title: 'Refrigerator Repair Hyderabad | AZ technician',
    description: 'Professional refrigerator repair service in Hyderabad. Same-day service available.',
    type: 'website',
  },
}


const refrigeratorBrands = [
  'Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Panasonic', 'TCL', 'Videocon', 'Intex', 'Onida'
]

const refrigeratorTypes = [
  'Single Door', 'Double Door', 'Side by Side', 'French Door', 'Bottom Freezer', 'Top Freezer', 'Mini Refrigerator', 'Commercial Refrigerator'
]

const refrigeratorProblems = [
  {
    problem: 'Cooling Issues',
    solutions: ['Compressor repair', 'Thermostat replacement', 'Cooling coil cleaning', 'Gas refilling']
  },
  {
    problem: 'Water Leakage',
    solutions: ['Drain pipe cleaning', 'Water filter replacement', 'Ice maker repair', 'Condensate pump fix']
  },
  {
    problem: 'Door Issues',
    solutions: ['Door seal replacement', 'Door hinge repair', 'Door handle replacement', 'Door alignment']
  },
  {
    problem: 'Noise Problems',
    solutions: ['Fan motor repair', 'Compressor mounting', 'Vibration isolation', 'Fan blade replacement']
  },
  {
    problem: 'Electrical Issues',
    solutions: ['PCB repair', 'Wiring replacement', 'Switch replacement', 'Power cord repair']
  },
  {
    problem: 'Freezer Problems',
    solutions: ['Freezer defrosting', 'Ice maker repair', 'Temperature control', 'Freezer door seal']
  }
]

const locations = [
  'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Jubilee Hills', 'Banjara Hills',
  'Pragathi Nagar', 'Kukatpally', 'Miyapur', 'Serilingampally', 'Lingampally', 'Chandanagar',
  'Alwal', 'Malkajgiri', 'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar',
  'Mehdipatnam', 'Tolichowki', 'Nampally', 'Lakdi-ka-pul', 'Old City', 'Golconda',
  'Patancheru', 'Sangareddy', 'Jogipet', 'Sadashivpet', 'Zaheerabad', 'Shankarpally', 'Narsingi'
]

export default function RefrigeratorRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-yellow-300">Refrigerator Repair Service</span> in Hyderabad
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              Expert refrigerator repair service for all brands including Samsung, LG, Whirlpool, Godrej refrigerators. 
              Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+919182107334"
                className="bg-yellow-400 text-green-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Call Now: +91 91821 07334</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-green-900 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Refrigerator className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Book Refrigerator Repair</span>
                <span className="sm:hidden">Book Repair</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Refrigerator Brands We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Refrigerator Brands We Repair in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We repair all major refrigerator brands with genuine parts and manufacturer-approved service across all areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {refrigeratorBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors duration-200">
                <div className="font-semibold text-gray-900">{brand}</div>
                <div className="text-sm text-gray-600">Refrigerator Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refrigerator Types We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Refrigerator Types We Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Single Door to Side by Side, we repair all types of refrigerators with expert care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {refrigeratorTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <Refrigerator className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{type}</div>
                    <div className="text-sm text-gray-600">Repair Service</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Refrigerator Problems & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Refrigerator Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and fix all types of refrigerator problems with professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refrigeratorProblems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.problem}</h3>
                <ul className="space-y-2">
                  {item.solutions.map((solution, solIndex) => (
                    <li key={solIndex} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Refrigerator Repair */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Refrigerator Repair in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best refrigerator repair service in Hyderabad with these key advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most refrigerator repairs completed the same day across all areas of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified technicians with 15+ years of refrigerator repair experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">We use only genuine parts for all refrigerator repairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all refrigerator repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Refrigerator Repair Service Areas in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional refrigerator repair service across all major areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-sm">{location}</div>
                <div className="text-xs text-gray-600">Refrigerator Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Refrigerator Repair Service in Hyderabad?
          </h2>
          <p className="text-xl text-white mb-8">
            Get professional refrigerator repair service for all brands. Same-day service available across all areas of Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919182107334"
              className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 91821 07334
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Refrigerator className="h-5 w-5" />
              Book Refrigerator Repair Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}