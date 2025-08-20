import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Article, ArticleMetadata, Author } from './articles-types'

const ARTICLES_PATH = path.join(process.cwd(), 'content/articles')

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(ARTICLES_PATH)) {
    return []
  }

  const articleDirs = fs.readdirSync(ARTICLES_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const articles: Article[] = []

  for (const dir of articleDirs) {
    const articlePath = path.join(ARTICLES_PATH, dir, 'index.mdx')
    
    if (fs.existsSync(articlePath)) {
      const fileContent = fs.readFileSync(articlePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      // Skip draft articles
      if (data.draft) continue
      
      const article: Article = {
        id: dir,
        metadata: data as ArticleMetadata,
        content,
        readingTime: calculateReadingTime(content)
      }
      
      articles.push(article)
    }
  }

  // Sort by date (newest first)
  return articles.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
}

export async function getArticleById(id: string): Promise<Article | null> {
  const articlePath = path.join(ARTICLES_PATH, id, 'index.mdx')
  
  if (!fs.existsSync(articlePath)) {
    return null
  }

  const fileContent = fs.readFileSync(articlePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    id,
    metadata: data as ArticleMetadata,
    content,
    readingTime: calculateReadingTime(content)
  }
}

export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter(article => 
    article.metadata.tags?.includes(tag)
  )
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const allArticles = await getAllArticles()
  const tagCounts = new Map<string, number>()
  
  allArticles.forEach(article => {
    article.metadata.tags?.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export function groupArticlesByYear(articles: Article[]): Record<string, Article[]> {
  return articles.reduce((acc: Record<string, Article[]>, article) => {
    const year = new Date(article.metadata.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(article)
    return acc
  }, {})
}

export async function getRecentArticles(count: number = 5): Promise<Article[]> {
  const allArticles = await getAllArticles()
  return allArticles.slice(0, count)
}

export interface TOCHeading {
  id: string
  text: string
  level: number
}

export function extractHeadingsFromMDX(content: string): TOCHeading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: TOCHeading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    headings.push({
      id,
      text,
      level
    })
  }

  return headings
}
