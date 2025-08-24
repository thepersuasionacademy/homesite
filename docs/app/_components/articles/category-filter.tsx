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
      <div className="category-filter flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
        <button
          onClick={() => onCategoryChange('All')}
          data-active={selectedCategory === 'All'}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150"
        >
          All Articles
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            data-active={selectedCategory === category}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
