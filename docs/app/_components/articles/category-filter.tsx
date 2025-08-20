'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="">
      <div className="category-filter flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => onCategoryChange('All')}
          data-active={selectedCategory === 'All'}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{
            backgroundColor: selectedCategory === 'All' ? '#3b82f6' : 'var(--secondary)',
            color: selectedCategory === 'All' ? '#ffffff' : 'var(--secondary-foreground)',
            border: selectedCategory === 'All' ? '1px solid #3b82f6' : '1px solid var(--border)',
          }}
        >
          All Articles
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            data-active={selectedCategory === category}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              backgroundColor: selectedCategory === category ? '#3b82f6' : 'var(--secondary)',
              color: selectedCategory === category ? '#ffffff' : 'var(--secondary-foreground)',
              border: selectedCategory === category ? '1px solid #3b82f6' : '1px solid var(--border)',
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
