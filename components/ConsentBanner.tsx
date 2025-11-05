'use client'

import { useState, useEffect } from 'react'
import { Cookie, Settings, X, CheckCircle, AlertCircle } from 'lucide-react'

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      setShowBanner(true)
    } else {
      const savedConsent = JSON.parse(hasConsented)
      setConsent(savedConsent)
    }
  }, [])

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    }
    setConsent(newConsent)
    saveConsent(newConsent)
    setShowBanner(false)
    updateGoogleConsent(newConsent)
  }

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    }
    setConsent(newConsent)
    saveConsent(newConsent)
    setShowBanner(false)
    updateGoogleConsent(newConsent)
  }

  const handleSavePreferences = () => {
    saveConsent(consent)
    setShowBanner(false)
    setShowSettings(false)
    updateGoogleConsent(consent)
  }

  const saveConsent = (consentData: typeof consent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))
  }

  const updateGoogleConsent = (consentData: typeof consent) => {
    // Analytics consent handling removed
  }

  const toggleConsent = (type: keyof typeof consent) => {
    if (type === 'necessary') return // Can't disable necessary cookies
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowBanner(false)} />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-primary-600 shadow-2xl">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start space-x-3">
                <Cookie className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    We Use Cookies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    You can manage your preferences in our{' '}
                    <a href="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline">
                      Cookie Policy
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="btn border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>Customize</span>
              </button>
              <button
                onClick={handleRejectAll}
                className="btn border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-semibold text-sm"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn bg-primary-600 text-white hover:bg-primary-700 px-6 py-2 rounded-lg font-semibold text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-black/50 absolute inset-0" onClick={() => setShowSettings(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close cookie settings"
              >
                <X className="h-6 w-6" />
              </button>
              </div>

              {/* Cookie Types */}
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Always Active
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    These cookies are essential for the website to function properly. They cannot be disabled.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Session management, security features, load balancing
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={() => toggleConsent('analytics')}
                        className="sr-only peer"
                        aria-label="Toggle analytics cookies"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Page views, user behavior, traffic sources
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.functional}
                        onChange={() => toggleConsent('functional')}
                        className="sr-only peer"
                        aria-label="Toggle functional cookies"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Language preferences, location settings, UI customization
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Cookie className="h-5 w-5 text-orange-600" />
                      <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={() => toggleConsent('marketing')}
                        className="sr-only peer"
                        aria-label="Toggle marketing cookies"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    These cookies are used to deliver relevant advertisements.
                  </p>
                  <div className="text-xs text-gray-500">
                    Examples: Ad targeting, campaign tracking, conversion measurement
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(false)}
                  className="btn border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="btn bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ConsentBanner
