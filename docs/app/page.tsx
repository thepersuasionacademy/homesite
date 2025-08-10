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
              The Leading Platform For Applied Persuasion Psychology
            </motion.div>
            
            <motion.h1 className="hero-headline" variants={heroItem}>
              Master the Psychological Patterns of Authentic Influence
            </motion.h1>
            
            <motion.p className="hero-subheadline" variants={heroItem}>
              Learn and apply the most powerful language, strategies, and frameworks for influencing yourself and others... with world-class training and AI tech
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

      {/* CLIENT SUCCESS */}
      <motion.section 
        className="client-success-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="content-container">
          <div className="client-success-content">
            <motion.h3 variants={cardVariants}>Client Success</motion.h3>
            <motion.div variants={cardVariants}>
              {/* Main Client Success - Light Mode */}
              <div className="light-mode-widget">
                <script src="https://widget.senja.io/widget/12ebc602-357a-4524-9717-75526245fbdb/platform.js" type="text/javascript" async></script>
                <div className="senja-embed" data-id="12ebc602-357a-4524-9717-75526245fbdb" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
              
              {/* Main Client Success - Dark Mode */}
              <div className="dark-mode-widget">
                <script src="https://widget.senja.io/widget/94e4c445-34ee-4620-8cd4-47b896571db2/platform.js" type="text/javascript" async></script>
                <div className="senja-embed" data-id="94e4c445-34ee-4620-8cd4-47b896571db2" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
            </motion.div>
            
            {/* ADDITIONAL TESTIMONIALS - CONDITIONAL FOR DARK/LIGHT MODE */}
            <motion.div className="additional-testimonials" variants={cardVariants}>
              {/* Dark Mode Widget */}
              <div className="dark-mode-widget">
                <script src="https://widget.senja.io/widget/3c7d117e-b080-4575-abab-b8a4895a4377/platform.js" type="text/javascript" async></script>
                <div className="senja-embed" data-id="3c7d117e-b080-4575-abab-b8a4895a4377" data-mode="shadow" data-lazyload="false" style={{display: 'block', width: '100%'}}></div>
              </div>
              
              {/* Light Mode Widget */}
              <div className="light-mode-widget">
                <script src="https://widget.senja.io/widget/c19957c0-25d0-4d66-83f6-e861ab195cc1/platform.js" type="text/javascript" async></script>
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
