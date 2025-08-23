'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="category-filter flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
        <button
          onClick={() => onCategoryChange('All')}
          data-active={selectedCategory === 'All'}
          className={`
            px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 
            border-2 shadow-sm hover:shadow-md active:scale-95
            ${selectedCategory === 'All' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-blue-200/50 dark:shadow-blue-900/30' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:border-gray-500'
            }
          `}
          style={{
            ...(selectedCategory === 'All' && {
              boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'
            })
          }}
        >
          ✨ All Articles
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            data-active={selectedCategory === category}
            className={`
              px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 
              border-2 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-blue-200/50 dark:shadow-blue-900/30' 
                : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:border-gray-500'
              }
            `}
            style={{
              ...(selectedCategory === category && {
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)'
              })
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
