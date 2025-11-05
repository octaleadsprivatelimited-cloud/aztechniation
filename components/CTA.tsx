'use client'

import { Phone, Calendar, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getWhatsAppUrl } from '@/utils/whatsapp-messages'

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  action?: 'call' | 'book' | 'whatsapp' | 'contact' | 'quote'
  className?: string
  children?: React.ReactNode
  serviceType?: string
  brand?: string
}

const CTA = ({ 
  variant = 'primary', 
  size = 'md', 
  action = 'call',
  className = '',
  children,
  serviceType = 'general',
  brand
}: CTAProps) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg',
    md: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl'
  }
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500'
  }

  const getActionContent = () => {
    switch (action) {
      case 'call':
        return {
          href: 'tel:+919182107334',
          icon: Phone,
          text: 'Call Now'
        }
      case 'book':
        return {
          href: '/book-service',
          icon: Calendar,
          text: 'Book Service'
        }
      case 'contact':
        return {
          href: '/contact',
          icon: ArrowRight,
          text: 'Contact Us'
        }
      case 'quote':
        return {
          href: getWhatsAppUrl(serviceType, brand),
          icon: MessageCircle,
          text: 'Get Quote'
        }
      case 'whatsapp':
        return {
          href: getWhatsAppUrl(serviceType, brand),
          icon: MessageCircle,
          text: 'WhatsApp'
        }
      default:
        return {
          href: 'tel:+919182107334',
          icon: Phone,
          text: 'Call Now'
        }
    }
  }

  const actionContent = getActionContent()
  const Icon = actionContent.icon

  const isExternalLink = action === 'whatsapp' || action === 'quote'
  
  return (
    <Link
      href={actionContent.href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
      {children || actionContent.text}
    </Link>
  )
}

// Predefined CTA variants for common use cases
export const CallNowButton = ({ size = 'lg', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => (
  <CTA action="call" variant="primary" size={size} className={className} />
)

export const BookServiceButton = ({ size = 'lg', className = '' }: { size?: 'md' | 'lg', className?: string }) => (
  <CTA action="book" variant="primary" size={size} className={className} />
)

export const GetQuoteButton = ({ 
  size = 'lg', 
  className = '', 
  serviceType = 'general',
  brand,
  children
}: { 
  size?: 'sm' | 'md' | 'lg', 
  className?: string,
  serviceType?: string,
  brand?: string,
  children?: React.ReactNode
}) => (
  <CTA action="quote" variant="secondary" size={size} className={className} serviceType={serviceType} brand={brand}>
    {children}
  </CTA>
)

export const ContactButton = ({ size = 'md', className = '' }: { size?: 'md' | 'lg', className?: string }) => (
  <CTA action="contact" variant="outline" size={size} className={className} />
)

// CTA Section Component
interface CTASectionProps {
  title: string
  description: string
  variant?: 'primary' | 'secondary'
  actions?: ('call' | 'book' | 'contact')[]
}

export const CTASection = ({ 
  title, 
  description, 
  variant = 'primary',
  actions = ['call', 'book']
}: CTASectionProps) => {
  const bgClass = variant === 'primary' ? 'bg-primary-600' : 'bg-gray-900'
  const textClass = variant === 'primary' ? 'text-white' : 'text-white'
  const subtextClass = variant === 'primary' ? 'text-primary-100' : 'text-gray-300'

  return (
    <section className={`${bgClass} py-12 sm:py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${textClass} mb-3 sm:mb-4`}>
          {title}
        </h2>
        <p className={`text-lg sm:text-xl ${subtextClass} mb-6 sm:mb-8`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {actions.map((action, index) => (
            <CTA
              key={index}
              action={action}
              variant={variant === 'primary' ? 'secondary' : 'primary'}
              size="lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTA