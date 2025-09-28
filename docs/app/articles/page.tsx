import { ArticlesList } from '../_components/articles/articles-list'
import { getAllArticles } from '../_lib/articles-utils'
import './articles.css'

export default async function ArticlesPage() {
  const articles = await getAllArticles()
  
  // Define the categories based on actual content clusters
  const categories = [
    'Confidence & Mindset',
    'Negotiation Psychology', 
    'Influence & Communication',
    'Leadership & Executive Presence',
    'Sales & Persuasion'
  ]

  return (
    <div className="articles-container">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>
            Articles
          </h1>
          <p style={{ color: 'var(--muted-foreground)' }}>
            Thoughts, insights, and stories from our team.
          </p>
        </div>

        <ArticlesList articles={articles} categories={categories} />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Articles - The Power Ark',
  description: 'Thoughts, insights, and stories from our team.',
}
