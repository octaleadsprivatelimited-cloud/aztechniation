'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

interface WhatsAppLinkProps {
  phoneNumber?: string
  message?: string
  className?: string
  children: React.ReactNode
}

const WhatsAppButton = ({ 
  phoneNumber = '+919182107334',
  message = 'Hi! I need help with appliance repair services. Please provide me with a quote.',
  className = ''
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    if (!phoneNumber) {
      window.open('/contact', '_blank', 'noopener,noreferrer')
      return
    }
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`whatsapp-float animate-pulse group ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </button>
  )
}

const WhatsAppLink = ({ 
  phoneNumber = '+919182107334',
  message = 'Hi! I need help with appliance repair services. Please provide me with a quote.',
  className = '',
  children
}: WhatsAppLinkProps) => {
  const handleWhatsAppClick = () => {
    if (!phoneNumber) {
      window.open('/contact', '_blank', 'noopener,noreferrer')
      return
    }
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={className}
      aria-label="Contact us on WhatsApp"
    >
      {children}
    </button>
  )
}

export default WhatsAppButton
export { WhatsAppLink }