'use client'

import { useEffect } from 'react'

export function DreamStateHighlighter() {
  useEffect(() => {
    const highlightDreamStateColumns = () => {
      // Find all tables in the article content
      const articleContent = document.querySelector('.article-content')
      if (!articleContent) return

      const tables = articleContent.querySelectorAll('table')
      
      tables.forEach((table) => {
        // Find header row to identify DreamState columns
        const headerRow = table.querySelector('thead tr, tr:first-child')
        if (!headerRow) return

        const headers = headerRow.querySelectorAll('th, td')
        const dreamStateColumns: number[] = []

        // Identify which columns contain DreamState in their headers
        headers.forEach((header, index) => {
          const headerText = header.textContent || ''
          if (headerText.toLowerCase().includes('dreamstate')) {
            dreamStateColumns.push(index)
          }
        })

        // If we found DreamState columns, highlight all cells in those columns
        if (dreamStateColumns.length > 0) {
          const allRows = table.querySelectorAll('tr')
          
          allRows.forEach((row) => {
            const cells = row.querySelectorAll('th, td')
            dreamStateColumns.forEach((columnIndex) => {
              const cell = cells[columnIndex]
              if (cell) {
                cell.classList.add('dreamstate-cell')
              }
            })
          })
        }
      })
    }

    // Run immediately
    highlightDreamStateColumns()

    // Also run after a short delay to catch dynamically rendered content
    const timer = setTimeout(highlightDreamStateColumns, 100)

    return () => clearTimeout(timer)
  }, [])

  return null // This component doesn't render anything visible
}
