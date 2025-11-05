import { applianceKeywords, generateAllKeywords } from '../keywords/appliance-keywords'
import fs from 'fs'
import path from 'path'

// Generate slug from keyword
function generateSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Generate page content
function generatePageContent(keyword: string, category: string) {
  const slug = generateSlug(keyword)
  const whatsappMessage = `Hi! I need help with ${keyword.toLowerCase()}. Please provide me with a quote and schedule a service.`
  
  return `import type { Metadata } from 'next'
import { Wrench, Clock, Shield, Star, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import WhatsAppButton, { WhatsAppLink } from '@/components/WhatsAppButton'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '${keyword} - AZ technician | Expert ${category} Repair Service',
  description: 'Professional ${keyword} service in Hyderabad. Expert technicians for all ${category} repair needs. Same day service available.',
  keywords: '${keyword.toLowerCase()}, ${category} repair, ${category} service, ${category} technician Hyderabad',
  openGraph: {
    title: '${keyword} - AZ technician',
    description: 'Professional ${keyword} service in Hyderabad. Expert technicians for all ${category} repair needs.',
    type: 'website',
  },
}

export default function ${keyword.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  const whatsappMessage = '${whatsappMessage}'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ${keyword}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Professional ${keyword.toLowerCase()} service in Hyderabad. Expert technicians for all ${category} repair needs. Same day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={whatsappMessage}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                WhatsApp for ${keyword}
              </WhatsAppLink>
              <Link
                href="/contact"
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert ${keyword} Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in ${keyword.toLowerCase()} with genuine parts and expert technicians. 
                Our service covers all areas of Hyderabad with same-day repair available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Same Day Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Genuine Parts Used</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">90 Days Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Free Diagnosis</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  ${category} Expert
                </h3>
                <p className="text-primary-700 mb-6">
                  Professional repair service for all ${category.toLowerCase()} models
                </p>
                <WhatsAppLink
                  message={whatsappMessage}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Get Quote via WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our ${keyword} Service?
            </h2>
            <p className="text-lg text-gray-600">
              Professional service with guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Same Day Service
              </h3>
              <p className="text-gray-600">
                Quick response and same-day repair service available
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4.7/5 Rating
              </h3>
              <p className="text-gray-600">
                Highly rated by 5000+ satisfied customers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round the clock customer support available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide ${keyword.toLowerCase()} service across Hyderabad
          </p>
          <div className="bg-primary-50 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="h-6 w-6 text-primary-600" />
              <span className="font-semibold text-gray-900">Coverage Areas</span>
            </div>
            <p className="text-gray-700">
              Pragathi Nagar, Kukatpally, Miyapur, Chandanagar, Nizampet, Bachupally, 
              Gachibowli, Kondapur, HITEC City, Madhapur, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need ${keyword} Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us now for professional ${keyword.toLowerCase()} service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink
              message={whatsappMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              WhatsApp for ${keyword}
            </WhatsAppLink>
            <Link
              href="/contact"
              className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}`
}

// Generate all repair pages
function generateAllRepairPages() {
  const pagesDir = path.join(process.cwd(), 'app', 'repair')
  
  // Create pages directory if it doesn't exist
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true })
  }

  const allKeywords = generateAllKeywords()
  const generatedPages: Array<{slug: string, keyword: string, category: string, path: string}> = []

  allKeywords.forEach(keyword => {
    const slug = generateSlug(keyword)
    const pageDir = path.join(pagesDir, slug)
    
    // Create page directory
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true })
    }

    // Determine category from keyword
    let category = 'Appliance'
    if (keyword.toLowerCase().includes('ac')) category = 'AC'
    else if (keyword.toLowerCase().includes('tv')) category = 'TV'
    else if (keyword.toLowerCase().includes('washing')) category = 'Washing Machine'
    else if (keyword.toLowerCase().includes('refrigerator') || keyword.toLowerCase().includes('fridge')) category = 'Refrigerator'
    else if (keyword.toLowerCase().includes('microwave')) category = 'Microwave'
    else if (keyword.toLowerCase().includes('laptop')) category = 'Laptop'
    else if (keyword.toLowerCase().includes('mobile') || keyword.toLowerCase().includes('phone')) category = 'Mobile'

    // Generate page content
    const pageContent = generatePageContent(keyword, category)
    
    // Write page file
    const pagePath = path.join(pageDir, 'page.tsx')
    fs.writeFileSync(pagePath, pageContent)
    
    generatedPages.push({
      slug,
      keyword,
      category,
      path: pagePath
    })
  })

  return generatedPages
}

// Generate sitemap entries
function generateSitemapEntries() {
  const allKeywords = generateAllKeywords()
  const sitemapEntries: Array<{url: string, lastmod: string, changefreq: string, priority: number}> = []

  allKeywords.forEach(keyword => {
    const slug = generateSlug(keyword)
    sitemapEntries.push({
      url: `https://appliancecares.in/repair/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    })
  })

  return sitemapEntries
}

// Export functions
export {
  generateAllRepairPages,
  generateSitemapEntries,
  generateSlug,
  generatePageContent
}

// Run if called directly
if (require.main === module) {
  console.log('Generating repair pages...')
  const pages = generateAllRepairPages()
  console.log(`Generated ${pages.length} repair pages`)
  
  const sitemapEntries = generateSitemapEntries()
  console.log(`Generated ${sitemapEntries.length} sitemap entries`)
  
  // Save sitemap entries to file
  const sitemapPath = path.join(process.cwd(), 'data', 'repair-sitemap.json')
  fs.mkdirSync(path.dirname(sitemapPath), { recursive: true })
  fs.writeFileSync(sitemapPath, JSON.stringify(sitemapEntries, null, 2))
  console.log('Sitemap entries saved to:', sitemapPath)
}
