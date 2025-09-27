import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conquering Confidence - The Power Ark',
  description: 'Rewrite the stories that hold you back and become unstoppable in 6 weeks. Stop fighting invisible barriers and start living with quiet, unshakeable confidence.',
}

export default function ConqueringConfidenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
