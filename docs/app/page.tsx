'use client'

import { Link } from 'nextra-theme-docs'
import type { FC } from 'react'
import { useEffect } from 'react'
import styles from './page.module.css'
import './page.css'

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
      <section className="hero-section">
      <div className="content-container">
          <div className="hero-content">
            <h1 className="hero-headline">
              Turn Influence Psychology Into Your <br className="max-sm:hidden" />
              Competitive Edge
        </h1>
            <p className="hero-subheadline">
              Live coaching, AI tools, and proven frameworks that transform revenue teams—and the individuals who power them.
            </p>
            
            {/* VIDEO */}
            <div className="hero-video">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p className="video-label">2-Min Gateway VSL</p>
                <p className="video-description">Hook → Authority → Benefit → Proof → Dual CTA</p>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* THE PIONEERS SECTION */}
      <section className="pioneers-intro">
        <div className="content-container">
          <div className="pioneers-content">
            <h2 className="section-headline">The Pioneers</h2>
            <p className="section-description">
              Where psychology meets performance. Founded by industry legends who've spent decades perfecting 
              the art and science of ethical influence.
            </p>
            
            <div className="pioneers-grid">
              <div className="pioneer-card">
                <div className="pioneer-layout">
                  <div className="pioneer-image">
                    <span>KC</span>
                  </div>
                  <div className="pioneer-info">
                    <h3>Kenrick Cleveland</h3>
                    <p className="pioneer-title">Founder & Master Trainer</p>
                  </div>
                </div>
                <p className="pioneer-bio">
                  45 years perfecting influence psychology. From turning around failing S&L banks in '89 
                  to developing AI-powered training systems today. Kenrick has dedicated his life to understanding 
                  the deepest principles of human psychology and ethical persuasion.
                </p>
              </div>
              
              <div className="pioneer-card">
                <div className="pioneer-layout">
                  <div className="pioneer-image">
                    <span>EP</span>
                  </div>
                  <div className="pioneer-info">
                    <h3>Expert Partner</h3>
                    <p className="pioneer-title">Psychology & Implementation</p>
                  </div>
                </div>
                <p className="pioneer-bio">
                  Specialized in translating complex psychological principles into practical, 
                  measurable business results. Expert in behavioral psychology and cognitive influence patterns 
                  that drive real-world performance improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="platform-section">
        <div className="content-container">
          <div className="platform-content">
            <h2 className="section-headline">The Platform</h2>
            <p className="section-description">
              Everything you need to master influence psychology, from live coaching to AI-powered practice tools.
            </p>
            
            {/* CONNECTED PLATFORM MODAL */}
            <div className="platform-modal">
              
              {/* PLATFORM NAVIGATION PILLS - CONNECTED TO TOP */}
              <div className="platform-nav">
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
                  SaleScript
                </button>
              </div>

              {/* PLATFORM VIDEO/CONTENT AREA - CONNECTED TO BOTTOM */}
              <div className="platform-display">
                
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
                      <p className="video-title">SaleScript Generator</p>
                      <p className="video-subtitle">Ready-to-use frameworks</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVOLUTION TIMELINE */}
      <section className="timeline-section">
        <div className="content-container">
          <div className="timeline-content">
            <h2 className="section-headline">Evolution of The Academy</h2>
            <p className="section-description">
              From pioneering influence psychology in the 80s to cutting-edge AI training today—a journey of continuous innovation.
            </p>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">1989</div>
                    <h3>The Foundation</h3>
                  </div>
                  <p>Kenrick Cleveland revolutionizes S&L bank recovery using psychological influence principles, achieving unprecedented turnaround results.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">1995</div>
                    <h3>First Academy Programs</h3>
                  </div>
                  <p>Launch of systematic training programs teaching ethical persuasion and influence psychology to business professionals.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2005</div>
                    <h3>Digital Transformation</h3>
                  </div>
                  <p>Online learning platform launches, making influence psychology training accessible to professionals worldwide.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2015</div>
                    <h3>Corporate Partnerships</h3>
                  </div>
                  <p>Major Fortune 500 companies adopt Academy frameworks, scaling impact across enterprise sales teams.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2020</div>
                    <h3>Remote Revolution</h3>
                  </div>
                  <p>Virtual coaching and live training sessions maintain human connection while expanding global reach during pandemic.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content-item">
                  <div className="timeline-header">
                    <div className="timeline-year">2025</div>
                    <h3>AI-Powered Future</h3>
                  </div>
                  <p>Codex™ AI assistant launches, combining 35+ years of psychological frameworks with personalized coaching technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
