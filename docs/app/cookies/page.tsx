import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - The Power Ark',
  description: 'Cookie Policy for The Power Ark. Learn how we use cookies and tracking technologies on our website.',
}

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <strong>Last Updated:</strong> September 27, 2025
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them on The Power Ark website (thepowerark.com), what types of cookies we use, and how you can control your cookie preferences.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Essential Website Function:</strong> To ensure our website works properly and securely</li>
                <li><strong>User Experience:</strong> To remember your preferences and settings</li>
                <li><strong>Analytics:</strong> To understand how visitors use our website and improve our services</li>
                <li><strong>Marketing:</strong> To deliver relevant content and advertisements</li>
                <li><strong>Performance:</strong> To optimize website speed and functionality</li>
              </ul>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Essential Cookies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These cookies are necessary for our website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Examples:</strong> Session management, security tokens, load balancing, form data retention
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Analytics Cookies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Examples:</strong> Google Analytics, page views, bounce rate, traffic sources, user behavior patterns
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Functional Cookies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These cookies allow our website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Examples:</strong> Language preferences, theme settings (light/dark mode), remembered login information, personalized content
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Marketing Cookies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. They may be used to build a profile of your interests and show you relevant ads on other sites.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting pixels, conversion tracking, social media integration
                </p>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Some cookies on our website are set by third-party services that appear on our pages. We use several third-party services that may set cookies:
              </p>

              <div className="space-y-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    Helps us understand website usage and improve user experience.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Privacy Policy</a>
                  </p>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Facebook Pixel</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    Tracks conversions and helps us deliver relevant advertisements on Facebook.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Privacy Policy: <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Facebook Privacy Policy</a>
                  </p>
                </div>

                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Processors</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    Secure payment processing and fraud prevention (Stripe, PayPal, etc.).
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    These services have their own privacy policies and cookie practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie Duration */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Cookie Duration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Cookies can be either "session" cookies or "persistent" cookies:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Session Cookies</h4>
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    Temporary cookies that are deleted when you close your browser. Used for essential website functions and security.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Persistent Cookies</h4>
                  <p className="text-green-800 dark:text-green-300 text-sm">
                    Remain on your device for a set period (typically 30 days to 2 years) or until you delete them. Used for preferences and analytics.
                  </p>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Managing Your Cookie Preferences
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Browser Settings
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Set your browser to ask for permission before accepting cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Browser-Specific Instructions
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Chrome</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Settings → Privacy and Security → Cookies</p>
                </div>
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Firefox</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Options → Privacy & Security → Cookies</p>
                </div>
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Safari</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Preferences → Privacy → Cookies</p>
                </div>
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Edge</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Settings → Cookies and Site Permissions</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  <strong>Note:</strong> Disabling cookies may affect your experience on our website. Some features may not work properly without cookies enabled.
                </p>
              </div>
            </section>

            {/* Opt-Out Options */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Opt-Out Options
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You can opt out of specific tracking services:
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Google Analytics</span>
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Opt Out →
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Facebook Ads</span>
                  <a 
                    href="https://www.facebook.com/settings?tab=ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Opt Out →
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Network Advertising Initiative</span>
                  <a 
                    href="https://www.networkadvertising.org/choices/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Opt Out →
                  </a>
                </div>
              </div>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Updates to This Cookie Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>The Power Ark</strong><br />
                  Email: support@thepowerark.com<br />
                  Website: https://thepowerark.com
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              This Cookie Policy is effective as of September 27, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
