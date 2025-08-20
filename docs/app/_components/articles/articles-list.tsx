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

  // Filter articles by category
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.metadata.category === selectedCategory)

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
      
      {filteredArticles.length === 0 ? (
        <div className="articles-empty">
          <h2 className="articles-empty-title">No articles in this category</h2>
          <p className="articles-empty-description">
            Try selecting a different category or check back soon for new content!
          </p>
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