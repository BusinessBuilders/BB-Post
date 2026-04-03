import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our social media scheduling platform',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'December 22, 2025';

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-300 mb-4">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you use our social media scheduling and management platform (&quot;Service&quot;). By using
          our Service, you consent to the data practices described in this policy.
        </p>
        <p className="text-gray-300">
          We are committed to protecting your privacy and handling your data with transparency and care.
          Please read this Privacy Policy carefully.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.1 Account Information</h3>
        <p className="text-gray-300 mb-4">
          When you create an account, we collect:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Email address</li>
          <li>Name and username</li>
          <li>Password (encrypted)</li>
          <li>Profile information you choose to provide</li>
          <li>Organization or company name (if applicable)</li>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.2 Social Media Account Data</h3>
        <p className="text-gray-300 mb-4">
          When you connect social media accounts to our Service, we collect:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Access tokens and refresh tokens to post on your behalf</li>
          <li>Profile information from connected platforms (name, username, profile picture)</li>
          <li>Page/channel IDs and names for business accounts</li>
          <li>Basic analytics and engagement data as permitted by each platform</li>
        </ul>
        <p className="text-gray-300 mb-4">
          We do NOT store your social media passwords. We use secure OAuth authentication
          provided by each platform.
        </p>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.3 Content Data</h3>
        <p className="text-gray-300 mb-4">
          We store content you create through our Service:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>Posts, images, and videos you upload</li>
          <li>Scheduled content and publishing times</li>
          <li>Draft content</li>
          <li>AI-generated suggestions (if you use AI features)</li>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-gray-200">2.4 Usage Data</h3>
        <p className="text-gray-300 mb-4">
          We automatically collect:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>IP address and approximate location</li>
          <li>Browser type and device information</li>
          <li>Pages visited and features used</li>
          <li>Login timestamps and session duration</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">We use collected information to:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Provide, maintain, and improve our Service</li>
          <li>Authenticate your identity and manage your account</li>
          <li>Schedule and publish content to your connected social media accounts</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Send important service updates and notifications</li>
          <li>Analyze usage patterns to improve user experience</li>
          <li>Detect and prevent fraud, abuse, or security threats</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
        <p className="text-gray-300 mb-4">
          <strong>We do not sell your personal information.</strong> We may share your information with:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Social Media Platforms:</strong> To publish content on your behalf using their APIs
          </li>
          <li>
            <strong>Service Providers:</strong> Third-party services that help us operate (hosting,
            payment processing, analytics) under strict confidentiality agreements
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, legal process, or to protect
            our rights and safety
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale
            of assets
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement industry-standard security measures including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Encryption of data in transit (HTTPS/TLS)</li>
          <li>Encryption of sensitive data at rest</li>
          <li>Secure token storage for social media connections</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication requirements</li>
        </ul>
        <p className="text-gray-300 mt-4">
          While we strive to protect your information, no method of transmission or storage is 100%
          secure. You are responsible for maintaining the security of your account credentials.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
        <p className="text-gray-300 mb-4">
          We retain your information for as long as your account is active or as needed to provide
          our Service. Upon account deletion:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Account data is deleted within 30 days</li>
          <li>Published content remains on the respective social platforms</li>
          <li>Backup copies may be retained for up to 90 days</li>
          <li>We may retain certain data as required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
        <p className="text-gray-300 mb-4">Depending on your location, you may have rights to:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Delete your account and data</li>
          <li>Export your data in a portable format</li>
          <li>Opt out of marketing communications</li>
          <li>Revoke access to connected social media accounts</li>
          <li>Object to certain data processing</li>
        </ul>
        <p className="text-gray-300 mt-4">
          To exercise these rights, access your account settings or contact us directly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Cookies and Tracking</h2>
        <p className="text-gray-300 mb-4">
          We use cookies and similar technologies for:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Authentication and session management</li>
          <li>Remembering your preferences</li>
          <li>Analytics and performance monitoring</li>
        </ul>
        <p className="text-gray-300 mt-4">
          You can control cookies through your browser settings, though this may affect Service
          functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Third-Party Platforms</h2>
        <p className="text-gray-300 mb-4">
          When you connect social media accounts, those platforms&apos; privacy policies also apply.
          We encourage you to review:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Facebook/Meta Privacy Policy</li>
          <li>Instagram Privacy Policy</li>
          <li>YouTube/Google Privacy Policy</li>
          <li>LinkedIn Privacy Policy</li>
          <li>Twitter/X Privacy Policy</li>
          <li>TikTok Privacy Policy</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We are not responsible for the privacy practices of these third-party platforms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. International Data Transfers</h2>
        <p className="text-gray-300">
          Your information may be transferred and processed in countries other than your own.
          We ensure appropriate safeguards are in place, including standard contractual clauses
          where applicable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
        <p className="text-gray-300">
          Our Service is not intended for users under 18 years of age. We do not knowingly collect
          information from children. If we learn we have collected information from a child, we
          will delete it promptly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">12. Changes to This Policy</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy periodically. We will notify you of significant changes
          via email or through the Service. Your continued use after changes constitutes acceptance
          of the updated policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">13. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          For privacy-related questions or to exercise your rights, contact us at:
        </p>
        <p className="text-gray-300">
          Email: privacy@business-builder.online
        </p>
      </section>

      <section className="border-t border-gray-700 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          By using our Service, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </section>
    </article>
  );
}
