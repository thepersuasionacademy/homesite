'use client'

import React from 'react'

interface EnhancedCTAButtonProps {
  title: string
  description: string
  url: string
  variant?: 'blue' | 'light-blue' | 'yellow'
  className?: string
  onClick?: () => void
  target?: '_blank' | '_self'
  icon?: React.ReactNode | string
}

/**
 * Enhanced CTA Button Component
 * 
 * An enhanced version of the CTA button with additional features like custom icons,
 * click handlers, and improved accessibility. Maintains the same blue accent styling.
 * 
 * @example
 * ```tsx
 * <EnhancedCTAButton 
 *   title="Master Advanced Vision Creation"
 *   description="Get detailed conversation frameworks and advanced vision creation techniques."
 *   url="https://example.com/store/product"
 *   variant="blue"
 * />
 * ```
 */
export function EnhancedCTAButton({ 
  title, 
  description, 
  url, 
  variant = 'blue',
  className = '',
  onClick,
  target = '_blank',
  icon
}: EnhancedCTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      if (target === '_blank') {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = url
      }
    }
  }

  const variantClasses = {
    blue: 'cta-button-blue',
    'light-blue': 'cta-button-light-blue',
    yellow: 'cta-button-yellow'
  }

  // Icon mapping for string icons
  const iconMap: Record<string, React.ReactNode> = {
    book: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    training: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    materials: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    download: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7,10 12,15 17,10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    arrow: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    )
  }

  const defaultIcon = iconMap.arrow

  // Resolve icon: string -> mapped icon, React node -> as-is, undefined -> default
  const resolvedIcon = typeof icon === 'string' 
    ? iconMap[icon] || defaultIcon 
    : icon || defaultIcon

  return (
    <div className={`cta-button ${variantClasses[variant]} ${className}`}>
      <button
        onClick={handleClick}
        className="cta-button-content"
        aria-label={`${title} - ${description}`}
        type="button"
      >
        <div className="cta-button-text">
          <h4 className="cta-button-title">{title}</h4>
          <p className="cta-button-description">{description}</p>
        </div>
        <div className="cta-button-arrow">
          {resolvedIcon}
        </div>
      </button>
    </div>
  )
}

/**
 * Simplified CTA Button for quick use cases
 */
export function SimpleCTAButton({
  children,
  url,
  variant = 'blue',
  className = '',
  target = '_blank'
}: {
  children: React.ReactNode
  url: string
  variant?: 'blue' | 'light-blue' | 'yellow'
  className?: string
  target?: '_blank' | '_self'
}) {
  const handleClick = () => {
    if (target === '_blank') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
  }

  const variantClasses = {
    blue: 'cta-button-blue',
    'light-blue': 'cta-button-light-blue',
    yellow: 'cta-button-yellow'
  }

  return (
    <div className={`cta-button ${variantClasses[variant]} ${className}`}>
      <button
        onClick={handleClick}
        className="cta-button-content simple-cta"
        type="button"
      >
        {children}
        <div className="cta-button-arrow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </div>
      </button>
      
      <style jsx>{`
        .simple-cta {
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
        }
        
        .simple-cta .cta-button-arrow {
          margin-left: 0.75rem;
        }
      `}</style>
    </div>
  )
}
