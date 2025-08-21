'use client'

import React from 'react'

interface ComparisonTableColumn {
  header: string
  rows: (string | React.ReactNode)[]
  isHighlighted?: boolean
}

interface ComparisonTableProps {
  columns: ComparisonTableColumn[]
  className?: string
  caption?: string
}

/**
 * ComparisonTable Component
 * 
 * Creates a comparison table with optional blue highlighting for specific columns.
 * The highlighted column (typically the second or third) gets the blue DreamState styling.
 * 
 * @example
 * ```tsx
 * <ComparisonTable
 *   columns={[
 *     {
 *       header: "Traditional BANT",
 *       rows: [
 *         "**Focus:** Information gathering",
 *         "**Approach:** Seller-centric qualification",
 *         "**Goal:** Verify prospect readiness"
 *       ]
 *     },
 *     {
 *       header: "DreamState Selling",
 *       rows: [
 *         "**Focus:** Experience creation",
 *         "**Approach:** Buyer-centric psychology", 
 *         "**Goal:** Generate emotional investment"
 *       ],
 *       isHighlighted: true
 *     }
 *   ]}
 *   caption="Comparison of methodologies"
 * />
 * ```
 */
export function ComparisonTable({ columns, className = '', caption }: ComparisonTableProps) {
  // Ensure all columns have the same number of rows
  const maxRows = Math.max(...columns.map(col => col.rows.length))
  
  // Pad columns with empty strings if needed
  const normalizedColumns = columns.map(col => ({
    ...col,
    rows: [...col.rows, ...Array(maxRows - col.rows.length).fill('')]
  }))

  const renderCellContent = (content: string | React.ReactNode) => {
    if (typeof content === 'string') {
      // Handle markdown-style bold text
      const parts = content.split(/(\*\*[^*]+\*\*)/g)
      return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>
        }
        return part
      })
    }
    return content
  }

  return (
    <div className={`comparison-table-wrapper ${className}`}>
      {caption && (
        <div className="comparison-table-caption">
          {caption}
        </div>
      )}
      <table className="comparison-table">
        <thead>
          <tr>
            {normalizedColumns.map((column, index) => (
              <th 
                key={index}
                className={column.isHighlighted ? 'highlighted-column' : ''}
              >
                {renderCellContent(column.header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {normalizedColumns.map((column, colIndex) => (
                <td 
                  key={colIndex}
                  className={column.isHighlighted ? 'highlighted-column' : ''}
                >
                  {renderCellContent(column.rows[rowIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <style jsx>{`
        .comparison-table-wrapper {
          margin: 1.5rem 0;
        }
        
        .comparison-table-caption {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          margin-bottom: 0.5rem;
          font-style: italic;
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          overflow: hidden;
          background: var(--background);
          font-size: 0.875rem;
        }
        
        .comparison-table th,
        .comparison-table td {
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          text-align: left;
          vertical-align: top;
        }
        
        .comparison-table th {
          background: var(--secondary);
          color: var(--secondary-foreground);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        .comparison-table td {
          background: var(--background);
          color: var(--foreground);
        }
        
        .comparison-table tbody tr:nth-child(even) td {
          background: var(--muted);
        }
        
        .comparison-table tbody tr:hover td {
          background: var(--secondary);
          transition: background-color 0.2s ease;
        }
        
        /* Highlighted column styling (DreamState blue accent) */
        .comparison-table th.highlighted-column {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
          color: #ffffff !important;
          font-weight: 600 !important;
        }
        
        .comparison-table td.highlighted-column {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%) !important;
          color: #1e40af !important;
          font-weight: 500 !important;
        }
        
        .comparison-table tbody tr:nth-child(even) td.highlighted-column {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%) !important;
          color: #1e40af !important;
        }
        
        .comparison-table tbody tr:hover td.highlighted-column {
          background: linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%) !important;
          color: #1e40af !important;
          transition: background-color 0.2s ease !important;
        }
        
        /* Dark mode styling */
        :global(.dark) .comparison-table th.highlighted-column {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%) !important;
          color: #ffffff !important;
        }
        
        :global(.dark) .comparison-table td.highlighted-column {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%) !important;
          color: #dbeafe !important;
        }
        
        :global(.dark) .comparison-table tbody tr:nth-child(even) td.highlighted-column {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%) !important;
          color: #dbeafe !important;
        }
        
        :global(.dark) .comparison-table tbody tr:hover td.highlighted-column {
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%) !important;
          color: #dbeafe !important;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .comparison-table {
            font-size: 0.75rem;
          }
          
          .comparison-table th,
          .comparison-table td {
            padding: 0.5rem 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}

/**
 * Pre-configured comparison table for BANT vs DreamState with default data
 */
export function BANTvsDreamStateTable() {
  return (
    <div className="comparison-table-container my-6">
      <div className="overflow-x-auto">
        <table className="comparison-table w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold bg-gray-50 dark:bg-gray-800">
                Traditional BANT
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold highlighted-column bg-blue-50 dark:bg-blue-900/20">
                DreamState Selling
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                <strong>Focus:</strong> Information gathering
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 highlighted-column bg-blue-50 dark:bg-blue-900/20">
                <strong>Focus:</strong> Experience creation
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                <strong>Approach:</strong> Seller-centric qualification
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 highlighted-column bg-blue-50 dark:bg-blue-900/20">
                <strong>Approach:</strong> Buyer-centric psychology
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                <strong>Goal:</strong> Verify prospect readiness
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 highlighted-column bg-blue-50 dark:bg-blue-900/20">
                <strong>Goal:</strong> Generate emotional investment
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                <strong>Timeline:</strong> Present circumstances
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 highlighted-column bg-blue-50 dark:bg-blue-900/20">
                <strong>Timeline:</strong> Past success to Future vision
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                <strong>Authority:</strong> Seek decision-makers
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 highlighted-column bg-blue-50 dark:bg-blue-900/20">
                <strong>Authority:</strong> Establish expert positioning
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                <strong>Outcome:</strong> Logical justification
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 highlighted-column bg-blue-50 dark:bg-blue-900/20">
                <strong>Outcome:</strong> Emotional commitment
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
