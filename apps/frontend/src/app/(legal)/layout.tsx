import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#0E0E0E] min-h-screen w-screen text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="mb-8">
          <Link href="/auth">
            <Image width={60} height={60} src="/logo.png" alt="BB Post" />
          </Link>
        </div>
        <div className="bg-[#1A1919] rounded-xl p-8 md:p-12">
          {children}
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <Link href="/privacy" className="hover:text-white mr-4">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white mr-4">Terms of Service</Link>
          <Link href="/data-deletion" className="hover:text-white">Data Deletion</Link>
        </div>
      </div>
    </div>
  );
}
