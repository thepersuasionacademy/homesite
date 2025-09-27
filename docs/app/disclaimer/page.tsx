import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - The Power Ark',
  description: 'Legal disclaimer for The Power Ark educational content, training materials, and business advice.',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Disclaimer
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <strong>Last Updated:</strong> September 27, 2025
          </p>

          <div className="space-y-8">
            {/* General Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. General Disclaimer
              </h2>
              <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-6">
                <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                  The information provided by The Power Ark is for educational and informational purposes only. It should not be considered as professional advice and individual results may vary.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The content, courses, training materials, and advice provided through our website, products, and services are based on our experience and research. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained herein.
              </p>
            </section>

            {/* Educational Content */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Educational Content Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                All content provided by The Power Ark, including but not limited to courses, articles, videos, podcasts, and training materials, is for educational purposes only. This content is designed to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Share knowledge and insights about psychology, influence, and persuasion</li>
                <li>Provide general guidance on business and personal development</li>
                <li>Offer strategies and techniques based on research and experience</li>
                <li>Inspire and motivate personal and professional growth</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our educational content should not be considered as personalized advice for your specific situation. We encourage you to consult with qualified professionals for advice tailored to your individual circumstances.
              </p>
            </section>

            {/* Results Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Results and Performance Disclaimer
              </h2>
              <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6">
                <p className="text-red-800 dark:text-red-200 font-semibold text-lg">
                  NO GUARANTEE OF RESULTS
                </p>
                <p className="text-red-700 dark:text-red-300 mt-2">
                  We make no guarantees regarding the results you may achieve from using our products, services, or implementing our strategies. Individual results will vary based on numerous factors.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Factors Affecting Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your results will depend on many factors, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Your current skill level and experience</li>
                <li>The time and effort you invest in learning and implementation</li>
                <li>Your specific industry, market conditions, and competition</li>
                <li>Your ability to apply the concepts and strategies effectively</li>
                <li>External economic and market factors beyond anyone's control</li>
                <li>Your commitment to consistent action and practice</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Testimonials and Case Studies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Any testimonials, case studies, or success stories shared are real experiences from actual clients or students. However, these results are not typical and should not be considered as representative of what you can expect to achieve. These examples are provided for illustrative purposes only and do not constitute a guarantee or promise of similar results.
              </p>
            </section>

            {/* Business and Financial Advice */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Business and Financial Advice Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The Power Ark provides general business education and strategies. We are not licensed financial advisors, accountants, or business consultants. Any business or financial information provided should not be considered as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Professional financial advice</li>
                <li>Investment recommendations</li>
                <li>Tax advice or guidance</li>
                <li>Legal business counsel</li>
                <li>Accounting or bookkeeping advice</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Always consult with qualified professionals (attorneys, accountants, financial advisors) before making significant business or financial decisions.
              </p>
            </section>

            {/* Health and Wellness */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Health and Wellness Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Some of our content may touch on topics related to stress management, confidence building, and personal development. This information is for educational purposes only and should not be considered as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Medical advice or treatment</li>
                <li>Mental health counseling or therapy</li>
                <li>Diagnosis of any medical or psychological condition</li>
                <li>Replacement for professional healthcare</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have concerns about your physical or mental health, please consult with qualified healthcare professionals.
              </p>
            </section>

            {/* Third-Party Content */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Third-Party Content and Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our website and materials may contain links to third-party websites, references to other experts, or recommendations for external resources. We provide these for your convenience and additional learning opportunities. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>We do not control or endorse third-party content</li>
                <li>We are not responsible for the accuracy of external information</li>
                <li>Third-party sites have their own terms and privacy policies</li>
                <li>External recommendations do not constitute our endorsement</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Always use your own judgment when evaluating third-party content or services.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To the fullest extent permitted by law, The Power Ark, its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Your use of our website, products, or services</li>
                <li>Any information, content, or materials provided</li>
                <li>Any errors or omissions in our content</li>
                <li>Any interruption or cessation of our services</li>
                <li>Any loss of data, profits, or business opportunities</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your use of our services is at your own risk, and you assume full responsibility for any decisions made based on our content.
              </p>
            </section>

            {/* Professional Conduct */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Professional and Ethical Use
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The strategies and techniques we teach are intended for ethical, professional use. We expect our students and clients to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Use influence and persuasion techniques ethically and responsibly</li>
                <li>Respect the rights and dignity of others</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Act with integrity in all business and personal interactions</li>
                <li>Not use our teachings for manipulative or harmful purposes</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not condone or support the use of our content for unethical, illegal, or harmful activities.
              </p>
            </section>

            {/* Age Restrictions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Age Restrictions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our services are intended for adults (18 years or older) or minors with parental consent. The content and strategies we teach are designed for mature audiences who can understand and apply them responsibly. Parents or guardians are responsible for monitoring their minor children's use of our services.
              </p>
            </section>

            {/* Updates and Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Updates to This Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to update this disclaimer at any time without prior notice. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated disclaimer.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Questions About This Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this disclaimer or need clarification on any points, please contact us:
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
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 text-center font-medium">
                By using The Power Ark's services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
              This Disclaimer is effective as of September 27, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
