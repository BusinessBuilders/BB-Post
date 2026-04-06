import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — BB Post',
  description: 'Privacy Policy for BB Post social media scheduling platform',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Effective Date: February 26, 2026</p>

      <section className="mb-8">
        <p className="text-gray-300 mb-4">
          BB Post is an open-source social media management platform operated by Business Builders,
          licensed under AGPL&nbsp;v3. This Privacy Policy describes how we collect, use, and protect
          your information when you use BB Post.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Consent to Receive Communications</h2>
        <p className="text-gray-300 mb-4">
          By providing your phone number, you consent to receive SMS notifications, alerts, and
          occasional marketing communications from Business Builders.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Message frequency varies.</li>
          <li>Message &amp; data rates may apply.</li>
          <li>Text HELP to 978-790-1002 for assistance.</li>
          <li>Reply STOP to unsubscribe at any time.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.1 Account Information</h3>
        <p className="text-gray-300 mb-4">When you create a BB Post account, we collect:</p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Email address, name, and username</li>
          <li>Password (encrypted)</li>
          <li>Profile information you choose to provide</li>
          <li>Organization or company name (if applicable)</li>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.2 Social Media Account Data</h3>
        <p className="text-gray-300 mb-4">
          When you connect social media accounts, we collect OAuth tokens needed to publish on your
          behalf, profile information from connected platforms, and basic analytics as permitted by
          each platform. We do NOT store your social media passwords.
        </p>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.3 Content Data</h3>
        <p className="text-gray-300 mb-4">
          We store posts, images, videos, scheduled content, drafts, and AI-generated suggestions
          that you create through BB Post.
        </p>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.4 Usage Data</h3>
        <p className="text-gray-300">
          We automatically collect IP address, browser type, pages visited, and login timestamps to
          operate and improve the Service. We also use cookies to improve your experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>To provide and manage your BB Post account and scheduled posts</li>
          <li>To generate analytics and enable team collaboration features</li>
          <li>To send transactional emails, updates, alerts, and promotional content</li>
          <li>To process secure transactions</li>
          <li>To analyze usage trends and optimize the Service</li>
          <li>To detect and prevent fraud, abuse, or security threats</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
        <p className="text-gray-300 mb-4">
          <strong>We do not sell your personal information.</strong> We may share your information with:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>Social Media Platforms:</strong> To publish content on your behalf via their APIs</li>
          <li><strong>Service Providers:</strong> Trusted third parties (hosting, payment processing, email) under strict confidentiality</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or asset sale</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-300">
          We implement industry-standard security measures including encryption in transit (HTTPS/TLS),
          secure token storage, and access controls. While we strive to protect your data, no method
          of transmission or storage is 100% secure. You are responsible for maintaining the security
          of your account credentials.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
        <p className="text-gray-300">
          You may delete your account at any time. Upon deletion, your personal data and connected
          social account tokens are removed from our systems within 30 days. Backup copies may be
          retained for up to 90 days. We may retain certain data as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Your Rights and Choices</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Access, update, or delete your personal data</li>
          <li>Export your data in a portable format</li>
          <li>Unsubscribe from marketing emails at any time</li>
          <li>Revoke access to connected social media accounts</li>
          <li>Disable cookies via your browser settings</li>
        </ul>
        <p className="text-gray-300 mt-4">
          To exercise these rights, access your account settings or contact us at{' '}
          <a href="mailto:support@businessbuilders.com" className="text-[#8B5CF6] hover:underline">
            support@businessbuilders.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Cookies &amp; Tracking Technologies</h2>
        <p className="text-gray-300">
          We use cookies for authentication, session management, and analytics. You may disable
          cookies in your browser settings, though this may affect Service functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Third-Party Platforms</h2>
        <p className="text-gray-300">
          BB Post integrates with third-party social media platforms (TikTok, Instagram, LinkedIn,
          YouTube, Twitter/X, Facebook, etc.). Your use of those platforms is governed by their
          respective privacy policies. Our website may also contain links to external sites with
          their own privacy policies. We are not responsible for their practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. Open Source</h2>
        <p className="text-gray-300">
          BB Post is fully open source under AGPL&nbsp;v3. You can review the complete source code on{' '}
          <a
            href="https://github.com/BusinessBuilders/BB-Post"
            className="text-[#8B5CF6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Self-hosted deployments are subject to this policy only for the hosted service at
          social.business-builder.online.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
        <p className="text-gray-300">
          BB Post is not intended for users under 13 years of age. We do not knowingly collect
          personal information from children. If you believe such information has been collected,
          please contact us immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">12. Changes to This Policy</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy periodically. Changes will be posted on this page with
          an updated effective date. Your continued use of BB Post constitutes acceptance of the
          updated policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">13. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          For privacy-related questions or to exercise your rights, contact us at:
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
          By using BB Post, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </section>
    </article>
  );
}
