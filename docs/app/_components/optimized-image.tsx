'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  loading?: 'lazy' | 'eager'
  quality?: number
}

/**
 * Optimized Image Component with performance best practices
 * - Lazy loading with intersection observer
 * - Proper sizing and aspect ratio
 * - WebP/AVIF format support
 * - Blur placeholder for better UX
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw',
  placeholder = 'empty',
  blurDataURL,
  loading = 'lazy',
  quality = 85
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Generate blur placeholder if not provided
  const generateBlurDataURL = (width: number, height: number) => {
    if (typeof document === 'undefined') {
      // Return a simple base64 placeholder for SSR
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo='
    }
    
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, width, height)
    }
    return canvas.toDataURL()
  }

  useEffect(() => {
    if (!priority && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsLoaded(true)
              observer.unobserve(entry.target)
            }
          })
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      )

      observer.observe(imgRef.current)

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current)
        }
      }
    }
  }, [priority])

  // Optimize image URL for CDN
  const optimizeImageUrl = (url: string, width?: number, quality?: number) => {
    if (url.includes('thepersuasionacademycdn.b-cdn.net')) {
      const params = new URLSearchParams()
      if (width) params.append('width', width.toString())
      if (quality) params.append('quality', quality.toString())
      params.append('format', 'webp')
      
      return `${url}?${params.toString()}`
    }
    return url
  }

  const optimizedSrc = optimizeImageUrl(src, width, quality)

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {(priority || isLoaded) && (
        <Image
          src={optimizedSrc}
          alt={alt}
          width={width || 0}
          height={height || 0}
          sizes={sizes}
          priority={priority}
          {...(priority && { fetchPriority: 'high' as any })}
          {...(!priority && { loading })}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined)}
          className="transition-opacity duration-300"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      
      {!priority && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          style={{ 
            width: width || '100%', 
            height: height || 200,
            aspectRatio: width && height ? `${width}/${height}` : 'auto'
          }}
        />
      )}
    </div>
  )
}

/**
 * Article Banner Image with optimizations
 */
export function OptimizedArticleBanner({ 
  src, 
  alt, 
  articleId 
}: { 
  src: string
  alt: string
  articleId: string
}) {
  // Check if it's an external URL or local image
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://')
  const imageSrc = isExternalUrl 
    ? src 
    : `/content/articles/${articleId}/${src.replace('./', '')}`

  return (
    <div className="col-span-full mx-auto w-full max-w-3xl mb-8">
      <OptimizedImage
        src={imageSrc}
        alt={alt}
        width={1200}
        height={630}
        priority={true}
        className="w-full h-auto object-contain rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        quality={90}
        placeholder="blur"
      />
    </div>
  )
}

/**
 * Article Card Image with lazy loading
 */
export function OptimizedArticleCardImage({ 
  src, 
  alt, 
  articleId 
}: { 
  src: string
  alt: string
  articleId: string
}) {
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://')
  const imageSrc = isExternalUrl 
    ? src 
    : `/content/articles/${articleId}/${src.replace('./', '')}`

  return (
    <OptimizedImage
      src={imageSrc}
      alt={alt}
      width={288}
      height={151}
      className="object-cover rounded-t-lg"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
      quality={80}
      loading="lazy"
    />
  )
}
