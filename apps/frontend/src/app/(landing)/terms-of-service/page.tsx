import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — BB Post',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#8B5CF6] hover:underline text-sm mb-8 inline-block">
          ← Back to BB Post
        </Link>
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-white/60 mb-8">Effective Date: November 18, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80 leading-relaxed">
          <p>
            Welcome to BB Post, a social media scheduling and management platform operated by
            Business Builders. These Terms of Service govern your use of our website and Services.
            By accessing or using BB Post, you agree to these Terms.
          </p>

          <p>
            I consent to receive SMS notifications, alerts, and occasional marketing communications
            from Business Builders. Message frequency varies. Message and data rates may apply.
            Text HELP to 978-790-1002 for assistance. You can reply STOP to unsubscribe at any time.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
          <p>
            By using BB Post, you acknowledge that you have read, understood, and agree to be bound
            by these Terms. If you do not agree with any part of these Terms, please discontinue
            use of the Service immediately.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Services Provided</h2>
          <p>BB Post provides social media management tools including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Scheduling and publishing content to 19+ social media platforms.</li>
            <li>AI-powered content generation and suggestions.</li>
            <li>Analytics and performance tracking.</li>
            <li>Team collaboration, approval workflows, and multi-workspace management.</li>
            <li>Automation integrations (n8n, Make.com, Zapier, Webhooks, Public API).</li>
          </ul>
          <p>
            BB Post is fully open source under{' '}
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              className="text-[#8B5CF6] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AGPL&nbsp;v3
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/BusinessBuilders/BB-Post"
              className="text-[#8B5CF6] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Account Registration</h2>
          <p>To access BB Post, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Be at least 18 years of age.</li>
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Maintain the confidentiality of your account and password.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
          <p>
            You are solely responsible for all activities that occur under your account. We reserve
            the right to suspend or terminate accounts that violate these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Acceptable Use</h2>
          <p>You must not use BB Post to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Violate any applicable laws or regulations.</li>
            <li>Post spam, illegal, harmful, threatening, or harassing content.</li>
            <li>Violate the terms of service of connected social media platforms.</li>
            <li>Infringe on the intellectual property rights of others.</li>
            <li>Engage in deceptive practices or impersonate others.</li>
            <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Payment and Billing</h2>
          <p>
            You agree to pay all applicable fees for services you select. Fees may include
            subscription fees and additional usage-based charges. All fees are due at the time of
            purchase or as outlined in the service agreement. We reserve the right to modify prices
            at any time, with advance notice to current subscribers.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Refund Policy</h2>
          <p>
            No refunds will be provided except in circumstances determined on a case-by-case basis
            at the discretion of Business Builders.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Social Platform Compliance</h2>
          <p>
            When using BB Post with third-party platforms (TikTok, Instagram, LinkedIn, YouTube,
            etc.), you agree to comply with those platforms&apos; terms of service and community
            guidelines in addition to these Terms. We are not affiliated with, endorsed by, or
            sponsored by any third-party platform. Platform API changes may affect Service
            functionality.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">8. Intellectual Property</h2>
          <p>
            You retain ownership of all content you create and upload through BB Post. By using the
            Service, you grant us a limited license to store, display, and transmit your content
            solely to provide the Service. All BB Post branding, design, and proprietary features
            are the property of Business Builders. The open-source codebase is licensed under
            AGPL&nbsp;v3.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">9. Disclaimer of Warranties</h2>
          <p>
            BB Post is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            express or implied, including warranties of merchantability, fitness for a particular
            purpose, or non-infringement. We do not guarantee that scheduled posts will publish
            successfully, as this depends on third-party platform availability and API services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Business Builders shall not be liable for any
            damages — including direct, indirect, incidental, or consequential damages — arising
            from the use or inability to use BB Post, unauthorized access to or alteration of your
            data, lost content, failed posts, or platform policy changes. Our total liability for
            any claims is limited to the amount you paid for the Service during the previous
            12&nbsp;months.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">11. Termination</h2>
          <p>
            You may delete your account at any time through account settings. We reserve the right
            to suspend or terminate your access at any time for violation of these Terms, non-payment,
            or at our discretion with reasonable notice. Upon termination, provisions regarding
            ownership, disclaimers, and limitation of liability survive.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">12. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. Changes will be posted on this page with an
            updated effective date. Your continued use of BB Post after changes constitutes
            acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of Massachusetts, without
            regard to its conflict of law principles. Any disputes arising from these Terms or the
            use of BB Post shall be brought in the state or federal courts located in Massachusetts,
            and you consent to the jurisdiction of such courts.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">14. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <address className="not-italic space-y-1 mt-2">
            <p className="font-semibold text-white">Business Builders</p>
            <p>2 Beverly Hills Dr., Rutland, MA 01543</p>
            <p>
              Phone:{' '}
              <a href="tel:9787901002" className="text-[#8B5CF6] hover:underline">
                978-790-1002
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:support@businessbuilders.com" className="text-[#8B5CF6] hover:underline">
                support@businessbuilders.com
              </a>
            </p>
          </address>
        </div>
      </div>
    </main>
  );
}
