'use client'

import { Link } from 'nextra-theme-docs'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import styles from './page.module.css'
import './page.css'
import { motion, AnimatePresence } from 'framer-motion'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.02 } }
}
const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: 'easeOut' } }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.02 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.1, ease: 'easeOut' } }
}

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.1, ease: 'easeOut' } }
}

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.1, ease: 'easeOut', delay: 0.02 } }
}

const IndexPage: FC = () => {
  const [activeDropdowns, setActiveDropdowns] = useState<Set<string>>(new Set())

  const toggleDropdown = (cardId: string, section: string) => {
    const dropdownKey = `${cardId}-${section}`
    setActiveDropdowns(prev => {
      const newSet = new Set(prev)
      if (newSet.has(dropdownKey)) {
        newSet.delete(dropdownKey)
      } else {
        newSet.add(dropdownKey)
      }
      return newSet
    })
  }

  const getDropdownState = (cardId: string, section: string) => {
    const dropdownKey = `${cardId}-${section}`
    return activeDropdowns.has(dropdownKey)
  }

  useEffect(() => {
    // Platform tabs functionality
    const handlePlatformTab = (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      
      const button = event.currentTarget as HTMLButtonElement
      const target = button.getAttribute('data-platform-tab')
      
      if (!target) return
      
      // Update tab states
      document.querySelectorAll('[data-platform-tab]').forEach(tab => {
        tab.classList.remove('active')
      })
      button.classList.add('active')
      
      // Update content panels
      document.querySelectorAll('.platform-panel').forEach(panel => {
        panel.classList.remove('active')
      })
      
      const targetPanel = document.getElementById(`${target}-panel`)
      if (targetPanel) {
        targetPanel.classList.add('active')
      }
    }

    // Add event listeners to platform tabs
    const platformTabs = document.querySelectorAll('[data-platform-tab]')
    platformTabs.forEach(tab => {
      tab.addEventListener('click', handlePlatformTab as EventListener)
    })

    // Cleanup
    return () => {
      platformTabs.forEach(tab => {
        tab.removeEventListener('click', handlePlatformTab as EventListener)
      })
    }
  }, [])

  return (
    <div className="landing-page">
      {/* HERO SECTION */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <section className="hero-section">
      <div className="content-container">
          <div className="hero-content">
            {/* MASTERY PLATFORM PILL */}
            <motion.div className="mastery-pill" variants={heroItem}>
              The World's Only Persuasion Mastery Ecosystem
            </motion.div>
            
            <motion.h1 className="hero-headline" variants={heroItem}>
              Turn The World's Most Powerful Psychological Frameworks Into Your Hidden Advantage
            </motion.h1>
            
            <motion.p className="hero-subheadline" variants={heroItem}>
              For professionals seeking lifelong mastery and companies multiplying their influence.
            </motion.p>
            
            {/* FEATURE PILLS */}
            <motion.div className="feature-pills" variants={heroItem}>
              <a 
                href="https://www.amazon.com/stores/author/B0DLTPBS4T?ccs_id=fc4f4b1b-55fe-4178-8319-9fec7545fdd4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="feature-pill amazon-pill"
              >
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/13d40d8cd1b9c41712167a97cfb74a2e.png" 
                  alt="Amazon" 
                  className="amazon-icon"
                />
                Amazon
              </a>
              <span className="feature-divider">|</span>
              <a 
                href="https://www.facebook.com/groups/thepersuasionacademy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="feature-pill facebook-pill"
              >
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/images.png" 
                  alt="Facebook" 
                  className="facebook-icon"
                />
                Facebook Group
              </a>
              <span className="feature-divider">|</span>
              <a 
                href="https://10minuteinfluence.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="feature-pill substack-pill"
              >
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/substack.png" 
                  alt="Substack" 
                  className="substack-icon"
                />
                Substack
              </a>
              <span className="feature-divider">|</span>
              <Link href="/store" className="feature-pill store-pill">
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png" 
                  alt="Store" 
                  className="store-icon"
                />
                Store
              </Link>
              <span className="feature-divider">|</span>
              <Link href="/services" className="feature-pill services-pill">
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/depositphotos_22289805-stock-illustration-historical-building.jpg" 
                  alt="Services" 
                  className="services-icon"
                />
                Services
              </Link>
            </motion.div>
            
            {/* VIDEO */}
            <motion.div className="hero-video" variants={videoVariants}>
              <div style={{
                position:"relative",
                paddingTop:"56.25%",
                background: "#0b0e16",
                borderRadius: "18px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.15), 0 24px 60px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                overflow: "hidden"
              }}>
                <iframe 
                  src="https://iframe.mediadelivery.net/embed/376899/3a2ba9e7-58cc-49de-a979-a571db35c205?autoplay=false&loop=false&muted=false&preload=false&responsive=true" 
                  loading="lazy" 
                  style={{
                    border: "none",
                    outline: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: "18px",
                    background: "transparent",
                    display: "block"
                  }} 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                  allowFullScreen={true}
                />
              </div>
            </motion.div>
          </div>
      </div>
      </section>
      </motion.div>

      {/* THE FOUNDERS SECTION */}
      <motion.section
        className="pioneers-intro"
        variants={sectionVariants}
        initial="visible"
        animate="visible"
      >
        <div className="content-container">
          <div className="pioneers-content">
            <motion.h2 className="section-headline" variants={cardVariants}>The Founders</motion.h2>
            <motion.p className="section-description" variants={cardVariants}>
              Two visionaries turning psychology into real advantage in how you communicate, lead, and move through the world.
            </motion.p>
            
            <div className="pioneers-grid">
              <motion.div className="pioneer-card" variants={cardVariants}>
                <div className="pioneer-image-section">
                  <img className="pioneer-photo" src="https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg" alt="Kenrick Cleveland" />
                </div>
                <div className="pioneer-content">
                  <div className="pioneer-info">
                    <h3>Kenrick Cleveland</h3>
                    <span className="pioneer-title">The Pioneer</span>
                  </div>
                  <p className="pioneer-bio">
                    The master architect of modern influence psychology, Kenrick demonstrates in real time what others call impossible. Having forgotten more techniques than most experts will learn in their lifetime, he pioneers the cutting edge miles ahead while others follow yesteryear's playbook. Titans study his techniques, masters follow his every move, and the truly ambitious discover that everything they thought they knew was merely the beginning.
                  </p>
                </div>
              </motion.div>

              <motion.div className="pioneer-card" variants={cardVariants}>
                <div className="pioneer-image-section">
                  <img className="pioneer-photo" src="https://thepersuasionacademycdn.b-cdn.net/Images/jackson-burnham-6978%20Large.jpeg" alt="Jackson Burnham" />
                </div>
                <div className="pioneer-content">
                  <div className="pioneer-info">
                    <h3>Jackson Burnham</h3>
                    <span className="pioneer-title">The Synthesizer</span>
                  </div>
                  <p className="pioneer-bio">
                    For more than 5 years, Jackson has worked closely with Kenrick to transform his life's work into repeatable frameworks, tools, and technology. These innovations allow people and companies to wield the most powerful methods of influence while bettering their own lives and increasing their net positive impact on humanity.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PLATFORM SECTION */}
      <motion.section 
        className="platform-section"
        variants={sectionVariants}
        initial="visible"
        animate="visible"
      >
        <div className="content-container">
          <div className="platform-content">
            <motion.h2 className="section-headline" variants={cardVariants}>The Platform</motion.h2>
            <motion.p className="section-description" variants={cardVariants}>
              Everything you need to instantly implement and master influence psychology, from live coaching to AI-powered technology.
            </motion.p>
            
            {/* CONNECTED PLATFORM MODAL */}
            <motion.div
              className="platform-modal"
              variants={cardVariants}
            >
              
              {/* PLATFORM NAVIGATION PILLS - CONNECTED TO TOP */}
              <motion.div 
                className="platform-nav"
                variants={cardVariants}
              >
                <button 
                  className={`${styles.platformTab} active`}
                  data-platform-tab="content"
                >
                  Content
                </button>
                <button 
                  className={styles.platformTab}
                  data-platform-tab="tools"
                >
                  Tools
                </button>
                <button 
                  className={styles.platformTab}
                  data-platform-tab="codex"
                >
                  Codex
                </button>
                <button 
                  className={styles.platformTab}
                  data-platform-tab="salescript"
                >
                  Studio
                </button>
              </motion.div>

              {/* PLATFORM VIDEO/CONTENT AREA - CONNECTED TO BOTTOM */}
              <motion.div 
                className="platform-display"
                variants={videoVariants}
              >
                
                {/* CONTENT PANEL */}
                <div id="content-panel" className="platform-panel active">
                  <div className="platform-video-full">
                    <div className="video-placeholder" style={{
                      background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
                      borderRadius: '12px',
                      border: 'none',
                      outline: 'none',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-1px)',
                      transition: 'all 0.3s ease'
                    }}>
                      <p className="video-title" style={{
                        color: '#ffffff',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)'
                      }}>DEMO COMING SOON...</p>
                      <p className="video-subtitle">Immersive Learning Library</p>
                    </div>
                  </div>
                </div>

                {/* TOOLS PANEL */}
                <div id="tools-panel" className="platform-panel">
                  <div className="platform-video-full">
                    <div className="video-placeholder" style={{
                      background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
                      borderRadius: '12px',
                      border: 'none',
                      outline: 'none',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-1px)',
                      transition: 'all 0.3s ease'
                    }}>
                      <p className="video-title" style={{
                        color: '#ffffff',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)'
                      }}>DEMO COMING SOON...</p>
                      <p className="video-subtitle">Interactive Training Tools</p>
                    </div>
                  </div>
                </div>

                {/* CODEX PANEL */}
                <div id="codex-panel" className="platform-panel">
                  <div className="platform-video-full">
                    <div className="video-placeholder" style={{
                      background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
                      borderRadius: '12px',
                      border: 'none',
                      outline: 'none',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-1px)',
                      transition: 'all 0.3s ease'
                    }}>
                      <p className="video-title" style={{
                        color: '#ffffff',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)'
                      }}>DEMO COMING SOON...</p>
                      <p className="video-subtitle">Codex™ AI Assistant</p>
                    </div>
                  </div>
                </div>

                {/* SALESCRIPT PANEL */}
                <div id="salescript-panel" className="platform-panel">
                  <div className="platform-video-full">
                    <div className="video-placeholder" style={{
                      background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
                      borderRadius: '12px',
                      border: 'none',
                      outline: 'none',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-1px)',
                      transition: 'all 0.3s ease'
                    }}>
                      <p className="video-title" style={{
                        color: '#ffffff',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)'
                      }}>DEMO COMING SOON...</p>
                      <p className="video-subtitle">Studio</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CHOOSE YOUR PATH SECTION */}
      <motion.section 
        className="path-section"
        variants={sectionVariants}
        initial="visible"
        animate="visible"
      >
        <div className="content-container">
          <div className="path-content">
            <motion.h2 className="section-headline" variants={cardVariants}>Choose Your Path</motion.h2>
            <motion.p className="section-description" variants={cardVariants}>
              Three distinct approaches to influence mastery — select the path that matches your goals and learning style.
            </motion.p>
            
            <div className="path-options">
              {/* Legacy Products Card */}
              <motion.div className="store-style-card" variants={cardVariants}>
                <div className="card-header">
                  <h3>Legacy Products & Bundles</h3>
                  <p>Classic Kenrick Cleveland trainings and curated bundles covering persuasion, negotiation, hypnosis, confidence, and manifestation. Build your own library at your own pace.</p>
                </div>
                
                <div className="card-dropdowns">
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('legacy', 'what')}
                      className="dropdown-toggle"
                    >
                      <span>What You Get</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('legacy', 'what') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('legacy', 'what') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="dropdown-item">→ Entry-point introductions designed for specific contexts and industries</div>
                        <div className="dropdown-item">→ Mid-ticket themed bundles like Renegade Persuaders and Unstoppable Confidence</div>
                        <div className="dropdown-item">→ Build your personal influence library at your own pace</div>
                        <div className="dropdown-item">→ Standalone programs that deliver immediate value</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('legacy', 'pricing')}
                      className="dropdown-toggle"
                    >
                      <span>Pricing</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('legacy', 'pricing') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('legacy', 'pricing') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <p><strong>Individual Programs: $7 - $2,500</strong></p>
                        <p>Pricing varies based on program depth and scope. Entry-level programs start at $7, while comprehensive bundles like the complete Renegade Persuaders collection reach $2,500. Each program is a one-time purchase with lifetime access.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('legacy', 'who')}
                      className="dropdown-toggle"
                    >
                      <span>Perfect For</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('legacy', 'who') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('legacy', 'who') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="dropdown-item">→ People new to influence psychology who want focused, specific training</div>
                        <div className="dropdown-item">→ Self-paced learners building expertise gradually</div>
                        <div className="dropdown-item">→ Professionals targeting specific challenges rather than comprehensive mastery</div>
                        <div className="dropdown-item">→ Those who prefer standalone programs over unified systems</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link href="/store" className="store-style-cta">
                  View the Store
                </Link>
              </motion.div>
              
              {/* Season Pass Card - Featured */}
              <motion.div className="store-style-card featured" variants={cardVariants}>
                <div className="featured-badge">Most Popular</div>
                <div className="card-header">
                  <h3>Season Pass</h3>
                  <p>The complete living system for influence mastery — permanent frameworks, evolving multiplier models, and optional Lightning Coaching with Kenrick.</p>
                </div>
                
                <div className="card-dropdowns">
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('dreamstate', 'frameworks')}
                      className="dropdown-toggle"
                    >
                      <span>Core Frameworks</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('dreamstate', 'frameworks') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('dreamstate', 'frameworks') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="dropdown-item">→ <strong>Selling</strong> - $3,000</div>
                        <div className="dropdown-item">→ <strong>Leadership</strong> - $4,500</div>
                        <div className="dropdown-item">→ <strong>Negotiations</strong> - $1,500</div>
                        <div className="dropdown-item">→ <strong>Presentations</strong> - $1,500</div>
                        <div className="dropdown-item">→ <strong>Marketing</strong> - $1,000</div>
                        <div className="dropdown-item">→ <strong>Transformation</strong> - $1,000</div>
                        <div className="dropdown-item">→ <strong>Manifestation</strong> - $1,000</div>
                        <p style={{ marginTop: '1rem', fontWeight: '600' }}>Total individual value: $13,500</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('dreamstate', 'pricing')}
                      className="dropdown-toggle"
                    >
                      <span>Pricing & Access</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('dreamstate', 'pricing') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('dreamstate', 'pricing') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <p><strong>Core Tier: $3,000 upfront or $300/month</strong><br/>
                        Complete access to all DreamState frameworks and ongoing multiplier models.</p>
                        
                        <p><strong>Premium Tier: $5,000 upfront or $495/month</strong><br/>
                        Everything in Core plus weekly 30-minute Lightning Coaching sessions with Kenrick.</p>
                        
                        <p><em>Monthly payment plans require 12-month contract. Access begins immediately upon enrollment.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('dreamstate', 'who')}
                      className="dropdown-toggle"
                    >
                      <span>Perfect For</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('dreamstate', 'who') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('dreamstate', 'who') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="dropdown-item">→ Serious professionals seeking complete mastery across all influence contexts</div>
                        <div className="dropdown-item">→ Those who want the full unified system rather than piecemeal learning</div>
                        <div className="dropdown-item">→ People committed to ongoing development with cutting-edge models</div>
                        <div className="dropdown-item">→ Leaders who need comprehensive influence capabilities</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link href="/store" className="store-style-cta featured">
                  Join Season Pass
                </Link>
              </motion.div>
              
              {/* Private Coaching Card */}
              <motion.div className="store-style-card" variants={cardVariants}>
                <div className="card-header">
                  <h3>Private Coaching</h3>
                  <p>Work privately with Kenrick in deep 60-minute sessions designed for transformational mastery and tailored application.</p>
                </div>
                
                <div className="card-dropdowns">
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('coaching', 'what')}
                      className="dropdown-toggle"
                    >
                      <span>What You Get</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('coaching', 'what') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('coaching', 'what') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="dropdown-item">→ Deep 60-minute private sessions with Kenrick Cleveland</div>
                        <div className="dropdown-item">→ Transformational mastery focused on your specific challenges</div>
                        <div className="dropdown-item">→ Tailored application designed around your goals and context</div>
                        <div className="dropdown-item">→ Maximum impact through personalized guidance and mentorship</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('coaching', 'pricing')}
                      className="dropdown-toggle"
                    >
                      <span>Pricing Options</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('coaching', 'pricing') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('coaching', 'pricing') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="coaching-pricing-table">
                          <div className="pricing-table-header">
                            <div className="table-col">Duration</div>
                            <div className="table-col">Upfront</div>
                            <div className="table-col">Monthly</div>
                          </div>
                          <div className="pricing-table-row">
                            <div className="table-col duration">8 Weeks</div>
                            <div className="table-col price">$5,000</div>
                            <div className="table-col monthly">$3,000 × 2</div>
                          </div>
                          <div className="pricing-table-row">
                            <div className="table-col duration">6 Months</div>
                            <div className="table-col price">$8,000</div>
                            <div className="table-col monthly">$1,750 × 6</div>
                          </div>
                          <div className="pricing-table-row">
                            <div className="table-col duration">12 Months</div>
                            <div className="table-col price">$12,000</div>
                            <div className="table-col monthly">$1,500 × 12</div>
                          </div>
                        </div>
                        <p style={{ marginTop: '1rem' }}><em>Monthly payment plans available. Sessions scheduled based on your availability and coaching needs.</em></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dropdown-section">
                    <button
                      onClick={() => toggleDropdown('coaching', 'who')}
                      className="dropdown-toggle"
                    >
                      <span>Perfect For</span>
                      <svg
                        className={`dropdown-arrow ${getDropdownState('coaching', 'who') ? 'rotated' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`dropdown-content ${getDropdownState('coaching', 'who') ? 'open' : ''}`}>
                      <div className="dropdown-body">
                        <div className="dropdown-item">→ Executives needing personalized guidance for high-stakes situations</div>
                        <div className="dropdown-item">→ High-performers seeking transformation through direct mentorship</div>
                        <div className="dropdown-item">→ Professionals with specific, complex challenges requiring tailored solutions</div>
                        <div className="dropdown-item">→ Leaders who learn best through one-on-one intensive sessions</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link href="https://y82c880brez.typeform.com/to/N7h2xfEw" className="store-style-cta" target="_blank" rel="noopener noreferrer">
                  Apply for Private Coaching
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CLIENT SUCCESS */}
      <motion.section 
        className="client-success-section"
        variants={sectionVariants}
        initial="visible"
        animate="visible"
      >
        <div className="content-container">
          <div className="client-success-content">
            <motion.h3 variants={cardVariants}>Client Success</motion.h3>
            <motion.div variants={cardVariants}>
              {/* Main Client Success - Light Mode */}
              <div className="light-mode-widget">
                <Script key="senja-light-main" src="https://widget.senja.io/widget/12ebc602-357a-4524-9717-75526245fbdb/platform.js" strategy="lazyOnload" />
                <div className="senja-embed" data-id="12ebc602-357a-4524-9717-75526245fbdb" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
              
              {/* Main Client Success - Dark Mode */}
              <div className="dark-mode-widget">
                <Script key="senja-dark-main" src="https://widget.senja.io/widget/94e4c445-34ee-4620-8cd4-47b896571db2/platform.js" strategy="lazyOnload" />
                <div className="senja-embed" data-id="94e4c445-34ee-4620-8cd4-47b896571db2" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
            </motion.div>
            
            {/* ADDITIONAL TESTIMONIALS - CONDITIONAL FOR DARK/LIGHT MODE */}
            <motion.div className="additional-testimonials" variants={cardVariants}>
              {/* Dark Mode Widget */}
              <div className="dark-mode-widget">
                <Script key="senja-dark-additional" src="https://widget.senja.io/widget/3c7d117e-b080-4575-abab-b8a4895a4377/platform.js" strategy="lazyOnload" />
                <div className="senja-embed" data-id="3c7d117e-b080-4575-abab-b8a4895a4377" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
              
              {/* Light Mode Widget */}
              <div className="light-mode-widget">
                <Script key="senja-light-additional" src="https://widget.senja.io/widget/c19957c0-25d0-4d66-83f6-e861ab195cc1/platform.js" strategy="lazyOnload" />
                <div className="senja-embed" data-id="c19957c0-25d0-4d66-83f6-e861ab195cc1" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FLOATING STICKY ACTION MENU */}
      <div className="floating-action-menu">
        <div className="floating-menu-content">
          <Link href="/store" className={`${styles.ctaButton} ${styles.ctaGhost} individuals-button`} style={{ position: 'relative' }}>
            Store
            <span className="basic-badge">For Individuals</span>
          </Link>
          <Link href="/services" className={`${styles.ctaButton} ${styles.ctaGhost} companies-button`} style={{ position: 'relative' }}>
            Services
            <span className="enterprise-badge">For Companies</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
