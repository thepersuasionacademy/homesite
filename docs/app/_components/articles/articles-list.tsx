'use client'

import { useState } from 'react'
import { ArticleCard } from './article-card'
import { CategoryFilter } from './category-filter'
import type { Article } from '../../_lib/articles-types'

function groupArticlesByYear(articles: Article[]): Record<string, Article[]> {
  return articles.reduce((acc: Record<string, Article[]>, article) => {
    const year = new Date(article.metadata.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(article)
    return acc
  }, {})
}

interface ArticlesListProps {
  articles: Article[]
  categories: string[]
}

export function ArticlesList({ articles, categories }: ArticlesListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter articles by category and search query
  const filteredArticles = articles.filter(article => {
    // Category filter
    const categoryMatch = selectedCategory === 'All' || article.metadata.category === selectedCategory
    
    // Search filter
    if (!searchQuery.trim()) {
      return categoryMatch
    }
    
    const query = searchQuery.toLowerCase()
    const titleMatch = article.metadata.title.toLowerCase().includes(query)
    const descriptionMatch = article.metadata.description?.toLowerCase().includes(query)
    const tagsMatch = article.metadata.tags?.some(tag => 
      tag.toLowerCase().includes(query)
    )
    
    return categoryMatch && (titleMatch || descriptionMatch || tagsMatch)
  })

  if (articles.length === 0) {
    return (
      <div className="articles-empty">
        <h2 className="articles-empty-title">No articles yet</h2>
        <p className="articles-empty-description">
          Check back soon for new content!
        </p>
      </div>
    )
  }

  const articlesByYear = groupArticlesByYear(filteredArticles)
  const years = Object.keys(articlesByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="flex min-h-[calc(100vh-18rem)] flex-col">
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Search Bar */}
      <div className="mb-6 articles-search-container">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="articles-search-input"
          />
          <div className="articles-search-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="articles-search-clear"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Search Results Counter */}
      {searchQuery && filteredArticles.length > 0 && (
        <div className="articles-search-results mb-6">
          <p>
            Found {filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'} matching "{searchQuery}"
          </p>
        </div>
      )}
      
      {filteredArticles.length === 0 ? (
        <div className="articles-empty">
          <h2 className="articles-empty-title">
            {searchQuery ? 'No articles found' : 'No articles in this category'}
          </h2>
          <p className="articles-empty-description">
            {searchQuery 
              ? `No articles match "${searchQuery}". Try a different search term or clear the search to see all articles.`
              : 'Try selecting a different category or check back soon for new content!'
            }
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Clear Search
            </button>
          )}
        </div>
      ) : (
        <>
          {years.map((year) => (
            <section key={year} className="articles-year-section">
              <div className="articles-year-title">{year}</div>
              <ul className="articles-list">
                {(articlesByYear[year] || []).map((article) => (
                  <li key={article.id}>
                    <ArticleCard article={article} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  )
}