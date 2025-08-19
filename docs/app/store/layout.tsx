import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store - The Persuasion Academy',
  description: 'Discover powerful training programs and resources to master influence, persuasion, and charisma. From Renegade Persuaders to DreamState Selling - transform your ability to connect and influence.',
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
