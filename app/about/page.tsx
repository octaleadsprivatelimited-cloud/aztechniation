import type { Metadata } from 'next'
import { Users, Award, Clock, Shield, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - AZ technician | Electronics & Appliance Repair Services',
  description: 'Learn about AZ technician - Hyderabad\'s trusted electronics and appliance repair service. 15+ years of experience, expert technicians, same-day service.',
  openGraph: {
    title: 'About Us - AZ technician',
    description: 'Learn about AZ technician - Hyderabad\'s trusted electronics and appliance repair service.',
    type: 'website',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-blue-700 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About AZ technician
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for professional electronics and appliance repair services in Hyderabad for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, AZ technician has been serving the Hyderabad community 
                with professional electronics and appliance repair services. What started as 
                a small repair shop has grown into one of the most trusted service providers 
                in the city.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is simple: to provide fast, reliable, and affordable repair 
                services that keep your appliances running smoothly. We believe in building 
                long-term relationships with our customers through honest service and 
                quality workmanship.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have served over 5,000 satisfied customers across 
                Hyderabad and surrounding areas, with a 4.7/5 customer rating.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">15+</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Years of Experience</h3>
                <p className="text-gray-600">
                  Over a decade and a half of professional expertise in electronics and appliance repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and make us the trusted choice for appliance repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We use only genuine parts and follow manufacturer specifications for all repairs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Same-day service with transparent communication and honest pricing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to exceed expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Continuous learning and improvement to provide the best possible service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the skilled technicians who make our exceptional service possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Technician</h3>
              <p className="text-gray-600 mb-4">15+ years experience in electronics repair</p>
              <p className="text-sm text-gray-500">
                Specializes in TV, AC, and home appliance repairs. Certified in multiple brands.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">RK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile & Laptop Expert</h3>
              <p className="text-gray-600 mb-4">12+ years experience in mobile and laptop repair</p>
              <p className="text-sm text-gray-500">
                Expert in smartphone repairs, laptop hardware, and data recovery services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">MK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Appliance Specialist</h3>
              <p className="text-gray-600 mb-4">10+ years experience in major appliance repair</p>
              <p className="text-sm text-gray-500">
                Specializes in washing machines, refrigerators, and kitchen appliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-xl text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-xl text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">4.7/5</div>
              <div className="text-xl text-blue-100">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-xl text-blue-100">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to experience our professional repair services?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Primary Phone</h3>
              <a href="tel:+919182107334" className="text-gray-600 hover:text-primary-600">+91 91821 07334</a>
            </div>

            

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:mra760063@gmail.com" className="text-gray-600 hover:text-primary-600">mra760063@gmail.com</a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Hours</h3>
              <p className="text-gray-600">8 AM - 8 PM</p>
              <p className="text-sm text-gray-500">Mon - Sun</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
