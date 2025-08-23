'use client'

import { useEffect, useState } from 'react'

/**
 * Third-Party Script Facade
 * Provides lightweight placeholders for heavy third-party scripts
 * and loads them only when needed or after user interaction
 */

interface ThirdPartyFacadeProps {
  children: React.ReactNode
}

export function ThirdPartyFacade({ children }: ThirdPartyFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                    window.innerWidth <= 768
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      // On mobile, wait for user interaction
      const handleInteraction = () => {
        setTimeout(() => setIsLoaded(true), 1000)
        document.removeEventListener('touchstart', handleInteraction)
        document.removeEventListener('scroll', handleInteraction)
      }
      
      document.addEventListener('touchstart', handleInteraction, { once: true })
      document.addEventListener('scroll', handleInteraction, { once: true })
      
      // Fallback - load after 10 seconds even without interaction
      const fallbackTimer = setTimeout(() => setIsLoaded(true), 10000)
      
      return () => {
        clearTimeout(fallbackTimer)
        document.removeEventListener('touchstart', handleInteraction)
        document.removeEventListener('scroll', handleInteraction)
      }
    } else {
      // On desktop, load after a short delay
      const timer = setTimeout(() => setIsLoaded(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

  if (!isLoaded) {
    return null
  }

  return <>{children}</>
}

/**
 * Intercom Facade
 * Lightweight placeholder for Intercom widget
 */
export function IntercomFacade() {
  const [showWidget, setShowWidget] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                    window.innerWidth <= 768
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const loadIntercom = () => {
    if (typeof window !== 'undefined' && !(window as any).Intercom) {
      const script = document.createElement('script')
      script.src = 'https://widget.intercom.io/widget/your_app_id'
      script.async = true
      script.onload = () => setShowWidget(true)
      document.head.appendChild(script)
    } else {
      setShowWidget(true)
    }
  }

  if (!showWidget) {
    return (
      <button
        onClick={loadIntercom}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Open chat support"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04.97 4.43L1 23l6.57-1.97C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10zm0 18c-1.1 0-2.18-.25-3.15-.72L7 20l1.72-1.15C9.82 18.25 10.9 18 12 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8c0 1.1.25 2.18.72 3.15L3 14l1.15-1.72C4.75 11.18 5 10.1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7z"/>
        </svg>
      </button>
    )
  }

  return null
}

/**
 * Analytics Facade
 * Provides a lightweight analytics interface before full scripts load
 */
export function AnalyticsFacade() {
  useEffect(() => {
    // Create lightweight analytics queue
    if (typeof window !== 'undefined' && !window.gtag) {
      (window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).gtag = function() {
        ;(window as any).dataLayer.push(arguments)
      }
    }
  }, [])

  return null
}
