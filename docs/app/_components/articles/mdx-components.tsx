import React, { ReactNode } from 'react'
import { FAQAccordion } from './faq-accordion'
import { CTAButton } from './cta-button'
import { ComparisonTable, BANTvsDreamStateTable } from './comparison-table'
import { EnhancedCTAButton, SimpleCTAButton } from './enhanced-cta-button'
import { EnhancedFAQAccordion, QuickFAQ } from './enhanced-faq-accordion'
import { EQAssessment } from './eq-assessment'

interface HeadingProps {
  children: ReactNode
  id?: string
}

interface TableProps {
  children: ReactNode
}

interface TableCellProps {
  children: ReactNode
  [key: string]: any
}

function createHeading(level: number) {
  const Heading = ({ children, ...props }: HeadingProps) => {
    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
    
    // Generate ID from children text if not provided
    let id = props.id
    if (!id && typeof children === 'string') {
      id = children
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
    }
    
    return (
      <Tag id={id} {...props}>
        {children}
      </Tag>
    )
  }
  
  Heading.displayName = `Heading${level}`
  return Heading
}

function Table({ children }: TableProps) {
  return (
    <div className="table-wrapper">
      <table>{children}</table>
    </div>
  )
}

function TableCell({ children, ...props }: TableCellProps) {
  return React.createElement(props.as || 'td', props, children)
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  table: Table,
  th: TableCell,
  td: TableCell,
  // Original components (for backward compatibility)
  FAQAccordion,
  CTAButton,
  // New enhanced components
  ComparisonTable,
  BANTvsDreamStateTable,
  EnhancedCTAButton,
  SimpleCTAButton,
  EnhancedFAQAccordion,
  QuickFAQ,
  EQAssessment,
}
