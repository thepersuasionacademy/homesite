'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ConqueringConfidencePage = () => {
  return (
    <>
      <style jsx>{`
        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .section-padding {
          padding: 2rem 1rem;
        }
        
        @media (min-width: 640px) {
          .section-padding {
            padding: 3rem 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .section-padding {
            padding: 4rem 2rem;
          }
        }
      `}</style>

      <main className="min-h-screen bg-white dark:bg-[#0b0e16]">

      <section id="hero" className="flex items-center justify-center relative overflow-hidden pb-6 sm:pb-8 bg-white dark:bg-[#0b0e16]">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-black rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="section-padding w-full z-10 !pt-4">
          <div className="max-w-7xl mx-auto">
            {/* Top Headlines */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="mb-1 sm:mb-2">
                <div className="inline-block bg-black px-6 py-3 mb-2 rounded-full">
                  <p className="text-white text-base sm:text-xl font-bold italic">
                    "What if the limits you've held close were nothing more than stories in your head?"
                  </p>
                </div>
              </div>
              <h1 className="text-[#0b0e16] dark:text-[#f5f5f7] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
                Rewrite The Stories That Hold You Back<br className="hidden md:block" /> And <span className="bg-red-500 px-1 py-0.5 rounded font-bold text-white">Become Unstoppable</span> In 6 Weeks
              </h1>
              <h2 className="text-[#0b0e16] dark:text-[#f5f5f7] text-base sm:text-lg md:text-xl font-semibold leading-relaxed px-2 sm:px-0">
                Stop fighting invisible barriers and start living with quiet, unshakeable confidence
              </h2>
              
              {/* Kenrick's Credibility Statement */}
              <div className="text-center mb-4 mt-8">
                <div className="inline-flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://thepersuasionacademycdn.b-cdn.net/Images/2025-06-15%2020.57.36.jpg"
                      alt="Kenrick Cleveland"
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[#86868b] dark:text-[#a1a1a6] text-base sm:text-lg md:text-xl font-bold">
                      By Kenrick Cleveland
                    </p>
                    <p className="text-[#86868b] dark:text-[#a1a1a6] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                      45 years studying the psychology of human potential and helping<br className="hidden sm:block" />
                      professionals break through the invisible barriers that keep them small.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Hero Content - Stacked Layout */}
            <div className="max-w-7xl mx-auto space-y-8">
              
              {/* Video Section - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-5xl mx-auto">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://iframe.mediadelivery.net/embed/376899/16f37423-1d0b-43f7-8768-699d581ab40c"
                      className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      title="Conquering Confidence Video"
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <div className="section-padding bg-white dark:bg-[#0b0e16] !pt-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b0e16] dark:text-[#f5f5f7] mb-4">
              The Stories Running Your Life
            </h3>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-300 dark:border-gray-600 p-6 sm:p-8 rounded-xl shadow-lg mb-6 max-w-5xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-black dark:text-[#f5f5f7] font-black mb-6 leading-tight">
                You're Not Fighting Reality<br />
                <span className="text-red-600 dark:text-red-300">You're Fighting Interpretations</span>
              </p>
              <div className="space-y-4 text-left">
                <p className="text-lg sm:text-xl text-black dark:text-[#f5f5f7] font-medium leading-relaxed">
                  These narratives <span className="font-bold text-red-600 dark:text-red-300">took root when you were 5, 8, 12 years old</span> — long before you had the wisdom to question them.
                </p>
                <p className="text-lg sm:text-xl text-black dark:text-[#f5f5f7] font-medium leading-relaxed">
                  Now they operate like <span className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-bold text-black dark:text-white">invisible software</span> running in the background, making critical decisions about your life without you even knowing it.
                </p>
                <p className="text-lg sm:text-xl text-black dark:text-[#f5f5f7] font-bold italic text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
                  The question isn't whether you have these stories.<br />
                  The question is: <span className="text-red-600 dark:text-red-300">Are they running you, or are you running them?</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Side */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 border-4 border-red-500 dark:border-red-600 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="mb-3">
                  <h3 className="text-red-800 dark:text-red-300 font-black text-4xl">Old Stories</h3>
                </div>
                <div className="bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100 px-4 py-2 rounded-lg text-base font-bold border-2 border-red-400 dark:border-red-600 shadow-lg mb-3">
                  <span className="text-red-800 dark:text-red-200">RUNNING:</span> <span className="text-red-900 dark:text-red-100 font-black text-lg">Your Life</span>
                </div>
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-full text-2xl font-black inline-block shadow-lg mb-3">
                  😤 INVISIBLE BARRIERS
                </div>
                <p className="text-red-700 dark:text-red-300 font-black text-lg mt-2 uppercase tracking-wide">
                  Keeping You Small
                </p>
              </div>
              
              <ul className="space-y-4 text-red-900 dark:text-red-200">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                  <span className="font-medium text-base">"It's already too late for me to succeed"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                  <span className="font-medium text-base">"If I assert myself, I'll be punished"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                  <span className="font-medium text-base">"I don't deserve love or success"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                  <span className="font-medium text-base">"People like me don't succeed"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                  <span className="font-medium text-base">"If you ask for too much, you lose everything"</span>
                </li>
              </ul>
            </div>

            {/* Solution Side */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-4 border-black dark:border-gray-600 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="mb-3">
                  <h3 className="text-black dark:text-[#f5f5f7] font-black text-4xl">New Stories</h3>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-[#f5f5f7] px-4 py-2 rounded-lg text-base font-bold border-2 border-gray-400 dark:border-gray-600 shadow-lg mb-3">
                  <span className="text-black dark:text-[#f5f5f7]">CREATING:</span> <span className="text-black dark:text-[#f5f5f7] font-black text-lg">Your Success</span>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-4 rounded-full text-2xl font-black inline-block shadow-lg mb-3">
                  🎯 UNSTOPPABLE CONFIDENCE
                </div>
                <p className="text-black dark:text-[#f5f5f7] font-black text-lg mt-2 uppercase tracking-wide">
                  Supporting Your Dreams
                </p>
              </div>
              
              <ul className="space-y-4 text-black dark:text-[#f5f5f7]">
                <li className="flex items-start gap-3">
                  <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                  <span className="font-medium text-base">Quiet, unshakeable knowing you can handle anything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                  <span className="font-medium text-base">Natural momentum that builds without constant willpower</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                  <span className="font-medium text-base">Speaking up and shining bright in any room</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                  <span className="font-medium text-base">Moving forward despite fear or uncertainty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                  <span className="font-medium text-base">Living by stories that support your highest potential</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-black dark:text-[#f5f5f7] px-8 py-6 rounded-xl shadow-2xl max-w-4xl mx-auto border-4 border-gray-300 dark:border-gray-600">
              <p className="text-2xl sm:text-3xl font-black mb-2 text-black dark:text-[#f5f5f7]">
                The Difference?
              </p>
              <p className="text-lg sm:text-xl font-bold text-left text-black dark:text-[#f5f5f7]">
                You stop living by old interpretations that no longer serve you and start <span className="text-red-600 dark:text-red-300">rewriting the story</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Real Solution Section - Full Width Banner */}
      <div className="text-center bg-black py-6 sm:py-8 my-6 sm:my-8 border-t-4 border-b-4 border-gray-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
          The Real Solution
        </h2>
      </div>

      <div className="section-padding bg-white dark:bg-[#0b0e16]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg shadow-xl border-2 border-gray-200 dark:border-gray-600">
            <div className="space-y-4 text-lg font-medium leading-relaxed text-black dark:text-[#f5f5f7] px-2 sm:px-0">
              
              <p className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-[#f5f5f7] mb-8">
                Confidence isn't something you either have or you don't
              </p>
              
              <p>
                It's not about being extroverted or naturally charismatic. <span className="font-black text-red-600 dark:text-red-300">Confidence is simply the absence of stories that work against you</span>.
              </p>
              
              <p>
                Think about it. When you were a child, you probably climbed trees without thinking twice about falling. You asked strangers questions without worrying about seeming stupid.
              </p>
              
              <p className="text-center">
                <span className="bg-red-200 dark:bg-red-800 px-3 py-2 rounded font-black text-xl text-black dark:text-white">
                  What happened to that version of you? Stories happened.
                </span>
              </p>
              
              <p>
                Maybe someone laughed when you shared your big dream. Maybe a teacher told you to be realistic. Maybe you tried something and it didn't work out perfectly the first time.
              </p>
              
              <p>
                <span className="font-black text-red-600 dark:text-red-300">These moments planted seeds that grew into the limiting beliefs running your life today</span>.
              </p>
              
              <div className="text-center my-8 px-4 py-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-lg">
                <p className="text-xl sm:text-2xl font-bold text-black dark:text-[#f5f5f7] leading-relaxed">
                  But here's what most people don't realize about these stories...
                </p>
                <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-[#a1a1a6] mt-2">
                  They're not based on truth. They're based on interpretation.
                </p>
              </div>
              
              <p className="text-center text-xl sm:text-2xl font-black text-black dark:text-[#f5f5f7]">
                A five-year-old's interpretation. A 10-year-old's interpretation. A teenager's interpretation.
              </p>
              
              <p className="text-center text-xl sm:text-2xl font-black text-black dark:text-[#f5f5f7]">
                And you've been living by those interpretations ever since.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The System Section - Full Width Banner */}
      <div className="text-center bg-black py-6 sm:py-8 my-6 sm:my-8 border-t-4 border-b-4 border-gray-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
          The Conquering Confidence System
        </h2>
      </div>

      <div className="section-padding bg-white dark:bg-[#0b0e16]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg shadow-xl border-2 border-gray-200 dark:border-gray-600">
            <div className="copy-text space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl font-semibold leading-loose text-black dark:text-[#f5f5f7] px-2 sm:px-0">
              
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-300 dark:border-gray-600 p-8 rounded-xl shadow-lg mb-8">
                <p className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-[#f5f5f7] leading-tight">
                  Six carefully designed phases that <span className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded text-black dark:text-white">rewrite your story at the source</span>
                </p>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl font-semibold text-black dark:text-[#f5f5f7] mb-2">
                This isn't about fighting your limiting beliefs. <span className="font-bold text-red-600 dark:text-red-300">We rewrite them</span>.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-semibold text-black dark:text-[#f5f5f7] mb-2">
                Instead of trying to think your way to confidence, we imprint new neural pathways that make confidence your natural state.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-semibold text-black dark:text-[#f5f5f7] mb-8">
                Most importantly, we restore your connection to your future self - that version of you who already has what it takes.
              </p>
              
              {/* Week by Week Breakdown */}
              <div className="sm:bg-gradient-to-r sm:from-gray-50 sm:to-gray-100 dark:sm:from-gray-800 dark:sm:to-gray-700 sm:border-2 sm:border-gray-300 dark:border-gray-600 dark:sm:border-gray-600 p-0 sm:p-8 sm:rounded-lg">
                
                {/* Week 1 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-red-50 to-red-200 dark:from-red-900/20 dark:to-red-800/30 border border-red-300 dark:border-red-600 p-2 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-red-400 to-red-800 text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-bold inline-block shadow-md mb-3">
                        Week 1
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-900 dark:text-red-300">The Stories Holding You Back</h4>
                    </div>
                  
                    <div className="space-y-4 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Identify Your Invisible Programming</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Discover the specific narratives that have been shaping your life without you even knowing it</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>How Stories Form and Lock In</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Understand why certain beliefs got locked in while others didn't, and the fascinating relationship between expectations and reality</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>The Future Self Connection</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Learn why limiting narratives disconnect you from your potential and how to restore that crucial bridge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200 dark:border-gray-600 p-2 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-bold inline-block shadow-md mb-3">
                        Week 2
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 dark:text-[#f5f5f7]">Programming Yourself to Succeed</h4>
                    </div>
                  
                    <div className="space-y-4 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Success Anchors</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Create powerful psychological triggers that automatically shift you into a confident state</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>True Growth Mindset</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Develop the deep subconscious knowing that you can learn, adapt, and improve - not just the surface version</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Rebuilding the Bridge</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Begin rebuilding that crucial connection to your future self</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Week 3 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-300 dark:border-gray-600 p-2 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-gray-800 to-black text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-bold inline-block shadow-md mb-3">
                        Week 3
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-[#f5f5f7]">Mindset Detox</h4>
                    </div>

                    <div className="space-y-4 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Freedom from NOPE</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Free yourself from "No Other People's Expectations" - clear out the mental clutter that isn't even yours</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Authentic Success Definitions</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Create your own definitions of success that actually matter to you and align with who you're becoming</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Voice Clearing</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Clear the voices of parents, teachers, and society telling you who you should be</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/40 border border-red-200 dark:border-red-600 p-2 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-bold inline-block shadow-md mb-3">
                        Week 4
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-[#f5f5f7] sm:text-red-800">The Fear Destroyer</h4>
                    </div>

                    <div className="space-y-4 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Transform Fear Into Fuel</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Learn to transform fear into fuel - it's often just misdirected energy</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Pattern Interruption</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Interrupt your own limiting patterns and change how you interpret success and failure</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Fear Smart</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">This isn't about becoming fearless - it's about becoming fear smart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Week 5 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200 dark:border-gray-600 p-2 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-bold inline-block shadow-md mb-3">
                        Week 5
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 dark:text-[#f5f5f7]">Mirror, Mirror</h4>
                    </div>

                    <div className="space-y-4 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Internal-External Alignment</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Align your internal transformation with your external presence</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>See Yourself as Success</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Learn to see yourself as the success you're becoming</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Vocal Power</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Unlock your vocal power so that when you speak, people listen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Week 6 */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-300 dark:border-gray-600 p-2 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-gray-800 to-black text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl font-bold inline-block shadow-md mb-3">
                        Week 6
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-[#f5f5f7]">Becoming Unstoppable</h4>
                    </div>

                    <div className="space-y-4 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Neuroplasticity Mastery</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Harness your brain's ability to form new neural pathways and make these new stories your default programming</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Momentum Building</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Learn to build momentum and celebrate wins in a way that reinforces positive change</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                          ✓
                        </div>
                        <div className="text-left">
                          <h4 className="font-black text-lg sm:text-xl text-black dark:text-[#f5f5f7]"><span className="sm:hidden">→ </span>Future Self Connection</h4>
                          <p className="text-gray-700 dark:text-[#a1a1a6] text-base sm:text-lg">Maintain a clear connection to your future self that can guide your decisions and keep you moving forward</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <div className="bg-gray-100 dark:bg-[#17171a] border-2 border-black p-6 rounded-lg">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-[#f5f5f7] mb-4">
                      The End Result?
                    </p>
                    <p className="text-xl sm:text-2xl text-black dark:text-[#f5f5f7] mb-3 text-left">
                      You stop getting in your own way
                    </p>
                    <p className="text-xl sm:text-2xl text-black dark:text-[#f5f5f7] text-center mb-3">
                      <span className="bg-red-200 dark:bg-red-800 px-1 py-1 sm:px-3 sm:py-2 rounded font-bold text-xl sm:text-2xl text-black dark:text-white">You finally have your inner world supporting your dreams</span>
                    </p>
                    <p className="text-lg sm:text-xl text-black dark:text-[#f5f5f7] mt-3 text-left">
                      Because when your stories work <span className="font-bold text-black dark:text-[#f5f5f7]">for you</span> instead of against you, everything changes.
                    </p>
                  </div>
                </div>
                
                {/* Complete System Breakdown & Pricing */}
                <div className="mt-12">
                  <div className="sm:bg-white dark:bg-[#0b0e16] sm:border-2 sm:border-black sm:p-0 sm:p-8 sm:rounded-xl sm:shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-full text-xl font-bold inline-block shadow-md mb-3">
                        Your Complete Transformation
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-black dark:text-[#f5f5f7] mb-3">
                        The Complete Conquering Confidence System
                      </h3>
                    </div>

                    
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - What's Included */}
              <div className="space-y-6">
                <div className="space-y-6 mt-4">
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:flex w-8 h-8 bg-black rounded-full items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#a1a1a6] font-medium text-lg">
                      <span className="sm:hidden font-bold">→ </span><span className="font-black">Six weeks of transformational content</span> that rewrites your limiting stories at the source
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:flex w-8 h-8 bg-black rounded-full items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#a1a1a6] font-medium text-lg">
                      <span className="sm:hidden font-bold">→ </span><span className="font-black">Confidence imprinting sessions</span> - specialized audio that works directly with your subconscious
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:flex w-8 h-8 bg-black rounded-full items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#a1a1a6] font-medium text-lg">
                      <span className="sm:hidden font-bold">→ </span><span className="font-black">Story identification tools</span> to uncover the invisible programming running your life
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:flex w-8 h-8 bg-black rounded-full items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#a1a1a6] font-medium text-lg">
                      <span className="sm:hidden font-bold">→ </span><span className="font-black">Success anchor techniques</span> for automatic confidence triggers
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:flex w-8 h-8 bg-black rounded-full items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#a1a1a6] font-medium text-lg">
                      <span className="sm:hidden font-bold">→ </span><span className="font-black">Future self connection protocols</span> to access your full potential
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:flex w-8 h-8 bg-black rounded-full items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#a1a1a6] font-medium text-lg">
                      <span className="sm:hidden font-bold">→ </span><span className="font-black">Lifetime access</span> to all materials and future updates
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Pricing */}
              <div className="flex items-center justify-center">
                <div className="sm:bg-gradient-to-r sm:from-gray-50 sm:to-gray-100 dark:sm:from-gray-800 dark:sm:to-gray-700 sm:rounded-xl p-4 sm:p-8 sm:border-4 sm:border-black dark:sm:border-gray-600 sm:shadow-2xl w-full">
                  {/* Value Statement */}
                  <div className="text-center mb-6">
                    <p className="text-gray-600 dark:text-[#a1a1a6] text-2xl md:text-3xl font-black mb-4">Complete System</p>
                    <div className="text-gray-500 dark:text-[#a1a1a6] text-lg space-y-2 text-left">
                      <p>→ Six weeks of transformational content</p>
                      <p>→ Confidence imprinting audio sessions</p>
                      <p>→ Complete story rewriting system</p>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <p className="text-5xl md:text-6xl font-black text-black dark:text-[#f5f5f7] mb-2">$297</p>
                    <p className="text-gray-600 dark:text-[#a1a1a6] text-lg">One-time payment</p>
                  </div>
          
                  {/* CTA Button */}
                  <div className="text-center">
                    <a href="https://www.thepersuasionacademy.com/cc-cart" className="block w-full bg-red-600 text-white font-bold text-xl px-8 py-6 rounded-full mb-4 transition-all duration-300 hover:bg-red-700 hover:shadow-2xl shadow-lg transform hover:scale-105 text-center">
                      START CONQUERING CONFIDENCE
                    </a>
                    <span className="text-lg font-semibold text-gray-600 dark:text-[#a1a1a6]">
                      ⚡️ Instant Access ⚡️
                    </span>
                  </div>
                </div>
              </div>
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Choice Is Yours Section - Full Width Banner */}
      <div className="text-center bg-black py-6 sm:py-8 my-6 sm:my-8 border-t-4 border-b-4 border-gray-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
          The Choice Is Yours
        </h2>
      </div>

      <div className="section-padding bg-white dark:bg-[#0b0e16]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg shadow-xl border-2 border-gray-200 dark:border-gray-600">
            <div className="space-y-4 text-lg font-medium leading-relaxed text-black dark:text-[#f5f5f7] px-2 sm:px-0">
              <p>
                The fact that you've read this far tells me something important about you.
              </p>
              <p>
                You're not like most people who give up after the first paragraph. You're connecting with something deeper here. The message is resonating because part of you already knows this is the missing piece you've been searching for.
              </p>
              <p>
                <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-bold text-black dark:text-[#f5f5f7]">You're ready to rewrite the stories that have been holding you back</span>.
              </p>
              <p>
                This moment—right now—is your opportunity to step into that version of yourself who moves through the world with quiet, unshakeable confidence.
              </p>
              <p>
                You feel it, don't you? That sense that you're on the verge of something significant. That's your future self calling you forward.
              </p>
              <p>
                <span className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-bold text-black dark:text-white">The old stories that kept you stuck are about to become the foundation for your breakthrough</span>.
              </p>

              {/* Final CTA Box */}
              <div className="sm:bg-gradient-to-r sm:from-gray-50 sm:to-gray-100 dark:sm:from-gray-800 dark:sm:to-gray-700 sm:border-2 sm:border-black dark:sm:border-gray-600 sm:rounded-xl p-4 sm:p-6 sm:shadow-2xl text-center max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-black dark:text-[#f5f5f7] mb-6">
                  Start Conquering Confidence Today
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="text-4xl md:text-5xl font-black text-black dark:text-[#f5f5f7] mb-2">$297</p>
                  <p className="text-gray-600 dark:text-[#a1a1a6] text-base">One-time payment</p>
                </div>
                
                <a href="https://www.thepersuasionacademy.com/cc-cart" className="block w-full bg-red-600 text-white font-bold text-xl px-8 py-6 rounded-full mb-4 transition-all duration-300 hover:bg-red-700 hover:shadow-2xl shadow-lg transform hover:scale-105 text-center">
                  START CONQUERING CONFIDENCE
                </a>
                <span className="text-lg font-semibold text-gray-600 dark:text-[#a1a1a6]">
                  ⚡️ Instant Access ⚡️
                </span>
                
                <div className="space-y-2 text-sm text-gray-700 dark:text-[#a1a1a6]">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-black dark:text-[#f5f5f7]">✓</span>
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-black dark:text-[#f5f5f7]">✓</span>
                    <span>Lifetime Access</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-black dark:text-[#f5f5f7]">✓</span>
                    <span>Complete System</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Secure 256-bit SSL encrypted checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One Final Thought Section - Full Width Banner */}
      <div className="text-center bg-black py-6 sm:py-8 my-6 sm:my-8 border-t-4 border-b-4 border-gray-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
          Six Months From Now...
        </h2>
      </div>

      <div className="section-padding bg-white dark:bg-[#0b0e16]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg shadow-xl border-2 border-gray-200 dark:border-gray-600">
            <div className="copy-text space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl font-semibold leading-loose text-black dark:text-[#f5f5f7] px-2 sm:px-0">
              <p className="text-center text-2xl sm:text-3xl font-black text-black dark:text-[#f5f5f7] mb-8">
                You'll be in one of two places:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                {/* Option 1 - Stuck State */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 border-4 border-red-500 dark:border-red-600 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="mb-3">
                      <h3 className="text-red-800 dark:text-red-300 font-black text-4xl">Option 1</h3>
                    </div>
                    <div className="bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100 px-4 py-2 rounded-lg text-base font-bold border-2 border-red-400 dark:border-red-600 shadow-lg mb-3">
                      <span className="text-red-800 dark:text-red-200">STATUS:</span> <span className="text-red-900 dark:text-red-100 font-black text-lg">Same Stories</span>
                    </div>
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-full text-xl font-black inline-block shadow-lg mb-3">
                      😩 STILL STUCK
                    </div>
                    <p className="text-red-700 dark:text-red-300 font-black text-lg mt-2 uppercase tracking-wide">
                      Same Old Barriers
                    </p>
                  </div>
                  
                  <ul className="space-y-4 text-red-900 dark:text-red-200">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                      <span className="font-medium text-base">Still fighting the same battles, hitting the same walls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                      <span className="font-medium text-base">Wondering why nothing changes no matter how hard you try</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                      <span className="font-medium text-base">Feeling like you're running in place while life passes you by</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-300 font-bold text-xl">❌</span>
                      <span className="font-medium text-base">More frustrated than ever because you KNOW there's a better way</span>
                    </li>
                  </ul>
                </div>

                {/* Option 2 - Success State */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-4 border-black dark:border-gray-600 rounded-lg p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="mb-3">
                      <h3 className="text-black dark:text-[#f5f5f7] font-black text-4xl">Option 2</h3>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-[#f5f5f7] px-4 py-2 rounded-lg text-base font-bold border-2 border-gray-400 dark:border-gray-600 shadow-lg mb-3">
                      <span className="text-black dark:text-[#f5f5f7]">STATUS:</span> <span className="text-black dark:text-[#f5f5f7] font-black text-lg">Rewritten</span>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-4 rounded-full text-xl font-black inline-block shadow-lg mb-3">
                      🎯 UNSTOPPABLE
                    </div>
                    <p className="text-black dark:text-[#f5f5f7] font-black text-lg mt-2 uppercase tracking-wide">
                      Complete Confidence
                    </p>
                  </div>
                  
                  <ul className="space-y-4 text-black dark:text-[#f5f5f7]">
                    <li className="flex items-start gap-3">
                      <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                      <span className="font-medium text-base">Moving through the world with quiet, unshakeable confidence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                      <span className="font-medium text-base">Taking opportunities that used to terrify you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                      <span className="font-medium text-base">Speaking up and shining bright in every room you enter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-black dark:text-[#f5f5f7] font-bold text-xl">✅</span>
                      <span className="font-medium text-base">Living with stories that support your highest potential</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-xl sm:text-2xl font-bold">
                The difference isn't luck, talent, or circumstances.
              </p>
              
              <p className="text-center">
                <span className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded font-bold text-black dark:text-[#f5f5f7] text-xl sm:text-2xl">It's rewriting the stories that run your life.</span>
              </p>
              
              <p className="text-center">
                <span className="bg-red-200 dark:bg-red-800 px-3 py-2 rounded font-bold text-black dark:text-white text-xl sm:text-2xl">The only risk is staying where you are.</span>
              </p>

              <div className="text-center mt-8">
                <div className="inline-block sm:bg-gradient-to-r sm:from-gray-50 sm:to-gray-100 dark:sm:from-gray-800 dark:sm:to-gray-700 sm:border-2 sm:border-black dark:sm:border-gray-600 sm:rounded-xl p-4 sm:p-6 sm:shadow-2xl">
                  <div className="text-center mb-4">
                    <p className="text-6xl font-black text-black dark:text-[#f5f5f7] mb-1">$297</p>
                    <p className="text-gray-600 dark:text-[#a1a1a6] text-base">One-time payment</p>
                  </div>
                  <a href="https://www.thepersuasionacademy.com/cc-cart" className="inline-block bg-red-600 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-2xl shadow-lg transform hover:scale-105 text-center">
                    START CONQUERING CONFIDENCE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimers */}
      <div className="section-padding py-8 bg-gray-100 dark:bg-[#17171a] border-t border-gray-300 dark:border-gray-600">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600 dark:text-[#a1a1a6]">
          <p className="mb-4">
            © 2025 Kenrick Cleveland. All rights reserved. This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p>
            Results shown are not typical and your results may vary. As with any personal development program, you assume all risk related to investment and personal growth based on your own discretion and at your own potential expense.
          </p>
        </div>
      </div>
    </main>
    </>
  )
}

export default ConqueringConfidencePage
