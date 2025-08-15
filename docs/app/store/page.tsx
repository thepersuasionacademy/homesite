'use client'

import { useState, useEffect, useRef } from 'react'

// Mock data for digital products
const digitalProducts = [
  {
    id: 1,
    name: 'DreamState Selling Secrets',
    subtitle: 'Digital Book Bundle',
    description: 'Discover the foundational secrets of DreamState Selling through this comprehensive digital book collection.',
    price: 27.00,
    category: 'Sales Mastery',
    featured: true,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_A_solitary_man_figure_standing_in_the_center_of_a_75b42954-7f2c-4f55-8507-580d92a413ab_3.jpeg',
    curiosityBullets: [
      'What hidden triggers activate instant buying decisions?',
      'How to bypass conscious resistance completely?',
      'Why some words create irresistible compulsion?',
      'The secret pattern that guarantees compliance?'
    ],
    howYouImprove: [
      'Master psychological triggers step-by-step',
      'Practice with real-world scenarios',
      'Build confidence through repetition',
      'Develop your natural persuasion style'
    ],
    whatYouBecome: [
      'A master of subconscious influence',
      'Someone who ethically persuades with ease',
      'A person others naturally follow',
      'Confident in any selling situation'
    ]
  },
  {
    id: 2,
    name: 'DreamState Selling',
    subtitle: 'Digital Training Bundle',
    description: 'Complete video training series on mastering the DreamState Selling methodology.',
    price: 997.00,
    category: 'Sales Mastery',
    featured: true,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_Ultra-minimal_golden_crown_hovering_above_a_castl_051811cc-298b-480e-adbf-b59297dbf7e9_0%20(1).jpeg',
    curiosityBullets: [
      'Which psychological layer controls all purchasing decisions?',
      'How to implant desires that feel completely natural?',
      'The 3-step sequence that eliminates all objections?',
      'Why traditional sales training actually repels buyers?'
    ],
    howYouImprove: [
      'Apply frameworks in real selling situations',
      'Overcome objections with psychological precision',
      'Close deals without pressure or manipulation',
      'Build unshakeable selling confidence'
    ],
    whatYouBecome: [
      'A DreamState Selling expert',
      'Someone who closes without pressure',
      'A trusted advisor, not a salesperson',
      'Unstoppable in any market'
    ]
  },
  {
    id: 3,
    name: '"Catalysts" Sprint',
    description: 'Intensive sprint program focused on the catalyst techniques that accelerate persuasion and influence.',
    price: 397.00,
    category: 'Featured',
    featured: true,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_echo_shockwaves_sound_inside_mind_alex_grey_style_99af80a7-498e-4f14-b745-1dd19083fdf1_0%20(1).jpeg',
    curiosityBullets: [
      'What makes someone say "yes" before they know why?',
      'The catalyst that turns skeptics into evangelists?',
      'How to create urgency without being pushy?',
      'Which single word doubles closing rates?'
    ],
    howYouImprove: [
      'Accelerate your influence through daily practice',
      'Master catalyst techniques in weeks not years',
      'Get real-time feedback on your approach',
      'Connect with other high-performers'
    ],
    whatYouBecome: [
      'A catalyst for instant decisions',
      'Someone who accelerates sales cycles',
      'A master of ethical urgency',
      'Irresistible in your influence'
    ]
  },
  {
    id: 4,
    name: 'Complete Info-Field Shifting System',
    description: 'Master the art of shifting information fields to transform your internal state and external reality.',
    price: 697.00,
    category: 'Self Mastery',
    featured: false,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/tmp048e8gj8.webp',
    curiosityBullets: [
      'How to reprogram your subconscious in minutes?',
      'What information fields control your reality?',
      'The shifting technique that eliminates limiting beliefs?',
      'Why visualization alone keeps you stuck?'
    ],
    howYouImprove: [
      'Shift limiting beliefs in real-time',
      'Access higher states of consciousness',
      'Restructure your reality at the source',
      'Master advanced mental techniques'
    ],
    whatYouBecome: [
      'Master of your internal reality',
      'Someone who shifts states instantly',
      'Free from limiting beliefs',
      'Creator of your desired outcomes'
    ]
  },
  {
    id: 5,
    name: 'Master Collection of Renegade Persuaders',
    description: 'The ultimate collection of unconventional persuasion techniques from history\'s most effective renegades.',
    price: 997.00,
    category: 'Renegade Persuaders',
    featured: false,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_hyper-realistic_silhouette_of_person_walking_forw_71739d41-bc05-48b9-ae2d-892016ee8c18_2.jpg',
    curiosityBullets: [
      'What forbidden techniques did master persuaders use?',
      'How to influence without anyone noticing?',
      'The renegade method that breaks all rules?',
      'Why conventional persuasion pushes people away?'
    ],
    howYouImprove: [
      'Learn from history\'s most effective persuaders',
      'Adapt unconventional techniques to modern contexts',
      'Develop your own unique approach',
      'Maintain ethical standards while being powerful'
    ],
    whatYouBecome: [
      'A renegade persuasion master',
      'Someone who thinks outside the box',
      'Fearless in your approach',
      'Uniquely powerful in influence'
    ]
  },
  {
    id: 6,
    name: 'Hypnotic Protocols for Strategic Persuaders',
    description: 'Advanced hypnotic language patterns and protocols for strategic influence and persuasion mastery.',
    price: 697.00,
    category: 'Strategic Persuasion',
    featured: false,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/DreamState%20Selling%20Cover.jpeg',
    curiosityBullets: [
      'Which hypnotic patterns bypass critical thinking?',
      'How to embed commands in casual conversation?',
      'The protocol that makes resistance impossible?',
      'What language pattern creates instant compliance?'
    ],
    howYouImprove: [
      'Master hypnotic language patterns systematically',
      'Use templates for consistent results',
      'Structure conversations for maximum impact',
      'Achieve compliance without resistance'
    ],
    whatYouBecome: [
      'A strategic persuasion expert',
      'Master of hypnotic language',
      'Someone who influences unconsciously',
      'Unstoppable in negotiations'
    ]
  }
]

