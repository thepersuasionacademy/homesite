'use client'

import { useState, useEffect, useRef } from 'react'

  // Mock data for digital products
  const digitalProducts = [
    {
      id: 1,
      name: 'DreamState Selling Secrets',
      subtitle: 'Digital Book Bundle',
      description: 'Discover the foundational secrets of DreamState Selling through this comprehensive digital book collection.',
      price: null,
      category: 'Sales Mastery',
      featured: false,
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
      price: null,
      category: 'Sales Mastery',
      featured: false,
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
      price: null,
      category: 'Featured',
      featured: false,
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
      price: null,
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
      name: 'Renegade Persuaders: The Master Collection',
      description: 'Where influence becomes instinct from the inside out. 20 deep dives into the art of invisible authority.',
      price: null,
      category: 'Renegade Persuaders',
      featured: true,
      image: 'https://thepersuasionacademycdn.b-cdn.net/Images/RP%20Product%20Covers/RP%20Master%20Collection%20Cover.jpg',
    curiosityBullets: [
      'What patterns govern all human decision-making?',
      'How does authentic authority develop from within?',
      'Why do some people naturally command respect and attention?',
      'What makes certain people impossible to resist or ignore?'
    ],
    howYouImprove: [
      'Develop deep pattern recognition across all human interactions',
      'Build genuine confidence that radiates from your core identity',
      'Master the art of stepping into others\' reality completely',
      'Cultivate authentic presence that naturally draws people in'
    ],
    whatYouBecome: [
      'Someone who commands influence differently than most',
      'A master of invisible authority',
      'Naturally charismatic without trying',
      'Ethically persuasive in any situation'
    ]
  },
      {
      id: 6,
      name: 'Hypnotic Protocols for Strategic Persuaders',
      description: 'Advanced hypnotic language patterns and protocols for strategic influence and persuasion mastery.',
      price: null,
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
  },
  {
    id: 7,
    name: 'Conquering Confidence',
    subtitle: 'Complete Transformation System',
    description: 'Rewrite the stories that hold you back and become unstoppable in 6 weeks. Stop fighting invisible barriers and start living with quiet, unshakeable confidence.',
    price: 297,
    category: 'Self Mastery',
    featured: true,
    image: 'https://thepersuasionacademycdn.b-cdn.net/Images/Product%20Covers/Screenshot%202025-08-28%20at%207.11.42%E2%80%AFPM.jpeg',
    curiosityBullets: [
      'What invisible stories are running your life without you knowing?',
      'How do childhood interpretations still control your adult decisions?',
      'Why do some people naturally move with unshakeable confidence?',
      'What makes the difference between those who succeed and those who stay stuck?'
    ],
    howYouImprove: [
      'Identify and rewrite limiting stories at their source',
      'Create powerful success anchors for automatic confidence',
      'Build authentic connection to your future self',
      'Transform fear into fuel for forward momentum'
    ],
    whatYouBecome: [
      'Someone with quiet, unshakeable confidence',
      'A person who moves forward despite fear or uncertainty',
      'Someone who speaks up and shines bright in any room',
      'Living by stories that support your highest potential'
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
            The Power Ark Store
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
          <div className="bg-black py-3 sm:py-4">
            <div className="text-center px-2">
              <div className="flex flex-col sm:inline-flex sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <span className="bg-white text-black px-2 sm:px-3 py-1 rounded font-bold text-xs sm:text-sm tracking-wide">
                  FEATURED OFFER
                </span>
                <span className="text-white font-medium text-base sm:text-lg text-center">
                  All-Access Season Pass Available Now
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="flex-1 p-4 sm:p-6 lg:p-8">
              
              <h2 className="text-3xl sm:text-3xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3 sm:mb-4">
                All-Access Season Pass
              </h2>
              
              <p className="text-lg sm:text-lg text-[#0b0e16] dark:text-[#f5f5f7] font-semibold mb-2">
                Your annual membership to everything we create.
              </p>
              
              <p className="text-lg sm:text-base text-[#86868b] dark:text-[#a1a1a6] mb-4 sm:mb-6 leading-relaxed">
                Get immediate access to our entire program library, keep all base programs forever, 
                and automatically receive every new program we launch during your 12-month membership period.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {/* Standard Option */}
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1d26] dark:to-[#17171a] border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 h-full flex flex-col will-change-transform transition-transform duration-200 ease-out hover:scale-[1.02]"
                     style={{
                       boxShadow: `
                         0 10px 30px rgba(0, 0, 0, 0.08),
                         0 4px 15px rgba(0, 0, 0, 0.05),
                         inset 0 1px 0 rgba(255, 255, 255, 0.1)
                       `
                     }}>
                  <div className="text-center mb-6">
                    <h3 className="font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-2 text-2xl">Standard</h3>
                    <p className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Complete access to live programs and the entire Academy platform</p>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    {/* Option 1: Full Upfront */}
                    <div className="bg-white dark:bg-[#0b0e16] border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-red-300 dark:hover:border-red-500 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">Pay in Full</span>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">BEST VALUE</span>
                      </div>
                      <div className="text-3xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$3,000</div>
                      <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">One-time payment</div>
                    </div>

                    {/* Option 2: Down Payment + Monthly */}
                    <div className="bg-white dark:bg-[#0b0e16] border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-red-300 dark:hover:border-red-500 transition-colors">
                      <div className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6] mb-2">Split Payment</div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$1,000</span>
                        <span className="text-sm text-[#86868b] dark:text-[#a1a1a6]">down</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-semibold text-[#0b0e16] dark:text-[#f5f5f7]">$215</span>
                        <span className="text-sm text-[#86868b] dark:text-[#a1a1a6]">× 11 months</span>
                      </div>
                    </div>

                    {/* Option 3: Monthly */}
                    <div className="bg-white dark:bg-[#0b0e16] border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-red-300 dark:hover:border-red-500 transition-colors">
                      <div className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6] mb-2">Monthly Plan</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$300</span>
                        <span className="text-sm text-[#86868b] dark:text-[#a1a1a6]">× 12 months</span>
                      </div>
                      <div className="text-xs text-[#86868b] dark:text-[#a1a1a6] mt-1">Total: $3,600</div>
                    </div>
                  </div>
                  
                  <a href="mailto:support@thepersuasionacademy.com?subject=Request for Season Pass Access&body=Hi,%0D%0A%0D%0AI'm requesting access to the Season Pass.%0D%0A%0D%0AI'm interested in the Standard option.%0D%0A%0D%0AThanks,%0D%0A%0D%0AYOUR NAME" className="w-full bg-gradient-to-r from-[#0b0e16] to-[#1a1d26] dark:from-[#f5f5f7] dark:to-[#e5e5e7] text-white dark:text-[#0b0e16] py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-150 ease-out mt-6 text-center will-change-transform transition-transform duration-150 ease-out hover:translate-y-[-1px]">
                    <div className="font-semibold">Request Access</div>
                    <div className="text-sm opacity-80 mt-1">Full Offer Page Coming Soon</div>
                  </a>
                </div>
                
                {/* VIP Option */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-950/50 border-2 border-red-300 dark:border-red-600 rounded-2xl p-6 sm:p-8 h-full flex flex-col relative transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl"
                     style={{
                       boxShadow: `
                         0 15px 35px rgba(59, 130, 246, 0.15),
                         0 6px 20px rgba(59, 130, 246, 0.1),
                         0 10px 30px rgba(0, 0, 0, 0.08),
                         inset 0 1px 0 rgba(255, 255, 255, 0.2)
                       `
                     }}>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ VIP SUPPORT
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <h3 className="font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-2 text-2xl">VIP Support</h3>
                    <p className="text-sm text-[#0b0e16] dark:text-[#f5f5f7] font-medium">Everything in Standard + Unlimited private sessions with Kenrick Cleveland</p>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    {/* Option 1: Full Upfront */}
                    <div className="bg-white dark:bg-[#0b0e16] border-2 border-red-200 dark:border-red-700 rounded-xl p-4 hover:border-red-400 dark:hover:border-red-500 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-red-600 dark:text-red-400">Pay in Full</span>
                        <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-1 rounded-full text-xs font-medium">BEST VALUE</span>
                      </div>
                      <div className="text-3xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$5,000</div>
                      <div className="text-sm text-red-600 dark:text-red-400">One-time payment</div>
                    </div>

                    {/* Option 2: Down Payment + Monthly */}
                    <div className="bg-white dark:bg-[#0b0e16] border-2 border-red-200 dark:border-red-700 rounded-xl p-4 hover:border-red-400 dark:hover:border-red-500 transition-colors">
                      <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">Split Payment</div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$2,500</span>
                        <span className="text-sm text-red-600 dark:text-red-400">down</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-semibold text-[#0b0e16] dark:text-[#f5f5f7]">$250</span>
                        <span className="text-sm text-red-600 dark:text-red-400">× 11 months</span>
                      </div>
                    </div>

                    {/* Option 3: Monthly */}
                    <div className="bg-white dark:bg-[#0b0e16] border-2 border-red-200 dark:border-red-700 rounded-xl p-4 hover:border-red-400 dark:hover:border-red-500 transition-colors">
                      <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">Monthly Plan</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">$500</span>
                        <span className="text-sm text-red-600 dark:text-red-400">× 12 months</span>
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400 mt-1">Total: $6,000</div>
                    </div>
                  </div>
                  
                  <a href="mailto:support@thepersuasionacademy.com?subject=Request for Season Pass Access&body=Hi,%0D%0A%0D%0AI'm requesting access to the Season Pass.%0D%0A%0D%0AI'm interested in the VIP option.%0D%0A%0D%0AThanks,%0D%0A%0D%0AYOUR NAME" className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-900 transition-opacity duration-150 ease-out mt-6 text-center will-change-transform transition-transform duration-150 ease-out hover:translate-y-[-1px]">
                    <div className="font-semibold">Request VIP Access</div>
                    <div className="text-sm opacity-90 mt-1">Full Offer Page Coming Soon</div>
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-base sm:text-sm">
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
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#17171a] text-[#0b0e16] dark:text-[#f5f5f7] focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-[#86868b] dark:placeholder-[#a1a1a6]"
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
              className={`px-6 py-3 rounded-full font-medium text-sm transition-opacity duration-150 ease-out ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 transform scale-105'
                  : 'bg-[#ffffff] dark:bg-[#2a2a2e] text-[#333333] dark:text-[#d1d1d6] border border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 hover:shadow-md hover:bg-[#ffffff] hover:shadow-lg dark:hover:bg-[#3a3a3e]'
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
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        getOpenSections(product.id).learn 
                          ? 'max-h-screen px-3 pb-3 opacity-100' 
                          : 'max-h-0 px-3 pb-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-2">
                        {(product.curiosityBullets || []).map((bullet, index) => (
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
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        getOpenSections(product.id).improve 
                          ? 'max-h-screen px-3 pb-3 opacity-100' 
                          : 'max-h-0 px-3 pb-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-2">
                        {(product.howYouImprove || []).map((item, index) => (
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
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        getOpenSections(product.id).become 
                          ? 'max-h-screen px-3 pb-3 opacity-100' 
                          : 'max-h-0 px-3 pb-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-2">
                        {(product.whatYouBecome || []).map((transformation, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-red-600 dark:text-red-400 text-base">→</span>
                            <span className="text-sm text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">{transformation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Combined Price and CTA */}
                <div className="mt-6">
                  <div 
                    className="block w-full bg-gradient-to-b from-[#1a1d26] to-[#0b0e16] border border-white/10 rounded-lg transition-opacity duration-150 ease-out relative overflow-hidden"
                    style={{
                      boxShadow: `
                        0 6px 20px rgba(0, 0, 0, 0.35),
                        0 2px 6px rgba(0, 0, 0, 0.25),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.18)
                      `
                    }}
                  >
                    <div className="p-5 relative">
                      {/* Subtle inner glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg pointer-events-none"></div>
                      
                      {/* Price prominently displayed */}
                      {(product as any).price !== null && (
                        <div className="text-center mb-3 relative">
                          <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">
                            {typeof (product as any).price === 'string' ? (product as any).price : `$${(product as any).price}`}
                          </div>
                          <div className="text-white/80 text-sm">
                            {typeof (product as any).price === 'number' ? 'One-time payment' : ''}
                          </div>
                        </div>
                      )}
                      
                      {/* CTA Button */}
                      {product.name === 'Renegade Persuaders: The Master Collection' ? (
                        <a href="/store/rp" className="flex items-center justify-center gap-2 py-3 px-4 bg-white dark:!bg-white rounded-lg text-[#0b0e16] dark:!text-[#0b0e16] font-medium hover:opacity-90 transition-opacity duration-150 ease-out relative will-change-transform transition-transform duration-150 ease-out hover:translate-y-[-1px]">
                          See Full Offer
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      ) : product.name === 'Conquering Confidence' ? (
                        <a href="/store/conquering-confidence" className="flex items-center justify-center gap-2 py-3 px-4 bg-white dark:!bg-white rounded-lg text-[#0b0e16] dark:!text-[#0b0e16] font-medium hover:opacity-90 transition-opacity duration-150 ease-out relative will-change-transform transition-transform duration-150 ease-out hover:translate-y-[-1px]">
                          See Full Offer
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-2 py-3 px-4 bg-white dark:!bg-white rounded-lg text-[#0b0e16] dark:!text-[#0b0e16] font-medium opacity-60 cursor-not-allowed relative shadow-lg">
                          COMING SOON
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
} 