'use client'

import { OptimizedArticleBanner } from '../optimized-image'
import { useState } from 'react'

function FallbackBanner({ title }: { title: string }) {
  return (
    <div 
      className="col-span-full mx-auto w-full max-w-5xl rounded-lg flex items-center justify-center bg-black dark:bg-white text-white dark:text-black"
      style={{ 
        height: '315px', // Half of 630px to maintain aspect ratio
        fontSize: '32px',
        fontWeight: 'bold',
        padding: '32px',
        textAlign: 'center',
        lineHeight: '1.2'
      }}
    >
      {title}
    </div>
  )
}

interface ArticleBannerProps {
  articleId: string
  imagePath?: string
  title: string
}

export function ArticleBanner({ articleId, imagePath, title }: ArticleBannerProps) {
  const [imageError, setImageError] = useState(false)

  if (!imagePath || imageError) {
    return <FallbackBanner title={title} />
  }

  return (
    <OptimizedArticleBanner
      src={imagePath}
      alt={title}
      articleId={articleId}
    />
  )
}
