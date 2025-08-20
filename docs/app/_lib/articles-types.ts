export interface ArticleMetadata {
  title: string
  description: string
  date: string
  tags?: string[]
  image?: string
  authors?: string[]
  category?: string
  draft?: boolean
}

export interface Article {
  id: string
  metadata: ArticleMetadata
  content: string
  readingTime: string
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio?: string
  website?: string
  twitter?: string
  github?: string
}
