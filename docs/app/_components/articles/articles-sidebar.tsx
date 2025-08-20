import Link from 'next/link'
import type { Article } from '../../_lib/articles-types'

interface ArticlesSidebarProps {
  currentArticleId: string
  relatedArticles: Article[]
}

export function ArticlesSidebar({ currentArticleId, relatedArticles }: ArticlesSidebarProps) {
  const otherArticles = relatedArticles.filter(article => article.id !== currentArticleId)
  
  if (otherArticles.length === 0) {
    return null
  }

  return (
    <div className="articles-sidebar sticky top-20 col-start-3 row-span-1 mr-auto ml-8 hidden h-[calc(100vh-5rem)] max-w-md xl:block">
      <div className="flex max-h-[calc(100vh-8rem)] flex-col overflow-y-auto">
        <div className="px-4">
          <ul className="space-y-1">
            {/* Current Article */}
            <li>
              <div 
                className="flex items-center gap-2 rounded-md py-1.5 pr-3 pl-2 text-sm font-medium"
                style={{ 
                  background: 'var(--muted)',
                  color: 'var(--foreground)'
                }}
              >
                <div className="flex flex-col">
                  <span className="line-clamp-2 text-pretty">
                    Current Article
                  </span>
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    You are here
                  </span>
                </div>
              </div>
            </li>

            {/* Related Articles */}
            {otherArticles.length > 0 && (
              <li className="ml-4 space-y-1">
                {otherArticles.slice(0, 4).map((article) => (
                  <Link
                    key={article.id}
                    href={`/articles/${article.id}`}
                    className="subposts-sidebar-link flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-pretty transition-colors hover:text-foreground hover:bg-muted/50"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <div className="flex flex-col">
                      <span className="line-clamp-2 text-pretty">
                        {article.metadata.title}
                      </span>
                      <span className="text-muted-foreground/80 text-xs">
                        {article.readingTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