const categories = ['Featured', 'Self Mastery', 'Renegade Persuaders', 'Strategic Persuasion', 'Sales Mastery']

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('Featured')
  const [activeTab, setActiveTab] = useState<{[key: number]: {learn: boolean, improve: boolean, become: boolean}}>({})
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredProducts = selectedCategory === 'Featured'
    ? digitalProducts.filter(product => product.featured)
    : digitalProducts.filter(product => product.category === selectedCategory)

  const getOpenSections = (productId: number) => activeTab[productId] || { learn: false, improve: false, become: false }
  
  const toggleSection = (productId: number, section: 'learn' | 'improve' | 'become') => {
    const currentSections = getOpenSections(productId);
    setActiveTab(prev => ({
      ...prev,
      [productId]: {
        ...currentSections,
        [section]: !currentSections[section]
      }
    }))
    
    // Immediate layout update
    setTimeout(layoutMasonry, 50)
    // Follow-up layouts during animation
    setTimeout(layoutMasonry, 150)
    setTimeout(layoutMasonry, 250)
  }

  const layoutMasonry = () => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const items = Array.from(container.children) as HTMLElement[]
    const gap = 32 // 2rem = 32px
    
    // Get number of columns based on screen width
    const containerWidth = container.offsetWidth
    let columns = 1
    if (containerWidth >= 1024) columns = 3
    else if (containerWidth >= 768) columns = 2
    
    const columnWidth = (containerWidth - (gap * (columns - 1))) / columns
    const columnHeights = new Array(columns).fill(0)
    
    items.forEach((item, index) => {
      // Reset item position
      item.style.position = 'absolute'
      item.style.width = `${columnWidth}px`
      
      // Find shortest column
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights))
      
      // Position item
      const x = shortestColumn * (columnWidth + gap)
      const y = columnHeights[shortestColumn]
      
      item.style.left = `${x}px`
      item.style.top = `${y}px`
      item.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      
      // Update column height
      columnHeights[shortestColumn] += item.offsetHeight + gap
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
  }, [filteredProducts, activeTab])

  useEffect(() => {
    // Continuous layout updates during animation
    const timers = [
      setTimeout(layoutMasonry, 10),
      setTimeout(layoutMasonry, 100),
      setTimeout(layoutMasonry, 200),
      setTimeout(layoutMasonry, 350)
    ]
    return () => timers.forEach(clearTimeout)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e16]">
      {/* Store Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-2 leading-tight">
            The Persuasion Academy Store
          </h1>
          <p className="text-xl text-[#86868b] dark:text-[#a1a1a6] max-w-3xl mx-auto">
            Premium digital products for creators, entrepreneurs, business owners, and misfits... blazing the trail of their own path
          </p>
        </div>
      </div>

      {/* Featured Season Pass Offer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Featured Offer Banner - Inside Card */}
          <div className="bg-black py-4">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3">
                <span className="bg-white text-black px-3 py-1 rounded font-bold text-sm tracking-wide">
                  FEATURED OFFER
                </span>
                <span className="text-white font-medium text-lg">
                  All-Access Season Pass Available Now
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Photo Section */}
            <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden">
              <img 
                src="https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_In_a_longshot_perspective_a_silhouette_of_a_busin_cad1314c-ce1a-4c58-a72a-b05e0f62411a_0.jpeg"
                alt="Business person holding red ticket above architectural blueprints - symbolizing transformation through The Persuasion Academy Season Pass"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="flex-1 p-8">
              
              <h2 className="text-3xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-4">
                All-Access Season Pass
              </h2>
              
              <p className="text-lg text-[#0b0e16] dark:text-[#f5f5f7] font-semibold mb-2">
                Your annual membership to everything we create.
              </p>
              
              <p className="text-[#86868b] dark:text-[#a1a1a6] mb-6 leading-relaxed">
                Get immediate access to our entire program library, keep all base programs forever, 
                and automatically receive every new program we launch during your 12-month membership period.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Standard Option */}
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 h-full flex flex-col">
                  <h3 className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] mb-3 h-6">Standard</h3>
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$3,000</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">per year</div>
                  </div>
                  
                  {/* Horizontal Divider */}
                  <div className="flex items-center my-1">
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                    <span className="px-3 text-base font-medium text-[#86868b] dark:text-[#a1a1a6]">OR</span>
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <div className="text-xl font-semibold text-[#0b0e16] dark:text-[#f5f5f7]">$300/month</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Monthly billing</div>
                    <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Complete access to live programs and the entire Academy platform
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-auto">
                    See Full Offer →
                  </button>
                </div>
                
                {/* VIP Option */}
                <div className="border-2 border-blue-500 rounded-lg p-4 h-full flex flex-col relative">
                  <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    VIP SUPPORT
                  </div>
                  <h3 className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] mb-3 h-6">VIP Support</h3>
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$5,000</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">per year</div>
                  </div>
                  
                  {/* Horizontal Divider */}
                  <div className="flex items-center my-1">
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                    <span className="px-3 text-base font-medium text-[#86868b] dark:text-[#a1a1a6]">OR</span>
                    <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <div className="text-xl font-semibold text-[#0b0e16] dark:text-[#f5f5f7]">$500/month</div>
                    <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Monthly billing</div>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        + Unlimited private 20-minute lightning sessions with Kenrick Cleveland
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto">
                    See Full Offer →
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">12 months all-access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">Keep base programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">Keep new releases</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">Participate in live programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">All AI improvements and tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#86868b] dark:text-[#a1a1a6]">5,000 monthly credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-6">
            All Products
          </h2>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#17171a] text-[#0b0e16] dark:text-[#f5f5f7] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-[#86868b] dark:placeholder-[#a1a1a6]"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 transform scale-105'
                  : 'bg-white dark:bg-[#17171a] text-[#86868b] dark:text-[#a1a1a6] border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Masonry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div 
          ref={containerRef}
          className="relative transition-all duration-400 ease-out"
          style={{ 
            minHeight: '400px',
            willChange: 'height'
          }}
        >
          <style jsx>{`
            .dropdown-content {
              overflow: hidden;
              transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                          opacity 0.3s ease,
                          padding 0.3s ease;
            }
            .dropdown-content-enter {
              max-height: 0;
              opacity: 0;
              padding-top: 0;
              padding-bottom: 0;
            }
            .dropdown-content-enter-active {
              max-height: 500px;
              opacity: 1;
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
            }
            .dropdown-content-exit {
              max-height: 500px;
              opacity: 1;
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
            }
            .dropdown-content-exit-active {
              max-height: 0;
              opacity: 0;
              padding-top: 0;
              padding-bottom: 0;
            }
          `}</style>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 ease-out"
              style={{ transform: 'translateZ(0)' }}
            >
              {/* Photo Section */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">
                    {product.name}
                  </h3>
                  {product.subtitle && (
                    <p className="text-base text-[#86868b] dark:text-[#a1a1a6] font-normal">
                      {product.subtitle}
                    </p>
                  )}
                </div>
                
                <p className="text-base text-[#86868b] dark:text-[#a1a1a6] mb-4 leading-relaxed">
                  {product.description}
                </p>
                

                
                {/* FAQ-style Dropdowns */}
                <div className="space-y-2 mb-6">
                  {/* What You Learn */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                      onClick={() => toggleSection(product.id, 'learn')}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="font-medium text-[#0b0e16] dark:text-[#f5f5f7]">What You Learn</span>
                      <svg
                        className={`w-5 h-5 text-[#86868b] dark:text-[#a1a1a6] transition-transform ${
                          getOpenSections(product.id).learn ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`dropdown-content transition-all duration-300 ease-out ${
                        getOpenSections(product.id).learn 
                          ? 'max-h-96 px-3 pb-3' 
                          : 'max-h-0 px-3 pb-0'
                      }`}
                      style={{ 
                        overflow: 'hidden',
                        transitionProperty: 'max-height, padding-bottom'
                      }}
                    >
                      <div className="space-y-2">
                        {product.curiosityBullets.map((bullet, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-[#86868b] dark:text-[#a1a1a6] text-base">•</span>
                            <span className="text-sm text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* What You Get */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                      onClick={() => toggleSection(product.id, 'improve')}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="font-medium text-[#0b0e16] dark:text-[#f5f5f7]">How You Improve</span>
                      <svg
                        className={`w-5 h-5 text-[#86868b] dark:text-[#a1a1a6] transition-transform ${
                          getOpenSections(product.id).improve ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`dropdown-content transition-all duration-300 ease-out ${
                        getOpenSections(product.id).improve 
                          ? 'max-h-96 px-3 pb-3' 
                          : 'max-h-0 px-3 pb-0'
                      }`}
                      style={{ 
                        overflow: 'hidden',
                        transitionProperty: 'max-height, padding-bottom'
                      }}
                    >
                      <div className="space-y-2">
                        {product.howYouImprove.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 text-base">✓</span>
                            <span className="text-sm text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* What You Become */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                      onClick={() => toggleSection(product.id, 'become')}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="font-medium text-[#0b0e16] dark:text-[#f5f5f7]">Who You Become</span>
                      <svg
                        className={`w-5 h-5 text-[#86868b] dark:text-[#a1a1a6] transition-transform ${
                          getOpenSections(product.id).become ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`dropdown-content transition-all duration-300 ease-out ${
                        getOpenSections(product.id).become 
                          ? 'max-h-96 px-3 pb-3' 
                          : 'max-h-0 px-3 pb-0'
                      }`}
                      style={{ 
                        overflow: 'hidden',
                        transitionProperty: 'max-height, padding-bottom'
                      }}
                    >
                      <div className="space-y-2">
                        {product.whatYouBecome.map((transformation, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 text-base">→</span>
                            <span className="text-sm text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">{transformation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Combined Price and CTA */}
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="block w-full bg-[#0b0e16] border border-white/20 rounded-lg hover:opacity-90 transition-all duration-200"
                  >
                    <div className="p-5">
                      {/* Price prominently displayed */}
                      <div className="text-center mb-3">
                        <div className="text-3xl font-bold text-white mb-1">
                          ${product.price}
                        </div>
                        <div className="text-white/80 text-sm">
                          One-time payment
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-blue-600 rounded-lg text-[#0b0e16] dark:text-white font-medium hover:opacity-90 transition-all duration-200">
                        See Full Offer
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
} 