import type { Metadata } from 'next'
import { Cookie, Shield, Settings, Eye, AlertCircle, CheckCircle, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy - AZ technician | Cookie Usage & Management',
  description: 'Learn about how AZ technician uses cookies and similar technologies. Understand your cookie preferences and how to manage them.',
  openGraph: {
    title: 'Cookie Policy - AZ technician',
    description: 'Learn about how AZ technician uses cookies and similar technologies.',
    type: 'website',
  },
}


const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Session management', 'Security features', 'Load balancing', 'User authentication'],
      required: true
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Traffic sources'],
      required: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'Location settings', 'User interface customization'],
      required: false
    },
    {
      icon: Shield,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion measurement'],
      required: false
    }
  ]

  const cookiePurposes = [
    'To ensure website functionality and security',
    'To analyze website traffic and user behavior',
    'To improve user experience and website performance',
    'To provide personalized content and services',
    'To measure advertising effectiveness',
    'To comply with legal and regulatory requirements'
  ]

  const cookieManagement = [
    {
      title: 'Browser Settings',
      description: 'You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies.',
      action: 'Check your browser help section for instructions'
    },
    {
      title: 'Cookie Consent Banner',
      description: 'Use our cookie consent banner to manage your preferences for non-essential cookies.',
      action: 'Click the cookie settings button in our footer'
    },
    {
      title: 'Third-party Opt-outs',
      description: 'Some third-party services provide their own opt-out mechanisms.',
      action: 'Visit the respective service privacy pages'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience 
              on our website and provide better services.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Cookie className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site. We use cookies responsibly and in compliance with 
                  applicable privacy laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-gray-600">
              We use different types of cookies for various purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <type.icon className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                  {type.required && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Required
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Purposes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why We Use Cookies
            </h2>
            <p className="text-lg text-gray-600">
              We use cookies for legitimate business purposes
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {cookiePurposes.map((purpose, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-lg text-gray-600">
              You have control over how cookies are used on our website
            </p>
          </div>

          <div className="space-y-6">
            {cookieManagement.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-primary-800 font-semibold">{method.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-lg text-gray-600">
              Information about cookies from third-party services
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Third-Party Services
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to third-party websites and services. These third parties 
                  may set their own cookies when you visit their sites. We do not control these cookies 
                  and are not responsible for their privacy practices.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Important Notice:</h4>
                  <p className="text-gray-700 text-sm">
                    Please review the privacy policies of any third-party websites you visit through our site. 
                    We encourage you to be aware of and read the privacy statements of each website you visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us if you have any questions about our cookie policy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Privacy Team</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Contact our privacy team for cookie-related questions
              </p>
              <Link
                href="mailto:mra760063@gmail.com"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                mra760063@gmail.com
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Cookie Settings</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Manage your cookie preferences
              </p>
              <p className="text-primary-600 font-semibold">
                Use the cookie consent banner in the footer to manage your preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Policy Updates
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may update this Cookie Policy from time to time. 
            Any changes will be posted on this page with an updated revision date.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-center space-x-4">
              <Calendar className="h-5 w-5 text-primary-600" />
              <p className="text-gray-600">
                <strong>Last Updated:</strong> January 2025<br />
                <strong>Effective Date:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Cookie Settings?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our team is here to help you understand and manage your cookie preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicy
