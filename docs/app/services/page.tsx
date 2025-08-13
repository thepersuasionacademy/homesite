'use client'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e16]">
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-2 leading-tight">
            Professional Services
          </h1>
          <p className="text-xl text-[#86868b] dark:text-[#a1a1a6] max-w-3xl mx-auto mb-12">
            Transform your business with our comprehensive communication frameworks, implementation support, and strategic guidance
          </p>
          
          {/* Case Studies Section */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-6">
              Case Studies
            </h2>
            
            {/* Case Studies Carousel */}
            <div className="max-w-4xl mx-auto">
              {/* Case Study Navigation Pills */}
              <div className="flex justify-center gap-2 mb-6">
                <button className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-blue-600 text-white shadow-lg shadow-blue-600/25 transform scale-105">
                  Success Story #1
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-[#17171a] text-[#86868b] dark:text-[#a1a1a6] border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md">
                  Success Story #2
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-[#17171a] text-[#86868b] dark:text-[#a1a1a6] border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md">
                  Success Story #3
                </button>
              </div>
              
              {/* Video Container with Homepage Styling */}
              <div className="relative" style={{
                margin: "0 auto 2.5rem",
                maxWidth: "700px",
                position: "relative"
              }}>
                <div style={{
                  position: "relative",
                  paddingTop: "56.25%",
                  background: "#0b0e16",
                  borderRadius: "18px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.15), 0 24px 60px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  overflow: "hidden",
                  cursor: "pointer"
                }}>
                  {/* Placeholder for Case Study Video */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#f5f5f7",
                    borderRadius: "18px"
                  }}>
                    {/* Play Button */}
                    <div style={{
                      fontSize: "4rem",
                      marginBottom: "0.75rem",
                      opacity: 0.9,
                      transition: "opacity 0.3s ease"
                    }}>
                      ▶
                    </div>
                    
                    {/* Case Study Label */}
                    <h3 style={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      margin: "0 0 0.25rem 0",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
                    }}>
                      Client Success Story #1
                    </h3>
                    
                    {/* Case Study Description */}
                    <p style={{
                      fontSize: "1rem",
                      opacity: 0.7,
                      margin: 0,
                      fontWeight: 400,
                      textAlign: "center",
                      maxWidth: "300px"
                    }}>
                      How we transformed their sales process with DreamState Selling
                    </p>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div style={{
                  content: "",
                  position: "absolute",
                  inset: "-16px -24px -32px -24px",
                  borderRadius: "26px",
                  background: "radial-gradient(70% 80% at 50% 30%, rgba(0,122,255,0.12) 0%, rgba(0,0,0,0.06) 50%, transparent 75%)",
                  filter: "blur(16px)",
                  zIndex: -1,
                  pointerEvents: "none"
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-6">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Communication Frameworks Audit */}
          <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo Section */}
              <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="text-sm">Service Image</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-8">
                {/* Impact Level Badge */}
                <div className="mb-3">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    IMPACT LEVEL 1
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3">
                  Communication Frameworks Audit
                </h3>
                
                <p className="text-[#86868b] dark:text-[#a1a1a6] mb-4 leading-relaxed">
                  Our comprehensive audit examines your sales, leadership, and marketing messaging frameworks. We identify gaps, inefficiencies, and missed opportunities in your current communication approach, providing you with a detailed roadmap for improvement.
                </p>
                
                <div className="mb-4">
                  <div className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">From $5,000</div>
                  <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Tailored to your organization's needs</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Sales messaging analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Leadership communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Marketing frameworks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Gap analysis & recommendations</span>
                  </div>
                </div>
                
                <button className="w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Book a Strategy Session
                </button>
              </div>
            </div>
          </div>

          {/* Implementation Sprint */}
          <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo Section */}
              <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v15C2 19.33 2.67 20 3.5 20h17c.83 0 1.5-.67 1.5-1.5v-15C22 2.67 21.33 2 20.5 2z"/>
                    </svg>
                    <p className="text-sm">Service Image</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-8">
                {/* Impact Level Badge */}
                <div className="mb-3">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    IMPACT LEVEL 2
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3">
                  Implementation Sprint
                </h3>
                
                <p className="text-[#86868b] dark:text-[#a1a1a6] mb-4 leading-relaxed">
                  8-week intensive implementation program with your full team. We work directly with your organization to implement DreamState Selling Frameworks across sales, leadership, and marketing messaging.
                </p>
                
                <div className="mb-4">
                  <div className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">From $20,000</div>
                  <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Based on team size & scope</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">8-week guided implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Full team training & support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Custom framework adaptation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Weekly progress reviews</span>
                  </div>
                </div>
                
                <button className="w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Book a Strategy Session
                </button>
              </div>
            </div>
          </div>

          {/* Strategic Advisor Retainer */}
          <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo Section */}
              <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 6L9 10.5l-1.41-1.41L6 10.5 10.5 15 18 7.5 16.59 6.09 10.5 12 8.5 10z"/>
                    </svg>
                    <p className="text-sm">Service Image</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-8">
                {/* Impact Level Badge */}
                <div className="mb-3">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    IMPACT LEVEL 3
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3">
                  Strategic Advisor Retainer
                </h3>
                
                <p className="text-[#86868b] dark:text-[#a1a1a6] mb-4 leading-relaxed">
                  Ongoing strategic guidance from both Kenrick and Jackson. Kenrick focuses on sales and leadership while Jackson handles messaging and creative applications of communication frameworks.
                </p>
                
                <div className="mb-4">
                  <div className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">From $10,000/mo</div>
                  <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">starting retainer fee</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Direct access to Kenrick & Jackson</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Monthly strategy sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Priority support & consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#86868b] dark:text-[#a1a1a6]">Flexible engagement terms</span>
                  </div>
                </div>
                
                <button className="w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Book a Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
