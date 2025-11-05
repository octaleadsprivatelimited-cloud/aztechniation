import Link from 'next/link'
import Image from 'next/image'
import { Wind, Monitor, Refrigerator } from 'lucide-react'

interface ServiceImagesProps {
  serviceType?: string
}

const ServiceImages = ({ serviceType = 'general' }: ServiceImagesProps) => {
  const serviceImages = {
    general: [
      { icon: Wind, label: 'AC Repair', color: 'from-cyan-500 to-cyan-600', href: '/services/ac-repair', image: '/images/services/ac-repair/acrepair.jpg' },
      { icon: Monitor, label: 'Washing Machine', color: 'from-indigo-500 to-indigo-600', href: '/services/washing-machine-repair', image: '/images/services/washing-machine-repair/washing-machine.webp' },
      { icon: Refrigerator, label: 'Refrigerator', color: 'from-green-500 to-green-600', href: '/services/refrigerator-repair', image: '/images/services/refrigerator-repair/refrigerator.webp' },
    ],
    ac: [
          { icon: Wind, label: 'Split AC', color: 'from-cyan-500 to-cyan-600', image: '/images/services/ac-repair/acrepair.jpg' },
          { icon: Wind, label: 'Window AC', color: 'from-blue-500 to-blue-600', image: '/images/services/ac-repair/acrepair.jpg' },
          { icon: Wind, label: 'Inverter AC', color: 'from-indigo-500 to-indigo-600', image: '/images/services/ac-repair/acrepair.jpg' },
          { icon: Wind, label: 'Central AC', color: 'from-teal-500 to-teal-600', image: '/images/services/ac-repair/acrepair.jpg' }
        ],
        washing: [
          { icon: Monitor, label: 'Front Load', color: 'from-indigo-500 to-indigo-600', image: '/images/services/washing-machine-repair/washing-machine.webp' },
          { icon: Monitor, label: 'Top Load', color: 'from-blue-500 to-blue-600', image: '/images/services/washing-machine-repair/washing-machine.webp' },
          { icon: Monitor, label: 'Semi Auto', color: 'from-purple-500 to-purple-600', image: '/images/services/washing-machine-repair/washing-machine.webp' },
          { icon: Monitor, label: 'Fully Auto', color: 'from-cyan-500 to-cyan-600', image: '/images/services/washing-machine-repair/washing-machine.webp' }
        ],
        refrigerator: [
          { icon: Refrigerator, label: 'Single Door', color: 'from-green-500 to-green-600', image: '/images/services/refrigerator-repair/refrigerator.webp' },
          { icon: Refrigerator, label: 'Double Door', color: 'from-emerald-500 to-emerald-600', image: '/images/services/refrigerator-repair/refrigerator.webp' },
          { icon: Refrigerator, label: 'Side by Side', color: 'from-teal-500 to-teal-600', image: '/images/services/refrigerator-repair/refrigerator.webp' },
          { icon: Refrigerator, label: 'French Door', color: 'from-cyan-500 to-cyan-600', image: '/images/services/refrigerator-repair/refrigerator.webp' }
        ],
    
  }

  const currentImages = serviceImages[serviceType as keyof typeof serviceImages] || serviceImages.general
  const isGeneral = serviceType === 'general' || !serviceType

  return (
    <div className={`grid ${isGeneral ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'} gap-3 sm:gap-4 lg:gap-5`}>
      {currentImages.map((service, index) => {
        const Icon = service.icon
        return (
            <Link
              key={index}
              href={'href' in service ? service.href : '#'}
              className="group relative block w-full transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
             {/* Service Content */}
             <div className="relative flex flex-col w-full">
               {/* Full Block Image - Landscape/Wide orientation */}
                {'image' in service && service.image ? (
                 <div className="relative w-full h-32 sm:h-40 lg:h-44 mb-2 sm:mb-2 overflow-hidden rounded-lg sm:rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                   <Image
                     src={service.image}
                     alt={service.label}
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-300"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 30vw"
                     priority={index < 3}
                   />
                   {/* Overlay gradient for better text readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
               ) : (
                 <div className="relative w-full h-32 sm:h-40 lg:h-44 flex items-center justify-center mb-2 sm:mb-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                   <Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                 </div>
               )}
               
               {/* Service Label */}
               <div className="text-center">
                 <h3 className="text-gray-800 font-semibold text-xs sm:text-sm lg:text-base group-hover:text-primary-600 transition-colors duration-300">
                   {service.label}
                 </h3>
               </div>
             </div>
           </Link>
        )
      })}
    </div>
  )
}

export default ServiceImages
