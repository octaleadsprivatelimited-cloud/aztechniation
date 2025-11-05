import ContactForm from '@/components/ContactForm'
import { Mail, Clock, Phone } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - AZ technician | Electronics & Appliance Repair Services in Hyderabad',
  description: 'Contact AZ technician for professional electronics and appliance repair services. Email mra760063@gmail.com for same-day service.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-blue-700 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Contact Us for Appliance Repair in Hyderabad
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert technicians for all your electronics and appliance repair needs in Hyderabad. 
              We provide same-day service in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad. We're here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Primary Phone</h3>
              <a href="tel:+919182107334" className="text-gray-600 mb-2 hover:text-primary-600 transition-colors">
                +91 91821 07334
              </a>
              <p className="text-sm text-gray-500">Call us anytime</p>
            </div>

            

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:mra760063@gmail.com" className="text-gray-600 mb-2 hover:text-primary-600 transition-colors">
                mra760063@gmail.com
              </a>
              <p className="text-sm text-gray-500">Quick response</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-2">8 AM - 8 PM</p>
              <p className="text-sm text-gray-500">Mon - Sun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get a Free Quote
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Fill out the form below and we'll get back to you with a personalized quote for your repair needs.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Service Areas in Hyderabad
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We provide professional electronics and appliance repair services across all areas of Hyderabad including HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, Kukatpally, Miyapur, Serilingampally, Chandanagar, Alwal, Malkajgiri, Dilsukhnagar, Uppal, Nagole, and surrounding areas
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-xl sm:rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
            <div className="text-center">
              <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">
                Map integration would be added here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Common questions about our repair services in Hyderabad
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                How quickly can you repair my appliance in Hyderabad?
              </h3>
              <p className="text-gray-600">
                Most repairs are completed the same day across all areas of Hyderabad including HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, and Pragathi Nagar. For complex issues, we may need 1-2 days to source parts and complete the repair.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Do you provide a warranty on repairs?
              </h3>
              <p className="text-gray-600">
                Yes, we provide a comprehensive warranty on all our repairs. The warranty period varies depending on the type of repair and parts used.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                What if the repair doesn't work?
              </h3>
              <p className="text-gray-600">
                We offer a 100% satisfaction guarantee. If you're not happy with our service, we'll make it right or provide a full refund.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Do you charge for service calls?
              </h3>
              <p className="text-gray-600">
                We provide free diagnosis for most appliances across all areas of Hyderabad. Service charges are only applied if you choose to proceed with the repair.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Do you provide home service in all areas of Hyderabad?
              </h3>
              <p className="text-gray-600">
                Yes, we provide doorstep repair service in all areas of Hyderabad including HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, Kukatpally, Miyapur, Serilingampally, Chandanagar, Alwal, Malkajgiri, Dilsukhnagar, Uppal, Nagole, and surrounding areas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                What brands do you repair?
              </h3>
              <p className="text-gray-600">
                We repair all major brands including Samsung, LG, Sony, Panasonic, Daikin, Voltas, Blue Star, Carrier, Whirlpool, Godrej, Dell, HP, Lenovo, Asus, Acer, Apple, OnePlus, Xiaomi, Vivo, Oppo, and many more across all areas of Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
