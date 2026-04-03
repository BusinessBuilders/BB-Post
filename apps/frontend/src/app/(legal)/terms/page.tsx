import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for our social media scheduling platform',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'December 22, 2025';

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using our social media scheduling and management platform (&quot;Service&quot;),
          you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to
          these Terms, you may not use the Service.
        </p>
        <p className="text-gray-300">
          These Terms constitute a legally binding agreement between you and our company. Please read
          them carefully before using the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
        <p className="text-gray-300 mb-4">
          Our Service provides social media management tools including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Scheduling and publishing content to social media platforms</li>
          <li>Managing multiple social media accounts</li>
          <li>Analytics and performance tracking</li>
          <li>AI-powered content suggestions and creation</li>
          <li>Team collaboration features</li>
          <li>Media upload and management</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
        <p className="text-gray-300 mb-4">
          To use our Service, you must:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Be at least 18 years of age</li>
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Notify us immediately of any unauthorized account access</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We reserve the right to suspend or terminate accounts that violate these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Acceptable Use</h2>
        <p className="text-gray-300 mb-4">
          You agree NOT to use the Service to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights of others</li>
          <li>Post illegal, harmful, threatening, or harassing content</li>
          <li>Distribute malware, spam, or deceptive content</li>
          <li>Impersonate others or misrepresent your identity</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the Service</li>
          <li>Violate the terms of service of connected social media platforms</li>
          <li>Engage in automated abuse or excessive API calls</li>
          <li>Resell or redistribute the Service without authorization</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Third-Party Platforms</h2>
        <p className="text-gray-300 mb-4">
          Our Service integrates with third-party social media platforms (Facebook, Instagram,
          YouTube, LinkedIn, Twitter/X, TikTok, etc.). By connecting these platforms:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>You authorize us to access and post content on your behalf</li>
          <li>You agree to comply with each platform&apos;s terms of service</li>
          <li>You understand we are not responsible for actions taken by these platforms</li>
          <li>You acknowledge platform API changes may affect Service functionality</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We are not affiliated with, endorsed by, or sponsored by any of these third-party platforms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Content Ownership</h2>
        <h3 className="text-lg font-medium mb-2 text-gray-200">6.1 Your Content</h3>
        <p className="text-gray-300 mb-4">
          You retain ownership of all content you create and upload through the Service. By using
          the Service, you grant us a limited license to store, display, and transmit your content
          solely for the purpose of providing the Service.
        </p>
        <h3 className="text-lg font-medium mb-2 text-gray-200">6.2 Responsibility for Content</h3>
        <p className="text-gray-300 mb-4">
          You are solely responsible for the content you post through the Service. We do not
          pre-screen content but may remove content that violates these Terms or applicable laws.
        </p>
        <h3 className="text-lg font-medium mb-2 text-gray-200">6.3 Our Intellectual Property</h3>
        <p className="text-gray-300">
          The Service, including its design, features, and underlying technology, is protected by
          intellectual property laws. You may not copy, modify, or reverse engineer any part of
          the Service without our written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Payment and Billing</h2>
        <p className="text-gray-300 mb-4">
          For paid features of the Service:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Fees are charged in advance on a subscription basis</li>
          <li>All payments are processed through secure third-party providers</li>
          <li>Prices may change with notice to subscribers</li>
          <li>No refunds are provided for partial subscription periods, unless required by law</li>
          <li>You are responsible for any applicable taxes</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We may offer free trials or promotional pricing at our discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
        <p className="text-gray-300 mb-4">
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Merchantability or fitness for a particular purpose</li>
          <li>Uninterrupted or error-free operation</li>
          <li>Accuracy or reliability of content</li>
          <li>Security or freedom from viruses</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We do not guarantee that scheduled posts will be published successfully, as this
          depends on third-party platform availability and their API services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>We are not liable for indirect, incidental, special, or consequential damages</li>
          <li>We are not liable for lost profits, data, or business opportunities</li>
          <li>Our total liability is limited to the amount you paid for the Service in the
              12 months preceding the claim</li>
          <li>We are not responsible for actions of third-party platforms</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Some jurisdictions do not allow limitation of liability, so these limitations may not
          apply to you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. Indemnification</h2>
        <p className="text-gray-300">
          You agree to indemnify and hold us harmless from any claims, damages, losses, or expenses
          (including legal fees) arising from your use of the Service, your content, your violation
          of these Terms, or your violation of any rights of a third party.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">11. Termination</h2>
        <p className="text-gray-300 mb-4">
          You may terminate your account at any time through your account settings or by
          contacting us.
        </p>
        <p className="text-gray-300 mb-4">
          We may suspend or terminate your access to the Service:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>For violation of these Terms</li>
          <li>For non-payment of fees</li>
          <li>For extended inactivity</li>
          <li>If required by law</li>
          <li>At our discretion with reasonable notice</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Upon termination, your right to use the Service ceases, but provisions that should
          survive (like content ownership, limitation of liability) will remain in effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">12. Changes to Terms</h2>
        <p className="text-gray-300">
          We may modify these Terms at any time. We will notify you of material changes via email
          or through the Service. Your continued use after changes become effective constitutes
          acceptance of the modified Terms. If you do not agree to the changes, you must stop
          using the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">13. Governing Law and Disputes</h2>
        <p className="text-gray-300 mb-4">
          These Terms are governed by the laws of the jurisdiction where our company is
          established, without regard to conflict of law provisions.
        </p>
        <p className="text-gray-300">
          Any disputes arising from these Terms or the Service shall first be attempted to be
          resolved through good-faith negotiation. If unresolved, disputes will be submitted to
          binding arbitration or the courts of competent jurisdiction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">14. Severability</h2>
        <p className="text-gray-300">
          If any provision of these Terms is found to be unenforceable, the remaining provisions
          will continue in full force and effect. The unenforceable provision will be modified
          to the minimum extent necessary to make it enforceable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">15. Entire Agreement</h2>
        <p className="text-gray-300">
          These Terms, together with our Privacy Policy, constitute the entire agreement between
          you and us regarding the Service and supersede any prior agreements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">16. Contact Information</h2>
        <p className="text-gray-300 mb-4">
          For questions about these Terms, contact us at:
        </p>
        <p className="text-gray-300">
          Email: legal@business-builder.online
        </p>
      </section>

      <section className="border-t border-gray-700 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          By using our Service, you acknowledge that you have read, understood, and agree to be
          bound by these Terms of Service.
        </p>
      </section>
    </article>
  );
}
