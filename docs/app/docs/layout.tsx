import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - The Persuasion Academy',
  description: 'Comprehensive guides, frameworks, and resources for mastering influence and persuasion. Access detailed documentation on psychological principles, communication strategies, and practical applications.',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
