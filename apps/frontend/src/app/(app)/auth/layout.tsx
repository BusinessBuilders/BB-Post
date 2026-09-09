import { getT } from '@gitroom/react/translation/get.translation.service.backend';

export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import Image from 'next/image';
import loadDynamic from 'next/dynamic';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getT();

  return (
    <div className="bg-[#0E0E0E] flex flex-1 p-[12px] gap-[12px] min-h-screen w-screen text-white">
      {/*<style>{`html, body {overflow-x: hidden;}`}</style>*/}
      <ReturnUrlComponent />
      <div className="flex flex-col py-[40px] px-[20px] flex-1 lg:w-[600px] lg:flex-none rounded-[12px] text-white p-[12px] bg-[#1A1919]">
        <div className="w-full max-w-[440px] mx-auto justify-center gap-[20px] h-full flex flex-col text-white">
          <Image width={60} height={60} src="/logo.png" alt="BBPost" />
          <div className="flex">{children}</div>
        </div>
      </div>
      {/* Truthful product panel: the upstream marquee of Postiz testimonials and the
          "20,000+ entrepreneurs" claim do not describe BBPost (removed 2026-09-09). */}
      <div className="flex-1 hidden lg:flex flex-col items-center justify-center px-[60px]">
        <div className="max-w-[760px] flex flex-col gap-[28px]">
          <div className="text-[40px] leading-[1.15] font-[600] text-center">
            Plan, publish and measure every channel
            <br />
            from one dashboard.
          </div>
          <div className="text-[18px] leading-[1.6] text-center text-[#B8B8B8]">
            BBPost is the social media scheduler built and hosted by Business
            Builders. Connect TikTok, Instagram, Facebook, LinkedIn, X, YouTube,
            Threads and more, write once, schedule across all of them, and see
            how each post performs.
          </div>
          <div className="flex justify-center gap-[10px] flex-wrap text-[14px] text-[#DADADA]">
            {[
              'Self-hosted, your data stays with you',
              'Built around each platform\'s posting rules',
              'Team workspaces and approvals',
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#2E2E2E] bg-[#151515] px-[16px] py-[8px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
