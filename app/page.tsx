import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Stats from '@/components/Stats'
import { CallNowButton } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'AZ technician - Professional Electronics & Appliance Repair Services in Hyderabad',
  description: 'Expert electronics and appliance repair services in Hyderabad. We repair ACs, washing machines, refrigerators, and all home appliances. Same-day service available. Trusted by 5000+ customers.',
  openGraph: {
    title: 'AZ technician - Professional Electronics & Appliance Repair Services in Hyderabad',
    description: 'Expert electronics and appliance repair services in Hyderabad. Same-day service available.',
    type: 'website',
  },
}

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Appliance Repair?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get expert repair services for all your electronics and home appliances.
          </p>
          <CallNowButton />
        </div>
      </section>
    </main>
  )
}
