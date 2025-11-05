import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  // Force refresh to clear cache
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Pragathi Nagar, Hyderabad',
      rating: 4.7,
      text: 'Excellent Samsung TV repair service! My LED TV was repaired within 2 hours at my home. The technician was professional and explained everything clearly. Highly recommended for TV repair in Hyderabad!',
      service: 'Samsung TV Repair'
    },
    {
      name: 'Priya Sharma',
      location: 'Gachibowli, Hyderabad',
      rating: 4.7,
      text: 'My LG washing machine was making strange noises. AZ technician fixed it perfectly and even cleaned it. Great value for money! Best washing machine repair service in Gachibowli.',
      service: 'LG Washing Machine Repair'
    },
    {
      name: 'Amit Singh',
      location: 'Jubilee Hills, Hyderabad',
      rating: 4.7,
      text: 'Samsung AC wasn\'t cooling properly. They came the same day, diagnosed the issue quickly, and fixed it. Very satisfied with the AC repair service in Jubilee Hills.',
      service: 'Samsung AC Repair'
    },
    {
      name: 'Sunita Reddy',
      location: 'HITEC City, Hyderabad',
      rating: 4.7,
      text: 'Whirlpool refrigerator repair was done professionally. The technician was honest about the issue and provided a fair quote. Will definitely use again for appliance repair in HITEC City.',
      service: 'Whirlpool Refrigerator Repair'
    },
    {
      name: 'Vikram Patel',
      location: 'Kondapur, Hyderabad',
      rating: 4.7,
      text: 'Dell laptop screen replacement was done perfectly. They used genuine parts and the service was quick. Very happy with the laptop repair service in Kondapur.',
      service: 'Dell Laptop Repair'
    },
    {
      name: 'Anita Gupta',
      location: 'Madhapur, Hyderabad',
      rating: 4.7,
      text: 'Samsung microwave repair service was outstanding. The technician was knowledgeable and the pricing was transparent. Highly recommend for microwave repair in Madhapur!',
      service: 'Samsung Microwave Repair'
    },
    {
      name: 'Ravi Kumar',
      location: 'Banjara Hills, Hyderabad',
      rating: 4.7,
      text: 'iPhone screen replacement was done perfectly. They came to my office in Banjara Hills and fixed it on the spot. Excellent mobile repair service!',
      service: 'iPhone Repair'
    },
    {
      name: 'Deepika Reddy',
      location: 'Serilingampally, Hyderabad',
      rating: 4.7,
      text: 'LG AC repair service was exceptional. They provided same-day service and the cooling is now perfect. Great AC repair service in Serilingampally.',
      service: 'LG AC Repair'
    },
    {
      name: 'Mohammed Ali',
      location: 'Chandanagar, Hyderabad',
      rating: 4.7,
      text: 'OnePlus mobile repair service was quick and professional. The technician explained the issue clearly and fixed it with genuine parts. Best mobile repair in Chandanagar.',
      service: 'OnePlus Mobile Repair'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our <span className="text-primary-600">Customers Say in Hyderabad</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              {/* Quote Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(testimonial.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0
                        ? 'text-yellow-400 fill-current opacity-70'
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">{testimonial.rating}/5</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-medium text-primary-600">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Overall Customer Rating in Hyderabad
            </h3>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="text-4xl sm:text-6xl font-bold text-primary-600 mr-3 sm:mr-4">4.7</div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">Based on 5000+ reviews across Hyderabad</div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our customers across HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad consistently rate us highly for our professional service, 
              quick response times, and quality repairs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
