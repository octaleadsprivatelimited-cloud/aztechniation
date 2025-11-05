'use client'

import { Phone, Calendar, MessageCircle, ArrowRight, Star, Shield, Clock, Users } from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  variant?: 'primary' | 'secondary' | 'gradient' | 'dark'
  actions?: ('call' | 'book' | 'contact')[]
  showStats?: boolean
  className?: string
}

const CTASection = ({ 
  title, 
  description, 
  variant = 'primary',
  actions = ['call', 'book'],
  showStats = false,
  className = ''
}: CTASectionProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return {
          container: 'bg-primary-600',
          title: 'text-white',
          description: 'text-primary-100',
          buttonVariant: 'secondary' as const
        }
      case 'secondary':
        return {
          container: 'bg-gray-900',
          title: 'text-white',
          description: 'text-gray-300',
          buttonVariant: 'primary' as const
        }
      case 'gradient':
        return {
          container: 'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800',
          title: 'text-white',
          description: 'text-primary-100',
          buttonVariant: 'secondary' as const
        }
      case 'dark':
        return {
          container: 'bg-gray-800',
          title: 'text-white',
          description: 'text-gray-300',
          buttonVariant: 'primary' as const
        }
      default:
        return {
          container: 'bg-primary-600',
          title: 'text-white',
          description: 'text-primary-100',
          buttonVariant: 'secondary' as const
        }
    }
  }

  const variantClasses = getVariantClasses()

  const getActionButton = (action: string) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl"

    switch (action) {
      case 'call':
        return (
          <Link
            href="tel:+919182107334"
            className={`${baseClasses} ${
              variantClasses.buttonVariant === 'primary' 
                ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500' 
                : 'bg-white text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
            }`}
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </Link>
        )
      case 'book':
        return (
          <Link
            href="/book-service"
            className={`${baseClasses} ${
              variantClasses.buttonVariant === 'primary' 
                ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500' 
                : 'bg-white text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
            }`}
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Service
          </Link>
        )
      case 'contact':
        return (
          <Link
            href="/contact"
            className={`${baseClasses} ${
              variantClasses.buttonVariant === 'primary' 
                ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500' 
                : 'bg-white text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
            }`}
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            Contact Us
          </Link>
        )
      default:
        return null
    }
  }

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Star, value: '4.7/5', label: 'Rating' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Shield, value: '100%', label: 'Guaranteed' }
  ]

  return (
    <section className={`${variantClasses.container} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${variantClasses.title} mb-6`}>
            {title}
          </h2>
          <p className={`text-xl ${variantClasses.description} max-w-3xl mx-auto mb-8`}>
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {actions.map((action, index) => (
              <div key={index}>
                {getActionButton(action)}
              </div>
            ))}
          </div>

          {/* Stats Section */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-white/80 mr-2" />
                    <span className="text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Predefined CTA Sections for common use cases
export const HeroCTA = ({ className = '' }: { className?: string }) => (
  <CTASection
    title="Need Professional Appliance Repair?"
    description="Get expert repair services for all your electronics and home appliances. Fast, reliable, and affordable solutions in Hyderabad."
    variant="gradient"
    actions={['call', 'book']}
    showStats={true}
    className={className}
  />
)

export const ServiceCTA = ({ className = '' }: { className?: string }) => (
  <CTASection
    title="Ready to Book Your Service?"
    description="Don't let broken appliances disrupt your daily routine. Schedule your repair service today and get back to normal quickly."
    variant="primary"
    actions={['call', 'book']}
    className={className}
  />
)

export const SupportCTA = ({ className = '' }: { className?: string }) => (
  <CTASection
    title="Need Help or Have Questions?"
    description="Our customer support team is here to help you with any questions about our services. Get in touch with us today."
    variant="dark"
    actions={['call', 'contact']}
    className={className}
  />
)

export const EmergencyCTA = ({ className = '' }: { className?: string }) => (
  <CTASection
    title="Emergency Repair Service Available"
    description="Urgent appliance repair needed? We provide emergency services for critical issues. Call us now for immediate assistance."
    variant="secondary"
    actions={['call']}
    className={className}
  />
)

export default CTASection
