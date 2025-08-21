'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Article } from '../../_lib/articles-types'
import { OptimizedArticleCardImage } from '../optimized-image'

interface ArticleCardProps {
  article: Article
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function FallbackBanner({ title }: { title: string }) {
  return (
    <div 
      className="article-card-fallback-banner bg-black dark:bg-white text-white dark:text-black"
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '288px',
        height: '151px',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '16px',
        textAlign: 'center',
        lineHeight: '1.2'
      }}
    >
      {title}
    </div>
  )
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false)
  const formattedDate = formatDate(article.metadata.date)

  return (
    <Link href={`/articles/${article.id}`} className="article-card">
      <div className="article-card-content">
        <div className="article-card-image">
          {article.metadata.image && !imageError ? (
            <OptimizedArticleCardImage
              src={article.metadata.image}
              alt={article.metadata.title}
              articleId={article.id}
            />
          ) : (
            <FallbackBanner 
              title={article.metadata.title} 
            />
          )}
        </div>

        <div className="article-card-body">
          <h3 className="article-card-title">
            {article.metadata.title}
          </h3>
          <p className="article-card-description">
            {article.metadata.description}
          </p>

          <div className="article-card-meta">
            {article.metadata.authors && article.metadata.authors.length > 0 && (
              <>
                <span>By {article.metadata.authors.join(', ')}</span>
                <div className="article-card-separator" />
              </>
            )}
            <span>{formattedDate}</span>
            <div className="article-card-separator" />
            <span>{article.readingTime}</span>
          </div>

          {article.metadata.tags && (
            <div className="article-card-tags">
              {article.metadata.tags.map((tag) => (
                <span key={tag} className="article-card-tag">
                  <span className="article-card-tag-hash">#</span>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
