import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleById, getAllArticles, extractHeadingsFromMDX } from '../../_lib/articles-utils'
import { ArticleNavigation } from '../../_components/articles/article-navigation'
import { TOCSidebar } from '../../_components/articles/toc-sidebar'
import { ArticlesSidebar } from '../../_components/articles/articles-sidebar'
import { Breadcrumbs } from '../../_components/articles/breadcrumbs'
import { ArticleBanner } from '../../_components/articles/article-banner'
import { mdxComponents } from '../../_components/articles/mdx-components'
import '../articles.css'
import type { Article } from '../../_lib/articles-types'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const article = await getArticleById(id)
  
  if (!article) {
    notFound()
  }

  const allArticles = await getAllArticles()
  const currentIndex = allArticles.findIndex(a => a.id === article.id)
  const previousArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null
  
  // Extract headings for TOC
  const headings = extractHeadingsFromMDX(article.content)
  const formattedDate = formatDate(article.metadata.date)

  return (
    <div className="articles-container">
      <section className="grid grid-cols-[minmax(0px,1fr)_min(calc(var(--breakpoint-md)-2rem),100%)_minmax(0px,1fr)] gap-y-4">
        
        {/* Breadcrumbs */}
        <div className="col-start-2">
          <Breadcrumbs 
            items={[
              { href: '/articles', label: 'Articles', icon: 'library' },
              { href: `/articles/${article.id}`, label: article.metadata.title, icon: 'post' }
            ]}
          />
        </div>

        {/* Banner Image */}
        <ArticleBanner
          articleId={article.id}
          imagePath={article.metadata.image}
          title={article.metadata.title}
        />

        {/* Article Header */}
        <section className="col-start-2 flex flex-col gap-y-6 text-center">
          <div className="flex flex-col">
            <h1 
              className="mb-2 scroll-mt-31 text-3xl leading-tight font-medium sm:text-4xl" 
              id="post-title"
              style={{ color: 'var(--foreground)' }}
            >
              {article.metadata.title}
            </h1>

            <div 
              className="text-muted-foreground divide-border mb-4 flex flex-col items-center justify-center divide-y text-xs sm:flex-row sm:flex-wrap sm:divide-x sm:divide-y-0 sm:text-sm"
              style={{ 
                color: 'var(--muted-foreground)',
                borderColor: 'var(--border)'
              }}
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

          <ArticleNavigation 
            previousArticle={previousArticle}
            nextArticle={nextArticle}
          />
        </section>

        {/* Table of Contents Sidebar */}
        <TOCSidebar headings={headings} />

        {/* Main Content */}
        <article className="prose col-start-2 max-w-none article-content">
          <MDXRemote source={article.content} components={mdxComponents} />
        </article>

        {/* Related Articles Sidebar */}
        <ArticlesSidebar 
          currentArticleId={article.id}
          relatedArticles={allArticles}
        />

        {/* Bottom Navigation */}
        <div className="col-start-2">
          <ArticleNavigation 
            previousArticle={previousArticle}
            nextArticle={nextArticle}
          />
        </div>
        
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    id: article.id,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params
  const article = await getArticleById(id)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.metadata.title,
    description: article.metadata.description,
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.description,
      url: `https://thepersuasionacademy.com/articles/${article.id}`,
      type: 'article',
      images: article.metadata.image ? [`/content/articles/${article.id}/${article.metadata.image.replace('./', '')}`] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metadata.title,
      description: article.metadata.description,
      images: article.metadata.image ? [`/content/articles/${article.id}/${article.metadata.image.replace('./', '')}`] : [],
    },
  }
}