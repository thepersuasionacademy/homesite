import Image from 'next/image'
import type { Article } from '../../_lib/articles-types'

interface ArticleHeaderProps {
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

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const formattedDate = formatDate(article.metadata.date)

  return (
    <>
      {/* Banner Image - Full Width */}
      {article.metadata.image && (
        <div className="col-span-full mx-auto w-full max-w-5xl mb-8">
          <Image
            src={`/content/articles/${article.id}/${article.metadata.image.replace('./', '')}`}
            alt={article.metadata.title}
            width={1200}
            height={630}
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>
      )}

      {/* Article Header - Centered */}
      <section className="col-start-2 flex flex-col gap-y-6 text-center mb-8">
        <div className="flex flex-col">
          <h1 
            className="mb-2 scroll-mt-31 text-3xl leading-tight font-medium sm:text-4xl" 
            id="post-title"
            style={{ color: 'var(--foreground)' }}
          >
            {article.metadata.title}
          </h1>

          <div 
            className="divide-border mb-4 flex flex-col items-center justify-center divide-y text-xs sm:flex-row sm:flex-wrap sm:divide-x sm:divide-y-0 sm:text-sm"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {article.metadata.authors && article.metadata.authors.length > 0 && (
              <div className="flex w-full items-center justify-center gap-x-2 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0">
                <span>By {article.metadata.authors.join(', ')}</span>
              </div>
            )}

            <div className="flex w-full items-center justify-center gap-1 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0">
              <span>{formattedDate}</span>
            </div>

            <div className="flex w-full items-center justify-center gap-1 py-2 sm:w-fit sm:px-2 sm:py-0 first:sm:pl-0 last:sm:pr-0">
              <span>{article.readingTime}</span>
            </div>
          </div>

          {article.metadata.tags && article.metadata.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {article.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded border"
                  style={{ 
                    background: 'var(--secondary)',
                    color: 'var(--secondary-foreground)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <span style={{ color: 'var(--muted-foreground)' }}>#</span>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}