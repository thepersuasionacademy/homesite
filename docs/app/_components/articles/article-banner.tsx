'use client'

import Image from 'next/image'
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

  // Check if imagePath is a full URL (starts with http:// or https://)
  const isExternalUrl = imagePath.startsWith('http://') || imagePath.startsWith('https://')
  const imageSrc = isExternalUrl 
    ? imagePath 
    : `/content/articles/${articleId}/${imagePath.replace('./', '')}`

  return (
    <div className="col-span-full mx-auto w-full max-w-3xl">
      <Image
        src={imageSrc}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-contain rounded-lg"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  )
}
