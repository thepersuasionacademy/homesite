'use client'

import { useEffect } from 'react'

/**
 * Performance Optimization Component
 * Implements best practices for Core Web Vitals improvement
 */
export function PerformanceOptimization() {
  useEffect(() => {
    // Skip performance optimizations in development
    if (process.env.NODE_ENV !== 'production') {
      console.log('🚀 Performance optimizations disabled in development mode')
      return
    }
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload CDN connection
      const cdnPreconnect = document.createElement('link')
      cdnPreconnect.rel = 'preconnect'
      cdnPreconnect.href = 'https://thepersuasionacademycdn.b-cdn.net'
      cdnPreconnect.crossOrigin = 'anonymous'
      document.head.appendChild(cdnPreconnect)

      // Preload LCP image if it's from the CDN
      const currentPath = window.location.pathname
      if (currentPath.includes('/articles/')) {
        // For BANT article specifically - preload the banner image
        if (currentPath.includes('bant-vs-dreamstate-selling')) {
          const lcpImage = document.createElement('link')
          lcpImage.rel = 'preload'
          lcpImage.as = 'image'
          lcpImage.href = 'https://thepersuasionacademycdn.b-cdn.net/Images/image.jpeg?width=1200&quality=90&format=webp'
          lcpImage.crossOrigin = 'anonymous'
          document.head.appendChild(lcpImage)
        }
      }

      // Preload DNS for third-party scripts
      const dnsPreconnects = [
        'https://www.googletagmanager.com',
        'https://connect.facebook.net',
        'https://widget.senja.io',
        'https://widget.intercom.io'
      ]

      dnsPreconnects.forEach(url => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = url
        document.head.appendChild(link)
      })
    }

    // Lazy load third-party scripts after critical content
    const lazyLoadThirdPartyScripts = () => {
      // Delay third-party scripts until after LCP
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Load Intercom after user interaction or scroll
            setTimeout(() => {
              if (typeof window !== 'undefined' && !(window as any).Intercom) {
                const script = document.createElement('script')
                script.src = 'https://widget.intercom.io/widget/app_id'
                script.async = true
                document.head.appendChild(script)
              }
            }, 2000)
            observer.disconnect()
          }
        })
      })

      const target = document.querySelector('main') || document.body
      if (target) observer.observe(target)
    }

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              imageObserver.unobserve(img)
            }
          }
        })
      }, {
        rootMargin: '50px 0px'
      })

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }

    // Reduce main thread work
    const optimizeMainThread = () => {
      // Use requestIdleCallback for non-critical work
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          // Defer non-critical JavaScript execution
          preloadCriticalResources()
          lazyLoadThirdPartyScripts()
          optimizeImages()
        })
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          preloadCriticalResources()
          lazyLoadThirdPartyScripts()
          optimizeImages()
        }, 100)
      }
    }

    optimizeMainThread()
  }, [])

  return null
}

/**
 * Critical CSS Inliner
 * Inlines critical CSS to prevent render blocking
 */
export function CriticalCSS() {
  return (
    <style 
      precedence="default"
      href="critical-css"
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles */
          body {
            font-feature-settings: 'rlig' 1, 'calt' 1;
            font-display: swap;
          }
          
          /* Prevent layout shift for images */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Critical navigation styles */
          nav {
            contain: layout style paint;
          }
          
          /* Optimize font loading */
          @font-face {
            font-family: 'Inter';
            font-display: swap;
            src: url('/fonts/inter-var.woff2') format('woff2');
          }
          
          /* Prevent FOUC */
          .nextra-container {
            opacity: 1;
            transition: opacity 0.1s ease-in-out;
          }
          
          /* Critical layout styles */
          .articles-container {
            contain: layout;
          }
          
          /* Optimize article grid */
          .grid {
            contain: layout;
          }
        `
      }} 
    />
  )
}

/**
 * Resource Hints Component
 * Provides critical resource hints for better loading performance
 */
export function ResourceHints() {
  // Only apply resource hints in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Preconnect to CDN */}
      <link rel="preconnect" href="https://thepersuasionacademycdn.b-cdn.net" crossOrigin="anonymous" />
      
      {/* DNS prefetch for third-party domains */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="https://widget.senja.io" />
      <link rel="dns-prefetch" href="https://widget.intercom.io" />
      
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical CSS */}
      <link rel="preload" href="/globals.css" as="style" />
    </>
  )
}
