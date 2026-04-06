import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — BB Post',
  description: 'Terms of Service for BB Post social media scheduling platform',
};

export default function TermsOfServicePage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Effective Date: November 18, 2024</p>

      <section className="mb-8">
        <p className="text-gray-300 mb-4">
          Welcome to BB Post, a social media scheduling and management platform operated by
          Business Builders. These Terms of Service govern your use of our website and Services.
          By accessing or using BB Post, you agree to these Terms.
        </p>
        <p className="text-gray-300">
          I consent to receive SMS notifications, alerts, and occasional marketing communications
          from Business Builders. Message frequency varies. Message and data rates may apply.
          Text HELP to 978-790-1002 for assistance. Reply STOP to unsubscribe at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300">
          By using BB Post, you acknowledge that you have read, understood, and agree to be bound
          by these Terms. If you do not agree, please discontinue use of the Service immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Services Provided</h2>
        <p className="text-gray-300 mb-4">BB Post provides social media management tools including:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Scheduling and publishing content to 19+ social media platforms</li>
          <li>AI-powered content generation and suggestions</li>
          <li>Analytics and performance tracking</li>
          <li>Team collaboration, approval workflows, and multi-workspace management</li>
          <li>Automation integrations (n8n, Make.com, Zapier, Webhooks, Public API)</li>
        </ul>
        <p className="text-gray-300 mt-4">
          BB Post is fully open source under AGPL&nbsp;v3. Source code is available on{' '}
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
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
        <p className="text-gray-300 mb-4">To access BB Post, you agree to:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Be at least 18 years of age</li>
          <li>Provide accurate, current, and complete registration information</li>
          <li>Maintain the confidentiality of your account and password</li>
          <li>Notify us immediately of any unauthorized account access</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We reserve the right to suspend or terminate accounts that violate these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Acceptable Use</h2>
        <p className="text-gray-300 mb-4">You agree NOT to use BB Post to:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Violate any applicable laws or regulations</li>
          <li>Post spam, illegal, harmful, threatening, or harassing content</li>
          <li>Violate the terms of service of connected social media platforms</li>
          <li>Infringe on intellectual property rights of others</li>
          <li>Engage in deceptive practices or impersonate others</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the Service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Payment and Billing</h2>
        <p className="text-gray-300">
          You agree to pay all applicable fees for services you select. Fees may include
          subscription fees and additional usage-based charges. All fees are due at the time of
          purchase or as outlined in the service agreement. We reserve the right to modify prices
          at any time with advance notice to current subscribers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Refund Policy</h2>
        <p className="text-gray-300">
          No refunds will be provided except in circumstances determined on a case-by-case basis
          at the discretion of Business Builders.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Social Platform Compliance</h2>
        <p className="text-gray-300">
          When using BB Post with third-party platforms (TikTok, Instagram, LinkedIn, YouTube, etc.),
          you agree to comply with those platforms&apos; terms of service and community guidelines.
          We are not affiliated with, endorsed by, or sponsored by any third-party platform.
          Platform API changes may affect Service functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Intellectual Property</h2>
        <p className="text-gray-300">
          You retain ownership of all content you create and upload through BB Post. By using the
          Service, you grant us a limited license to store, display, and transmit your content
          solely to provide the Service. All BB Post branding and proprietary features are the
          property of Business Builders. The open-source codebase is licensed under AGPL&nbsp;v3.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
        <p className="text-gray-300">
          BB Post is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express
          or implied, including warranties of merchantability, fitness for a particular purpose, or
          non-infringement. We do not guarantee that scheduled posts will publish successfully, as
          this depends on third-party platform availability and their API services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          To the fullest extent permitted by law, Business Builders shall not be liable for any
          damages — including direct, indirect, incidental, or consequential damages — arising from
          the use or inability to use BB Post, unauthorized access to your data, lost content,
          failed posts, or platform policy changes. Our total liability for any claims is limited
          to the amount you paid for the Service during the previous 12&nbsp;months.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">11. Termination</h2>
        <p className="text-gray-300 mb-4">
          You may delete your account at any time through account settings. We reserve the right
          to terminate your access at any time for violation of these Terms, non-payment, or at
          our discretion with reasonable notice. Upon termination, provisions regarding ownership,
          disclaimers, and limitation of liability survive.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">12. Changes to Terms</h2>
        <p className="text-gray-300">
          We may modify these Terms at any time. Changes will be posted on this page with an
          updated effective date. Your continued use of BB Post constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">13. Governing Law</h2>
        <p className="text-gray-300">
          These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard
          to its conflict of law principles. Any disputes arising from these Terms or the use of
          BB Post shall be brought in the state or federal courts located in Massachusetts, and you
          consent to the jurisdiction of such courts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">14. Contact Information</h2>
        <p className="text-gray-300 mb-4">
          For questions about these Terms, contact us at:
        </p>
        <address className="not-italic text-gray-300 space-y-1">
          <p className="font-semibold text-white">Business Builders</p>
          <p>2 Beverly Hills Dr., Rutland, MA 01543</p>
          <p>Phone: <a href="tel:9787901002" className="text-[#8B5CF6] hover:underline">978-790-1002</a></p>
          <p>Email: <a href="mailto:support@businessbuilders.com" className="text-[#8B5CF6] hover:underline">support@businessbuilders.com</a></p>
        </address>
      </section>

      <section className="border-t border-gray-700 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          By using BB Post, you acknowledge that you have read, understood, and agree to be bound
          by these Terms of Service.
        </p>
      </section>
    </article>
  );
}
