import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - The Power Ark',
  description: 'Get in touch with The Power Ark. Contact us for support, questions, or business inquiries.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Contact Us
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            We're here to help. Get in touch with us for support, questions, or business inquiries.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  {/* Email Support */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      📧 Email Support
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      For general inquiries, technical support, and customer service:
                    </p>
                    <a 
                      href="mailto:support@thepowerark.com" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      support@thepowerark.com
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Response time: Within 24-48 hours during business days
                    </p>
                  </div>

                  {/* Business Inquiries */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      💼 Business Inquiries
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      For partnerships, media requests, and business opportunities, please contact:
                    </p>
                    <a 
                      href="mailto:support@thepowerark.com?subject=Business%20Inquiry" 
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium"
                    >
                      support@thepowerark.com
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Please include "Business Inquiry" in your subject line
                    </p>
                  </div>

                  {/* Website */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      🌐 Website
                    </h3>
                    <a 
                      href="https://thepowerark.com" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://thepowerark.com
                    </a>
                  </div>
                </div>
              </section>

              {/* Business Hours */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h2>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email Support:</strong> Monday - Friday, 9:00 AM - 5:00 PM (EST)<br />
                    <strong>Response Time:</strong> Within 24-48 hours during business days<br />
                    <strong>Weekend/Holiday:</strong> Limited support, responses by next business day
                  </p>
                </div>
              </section>
            </div>

            {/* Contact Form Area */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Quick Contact
                </h2>
                
                <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-3">
                    📬 Send us an email directly
                  </h3>
                  <p className="text-red-800 dark:text-red-300 mb-4">
                    For the fastest response, send us an email with your question or concern. Include as much detail as possible to help us assist you better.
                  </p>
                  <a 
                    href="mailto:support@thepowerark.com?subject=Contact%20from%20Website"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Common Questions
                </h2>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      How do I access my purchased products?
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      After purchase, you'll receive an email with access instructions. If you don't receive it within 15 minutes, check your spam folder or contact support.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      What is your refund policy?
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      All sales are final unless specifically stated otherwise for a particular offer. See our <a href="/refund" className="text-blue-600 dark:text-blue-400 hover:underline">Refund Policy</a> for details.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Where do I access my account?
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      For new accounts: <a href="https://app.thepowerark.com" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">app.thepowerark.com</a><br />
                      For legacy accounts: <a href="https://my.thepowerark.com" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">my.thepowerark.com</a>
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      How can I update my account information?
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Contact us at support@thepowerark.com with your current and updated information, and we'll help you make the necessary changes.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Do you offer custom training or consulting?
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Yes! For custom training, consulting, or speaking engagements, contact us at <a href="mailto:support@thepowerark.com?subject=Custom%20Training%20Inquiry" className="text-red-600 dark:text-red-400 hover:underline">support@thepowerark.com</a> with your requirements.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                About The Power Ark
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We're dedicated to empowering individuals and organizations with the psychology of influence, persuasion, and human motivation. Our evidence-based approaches help people achieve authentic success and meaningful results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What We Offer
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Educational courses and training programs</li>
                    <li>• Business psychology consulting</li>
                    <li>• Leadership development resources</li>
                    <li>• Sales and negotiation training</li>
                    <li>• Personal development content</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect With Us
              </h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.youtube.com/@kenrickcleveland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
                <a 
                  href="https://www.linkedin.com/in/kenrick-cleveland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
