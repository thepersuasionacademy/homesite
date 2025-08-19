import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - The Persuasion Academy',
  description: 'Professional consulting, training, and coaching services in influence, persuasion, and strategic communication. Work directly with our experts to transform your business and personal effectiveness.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
