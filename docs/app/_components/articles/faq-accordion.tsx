'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="faq-accordion space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
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
              className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
            >
            <div 
              className="p-4 pt-0 text-sm leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {typeof item.answer === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              ) : (
                item.answer
              )}
            </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
