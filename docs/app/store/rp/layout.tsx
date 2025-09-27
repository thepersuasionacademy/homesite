import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renegade Persuaders: The Master Collection - The Power Ark',
  description: 'Where influence becomes instinct from the inside out. 20 deep dives into the art of invisible authority. Master ethical persuasion through authentic connection and natural charisma.',
  keywords: 'invisible authority, natural influence, presence mastery, Kenrick Cleveland, renegade persuaders, quiet leadership, authentic influence, personal transformation, way of being',
  openGraph: {
    title: 'You Move Through The World With Invisible Authority',
    description: 'Transform how you show up in the world. Lead by presence, influence through depth, and command respect through the quiet mastery of your own authority.',
    images: ['https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg'],
  },
}

export default function RenegadePersuadersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Critical resource hints */}
      <link rel="preconnect" href="https://thepersuasionacademycdn.b-cdn.net" />
      
      {/* Critical CSS for above-the-fold content */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .section-padding { 
            padding-left: 1rem; 
            padding-right: 1rem; 
          }
          .animate-float { 
            animation: float 6s ease-in-out infinite; 
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .blur-3xl { 
            filter: blur(64px); 
          }
          .backdrop-blur-sm { 
            backdrop-filter: blur(4px); 
          }
          @media (min-width: 640px) {
            .section-padding { 
              padding-left: 2rem; 
              padding-right: 2rem; 
            }
          }
          @media (min-width: 1024px) {
            .section-padding { 
              padding-left: 3rem; 
              padding-right: 3rem; 
            }
          }
          @media (min-width: 1280px) {
            .section-padding { 
              padding-left: 4rem; 
              padding-right: 4rem; 
            }
          }
        `
      }} />
      
      {children}
    </>
  )
} 
