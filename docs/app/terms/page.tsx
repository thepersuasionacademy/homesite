import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - The Power Ark',
  description: 'Terms and Conditions, Privacy Policy, and legal information for The Power Ark services and website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms and Conditions
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <strong>Last Updated:</strong> September 27, 2025
          </p>

          <div className="space-y-8">
            {/* Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using The Power Ark website (thepowerark.com) and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on The Power Ark's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on The Power Ark's website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Power Ark at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The materials on The Power Ark's website are provided on an 'as is' basis. The Power Ark makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Further, The Power Ark does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            {/* Educational Content */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Educational Content and Professional Advice
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The content provided on The Power Ark website, including articles, courses, and training materials, is for educational and informational purposes only. This content is not intended as professional advice and should not be construed as such. Always consult with qualified professionals before making business, legal, financial, or personal decisions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Results from using our methods and techniques may vary. Individual results depend on various factors including but not limited to personal commitment, application of techniques, and individual circumstances.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Limitations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In no event shall The Power Ark or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Power Ark's website, even if The Power Ark or a The Power Ark authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Accuracy of Materials
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The materials appearing on The Power Ark's website could include technical, typographical, or photographic errors. The Power Ark does not warrant that any of the materials on its website are accurate, complete, or current. The Power Ark may make changes to the materials contained on its website at any time without notice. However, The Power Ark does not make any commitment to update the materials.
              </p>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Power Ark has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Power Ark of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Modifications
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Power Ark may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Information We Collect
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number when you voluntarily provide it</li>
                <li><strong>Usage Data:</strong> How you interact with our website, pages visited, time spent</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>To provide and improve our services</li>
                <li>To communicate with you about our products and services</li>
                <li>To send you educational content and updates (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Information Sharing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Service providers who assist in operating our website</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners for joint marketing efforts (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Security
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Your Rights
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how your data is used</li>
              </ul>
            </section>

            {/* Refund Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Refund Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>All sales are final.</strong> We do not offer refunds on any products or services unless specifically stated for a particular offer at the time of purchase.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                No Refunds Policy
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>All digital products, courses, and training materials are sold with no refunds</li>
                <li>All coaching and consulting services are sold with no refunds</li>
                <li>All other products and services are sold with no refunds</li>
                <li>Refunds will only be provided if explicitly stated in the specific offer or product description</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Exceptions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If a specific product or service includes a refund guarantee, the terms of that guarantee will be clearly stated on the product page or in the offer details. Such guarantees are exceptions to this general no-refunds policy and will include specific conditions and timeframes.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For questions about this policy, contact us at support@thepowerark.com.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All content on The Power Ark website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, data compilations, and software, is the property of The Power Ark or its content suppliers and is protected by copyright laws. The compilation of all content on this site is the exclusive property of The Power Ark and is protected by copyright laws.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>The Power Ark, LLC</strong><br />
                  Email: support@thepowerark.com<br />
                  Website: https://thepowerark.com
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              These terms and conditions are effective as of September 27, 2025 and will remain in effect except with respect to any changes in their provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
