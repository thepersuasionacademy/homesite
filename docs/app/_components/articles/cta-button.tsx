'use client'

import React from 'react'

interface CTAButtonProps {
  title: string
  description: string
  url: string
  variant?: 'blue' | 'light-blue' | 'yellow'
}

export function CTAButton({ title, description, url, variant = 'blue' }: CTAButtonProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const variantClasses = {
    blue: 'cta-button-blue',
    'light-blue': 'cta-button-light-blue',
    yellow: 'cta-button-yellow'
  }

  return (
    <div className={`cta-button ${variantClasses[variant]}`}>
      <button
        onClick={handleClick}
        className="cta-button-content"
        aria-label={`${title} - ${description}`}
      >
        <div className="cta-button-text">
          <h4 className="cta-button-title">{title}</h4>
          <p className="cta-button-description">{description}</p>
        </div>
        <div className="cta-button-arrow">
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
        </div>
      </button>
    </div>
  )
}
