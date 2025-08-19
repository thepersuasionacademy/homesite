'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RenegadePersuadersPage = () => {
  const [expandedEditions, setExpandedEditions] = useState(new Set([1]))
  const [expandedCores, setExpandedCores] = useState(new Set<string>())
  const containerRef = useRef<HTMLDivElement>(null)

  // This page is theme-agnostic - no theme management needed

  const getCorePrograms = (editionNum: number) => {
    const coreData: Record<number, {
      persuasion: string[];
      charisma: string[];
    }> = {
      1: {
        persuasion: [
          "Why clarity guides persuasion in the right direction",
          "How emotion becomes the main force that beats logic",
          "Creating an illusion of logic when statements don't make sense"
        ],
        charisma: [
          "How emotional triangles help you navigate complex relationships at work and home",
          "Identifying hidden dynamics in conflicts and reframing them to reduce stress",
          "Shifting focus from apparent issues to underlying values and motivations"
        ]
      },
      2: {
        persuasion: [
          "How frame control dramatically impacts any interaction outcome",
          "Why authority is the ultimate frame that beats everything else",
          "Why frames clash and how to handle frame battles elegantly"
        ],
        charisma: [
          "How birth order unconsciously shapes your persuasive style and blind spots",
          "Decoding someone's drives and preferences by uncovering their family role",
          "How unresolved family dynamics invisibly drain your persuasive power"
        ]
      },
      3: {
        persuasion: [
          "How a simple children's song holds the key to distraction in persuasion",
          "Strategically shifting time perspectives to short-circuit negativity",
          "Why tapping motivation makes any offer irresistible regardless of price"
        ],
        charisma: [
          "How exploring ancient genealogical roots enhances present persuasive power",
          "Why embodying your message beats pretending to be charismatic",
          "How slowing speech induces relaxation and receptivity in others"
        ]
      },
      4: {
        persuasion: [
          "Using simple words to guide thinking through presupposition power",
          "Layering presuppositions so influence feels natural and inevitable",
          "Why hammering prospects with presuppositions fails and what works instead"
        ],
        charisma: [
          "The hidden communication layer that unconsciously telegraphs your competence",
          "Reading between lines to decode what people really mean",
          "Why trying too hard to convince backfires and how to speak with effortless authority"
        ]
      },
      5: {
        persuasion: [
          "Harnessing ancient Norse rune wisdom to plot persuasive journeys that get more yesses",
          "Why contingency planning gives massive persuasive edge in today's destabilized world",
          "How even small white lies sabotage persuasive power and what works instead"
        ],
        charisma: [
          "Accessing flow state at will for effortless charisma and genius-level productivity",
          "The visualization secret top performers use for everlasting calm under pressure",
          "Leveraging your hunter brain to bypass mental chatter and tap primal clarity"
        ]
      },
      6: {
        persuasion: [
          "The secret weapon that stops critical thinking in its tracks and bypasses logic",
          "Wielding analogies like precision instruments to target exact points you need",
          "Why the most powerful analogies are often the most unusual ones"
        ],
        charisma: [
          "What really happens to your personality after age 30 and why it matters",
          "The crucial difference between externally and internally motivated identities",
          "Proactive state control and how it lets you lead the emotional dance"
        ]
      },
      7: {
        persuasion: [
          "The hidden power of focus and how strategic attention makes messages seem causal",
          "Why countering competition's arguments can backfire unless you know this distinction",
          "Crafting messages that spotlight mysteries to hijack prospect's imagination"
        ],
        charisma: [
          "Why the urge to change the world may sabotage your charismatic power",
          "The surprising reason trying to be liked often backfires completely",
          "The secret obsession of highly charismatic people that keeps them magnetic"
        ]
      },
      8: {
        persuasion: [
          "The surprising truth about rapport and why most people use it wrong",
          "How to sync with others on a deep level beyond mere imitation",
          "Gaining compliance by stepping into prospect's world and eliminating differences"
        ],
        charisma: [
          "Mind-bending parallels between universe mechanics and your charismatic power source",
          "Why calm surrender is actually the key to accessing your full potential",
          "Tapping into your core to radiate magnetic presence that draws others effortlessly"
        ]
      },
      9: {
        persuasion: [
          "The secret to unlocking deepest motivations with one simple powerful question",
          "How to identify if someone is driven by end result or process",
          "Building instant rapport by matching person's internal or external frame of reference"
        ],
        charisma: [
          "Mastering vocal variety like taking listeners on an unforgettable emotional roller coaster",
          "Speaking with precision and speed of master chef while keeping audience hanging on words",
          "Using your natural voice as most powerful tool for projecting confidence and rapport"
        ]
      },
      10: {
        persuasion: [
          "Decoding prospect's preferred persuasion mode with just a few strategic questions",
          "Using prospect's own words to determine exact number of times they need convincing",
          "Eliciting peak emotional state from past purchasing decision and linking to current offer"
        ],
        charisma: [
          "Why over-reliance on persuasion techniques undermines your authentic connection ability",
          "Tapping into raw expressive power of your soul and channeling it strategically",
          "Integrating techniques seamlessly until they become second nature for natural charisma"
        ]
      },
      11: {
        persuasion: [
          "Unlocking prospect's deepest desires and guiding them to your outcome without feeling sold",
          "The art of steering conversation's direction while letting prospect fill in content",
          "Fluidly eliciting past successes and connecting them to future possibilities in single conversation"
        ],
        charisma: [
          "Surprising parallels between intricate music mechanics and composing human emotions through speech",
          "Wielding language building blocks to create symphony of persuasive impact in communication",
          "Improvising and adapting emotional expression in real-time like master musician playing heartstrings"
        ]
      },
      12: {
        persuasion: [
          "How most people unknowingly live on autopilot playing out pre-written scripts",
          "Using your secret organ to break free from past and future confines",
          "Why having only two alternatives isn't true choice and how third option shifts perspective"
        ],
        charisma: [
          "Visualizing your life as movie to dramatically enhance personal power and destiny direction",
          "Why most people live as audience members passively watching their story unfold",
          "The three layers of reality in your life movie and mastering them for authentic expression"
        ]
      },
      13: {
        persuasion: [
          "Why most common persuasion tactics fail miserably in real-world business situations",
          "The critical importance of owning the frame in any persuasive interaction",
          "How top persuaders skip rapport-building and go straight for prospect's deepest desires"
        ],
        charisma: [
          "The surprising reason trying to overcome fears head-on often amplifies their power",
          "How mental and emotional barriers shapeshift from solid to liquid to gas",
          "Why words you use to describe challenges can unknowingly solidify them into walls"
        ]
      },
      14: {
        persuasion: [
          "The secret skill of calibration that gives master persuaders almost unfair advantage",
          "Why your pre-presentation ritual can unlock your most confident and effective self",
          "Becoming a blank whiteboard to deeply connect with and mirror your audience"
        ],
        charisma: [
          "Tapping into realm of pure potential that exists in space between your thoughts",
          "The simple breathing technique that accesses stillness and infinite wellspring of energy",
          "Transforming past moments of triumph into visceral full-body experience you summon at will"
        ]
      },
      15: {
        persuasion: [
          "The secret art of calibration that allows master persuaders to read minds",
          "Why most persuaders fail by treating prospects like hypnotized subjects",
          "Detecting subtle verbal and nonverbal cues that reveal prospect's hidden worldview"
        ],
        charisma: [
          "The mind-bending acting insight that holds key to truly stepping into another's experience",
          "Why most people delude themselves about achieving deep connection",
          "How to tell if you've truly merged with another's reality by evaluating physiological responses"
        ]
      },
      16: {
        persuasion: [
          "The power of stepping in and out of your prospect's world effortlessly",
          "Using your blank slate to become mirror reflecting prospect's reality back to them",
          "Reading subtle signs of discord before they blow up into deal-killing objections"
        ],
        charisma: [
          "How your unique sensory stool reveals hidden communication superpowers and blind spots",
          "Why traditional motivation often fails and how connecting with North Star makes growth effortless",
          "The shocking truth about how your actual voice differs from mental perception"
        ]
      },
      17: {
        persuasion: [
          "Why attempting to bypass conscious mind and speak directly to unconscious is unethical",
          "The surprising truth about how unconscious minds connect to various brain and nervous system parts",
          "Why manipulation and coercion have no place in genuine persuasion and how they backfire"
        ],
        charisma: [
          "The ancient art of storytelling and how it speaks directly to unconscious mind",
          "The crucial difference between presentational and conversational storytelling and when to use each",
          "Why most compelling stories involve resisting the very emotions you want to evoke"
        ]
      },
      18: {
        persuasion: [
          "The fascinating reason two brothers can see same person in completely different colors",
          "How simple fish and hungry man's plight reveal transformative power of understanding perspectives",
          "Why our most deeply held beliefs are often nothing more than mental shortcuts"
        ],
        charisma: [
          "Why genuinely believing in what you say is root system of all persuasive communication",
          "How to navigate chaos behind scenes of any business and still deliver with unshakable conviction",
          "Why having strong even contrarian opinion is your secret weapon in age of AI"
        ]
      },
      19: {
        persuasion: [
          "The surprising parallels between challenges faced by artists and high-level salespeople",
          "Why most effective salespeople don't aim to please everyone and how this leads to success",
          "How pressure to be recognized as best creates dangerous disconnect between true and professional self"
        ],
        charisma: [
          "Why trying to replicate someone else's strategies makes you sound robotic and inauthentic",
          "The secret to developing congruent natural approach to any new skill without worrying about getting it right",
          "Why your unique perspective is your greatest asset and how to leverage it for maximum impact"
        ]
      },
      20: {
        persuasion: [
          "The surprising truth about why most people fail miserably when using language patterns",
          "Why conscious mind is not just simple gatekeeper for unconscious and how this misconception sabotages efforts",
          "Why context is true king of persuasion and how mastering it makes language patterns exponentially effective"
        ],
        charisma: [
          "Why using embedded commands as secret trick is like child trying to steal cookie - obvious and ineffective",
          "How cultivating deep inner belief makes you naturally assertive without relying on superficial tricks",
          "Why admitting your lack of knowledge can be more powerful than pretending to be expert"
        ]
      }
    }

    return {
      'persuasion-core': {
        title: "Persuasion Core",
        bullets: coreData[editionNum]?.persuasion || [
          "Master the fundamental principles of ethical persuasion",
          "Build unshakeable influence through authentic connection", 
          "Transform conversations into collaborative agreements"
        ]
      },
      'charisma-core': {
        title: "Charisma Core", 
        bullets: coreData[editionNum]?.charisma || [
          "Develop magnetic presence that draws people in naturally",
          "Learn the subtle art of commanding attention without effort",
          "Cultivate the inner confidence that radiates outward"
        ]
      }
    }
  }

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
    description: string;
  }> = {
    1: {
      title: "Flow Like Water",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%201.jpg",
      description: "How to use clarity, emotion, and values to guide conversations and navigate emotional triangles in relationships."
    },
    2: {
      title: "Role of the Renegade",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%202.jpg",
      description: "Frame control, operative words, and how your birth order unconsciously shapes your persuasive style and blind spots."
    },
    3: {
      title: "Bending Reality with Time",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%203.jpg",
      description: "Strategic distraction, time perspective shifting, and how to paint a future so compelling it becomes more real than current reality."
    },
    4: {
      title: "Strategically Taking the Next Step",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%204.jpg",
      description: "Layering presuppositions and subtle frame shifting to guide your prospect's thinking step by step without resistance."
    },
    5: {
      title: "Finding Your North Star",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%205.jpg",
      description: "Ancient Norse wisdom for contingency planning and accessing flow states at will for effortless charisma and productivity."
    },
    6: {
      title: "Chameleonic Comparisons",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%206.jpg",
      description: "Crafting analogies that stop critical thinking and cultivating an internally motivated identity that can't be shaken."
    },
    7: {
      title: "Hacking Persuasion",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%207.jpg",
      description: "Strategic focus to hijack attention, the secret obsessions of charismatic people, and turning shame into power."
    },
    8: {
      title: "Social Syncing",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%208.jpg",
      description: "Why most rapport sabotages persuasion and how authentic alignment eliminates the difference between you and your prospect."
    },
    9: {
      title: "Nexus of Power Part I",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%209.jpg",
      description: "One question that unlocks deepest motivations, vocal variety mastery, and the counterintuitive power of saying no."
    },
    10: {
      title: "Nexus of Power Part II",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2010.jpg",
      description: "Decoding visual, auditory, or kinesthetic persuasion preferences and why over-reliance on techniques undermines authentic connection."
    },
    11: {
      title: "The Authority Installation",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2011.jpg",
      description: "Elicitation, utilization, and installation to guide prospects to your outcome without them feeling sold."
    },
    12: {
      title: "Keys to Visualization",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2012.jpg",
      description: "Your secret organ for breaking autopilot patterns and the three layers of reality in your life movie."
    },
    13: {
      title: "Elevated Strategy",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2013.jpg",
      description: "Why common persuasion tactics fail in business and how fears shapeshift from solid to liquid to gas."
    },
    14: {
      title: "Stepping Into Them Part I",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2014.jpg",
      description: "Calibration skills, your anchor of success, and tapping into pure potential between thoughts."
    },
    15: {
      title: "Stepping Into Them Part II",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2015.png",
      description: "Reading minds through calibration and the acting insight that reveals true character immersion."
    },
    16: {
      title: "Stepping Into Them Part III",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2016.png",
      description: "Your sensory stool strengths, connecting with your North Star, and cultivating the inner voice of your ideal self."
    },
    17: {
      title: "Speaking to the Unconscious",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2017%20Cover.png",
      description: "Why bypassing the conscious mind is unethical and ineffective, plus the ancient art of conversational storytelling."
    },
    18: {
      title: "The Keys to Perception",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2018.png",
      description: "How two brothers see the same person in different colors and why beliefs are just mental shortcuts."
    },
    19: {
      title: "Balancing Business and Personal Self",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2019.png",
      description: "The disconnect between true self and professional persona, plus developing congruent approaches to new skills."
    },
    20: {
      title: "Embedded Commands and Beyond",
      image: "https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%2020.png",
      description: "Why most people fail with language patterns and how context beats content in embedded commands."
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
      
             <main className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Clean Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(168, 85, 247, 0.05)' }}></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 pt-8">
            
            {/* Centered Content */}
            <div className="text-center mb-8">
              <div className="inline-block backdrop-blur-md rounded-full px-8 py-4 mb-6 shadow-2xl bg-black/80 dark:bg-slate-700/70 border border-gray-800 dark:border-slate-600">
                <p className="text-lg font-medium tracking-wide text-gray-100 dark:text-gray-300">
                  "You command influence differently than most people..."
                </p>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-none tracking-tight">
                <span className="font-bold text-gray-900 dark:text-white">
                  Renegade Persuaders
                </span>
                <br />
                <span className="font-light text-gray-700 dark:text-gray-300">
                  The Master Collection
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl font-light mb-4 max-w-4xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
                Where influence becomes instinct from the inside out.
              </p>
            </div>

            {/* Video */}
            <div className="max-w-5xl mx-auto relative z-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
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
              <h2 className="text-5xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">Explore the Editions</h2>
              <p className="text-xl font-light text-gray-600 dark:text-gray-400">20 Deep Dives Into The Art Of Invisible Authority</p>
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
                  className="rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                >
                  {/* Photo Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 dark:from-slate-700 dark:to-slate-900" style={{ aspectRatio: '760/420' }}>
                    <img 
                      src={edition.image} 
                      alt={`Renegade Persuaders Edition ${num}: ${edition.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Edition {num}
                      </h3>
                      <p className="text-base font-normal text-gray-700 dark:text-gray-300">
                        {edition.title}
                      </p>
                    </div>
                    
                    <p className="text-base mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                      {edition.description}
                    </p>
                    
                    {/* Core Programs Dropdowns */}
                    <div className="space-y-2 mb-3">
                      {Object.entries(getCorePrograms(num)).map(([coreKey, coreProgram]) => {
                        const dropdownKey = `${num}-${coreKey}`
                        return (
                          <div key={coreKey} className="rounded-lg border border-gray-300 dark:border-gray-600">
                            <button
                              onClick={() => {
                                const newExpanded = new Set(expandedCores)
                                if (newExpanded.has(dropdownKey)) {
                                  newExpanded.delete(dropdownKey)
                                } else {
                                  newExpanded.add(dropdownKey)
                                }
                                setExpandedCores(newExpanded)
                                
                                // Immediate layout update
                                setTimeout(layoutMasonry, 50)
                                // Follow-up layouts during animation
                                setTimeout(layoutMasonry, 150)
                                setTimeout(layoutMasonry, 250)
                              }}
                              className="w-full flex items-center justify-between p-3 text-left transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <span className="font-medium text-gray-900 dark:text-white">{coreProgram.title}</span>
                              <svg
                                className={`w-5 h-5 transition-transform text-gray-600 dark:text-gray-400 ${
                                  expandedCores.has(dropdownKey) ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            <AnimatePresence>
                              {expandedCores.has(dropdownKey) && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-3 pb-3">
                                    <div className="space-y-2">
                                      {coreProgram.bullets.map((bullet, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                          <span className="text-base text-gray-600 dark:text-gray-400">•</span>
                                          <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{bullet}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                    

                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md p-4 bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Monthly Option */}
              <a href="https://pay.thepersuasionacademy.com/b/eVqfZg1Sp7E81JE05ZcAo0a" className="rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] group block flex items-center justify-between bg-transparent border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">One Edition Per Month</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$97</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Monthly</div>
                </div>
              </a>

              {/* One-Time Option */}
              <a href="https://pay.thepersuasionacademy.com/b/bJe4gydB7bUogEy7yrcAo09" className="rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] group block flex items-center justify-between bg-transparent border-2 border-blue-600 hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">The Full Collection</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">$997</div>
                  <div className="text-sm text-blue-500 dark:text-blue-500">One Time Payment</div>
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