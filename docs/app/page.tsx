'use client'

import { Link } from 'nextra-theme-docs'
import type { FC } from 'react'
import { useEffect } from 'react'
import styles from './page.module.css'
import './page.css'
import { motion, AnimatePresence } from 'framer-motion'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.08 } }
}
const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } }
}

const IndexPage: FC = () => {
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
              The World's Leading Mastery Platform for Influence Psychology
            </motion.div>
            
            <motion.h1 className="hero-headline" variants={heroItem}>
              Turn Influence Psychology Into Your <br className="max-sm:hidden" />
              Competitive Edge
            </motion.h1>
            
            <motion.p className="hero-subheadline" variants={heroItem}>
              Wield the frameworks that turn dreams into reality for you and others... using the power of authentic influence.
            </motion.p>
            
            {/* VIDEO */}
            <motion.div className="hero-video" variants={videoVariants}>
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p className="video-label">2-Min Gateway VSL</p>
                <p className="video-description">Hook → Authority → Benefit → Proof → Dual CTA</p>
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="content-container">
          <div className="pioneers-content">
            <motion.h2 className="section-headline" variants={cardVariants}>The Founders</motion.h2>
            <motion.p className="section-description" variants={cardVariants}>
              Two visionaries whose influence reaches thousands worldwide, proving extraordinary impact comes from depth of mastery above all else.
            </motion.p>
            
            <div className="pioneers-grid">
              <motion.div className="pioneer-card" variants={cardVariants}>
                <div className="pioneer-image-section">
                  <img className="pioneer-photo" src="https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg" alt="Kenrick Cleveland" />
                </div>
                <div className="pioneer-content">
                  <div className="pioneer-info">
                    <h3>Kenrick Cleveland</h3>
                    <p className="pioneer-title">The Pioneer</p>
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
                    <p className="pioneer-title">The Synthesizer</p>
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="content-container">
          <div className="platform-content">
            <motion.h2 className="section-headline" variants={cardVariants}>The Platform</motion.h2>
            <motion.p className="section-description" variants={cardVariants}>
              Everything you need to master influence psychology, from live coaching to AI-powered practice tools.
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
                  Lab
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
                    <div className="video-placeholder">
                      <div className="play-button">▶</div>
                      <p className="video-title">Immersive Learning Library</p>
                      <p className="video-subtitle">200+ hours of structured content</p>
                    </div>
                  </div>
                </div>

                {/* TOOLS PANEL */}
                <div id="tools-panel" className="platform-panel">
                  <div className="platform-video-full">
                    <div className="video-placeholder">
                      <div className="play-button">▶</div>
                      <p className="video-title">Interactive Training Tools</p>
                      <p className="video-subtitle">Practice makes permanent</p>
                    </div>
                  </div>
                </div>

                {/* CODEX PANEL */}
                <div id="codex-panel" className="platform-panel">
                  <div className="platform-video-full">
                    <div className="video-placeholder">
                      <div className="play-button">▶</div>
                      <p className="video-title">Codex™ AI Assistant</p>
                      <p className="video-subtitle">Your personal influence coach</p>
                    </div>
                  </div>
                </div>

                {/* SALESCRIPT PANEL */}
                <div id="salescript-panel" className="platform-panel">
                  <div className="platform-video-full">
                    <div className="video-placeholder">
                      <div className="play-button">▶</div>
                      <p className="video-title">Lab</p>
                      <p className="video-subtitle">Ready-to-use frameworks</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* EVOLUTION TIMELINE */}
      <motion.section 
        className="timeline-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="content-container">
          <div className="timeline-content">
            <motion.h2 className="section-headline" variants={cardVariants}>Evolution of The Academy</motion.h2>
            <motion.p className="section-description" variants={cardVariants}>
              From pioneering influence psychology in the 80s to cutting-edge AI training today—a journey of continuous innovation.
            </motion.p>
            
            <div className="timeline">
              <motion.div className="timeline-item" variants={timelineItemVariants}>
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">1989</div>
                    <h3>The Foundation</h3>
                  </div>
                  <p>Kenrick Cleveland revolutionizes S&L bank recovery using psychological influence principles, achieving unprecedented turnaround results.</p>
                </div>
              </motion.div>
              
              <motion.div className="timeline-item" variants={timelineItemVariants}>
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">1995</div>
                    <h3>First Academy Programs</h3>
                  </div>
                  <p>Launch of systematic training programs teaching ethical persuasion and influence psychology to business professionals.</p>
                </div>
              </motion.div>
              
              <motion.div className="timeline-item" variants={timelineItemVariants}>
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2005</div>
                    <h3>Digital Transformation</h3>
                  </div>
                  <p>Online learning platform launches, making influence psychology training accessible to professionals worldwide.</p>
                </div>
              </motion.div>
              
              <motion.div className="timeline-item" variants={timelineItemVariants}>
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2015</div>
                    <h3>Corporate Partnerships</h3>
                  </div>
                  <p>Major Fortune 500 companies adopt Academy frameworks, scaling impact across enterprise sales teams.</p>
                </div>
              </motion.div>
              
              <motion.div className="timeline-item" variants={timelineItemVariants}>
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2020</div>
                    <h3>Remote Revolution</h3>
                  </div>
                  <p>Virtual coaching and live training sessions maintain human connection while expanding global reach during pandemic.</p>
                </div>
              </motion.div>
              
              <motion.div className="timeline-item" variants={timelineItemVariants}>
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2025</div>
                    <h3>AI-Powered Future</h3>
                  </div>
                  <p>Codex™ AI assistant launches, combining 35+ years of psychological frameworks with personalized coaching technology.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* AUTHORITY FOOTER */}
      <section className="authority-footer">
        <div className="content-container">
          <div className="footer-content">
            <h3>Ready to Transform Your Influence?</h3>
            <p>Join thousands of professionals who've mastered the psychology of persuasion.</p>
            <div className="footer-stats">
              <div className="stat-item">
                <strong>45 years</strong>
                <span>refining the craft</span>
              </div>
              <div className="stat-item">
                <strong>$350M+</strong>
                <span>client revenue gains</span>
              </div>
              <div className="stat-item">
                <strong>1,200+</strong>
                <span>certified persuaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STICKY ACTION MENU */}
                  <div className="floating-action-menu">
              <div className="floating-menu-content">
                <Link href="/products" className={`${styles.ctaButton} ${styles.ctaGhost}`} style={{ position: 'relative' }}>
                  Catalogue
                  <span className="basic-badge">A La Carte</span>
                </Link>
                <Link href="/season-pass" className={`${styles.ctaButton} ${styles.ctaGhost}`} style={{ position: 'relative' }}>
                  Season Pass
                  <span className="all-access-badge">All Access</span>
                </Link>
                <Link href="/sales-enablement" className={`${styles.ctaButton} ${styles.ctaGhost} enterprise-button`}>
                  Sales Enablement
                  <span className="enterprise-badge">Enterprise</span>
                </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
