import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion',
  description: 'How to request deletion of your data',
};

export default function DataDeletionPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-2">Data Deletion Instructions</h1>
      <p className="text-gray-400 mb-8">How to delete your data from our platform</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Deleting Your Account</h2>
        <p className="text-gray-300 mb-4">
          You can request deletion of your account and all associated data at any time.
          When you delete your account, we will remove:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
          <li>Your profile information (name, email, profile picture)</li>
          <li>All connected social media account tokens</li>
          <li>Scheduled and draft posts</li>
          <li>Analytics data</li>
          <li>Team memberships and organization data</li>
          <li>All other data associated with your account</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Request Deletion</h2>
        <p className="text-gray-300 mb-4">
          To delete your account and all associated data, please send an email to:
        </p>
        <p className="text-white font-semibold text-lg mb-4">
          <a href="mailto:privacy@business-builder.online" className="underline hover:text-blue-400">
            privacy@business-builder.online
          </a>
        </p>
        <p className="text-gray-300 mb-4">
          Please include the following in your email:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Subject line: &quot;Account Deletion Request&quot;</li>
          <li>The email address associated with your account</li>
          <li>Confirmation that you want to permanently delete your account</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Facebook Data</h2>
        <p className="text-gray-300 mb-4">
          If you connected your Facebook account to our service and wish to remove access:
        </p>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Go to your Facebook Settings &rarr; Apps and Websites</li>
          <li>Find our app and click &quot;Remove&quot;</li>
          <li>This will revoke our access to your Facebook data</li>
          <li>To also delete data stored on our servers, follow the account deletion process above</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Processing Time</h2>
        <p className="text-gray-300 mb-4">
          We will process your deletion request within 30 days. You will receive a confirmation
          email once your data has been deleted.
        </p>
        <p className="text-gray-300">
          Please note that some data may be retained for legal compliance purposes as described
          in our <a href="/privacy" className="underline hover:text-blue-400">Privacy Policy</a>.
        </p>
      </section>

      <section className="border-t border-gray-700 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          For any questions about data deletion, contact us at{' '}
          <a href="mailto:privacy@business-builder.online" className="underline">
            privacy@business-builder.online
          </a>
        </p>
      </section>
    </article>
  );
}
