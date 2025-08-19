import { Metadata } from 'next'
import RenegadePersuadersPage from './client'

export const metadata: Metadata = {
  title: 'Renegade Persuaders: The Master Collection - The Persuasion Academy',
  description: 'Where influence becomes instinct from the inside out. 20 deep dives into the art of invisible authority. Master ethical persuasion through authentic connection and natural charisma.',
}

export default function Page() {
  return <RenegadePersuadersPage />
} 
