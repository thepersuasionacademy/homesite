'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: any
    gtag: any
  }
}

export function FacebookPixelEvents() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  useEffect(() => {
    // Auto-track scroll events (ViewContent)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      
      // Track ViewContent when user scrolls 25% down the page
      if (scrollPercent > 25 && !sessionStorage.getItem('fb_viewcontent_tracked')) {
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            content_name: document.title,
            content_category: 'Page Content'
          })
          sessionStorage.setItem('fb_viewcontent_tracked', 'true')
        }
      }
    }

    // Auto-track form submissions
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement
      if (form && form.tagName === 'FORM') {
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: form.id || 'Form Submission',
            content_category: 'Lead Generation'
          })
        }
      }
    }

    // Auto-track button clicks (tailored for The Power Ark)
    const handleButtonClick = (event: Event) => {
      const target = event.target as HTMLElement
      
      // Specific selectors for your site's actual elements
      const button = target.closest(`
        button, 
        a[href*="/store"], 
        a[href*="/services"],
        a[href*="typeform.com"],
        a[href*="mailto:"],
        .ctaButton,
        .ctaGhost,
        .ctaPrimary,
        [class*="platformTab"],
        [href*="Request Access"],
        [href*="Book a Strategy Session"]
      `.replace(/\s+/g, ''))
      
      if (button) {
        const buttonText = button.textContent?.toLowerCase() || ''
        const buttonClass = button.className?.toLowerCase() || ''
        const href = (button as HTMLAnchorElement).href?.toLowerCase() || ''
        
        // Purchase Intent - Based on your actual CTAs
        if (
          buttonText.includes('request access') ||
          buttonText.includes('see full offer') ||
          href.includes('/store') ||
          buttonClass.includes('ctaprimary') ||
          (buttonText.includes('season pass') || buttonText.includes('vip')) ||
          buttonText.includes('$') ||
          button.textContent?.includes('$')
        ) {
          if (window.fbq) {
            const eventData = {
              content_name: buttonText || 'Purchase Intent',
              content_category: 'Store/Purchase',
              button_location: window.location.pathname,
              button_type: href.includes('mailto:') ? 'Email CTA' : 'Direct Link'
            }
            window.fbq('track', 'InitiateCheckout', eventData)
            
            // Send to Google Analytics
            if (window.gtag) {
              window.gtag('event', 'begin_checkout', {
                event_category: 'ecommerce',
                event_label: buttonText || 'Purchase Intent',
                value: 1
              })
            }
            
            logEventToYourAnalytics('InitiateCheckout', eventData)
          }
        }
        
        // Lead Generation - Your actual lead buttons
        else if (
          buttonText.includes('book a strategy session') ||
          buttonText.includes('strategy session') ||
          buttonText.includes('apply') ||
          buttonText.includes('qualify') ||
          buttonText.includes('session') ||
          buttonText.includes('book') ||
          href.includes('typeform.com') ||
          href.includes('mailto:support@thepersuasionacademy.com')
        ) {
          if (window.fbq) {
            const eventData = {
              content_name: buttonText || 'Lead Generation',
              content_category: 'Services/Consultation',
              button_location: window.location.pathname,
              lead_type: href.includes('typeform') ? 'Form' : 'Email'
            }
            window.fbq('track', 'Lead', eventData)
            
            // Send to Google Analytics
            if (window.gtag) {
              window.gtag('event', 'generate_lead', {
                event_category: 'engagement',
                event_label: buttonText || 'Lead Generation',
                value: 1
              })
            }
            
            logEventToYourAnalytics('Lead', eventData)
          }
        }
        
        // Navigation/Engagement - Platform tabs, services nav, etc.
        else if (
          buttonClass.includes('platformtab') ||
          buttonText.includes('content') ||
          buttonText.includes('tools') ||
          buttonText.includes('codex') ||
          buttonText.includes('studio') ||
          href.includes('/services') ||
          buttonClass.includes('ctaghost')
        ) {
          if (window.fbq) {
            window.fbq('track', 'ViewContent', {
              content_name: buttonText || 'Navigation',
              content_category: 'Platform Engagement',
              button_location: window.location.pathname,
              interaction_type: 'Navigation'
            })
          }
        }
        
        // Category/Filter buttons on store page
        else if (
          buttonText.includes('featured') ||
          buttonText.includes('self mastery') ||
          buttonText.includes('renegade persuaders') ||
          buttonText.includes('strategic persuasion') ||
          buttonText.includes('sales mastery')
        ) {
          if (window.fbq) {
            window.fbq('track', 'Search', {
              search_string: buttonText,
              content_category: 'Product Category',
              button_location: window.location.pathname
            })
          }
        }
      }
    }

    // Auto-track video engagement (HTML5, YouTube, Vimeo)
    const handleVideoPlay = (event: Event) => {
      const target = event.target as HTMLElement
      
      // Handle HTML5 video elements
      if (target && target.tagName === 'VIDEO') {
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            content_name: (target as HTMLVideoElement).title || 'HTML5 Video',
            content_category: 'Video',
            content_type: 'video'
          })
        }
      }
    }

    // Enhanced video tracking for Bunny and other embedded videos
    const trackEmbeddedVideoInteraction = () => {
      // Track your Bunny videos (mediadelivery.net) and other embedded videos
      const videoIframes = document.querySelectorAll('iframe[src*="mediadelivery.net"], iframe[src*="youtube"], iframe[src*="vimeo"]')
      
      videoIframes.forEach((iframe, index) => {
        const iframeElement = iframe as HTMLIFrameElement
        const isBunnyVideo = iframeElement.src.includes('mediadelivery.net')
        
        // Track when video iframe is loaded (indicates video is ready to play)
        iframe.addEventListener('load', () => {
          if (window.fbq) {
            window.fbq('track', 'ViewContent', {
              content_name: index === 0 ? 'Hero Video' : `Video ${index + 1}`,
              content_category: 'Video',
              content_type: 'embedded_video_loaded',
              video_source: isBunnyVideo ? 'Bunny CDN' :
                           iframeElement.src.includes('youtube') ? 'YouTube' : 
                           iframeElement.src.includes('vimeo') ? 'Vimeo' : 'Other',
              page_location: window.location.pathname
            })
          }
        })

        // Track clicks on video containers (user attempting to interact with video)
        const videoContainer = iframe.closest('div')
        if (videoContainer) {
          videoContainer.addEventListener('click', () => {
            if (window.fbq) {
              window.fbq('track', 'ViewContent', {
                content_name: isBunnyVideo ? 'Bunny Video Interaction' : 'Video Interaction',
                content_category: 'Video Engagement',
                content_type: 'video_click_attempt',
                video_source: isBunnyVideo ? 'Bunny CDN' : 'Other',
                page_location: window.location.pathname
              })
            }
          })
        }

        // For Bunny videos, also track mouse hover (indicates interest)
        if (isBunnyVideo && videoContainer) {
          let hoverTimer: NodeJS.Timeout
          
          videoContainer.addEventListener('mouseenter', () => {
            hoverTimer = setTimeout(() => {
              if (window.fbq) {
                window.fbq('track', 'ViewContent', {
                  content_name: 'Bunny Video Hover',
                  content_category: 'Video Interest',
                  content_type: 'video_hover_3s',
                  page_location: window.location.pathname
                })
              }
            }, 3000) // Track after 3 seconds of hover
          })
          
          videoContainer.addEventListener('mouseleave', () => {
            if (hoverTimer) {
              clearTimeout(hoverTimer)
            }
          })
        }
      })
    }

    // Auto-track time on page (engagement)
    let timeOnPageTimer: NodeJS.Timeout
    const trackTimeOnPage = () => {
      timeOnPageTimer = setTimeout(() => {
        if (window.fbq && !sessionStorage.getItem('fb_engagement_tracked')) {
          window.fbq('track', 'ViewContent', {
            content_name: document.title,
            content_category: 'Engagement',
            custom_parameter: 'time_on_page_30s'
          })
          sessionStorage.setItem('fb_engagement_tracked', 'true')
        }
      }, 30000) // Track after 30 seconds on page
    }

    // Track search functionality on store page
    const handleSearchInput = (event: Event) => {
      const input = event.target as HTMLInputElement
      if (input.placeholder?.includes('Search products') && input.value.length > 2) {
        if (window.fbq) {
          window.fbq('track', 'Search', {
            search_string: input.value,
            content_category: 'Product Search',
            page_location: window.location.pathname
          })
        }
      }
    }

    // Track dropdown expansions (FAQ-style sections)
    const handleDropdownToggle = (event: Event) => {
      const button = event.target as HTMLElement
      if (button.textContent?.includes('What You Learn') || 
          button.textContent?.includes('How You Improve') || 
          button.textContent?.includes('Who You Become')) {
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            content_name: button.textContent,
            content_category: 'Product Details',
            content_type: 'dropdown_expansion',
            page_location: window.location.pathname
          })
        }
      }
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('submit', handleFormSubmit)
    document.addEventListener('click', handleButtonClick)
    document.addEventListener('play', handleVideoPlay, true)
    document.addEventListener('input', handleSearchInput)
    document.addEventListener('click', handleDropdownToggle)
    
    // Initialize embedded video tracking
    trackEmbeddedVideoInteraction()
    
    // Start time tracking
    trackTimeOnPage()

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('submit', handleFormSubmit)
      document.removeEventListener('click', handleButtonClick)
      document.removeEventListener('play', handleVideoPlay, true)
      document.removeEventListener('input', handleSearchInput)
      document.removeEventListener('click', handleDropdownToggle)
      if (timeOnPageTimer) {
        clearTimeout(timeOnPageTimer)
      }
    }
  }, [])

  // Reset session tracking on pathname change
  useEffect(() => {
    sessionStorage.removeItem('fb_viewcontent_tracked')
    sessionStorage.removeItem('fb_engagement_tracked')
  }, [pathname])

  return null // This component doesn't render anything
}

// Internal analytics logger - sends data to your own endpoint
const logEventToYourAnalytics = async (eventName: string, parameters?: Record<string, any>) => {
  try {
    // Log to console for debugging
    console.log('📊 Analytics Event:', { eventName, parameters, timestamp: new Date().toISOString() })
    
    // Optional: Send to your own analytics endpoint
    // Uncomment and update the URL when you want to collect your own data
    /*
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: eventName,
        data: parameters,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        user_agent: navigator.userAgent,
        referrer: document.referrer
      })
    })
    */
  } catch (error) {
    console.error('Analytics logging error:', error)
  }
}

// Enhanced utility functions that track to both Facebook and your analytics
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
    logEventToYourAnalytics(eventName, parameters)
  }
}

export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters)
    logEventToYourAnalytics(`Custom_${eventName}`, parameters)
  }
}
