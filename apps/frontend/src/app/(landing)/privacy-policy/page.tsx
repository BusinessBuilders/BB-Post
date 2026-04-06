import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — BB Post',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#8B5CF6] hover:underline text-sm mb-8 inline-block">
          ← Back to BB Post
        </Link>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-8">Effective Date: February 26, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80 leading-relaxed">
          <p>
            BB Post is an open-source social media management platform operated by Business Builders,
            licensed under AGPL&nbsp;v3. This Privacy Policy describes how we collect, use, and
            protect your information when you use BB Post.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Consent to Receive Communications</h2>
          <p>
            By providing your phone number, you consent to receive SMS notifications, alerts, and
            occasional marketing communications from Business Builders.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Message frequency varies.</li>
            <li>Message &amp; data rates may apply.</li>
            <li>Text HELP to 978-790-1002 for assistance.</li>
            <li>Reply STOP to unsubscribe at any time.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Information We Collect</h2>
          <h3 className="text-lg font-semibold text-white/90 mt-4">A. Personal Information</h3>
          <p>
            When you create a BB Post account or fill out a form, we collect information such as your
            name, email address, and phone number. Payment details (such as credit card numbers) are
            securely processed by third-party payment processors and are not stored on our servers.
          </p>
          <h3 className="text-lg font-semibold text-white/90 mt-4">B. Social Account Tokens</h3>
          <p>
            When you connect social media accounts (TikTok, Instagram, LinkedIn, etc.), we store the
            OAuth tokens needed to publish content on your behalf. We access only the permissions you
            explicitly grant.
          </p>
          <h3 className="text-lg font-semibold text-white/90 mt-4">C. Automatically Collected Information</h3>
          <p>
            We may collect data such as IP address, browser type, and activity on our site. We also
            use cookies to improve your experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>To provide and manage your BB Post account and scheduled posts.</li>
            <li>To generate analytics and enable team collaboration features.</li>
            <li>To personalize and improve site functionality.</li>
            <li>To send transactional emails, updates, alerts, and promotional content.</li>
            <li>To process secure transactions.</li>
            <li>To analyze usage trends and optimize our service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Disclosure of Your Information</h2>
          <p>We may share your information:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>With trusted service providers (e.g., payment processors, email delivery services).</li>
            <li>To comply with legal obligations.</li>
            <li>To protect our rights, safety, or that of others.</li>
            <li>In the event of a merger, acquisition, or asset transfer.</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Data Retention</h2>
          <p>
            You may delete your BB Post account at any time. Upon deletion, your personal data and
            connected social account tokens are removed from our systems within 30 days.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Security of Your Information</h2>
          <p>
            We take reasonable precautions to safeguard your data, but no online transmission is
            100% secure. While we strive to protect your personal data, we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Your Rights and Choices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access, update, or delete your personal data at any time.</li>
            <li>Unsubscribe from marketing emails at any time.</li>
            <li>Disable cookies via your browser settings.</li>
          </ul>
          <p>
            For privacy-related requests, please contact us at{' '}
            <a href="mailto:support@businessbuilders.com" className="text-[#8B5CF6] hover:underline">
              support@businessbuilders.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">8. Cookies &amp; Tracking Technologies</h2>
          <p>
            We use cookies to remember user preferences and analyze traffic. You may disable cookies
            in your browser settings, but this may affect site functionality.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">9. Third-Party Platforms &amp; Links</h2>
          <p>
            BB Post integrates with third-party social media platforms (TikTok, Instagram, LinkedIn,
            etc.). Your use of those platforms is governed by their respective privacy policies. Our
            website may also contain links to external sites that have their own privacy policies. We
            are not responsible for their content or practices.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">10. Open Source</h2>
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
            . You can review the complete source code on{' '}
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

          <h2 className="text-2xl font-semibold text-white mt-8">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy periodically. Any changes will be posted on this page, and your
            continued use of BB Post indicates acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">12. Children&apos;s Privacy</h2>
          <p>
            BB Post is not intended for children under 13, and we do not knowingly collect personal
            information from them. If you believe such information has been collected, please contact
            us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">13. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
