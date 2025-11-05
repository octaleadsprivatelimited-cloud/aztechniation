import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}
