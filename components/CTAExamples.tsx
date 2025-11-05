'use client'

import CTA, { CallNowButton, BookServiceButton, ContactButton } from './CTA'
import CTASection, { HeroCTA, ServiceCTA, SupportCTA, EmergencyCTA } from './CTASection'
import WhatsAppButton, { WhatsAppLink } from './WhatsAppButton'

const CTAExamples = () => {
  return (
    <div className="space-y-16 p-8">
      {/* Basic CTA Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Basic CTA Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <CallNowButton />
          <BookServiceButton />
          <WhatsAppButton />
          <ContactButton />
        </div>
      </section>

      {/* Different Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Different Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <CTA action="call" size="sm">Small</CTA>
          <CTA action="call" size="md">Medium</CTA>
          <CTA action="call" size="lg">Large</CTA>
        </div>
      </section>

      {/* Different Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Different Variants</h2>
        <div className="flex flex-wrap gap-4">
          <CTA action="call" variant="primary">Primary</CTA>
          <CTA action="call" variant="secondary">Secondary</CTA>
          <CTA action="call" variant="outline">Outline</CTA>
        </div>
      </section>

      {/* WhatsApp Components */}
      <section>
        <h2 className="text-2xl font-bold mb-6">WhatsApp Components</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WhatsApp Link</h3>
            <WhatsAppLink>Send WhatsApp Message</WhatsAppLink>
          </div>
          
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Floating WhatsApp Button</h3>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section>
        <h2 className="text-2xl font-bold mb-6">CTA Sections</h2>
        <div className="space-y-8">
          <HeroCTA />
          <ServiceCTA />
          <SupportCTA />
          <EmergencyCTA />
        </div>
      </section>

      {/* Custom CTA Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Custom CTA Section</h2>
        <CTASection
          title="Custom CTA Section"
          description="This is a custom CTA section with specific actions and styling."
          variant="gradient"
          actions={['call', 'book', 'contact']}
          showStats={true}
        />
      </section>
    </div>
  )
}

export default CTAExamples
