import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - The Power Ark',
  description: 'Privacy Policy for The Power Ark. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <strong>Last Updated:</strong> September 27, 2025
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Power Ark ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thepowerark.com or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Purchase products or services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us via email or contact forms</li>
                <li>Participate in surveys or promotions</li>
                <li>Engage with our content or services</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This personal information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account credentials (username, password)</li>
                <li>Demographic information (age, gender, interests)</li>
                <li>Professional information (job title, company, industry)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage patterns:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of visits</li>
                <li>Device information (screen size, device type)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze website traffic, and for marketing purposes. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and payments</li>
                <li>Sending you important updates about your account or purchases</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Personalizing your experience on our website</li>
                <li>Analyzing website usage and improving our services</li>
                <li>Detecting and preventing fraud or security issues</li>
                <li>Complying with legal obligations</li>
                <li>Enforcing our terms and conditions</li>
              </ul>
            </section>

            {/* Information Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Service Providers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may share your information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Payment processing</li>
                <li>Email marketing services</li>
                <li>Website hosting and maintenance</li>
                <li>Analytics and data analysis</li>
                <li>Customer support services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Legal Requirements
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may disclose your information if required to do so by law or in response to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Legal process or government requests</li>
                <li>Court orders or subpoenas</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Investigation of fraud or security issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Business Transfers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure payment processing systems</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for processing (where applicable)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To exercise these rights, please contact us at support@thepowerark.com. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            {/* Marketing Communications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Marketing Communications
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With your consent, we may send you marketing communications about our products, services, and educational content. You can opt out of these communications at any time by clicking the unsubscribe link in our emails or contacting us directly. Please note that you may still receive transactional emails related to your account or purchases.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Third-Party Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your privacy rights.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
              This Privacy Policy is effective as of September 27, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
