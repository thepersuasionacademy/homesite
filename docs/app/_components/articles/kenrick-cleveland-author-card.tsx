'use client'

import React from 'react';

interface KenrickClevelandAuthorCardProps {
  className?: string;
}

export function KenrickClevelandAuthorCard({ 
  className = "" 
}: KenrickClevelandAuthorCardProps) {
  return (
    <>
      <style jsx>{`
        /* Feature Pills - Homepage Style */
        .feature-pill {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4a4a50 !important;
          padding: 0.5rem 1rem !important;
          background: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(10px) !important;
          border: 1px solid rgba(0, 0, 0, 0.2) !important;
          border-radius: 25px !important;
          transition: all 0.3s ease !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05) !important;
        }

        .feature-pill:hover {
          background: rgba(255, 255, 255, 0.9) !important;
          border-color: rgba(0, 0, 0, 0.25) !important;
          transform: translateY(-1px) !important;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(0, 0, 0, 0.08) !important;
          color: #2a2a30 !important;
        }

        :global(.dark) .feature-pill {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          color: #d1d1d6 !important;
          border-radius: 25px !important;
          backdrop-filter: blur(10px) !important;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2) !important;
        }

        :global(.dark) .feature-pill:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #f5f5f7 !important;
          transform: translateY(-1px) !important;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3) !important;
        }


        /* Pioneer Card Styling - Author Version */
        .pioneer-card-author {
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: grid;
          grid-template-columns: clamp(180px, 35%, 280px) 1fr;
          overflow: hidden;
          text-align: left;
          transition: all 0.3s ease;
        }

        :global(.dark) .pioneer-card-author {
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        .pioneer-card-author:hover {
          transform: translateY(-6px);
          box-shadow:
            0 2px 6px rgba(0, 0, 0, 0.06),
            0 12px 28px rgba(0, 0, 0, 0.08);
        }

        :global(.dark) .pioneer-card-author:hover {
          box-shadow:
            0 2px 6px rgba(0, 0, 0, 0.5),
            0 16px 36px rgba(0, 0, 0, 0.6);
        }

        /* Image Section */
        .pioneer-image-section-author {
          background: #f5f5f7;
          display: grid;
          place-items: center;
          height: 100%;
          align-self: stretch;
          width: 100%;
          position: relative;
        }

        .pioneer-image-section-author::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
          pointer-events: none;
        }

        :global(.dark) .pioneer-image-section-author {
          background: #1a1a1a;
        }

        :global(.dark) .pioneer-image-section-author::after {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
        }

        .pioneer-photo-author {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          min-height: 300px;
        }

        /* Content Section */
        .pioneer-content-author {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pioneer-info-author {
          margin-bottom: 1.5rem;
        }

        .pioneer-info-author h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #0b0e16;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        :global(.dark) .pioneer-info-author h3 {
          color: #f5f5f7;
        }

        .pioneer-title-author {
          font-size: 0.875rem;
          font-weight: 600;
          color: #86868b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        :global(.dark) .pioneer-title-author {
          color: #a1a1a6;
        }

        .pioneer-bio-author {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4a4a50;
          margin: 0;
        }

        :global(.dark) .pioneer-bio-author {
          color: #d1d1d6;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .pioneer-card-author {
            grid-template-columns: 1fr !important;
            text-align: center;
          }

          .pioneer-image-section-author {
            height: 300px;
            border-radius: 16px 16px 0 0;
          }

          .pioneer-content-author {
            padding: 1.5rem;
            border-radius: 0 0 16px 16px;
          }

          .pioneer-bio-author {
            text-align: left;
          }
        }
      `}</style>
      <div className={`max-w-4xl mx-auto my-12 ${className}`}>
      {/* About the Author Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
        <div className="bg-black dark:!bg-white text-white dark:!text-black px-4 py-1 rounded-full mx-4">
          <span className="text-2xl font-bold whitespace-nowrap">
            About the Author
          </span>
        </div>
        <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
      </div>

      {/* Main Card - Pioneer Style */}
      <div className="pioneer-card-author">
        {/* Image Section - Left Side */}
        <div className="pioneer-image-section-author">
          <img 
            className="pioneer-photo-author" 
            src="https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg" 
            alt="Kenrick Cleveland" 
          />
        </div>
        
        {/* Content Section - Right Side */}
        <div className="pioneer-content-author">
          <div className="pioneer-info-author">
            <h3>Kenrick Cleveland</h3>
            
             {/* Amazon Books Pill */}
             <div className="mt-4">
        <a 
          href="https://www.amazon.com/stores/author/B0DLTPBS4T?ccs_id=fc4f4b1b-55fe-4178-8319-9fec7545fdd4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="feature-pill amazon-pill"
        >
                 55+ Amazon Books
               </a>
             </div>
          </div>
          
          <div className="space-y-4">
            <p className="pioneer-bio-author">
              For 45+ years, from roots in hypnosis and NLP to the high-stakes world of business, Kenrick has explored and mapped the entire universe of influence, 
              decoding human psychology down to its deepest layers.
            </p>
            <p className="pioneer-bio-author">
              He masterfully blends domains, disciplines, and minds, translating insights from changework into real-world business advantage.
            </p>
            <p className="pioneer-bio-author">
              What many call persuasion, Kenrick calls being a Reality Architect... shaping perception into commitment with true inner power. 
              His breakthrough P.O.W.E.R. Influence creates the path, no matter your starting point, towards levels of mastery beyond what most can imagine.
            </p>
          </div>
        </div>
      </div>
      
      {/* Endorsements Section */}
      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Endorsement 1 - Jay Abraham */}
          <div className="flex items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0 w-20 h-20">
              <img 
                src="https://thepersuasionacademycdn.b-cdn.net/Images/67fd5bb29805c1e7c9d688c9_jay%20abraham.jpeg"
                alt="Jay Abraham"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 ml-4">
              <blockquote className="text-lg text-[#0b0e16] dark:text-[#f5f5f7] italic mb-3 leading-relaxed text-left">
                "Kenrick E. Cleveland embodies <span className="bg-red-100 dark:!bg-red-900 text-red-800 dark:!text-red-200 px-2 py-1 rounded" style={{boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone'}}>the most powerful, effective, and masterful techniques</span> of persuasion and influence that have ever been taught."
              </blockquote>
              <div className="text-[#86868b] dark:text-[#a1a1a6] text-left">
                <div className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] text-lg">Jay Abraham</div>
                <div className="italic">The World's Highest Paid Business Consultant</div>
              </div>
            </div>
          </div>

          {/* Endorsement 2 - Rich Schefren */}
          <div className="flex items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0 w-20 h-20">
              <img 
                src="https://thepersuasionacademycdn.b-cdn.net/Images/rich%20schefren.jpeg"
                alt="Rich Schefren"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 ml-4">
              <blockquote className="text-lg text-[#0b0e16] dark:text-[#f5f5f7] italic mb-3 leading-relaxed text-left">
                "Kenrick tops my shortlist of people I'll reach out to when I need advice on persuading others to take a desired action. His arsenal of skills and strategies has <span className="bg-red-100 dark:!bg-red-900 text-red-800 dark:!text-red-200 px-2 py-1 rounded" style={{boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone'}}>increased my bank account by millions of dollars</span>. If you have the chance to work with Kenrick, jump on it."
              </blockquote>
              <div className="text-[#86868b] dark:text-[#a1a1a6] text-left">
                <div className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] text-lg">Rich Schefren</div>
                <div className="italic">Top Business Consultant, StrategicProfits.com</div>
              </div>
            </div>
          </div>

          {/* Endorsement 3 - Gary Bencivenga */}
          <div className="flex items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0 w-20 h-20">
              <img 
                src="https://thepersuasionacademycdn.b-cdn.net/Images/67fd6675cb9999c56cd45eac_gary-bencivenga.png"
                alt="Gary Bencivenga"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 ml-4">
              <blockquote className="text-lg text-[#0b0e16] dark:text-[#f5f5f7] italic mb-3 leading-relaxed text-left">
                "Anyone whose living depends in any way on persuading others – and that includes almost all of us – should <span className="bg-red-100 dark:!bg-red-900 text-red-800 dark:!text-red-200 px-2 py-1 rounded" style={{boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone'}}>learn and master what Kenrick has to teach</span> about the art and science of persuasion."
              </blockquote>
              <div className="text-[#86868b] dark:text-[#a1a1a6] text-left">
                <div className="font-semibold text-[#0b0e16] dark:text-[#f5f5f7] text-lg">Gary Bencivenga</div>
                <div className="italic">The World's Greatest Living Copywriter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}