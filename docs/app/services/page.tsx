'use client'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-2 leading-tight">
            Professional Services
          </h1>
          <p className="text-xl text-[#86868b] dark:text-[#a1a1a6] max-w-3xl mx-auto mb-12">
            Harness the psychology of influence with communication frameworks that create connection, open minds, and inspire action in ways others cannot
          </p>
          
          {/* Case Studies Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
              <div className="bg-black dark:!bg-white text-white dark:!text-black px-6 py-2 rounded-full">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Case Studies
                </h2>
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
            </div>
            
            {/* Case Studies Carousel */}
            <div className="max-w-4xl mx-auto">
              {/* Case Study Navigation Pills */}
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                              <button 
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white transform scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 40%, #b91c1c 100%)',
                  boxShadow: '0 4px 8px rgba(220, 38, 38, 0.3), 0 2px 4px rgba(220, 38, 38, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(185, 28, 28, 0.8)'
                }}
              >
                Mission-Driven Founders
              </button>
                              <div className="relative group">
                <button
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-not-allowed opacity-60 nav-pill"
                  disabled
                >
                  High Ticket Salespeople
                </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Coming Soon
                  </div>
                </div>
                              <div className="relative group">
                <button
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-not-allowed opacity-60 nav-pill"
                  disabled
                >
                  Marketing Professionals
                </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Coming Soon
                  </div>
                </div>
                              <div className="relative group">
                <button
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-not-allowed opacity-60 nav-pill"
                  disabled
                >
                  Financial Advisors
                </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Coming Soon
                  </div>
                </div>
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
                  overflow: "hidden"
                }}>
                  {/* Mission-Driven Teams Video */}
                  <iframe 
                    src="https://iframe.mediadelivery.net/embed/376899/3a0a3e8d-72fe-436b-881c-3fe54e92f7af?autoplay=false&loop=false&muted=false&preload=false&responsive=true" 
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
            
            {/* Testimonial Quote */}
            <div className="max-w-4xl mx-auto mt-8 text-center">
              <blockquote className="text-lg md:text-xl text-[#0b0e16] dark:text-[#f5f5f7] italic leading-relaxed mb-4">
                "You brought our team to a place that they were rallying around and felt good about... it just continues to empower them higher and higher"
              </blockquote>
              <div className="text-[#86868b] dark:text-[#a1a1a6] font-medium">
                - Greg Horton, Founder of Mastery Martial Arts
              </div>
            </div>

            {/* Endorsements Section */}
            <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center mb-12">
                <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
                <div className="bg-black dark:!bg-white text-white dark:!text-black px-6 py-2 rounded-full">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Endorsements
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
              </div>
              
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
                      "Kenrick E. Cleveland embodies <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">the most powerful, effective, and masterful techniques</span> of persuasion and influence that have ever been taught."
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
                      "Kenrick tops my shortlist of people I'll reach out to when I need advice on persuading others to take a desired action. His arsenal of skills and strategies has <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">increased my bank account by millions of dollars</span>. If you have the chance to work with Kenrick, jump on it."
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
                      "Anyone whose living depends in any way on persuading others – and that includes almost all of us – should <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">learn and master what Kenrick has to teach</span> about the art and science of persuasion."
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
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
            <div className="bg-black dark:!bg-white text-white dark:!text-black px-6 py-2 rounded-full">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Services
              </h2>
            </div>
            <div className="flex-1 h-px bg-gray-300 dark:!bg-gray-400"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Communication Frameworks Audit */}
          <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo Section */}
              <div className="lg:w-80 h-64 lg:h-full relative overflow-hidden flex-shrink-0">
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_Architectural_blueprint_of_a_human_brain_technica_b3541cde-a690-40d4-931f-d2dda9253245_1.jpeg"
                  alt="Communication Frameworks Audit"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-8 flex flex-col">
                {/* Impact Level Badge */}
                <div className="mb-3">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    IMPACT LEVEL 1
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3">
                  Communication Frameworks Audit
                </h3>
                
                <p className="text-lg text-[#86868b] dark:text-[#a1a1a6] mb-6 leading-relaxed">
                  Our comprehensive audit examines your sales, leadership, and marketing messaging frameworks. We identify gaps, inefficiencies, and missed opportunities in your current communication approach, providing you with a detailed roadmap for improvement.
                </p>
                
                <div className="mb-6">
                  <div className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">From $5,000</div>
                  <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Tailored to your organization's needs</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base mb-8 flex-1">
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
                
                <div className="mt-auto">
                  <a 
                    href="https://y82c880brez.typeform.com/to/N7h2xfEw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Book a Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Sprint */}
          <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo Section */}
              <div className="lg:w-80 h-64 lg:h-full relative overflow-hidden flex-shrink-0">
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_Dynamic_team_collaboration_scene_multiple_profess_53e8249e-23e9-4414-9aab-adea337e4651_0.jpeg"
                  alt="Implementation Sprint"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-8 flex flex-col">
                {/* Impact Level Badge */}
                <div className="mb-3">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    IMPACT LEVEL 2
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3">
                  Frameworks Implementation Sprint
                </h3>
                
                <p className="text-lg text-[#86868b] dark:text-[#a1a1a6] mb-6 leading-relaxed">
                  8-week intensive implementation program with your full team. We work directly with your organization to implement DreamState Selling Frameworks across sales, leadership, and marketing messaging.
                </p>
                
                <div className="mb-6">
                  <div className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">From $20,000</div>
                  <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">Based on team size & scope</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base mb-8 flex-1">
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
                
                <div className="mt-auto">
                  <a 
                    href="https://y82c880brez.typeform.com/to/N7h2xfEw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Book a Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Advisor Retainer */}
          <div className="bg-white dark:bg-[#17171a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Photo Section */}
              <div className="lg:w-80 h-64 lg:h-full relative overflow-hidden flex-shrink-0">
                <img 
                  src="https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_Professional_handshake_between_business_executive_f020e470-d883-4d3e-a9b1-18566eb2a129_2.jpeg"
                  alt="Ongoing Strategic Advisory"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-8 flex flex-col">
                {/* Impact Level Badge */}
                <div className="mb-3">
                  <span className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    IMPACT LEVEL 3
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0b0e16] dark:text-[#f5f5f7] mb-3">
                  Ongoing Strategic Advisory
                </h3>
                
                <p className="text-lg text-[#86868b] dark:text-[#a1a1a6] mb-6 leading-relaxed">
                  Ongoing strategic guidance from both Kenrick and Jackson. Kenrick focuses on sales and leadership while Jackson handles messaging and creative applications of communication frameworks.
                </p>
                
                <div className="mb-6">
                  <div className="text-xl font-bold text-[#0b0e16] dark:text-[#f5f5f7]">From $10,000/mo</div>
                  <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">starting retainer fee</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base mb-8 flex-1">
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
                
                <div className="mt-auto">
                  <a 
                    href="https://y82c880brez.typeform.com/to/N7h2xfEw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-[#0b0e16] dark:bg-[#f5f5f7] text-white dark:text-[#0b0e16] py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Book a Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
