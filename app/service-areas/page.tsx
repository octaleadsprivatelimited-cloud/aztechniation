import type { Metadata } from 'next'
import { MapPin, Clock, CheckCircle, Star, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas - AZ technician | Electronics & Appliance Repair Services in Hyderabad',
  description: 'We provide professional electronics and appliance repair services across all areas of Hyderabad including HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, Kukatpally, Miyapur, Serilingampally, Chandanagar, Alwal, Malkajgiri, Dilsukhnagar, Uppal, Nagole, and more. Same-day service available.',
  openGraph: {
    title: 'Service Areas - AZ technician',
    description: 'We provide professional electronics and appliance repair services across all areas of Hyderabad.',
    type: 'website',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

const serviceAreas = [
  {
    region: 'IT Corridors & Business Districts',
    areas: [
      'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Jubilee Hills', 
      'Banjara Hills', 'Financial District', 'Raheja Mindspace', 'Cyber Gateway',
      'DLF Cyber City', 'Waverock', 'Phoenix Tech Park', 'Ascendas IT Park',
      'Mindspace', 'Cyber Pearl', 'Nanakramguda', 'Kokapet', 'Tellapur',
      'Manikonda', 'Raidurg', 'Khajaguda', 'Neknampur'
    ]
  },
  {
    region: 'North Hyderabad',
    areas: [
      'Pragathi Nagar', 'Bolarum', 'Bowenpally', 'Tarnaka', 'Neredmet',
      'Ameerpet', 'Somajiguda', 'Begumpet', 'Punjagutta', 'Khairatabad',
      'Masab Tank', 'Nampally', 'Abids', 'Koti', 'Sultan Bazar',
      'Charminar', 'Malakpet', 'Dilsukhnagar', 'Kothapet', 'Saroornagar',
      'Boduppal', 'Kapra', 'Uppal Kalan', 'Peerzadiguda', 'Ghatkesar',
      'Medchal', 'Shamirpet', 'Sainikpuri', 'Vikarabad'
    ]
  },
  {
    region: 'West Hyderabad',
    areas: [
      'Kukatpally', 'Miyapur', 'Serilingampally', 'Chandanagar', 'Alwal',
      'Malkajgiri', 'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole',
      'LB Nagar', 'Vanastalipuram', 'Hayathnagar', 'Ramachandrapuram',
      'Patancheru', 'Sangareddy', 'Moinabad', 'Shadnagar', 'Shamshabad',
      'Rajendra Nagar', 'Balanagar', 'Jeedimetla', 'Qutbullapur',
      'Bachupally', 'Nizampet', 'Gopanpally'
    ]
  },
  {
    region: 'South Hyderabad',
    areas: [
      'Lakdikapul', 'Falaknuma', 'Santoshnagar', 'Chandrayangutta',
      'Rangareddy', 'Ibrahimpatnam', 'Maheshwaram', 'Vikarabad',
      'Mahabubnagar', 'Medak', 'Malkajgiri', 'Lal Bahadur Nagar',
      'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar', 'Vanastalipuram',
      'Hayathnagar', 'Ramachandrapuram', 'Patancheru', 'Sangareddy'
    ]
  },
  {
    region: 'Extended Areas & Suburbs',
    areas: [
      'Medak', 'Sangareddy', 'Patancheru', 'Bachupally', 'Nizampet',
      'Qutbullapur', 'Balanagar', 'Jeedimetla', 'Kukatpally', 'Miyapur',
      'Serilingampally', 'Chandanagar', 'Alwal', 'Malkajgiri',
      'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar',
      'Vanastalipuram', 'Hayathnagar', 'Ramachandrapuram', 'Patancheru',
      'Sangareddy', 'Bolarum', 'Bowenpally', 'Tarnaka', 'Neredmet'
    ]
  }
]

const services = [
  { name: 'AC Repair', href: '/services/ac-repair' },
  { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
  { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' }
]

const features = [
  {
    icon: CheckCircle,
    title: 'Same Day Service',
    description: 'Most repairs completed the same day across all areas of Hyderabad'
  },
  {
    icon: MapPin,
    title: 'Home Service',
    description: 'Doorstep repair service at your home or office in any area'
  },
  {
    icon: Shield,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all areas'
  },
  {
    icon: Star,
    title: 'Trusted Service',
    description: '5000+ happy customers across Hyderabad'
  }
]

export default function ServiceAreas() {
  return (
    <div className="pt-16 sm:pt-32 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Service Areas in Hyderabad
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              We provide professional electronics and appliance repair services across all areas of Hyderabad. 
              From HITEC City to Pragathi Nagar, we serve every corner of the city with same-day service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Clock className="h-5 w-5" />
                Book Service Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive electronics and appliance repair services across all major areas of Hyderabad. 
              Our expert technicians are available for same-day service in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-primary-200 pb-2">
                  {region.region}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {region.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services We Offer Across Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional repair services for all your electronics and home appliances in every area of Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all duration-300 hover:shadow-md hover:scale-105 transform"
              >
                <div className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {service.name}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                  Available in all areas
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Service in Your Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide exceptional service across all areas of Hyderabad with these key benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Repair Service in Your Area?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We provide professional electronics and appliance repair services across all areas of Hyderabad. 
            Same-day service available with free pickup and delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Clock className="h-5 w-5" />
              Book Service Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}