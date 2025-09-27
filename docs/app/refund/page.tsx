import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy - The Power Ark',
  description: 'Refund Policy for The Power Ark products and services. Learn about our refund terms and conditions.',
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Refund Policy
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <strong>Last Updated:</strong> September 27, 2025
          </p>

          <div className="space-y-8">
            {/* General Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. General Refund Policy
              </h2>
              <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6">
                <p className="text-red-800 dark:text-red-200 font-semibold text-lg">
                  All sales are final. We do not offer refunds on any products or services unless specifically stated for a particular offer at the time of purchase.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This policy applies to all digital products, courses, coaching programs, consultations, and other services offered by The Power Ark. By making a purchase, you acknowledge and agree to this no-refund policy.
              </p>
            </section>

            {/* Exceptions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Limited Exceptions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Refunds may be considered only in the following exceptional circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Technical Issues
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you experience technical issues that prevent you from accessing purchased digital content and we are unable to resolve the issue within 30 days of your report, we may offer a refund at our sole discretion.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Duplicate Purchases
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you accidentally make a duplicate purchase of the same product within 24 hours, we may refund the duplicate purchase upon verification.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Fraudulent Transactions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If your payment was processed fraudulently without your authorization, we will work with you and your financial institution to resolve the matter.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Special Offer Guarantees
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Some specific products or services may include a satisfaction guarantee or refund policy that differs from this general policy. Such guarantees will be clearly stated at the time of purchase and will override this general policy for those specific items only.
              </p>
            </section>

            {/* Digital Products */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Digital Products and Content
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Due to the nature of digital products and educational content:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>All digital downloads, courses, and educational materials are non-refundable once accessed</li>
                <li>You receive immediate access to purchased content upon payment completion</li>
                <li>The value is delivered instantly upon access to the materials</li>
                <li>We cannot "take back" knowledge or information once it has been accessed</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We encourage you to carefully review product descriptions, previews, and testimonials before making a purchase decision.
              </p>
            </section>

            {/* Services and Coaching */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Services and Coaching Programs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For coaching services, consultations, and live programs:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Payment is required in full before services begin</li>
                <li>No refunds are provided once services have commenced</li>
                <li>Missed appointments or sessions are non-refundable</li>
                <li>Rescheduling may be available subject to availability and advance notice</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are committed to delivering exceptional value in all our services. If you have concerns about your experience, please contact us immediately so we can address any issues.
              </p>
            </section>

            {/* Subscription Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Subscription Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For any subscription-based services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>You may cancel your subscription at any time to prevent future charges</li>
                <li>Cancellation does not entitle you to a refund for the current billing period</li>
                <li>You will retain access to subscription benefits until the end of your current billing period</li>
                <li>No partial refunds are provided for unused portions of subscription periods</li>
              </ul>
            </section>

            {/* Chargeback Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Chargeback Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Initiating a chargeback or dispute with your credit card company or payment provider instead of contacting us directly is considered a breach of these terms. If you initiate a chargeback:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Your access to all purchased products and services will be immediately suspended</li>
                <li>You may be banned from future purchases</li>
                <li>We reserve the right to pursue legal action for fraudulent chargebacks</li>
                <li>You will be responsible for any chargeback fees and legal costs incurred</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We encourage you to contact us first at support@thepowerark.com to resolve any issues before involving your payment provider.
              </p>
            </section>

            {/* Refund Request Process */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Refund Request Process
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you believe your situation qualifies for one of the limited exceptions listed above:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Contact us at support@thepowerark.com within 7 days of your purchase</li>
                <li>Include your order number, purchase date, and detailed explanation of the issue</li>
                <li>Provide any relevant documentation or evidence</li>
                <li>Allow up to 5-7 business days for our team to review your request</li>
                <li>We will respond with our decision and next steps if applicable</li>
              </ol>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All refund requests are reviewed on a case-by-case basis and approval is at our sole discretion.
              </p>
            </section>

            {/* Processing Time */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Refund Processing Time
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If a refund is approved under the limited exceptions above, processing times are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-4">
                <li>Credit card refunds: 5-10 business days</li>
                <li>PayPal refunds: 3-5 business days</li>
                <li>Bank transfers: 7-14 business days</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Refund processing times may vary depending on your financial institution.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Questions and Support
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions about this refund policy or need assistance with a purchase, please contact us:
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>The Power Ark Support</strong><br />
                  Email: support@thepowerark.com<br />
                  Website: https://thepowerark.com<br />
                  Response Time: Within 24-48 hours during business days
                </p>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Policy Updates
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to update this refund policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy. This policy does not affect purchases made before the policy change.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              This Refund Policy is effective as of September 27, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
