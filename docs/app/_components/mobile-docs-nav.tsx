'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from 'nextra-theme-docs'

interface NavItem {
  title: string
  href?: string
  items?: Record<string, NavItem | string>
}

interface DocsNavData {
  [key: string]: NavItem
}

const docsNavData: DocsNavData = {}

export const MobileDocsNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const pathname = usePathname()

  // Only show on docs-related paths (none exist now, so always return null)
  return null

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }))
  }

  const renderNavItems = (items: Record<string, NavItem | string>, basePath: string = '', level: number = 0) => {
    return Object.entries(items).map(([key, item]) => {
      if (typeof item === 'string') {
        const href = `${basePath}/${key}`
        const isActive = pathname === href
        return (
          <Link
            key={key}
            href={href}
            className={`block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${
              isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            } ${level > 0 ? 'ml-4' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        )
      }

      const sectionKey = `${basePath}-${key}`
      const isExpanded = expandedSections[sectionKey]
      const hasItems = item.items && Object.keys(item.items).length > 0

      return (
        <div key={key} className={level > 0 ? 'ml-4' : ''}>
          {item.href ? (
            <Link
              href={item.href}
              className={`block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${
                pathname === item.href ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ) : (
            <button
              onClick={() => hasItems && toggleSection(sectionKey)}
              className={`w-full text-left py-2 px-4 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-between ${
                !hasItems ? 'cursor-default' : ''
              }`}
            >
              {item.title}
              {hasItems && (
                <svg
                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          )}
          {hasItems && isExpanded && (
            <div className="mt-1 space-y-1">
              {renderNavItems(item.items!, `${basePath}/${key}`, level + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <>
      {/* Mobile Docs Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle docs navigation"
      >
        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Docs Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Docs Navigation Panel */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Documentation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Close navigation"
          >
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-full pb-20">
          <nav className="space-y-2">
            {Object.entries(docsNavData).map(([key, section]) => (
              <div key={key}>
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items && renderNavItems(section.items, `/${key === 'docs' ? 'docs' : key}`)}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
