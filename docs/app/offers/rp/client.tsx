'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RenegadePersuadersPage = () => {
  const [expandedEditions, setExpandedEditions] = useState(new Set([1]))
  const containerRef = useRef<HTMLDivElement>(null)

  // This page is theme-agnostic - no theme management needed

  const layoutMasonry = () => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const items = Array.from(container.children) as HTMLElement[]
    const gap = 32 // 2rem = 32px
    
    // Get number of columns based on screen width
    const containerWidth = container.offsetWidth
    let columns = 3 // Always 3 on desktop
    if (containerWidth < 1024) columns = 2 // 2 on tablet
    if (containerWidth < 768) columns = 1 // 1 on mobile
    
    const columnWidth = (containerWidth - (gap * (columns - 1))) / columns
    const columnHeights = new Array(columns).fill(0)
    
    items.forEach((item, index) => {
      // Reset item position
      item.style.position = 'absolute'
      item.style.width = `${columnWidth}px`
      
      // Keep items in original order - calculate column based on index
      const column = index % columns
      
      // Position item in its designated column
      const x = column * (columnWidth + gap)
      const y = columnHeights[column]
      
      item.style.left = `${x}px`
      item.style.top = `${y}px`
      item.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      
      // Update this column's height
      columnHeights[column] += item.offsetHeight + gap
    })
    
    // Smooth container height transition
    const newHeight = Math.max(...columnHeights)
    container.style.transition = 'height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    container.style.height = `${newHeight}px`
  }

  useEffect(() => {
    layoutMasonry()
    
    const handleResize = () => layoutMasonry()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [expandedEditions])

  useEffect(() => {
    // Continuous layout updates during animation
    const timers = [
      setTimeout(layoutMasonry, 10),
      setTimeout(layoutMasonry, 100),
      setTimeout(layoutMasonry, 200),
      setTimeout(layoutMasonry, 350)
    ]
    return () => timers.forEach(clearTimeout)
  }, [expandedEditions])

  // Edition data with curiosity bullets
  const editions: Record<number, {
    title: string;
    image: string;
    bullets: string[];
  }> = {
    1: {
      title: "The Foundation of Invisible Authority",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%201.jpg",
      bullets: [
        "The secret frequency that makes people lean in when you speak",
        "Why your current presence might be working against you",
        "The 3-second shift that changes how others perceive your authority"
      ]
    },
    2: {
      title: "Reading the Unspoken Language",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%202.jpg",
      bullets: [
        "What people reveal in the first 7 seconds that most miss entirely",
        "The hidden emotional patterns that control every conversation",
        "How to see the 'invisible conversation' happening beneath the words"
      ]
    },
    3: {
      title: "The Art of Strategic Silence",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%203.jpg",
      bullets: [
        "Why the most powerful people say less, not more",
        "The pause that makes others reveal their true intentions",
        "How silence becomes your most persuasive tool"
      ]
    },
    4: {
      title: "Emotional Aikido Mastery",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%204.jpg",
      bullets: [
        "How to redirect resistance without creating more of it",
        "The ancient principle that turns objections into agreements",
        "Why fighting resistance makes you weaker, not stronger"
      ]
    },
    5: {
      title: "The Depth Advantage",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%205.jpg",
      bullets: [
        "How to speak to someone's core identity, not just their surface thoughts",
        "The layer most people never reach in conversation",
        "Why shallow influence fails and deep influence endures"
      ]
    },
    6: {
      title: "Invisible Frame Control",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%206.jpg",
      bullets: [
        "How to set the context without anyone noticing",
        "The frame that makes your ideas feel inevitable",
        "Why the person who controls the frame controls the outcome"
      ]
    },
    7: {
      title: "The Magnetism Protocol",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%207.jpg",
      bullets: [
        "What makes certain people naturally draw others toward them",
        "The energy signature that creates instant rapport",
        "How to become someone others want to be around"
      ]
    },
    8: {
      title: "Advanced Pattern Recognition",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%208.jpg",
      bullets: [
        "The behavioral loops that predict what someone will do next",
        "How to spot the patterns others are blind to",
        "Why pattern mastery is the ultimate influence advantage"
      ]
    },
    9: {
      title: "The Authenticity Paradox",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%209.jpg",
      bullets: [
        "How being 'more yourself' can actually decrease your influence",
        "The version of authenticity that creates magnetic attraction",
        "Why most people's idea of authenticity repels others"
      ]
    },
    10: {
      title: "Conversational Alchemy",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2010.jpg",
      bullets: [
        "How to transform any conversation into exactly what you need",
        "The subtle redirects that feel completely natural",
        "Why great persuaders never force the conversation"
      ]
    },
    11: {
      title: "The Authority Installation",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2011.jpg",
      bullets: [
        "How to install unshakeable authority in any context",
        "The difference between borrowed authority and owned authority",
        "Why some people command respect instantly"
      ]
    },
    12: {
      title: "Resistance Dissolution",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2012.jpg",
      bullets: [
        "The counterintuitive approach that melts resistance instantly",
        "Why addressing resistance directly makes it stronger",
        "How to make your ideas feel like their ideas"
      ]
    },
    13: {
      title: "The Influence Ecosystem",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2013.jpg",
      bullets: [
        "How to create an environment where influence happens naturally",
        "The invisible factors that make persuasion effortless",
        "Why context is more powerful than content"
      ]
    },
    14: {
      title: "Meta-Conversation Mastery",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2014.jpg",
      bullets: [
        "How to influence the conversation about the conversation",
        "The level where real decisions are actually made",
        "Why surface-level persuasion fails with sophisticated people"
      ]
    },
    15: {
      title: "The Certainty Transmission",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2015.png",
      bullets: [
        "How to transfer your certainty to others without words",
        "The frequency of unshakeable confidence",
        "Why your internal state determines their external response"
      ]
    },
    16: {
      title: "Advanced Rapport Architecture",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2016.png",
      bullets: [
        "The deeper levels of connection most never access",
        "How to create rapport that transcends surface similarities",
        "Why traditional rapport techniques feel manipulative"
      ]
    },
    17: {
      title: "The Influence Integration",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2017%20Cover.png",
      bullets: [
        "How to weave all techniques into one seamless approach",
        "The master pattern that makes everything else work",
        "Why integration is more powerful than accumulation"
      ]
    },
    18: {
      title: "Presence Amplification",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2018.png",
      bullets: [
        "How to expand your presence to fill any room",
        "The energy field that makes others notice you immediately",
        "Why some people are felt before they're seen"
      ]
    },
    19: {
      title: "The Mastery Mindset",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2019.png",
      bullets: [
        "How masters think differently about influence",
        "The perspective shift that makes everything easier",
        "Why technique without mindset is just manipulation"
      ]
    },
    20: {
      title: "Living as a Renegade Persuader",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2020.png",
      bullets: [
        "How to integrate everything into your daily life",
        "The identity shift that makes influence automatic",
        "Why this becomes who you are, not what you do"
      ]
    }
  }

  return (
    <>
      <style jsx global>{`
        .brain-glow {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
        }

        /* Subtle metallic effects */
        .metallic-gradient {
          background: linear-gradient(135deg, 
            #334155 0%, 
            #475569 50%, 
            #334155 100%
          );
          position: relative;
        }

        /* Metallic background texture */
        .metallic-background {
          background: 
            linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 25%, 
              #334155 50%, 
              #1e293b 75%, 
              #0f172a 100%
            );
          position: relative;
        }

        .metallic-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(45deg, transparent 40%, rgba(148, 163, 184, 0.03) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(148, 163, 184, 0.02) 50%, transparent 60%);
          background-size: 60px 60px, 80px 80px;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
      
             <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0c0e15', color: '#ffffff' }}>
        {/* Clean Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(168, 85, 247, 0.05)' }}></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 pt-8">
            
            {/* Centered Content */}
            <div className="text-center mb-8">
              <div className="inline-block backdrop-blur-md rounded-full px-8 py-4 mb-6 shadow-2xl" style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', borderColor: 'rgba(71, 85, 105, 0.6)', borderWidth: '1px', boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.5)' }}>
                <p className="text-lg font-medium tracking-wide" style={{ color: '#e2e8f0' }}>
                  "You command influence differently than most people..."
                </p>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-8 leading-none tracking-tight">
                <span className="font-bold text-white drop-shadow-2xl" style={{ 
                  textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.1)' 
                }}>
                  Renegade Persuaders
                </span>
                <br />
                <span className="font-thin drop-shadow-lg" style={{ 
                  color: '#94a3b8',
                  textShadow: '0 2px 4px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.3)' 
                }}>
                  The Master Collection
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl font-light mb-4 max-w-4xl mx-auto leading-relaxed" style={{ color: '#d1d5db' }}>
                A journey into the deepest levels of influence mastery.
              </p>
            </div>

            {/* Video */}
            <div className="max-w-5xl mx-auto relative z-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#1f2937' }}>
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://iframe.mediadelivery.net/embed/376899/9d7cbdcf-8a8b-40f2-a488-c8ea8b046092"
                    className="absolute top-0 left-0 w-full h-full"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    title="Renegade Persuaders Master Collection"
                    style={{ border: 'none', position: 'absolute', zIndex: 30 }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Edition Cards - Store Style */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-6 tracking-tight" style={{ color: '#ffffff' }}>Explore the Editions</h2>
              <p className="text-xl font-light" style={{ color: '#9ca3af' }}>20 transformational journeys into invisible authority</p>
            </div>

            <div 
              ref={containerRef}
              className="relative transition-all duration-400 ease-out"
              style={{ 
                minHeight: '400px',
                willChange: 'height'
              }}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                const edition = editions[num];
                if (!edition) return null;
                
                return (
                <div
                  key={num}
                  className="rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out"
                  style={{ backgroundColor: '#ffffff', borderColor: '#d1d5db', borderWidth: '1px' }}
                >
                  {/* Photo Section */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '760/420', background: 'linear-gradient(to bottom right, #1e293b, #334155, #0f172a)' }}>
                    <img 
                      src={edition.image} 
                      alt={`Renegade Persuaders Edition ${num}: ${edition.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold" style={{ color: '#000000' }}>
                        Edition {num}
                      </h3>
                      <p className="text-base font-normal" style={{ color: '#374151' }}>
                        {edition.title}
                      </p>
                    </div>
                    
                    <p className="text-base mb-4 leading-relaxed" style={{ color: '#4b5563' }}>
                      Discover the secrets and techniques that will transform your approach to influence and authority.
                    </p>
                    
                    {/* FAQ-style Dropdown */}
                    <div className="space-y-2 mb-6">
                      <div className="rounded-lg" style={{ borderColor: '#d1d5db', borderWidth: '1px' }}>
                        <button
                          onClick={() => {
                            const newExpanded = new Set(expandedEditions)
                            if (newExpanded.has(num)) {
                              newExpanded.delete(num)
                            } else {
                              newExpanded.add(num)
                            }
                            setExpandedEditions(newExpanded)
                            
                            // Immediate layout update
                            setTimeout(layoutMasonry, 50)
                            // Follow-up layouts during animation
                            setTimeout(layoutMasonry, 150)
                            setTimeout(layoutMasonry, 250)
                          }}
                          className="w-full flex items-center justify-between p-3 text-left transition-colors"
                          style={{ backgroundColor: 'transparent' }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#f3f4f6'}
                          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}
                        >
                          <span className="font-medium" style={{ color: '#000000' }}>What You'll Discover</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              expandedEditions.has(num) ? 'rotate-180' : ''
                            }`}
                            style={{ color: '#4b5563' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {expandedEditions.has(num) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-3 pb-3">
                                <div className="space-y-2">
                                  {edition.bullets.map((bullet, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                      <span className="text-base" style={{ color: '#4b5563' }}>•</span>
                                      <span className="text-sm leading-relaxed" style={{ color: '#374151' }}>{bullet}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    

                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md p-4" style={{ backgroundColor: '#0c0e15', borderTopColor: 'rgba(255, 255, 255, 0.1)', borderTopWidth: '1px' }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Monthly Option */}
              <a href="https://pay.thepersuasionacademy.com/b/eVqfZg1Sp7E81JE05ZcAo0a" className="rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] group block flex items-center justify-between" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderColor: 'rgba(71, 85, 105, 0.5)', borderWidth: '1px' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(51, 65, 85, 0.5)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'}>
                <div>
                  <div className="text-lg font-bold text-white">ONE PER MONTH</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white mb-1">$97</div>
                  <div className="text-sm" style={{ color: '#cbd5e1' }}>Monthly</div>
                </div>
              </a>

              {/* One-Time Option */}
              <a href="https://pay.thepersuasionacademy.com/b/bJe4gydB7bUogEy7yrcAo09" className="rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] group block flex items-center justify-between" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderColor: '#ffffff', borderWidth: '2px' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(51, 65, 85, 0.5)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'}>
                <div>
                  <div className="text-lg font-bold text-white">FULL ACCESS</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white mb-1">$997</div>
                  <div className="text-sm" style={{ color: '#cbd5e1' }}>One Time Payment</div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default RenegadePersuadersPage