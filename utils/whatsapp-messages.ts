// WhatsApp message templates for different services
export const getWhatsAppMessage = (serviceType: string, brand?: string): string => {
  const baseMessage = "Hi! I need help with"
  const location = ". Please provide me with a quote and schedule a service."
  
  const serviceMessages: { [key: string]: string } = {
    // AC Repair Services
    'ac-repair': `${baseMessage} AC repair ${location}`,
    'samsung-ac': `${baseMessage} Samsung AC repair ${location}`,
    'voltas-ac': `${baseMessage} Voltas AC repair ${location}`,
    'daikin-ac': `${baseMessage} Daikin AC repair ${location}`,
    'lg-ac': `${baseMessage} LG AC repair ${location}`,
    'carrier-ac': `${baseMessage} Carrier AC repair ${location}`,
    'blue-star-ac': `${baseMessage} Blue Star AC repair ${location}`,
    
    // Home Appliance Services
    'tv-repair': `${baseMessage} TV repair ${location}`,
    'washing-machine-repair': `${baseMessage} washing machine repair ${location}`,
    'refrigerator-repair': `${baseMessage} refrigerator repair ${location}`,
    'microwave-repair': `${baseMessage} microwave repair ${location}`,
    'home-appliances': `${baseMessage} home appliance repair ${location}`,
    
    
    // General Services
    'general': `${baseMessage} appliance repair services ${location}`,
    'emergency': `URGENT: I need emergency appliance repair service. Please provide immediate assistance.`,
    'maintenance': `${baseMessage} appliance maintenance service ${location}`,
  }
  
  // If brand is provided, use it in the message
  if (brand) {
    const brandKey = brand.toLowerCase().replace(/\s+/g, '-')
    if (serviceMessages[`${brandKey}-${serviceType}`]) {
      return serviceMessages[`${brandKey}-${serviceType}`]
    }
  }
  
  // Return specific service message or default
  return serviceMessages[serviceType] || serviceMessages['general']
}

// Generate WhatsApp URL with message
export const getWhatsAppUrl = (serviceType: string, brand?: string): string => {
  const phoneNumber: string = '+919182107334'
  if (!phoneNumber || phoneNumber.trim() === '') {
    return '/contact'
  }
  const message = getWhatsAppMessage(serviceType, brand)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
}

// Service type mappings for different pages
export const serviceTypeMapping: { [key: string]: string } = {
  // Service pages
  '/services/ac-repair': 'ac-repair',
  '/services/tv-repair': 'tv-repair',
  '/services/washing-machine-repair': 'washing-machine-repair',
  '/services/refrigerator-repair': 'refrigerator-repair',
  '/services/microwave-repair': 'microwave-repair',
  '/services/home-appliances': 'home-appliances',
  
  // Brand-specific repair pages
  '/repair/samsung-ac-repair': 'samsung-ac',
  '/repair/voltas-ac-repair': 'voltas-ac',
  '/repair/daikin-ac-repair': 'daikin-ac',
  '/repair/lg-ac-repair': 'lg-ac',
  '/repair/carrier-ac-repair': 'carrier-ac',
  '/repair/blue-star-ac-repair': 'blue-star-ac',
}

// Get service type from current path
export const getServiceTypeFromPath = (pathname: string): string => {
  return serviceTypeMapping[pathname] || 'general'
}
