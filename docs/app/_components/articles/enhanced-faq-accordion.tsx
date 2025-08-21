'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string | React.ReactNode
  id?: string
}

interface EnhancedFAQAccordionProps {
  items: FAQItem[]
  className?: string
  allowMultipleOpen?: boolean
  defaultOpenItems?: number[]
  title?: string
  description?: string
}

/**
 * Enhanced FAQ Accordion Component
 * 
 * An improved version of the FAQ accordion with additional features like
 * multiple open items, default open states, and better accessibility.
 * 
 * @example
 * ```tsx
 * <EnhancedFAQAccordion 
 *   title="Frequently Asked Questions"
 *   description="Common questions about our methodology"
 *   items={[
 *     {
 *       question: "What is the main difference between BANT and DreamState Selling?",
 *       answer: "BANT is a qualification framework while DreamState is a conversion methodology..."
 *     }
 *   ]}
 *   allowMultipleOpen={true}
 *   defaultOpenItems={[0]}
 * />
 * ```
 */
export function EnhancedFAQAccordion({ 
  items, 
  className = '',
  allowMultipleOpen = false,
  defaultOpenItems = [],
  title,
  description
}: EnhancedFAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(defaultOpenItems))

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    
    if (allowMultipleOpen) {
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index)
      } else {
        newOpenItems.add(index)
      }
    } else {
      // Single open mode - close all others
      if (newOpenItems.has(index)) {
        newOpenItems.clear()
      } else {
        newOpenItems.clear()
        newOpenItems.add(index)
      }
    }
    
    setOpenItems(newOpenItems)
  }

  const renderAnswer = (answer: string | React.ReactNode) => {
    if (typeof answer === 'string') {
      // Handle HTML content in strings
      return <div dangerouslySetInnerHTML={{ __html: answer }} />
    }
    return answer
  }

  return (
    <div className={`enhanced-faq-accordion ${className}`}>
      {title && (
        <div className="faq-header">
          <h3 className="faq-title">{title}</h3>
          {description && <p className="faq-description">{description}</p>}
        </div>
      )}
      
      <div className="faq-accordion space-y-4">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className="faq-item border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
            style={{ borderColor: 'var(--border)' }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="faq-question w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              style={{ 
                backgroundColor: openItems.has(index) ? 'var(--secondary)' : 'var(--background)',
                color: 'var(--foreground)',
                padding: '1rem 1.5rem'
              }}
              aria-expanded={openItems.has(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-base pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openItems.has(index) && (
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                style={{
                  backgroundColor: 'var(--background)',
                  borderTop: '1px solid var(--border)',
                  padding: '1rem 1.5rem'
                }}
              >
                <div className="faq-answer-content">
                  {renderAnswer(item.answer)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .enhanced-faq-accordion {
          margin: 2rem 0;
        }
        
        .faq-header {
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .faq-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }
        
        .faq-description {
          color: var(--muted-foreground);
          font-size: 1rem;
          margin: 0;
        }
        
        .faq-answer-content :global(p) {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .faq-answer-content :global(p:last-child) {
          margin-bottom: 0;
        }
        
        .faq-answer-content :global(ul),
        .faq-answer-content :global(ol) {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }
        
        .faq-answer-content :global(li) {
          margin-bottom: 0.25rem;
        }
        
        .faq-answer-content :global(strong) {
          color: var(--foreground);
          font-weight: 600;
        }
        
        .faq-answer-content :global(code) {
          background: var(--muted);
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        
        /* Animation improvements */
        .faq-answer {
          animation: slideDown 0.3s ease-in-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            padding-top: 0;
            padding-bottom: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .faq-question {
            font-size: 0.9rem;
            padding: 1rem;
          }
          
          .faq-answer {
            font-size: 0.875rem;
          }
          
          .faq-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}

/**
 * Quick FAQ component for simple use cases
 */
export function QuickFAQ({
  items,
  className = ''
}: {
  items: { q: string; a: string | React.ReactNode }[]
  className?: string
}) {
  const faqItems: FAQItem[] = items.map(item => ({
    question: item.q,
    answer: item.a
  }))

  return (
    <EnhancedFAQAccordion
      items={faqItems}
      className={className}
      allowMultipleOpen={false}
    />
  )
}
