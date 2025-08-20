import Link from 'next/link'
import type { Article } from '../../_lib/articles-types'

interface ArticleNavigationProps {
  previousArticle: Article | null
  nextArticle: Article | null
}

export function ArticleNavigation({ previousArticle, nextArticle }: ArticleNavigationProps) {
  if (!previousArticle && !nextArticle) {
    return null
  }

  return (
    <nav className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
      {/* Previous Article */}
      <Link
        href={previousArticle ? `/articles/${previousArticle.id}` : '#'}
        className={`
          nav-button group flex items-center justify-start size-full rounded-lg border px-4 py-3 transition-all font-medium text-sm
          ${previousArticle 
            ? '' 
            : 'pointer-events-none opacity-50 cursor-not-allowed'
          }
        `}
        aria-disabled={!previousArticle}
      >
        <span className="mr-2 text-base transition-transform group-hover:-translate-x-1">←</span>
        <div className="flex flex-col items-start overflow-hidden text-wrap">
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            Previous Post
          </span>
          <span className="w-full text-left text-sm text-balance text-ellipsis">
            {previousArticle?.metadata.title || "You're at the oldest post!"}
          </span>
        </div>
      </Link>

      {/* Next Article */}
      <Link
        href={nextArticle ? `/articles/${nextArticle.id}` : '#'}
        className={`
          nav-button group flex items-center justify-end size-full rounded-lg border px-4 py-3 transition-all font-medium text-sm
          ${nextArticle 
            ? '' 
            : 'pointer-events-none opacity-50 cursor-not-allowed'
          }
        `}
        aria-disabled={!nextArticle}
      >
        <div className="flex flex-col items-end overflow-hidden text-wrap">
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            Next Post
          </span>
          <span className="w-full text-right text-sm text-balance text-ellipsis">
            {nextArticle?.metadata.title || "You're at the newest post!"}
          </span>
        </div>
        <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </nav>
  )
}