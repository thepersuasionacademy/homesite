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
  icon?: React.ReactNode
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

  const defaultIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  )

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
          {icon || defaultIcon}
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
